"use client";

import { DetailGrid, ExpandableRow, RichText } from "./BaseGodArchive";
import EventDecisionFlow from "./EventDecisionFlow";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { replaceEventPlaceholders } from "./EventPlaceholders";

export function eventSeriesAnchor(source: string, id: string) { return "chain-" + source + "-" + id; }
export function eventSeriesCardAnchor(source: string, id: string) { return "entry-event-series-" + source + "-" + id; }
export function eventSeriesOrdinal(record: EventRecord, index: number) {
 return Number(/节点\s*(\d+)/.exec(record.entry.meta ?? "")?.[1]) || index + 1;
}

export default function EventSeries({ config, records, openEntries, onToggle }: {
 config: ArchiveRecordConfig; records: EventRecord[]; openEntries: Set<string>; onToggle: (id: string) => void;
}) {
 const series = records[0].chain!;
 const id = eventSeriesAnchor(records[0].source, series.id);
 const cardId = eventSeriesCardAnchor(records[0].source, series.id);
 const image = records.every(record => record.entry.image === records[0].entry.image) ? records[0].entry.image : undefined;
 const baseGame = records.every(record => record.entry.baseGame);
 const items = records.map((record, index) => ({ ...record.entry, meta: "节点 " + eventSeriesOrdinal(record, index) }));
 return <section className="event-chain event-series event-records-container" id={id} aria-label={series.name + " 系列事件"}>
  <h4>{replaceEventPlaceholders(series.name)}</h4>
  <div className="event-family-cards">
   <div className="event-family-overview"><ExpandableRow config={config} entryId={cardId + "-overview"} name={series.name} image={image} baseGame={baseGame} open={openEntries.has(cardId + "-overview")} onToggle={onToggle}>
    <div className="expanded-section"><h4>整体描述</h4><p><RichText config={config} text={series.description} /></p></div>
   </ExpandableRow></div>
   <div className="event-family-flow"><ExpandableRow config={config} entryId={cardId + "-flow"} name="流程图" baseGame={baseGame} open={openEntries.has(cardId + "-flow")} onToggle={onToggle}>
    <EventDecisionFlow config={config} family={{ id, name: series.name, records, series }} />
   </ExpandableRow></div>
   <div className="event-family-results"><DetailGrid config={config} items={items} openEntries={openEntries} onToggle={onToggle} /></div>
  </div>
 </section>;
}
