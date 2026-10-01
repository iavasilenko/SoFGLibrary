import type { EventRecord } from "./EventTypes";
import type { DetailItem } from "./GodArchiveTypes";
import { eventChoiceSourceAudit } from "./EventChoiceSourceAudit";

const audited = new Map(eventChoiceSourceAudit.map(row => [row.id, row]));

export function conditionalEventChoices(record: EventRecord): DetailItem {
 const row = audited.get(record.eventId), options = record.entry.eventOptions;
 if (!row || row.context !== record.condition || options?.length !== row.choices.length ||
  options.some((option, index) => option.name !== row.choices[index].name || (option.condition ?? "") !== row.choices[index].display)) return record.entry;
 return { ...record.entry, eventOptions: options.map((option, index) => ({
  ...option, conditionGroup: row.groups.findIndex(group => group.includes(index)),
 })) };
}
