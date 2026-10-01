
"use client";

import EventDecisionFlow from "./EventDecisionFlow";
import { describeVariantEntry } from "./EventDecisionModel";
import { DetailGrid, ExpandableRow, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig, DetailItem } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { eventNarrative } from "./EventNarratives";
import { replaceEventPlaceholders } from "./EventPlaceholders";
import { describeEventFamily, groupEventVariants, variantLabel, type EventFamily } from "./EventVariantModel";

type Props = { config: ArchiveRecordConfig; records: EventRecord[]; openEntries: Set<string>; onToggle: (id: string) => void };
function VariantFamily({ config, family, openEntries, onToggle }: Omit<Props, "records"> & { family: EventFamily }) {
 const records = family.records, first = records[0];
 const commonTrigger = records.every(record => record.decision.trigger === first.decision.trigger) ? first.decision.trigger : "";
 const commonImage = records.every(record => record.entry.image === first.entry.image) ? first.entry.image : undefined;
 const commonParagraphs = first.entry.text.split("\n\n").filter(paragraph => records.every(record => record.entry.text.split("\n\n").includes(paragraph)));
 const childItems: DetailItem[] = records.map((record, index) => {
  const text = record.entry.text.split("\n\n").filter(paragraph => !commonParagraphs.includes(paragraph) &&
   paragraph !== record.decision.trigger && !paragraph.startsWith("触发条件\n") &&
   !/^(抽选权重|探索抽选权重|打捞抽选权重|单次候选检查概率)：/.test(paragraph)).join("\n\n");
  return {...record.entry, name: variantLabel(record, index), image: commonImage ? undefined : record.entry.image,
   meta: undefined, text: ["进入条件：" + describeVariantEntry(record, records), text || (!record.entry.eventOptions?.length ? "无选项。" : "")].filter(Boolean).join("\n\n")};
 });
 const commonNotes = commonParagraphs.filter(paragraph => paragraph !== commonTrigger && paragraph !== eventNarrative(first.eventId, first.entry.name) && !paragraph.startsWith("触发条件\n") &&
  !/^进入条件(?:[：:\n]|$)/.test(paragraph) && paragraph !== "下方仅列出该 Agent 对应的选项。" &&
  !/^(抽选权重|探索抽选权重|打捞抽选权重|单次候选检查概率)：/.test(paragraph));
 return <section className="event-variant-family" id={family.id} aria-label={family.name}>
  <h4>{replaceEventPlaceholders(family.name)}</h4>
  <div className="event-family-cards">
   <div className="event-family-overview">
    <ExpandableRow config={config} entryId={family.id + "-overview"} name={family.name} image={commonImage} baseGame={records.every(record => record.entry.baseGame)} open={openEntries.has(family.id + "-overview")} onToggle={onToggle}>
     <div className="expanded-section"><h4>整体描述</h4><p><RichText config={config} text={describeEventFamily(family)} /></p></div>
     {commonNotes.map((note, index) => <p className="event-family-note" key={index}><RichText config={config} text={note} /></p>)}
    </ExpandableRow>
   </div>
   <div className="event-family-flow">
    <ExpandableRow config={config} entryId={family.id + "-flow"} name="流程图" baseGame={records.every(record => record.entry.baseGame)} open={openEntries.has(family.id + "-flow")} onToggle={onToggle}>
     <EventDecisionFlow config={config} family={family} />
    </ExpandableRow>
   </div>
   <div className="event-family-results">
    <DetailGrid config={config} items={childItems} openEntries={openEntries} onToggle={onToggle} />
   </div>
  </div>
 </section>;
}
export default function EventVariants({ config, records, openEntries, onToggle }: Props) {
 const families = groupEventVariants(records);
 const ordered = [...families.filter(family => family.records.length === 1), ...families.filter(family => family.records.length > 1)];
 return <div className="event-records-container"><div className="event-variant-grid">{ordered.map(family => family.records.length === 1
  ? <DetailGrid key={family.id} config={config} items={[family.records[0].entry]} openEntries={openEntries} onToggle={onToggle} />
  : <VariantFamily key={family.id} config={config} family={family} openEntries={openEntries} onToggle={onToggle} />)}</div></div>;
}
