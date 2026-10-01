import { eventFamilyDescriptions } from "./EventFamilyDescriptions";
import { eventNarrative } from "./EventNarratives";

import type { EventRecord } from "./EventTypes";
import type { EventChain } from "./GodArchiveTypes";

export type EventFamily = { id: string; name: string; records: EventRecord[]; series?: EventChain };
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Keep mod sources and independent chains separate even when titles match.
export function eventFamilyKey(record: EventRecord) {
 // Families must not span separate display modules; individual event anchors stay stable.
 const anchorCategory = record.category;
 return [record.source, anchorCategory, record.chain?.id ?? "", record.entry.name.trim().toLowerCase()].join("|");
}
export function groupEventVariants(records: EventRecord[]): EventFamily[] {
 const grouped = new Map<string, EventFamily>();
 for (const record of records) {
  const key = record.chain ? record.entry.id! : eventFamilyKey(record);
  const group = grouped.get(key);
  if (group) group.records.push(record);
  else grouped.set(key, { id: record.chain ? "event-node-" + record.entry.id : "entry-event-family-" + slug(key), name: record.entry.name, records: [record] });
 }
 return [...grouped.values()];
}
export { variantLabel } from "./EventBranchLabels";

// Include overview/flow controls in archive-wide expand/collapse.
export function eventPresentationCardIds(records: EventRecord[]): string[] {
 const families = groupEventVariants(records).filter(family => family.records.length > 1);
 const series = [...new Map(records.filter(record => record.chain).map(record => [record.source + "|" + record.chain!.id, record])).values()];
 return [...families.map(family => family.id), ...series.map(record => "entry-event-series-" + record.source + "-" + record.chain!.id)].flatMap(id => [id + "-overview", id + "-flow"]);
}
export function describeEventFamily(family: EventFamily) {
 const records = family.records;
 if (records[0].entry.id?.startsWith("event-god-")) return records[0].entry.text.split("\n\n")[0];
 const description = eventFamilyDescriptions[family.name.trim().toLowerCase()];
 if (description) {
  if (family.name === "Victory" && records[0].source === "2932110698") return "Agent 战胜 Living Wilds 的野兽后，按攻守身份及野兽死亡或逃离显示对应结算。";
  return description;
 }
 const narrative = eventNarrative(records[0].eventId, records[0].entry.name);
 if (narrative) return narrative;
 if (records.every(record => record.decision.trigger === records[0].decision.trigger)) return records[0].decision.trigger;
 if (records.every(record => record.type === "INERT" && /战斗/.test(record.decision.trigger))) {
  if (family.name === "Victory") return "Agent 战斗获胜后的结算，根据对手、攻守身份及败方死亡或撤退进入对应分支。";
  if (family.name === "Defeat") return "Agent 战败并死亡后的结算，根据对手及攻守身份进入对应分支。";
  return "Agent 战敗撤退后的结算，根据对手及攻守身份进入对应分支。";
 }
 return records[0].chain?.description ?? [...new Set(records.map(record => record.decision.trigger))].join("\n");
}
export function familySelectionRule(records: EventRecord[]) {
 if (records.every(record => record.type === "MIDCHALLENGE")) return "满足条件后，按下列分支进入相应结果。";
 if (records.every(record => record.category === "ruins" && record.type === "INERT")) return "完成 Explore Ruins 后，按下列条件区分结果。";
 if (records.every(record => /plunderWreck_/.test(record.eventId))) return "完成 Plunder Shipwreck 后，按下列条件区分结果。";
 if (records.every(record => record.type === "INERT")) return "按完成任务、战斗结果或前置事件选项进入相应分支；具体入口列在图中。";
 return "按下列入口与条件区分结果。";
}
