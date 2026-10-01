"use client";

import { SidebarBackdrop, useArchiveSidebar } from "./ArchiveSidebar";
import { useArchiveNavigation } from "./useArchiveNavigation";
import { archiveReferenceTarget } from "./ArchiveLinkTarget";
import { normalizeReferenceMarkers } from "./ArchiveReferenceMarkup";

import Image from "next/image";
import ArchiveIcon from "./ArchiveIcon";
import { useId, useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, ChevronDown, Crown, Eye, PanelLeftClose, PanelLeftOpen, Shield, ShieldAlert, Skull, Swords } from "lucide-react";
import MobileReferenceDialog from "./MobileReferenceDialog";
import { getReferenceCategory } from "./ArchiveReferenceCategory";
import { formatOptionCondition, relationshipConditionGroups } from "./EventConditionPresentation";
import { linkEventConditionReferences } from "./EventEffectReferences";
import { eventRepeatText } from "./EventRepeatPresentation";
import { replaceEventPlaceholders } from "./EventPlaceholders";
import { godEventRecords } from "./GodEventProjection";
import EventVariants from "./EventVariants";
import EventSeries from "./EventSeries";
import { eventPresentationCardIds } from "./EventVariantModel";
import "./event-variants.css";
import "./event-groups.css";
import "./place-sections.css";
import { taskLocationGroups } from "./TaskLocationModel";
import { GodMark } from "../components/GodMark";
import type { ArchiveGodChoice, ArchiveRecordConfig, DetailItem, EventComparison, GodConfig, PowerItem, Relation, SectionConfig, SupplicantConfig } from "./GodArchiveTypes";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function anchorFor(name: string) {
 return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/, "");
}

function allEntries(config: ArchiveRecordConfig) {
 return [...config.powers, ...(config.powerGroups ?? []).flatMap(group => group.powers), ...(config.drawPowers ?? []), ...(config.supplicant?.abilities ?? []), ...(config.drawCards?.items ?? []), ...config.sections.flatMap(section => section.items.flatMap(item => [item, ...(item.abilities ?? [])]))];
}
function entryFor(config: ArchiveRecordConfig, name: string) {
 return allEntries(config).find(item => item.name === name);
}
function imageFor(config: ArchiveRecordConfig, image?: string) {
 const cacheBust = config.id === "deaths-games" ? "?v=2" : "";
 if (!image) return undefined;
 if (image.startsWith("./") || image.startsWith("/")) return image;
 return "./" + config.assetDir + "/" + image + cacheBust;
}

function CrossReference({ config, name, href, meta, text, image }: { config: ArchiveRecordConfig; name: string; href?: string; meta?: string; text?: string; image?: string; target?: "_blank" }) {
 const [mobileOpen, setMobileOpen] = useState(false);
 const [previewSeen, setPreviewSeen] = useState(false);
 const originId = useId();
 const entry = (href?.startsWith("#entry-") ? allEntries(config).find(item => "#" + (item.id ? "entry-" + item.id : anchorFor(item.name)) === href) : undefined) ?? entryFor(config, name);
 const relation = config.relations?.[name];
 const relationLink = relation?.effects?.[0]?.href ?? relation?.sources?.[0]?.href;
 const resolvedHref = href ?? (entry ? "#" + (entry.id ? "entry-" + entry.id : anchorFor(entry.name)) : relationLink ?? "#");
 const target = archiveReferenceTarget(resolvedHref, typeof window !== "undefined" ? window.location.href : "https://archive.invalid/?page=" + config.id);
 const richResolvedText = (text || undefined) ?? (entry && "effect" in entry ? entry.effect : (entry ? [entry.text, eventRepeatText(entry), ...(entry.eventOptions?.length ? ["事件选项", ...entry.eventOptions.map(option => option.name + (option.condition ? "\n条件：" + option.condition : "") + "\n" + option.text)] : []), ...(entry.eventComparison ? ["与原版的区别", ...entry.eventComparison.changes] : []), ...(entry.tenetLevels ?? []).map(level => `${level.level}: ${level.text}`)].filter(Boolean).join("\n") : undefined)) ?? relation?.effects?.[0]?.text ?? relation?.sources?.[0]?.text ?? "";
 const resolvedText = replaceEventPlaceholders(richResolvedText.replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1"));
 const categoryEntry = resolvedHref.startsWith("#entry-")
   ? allEntries(config).find(item => "#" + (item.id ? "entry-" + item.id : anchorFor(item.name)) === resolvedHref)
   : entry;
 const resolvedMeta = getReferenceCategory(config, categoryEntry, resolvedHref) ?? (meta === "相关机制" ? undefined : meta) ?? "";
 const textOnlyEntry = config.sections.some(section => ["traits", "religion"].includes(section.id) && section.items.some(item => item === entry));
 const resolvedImage = textOnlyEntry ? undefined : imageFor(config, image ?? (entry && "icon" in entry ? entry.icon : entry && "image" in entry ? entry.image : undefined));
 const positionPopover = (anchor: HTMLAnchorElement) => {
   setPreviewSeen(true);
   const popover = anchor.querySelector<HTMLElement>(".cross-popover");
   if (!popover) return;
   popover.style.left = "0px";
   const rect = anchor.getBoundingClientRect();
   const width = popover.getBoundingClientRect().width;
   const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
   popover.style.left = String(left - rect.left) + "px";
 };
 if (href === "" || (!entry && !relation && !href && !text)) return <>{replaceEventPlaceholders(name)}</>;
 return <><a className="cross-reference" data-reference-origin={originId} href={resolvedHref} target={target} rel={target ? "noopener noreferrer" : undefined} onMouseEnter={event => positionPopover(event.currentTarget)} onFocus={event => positionPopover(event.currentTarget)} onClick={event => { if (window.matchMedia("(hover: none), (pointer: coarse)").matches) { event.preventDefault(); setMobileOpen(true); } }}><span className="cross-label">{replaceEventPlaceholders(name)}</span><span className="cross-popover" role="tooltip">{resolvedImage && <span className="cross-image">{previewSeen && <ArchiveIcon src={resolvedImage} fill size={72} loading="eager" />}</span>}<span className="cross-copy"><small>{resolvedMeta}</small><b>{replaceEventPlaceholders(name)}</b><span>{resolvedText}</span><em>点击跳转至详情</em></span></span></a><MobileReferenceDialog originId={originId} open={mobileOpen} onClose={() => setMobileOpen(false)} name={replaceEventPlaceholders(name)} meta={resolvedMeta} text={resolvedText} href={resolvedHref} imageSrc={resolvedImage} target={target} /></>;
}

function renderLiteral(text: string, probabilities: boolean, keyPrefix: string): ReactNode[] {
 const value = replaceEventPlaceholders(text);
 if (!probabilities) return [value];
 return value.split(/(\d+(?:\.\d+)?%)(?=[：:]|\s*进入)/g).map((part, index) => index % 2 ? <u className="event-probability" key={keyPrefix + "-" + index}>{part}</u> : part);
}
function renderPlain(config: ArchiveRecordConfig, text: string, exclude?: string, probabilities = false, keyPrefix = "plain"): ReactNode[] {
 if (config.autoLink === false) return renderLiteral(text, probabilities, keyPrefix);
 const names = [...new Set(allEntries(config).map(item => item.name))].filter(name => name !== exclude).sort((a, b) => b.length - a.length);
 if (!names.length) return renderLiteral(text, probabilities, keyPrefix);
 const pattern = new RegExp("(" + names.map(name => name.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")).join("|") + ")", "g");
 return text.split(pattern).flatMap<ReactNode>((part, index) => names.includes(part) ? [<CrossReference key={keyPrefix + "-" + index} config={config} name={part} />] : renderLiteral(part, probabilities, keyPrefix + "-" + index));
}
export function RichText({ config, text, exclude, probabilities = false }: { config: ArchiveRecordConfig; text: string; exclude?: string; probabilities?: boolean }) {
 const marker = /<CrossReference name="([^"]+)"(?: href="([^"]+)")?(?: meta="([^"]+)")?(?: text="([^"]*)")?(?: image="([^"]+)")?(?: target="(_blank)")?\s*\/>/g;
 const nodes: ReactNode[] = [];
 let cursor = 0;
 let match: RegExpExecArray | null;
 while ((match = marker.exec(text))) {
   if (match.index > cursor) nodes.push(...renderPlain(config, text.slice(cursor, match.index), exclude, probabilities, "plain-" + cursor));
   nodes.push(<CrossReference key={"marker-" + match.index} config={config} name={match[1]} href={match[2]} meta={match[3]} text={match[4]} image={match[5]} target={match[6] === "_blank" ? "_blank" : undefined} />);
   cursor = marker.lastIndex;
 }
 if (cursor < text.length) nodes.push(...renderPlain(config, text.slice(cursor), exclude, probabilities, "plain-" + cursor));
 return <>{nodes}</>;
}

export function ExpandableRow({ config, entryId, name, seal, cost, image, baseGame = false, open, onToggle, children }: { config: ArchiveRecordConfig; entryId: string; name: string; seal?: number; cost?: number | string; image?: string; baseGame?: boolean; open: boolean; onToggle: (id: string) => void; children: ReactNode }) {
 return <article className={"expandable-row " + (baseGame ? "base-game-entry " : "") + (open ? "is-open" : "")} id={entryId}><button className="expandable-summary" type="button" onClick={() => onToggle(entryId)} aria-expanded={open}>{seal !== undefined && <span className="summary-seal">{seal}</span>}{image && <span className="summary-image"><ArchiveIcon src={imageFor(config, image)!} fill size={56} /></span>}<span className="summary-name">{replaceEventPlaceholders(name)}</span><ChevronDown className="summary-chevron" size={16} />{cost !== undefined && <span className="summary-cost"><small>消耗</small>{cost}</span>}</button><div className="expandable-content"><div className="expandable-inner">{children}</div></div></article>;
}
function RelationGroup({ config, title, items }: { config: ArchiveRecordConfig; title: string; items?: Relation[] }) {
 if (!items?.length) return null;
 return <div className="relation-group"><h4>{title}</h4><div className="relation-links">{items.map(item => <CrossReference key={title + "-" + item.name} config={config} name={item.name} href={item.href} meta={item.meta} text={item.text} image={item.image} target={item.target} />)}</div></div>;
}

function AbilityList({ config, abilities }: { config: ArchiveRecordConfig; abilities: DetailItem[] }) {
 return <div className="ability-list">{abilities.map((ability, index) => <div className={"ability" + (ability.baseGame ? " base-game-ability" : "")} id={ability.id ? "entry-" + ability.id : anchorFor(ability.name)} key={ability.id ?? ability.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{ability.name}</h4>{ability.image && <ArchiveIcon className="ability-icon" src={imageFor(config, ability.image)!} size={44} />}{ability.location && <div className="task-location"><b>执行地点</b><RichText config={config} text={ability.location} exclude={ability.name} /></div>}{ability.statLine && <div className="task-stat-line">{replaceEventPlaceholders(ability.statLine)}</div>}<p><RichText config={config} text={ability.text} exclude={ability.name} /></p>{ability.limit && <p><b>释放限制：</b><RichText config={config} text={ability.limit} exclude={ability.name} /></p>}</div></div>)}</div>;
}

export function EventConditionText({ config, text }: { config: ArchiveRecordConfig; text: string }) {
 text = normalizeReferenceMarkers(linkEventConditionReferences(normalizeReferenceMarkers(text)));
 const groups = relationshipConditionGroups(text);
 const body = (value: string) => {
  const lines = value.split("\n"), nodes: ReactNode[] = [];
  for (let index = 0; index < lines.length; index++) {
   if (/^\d+\.\s+/.test(lines[index])) {
    const items: string[] = [];
    while (index < lines.length && /^\d+\.\s+/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s+/, ""));
    nodes.push(<ol className="event-condition-list" key={index}>{items.map((item, number) => <li key={number}><RichText config={config} text={item} /></li>)}</ol>); index--;
   } else if (lines[index].trim()) nodes.push(<p className="event-condition-plain" key={index}><RichText config={config} text={lines[index]} /></p>);
  }
  return nodes;
 };
 return groups.length ? <div className="event-condition-groups">{groups.map(group => <section className="event-condition-group" key={group.label}><h5>{group.label}</h5>{body(group.text)}</section>)}</div>
  : <div className="event-condition-body">{body(text)}</div>;
}
function EventItemText({ config, item }: { config: ArchiveRecordConfig; item: DetailItem }) {
 return <div className="event-description">{normalizeReferenceMarkers(item.text).split("\n\n").map((paragraph, index) => {
  const condition = /^(触发条件|进入条件)[：:]?\n([\s\S]*)$/.exec(paragraph);
  const repeat = /^(触发次数|触发限制)[：:]?\n([\s\S]*)$/.exec(paragraph);
  return condition ? <section className="event-trigger-conditions" key={index}><h4>{condition[1]}</h4><EventConditionText config={config} text={condition[2]} /></section>
   : repeat ? <section className="event-repeat-info" key={index}><h4>{repeat[1]}</h4><p><RichText config={config} text={repeat[2]} exclude={item.name} /></p></section>
   : <p key={index}><RichText config={config} text={paragraph} exclude={item.name} probabilities /></p>;
 })}</div>;
}

function EventOptionsBlock({ config, item }: { config: ArchiveRecordConfig; item: DetailItem }) {
 const options = item.eventOptions ?? [];
 const conditional = options.length > 0 && options.every(option => option.conditionGroup !== undefined);
 const groups = conditional ? [...new Set(options.map(option => option.conditionGroup))].map(key => options.filter(option => option.conditionGroup === key)) : [options];
 const fixedResults = conditional && groups.every(group => group.length === 1);
 const choices = (entries: typeof options) => <ol>{entries.map((option, index) => <li key={index}>
  <h5>{replaceEventPlaceholders(option.name)}</h5>
  {option.condition && <div className="option-condition"><b>条件</b><EventConditionText config={config} text={formatOptionCondition(option.condition)} /></div>}
  <p><RichText config={config} text={option.text} exclude={item.name} probabilities /></p>
 </li>)}</ol>;
 return <div className="event-options" data-choice-mode={fixedResults ? "conditional-results" : conditional ? "conditional-groups" : "player-choice"}>
  <h4>{fixedResults ? "条件结果" : conditional ? "条件分支" : "事件选项"}</h4>
  {conditional && <p className="event-choice-rule">{fixedResults ? "按条件进入对应结果。" : "不同条件对应以下结果；同组内有多个可选项时，由玩家选择。"}</p>}
  {conditional && !fixedResults ? groups.map((group, index) => <section className="event-choice-group" key={index}><h5>{group.length === 1 ? "对应结果" : "可选结果"}</h5>{choices(group)}</section>) : choices(options)}
 </div>;
}

export function DetailGrid({ config, items, openEntries, onToggle }: { config: ArchiveRecordConfig; items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void }) {
 return <div className="expandable-table">{items.map(item => { const id = item.id ? "entry-" + item.id : anchorFor(item.name); const relation = config.relations?.[item.id ?? item.name] ?? config.relations?.[item.name]; return <ExpandableRow key={id} config={config} entryId={id} name={item.name} seal={item.seal} image={item.image} baseGame={item.baseGame} open={openEntries.has(id)} onToggle={onToggle}>{item.tenetRange && <small className="tenet-range">等级范围：{item.tenetRange}</small>}{item.meta && <div className="expanded-meta">{config.id === "base-items" ? <RichText config={config} text={item.meta} exclude={item.name} /> : replaceEventPlaceholders(item.meta)}</div>}{item.modifierLocations && <div className="modifier-applicability"><b>适用地点</b><RichText config={config} text={item.modifierLocations} exclude={item.name} /></div>}{item.location && <div className="task-location"><b>执行地点</b><RichText config={config} text={item.location} exclude={item.name} /></div>}{item.time && <div className="detail-stat-line"><b>执行时间：</b>{item.time}</div>}{item.initialValue && !/未找到/.test(item.initialValue) && <div className="detail-stat-line"><b>初始值：</b><RichText config={config} text={item.initialValue} exclude={item.name} /></div>}{item.stats && <div className="detail-stat-line"><b>基础属性：</b><RichText config={config} text={item.stats} exclude={item.name} /></div>}{item.abilities?.length ? <AbilityList config={config} abilities={item.abilities} /> : null}{item.statLine && <div className="task-stat-line">{replaceEventPlaceholders(item.statLine)}</div>}{item.positiveTags && <div className="detail-stat-line"><b>正面标签：</b>{item.positiveTags}</div>}{item.negativeTags && <div className="detail-stat-line"><b>负面标签：</b>{item.negativeTags}</div>}{item.acquisition !== undefined ? <><div className="expanded-section"><h4>功能</h4><p><RichText config={config} text={item.text} exclude={item.name} /></p></div>{item.acquisition && <div className="expanded-section item-acquisition"><h4>获取方式</h4><p><RichText config={config} text={item.acquisition} exclude={item.name} /></p></div>}</> : item.limit ? <><div className="expanded-section"><h4>具体效果</h4><p><RichText config={config} text={item.text} exclude={item.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText config={config} text={item.limit} exclude={item.name} /></p></div></> : item.modifierSource ? <div className="expanded-section"><h4>造成的效果</h4><p><RichText config={config} text={item.text} exclude={item.name} /></p></div> : item.text ? item.eventCategory || item.eventOptions ? <EventItemText config={config} item={item} /> : <p><RichText config={config} text={item.text} exclude={item.name} /></p> : null}{item.tenetLevels?.map(level => <p className="tenet-level" key={level.level}><b>{level.level}:</b> <RichText config={config} text={level.text} exclude={item.name} /></p>)}{item.images?.length && item.eventCategory ? <div className="event-image-variants">{item.images.map(image => <img key={image} src={imageFor(config, image)} alt={item.name + " · 幻象插图"} loading="lazy" />)}</div> : null}{item.eventRepeat?.once && <section className="event-repeat-info event-once"><h4>一次性事件</h4></section>}{item.eventRepeat?.interval && <section className="event-repeat-info"><h4>触发间隔</h4><p><RichText config={config} text={item.eventRepeat.interval} exclude={item.name} /></p></section>}{item.eventOptions?.length ? <EventOptionsBlock config={config} item={item} /> : null}{item.eventOriginal && <div className="event-original-link">事件页：<CrossReference config={config} {...item.eventOriginal} /></div>}<EventComparisonBlock config={config} comparison={item.eventComparison} />{item.modifierSource && <div className="expanded-section modifier-source-text"><h4>来源</h4><p><RichText config={config} text={item.modifierSource} exclude={item.name} /></p></div>}{item.modifierChange && (item.modifierChange.natural || item.modifierChange.external) && <div className="modifier-change"><h4>变化方式</h4>{item.modifierChange.natural && <p><RichText config={config} text={item.modifierChange.natural} exclude={item.name} /></p>}{item.modifierChange.external && <p><RichText config={config} text={item.modifierChange.external} exclude={item.name} /></p>}</div>}<RelationGroup config={config} title="来源" items={relation?.sources} /><RelationGroup config={config} title="造成的效果" items={relation?.effects} /></ExpandableRow>; })}</div>;
}

export function EventComparisonBlock({ config, comparison }: { config: ArchiveRecordConfig; comparison?: EventComparison }) {
 if (!comparison) return null;
 return <div className="event-comparison"><h4>与原版的区别</h4><p className="event-original"><span>原版事件：</span><CrossReference config={config} {...comparison.original} /></p><ul>{comparison.changes.map((change, index) => <li key={index}><RichText config={config} text={change} /></li>)}</ul></div>;
}
function GodEventGroups({ config, items, openEntries, onToggle }: { config: ArchiveRecordConfig; items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void }) {
 const categories = [{id: "gods", name: "神祇限定事件"}, {id: "tasks", name: "任务中事件"}, {id: "relationships", name: "人物关系事件"}, {id: "other", name: "其他事件"}, {id: "ruins", name: "遗迹事件"}, {id: "chains", name: "系列事件"}] as const;
 const records = godEventRecords(config, items);
 return <div className="god-event-groups">{categories.map(category => {
  const entries = records.filter(record => record.category === category.id);
  if (!entries.length) return null;
  return <div className="event-category" id={"events-" + category.id} key={category.id}><h3>{category.name}</h3>
   <EventVariants config={config} records={entries.filter(record => !record.chain)} openEntries={openEntries} onToggle={onToggle} />
   {[...new Set(entries.filter(record => record.chain).map(record => record.chain!.id))].map(chainId => {
    const nodes = entries.filter(record => record.chain?.id === chainId);
    return <EventSeries key={chainId} config={config} records={nodes} openEntries={openEntries} onToggle={onToggle} />;
   })}
  </div>;
 })}</div>;
}

function sectionIcon(id: string) {
 switch (id) {
  case "hero-tasks": return <Swords size={16} />;
  case "religious-tasks": return <BookOpen size={16} />;
  case "challenges": return <ShieldAlert size={16} />;
  case "armies": return <Skull size={16} />;
  case "ruler-actions": return <Crown size={16} />;
  default: return null;
 }
}
function LocationTaskGroups({ config, items, openEntries, onToggle }: { config: ArchiveRecordConfig; items: DetailItem[]; openEntries: Set<string>; onToggle: (id: string) => void }) {
 return <div className="task-location-groups">{taskLocationGroups(items, config).map((group, index) => <div className="task-location-group" key={index}>
  <h3><RichText config={config} text={group.title} /></h3><DetailGrid config={config} items={group.items} openEntries={openEntries} onToggle={onToggle} />
 </div>)}</div>;
}
function GodPlaceArticles({ config, section, openEntries, onToggle }: { config: ArchiveRecordConfig; section: SectionConfig; openEntries: Set<string>; onToggle: (id: string) => void }) {
 return <div className="god-place-articles">{section.placeArticles?.map(article => <section className="god-place-article" id={article.id} key={article.id}>
  <header><h3>{article.name}</h3>{article.unplaced && <small>未找到正常生成路径</small>}</header>
  {article.blocks.map((block, index) => <div className={"god-place-block" + (block.title === "介绍" ? " place-overview" : "")} key={index}>
   <h4>{block.title}</h4><DetailGrid config={config} items={block.entryIds.map(id => section.items.find(item => item.id === id)!).filter(Boolean)} openEntries={openEntries} onToggle={onToggle} />
  </div>)}
 </section>)}</div>;
}

function RecordSection({ config, section, index, openEntries, onToggle }: { config: ArchiveRecordConfig; section: SectionConfig; index: string; openEntries: Set<string>; onToggle: (id: string) => void }) {
 if (!section.items.length) return null;
 return <section id={section.id} className="section records-section"><div className="plain-heading"><p className="section-index">{(section.icon ?? sectionIcon(section.id)) && <span className="section-icon" aria-hidden="true">{section.icon ?? sectionIcon(section.id)}</span>}{index} / {section.title}</p><h2>{section.title}</h2></div>{section.placeArticles ? <GodPlaceArticles config={config} section={section} openEntries={openEntries} onToggle={onToggle} /> : ["challenges", "hero-tasks", "religious-tasks", "ruler-actions"].includes(section.id) ? <LocationTaskGroups config={config} items={section.items} openEntries={openEntries} onToggle={onToggle} /> : section.id === "events" ? <GodEventGroups config={config} items={section.items} openEntries={openEntries} onToggle={onToggle} /> : <DetailGrid config={config} items={section.items} openEntries={openEntries} onToggle={onToggle} />}</section>;
}

function PowerSection({ config, powers, id, index, title, openEntries, onToggle, hideSeal = false, hideCost = false }: { config: ArchiveRecordConfig; powers: PowerItem[]; id: string; index: string; title: string; openEntries: Set<string>; onToggle: (id: string) => void; hideSeal?: boolean; hideCost?: boolean }) {
 return <section id={id} className="section powers-section records-section"><div className="plain-heading"><p className="section-index">{index} / {title}</p><h2>{title}</h2><div className="power-legend"><span><Eye size={16} />效果</span><span><Shield size={16} />限制</span></div></div><div className="expandable-table powers-table">{powers.map(power => { const entryId = power.id ? "entry-" + power.id : anchorFor(power.name); return <ExpandableRow key={entryId} config={config} entryId={entryId} name={power.name} seal={hideSeal ? undefined : power.seal} cost={hideCost ? undefined : power.cost} image={power.icon} open={openEntries.has(entryId)} onToggle={onToggle}><div className="expanded-section"><h4>具体效果</h4>{power.images?.length ? <div className="power-image-variants">{power.images.map(image => <img key={image} src={imageFor(config, image)} alt={power.name} />)}</div> : null}<p><RichText config={config} text={power.effect} exclude={power.name} /></p></div><div className="expanded-section"><h4>释放限制</h4><p><RichText config={config} text={power.limit} exclude={power.name} /></p></div><RelationGroup config={config} title="来源" items={config.relations?.[power.name]?.sources} /><RelationGroup config={config} title="造成的效果" items={config.relations?.[power.name]?.effects} /></ExpandableRow>; })}</div></section>;
}


function OverviewSection({ config }: { config: GodConfig }) {
 const extra = config.overviewExtra;
 return <section id="loop" className="section overview-section">
  <div className="section-heading"><p className="section-index">01 / 基础信息与核心玩法</p><h2>基础信息与核心玩法</h2></div>
  <div className="overview-layout"><article className="overview-main">
   <h3>核心玩法</h3>
   <ol className="core-sequence">{config.core.map((line,index) => <li key={index}><span>{String(index+1).padStart(2,"0")}</span><p><RichText config={config} text={line} /></p></li>)}</ol>
   {extra?.playStyle && <div className="overview-subsection play-style"><h3>玩法风格</h3><p><RichText config={config} text={extra.playStyle} /></p></div>}
   {extra?.text && <div className="overview-subsection extra-information">{extra.title && <h3>{extra.title}</h3>}<p><RichText config={config} text={extra.text} /></p></div>}
  </article><aside className="basic-facts"><h3>基础信息</h3><dl>
   {config.unlockMethod && <div className="unlock-method"><dt>封印解锁方式</dt><dd>{config.unlockMethod}</dd></div>}
   {config.sourceMod && <div><dt>来源 mod</dt><dd>{config.sourceMod}</dd></div>}
   {config.dlc && <div><dt>DLC 兼容性</dt><dd>{config.dlc}</dd></div>}
   <div><dt>最大回合数</dt><dd>{config.maxTurns}</dd></div><div><dt>苏醒</dt><dd>{config.awaken}</dd></div><div><dt>苏醒时世界恐慌</dt><dd>{config.panic}</dd></div>
   <div><dt>初始 Agent 上限</dt><dd>{config.initialAgents ?? config.seals[0]?.agents}</dd></div><div><dt>最终 Agent 上限</dt><dd>{config.finalAgents}</dd></div>
   {!config.supplicant && <div><dt>初始 Agent</dt><dd>没有初始 Agent</dd></div>}
  </dl><div className="special-victory"><h3>特殊胜利</h3><p><RichText config={config} text={config.specialVictory ?? "无"} /></p></div>
  <div className="special-failure"><h3>特殊失败</h3><p><RichText config={config} text={config.specialFailure ?? "无"} /></p></div></aside></div>
 </section>;
}

function SealSection({ config }: { config: GodConfig }) {
 const progressTitle = config.unlockMethod === "常规回合解锁" ? "回合" : "阈值";
 return <section id="seals" className="section seals-section"><div className="section-heading row-heading"><div><p className="section-index">02 / 封印</p><h2>封印</h2></div></div>
  <div className="seal-table" role="table" aria-label="封印"><div className="seal-head" role="row"><span role="columnheader">封印</span><span role="columnheader">{progressTitle}</span><span role="columnheader">AGENT</span><span role="columnheader">神力</span><span role="columnheader" className="seal-reward">本阶段内容</span></div>
  {config.seals.map(item => <div className="seal-row" role="row" key={item.seal}>
   <span className="seal-number" role="cell">{item.seal}</span><span className="turn" role="cell">{item.progressText ?? item.progress}</span><span className="agent-count" role="cell">{item.agents}</span><span className="power-gain" role="cell">{item.powerRecovery}</span>
   <span className="seal-reward" role="cell">{item.reward.map((reward,index) => <span className="seal-reference-item" key={reward}><RichText config={config} text={reward} />{index<item.reward.length-1 && <i>、</i>}</span>)}</span>
  </div>)}</div>
  <div className="seal-formula"><b>神力</b><div>{config.powerCapacity && <p><RichText config={config} text={config.powerCapacity} /></p>}<p><RichText config={config} text={config.powerRecovery} /></p></div></div>
 </section>;
}

export function GodArchive({ config, onGodChange }: { config: GodConfig; onGodChange: (god: ArchiveGodChoice) => void }) {
 const root = useRef<HTMLElement>(null);
 const { sidebarHidden, setSidebarHidden, closeMobileSidebar, onSidebarClick } = useArchiveSidebar();
 const [openEntries, setOpenEntries] = useState<Set<string>>(new Set());
 const details = allEntries(config);
 const allIds = details.map(item => item.id ? "entry-" + item.id : anchorFor(item.name)).concat(eventPresentationCardIds(godEventRecords(config, config.sections.find(section => section.id === "events")?.items ?? [])));
 if (config.supplicant) allIds.push(anchorFor("Supplicant"));
 const revealEntry = (id: string) => setOpenEntries(current => {
   const next = new Set(current).add(id);
   if (config.supplicant?.abilities.some(item => (item.id ? "entry-" + item.id : anchorFor(item.name)) === id)) next.add(anchorFor("Supplicant"));
   config.sections.flatMap(section => section.items).forEach(parent => { if (parent.abilities?.some(item => (item.id ? "entry-" + item.id : anchorFor(item.name)) === id)) next.add(parent.id ? "entry-" + parent.id : anchorFor(parent.name)); });
   return next;
 });
 const onArchiveClick = useArchiveNavigation(revealEntry);
 const toggle = (id: string) => setOpenEntries(current => { const next = new Set(current); next.has(id) ? next.delete(id) : next.add(id); return next; });
 useGSAP(() => { if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; gsap.from(".hero-line", { yPercent: 115, duration: 1.05, ease: "power4.out" }); gsap.from(".hero-portrait", { scale: 1.06, opacity: 0, duration: 1.2, ease: "power3.out" }); gsap.utils.toArray<HTMLElement>(".reveal-image").forEach(el => gsap.fromTo(el, { scale: 1.08, opacity: .2 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: el, start: "top 92%", end: "bottom 58%", scrub: .8 } })); }, { scope: root });
 const powerGroups = (config.powerGroups ?? []).filter(group => group.powers.length);
 const hasAgent = Boolean(config.supplicant);
 const hasDrawPowers = Boolean(config.drawPowers?.length);
 const drawPowerIndex = 4 + powerGroups.length;
 const drawCardIndex = drawPowerIndex + (hasDrawPowers ? 1 : 0);
 const afterPowers = drawCardIndex + (config.drawCards ? 1 : 0);
 const agentIndex = String(afterPowers).padStart(2, "0");
 const sectionStart = afterPowers + (hasAgent ? 1 : 0);
 const nav: string[][] = [
   ["00", "top", "概览"], ["01", "loop", "基础信息与核心玩法"], ["02", "seals", "封印"], ["03", "powers", "神力"],
   ...powerGroups.map((group, index) => [String(4 + index).padStart(2, "0"), group.id, group.title]),
   ...(hasDrawPowers ? [[String(drawPowerIndex).padStart(2, "0"), "draw-powers", "卡牌神力"]] : []),
   ...(config.drawCards ? [[String(drawCardIndex).padStart(2, "0"), "draw-cards", "抽取卡牌"]] : []),
   ...(hasAgent ? [[agentIndex, "agent", "初始 Agent 能力"]] : []),
   ...config.sections.filter(section => section.items.length).map((section, index) => [String(index + sectionStart).padStart(2, "0"), section.id, section.title])
 ];
  return <main ref={root} className={"site-shell " + config.theme + (sidebarHidden ? " sidebar-hidden" : "")} onClick={onArchiveClick}><SidebarBackdrop hidden={sidebarHidden} onClose={closeMobileSidebar} /><aside className="sidebar" onClick={onSidebarClick}><div className="sidebar-head"><div className="sidebar-brand"><span className="brand-mark"><GodMark god={config.id} /></span><span><b>{config.name.replace(/\s+/g, " ")}</b><small>神祇资料库</small></span></div><button className="sidebar-toggle" type="button" aria-expanded={!sidebarHidden} aria-label={sidebarHidden ? "展开侧边栏" : "收起侧边栏"} onClick={() => setSidebarHidden(value => !value)}>{sidebarHidden ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div><a className="sidebar-index-link" href="./">← 返回索引页</a><nav className="sidebar-nav">{nav.map(([index, id, label]) => <a href={"#" + id} key={id}><span>{index}</span><b>{label}</b></a>)}</nav><div className="sidebar-bulk"><button type="button" onClick={() => setOpenEntries(new Set(allIds))}>全部展开</button><button type="button" onClick={() => setOpenEntries(new Set())}>全部收起</button></div><p className="sidebar-note">悬浮带下划线的名称可查看说明，点击可跳转至详情。</p></aside><div className="content-shell"><header id="top" className="hero"><div className="hero-backdrop"><Image src={imageFor(config, config.background)!} alt="" fill priority sizes="100vw" /></div><div className="hero-copy"><p className="eyebrow"><span>神祇档案 {config.number}</span><span>{config.caption}</span></p><div className="hero-title-wrap"><h1><span className="title-mask"><span className="hero-line">{config.name}</span></span></h1></div><div className="hero-facts"><div><b>{config.heroMetric?.value ?? (config.awaken.replace(/[^0-9]/g, "") || "—")}</b><span>{config.heroMetric?.label ?? ((config.progressLabel === "吞噬进度" || config.id === "cordyceps" || config.id === "escamrak") ? "封印阈值" : "回合苏醒")}</span></div><div><b>{config.finalAgents}</b><span>最终 Agent 上限</span></div><div><b>{config.panic}</b><span>苏醒时世界恐慌</span></div></div></div><div className="hero-art"><div className="portrait-frame hero-portrait reveal-image"><Image src={imageFor(config, config.portrait)!} alt={config.name + " 神祇立绘"} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div></div></header><OverviewSection config={config} /><SealSection config={config} /><PowerSection config={config} powers={config.powers} id="powers" index="03" title="神力" openEntries={openEntries} onToggle={toggle} />{powerGroups.map((group, index) => <PowerSection key={group.id} config={config} powers={group.powers} id={group.id} index={String(4 + index).padStart(2, "0")} title={group.title} openEntries={openEntries} onToggle={toggle} />)}{hasDrawPowers && <PowerSection config={config} powers={config.drawPowers ?? []} id="draw-powers" index={String(drawPowerIndex).padStart(2, "0")} title="卡牌神力" hideSeal hideCost openEntries={openEntries} onToggle={toggle} />}{config.drawCards && <RecordSection config={config} section={config.drawCards} index={String(drawCardIndex).padStart(2, "0")} openEntries={openEntries} onToggle={toggle} />}{config.supplicant ? <section id="agent" className="section records-section agent-record"><div className="plain-heading"><p className="section-index">{agentIndex} / 初始 Agent 能力</p><h2>初始 Agent 能力</h2></div><div className="expandable-table"><ExpandableRow config={config} entryId={anchorFor("Supplicant")} name={config.supplicant.name ?? "Supplicant"} image={config.supplicant.image} open={openEntries.has(anchorFor("Supplicant"))} onToggle={toggle}><p className="agent-stat-line"><b>基础属性：</b>{config.supplicant.stats}</p>{config.supplicant.abilities.length ? <AbilityList config={config} abilities={config.supplicant.abilities} /> : <p>没有额外的初始 Agent 能力。</p>}</ExpandableRow></div></section> : null}{config.sections.map((section, index) => <RecordSection config={config} section={section} index={String(index + sectionStart).padStart(2, "0")} openEntries={openEntries} onToggle={toggle} key={section.id} />)}<footer className="archive-footer"><a className="sidebar-index-link" href="./">← 返回索引页</a></footer></div></main>;
}
