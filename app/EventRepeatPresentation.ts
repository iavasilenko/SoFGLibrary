import type { DetailItem, EventOption } from "./GodArchiveTypes";

export function eventRepeatText(item: DetailItem) {
  return [item.eventRepeat?.once ? "一次性事件" : "", item.eventRepeat?.interval ? "触发间隔\n" + item.eventRepeat.interval : ""].filter(Boolean).join("\n\n");
}

function isOwnReference(marker: string, item: DetailItem) {
  const name = /name="([^"]+)"/.exec(marker)?.[1] ?? "";
  if (item.id) return marker.includes('href="#entry-' + item.id + '"')
    || !item.eventChain && name === item.name + " 系列事件";
  return name === item.name;
}

function isSameEntryReference(marker: string, item: DetailItem) {
  return item.id ? marker.includes('href="#entry-' + item.id + '"')
    : /name="([^"]+)"/.exec(marker)?.[1] === item.name;
}

function onlyOwnReferences(line: string, item: DetailItem) {
  const references = [...line.matchAll(/<CrossReference\b[^>]*\/>/g)];
  return references.length > 0 && references.every(match => isSameEntryReference(match[0], item));
}

function ownRestriction(line: string, item: DetailItem) {
  return /不能再次触发。|再次通过剧情条件。|只在尚未发生时进入候选；选项在第 1 回合或之后结算便会阻止再次触发。/.test(line)
    && [...line.matchAll(/<CrossReference\b[^>]*\/>/g)].some(match => isOwnReference(match[0], item));
}

export function withoutOwnRepeatLinks(text: string, item: DetailItem) {
  return text.split("\n").map(line => {
    if (onlyOwnReferences(line, item)) {
      if (/的相关要求：|由此状态控制的条件不再满足|本组选项没有建立有效冷却|的这一时间条件选择后即满足/.test(line)) return null;
      const unlock = /的 (.+) 选项：这一剧情前提满足，可继续参与判定。$/.exec(line);
      if (unlock) return "解锁 " + unlock[1] + " 选项。";
      if (ownRestriction(line, item) && /^本局内，/.test(line)) return "该事件本局不能再次触发。";
    }
    return line.replace(/<CrossReference\b[^>]*\/>/g, marker => isSameEntryReference(marker, item) ? "本事件" : marker)
      .replace(/更新 本事件 的次数限制/g, "更新本事件的次数限制");
  }).filter(line => line !== null).join("\n");
}

// A dead self-timer/count cannot undo a global once-only lock. Conversely,
// timers for another event, per-person locks and choice-dependent limits stay.
export function extractRepeatDetails(item: DetailItem, options: EventOption[] | undefined, globalOnce: boolean) {
  const outcomes = options?.flatMap(option => option.text.split("\n\n").map(outcome =>
    outcome.replace(/^\d+(?:\.\d+)?%：/, "").split("\n"))) ?? [];
  const ownCount = (line: string) => line.startsWith("本局的 " + item.name + " 的累计选择次数 ");
  const deadCount = globalOnce && outcomes.some(lines => lines.some(ownCount));
  const limitLine = (line: string) => onlyOwnReferences(line, item) ? /共用最多 (\d+) 次的限制/.exec(line) : null;
  const limits = outcomes.map(lines => lines.map(limitLine).find(Boolean));
  const limit = !globalOnce && outcomes.length && outcomes.every(lines => lines.includes("本局的相关事件共用计数 +1。"))
    && limits.every(Boolean) && new Set(limits.map(match => match && match[1])).size === 1 ? limits[0]![1] : "";
  const explanations = (outcomes[0] ?? []).filter(line => /次并非无条件上限：/.test(line)
    && outcomes.every(lines => lines.includes(line)));
  const cleaned = options?.map(option => ({ ...option, text: option.text.split("\n\n").map(outcome => {
    const probability = /^\d+(?:\.\d+)?%：/.exec(outcome)?.[0] ?? "";
    const kept = outcome.slice(probability.length).split("\n").filter(line => {
      if (deadCount && ownCount(line)) return false;
      if (globalOnce && onlyOwnReferences(line, item) && /等待条件|时间窗口|的相关要求：|这一时间条件/.test(line)) return false;
      if (limit && (limitLine(line) || line === "本局的相关事件共用计数 +1。")) return false;
      return !explanations.includes(line);
    });
    return probability + (kept.join("\n").trim() || "无效果。");
  }).join("\n\n") }));
  return { options: cleaned, omitOwnCount: deadCount || Boolean(limit), description: [
    limit ? "触发次数\n本局最多触发 " + limit + " 次。" : "",
    explanations.length ? "触发限制\n" + explanations.join("\n") : "",
  ].filter(Boolean).join("\n\n") };
}

// An event is once-only only if every possible outcome of every choice blocks
// that same event. A choice-dependent ending is not a global once-only event.
export function extractOneTimeEvent(item: DetailItem, options: EventOption[] | undefined) {
  const outcomes = options?.flatMap(option => option.text.split("\n\n")) ?? [];
  // Venality can offer another paid favour after its 161-turn wait, setting
  // all three cleared flags again. Its follow-up is not permanently once-only.
  const rearmable = item.id === "event-3261852980-maeredux-midchp2p-venal-hero-as-agreed-upon";
  const once = !rearmable && outcomes.length > 0 && outcomes.every(outcome => outcome.split("\n").some(line => ownRestriction(line, item)));
  const globalOnce = once && outcomes.every(outcome => outcome.split("\n").some(line => /^\d+(?:\.\d+)?%：/.test(line)
    ? /^本局/.test(line.replace(/^\d+(?:\.\d+)?%：/, "")) && ownRestriction(line, item)
    : /^本局/.test(line) && ownRestriction(line, item)));
  if (!once) return { options, once: false, globalOnce: false };
  return { once, globalOnce, options: options?.map(option => ({ ...option, text: option.text.split("\n\n").map(outcome => {
    const probability = /^(\d+(?:\.\d+)?%：)/.exec(outcome)?.[1] ?? "";
    const lines = outcome.slice(probability.length).split("\n").flatMap(line => {
      if (!ownRestriction(line, item)) return [line];
      const remaining = line.replace(/(<CrossReference\b[^>]*\/>)(?: 的 [^、。\n]+ 选项)?/g, (full, marker: string) => isOwnReference(marker, item) ? "" : full)
        .replace(/、(?:、\s*)+/g, "、").replace(/(内，|会阻止 )、/g, "$1").replace(/、 (?=不能|再次)/g, " ");
      return /<CrossReference/.test(remaining) ? [remaining] : [];
    });
    return probability + (lines.join("\n").trim() || "无效果。");
  }).join("\n\n") })) };
}

// These are presentation-only edits to the requested named exception. Its raw
// JSON, state keys and execution order remain available in the source audit.
export function conciseStoryTime(item: DetailItem) {
  if (item.id !== "event-base-fog-p2p-iastur-story-time") return item;
  return { ...item, eventOptions: item.eventOptions?.map((option, index) => ({ ...option,
    text: option.text.split("\n").map(line => {
      if (line.startsWith("更新 ") && line.includes("的次数限制：")) return '更新 <CrossReference name="Story time" href="#entry-event-base-fog-p2p-iastur-story-time" /> 的次数限制：另两个选项的累计选择次数达到 4 后，该事件不再触发。';
      if (index > 0 && line.startsWith("另外两个选项的共用选择次数")) return "";
      return line;
    }).filter(Boolean).join("\n"),
  })) };
}

export function combineMutualRelations(text: string) {
  return text.split("\n\n").map(outcome => {
    const prefix = /^(\d+(?:\.\d+)?%：)/.exec(outcome)?.[1] ?? "";
    const lines = outcome.slice(prefix.length).split("\n"), result: string[] = [];
    const relation = /^人物 ([AB])对人物 ([AB])的好感等级 ([+−-])(\d+(?:\.\d+)?)。$/;
    for (let index = 0; index < lines.length; index++) {
      const first = relation.exec(lines[index]), second = relation.exec(lines[index + 1] ?? "");
      if (first && second && first[1] === second[2] && first[2] === second[1] && first[1] !== first[2]
        && first[3] === second[3] && first[4] === second[4]) {
        result.push("AB 之间互相好感等级" + first[3] + first[4] + "。"); index++;
      } else result.push(lines[index]);
    }
    return prefix + result.join("\n");
  }).join("\n\n");
}
