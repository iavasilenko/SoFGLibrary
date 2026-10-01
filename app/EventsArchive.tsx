"use client";

import { useState } from "react";
import { ScrollText, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import EventVariants from "./EventVariants";
import EventSeries, { eventSeriesCardAnchor } from "./EventSeries";
import { conditionSelectsVariant } from "./EventDecisionModel";
import { describeEventFamily, groupEventVariants } from "./EventVariantModel";
import { RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import type { EventCategory, EventRecord } from "./EventTypes";
import { eventGroups, eventAliases } from "./EventCatalogueModel";
import "./events.css";
import "./event-variants.css";

const categories: { id: EventCategory; name: string }[] = [
  { id: "gods", name: "神祇限定事件" },
  { id: "tasks", name: "任务中事件" },
  { id: "relationships", name: "人物关系事件" },
  { id: "other", name: "其他事件" },
  { id: "ruins", name: "遗迹事件" },
  { id: "chains", name: "系列事件" },
];
const allRecords = eventGroups.flatMap(group => group.records);
const families = groupEventVariants(allRecords).filter(family => family.records.length > 1);
const series = eventGroups.flatMap(group => [...new Set(group.records.filter(record => record.chain).map(record => record.chain!.id))].map(id => {
 const records = group.records.filter(record => record.chain?.id === id);
 return { id: eventSeriesCardAnchor(group.id, id), records, chain: records[0].chain! };
}));
const conditionSelectedIds = new Set(families.filter(family => conditionSelectsVariant(family.records)).flatMap(family => family.records.map(record => record.entry.id)));
const parentEntries = new Map([...families.flatMap(family => family.records.map(record => ["entry-" + record.entry.id, family.id] as const)), ...series.flatMap(group => group.records.map(record => ["entry-" + record.entry.id, group.id] as const))]);
const entryIds = [...allRecords.map(record => "entry-" + record.entry.id), ...[...families, ...series].flatMap(group => [group.id + "-overview", group.id + "-flow"])];
const displayCount = allRecords.length - [...families, ...series].reduce((sum, group) => sum + group.records.length - 1, 0);
const config: ArchiveRecordConfig = {
  id: "events", assetDir: "events", autoLink: false, powers: [],
  sections: categories.map(category => ({
    id: "event-" + category.id, title: category.name,
    items: [...allRecords.filter(record => record.category === category.id).map(record => conditionSelectedIds.has(record.entry.id)
      ? { ...record.entry, text: record.entry.text.split("\n\n").filter(paragraph => !/^抽选权重：/.test(paragraph)).join("\n\n") }
      : record.entry), ...families.filter(family => family.records[0].category === category.id).map(family => ({
       id: family.id.slice("entry-".length) + "-overview", name: family.name + " 系列事件",
       text: describeEventFamily(family), eventCategory: category.id,
       image: family.records.every(record => record.entry.image === family.records[0].entry.image) ? family.records[0].entry.image : undefined,
      })), ...series.filter(group => group.records[0].category === category.id).flatMap(group => [
       { id: group.id.slice("entry-".length) + "-overview", name: group.chain.name + " 系列事件", text: group.chain.description, eventCategory: category.id },
       { id: group.id.slice("entry-".length) + "-flow", name: group.chain.name + " · 流程图", text: group.chain.description, eventCategory: category.id },
      ])],
  })),
};
const navGroups = eventGroups.map(group => ({
  name: group.name,
  entries: categories.filter(category => group.records.some(record => record.category === category.id) || group.categoryNotes?.[category.id]?.length).map(category => {
    const records = group.records.filter(record => record.category === category.id);
    const count = category.id === "chains" ? new Set(records.filter(record => record.chain).map(record => record.chain!.id)).size + " 条" : records.length + " 项";
    return { href: "#events-" + group.id + "-" + category.id, label: category.name + " · " + (records.length ? count : "说明") };
  }),
}));

export default function EventsArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => {
    const next = new Set(current).add(id);
    const parent = parentEntries.get(id);
    if (parent) { next.add(parent + "-overview"); next.add(parent + "-flow"); }
    return next;
  });
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal, eventAliases);
  const cards = (records: EventRecord[]) => <EventVariants config={config} records={records} openEntries={openEntries} onToggle={toggle} />;

  return <main className={"site-shell base-modifiers-theme events-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><ScrollText size={17} /></span><span><b>事件</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label="事件导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>事件</h1>
<p>先收录游戏本体，再按 Mod 分栏。神祇限定事件优先单独归类；其余分为任务中事件、人物关系事件、其他事件、遗迹事件与系列事件。共 {displayCount} 个事件条目、{allRecords.length} 个分支或节点；神祇限定的系列仍以整体描述、流程图和节点卡片展示，各节点只收录一次。</p>
        <p>每项列出触发方式、条件、选项限制及实际结果。事件与选项名称保留英文；人物代词以人物 A、人物 B 表示，地点等动态名称用中文占位说明。</p>
        <details className="event-reading-guide">
          <summary>触发概率与系列事件的阅读方式</summary>
          <p>流程图与同名分支仅显示该组结果之间的相对概率；选项中的概率表示选择该选项后各结果的分配比例。</p>
          <p>无效果表示该选项没有额外结算；事件出现之前已经发生的转化、死亡或危机效果另在正文说明。</p>
          <p>系列中的节点可以直接衔接，也可以通过共同的剧情状态或触发间隔关联。节点编号用于查阅，具体关系以流程图、节点条件及选项效果为准。</p>
          <p>选项中的剧情状态说明其控制的次数上限、等待时间或后续事件资格。满足这些前提不等于事件立即发生；还需通过其他条件与抽选。等待时间按代码中的严格比较计算，例如必须超过 15 回合，即从选择后第 16 回合起。</p>
          <p>本局状态是默认值；同名状态若也保存在地点或人物上，读取优先级依次为地点、单位、当前人物、另一人物，最后才是本局默认值。局部状态不会随着默认值改变而自动清除。</p>
        </details>
      </header>
      {eventGroups.map((group, groupIndex) => <section className="section event-source records-section" id={"events-" + group.id} key={group.id}>
        <p className="section-index">{String(groupIndex + 1).padStart(2, "0")} / {group.id === "base" ? "游戏本体" : "Mod"}</p>
        <div className="event-source-heading"><h2>{group.name}</h2><span>{group.records.length} 项</span></div>
        {categories.map(category => {
          const records = group.records.filter(record => record.category === category.id);
          const notes = group.categoryNotes?.[category.id];
          if (!records.length && !notes?.length) return null;
          return <div className="event-category" id={"events-" + group.id + "-" + category.id} key={category.id}>
            <h3>{category.name}</h3>
            {notes?.length ? <div className="event-category-notes">{notes.map((text, index) => <p key={index}><RichText config={config} text={text} /></p>)}</div> : null}
            {records.some(record => !record.chain) ? cards(records.filter(record => !record.chain)) : null}
            {[...new Set(records.filter(record => record.chain).map(record => record.chain!.id))].map(chainId => {
              const nodes = records.filter(record => record.chain?.id === chainId);
              return <EventSeries key={chainId} config={config} records={nodes} openEntries={openEntries} onToggle={toggle} />;
            })}
          </div>;
        })}
      </section>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
