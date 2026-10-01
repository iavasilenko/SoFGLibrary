"use client";

import { useState } from "react";
import { BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { ExpandableRow, RichText } from "./BaseGodArchive";
import { concisePercentageUnits } from "./ArchiveTextPresentation";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { magicSchools as sourceSchools, magicSpells as sourceSpells } from "./MagicData";
import { archiveModOrder, sortArchiveMods } from "./ArchiveModOrder";
import "./magic.css";

// Preserve school levels; order Mod additions within each level by workshop ID.
const magicSpells = sortArchiveMods(sourceSpells, spell => spell.baseGame ? "" : [spell.source, spell.sourceName]);
const magicSchools = [...sourceSchools].sort((a, b) => {
 const order = (id: string) => {
  const spells = magicSpells.filter(spell => spell.school === id);
  const origin = sourceSpells.find(spell => spell.school === id);
  return spells.some(spell => spell.baseGame) || !origin ? [0, 0] : archiveModOrder([origin.source, origin.sourceName]);
 };
 const x = order(a.id), y = order(b.id);
 return x[0] - y[0] || x[1] - y[1];
});

const config: ArchiveRecordConfig = {
  id: "magic", assetDir: "", autoLink: false, powers: [],
  sections: magicSchools.map(school => ({
    id: "magic-school-" + school.id, title: "魔法 · " + school.name,
    items: magicSpells.filter(spell => spell.school === school.id),
  })),
};
const allIds = magicSpells.map(spell => "entry-" + spell.id);
const navGroups = magicSchools.map(school => ({
  name: school.name,
  entries: [
    { href: "#magic-school-" + school.id, label: "介绍与学习" },
    ...school.levels.map(([id, label]) => ({ href: "#magic-level-" + school.id + "-" + id, label })),
  ],
}));
const baseCount = magicSpells.filter(spell => spell.baseGame).length;

export default function MagicArchive() {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);
  return <main className={"site-shell base-modifiers-theme magic-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><BookOpen size={17} /></span><span><b>魔法</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div>
      <CatalogueNavigation groups={navGroups} label="魔法导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>魔法</h1>
        <p>{magicSchools.length} 个体系，{magicSpells.length} 项法术与仪式：游戏本体 {baseCount} 项，Mod {magicSpells.length - baseCount} 项。按学派和等级排列；灰底为本体，深色底为 Mod，每项另标来源。</p>
        <p>Arcane Knowledge 可由学习 Arcane Secret 等方式积累，再用于提升学派等级。持续施法期间可以受到魔法攻击；达到 Complexity 后完成，主动中止则不触发完成效果。</p>
      </header>
      {magicSchools.map((school, index) => <section className="section magic-school" id={"magic-school-" + school.id} key={school.id}>
        <div className="plain-heading"><p className="section-index">{String(index + 1).padStart(2, "0")} / 魔法</p><h2>{school.name}</h2></div>
        <div className="magic-introduction">
          <h3>介绍</h3><p><RichText config={config} text={school.description} /></p>
          <h3>学习与获得</h3><p><RichText config={config} text={school.learning} /></p>
        </div>
        {school.levels.map(([level, title]) => <div className="magic-level" id={"magic-level-" + school.id + "-" + level} key={level}>
          <h3>{title}<small>{magicSpells.filter(spell => spell.school === school.id && spell.level === level).length}</small></h3>
          <div className="expandable-table">{magicSpells.filter(spell => spell.school === school.id && spell.level === level).map(spell => {
            const id = "entry-" + spell.id;
            return <ExpandableRow key={id} config={config} entryId={id} name={spell.name} image={spell.image} baseGame={spell.baseGame} open={openEntries.has(id)} onToggle={toggle}>
              <div className="magic-source"><b>来源</b><span>{spell.sourceName}</span></div>
              <div className="expanded-meta">{spell.meta}{spell.channelled ? " · 持续施法" : ""}</div>
              <div className="task-location"><b>执行地点</b><RichText config={config} text={spell.location!} /></div>
              <div className="task-stat-line">{concisePercentageUnits(spell.statLine ?? "")}</div>
              <p className="magic-progress">{spell.progress}</p>
              {spell.casting && <p className="magic-casting">{spell.casting}</p>}
              <div className="expanded-section"><h4>具体效果</h4><p><RichText config={config} text={spell.text} exclude={spell.name} /></p></div>
              <div className="expanded-section"><h4>施放条件</h4><p><RichText config={config} text={spell.limit!} exclude={spell.name} /></p></div>
              <div className="expanded-section"><h4>获得方式</h4><p><RichText config={config} text={spell.acquisition!} exclude={spell.name} /></p></div>
              {spell.portrait && <small className="magic-portrait-note">{spell.portrait}</small>}
            </ExpandableRow>;
          })}</div>
        </div>)}
      </section>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
