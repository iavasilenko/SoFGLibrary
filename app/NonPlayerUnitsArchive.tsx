"use client";

import { useState } from "react";
import ArchiveIcon from "./ArchiveIcon";
import { Contact, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { nonPlayerUnits as sourceNonPlayerUnits } from "./NonPlayerUnitsData";
import { sortArchiveMods } from "./ArchiveModOrder";
const nonPlayerUnits = sortArchiveMods(sourceNonPlayerUnits, unit => unit.group);
import "./non-player-units.css";

const collections = [
  { id: "base-npcs", title: "游戏本体", units: nonPlayerUnits.filter(unit => unit.baseGame) },
  { id: "mod-npcs", title: "Mod", units: nonPlayerUnits.filter(unit => !unit.baseGame) },
].map(collection => ({
  ...collection,
  groups: [...new Set(collection.units.map(unit => unit.group))].map((name, index) => ({
    id: collection.id + "-" + index, name, units: collection.units.filter(unit => unit.group === name),
  })),
}));

const navGroups = [
  { name: "游戏本体", entries: collections[0].units.map(unit => ({ href: "#entry-npc-" + unit.id, label: unit.name })) },
  ...collections[1].groups.map(group => ({ name: group.name, entries: group.units.map(unit => ({ href: "#entry-npc-" + unit.id, label: unit.name })) })),
];
const taskKinds = [...new Set(nonPlayerUnits.flatMap(unit => unit.tasks.map(task => task.kind)))];
const entryIds = nonPlayerUnits.flatMap(unit => [...unit.skills, ...unit.tasks].map(item => "entry-" + item.id));
const config: ArchiveRecordConfig = {
  id: "non-player-units", assetDir: "non-player-units", autoLink: false, powers: [],
  sections: [
    { id: "npc-records", title: "非玩家单位", items: nonPlayerUnits.map(unit => ({
      id: "npc-" + unit.id, name: unit.name, image: unit.image, stats: unit.stats,
      text: unit.origin + "\n" + unit.behavior,
    })) },
    { id: "npc-skills", title: "能力", items: nonPlayerUnits.flatMap(unit => unit.skills) },
    ...taskKinds.map((kind, index) => ({
      id: "npc-actions-" + index, title: kind,
      items: nonPlayerUnits.flatMap(unit => unit.tasks.filter(task => task.kind === kind)),
    })),
  ],
};

export default function NonPlayerUnitsArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);

  return <main className={"site-shell base-modifiers-theme npc-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><Contact size={17} /></span><span><b>非玩家单位</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label="非玩家单位导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>非玩家单位</h1>
        <p>收录不限定神祇的自主人物与野生生物，不收录军队。本体按势力分栏，Mod 各自单独成栏。</p>
        <p>基础属性不含后续升级、装备及临时加成；转化单位按继承关系列出。人物随机肖像随游戏生成，不使用其他单位的图片替代。</p>
      </header>
      {collections.map(collection => <div className="npc-collection" id={collection.id} key={collection.id}>
        {collection.groups.map(group => <div className="npc-group" id={group.id} key={group.id}>
          {collection.id === "base-npcs" && <h3 className="npc-group-heading">{group.name}</h3>}
          {group.units.map(unit => <section id={"entry-npc-" + unit.id} className="section npc-record" key={unit.id}>
            <div className="npc-record-heading">
              {unit.image && <ArchiveIcon className="npc-catalog-portrait" src={unit.image} alt={unit.name} size={112} />}
              <div><p className="section-index">{String(nonPlayerUnits.indexOf(unit) + 1).padStart(2, "0")} / {unit.baseGame ? "游戏本体 · " + unit.faction : unit.group}</p><h3>{unit.name}</h3></div>
            </div>
            <div className="npc-basics">
              <div><h4>基础属性</h4><p>{unit.stats}</p></div>
              <div><h4>出现条件</h4><p><RichText config={config} text={unit.origin} /></p></div>
              <div><h4>行为与机制</h4><p><RichText config={config} text={unit.behavior} /></p></div>
            </div>
            {unit.skills.length > 0 && <div className="npc-subsection"><h4>能力</h4>
              <DetailGrid config={config} items={unit.skills} openEntries={openEntries} onToggle={toggle} />
            </div>}
            {taskKinds.map(kind => {
              const items = unit.tasks.filter(task => task.kind === kind);
              return items.length > 0 && <div className="npc-subsection" key={kind}><h4>{kind}</h4>
                <DetailGrid config={config} items={items} openEntries={openEntries} onToggle={toggle} />
              </div>;
            })}
          </section>)}
        </div>)}
      </div>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
