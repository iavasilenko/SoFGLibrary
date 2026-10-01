import type { DetailItem } from "./GodArchiveTypes";
import type { EventSourceGroup } from "./EventTypes";
import { compactActorNames, eventPlainText, formatEventConditions, formatOptionCondition, nameRelationshipActors, omitEventRepeatConditions, symbolicComparisons } from "./EventConditionPresentation";
import { linkEventConditionReferences, linkEventEffectReferences } from "./EventEffectReferences";
import { extractEventTiming } from "./EventTimingPresentation";
import { eventNarrative } from "./EventNarratives";
import { unavailableEntryIds } from "./EventAvailability";
import { verifiedEventEffects } from "./EventVerifiedEffects";
import { conditionalEventChoices } from "./EventChoiceModel";
import { combineMutualRelations, conciseStoryTime, extractOneTimeEvent, extractRepeatDetails, withoutOwnRepeatLinks } from "./EventRepeatPresentation";
import { relatedSeriesFor } from "./EventRelatedSeries";
import { concisePercentageUnits } from "./ArchiveTextPresentation";
import { eventGods } from "./EventGodClassification";
import { normalizeReferenceMarkers } from "./ArchiveReferenceMarkup";

const redundantTriggers = new Set([
  "人物关系事件检查时触发。",
  "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
]);

export function conciseEventTrigger(trigger: string) {
  return trigger === "人物关系事件检查时触发。" ? "人物关系事件"
    : trigger === "玩家 Agent 执行任务期间，在途中事件检查中抽取。" ? "任务中事件" : trigger;
}

function cleanEventText(value: string) {
  return value.split("\n").map(line => {
    if (/^此条件存在无法参与判定的后段，按当前解析器已读取部分展示。?\s*$/.test(line.trim())) return null;
    const hadReferences = /<CrossReference/.test(line);
    line = line.replace(/<CrossReference name="[^"]+" href="#entry-([^"]+)"\s*\/>/g,
      (full, id: string) => unavailableEntryIds.has(id) ? "" : full);
    if (hadReferences && !/<CrossReference/.test(line)) return null;
    return line.replace(/^[、\s]+|、\s*$/g, "").replace(/、(?:、\s*)+/g, "、")
      .replace(/(?:的)?一次性触发机会已用完，之后不再进入候选/g, "不能再次触发")
      .replace(/同时使 (.+) 的一次性剧情前提不再满足/g, "$1 不能再次触发")
      .replace(/(任务进度\s*[+−-]\d+(?:\.\d+)?)，最低为\s*0/g, "$1");
  }).filter(line => line !== null).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function normalizeTriggerConditions(text: string, relationship: boolean, names: string[], once: boolean, ownName: string, ownId?: string, omitOwnCount = false) {
  const paragraphs = text.split("\n\n").filter(paragraph => !redundantTriggers.has(paragraph));
  const index = paragraphs.findIndex(paragraph => paragraph.startsWith("触发条件\n"));
  if (index >= 0) {
    let conditions = paragraphs[index].slice("触发条件\n".length);
    conditions = omitEventRepeatConditions(conditions, names, once, ownName, omitOwnCount).replace(/回合 大于 （「([^」]+)」剧情记录 \+ (\d+)）/g,
      (_, name: string, turns: string) => "距上次「" + name.replace(/ · 进度$/, "") + "」至少 " + (Number(turns) + 1) + " 回合")
      .replace(/（回合 − 「([^」]+)」剧情记录） 大于 (\d+)/g,
        (_, name: string, turns: string) => "距上次「" + name.replace(/ · 进度$/, "") + "」至少 " + (Number(turns) + 1) + " 回合");
    paragraphs[index] = "触发条件\n" + linkEventConditionReferences(formatEventConditions(conditions, relationship), ownId);
  }
  return paragraphs.filter(paragraph => paragraph !== "触发条件\n").join("\n\n");
}

// Raw selection data stays in EventRecord.decision for relative calculations.
export function formatProbabilities(text: string) {
  return text.replace(/\b(\d+\.\d{3,})%/g, (_, value: string) => Number(Number(value).toFixed(2)) + "%")
    .replace(/^100%[：:]\s*/gm, "")
    .replace(/^(?:相对概率|概率)：100%。?\s*$/gm, "");
}

export function withoutSelectionDetails(text: string) {
  return text.split("\n").filter(line => !/^(?:抽选权重|探索抽选权重|打捞抽选权重|单次候选检查概率)：/.test(line.trim()))
    .join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

// Only merge adjacent additions with the same subject, direction and unit.
// Keep opposite signs and intervening effects in order (values may be bounded).
export function combineRepeatedEffects(text: string) {
  const lines = text.split("\n"), result: string[] = [];
  const change = /^(.*(?:好感等级|Menace|Profile|Sanity|Awareness|Gold|HP|Might|Lore|Intrigue|Command|XP)) ([+−-])(\d+(?:\.\d+)?)(%?。)$/;
  for (let index = 0; index < lines.length; index++) {
    const first = change.exec(lines[index]);
    if (!first) { result.push(lines[index]); continue; }
    let total = Number(first[3]), count = 1;
    while (index + 1 < lines.length) {
      const next = change.exec(lines[index + 1]);
      if (!next || next[1] !== first[1] || next[2] !== first[2] || next[4] !== first[4]) break;
      total += Number(next[3]); count++; index++;
    }
    result.push(count === 1 ? lines[index] : first[1] + " " + first[2] + Number(total.toFixed(8)) + first[4]);
  }
  return result.join("\n");
}

export function withoutOrdinaryEventBounds(text: string) {
  // Keep link attributes untouched while matching the linked value's name.
  const references: string[] = [], percentages = ["Shadow", "Awareness"];
  let masked = text.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, marker => {
    const index = references.push(marker) - 1, token = "\uE000" + index + "\uE001";
    if (/name="(?:Shadow|Awareness)"/.test(marker)) percentages.push(token);
    return token;
  });
  const percentageChange = new RegExp("((?:" + percentages.join("|") + ")(?:\\s*[（(]\\s*%\\s*[）)])?\\s*[+−-]\\s*\\d+(?:\\.\\d+)?(?:\\s*个?百分点)?)[，,]\\s*限制在\\s*0\\s*[–—−-]\\s*100%", "g");
  masked = masked.replace(percentageChange, "$1")
    .replace(/(HP\s*\+\s*\d+(?:\.\d+)?)[，,]\s*最高为其\s*HP\s*上限/g, "$1")
    .replace(/(Sanity\s*[+−-]\s*\d+(?:\.\d+)?)[，,]\s*最低为\s*0/g, "$1")
    .replace(/(遗迹探索深度\s*[+−-]\s*\d+(?:\.\d+)?)[，,]\s*最高为该遗迹的最大深度/g, "$1")
    .replace(/[，,]\s*受该教团影响力上限约束/g, "");
  return masked.replace(/\uE000(\d+)\uE001/g, (_, index: string) => references[Number(index)]);
}

export function conciseEventEffects(text: string) {
  text = withoutOrdinaryEventBounds(text);
  text = eventPlainText(text, value => value
    .replace(/((?:HP|任务进度)\s*[−-]\s*\d+(?:\.\d+)?)[，,]\s*(?:最高(?:为|不超过)[^；。\n]*|限制在[^；。\n]*)(?=[；。\n]|$)/g, "$1")
    .replace(/\b([AB])\s*(?:正在执行的|当前的|的)?任务进度\s*([+−-])\s*(\d+(?:\.\d+)?)/g, "$1的任务进度$2$3")
    .replace(/(\b[AB]\s*HP)\s*[−-]\s*(\d+(?:\.\d+)?)/g, "$1-$2")
    .replace(/降至\s*0\s*时死亡/g, "降至0时死亡")
    .replace(/(HP-\d+(?:\.\d+)?)[；;]\s*(?=降至0时死亡)/g, "$1，")
    .replace(/取消当前(?:任务|挑战)，不结算(?:完成)?奖励。?/g, "取消当前挑战")
    .replace(/取消当前任务。?/g, "取消当前挑战"));
  // Keep one outcome together, but start every probability on a new line.
  // Quoted link previews are metadata and retain their own formatting.
  const paragraphs = text.split("\n\n").reduce<string[]>((parts, paragraph) => {
    if (/^\d+(?:\.\d+)?%[：:]/.test(paragraph)) {
      const inline = eventPlainText(paragraph, value => value.replace(/\s*\n+\s*/g, " "));
      if (parts.length && /^\d+(?:\.\d+)?%[：:]/.test(parts[parts.length - 1])) parts[parts.length - 1] += "\n" + inline;
      else parts.push(inline);
    } else parts.push(paragraph);
    return parts;
  }, []).join("\n\n");
  return concisePercentageUnits(eventPlainText(paragraphs, value => value.replace(/[ \t]+(?=\d+(?:\.\d+)?%[：:])/g, "\n")));
}

// Merge identical, adjacent collectible rewards within one outcome only.
// Distinct probabilities and intervening effects retain their original order.
export function combineRepeatedRewards(text: string) {
  return text.split("\n\n").map(outcome => {
    const probability = /^(\d+(?:\.\d+)?%[：:])/.exec(outcome)?.[1] ?? "";
    const body = eventPlainText(outcome.slice(probability.length), value => value.replace(/。\s+(?=(?:获得|得到)\s*(?:随从|物品|组件))/g, "。\n"));
    const lines = body.split("\n"), result: string[] = [];
    for (let index = 0; index < lines.length; index++) {
      const reward = /^(.*(?:获得|得到))\s*(随从|物品|组件)\s+(.+)$/.exec(lines[index]);
      if (!reward) { result.push(lines[index]); continue; }
      let count = 1;
      while (lines[index + 1]?.trim() === lines[index].trim()) { count++; index++; }
      result.push(count === 1 ? lines[index] : reward[1].trimEnd() + " " + count + " 个" + reward[2] + " " + reward[3]);
    }
    return probability + result.join("\n");
  }).join("\n\n");
}

export function presentEventItems(items: DetailItem[]): DetailItem[] {
  const byId = new Map(items.filter(item => item.id).map(item => ["entry-" + item.id, item]));
  const ordinal = new Map<DetailItem, number>();
  const counts = new Map<string, number>();
  for (const item of items) {
    if (!item.eventChain) continue;
    const key = item.eventChain.id;
    const number = Number(/节点\s*(\d+)/.exec(item.meta ?? "")?.[1]) || (counts.get(key) ?? 0) + 1;
    ordinal.set(item, number); counts.set(key, number);
  }
  return items.map(sourceItem => {
    const item = conciseStoryTime({ ...sourceItem, text: normalizeReferenceMarkers(sourceItem.text),
      eventOptions: sourceItem.eventOptions?.map(option => ({ ...option,
        text: normalizeReferenceMarkers(option.text), condition: option.condition ? normalizeReferenceMarkers(option.condition) : undefined,
      })),
    });
    if (!item.eventCategory && !item.eventOptions) return item;
    const rewrite = (value: string) => combineRepeatedEffects(cleanEventText(withoutOwnRepeatLinks(formatProbabilities(withoutSelectionDetails(normalizeReferenceMarkers(value))), item))
      .replace(/<CrossReference name="([^"]+)" href="#([^"]+)"\s*\/>/g, (full, name: string, hash: string) => {
        const target = byId.get(hash);
        if (!item.eventChain || !target?.eventChain || target.eventChain.id !== item.eventChain.id) return full;
        const number = ordinal.get(target);
        return number ? "节点 " + number : name;
      })
      .replace(/节点 \d+(?:、节点 \d+)+/g, list => {
        const numbers = [...new Set(list.match(/\d+/g) ?? [])].map(Number).sort((a, b) => a - b);
        return "节点 " + numbers.join("、");
      }));
    const once = extractOneTimeEvent(item, item.eventOptions?.map(option => ({ ...option, text: cleanEventText(option.text) })));
    const repeat = extractRepeatDetails(item, once.options, once.globalOnce);
    const timing = extractEventTiming(repeat.options, item.id, item.name);
    const relationship = item.eventCategory === "relationships" || item.meta?.startsWith("人物关系") || item.text.split("\n\n").includes("人物关系事件检查时触发。");
    return {
      ...item, eventCategory: relationship && !item.eventChain && item.eventCategory !== "gods" ? "relationships" : item.eventCategory,
      text: symbolicComparisons(rewrite([normalizeTriggerConditions(item.text, relationship, [...timing.selfNames, ...(once.once || repeat.omitOwnCount ? [item.name] : [])], once.once, item.name, item.id, repeat.omitOwnCount), repeat.description].filter(Boolean).join("\n\n"))),
      eventRepeat: { ...item.eventRepeat, ...(once.once ? { once: true } : {}), ...(timing.description ? { interval: compactActorNames(rewrite(timing.description)) } : {}) },
      eventOptions: timing.options?.map(option => ({
        ...option, text: /^abandon challenge$/i.test(option.name.trim()) ? "取消当前挑战" : conciseEventEffects(linkEventEffectReferences(compactActorNames(combineMutualRelations(rewrite(combineRepeatedRewards(combineRepeatedEffects(nameRelationshipActors(option.text)))))), item.id)) || "无效果。", condition: option.condition ? linkEventConditionReferences(rewrite(formatOptionCondition(option.condition)), item.id) : undefined,
      })),
      eventComparison: item.eventComparison ? { ...item.eventComparison, changes: item.eventComparison.changes.map(rewrite) } : undefined,
    };
  });
}

export function presentEventGroups(groups: EventSourceGroup[]): EventSourceGroup[] {
  // Identical chain IDs from different mods must never share node numbering.
  return groups.map(group => {
    const records = group.records.map(record => {
      // Both later noble-friendship nodes are unreachable; its surviving start
      // is an ordinary relationship event, not a one-node event chain.
      const chain = record.chain?.id === "noble-connections" ? null : record.chain ?? relatedSeriesFor(record) ?? null;
      const gods = eventGods(record);
      const category = gods.length ? "gods" as const : chain?.mode === "related" ? "chains" as const : record.type === "P2P" && !chain ? "relationships" as const : record.category;
      return { ...record, gods, chain, anchorCategory: record.category, category, entry: { ...record.entry, eventGods: gods,
        meta: record.chain && !chain ? "人物关系" : record.entry.meta,
        eventChain: chain ?? undefined, eventCategory: category } };
    });
    const entries = presentEventItems(records.map(record => verifiedEventEffects(conditionalEventChoices(record), record.eventId)));
    return { ...group, records: records.map((record, index) => {
      const narrative = record.gods?.length && record.entry.id?.startsWith("event-god-") ? "" : eventNarrative(record.eventId, record.entry.name);
      return { ...record, entry: { ...entries[index], text: [narrative, entries[index].text].filter(Boolean).join("\n\n") } };
    }) };
  });
}
