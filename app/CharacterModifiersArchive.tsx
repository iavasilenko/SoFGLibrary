"use client";

import { useState } from "react";
import { CircleDot, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { ExpandableRow, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import { characterModifiers, characterModifierCategories } from "./CharacterModifiersData";
import { sortArchiveMods } from "./ArchiveModOrder";
import "./character-modifiers.css";

const sources = sortArchiveMods(Array.from(new Set(characterModifiers.map(item => item.source))).map(id => ({
  id, name: characterModifiers.find(item => item.source === id)!.sourceName,
  groups: Object.entries(characterModifierCategories).map(([category, name]) => ({
    id: "characters-" + id + "-" + category, name,
    items: characterModifiers.filter(item => item.source === id && item.category === category),
  })).filter(group => group.items.length),
})), source => [source.id, source.name]);
const config: ArchiveRecordConfig = {
  id: "character-modifiers", assetDir: "", autoLink: false, powers: [],
  sections: sources.flatMap(source => source.groups.map(group => ({ id: group.id, title: "角色特质", items: group.items }))),
};
const allIds = characterModifiers.map(item => "entry-" + item.id);
const navGroups = sources.map(source => ({ name: source.name, entries: source.groups.map(group => ({ href: "#" + group.id, label: group.name })) }));
const baseCount = characterModifiers.filter(item => item.source === "base").length;

export default function CharacterModifiersArchive() {
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal);
  return <main className={"site-shell base-modifiers-theme character-modifiers-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark"><CircleDot size={17} /></span><span><b>角色特质</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div>
      <CatalogueNavigation groups={navGroups} label="角色特质导航" />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header"><h1>角色特质</h1>
        <p>本体 {baseCount} 项，Mod {characterModifiers.length - baseCount} 项。收录人物的可学习能力、特质、诅咒、临时状态及随从能力，按能够获得它们的单位类别分类。</p>
        <p>不收录神祇相关特质及单个玩家 Agent 独有的能力。各 Mod 分别列出，使用当前有效版本。</p>
      </header>
      {sources.map((source, sourceIndex) => <section className="section character-source" id={"character-source-" + source.id} key={source.id}>
        <div className="plain-heading"><p className="section-index">{String(sourceIndex + 1).padStart(2, "0")} / {source.id === "base" ? "游戏本体" : "Mod"}</p><h2>{source.name}</h2></div>
        {source.groups.map(group => <div className="character-category" id={group.id} key={group.id}><h3>{group.name}<small>{group.items.length}</small></h3>
          <div className="expandable-table">{group.items.map(item => {
            const id = "entry-" + item.id;
            return <ExpandableRow key={id} config={config} entryId={id} name={item.name} open={openEntries.has(id)} onToggle={toggle}>
              {item.levels && <small className="tenet-range">等级范围：{item.levels}</small>}
              <div className="expanded-section"><h4>适用人物</h4><p><RichText config={config} text={item.eligible} exclude={item.name} /></p></div>
              <div className="expanded-section"><h4>作用</h4><p><RichText config={config} text={item.text} exclude={item.name} /></p></div>
              <div className="expanded-section"><h4>获取方式</h4><p><RichText config={config} text={item.acquisition} exclude={item.name} /></p></div>
              {item.duration && <div className="expanded-section"><h4>持续与移除</h4><p><RichText config={config} text={item.duration} exclude={item.name} /></p></div>}
            </ExpandableRow>;
          })}</div>
        </div>)}
      </section>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
