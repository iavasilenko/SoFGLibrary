"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { Maximize2, X } from "lucide-react";
import { EventConditionText, RichText } from "./BaseGodArchive";
import type { ArchiveRecordConfig } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";
import { combatDecision, selectionRoutes, conditionSelectsVariant, resultSelectionLabels } from "./EventDecisionModel";
import { variantLabel } from "./EventBranchLabels";
import { familySelectionRule, type EventFamily } from "./EventVariantModel";
import { conciseEventTrigger } from "./EventPresentation";
import { formatEventConditions } from "./EventConditionPresentation";
import { replaceEventPlaceholders } from "./EventPlaceholders";
import { compactSeriesTiming } from "./EventRelatedSeries";

type Props = { config: ArchiveRecordConfig; family: EventFamily };

function FlowArrow({ label }: { label?: string }) {
 const marker = useId().replaceAll(":", "");
 return <div className="event-chart-arrow">
  <svg viewBox="0 0 200 42" aria-hidden="true">
   <defs><marker id={marker} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" /></marker></defs>
   <path d="M100 0 V37" markerEnd={"url(#" + marker + ")"} />
   {label && <text x="110" y="23">{label}</text>}
  </svg>
 </div>;
}

function Conditions({ config, text, label }: { config: ArchiveRecordConfig; text: string; label: string }) {
 return <div className="event-chart-node event-chart-condition">
  <b>{label}</b>
  <EventConditionText config={config} text={text} />
 </div>;
}

type ForkItem = { key: string; label: string; body: ReactNode };
function FlowFork({ items, className = "" }: { items: ForkItem[]; className?: string }) {
 const ref = useRef<HTMLDivElement>(null);
 const marker = useId().replaceAll(":", "");
 const [lines, setLines] = useState<{ width: number; height: number; paths: string[] }>({ width: 1, height: 1, paths: [] });
 useLayoutEffect(() => {
  const element = ref.current;
  if (!element) return;
  let frame = 0;
  const measure = () => {
   cancelAnimationFrame(frame);
   frame = requestAnimationFrame(() => {
    const bounds = element.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const nodes = [...element.querySelectorAll(":scope > .event-chart-fork-items > .event-chart-branch")];
    const oneRow = new Set(nodes.map(node => Math.round(node.getBoundingClientRect().top))).size === 1;
    const paths = nodes.map(node => {
     const target = node.getBoundingClientRect();
     const x = target.left - bounds.left + target.width / 2, y = target.top - bounds.top;
     return oneRow ? "M" + bounds.width / 2 + " 0 V" + (y - 18) + " H" + x + " V" + (y - 3)
      : "M" + bounds.width / 2 + " 0 V12 H7 V" + (y - 18) + " H" + x + " V" + (y - 3);
    });
    setLines(current => {
     const next = { width: bounds.width, height: bounds.height, paths };
     return JSON.stringify(current) === JSON.stringify(next) ? current : next;
    });
   });
  };
  const observer = new ResizeObserver(measure);
  observer.observe(element);
  for (const node of element.querySelectorAll(":scope > .event-chart-fork-items > .event-chart-branch")) observer.observe(node);
  measure();
  return () => { cancelAnimationFrame(frame); observer.disconnect(); };
 }, [items.length]);
 return <div ref={ref} className={"event-chart-fork " + className} style={{ "--chart-columns": Math.min(2, items.length), "--chart-wide-columns": Math.min(3, items.length) } as CSSProperties}>
  <svg className="event-chart-connections" width="100%" height="100%" viewBox={"0 0 " + lines.width + " " + lines.height} aria-hidden="true">
   <defs><marker id={marker} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" /></marker></defs>
   {lines.paths.map((path, index) => <path key={index} d={path} markerEnd={"url(#" + marker + ")"} />)}
  </svg>
  <div className="event-chart-fork-items">{items.map(item =>
   <section key={item.key} className="event-chart-branch" aria-label={item.label}>
    <div className="event-chart-branch-label">{item.label}</div>{item.body}
   </section>)}</div>
 </div>;
}


function ChartContent({ config, family }: Props) {
 const { records } = family;
 const conditionSelected = conditionSelectsVariant(records);
 const nodeLabel = (record: EventRecord) => family.series ? "节点 " + (Number(/节点\s*(\d+)/.exec(record.entry.meta ?? "")?.[1]) || records.indexOf(record) + 1) : variantLabel(record);
 const seriesText = (text: string) => !family.series ? text : text.replace(/<CrossReference name="[^"]+" href="#entry-([^"]+)"\s*\/>/g, (full, id: string) => {
  const target = records.find(record => record.entry.id === id);
  return target ? nodeLabel(target) : full;
 });
 const reference = (record: EventRecord) => '<CrossReference name="' + nodeLabel(record) + ' · ' + (record.entry.eventOptions?.every(option => option.conditionGroup !== undefined) && new Set(record.entry.eventOptions.map(option => option.conditionGroup)).size === record.entry.eventOptions.length ? "条件结果" : "选项与效果") + '" href="#entry-' + record.entry.id + '" />';
 const results = (entries: EventRecord[]) => {
  const { relative, labels } = resultSelectionLabels(entries, records);
  return <div className="event-chart-node event-chart-result-group">
   {entries.length > 1 && <b>{relative ? "组内随机结果" : "可触发节点"}</b>}
   {relative && <p className="event-chart-probability-note">抽中本框所列结果时的相对概率：</p>}
   {entries.map((record, index) => <div key={record.entry.id} className="event-chart-result event-flow-result" data-event-id={record.entry.id}>
    <RichText config={config} text={reference(record)} />
    {labels[index] && <p><u className="event-probability">{labels[index]}</u></p>}
   </div>)}
  </div>;
 };
 const combat = combatDecision(records);
 if (combat) {
  const roles = combat.opponents.flatMap(opponent => opponent.roles);
  const fixedRole = new Set(roles.map(role => role.name)).size === 1 ? roles[0].name : "";
  const states = roles.flatMap(role => role.results.map(entry => entry.state));
  const fixedState = new Set(states).size === 1 ? states[0] : "";
  const fixedOpponent = combat.opponents.length === 1 ? combat.opponents[0].name : "";
  const entry = [fixedOpponent && "与 " + fixedOpponent + " 战斗", fixedRole && "Agent 作为" + fixedRole, fixedRole ? combat.outcome.replace("Agent ", "") : combat.outcome, fixedState].filter(Boolean).join("，");
  const branches = combat.opponents.flatMap(opponent => opponent.roles.flatMap(role => role.results.map(({ state, record }) => ({
   key: record.entry.id!, label: variantLabel(record),
   body: <>
    <div className="event-chart-node event-chart-condition">{[
     !fixedOpponent && "对手：" + opponent.name, !fixedRole && "Agent：" + role.name, !fixedState && state,
    ].filter(Boolean).map((text, index) => <p key={index}>{text}</p>)}</div>
    <FlowArrow />{results([record])}
   </>,
  }))));
  return <div className="event-chart-content event-combat-decision">
   <div className="event-chart-node event-chart-start"><b>战斗结算</b><p>{entry}</p></div>
   <FlowFork className="event-chart-combat-fork" items={branches} />
  </div>;
 }
 const routes = selectionRoutes(records);
 const relationship = records.every(record => record.type === "P2P");
 const displayConditions = (text: string) => formatEventConditions(seriesText(family.series?.mode === "related" ? compactSeriesTiming(text) : text), relationship);
 const drawBranch = (branch: typeof routes[number]["branches"][number]) => <>
  {branch.condition && displayConditions(branch.condition) && <><Conditions config={config} text={displayConditions(branch.condition)} label="分支条件" /><FlowArrow /></>}
  {results(branch.records)}
 </>;
 return <div className="event-chart-content">
  <p className="event-chart-rule">{family.series ? "各节点按下列入口与条件触发。" : conditionSelected ? "按条件区分事件版本。" : familySelectionRule(records)}</p>
  {records.some(record => record.entry.eventOptions?.some(option => option.conditionGroup !== undefined)) && <p className="event-chart-choice-rule">事件内按条件进入对应结果；同一条件下仍有多个可选项时，由玩家选择。</p>}
  <div className="event-chart-routes">{routes.map((route, routeIndex) =>
   <section className="event-flow-route" key={route.trigger} aria-label={"触发入口 " + (routeIndex + 1)}>
    <div className="event-chart-node event-chart-start"><b>{routes.length > 1 ? "入口 " + String(routeIndex + 1).padStart(2, "0") : "触发入口"}</b>
     <p><RichText config={config} text={seriesText(conciseEventTrigger(route.trigger)).replaceAll("事件链", "系列事件")} /></p>
    </div>
    <FlowArrow />
    {route.shared && displayConditions(route.shared) && <><Conditions config={config} text={displayConditions(route.shared)} label="共同条件" /><FlowArrow /></>}
    {route.branches.length === 1 ? <div className="event-chart-single-result">{drawBranch(route.branches[0])}</div>
     : <FlowFork items={route.branches.map((branch, index) => ({
      key: String(index), label: branch.records.map(nodeLabel).join("、"), body: drawBranch(branch),
     }))} />}
   </section>)}</div>
 </div>;
}

export default function EventDecisionFlow({ config, family }: Props) {
 const dialogRef = useRef<HTMLDialogElement>(null);
 const figureRef = useRef<HTMLElement>(null);
 const opener = useRef<HTMLButtonElement>(null);
 const [expanded, setExpanded] = useState(false);
 useEffect(() => {
  if (!expanded) return;
  const dialog = dialogRef.current!;
  const overflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  dialog.showModal();
  return () => { dialog.close(); document.body.style.overflow = overflow; opener.current?.focus({ preventScroll: true }); };
 }, [expanded]);
 const close = () => setExpanded(false);
 return <figure ref={figureRef} className="event-decision" aria-label={family.name + "判定流程图"}>
  <button ref={opener} type="button" className="event-chart-expand" onClick={() => setExpanded(true)}><Maximize2 size={15} />放大流程图</button>
  <ChartContent config={config} family={family} />
  {expanded && <dialog ref={dialogRef} className="event-chart-dialog" aria-label={family.name + "判定流程图"} onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}
   onClickCapture={event => {
    const link = (event.target as Element).closest(".cross-reference");
    if (!link) return;
    const inlineChart = figureRef.current?.querySelector(":scope > .event-chart-content");
    const target = [...(inlineChart?.querySelectorAll<HTMLAnchorElement>(".cross-reference") ?? [])].find(anchor => anchor.getAttribute("href") === link.getAttribute("href"));
    if (!target) return;
    event.preventDefault(); event.stopPropagation();
    const mouse = { bubbles: true, cancelable: true, view: window, ctrlKey: event.ctrlKey, metaKey: event.metaKey, shiftKey: event.shiftKey, altKey: event.altKey };
    close();
    // Keep preview state on the permanent inline reference, not on a link
    // that will be unmounted with this enlarged dialog.
    queueMicrotask(() => target.dispatchEvent(new MouseEvent("click", mouse)));
   }}>
   <header><div><small>判定流程图</small><h3>{replaceEventPlaceholders(family.name)}</h3></div><button type="button" aria-label="关闭流程图" onClick={close}><X size={22} /></button></header>
   <div className="event-chart-dialog-body"><ChartContent config={config} family={family} /></div>
  </dialog>}
 </figure>;
}
