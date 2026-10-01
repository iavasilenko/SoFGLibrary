import { normalizeReferenceMarkers } from "./ArchiveReferenceMarkup";

type Condition = { op: "and" | "or"; children: Condition[] } | { value: string };

function splitTopLevel(text: string, separators: string[]) {
  const parts: string[] = []; let depth = 0, start = 0;
  for (let index = 0; index < text.length; index++) {
    if (text.startsWith("<CrossReference", index)) {
      const end = text.indexOf("/>", index);
      if (end >= 0) { index = end + 1; continue; }
    }
    if (text[index] === "（" || text[index] === "(") depth++;
    if (text[index] === "）" || text[index] === ")") depth--;
    if (depth) continue;
    const separator = separators.find(value => text.startsWith(value, index));
    if (separator) { parts.push(text.slice(start, index).trim()); index += separator.length - 1; start = index + 1; }
  }
  parts.push(text.slice(start).trim()); return parts;
}

function parseCondition(text: string): Condition {
  const markers: string[] = [];
  const masked = normalizeReferenceMarkers(text).replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g,
    marker => "\uE100" + (markers.push(marker) - 1) + "\uE101");
  const restore = (node: Condition): Condition => "op" in node ? { ...node, children: node.children.map(restore) }
    : { value: node.value.replace(/\uE100(\d+)\uE101/g, (_, index: string) => markers[Number(index)]) };
  return restore(parseOpaqueCondition(masked));
}

// The grammar only sees literal predicates. Preview text may itself contain
// numbered lists, actors, parentheses and AND/OR words, all of which are opaque.
function parseOpaqueCondition(text: string): Condition {
  text = text.replace(/^此条件存在无法参与判定的后段，按当前解析器已读取部分展示。?\s*$/gm, "").trim().replace(/。$/, "");
  const numbered = numberedEventConditionItems(text);
  if (numbered) return { op: "and", children: numbered.map(parseOpaqueCondition) };
  const inlineNumbered = text.split(/；(?=\d+\.\s+)/);
  if (inlineNumbered.length > 1 && inlineNumbered.every(part => /^\d+\.\s+/.test(part)))
    return { op: "and", children: inlineNumbered.map(part => parseOpaqueCondition(part.replace(/^\d+\.\s+/, ""))) };
  if ((text.startsWith("（") && text.endsWith("）")) || (text.startsWith("(") && text.endsWith(")"))) {
    let depth = 0, wraps = true;
    for (let index = 0; index < text.length - 1; index++) {
      if ("（(".includes(text[index])) depth++;
      if ("）)".includes(text[index])) depth--;
      if (!depth) { wraps = false; break; }
    }
    if (wraps) return parseOpaqueCondition(text.slice(1, -1));
  }
  for (const [op, separators] of [["and", ["\n并且 ", "；并且 ", "\n且 ", "，且 "]], ["or", ["；或者 ", "；或者", "；或 ", " 或 "]]] as const) {
    const parts = splitTopLevel(text, [...separators]);
    if (parts.length > 1) return { op, children: parts.map(parseOpaqueCondition) };
  }
  return { value: text };
}

// Never rewrite names or attributes inside an explicit link marker.
export function eventPlainText(text: string, transform: (value: string) => string) {
  return text.split(/(<CrossReference\b(?:"[^"]*"|[^">])*\/>)/g).map(part => part.startsWith("<CrossReference") ? part : transform(part)).join("");
}

export function symbolicComparisons(text: string) {
  return eventPlainText(text, value => value.replace(/大于或等于|大于等于|不小于/g, ">=").replace(/小于或等于|小于等于|不大于/g, "<=")
    .replace(/大于/g, ">").replace(/小于/g, "<").replace(/（([−-]?\d+(?:\.\d+)?)）/g, "$1")
    .replace(/(\b[A-Za-z][A-Za-z '-]*Mastery)\s*等级\s*(?=[<>≤≥≠=])/g, "$1 ")
    .replace(/[ \t]*(>=|<=|>|<)[ \t]*/g, " $1 "));
}

export function nameRelationshipActors(text: string) {
  return eventPlainText(text, value => value.replaceAll("另一人物", "人物 B").replaceAll("当前人物", "人物 A").replaceAll("当前单位", "人物 A 的单位")
    .replace(/人物(?=金币|朋友数量|年龄|击杀数| (?:Menace|Profile|Shadow|Sanity|Awareness|Might|Lore|Intrigue|Command|HP|XP|Gold)\b)/g, "人物 A"));
}

export function compactActorNames(text: string) {
  return eventPlainText(symbolicComparisons(nameRelationshipActors(text)), value => value.replace(/人物 ([AB])\s*的单位被打断\s*(\d+)\s*回合/g, " $1 被打断$2回合")
    .replace(/人物 ([AB])\s*的单位\s*(不是|是|为)\s*/g, (_, actor: string, verb: string) => "人物 " + actor + (verb === "为" ? "是" : verb) + " ")
    .replace(/人物 ([AB])\s*的单位/g, "人物 $1")
    .replace(/\b([AB])\s*的单位\s*(不是|是|为)\s*/g, (_, actor: string, verb: string) => actor + (verb === "为" ? "是" : verb) + " ")
    .replace(/\b([AB])\s*的单位/g, "$1")
    .replace(/\b([AB])\s*被打断\s*(\d+)\s*回合/g, "$1 被打断$2回合")
    .replace(/人物 ([AB])/g, " $1 ").replace(/[ \t]+/g, " ")).replace(/^ | $/gm, "");
}

function normalizeLeaf(text: string) {
  text = symbolicComparisons(nameRelationshipActors(text));
  return eventPlainText(text, value => value.replace(/不满足（((?:人物 [AB](?: 的单位|的种族)?|当前神祇|当地|单位)(?:是|为))([^（）]+)）/g,
    (_, subject: string, name: string) => subject.replace(/是$|为$/, "不是 ") + name.trim()));
}

function identity(text: string) {
  return /^(人物 [AB](?: 的单位|的种族)?|当前神祇|当地|单位)(是|不是)\s*(.+)$/.exec(text);
}

// Only AND exclusions can become "不是 X, Y". OR exclusions remain OR:
// (!X | !Y) must not be silently changed to (!X & !Y).
function combineExclusions(children: Condition[]) {
  const result: Condition[] = [], groups = new Map<string, { value: string }>();
  for (const child of children) {
    const match = "value" in child ? identity(normalizeLeaf(child.value)) : null;
    if (!match || match[2] !== "不是") { result.push(child); continue; }
    const existing = groups.get(match[1]);
    if (existing) existing.value += ", " + match[3];
    else { const node = { value: match[1] + "不是 " + match[3] }; groups.set(match[1], node); result.push(node); }
  }
  return result;
}


// Simplify presentation only; raw predicates and their boolean structure remain
// in EventRecord. Compare whole operands so unrelated tests cannot be merged.
function comparison(text: string) {
  const references: string[] = [];
  const masked = normalizeLeaf(text).replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, marker =>
    "\uE000" + (references.push(marker) - 1) + "\uE001");
  const match = /^(.+?)\s+(>|<|=)\s+(.+)$/.exec(masked);
  if (!match) return undefined;
  const restore = (value: string) => value.replace(/\uE000(\d+)\uE001/g, (_, index: string) => references[Number(index)]).trim();
  return { left: restore(match[1]), operator: match[2], right: restore(match[3]) };
}

function simplifyAlternatives(children: Condition[]) {
  const terms = children.flatMap(child => "op" in child && child.op === "or" ? child.children : [child]);
  const comparisons = terms.map(child => "value" in child ? comparison(child.value) : undefined);
  const removed = new Set<number>();
  const simplified = terms.map((child, index): Condition => {
    const strict = comparisons[index];
    if (!strict || strict.operator === "=") return child;
    const equal = comparisons.findIndex((value, other) => other !== index && !removed.has(other) &&
      value?.operator === "=" && (value.left === strict.left && value.right === strict.right ||
        value.left === strict.right && value.right === strict.left));
    if (equal < 0) return child;
    removed.add(equal);
    return { value: strict.left + (strict.operator === ">" ? " ≥ " : " ≤ ") + strict.right };
  });
  const result: Condition[] = [], identities = new Map<string, { value: string; names: Set<string> }>();
  simplified.forEach((child, index) => {
    if (removed.has(index)) return;
    const text = "value" in child ? normalizeLeaf(child.value) : "";
    const actor = /^(?:人物\s+)?([AB])\s*(?:的单位|的种族)?\s*是\s*(.+)$/.exec(text);
    // Factor the same positive subject/predicate, not different actors or
    // negative tests. Link markers and nested boolean groups stay opaque.
    const predicate = /^([^<>"=≥≤（）()]+?)(是|为|拥有|具有|有)\s*(.+)$/.exec(text);
    const subject = predicate ? predicate[1].trimEnd().replace(/^(?:人物\s+)?([AB])$/, "人物 $1") : "";
    const prefix = actor ? "人物 " + actor[1] + "是 "
      : predicate && !/不$|不满足|不是|不为/.test(predicate[1]) ? subject + predicate[2] + " " : "";
    const name = (actor?.[2] ?? predicate?.[3] ?? "").trim();
    if (!prefix) { result.push(child); return; }
    const existing = identities.get(prefix);
    if (existing) {
      if (!existing.names.has(name)) { existing.value += " 或 " + name; existing.names.add(name); }
    } else {
      const node = { value: prefix + name, names: new Set([name]) };
      identities.set(prefix, node); result.push(node);
    }
  });
  return result;
}

function renderCondition(node: Condition, inline = false): string {
  if ("value" in node) return node.value.trim() === "任务事件计时 = 任务事件计时阈值" ? "" : normalizeLeaf(node.value);
  if (node.op === "or") {
    return simplifyAlternatives(node.children).map(child => {
      const value = renderCondition(child, true);
      return "op" in child && child.op === "and" ? "（" + value + "）" : value;
    }).join(" 或 ");
  }
  const children = combineExclusions(node.children.flatMap(child => "op" in child && child.op === "and" ? child.children : [child]))
    .filter(child => !("value" in child) || child.value.trim() !== "任务事件计时 = 任务事件计时阈值");
  if (children.length === 1) return renderCondition(children[0], inline);
  return children.map((child, index) => (index + 1) + ". " + renderCondition(child, true)).join(inline ? "；" : "\n");
}

// Numbering is the AND delimiter in display text, never an extra game condition.
export function numberedEventConditionItems(text: string) {
  text = normalizeReferenceMarkers(text);
  const lines = text.trim().split("\n");
  if (lines.length === 1 && /；\d+\.\s+/.test(text)) return undefined;
  if (!lines.length || !lines.every(line => /^\d+\.\s+/.test(line))) return undefined;
  return lines.map(line => line.replace(/^\d+\.\s+/, ""));
}

export function formatOptionCondition(text: string) { return compactActorNames(renderCondition(parseCondition(text))); }
export function formatEventConditions(text: string, relationship = false) {
  return relationship ? formatRelationshipConditions(text) : compactActorNames(renderCondition(parseCondition(text)));
}

export function formatRelationshipConditions(text: string) {
  const groups = new Map<string, string[]>();
  const parsed = parseCondition(text), terms = "op" in parsed && parsed.op === "and" ? combineExclusions(parsed.children) : [parsed];
  for (const term of terms) {
    const translated = renderCondition(term);
    if (!translated) continue;
    const literal = translated.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, "");
    const subjects = [...literal.matchAll(/人物 ([AB])/g)].map(match => match[1]);
    const label = subjects.length && subjects.every(subject => subject === "A") ? "人物 A"
      : subjects.length && subjects.every(subject => subject === "B") ? "人物 B"
      : /两人|亲属|同一家族|好感|人物 [AB].*人物 [AB]/.test(literal) ? "双方关系" : "其他条件";
    const actor = label === "人物 A" ? "A" : label === "人物 B" ? "B" : undefined;
    // The group heading already gives the subject. Do not repeat it before
    // each attribute, but keep both subjects in genuine A/B comparisons.
    const value = actor ? eventPlainText(translated, value => value.replace(new RegExp("人物 " + actor + "(?: 的单位|的种族)?\\s*", "g"), "")) : compactActorNames(translated);
    const entries = groups.get(label) ?? []; entries.push(symbolicComparisons(value)); groups.set(label, entries);
  }
  return ["人物 A", "人物 B", "双方关系", "其他条件"].filter(label => groups.has(label))
    .map(label => {
      const entries = groups.get(label)!;
      return label + "：\n" + entries.map((value, index) => (terms.length > 1 ? (index + 1) + ". " : "") + value).join("\n");
    }).join("\n");
}

export function relationshipConditionGroups(text: string) {
  const result: { label: string; text: string }[] = [];
  for (const line of normalizeReferenceMarkers(text).split("\n")) {
    const heading = /^(人物 A|人物 B|双方关系|其他条件)：$/.exec(line);
    if (heading) result.push({ label: heading[1], text: "" });
    else if (result.length) result[result.length - 1].text += (result[result.length - 1].text ? "\n" : "") + line;
  }
  return result;
}

export function omitEventRepeatConditions(text: string, names: string[], once: boolean, ownName?: string, omitOwnCount = false) {
  const matchesName = (value: string, candidates = names) => [...value.matchAll(/「([^」]+)」剧情记录/g)].some(match =>
    candidates.some(name => match[1].split(" · ")[0] === name.replace(/ 系列事件$/, "")));
  function removable(node: Condition): boolean {
    if ("op" in node) {
      if (node.op === "or" && node.children.every(child => "value" in child && matchesName(child.value) &&
        (/回合/.test(child.value) || /剧情记录\s*=\s*0$/.test(child.value.trim()))) &&
        node.children.some(child => "value" in child && /回合/.test(child.value))) return true;
      return node.children.every(removable);
    }
    if (!matchesName(node.value)) return false;
    if (omitOwnCount && matchesName(node.value, ownName ? [ownName] : names)
      && /剧情记录\s*(?:大于|小于|[<>=≤≥])\s*\d+$/.test(node.value.trim())) return true;
    return /回合/.test(node.value) || /剧情记录\s*=\s*0$/.test(node.value.trim()) &&
      (once && matchesName(node.value, ownName ? [ownName] : names) || / · 计时」/.test(node.value));
  }
  const parsed = parseCondition(text);
  const children = "op" in parsed && parsed.op === "and" ? parsed.children : [parsed];
  return children.filter(node => !removable(node)).map(node => serialize(node)).join("\n并且 ");
}

function serialize(node: Condition): string {
  return "value" in node ? node.value : "（" + node.children.map(serialize).join(node.op === "and" ? "；并且 " : "；或者 ") + "）";
}
