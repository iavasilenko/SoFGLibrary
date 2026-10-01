"use client";

import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";

import { useState } from "react";
import { Package, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { DetailGrid, RichText } from "./BaseGodArchive";
import { config as baseConfig } from "./BaseItemsData";
import { modItemSections as sourceModItemSections } from "./ModItemsData";
import { sortArchiveMods } from "./ArchiveModOrder";
const modItemSections = sortArchiveMods(sourceModItemSections, section => [section.id, section.title]);

const config = { ...baseConfig, sections: [...baseConfig.sections, ...modItemSections] };


const navGroups = [
  { name: "游戏本体", entries: baseConfig.sections.map(section => ({ href: "#" + section.id, label: section.title })) },
  ...modItemSections.map(section => ({
    name: section.title,
    entries: section.items.map(item => ({ href: item.id ? "#entry-" + item.id : "#" + entryId(item.name), label: item.name })),
  })),
];

const entries = config.sections.flatMap(section => section.items);
function entryId(name: string) { return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
const allIds = entries.map(item => item.id ? "entry-" + item.id : entryId(item.name));

export default function BaseItemsArchive({ onReturn }: { onReturn: () => void }) {
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
    <main className={"site-shell base-modifiers-theme base-items-theme" + (sidebarHidden ? " sidebar-hidden" : "")}
      onClick={onArchiveClick}>
      <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} /><aside className="sidebar" onClick={onSidebarClick}>
        <div className="sidebar-head">
          <div className="sidebar-brand"><span className="brand-mark"><Package size={17} /></span><span><b>物品资料库</b><small>其他信息</small></span></div>
          <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
            {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <a className="sidebar-index-link" href="./">← 返回索引页</a>
        <div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div>
        <CatalogueNavigation groups={navGroups} label="物品导航" />
      </aside>
      <div className="content-shell">
        <header id="top" className="modifier-library-header"><h1>物品</h1><p>本体 {baseConfig.sections.reduce((sum, section) => sum + section.items.length, 0)} 项，Mod {modItemSections.reduce((sum, section) => sum + section.items.length, 0)} 项；分别列出功能与获取方式。Mod 按文件夹分组，采用当前 2.0 版本；没有版本文件夹时采用根目录内容。</p></header>
        <div id="items">
          {config.sections.map((section, index) => (
            <section id={section.id} className="section records-section" key={section.id}>
              <div className="plain-heading">
                <p className="section-index">{String(index + 1).padStart(2, "0")} / {section.items.length} 项</p>
                <h2>{section.title}</h2>
              </div>
              {section.acquisition && <div className="category-acquisition"><h3>获取方式</h3><p><RichText config={config} text={section.acquisition} /></p></div>}
              <DetailGrid config={config} items={section.items} openEntries={openEntries} onToggle={toggle} />
            </section>
          ))}
        </div>
        <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
      </div>
    </main>
  );
}
