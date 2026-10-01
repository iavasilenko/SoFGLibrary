import type { DetailItem, EventCategory, EventChain } from "./GodArchiveTypes";
export type { EventCategory } from "./GodArchiveTypes";
export type EventRecord = {
  entry: DetailItem;
  source: string;
  sourceName: string;
  eventId: string;
  type: string;
  category: EventCategory;
  anchorCategory?: EventCategory;
  chain: EventChain | null;
  sourceFile: string;
  gods?: string[];
  condition: string;
  decision: { trigger: string; condition: string; selection: string };
};
export type EventSourceGroup = { id: string; name: string; records: EventRecord[]; categoryNotes?: Partial<Record<EventCategory, string[]>> };
