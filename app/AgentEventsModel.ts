import type { DetailItem } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { agentEventBindings, agentEventNotes } from "./AgentEventBindings";
import { eventGroups } from "./EventCatalogueModel";
import { describeEventFamily, groupEventVariants } from "./EventVariantModel";
import { eventRepeatText } from "./EventRepeatPresentation";

const records = eventGroups.flatMap(group => group.records);
const byId = new Map(records.map(record => [record.entry.id!, record]));
const families = groupEventVariants(records).filter(family => family.records.length > 1);
const previews = new Map<string, { name: string; text: string; image?: string; category: string }>();
const titles = { gods: "神祇限定事件", tasks: "任务中事件", relationships: "人物关系事件", other: "其他事件", ruins: "遗迹事件", chains: "系列事件" };
for (const record of records) previews.set("entry-" + record.entry.id, {
 name: record.entry.name,
 text: [record.entry.text, eventRepeatText(record.entry), (record.entry.eventOptions ?? []).map(option => option.name + (option.condition ? "\n条件：" + option.condition : "") + "\n" + option.text).join("\n\n")].filter(Boolean).join("\n\n"),
 image: record.entry.image, category: titles[record.category],
});
for (const family of families) previews.set(family.id + "-overview", {
 name: family.name + " 系列事件", text: describeEventFamily(family),
 image: family.records[0].entry.image, category: titles[family.records[0].category],
});
const plain = (text: string) => text.replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1").replaceAll('"', "“");

// Shared events stay canonical. This page projects only this Agent's entries/options.
// Same-Agent references stay local; other events link to the event catalogue with a
// complete preview, so mobile never needs to navigate merely to read the result.
function reference(name: string, hash: string, localIds: Map<string, string>) {
 const local = localIds.get(hash);
 if (local) return '<CrossReference name="' + name + '" href="#' + local + '" />';
 const preview = previews.get(hash);
 return '<CrossReference name="' + name + '" href="?page=events#' + hash + '" meta="' + (preview?.category ?? "事件")
  + '" text="' + plain(preview?.text ?? "查看事件资料库中的对应分类。") + '"'
  + (preview?.image ? ' image="' + preview.image + '"' : "") + ' />';
}
export type AgentEventSource = { id: string; name: string; items: DetailItem[]; records: EventRecord[] };
export function getAgentEvents(agentId: string): AgentEventSource[] {
 const bindings = agentEventBindings[agentId] ?? [];
 const localId = (id: string) => "agent-" + agentId + "-" + id;
 const localIds = new Map(bindings.map(binding => ["entry-" + binding.id, "entry-" + localId(binding.id)]));
 const rewrite = (text: string) => text.replace(/<CrossReference name="([^"]+)" href="#([^"]+)"\s*\/>/g,
  (_, name: string, hash: string) => reference(name, hash, localIds));
 return eventGroups.flatMap(source => {
  const items = bindings.filter(binding => byId.get(binding.id)?.source === source.id).map(binding => {
   const record = byId.get(binding.id)!;
   const text = [
    binding.note,
    record.type === "INERT" && binding.kind === "专属事件" && binding.note
     ? record.entry.text.split("\n\n").filter(paragraph => paragraph !== record.decision.trigger).join("\n\n") : record.entry.text,
    binding.choices ? "下方仅列出该 Agent 对应的选项。" : "",
   ].filter(Boolean).join("\n\n");
   return {
    ...record.entry,
    id: localId(binding.id),
    name: binding.title ?? record.entry.name,
    text: rewrite(text),
    eventRepeat: record.entry.eventRepeat ? { ...record.entry.eventRepeat, interval: record.entry.eventRepeat.interval ? rewrite(record.entry.eventRepeat.interval) : undefined } : undefined,
    meta: binding.kind + " · " + titles[record.category] + (record.chain && /节点\s*\d+/.test(record.entry.meta ?? "") ? " · " + /节点\s*\d+/.exec(record.entry.meta!)![0] : ""),
    eventOriginal: { name: record.entry.name, href: "?page=events#entry-" + binding.id, meta: titles[record.category], text: plain(previews.get("entry-" + binding.id)?.text ?? ""), image: record.entry.image },
    eventOptions: record.entry.eventOptions?.filter((_, index) => !binding.choices || binding.choices.includes(index))
     .map(option => ({ ...option, condition: option.condition ? rewrite(option.condition) : undefined, text: rewrite(option.text) })),
    eventComparison: record.entry.eventComparison ? {
     ...record.entry.eventComparison,
     original: {
      ...record.entry.eventComparison.original,
      href: "?page=events" + record.entry.eventComparison.original.href,
      meta: "任务中事件", text: plain(previews.get(record.entry.eventComparison.original.href.slice(1))?.text ?? ""),
     },
     changes: record.entry.eventComparison.changes.map(rewrite),
    } : undefined,
   };
  });
  return items.length ? [{ id: source.id, name: source.name, items, records: items.map(entry => ({ ...byId.get(entry.eventOriginal!.href.split("#entry-")[1])!, source: "agent-" + agentId + "-" + source.id, entry })) }] : [];
 });
}
export { agentEventNotes };
