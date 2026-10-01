"use client";

import { useState } from "react";
import ArchiveIcon from "./ArchiveIcon";
import { Swords, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { armies as sourceArmies, armyMechanics } from "./ArmiesData";
import { sortArchiveMods } from "./ArchiveModOrder";
const armies = sortArchiveMods(sourceArmies, unit => unit.group);
import "./armies.css";

const collections = [
  { id: "base-armys", title: "游戏本体", units: armies.filter(unit => unit.baseGame) },
  { id: "mod-armys", title: "Mod", units: armies.filter(unit => !unit.baseGame) },
].map(collection => ({
  ...collection,
  groups: [...new Set(collection.units.map(unit => unit.group))].map((name, index) => ({
    id: collection.id + "-" + index, name, units: collection.units.filter(unit => unit.group === name),
  })),
}));

const navGroups = [
  { name: "军队机制", entries: armyMechanics.map(item => ({ href: "#entry-" + item.id, label: item.name })) },
  { name: "游戏本体", entries: collections[0].units.map(unit => ({ href: "#entry-army-" + unit.id, label: unit.name })) },
  ...collections[1].groups.map(group => ({ name: group.name, entries: group.units.map(unit => ({ href: "#entry-army-" + unit.id, label: unit.name })) })),
];
const entryIds = [...armyMechanics, ...armies.flatMap(unit => unit.skills)].map(item => "entry-" + item.id);
const config: ArchiveRecordConfig = {
  id: "armies", assetDir: "armies", autoLink: false, powers: [],
  sections: [
    { id: "army-records", title: "军队", items: armies.map(unit => ({
      id: "army-" + unit.id, name: unit.name, image: unit.image, stats: unit.stats,
      text: "HP\n" + unit.hp + "\n出现条件\n" + unit.origin + "\n" + unit.behavior,
    })) },
    { id: "army-skills", title: "能力", items: armies.flatMap(unit => unit.skills) },
    { id: "army-mechanics", title: "军队机制", items: armyMechanics },
  ],
};

export default function ArmiesArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);

  return <main className={"site-shell base-modifiers-theme army-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><Swords size={17} /></span><span><b>军队</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label="军队导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>军队</h1>
        <p>收录本体通用军队与 Mod 新增军队。本体按所属势力分栏，Mod 各自单独成栏。</p>
        <p>不收录神祇自带的限定军队；Mod 为原版神祇新增的军队单独注明条件。HP、生成方式与能力按当前本体及各 Mod 的有效版本整理。</p>
      </header>
      <section className="section army-mechanics"><h2>军队机制</h2><DetailGrid config={config} items={armyMechanics} openEntries={openEntries} onToggle={toggle} /></section>
      {collections.map(collection => <div className="army-collection" id={collection.id} key={collection.id}>
        {collection.groups.map(group => <div className="army-group" id={group.id} key={group.id}>
          {collection.id === "base-armys" && <h3 className="army-group-heading">{group.name}</h3>}
          {group.units.map(unit => <section id={"entry-army-" + unit.id} className="section army-record" key={unit.id}>
            <div className="army-record-heading">
              {unit.image && <ArchiveIcon className="army-catalog-portrait" src={unit.image} alt={unit.name} size={112} />}
              <div><p className="section-index">{String(armies.indexOf(unit) + 1).padStart(2, "0")} / {unit.baseGame ? "游戏本体 · " + unit.faction : unit.group}</p><h3>{unit.name}</h3></div>
            </div>
            <div className="army-basics">
              <div><h4>HP</h4><p><RichText config={config} text={unit.hp} /></p></div>
              <div><h4>基础属性</h4><p>{unit.stats}</p></div>
              <div><h4>出现条件</h4><p><RichText config={config} text={unit.origin} /></p></div>
              <div><h4>行为与机制</h4><p><RichText config={config} text={unit.behavior} /></p></div>
            </div>
            {unit.skills.length > 0 && <div className="army-subsection"><h4>能力</h4>
              <DetailGrid config={config} items={unit.skills} openEntries={openEntries} onToggle={toggle} />
            </div>}
          </section>)}
        </div>)}
      </div>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
