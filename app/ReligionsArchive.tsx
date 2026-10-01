
"use client";

import { useState } from "react";
import { Landmark, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { religionGroups } from "./ReligionsData";
import { sortArchiveMods } from "./ArchiveModOrder";
import "./religions.css";


const baseGroups = religionGroups.filter(group => ["holy-order", "conditional", "witches"].includes(group.id));
const modGroups = sortArchiveMods(religionGroups.filter(group => !baseGroups.includes(group)), group => [group.id, group.title]);
const sourceNames: Record<string, string> = {
  drowned: "Deep Ones Plus", "living-wilds": "Living Wilds",
  covens: "Covens, Curses & Curios Recast", orcs: "Orcs Plus",
};
const navGroups = [
  { name: "游戏本体", entries: baseGroups.map(group => ({ href: "#religion-" + group.id, label: group.title })) },
  ...modGroups.map(group => ({ name: sourceNames[group.id] ?? group.title, entries: group.items.map(item => ({ href: "#entry-" + item.id, label: item.name })) })),
];
const tenets = religionGroups.flatMap(group => group.items);
const entryIds = tenets.map(item => "entry-" + item.id);
const config: ArchiveRecordConfig = {
  id: "religions",
  assetDir: "",
  autoLink: false,
  powers: [],
  sections: [{ id: "tenets", title: "宗教教义", items: tenets }],
};

export default function ReligionsArchive({ onReturn }: { onReturn: () => void }) {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);

  return (
    <main className={"site-shell base-modifiers-theme religions-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
      <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
      <aside className="sidebar" onClick={onSidebarClick}>
        <div className="sidebar-head">
          <div className="sidebar-brand">
            <span className="brand-mark"><Landmark size={17} /></span>
            <span><b>教义</b><small>其他信息</small></span>
          </div>
          <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <a className="sidebar-index-link" href="./">← 返回索引页</a>
        <div className="sidebar-bulk">
          <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
          <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
        </div>
        <CatalogueNavigation groups={navGroups} label="教义导航" />
      </aside>
      <div className="content-shell">
        <header id="top" className="modifier-library-header">
          <h1>教义</h1>
          <p>游戏本体与 Mod 中不限定神祇的教义，按适用教团与加入条件分栏。共收录 {tenets.length} 项。</p>
          <p>每项标明完整等级范围，分段列出有效等级。负等级代表 Elder Influence 方向，正等级代表 Human Influence 方向；实际可调范围还受 Alignment Status 限制。</p>
        </header>
        {religionGroups.map((group, index) => <section id={"religion-" + group.id} className="section religion-group" key={group.id}>
          <p className="section-index">{String(index + 1).padStart(2, "0")} / {baseGroups.includes(group) ? "游戏本体" : sourceNames[group.id] ?? group.title}</p>
          <div className="religion-group-heading"><h2>{group.title}</h2><span>{group.items.length} 项教义</span></div>
          <p className="religion-group-description"><RichText config={config} text={group.description} /></p>
          <DetailGrid config={config} items={group.items} openEntries={openEntries} onToggle={toggle} />
        </section>)}
        <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
      </div>
    </main>
  );
}
