// Conservative eligibility proof, following EventParser's left-associative
// &/| and +/-/% precedence. Unknown predicates remain independent: we never
// infer exclusivity from translated text or from an event's display name.
type Node = { op: string; value?: string; left?: Node; right?: Node };
type Literal = { key: string; op: string };
type Cube = Literal[];
const limit = 1024;

function parse(source: string): Node {
 const tokens = source.match(/\$[\w]+|[a-zA-Z_][\w.]*|\d+(?:\.\d+)?|[()!&|=~<>+%\-]/g) ?? [];
 if (tokens.join("") !== source.replace(/\s/g, "")) throw Error("Unsupported condition");
 let index = 0;
 const atom = (): Node => {
  const token = tokens[index++];
  if (token === "(") { const node = binary(); if (tokens[index++] !== ")") throw Error("Unclosed condition"); return node; }
  if (token === "!" || token === "-") return { op: token === "!" ? "not" : "neg", left: atom() };
  if (!token || !/^[\w$]/.test(token)) throw Error("Missing operand");
  return { op: "atom", value: token };
 };
 const arithmetic = (): Node => {
  let node = atom();
  while (["+", "-", "%"].includes(tokens[index])) { const op = tokens[index++]; node = { op, left: node, right: atom() }; }
  return node;
 };
 const comparison = (): Node => {
  const node = arithmetic();
  if (["=", "~", "<", ">"].includes(tokens[index])) return { op: tokens[index++], left: node, right: arithmetic() };
  return node;
 };
 const binary = (): Node => {
  let node = comparison();
  while (["&", "|"].includes(tokens[index])) { const op = tokens[index++]; node = { op, left: node, right: comparison() }; }
  return node;
 };
 if (!tokens.length) return { op: "atom", value: "true" };
 const result = binary();
 if (index !== tokens.length) throw Error("Unparsed condition suffix");
 return result;
}

function expression(node: Node): string {
 if (node.op === "atom") return node.value!;
 if (node.op === "neg") return "(-" + expression(node.left!) + ")";
 return "(" + expression(node.left!) + node.op + (node.right ? expression(node.right) : "") + ")";
}

function numeric(node: Node): number | undefined {
 if (node.op === "atom" && /^\d+(?:\.\d+)?$/.test(node.value!)) return Number(node.value);
 if (node.op === "neg") { const value = numeric(node.left!); return value === undefined ? undefined : -value; }
 return undefined;
}

function literal(node: Node, inverse: boolean): Literal {
 if (!["=", "~", "<", ">"].includes(node.op)) return { key: "bool:" + expression(node), op: inverse ? "false" : "true" };
 let left = expression(node.left!), right = expression(node.right!), op = node.op;
 const reverse: Record<string, string> = { "<": ">", ">": "<", "=": "=", "~": "~" };
 const leftNumber = numeric(node.left!), rightNumber = numeric(node.right!);
 if (leftNumber !== undefined && rightNumber === undefined || leftNumber === undefined && rightNumber === undefined && left > right) {
  [left, right] = [right, left]; op = reverse[op];
 }
 if (inverse) op = ({ "<": ">=", ">": "<=", "=": "~", "~": "=" } as Record<string,string>)[op];
 const constant = leftNumber !== undefined ? leftNumber : rightNumber;
 return { key: constant !== undefined ? "number:" + left + ":" + constant : "relation:" + left + ":" + right, op };
}

function dnf(node: Node, inverse = false): Cube[] {
 if (node.op === "not") return dnf(node.left!, !inverse);
 if (["=", "~", "<", ">"].includes(node.op)) {
  const a = numeric(node.left!), b = numeric(node.right!);
  if (a !== undefined && b !== undefined) {
   const value = node.op === "=" ? a === b : node.op === "~" ? a !== b : node.op === "<" ? a < b : a > b;
   return value !== inverse ? [[]] : [];
  }
 }
 if (node.op === "&" || node.op === "|") {
  const left = dnf(node.left!, inverse), right = dnf(node.right!, inverse);
  if ((node.op === "&") !== inverse) {
   if (left.length * right.length > limit) throw Error("Condition expansion limit");
   return left.flatMap(a => right.map(b => [...a, ...b])).filter(possible);
  }
  if (left.length + right.length > limit) throw Error("Condition expansion limit");
  return [...left, ...right];
 }
 if (node.op === "atom" && ["true", "false"].includes(node.value!)) return (node.value === "true") !== inverse ? [[]] : [];
 return [[literal(node, inverse)]];
}

function possible(cube: Cube): boolean {
 const booleans = new Map<string, string>(), enums = new Map<string, string>();
 const intervals = new Map<string, { low: number; high: number; lowOpen: boolean; highOpen: boolean; excluded: Set<number> }>();
 for (const item of cube) {
  if (item.key.startsWith("bool:")) {
   if (booleans.has(item.key) && booleans.get(item.key) !== item.op) return false;
   booleans.set(item.key, item.op);
   // These predicates compare one actual God, species, or task attribute.
   // Agent-class inheritance and facility flags deliberately are not enums.
   const match = /^bool:(god_is_|(?:other_)?is_species_|challenge_is_)(.+)$/.exec(item.key);
   const known = match && (match[1] === "god_is_" ? /^(snake|iastur|vinerva|ophanim|mammon)$/.test(match[2])
    : match[1] === "challenge_is_" ? /^(might|lore|intrigue|command)$/.test(match[2])
    : /^(human|elf|orc|deepOne|undead|monster|dwarf)$/.test(match[2]));
   if (item.op === "true" && match && known) {
    if (enums.has(match[1]) && enums.get(match[1]) !== match[2]) return false;
    enums.set(match[1], match[2]);
   }
   continue;
  }
  const number = /^number:(.+):(-?\d+(?:\.\d+)?)$/.exec(item.key);
  const key = number ? "number:" + number[1] : item.key;
  const value = number ? Number(number[2]) : 0;
  const range = intervals.get(key) ?? { low: -Infinity, high: Infinity, lowOpen: false, highOpen: false, excluded: new Set<number>() };
  if (item.op === "~") range.excluded.add(value);
  if ([">", ">=", "="].includes(item.op) && value >= range.low) {
   range.lowOpen = value === range.low ? range.lowOpen || item.op === ">" : item.op === ">"; range.low = value;
  }
  if (["<", "<=", "="].includes(item.op) && value <= range.high) {
   range.highOpen = value === range.high ? range.highOpen || item.op === "<" : item.op === "<"; range.high = value;
  }
  if (range.low > range.high || range.low === range.high && (range.lowOpen || range.highOpen || range.excluded.has(range.low))) return false;
  intervals.set(key, range);
 }
 return true;
}

// true means a proof; false also covers unsupported/too complex expressions.
export function mutuallyExclusive(left: string, right: string, context = ""): boolean {
 try {
  const a = dnf(parse(left)), b = dnf(parse(right)), c = dnf(parse(context));
  if (a.length * b.length * c.length > limit) return false;
  // A dead choice is not a useful conditional result.
  if (![a,b].every(side => side.some(x => c.some(y => possible([...x, ...y]))))) return false;
  return !a.some(x => b.some(y => c.some(z => possible([...x, ...y, ...z]))));
 } catch { return false; }
}

// Connected components of potentially co-enabled choices. Different components
// cannot be enabled together; a component can still contain a genuine choice.
export function exclusiveChoiceGroups(conditions: string[], context = ""): number[][] {
 if (conditions.length < 2 || conditions.some(condition => !condition.trim())) return [];
 const unseen = new Set(conditions.map((_, index) => index)), groups: number[][] = [];
 while (unseen.size) {
  const component = [unseen.values().next().value!]; unseen.delete(component[0]);
  for (let cursor = 0; cursor < component.length; cursor++) for (const other of [...unseen]) {
   if (!mutuallyExclusive(conditions[component[cursor]], conditions[other], context)) { component.push(other); unseen.delete(other); }
  }
  groups.push(component.sort((a,b) => a-b));
 }
 return groups.length > 1 ? groups : [];
}
