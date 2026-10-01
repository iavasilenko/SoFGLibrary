import { variantLabel } from "./EventBranchLabels";
import { eventSelectionCases } from "./EventSelectionCases";
import { formatEventConditions } from "./EventConditionPresentation";
import { mutuallyExclusive } from "./EventConditionLogic";

import type { EventRecord } from "./EventTypes";

export type DecisionBranch = { condition: string; records: EventRecord[] };
export type DecisionRoute = { trigger: string; shared: string; branches: DecisionBranch[] };

// Only this delimiter represents top-level AND terms. Nested OR expressions
// remain intact, including their parentheses and original precedence.
export function splitFamilyConditions(records: EventRecord[]) {
 const parts = records.map(record => record.decision.condition ? record.decision.condition.split("\n并且 ") : []);
 const shared = [...new Set(parts[0] ?? [])].filter(part => !/后段|解析错误|未确认/.test(part) && parts.every(list => list.includes(part)));
 return { shared: shared.join("\n并且 "), remaining: parts.map(list => list.filter(part => !shared.includes(part)).join("\n并且 ")) };
}

export function decisionRoutes(records: EventRecord[]): DecisionRoute[] {
 const routes = new Map<string, EventRecord[]>();
 for (const record of records) {
  const group = routes.get(record.decision.trigger);
  if (group) group.push(record);
  else routes.set(record.decision.trigger, [record]);
 }
 return [...routes].map(([trigger, entries]) => {
  const { shared, remaining } = splitFamilyConditions(entries);
  const branches = new Map<string, DecisionBranch>();
  entries.forEach((record, index) => {
   const condition = remaining[index], branch = branches.get(condition);
   if (branch) branch.records.push(record);
   else branches.set(condition, { condition, records: [record] });
  });
  return { trigger, shared, branches: [...branches.values()] };
 });
}

export type CombatDecision = {
 outcome: string;
 opponents: { name: string; roles: { name: string; results: { state: string; record: EventRecord }[] }[] }[];
};

// Use the compact combat tree only when every trigger matches the documented
// callback description exactly. All other families retain their full text.
export function combatDecision(records: EventRecord[]): CombatDecision | undefined {
 const parsed = records.map(record => /^与(.+?)战斗，Agent 作为(进攻者|防守者)，(获胜|战败)，败方(死亡|撤退)时显示。$/.exec(record.decision.trigger));
 if (!records.length || records.some(record => record.type !== "INERT" || record.decision.condition || record.decision.selection) ||
  parsed.some(match => !match) || !parsed.every(match => match![3] === parsed[0]![3])) return;
 const opponents: CombatDecision["opponents"] = [];
 records.forEach((record, index) => {
  const match = parsed[index]!, name = match[1].trim();
  let opponent = opponents.find(value => value.name === name);
  if (!opponent) { opponent = { name, roles: [] }; opponents.push(opponent); }
  let role = opponent.roles.find(value => value.name === match[2]);
  if (!role) { role = { name: match[2], results: [] }; opponent.roles.push(role); }
  role.results.push({ state: "败方" + match[4], record });
 });
 return { outcome: "Agent " + parsed[0]![3], opponents };
}

// These families choose their version through disjoint eligibility conditions.
// Their MIDCHALLENGE pool weights still exist in source data, but are not
// weights for choosing between the displayed versions.
// Evidence: EventRuntime agent/species and challenge-stat predicates,
// UAE_Warlord's Orc species, and the corresponding event JSON conditions.
export function conditionSelectsVariant(records: EventRecord[]) {
 if (records.length < 2 || !records.every(record => record.type === "MIDCHALLENGE")) return false;
 if (records.every((record, index) => records.slice(index + 1).every(other => mutuallyExclusive(record.condition, other.condition)))) return true;
 const ids = records.map(record => record.eventId).sort().join("|");
 const checkedPairs = [
  ["fog.midch_orcish_toast_human", "fog.midch_orcish_toast_warlord"],
  ["maeRedux.midch_hunting_Manticore", "maeRedux.midch_hunting_Ogre"],
  ["maeRedux.midch_village_field_witness", "maeRedux.midch_village_field_witness_snow"],
 ];
 if (checkedPairs.some(pair => pair.sort().join("|") === ids)) return true;
 const attributes = records.map(record => record.decision.condition.split("\n并且 ")
  .find(term => /^正在执行 (Might|Lore|Intrigue|Command) 属性任务$/.test(term)));
 return attributes.every(Boolean) && new Set(attributes).size === records.length;
}

export function variantSelection(record: EventRecord, family: EventRecord[]) {
 return conditionSelectsVariant(family) ? "" : record.decision.selection;
}

// Chart-only partition of simultaneously eligible versions. The underlying
// records/conditions remain unchanged; candidates can occur in multiple cases.
function temporalBranches(route: DecisionRoute): DecisionBranch[] | undefined {
 const windows = route.branches.flatMap(branch => branch.records.map(record => {
  const terms = branch.condition.split("\n并且 ").filter(Boolean);
  if (!terms.length || terms.some(term => !/^回合 (大于|小于) \d+$/.test(term))) return undefined;
  let min = 0, max = Infinity;
  for (const term of terms) {
   const match = /^回合 (大于|小于) (\d+)$/.exec(term)!;
   if (match[1] === "大于") min = Math.max(min, Number(match[2]) + 1);
   else max = Math.min(max, Number(match[2]) - 1);
  }
  return { record, min, max };
 }));
 if (windows.some(window => !window)) return undefined;
 const valid = windows.filter(window => window !== undefined);
 const bounds = [...new Set([0, ...valid.flatMap(window => [window.min, ...(Number.isFinite(window.max) ? [window.max + 1] : [])])])].sort((a,b) => a-b);
 return bounds.flatMap((min, index) => {
  const max = index + 1 < bounds.length ? bounds[index + 1] - 1 : Infinity;
  const records = valid.filter(window => min >= window.min && min <= window.max).map(window => window.record);
  if (!records.length) return [];
  const condition = min === 0 ? "回合 ≤ " + max : max === Infinity ? "回合 ≥ " + min : min === max ? "回合 = " + min : "回合为 " + min + "–" + max;
  return [{ condition, records }];
 });
}

export function selectionRoutes(records: EventRecord[]): DecisionRoute[] {
 return decisionRoutes(records).map(route => {
  const entries = route.branches.flatMap(branch => branch.records);
  if (!entries.every(record => record.type === "MIDCHALLENGE") || conditionSelectsVariant(entries)) return route;
  const audited = eventSelectionCases.find(group =>
   Object.keys(group.conditions).length === entries.length &&
   entries.every(record => group.conditions[record.eventId] === record.condition));
  if (audited) return { ...route, branches: audited.cases.map(item => ({
   condition: item.condition,
   records: records.filter(record => item.ids.includes(record.eventId)),
  })) };
  if (entries.every(record => record.chain?.mode === "related")) {
   const branches = temporalBranches(route);
   if (branches) return { ...route, branches };
  }
  // An unconditional version remains eligible when a narrower version passes.
  // Split that situation from its complement rather than treating it as exclusive.
  const unconditional = route.branches.find(branch => !branch.condition);
  const conditional = route.branches.find(branch => branch.condition);
  if (route.branches.length === 2 && unconditional && conditional) {
   const terms = conditional.condition.split("\n并且 ");
   const only = terms.length === 1 ? terms[0] : "";
   const inverse = /^当前单位是 (.+)$/.test(only) ? only.replace("当前单位是 ", "当前单位不是 ")
    : /^不满足（[^（）]+）$/.test(only) ? only.slice(4, -1)
    : "不满足（" + terms.join("；并且 ") + "）";
   return { ...route, branches: [
    { condition: conditional.condition, records: records.filter(record => entries.includes(record)) },
    { condition: inverse, records: unconditional.records },
   ] };
  }
  return route;
 });
}

export function resultSelectionLabels(entries: EventRecord[], family: EventRecord[]) {
 const selections = entries.map(record => variantSelection(record, family));
 const weights = selections.map(text => /^(?:抽选权重|探索抽选权重|打捞抽选权重)：([\d.]+)/.exec(text));
 const total = weights.reduce((sum, match) => sum + Number(match?.[1] ?? 0), 0);
 const checks = selections.map(text => /另以 ([\d.]+)%/.exec(text)?.[1] ?? "100");
 if (entries.length > 1 && weights.every(Boolean) && total > 0 && checks.every(check => check === "100")) {
  return { relative: true, labels: weights.map(match => Number(match![1]) === total ? "" : Number((Number(match![1]) / total * 100).toFixed(2)) + "%") };
 }
 return { relative: false, labels: selections.map(() => "") };
}


// Brief branch-card descriptions use the same eligibility partitions as the
// diagram. Percentages are conditional on selecting this same-name family.
export function describeVariantEntry(record: EventRecord, records: EventRecord[]) {
 if (combatDecision(records)) return record.decision.trigger;
 const source = decisionRoutes(records).find(route => route.branches.some(branch => branch.records.includes(record)));
 if (!source) return "";
 const defaultBranch = record.type === "MIDCHALLENGE" && source.branches.length > 1
  ? source.branches.find(branch => !branch.condition && branch.records.length === 1)?.records[0] : undefined;
 if (record === defaultBranch) return "默认分支；其他分支条件满足时，仍与它们一起参与抽选。";
 const cases = selectionRoutes(records).find(route => route.trigger === source.trigger)?.branches.filter(branch => branch.records.includes(record)) ?? [];
 return cases.map(branch => {
  const conditions = branch.condition ? "\n" + formatEventConditions(branch.condition, record.type === "P2P") + "\n\n" : "";
  const when = branch.condition ? "满足上述条件时" : "满足共同条件后";
  const { relative, labels } = resultSelectionLabels(branch.records, records);
  if (relative) {
   const index = branch.records.indexOf(record);
   let text = when + "，" + (labels[index] ? labels[index] + " " : "") + "进入本分支";
   if (branch.records.length === 2) {
    const other = branch.records[1 - index];
    const name = variantLabel(other);
    text += "，" + (labels[1 - index] ? labels[1 - index] + " " : "") + '进入 <CrossReference name="' + name + '" href="#entry-' + other.entry.id + '" />';
   }
   return conditions + text + "。";
  }
  const selection = labels[branch.records.indexOf(record)];
  if (record.type === "INERT" && !branch.condition) return record.decision.trigger;
  return conditions + when + "进入候选。" + (selection ? "\n" + selection : "");
 }).join("\n\n进入条件\n");
}
