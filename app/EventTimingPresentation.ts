import type { EventOption } from "./GodArchiveTypes";

type Profile = { scope: string; waits: Map<string, number> };
type OutcomeTiming = { option: string; probability: string; profiles: Profile[] };
const timer = /^(.*?)：选择后第 (\d+) 回合起才满足等待条件。$/;

function summarize(timings: OutcomeTiming[], totalOutcomes: number, outcomeCounts: Map<string, number>, ownId?: string, ownName?: string) {
  const targets = new Map<string, { target: string; scope: string; waits: Map<number, OutcomeTiming[]> }>();
  for (const timing of timings) for (const profile of timing.profiles) for (const [target, turns] of profile.waits) {
    const id = profile.scope + "|" + target, group = targets.get(id) ?? { target, scope: profile.scope, waits: new Map() };
    const values = group.waits.get(turns) ?? []; values.push(timing); group.waits.set(turns, values); targets.set(id, group);
  }
  const labels = (values: OutcomeTiming[]) => [...new Set(values.map(value => value.option + (value.probability &&
    (values.filter(other => other.option === value.option).length < outcomeCounts.get(value.option)!)
    ? "（" + value.probability.replace("：", "") + "结果）" : "")))].join("；");
  const shifts = new Map<number, OutcomeTiming[]>();
  const uniformShifts = targets.size > 1 && timings.every(timing => {
    const differences = [...targets.values()].map(group => {
      const profile = timing.profiles.find(profile => profile.scope === group.scope), turns = profile?.waits.get(group.target);
      return turns === undefined ? NaN : turns - Math.min(...group.waits.keys());
    });
    if (!differences.every(Number.isFinite) || new Set(differences).size !== 1) return false;
    const values = shifts.get(differences[0]) ?? []; values.push(timing); shifts.set(differences[0], values); return true;
  }) && shifts.size > 1;
  const selfNames = new Set<string>();
  const blocks = [...targets.values()].map(group => {
    const own = Boolean(ownId && group.target.includes('href="#entry-' + ownId + '"'))
      || Boolean(ownName && group.target.includes('name="' + ownName + ' 系列事件"'));
    for (const match of group.target.matchAll(/name="([^"]+)"/g)) selfNames.add(match[1]);
    const waits = [...group.waits].sort(([a], [b]) => a - b);
    const compact = targets.size === 1 && (own || !ownId);
    const heading = compact ? "" : (own ? "本事件" : group.target) + (targets.size > 1 ? "（" + group.scope + "）" : "") + "：";
    const total = waits.reduce((sum, [, values]) => sum + values.length, 0);
    if (waits.length === 1) return heading + waits[0][0] + " 回合" + (total < totalOutcomes ? "\n选择 " + labels(waits[0][1]) + " 后重置此间隔。" : "");
    return heading + "最少 " + waits[0][0] + " 回合，最多 " + waits[waits.length - 1][0] + " 回合。"
      + (uniformShifts ? "" : "\n" + waits.map(([turns, values]) => labels(values) + "：" + turns + " 回合").join("\n"));
  });
  if (uniformShifts) blocks.push([...shifts].sort(([a], [b]) => a - b).map(([shift, values]) => labels(values)
    + (shift ? "：上述间隔均增加 " + shift + " 回合。" : "：采用上述最短间隔。")).join("\n"));
  return { description: blocks.join("\n\n"), selfNames: [...selfNames] };
}

// Move wait facts out of outcome effects. Keep random outcome probabilities and
// all non-timing effects in place; different waits are summarized as exceptions.
export function extractEventTiming(options: EventOption[] | undefined, ownId?: string, ownName?: string) {
  const timings: OutcomeTiming[] = [];
  const outcomeCounts = new Map<string, number>();
  let totalOutcomes = 0;
  const cleaned = options?.map(option => ({ ...option, text: option.text.split("\n\n").map(paragraph => {
    totalOutcomes++;
    outcomeCounts.set(option.name, (outcomeCounts.get(option.name) ?? 0) + 1);
    const probability = /^(\d+(?:\.\d+)?%：)/.exec(paragraph)?.[1] ?? "";
    const lines = paragraph.slice(probability.length).split("\n");
    const kept: string[] = [], profiles: Profile[] = []; let profile: Profile | undefined;
    for (const line of lines) {
      const scope = /^计时范围：(.+)。$/.exec(line);
      if (scope) {
        if (profile?.waits.size) profiles.push(profile);
        profile = { scope: scope[1], waits: new Map() }; continue;
      }
      const wait = timer.exec(line);
      if (wait && profile) { profile.waits.set(wait[1], Number(wait[2])); continue; }
      kept.push(line);
    }
    if (profile?.waits.size) profiles.push(profile);
    if (profiles.length) timings.push({ option: option.name, probability, profiles });
    const text = kept.join("\n").trim();
    return probability + (text || "无效果。");
  }).join("\n\n") }));
  if (!timings.length) return { options: cleaned, description: "", selfNames: [] as string[] };
  return { options: cleaned, ...summarize(timings, totalOutcomes, outcomeCounts, ownId, ownName) };
}
