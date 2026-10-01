"use client";

import { useEffect, useState } from "react";
import ArchiveIcon from "./ArchiveIcon";
import { MapPinned, Landmark, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { CatalogueNavigation } from "./CatalogueNavigation";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { DetailGrid, RichText } from "./BaseGodArchive";
import { getLocationPage, type PlacePage } from "./LocationPageModel";
import "./locations.css";

export default function LocationsArchive({ onReturn, kind = "locations" }: { onReturn: () => void; kind?: PlacePage }) {
  const model = getLocationPage(kind);
  const { config, title, sources, intro } = model;
  const entryIds = config.sections.flatMap(section => section.items.map(item => "entry-" + item.id));
  const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
  const reveal = (id: string) => setOpenEntries(current => new Set(current).add(id));
  const toggle = (id: string) => setOpenEntries(current => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const onArchiveClick = useArchiveNavigation(reveal, model.aliases);
  useEffect(() => {
    const redirect = () => {
      const target = model.redirects[window.location.hash.slice(1)];
      if (target) window.location.replace(target);
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [model]);
  const navGroups = [
    { name: "阅读说明", entries: [{ href: "#place-guide", label: title }] },
    ...sources.map(group => ({ name: group.title, entries: group.articles.map(article => ({ href: "#" + article.id, label: article.name })) })),
  ];

  return <main className={"site-shell base-modifiers-theme locations-theme" + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}>
    <SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} />
    <aside className="sidebar" onClick={onSidebarClick}>
      <div className="sidebar-head">
        <div className="sidebar-brand"><span className="brand-mark">{kind === "locations" ? <MapPinned size={17} /> : <Landmark size={17} />}</span><span><b>{title}</b><small>其他信息</small></span></div>
        <button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>
          {sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
        </button>
      </div>
      <a className="sidebar-index-link" href="./">← 返回索引页</a>
      <div className="sidebar-bulk">
        <button type="button" onClick={() => setOpenEntries(new Set(entryIds))}>全部展开</button>
        <button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button>
      </div>
      <CatalogueNavigation groups={navGroups} label={title + "导航"} />
    </aside>
    <div className="content-shell">
      <header id="top" className="modifier-library-header">
        <h1>{title}</h1>
        <p>{kind === "locations" ? "每个地点单独分栏，列出其介绍、可能配置的兴趣点、挑战与任务。" : "每个兴趣点单独分栏，列出其出现地点、功能、挑战与任务。"}先列游戏本体，再按 Mod 分栏；神祇限定内容见对应神祇页面。</p>
      </header>
      <section className="section location-guide" id="place-guide"><h2>阅读说明</h2>
        <DetailGrid config={config} items={intro} openEntries={openEntries} onToggle={toggle} />
      </section>
      {sources.map(group => <div className="location-collection" id={group.id} key={group.id}>
        <header className="location-collection-heading"><p className="section-index">{["places-base", "places-cordyceps"].includes(group.id) ? "游戏本体" : "Mod"}</p><h2>{group.title}</h2></header>
        {group.articles.map(article => <section className="section location-article" id={article.id} key={article.id}>
          <header className="location-article-heading">
            {article.image && <ArchiveIcon src={article.image} size={72} />}
            <div><h3>{article.name}</h3>{article.unplaced && <p>未找到正常生成路径</p>}</div>
          </header>
          {article.description && <p className="location-common-scope"><RichText config={config} text={article.description} /></p>}
          {article.blocks.map((block, index) => <div className={"location-article-block" + (["地点", "兴趣点", "条件性行动入口"].includes(block.title) ? " place-overview" : "")} key={index}>
            <h4>{["地点", "兴趣点"].includes(block.title) ? "介绍" : block.title}</h4>
            <DetailGrid config={config} items={block.items} openEntries={openEntries} onToggle={toggle} />
          </div>)}
        </section>)}
      </div>)}
      <footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer>
    </div>
  </main>;
}
