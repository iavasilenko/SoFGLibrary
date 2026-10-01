import type { DetailItem, GodConfig, Relation } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { godEventBindings } from "./GodEventBindings";
import { eventGroups } from "./EventCatalogueModel";
import { eventRepeatText } from "./EventRepeatPresentation";

const records = new Map(eventGroups.flatMap(group => group.records).map(record => [record.entry.id!, record]));
const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const plain = (text: string) => text.replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1").replaceAll('"', "“");
export function originalEventRelation(record: EventRecord): Relation {
 return { name: record.entry.name, href: "?page=events#entry-" + record.entry.id, meta: record.gods?.length ? "神祇限定事件" : "事件", image: record.entry.image,
  text: plain([record.entry.text, eventRepeatText(record.entry), ...record.entry.eventOptions?.map(option => option.name + (option.condition ? "\n条件：" + option.condition : "") + "\n" + option.text) ?? []].filter(Boolean).join("\n\n")) };
}
export function projectGodEvents(config: GodConfig) {
 const bindings = godEventBindings[config.id];
 if (!bindings) return;
 const section = config.sections.find(section => section.id === "events");
 if (!section) return;
 const projected: { source: DetailItem; record: EventRecord; id: string }[] = [];
 for (const source of section.items) {
  const key = source.id ?? slug(source.name), ids = bindings[key];
  if (!ids) throw new Error("Missing god event binding: " + config.id + ":" + key);
  // Code-only crisis mechanics belong with mechanics, not event JSON entries.
  if (!ids.length) {
   let mechanics = config.sections.find(section => ["mechanisms", "mechanics"].includes(section.id));
   if (!mechanics) { mechanics = { id: "mechanisms", title: "机制", items: [] }; config.sections.push(mechanics); }
   mechanics.items.push({ ...source, eventCategory: undefined, eventOptions: undefined }); continue;
  }
  ids.forEach((canonical, index) => {
   const record = records.get(canonical);
   if (!record) throw new Error("Missing original event: " + canonical);
   projected.push({ source, record, id: index ? key + "-" + slug(record.eventId) : key });
  });
 }
 const local = new Map(projected.map(item => [item.record.entry.id!, item.id]));
 const rewrite = (text: string) => text.replace(/<CrossReference name="([^"]+)" href="#entry-([^"]+)"\s*\/>/g, (_, name: string, id: string) =>
  '<CrossReference name="' + name + '" href="' + (local.has(id) ? '#entry-' + local.get(id) : '?page=events#entry-' + id) + '" />')
  .replace(new RegExp('href="\\?god=' + config.id + '#', 'g'), 'href="#');
 section.items = projected.map(({ source, record, id }) => {
  const choices = record.eventId === "fog.move_village_shook" ? config.id === "iastur" ? [0, 1] : config.id === "ophanim" ? [0, 2] : undefined : undefined;
  const base = record.entry;
  return { ...base, id, image: source.image ?? base.image, text: rewrite(base.text), eventOriginal: originalEventRelation(record),
   eventRepeat: base.eventRepeat?.interval ? { ...base.eventRepeat, interval: rewrite(base.eventRepeat.interval) } : base.eventRepeat,
   eventOptions: base.eventOptions?.filter((_, index) => !choices || choices.includes(index)).map(option => ({ ...option, text: rewrite(option.text), condition: option.condition ? rewrite(option.condition) : undefined })) };
 });
}
export function godEventRecords(config: { id: string }, items: DetailItem[]): EventRecord[] {
 return items.flatMap(entry => {
  const canonical = entry.eventOriginal?.href.split("#entry-")[1], record = canonical ? records.get(canonical) : undefined;
  return record ? [{ ...record, entry }] : [];
 });
}
