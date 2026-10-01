import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { registerHooks } from "node:module";
registerHooks({ resolve(specifier, context, next) {
 if (specifier.startsWith(".") && context.parentURL && !/\.[cm]?[jt]sx?$/.test(specifier)) {
  const candidate = new URL(specifier + ".ts", context.parentURL);
  if (existsSync(candidate)) return next(candidate.href, context);
 }
 return next(specifier, context);
} });
const { mutuallyExclusive, exclusiveChoiceGroups } = await import("../app/EventConditionLogic.ts");
const { eventChoiceSourceAudit } = await import("../app/EventChoiceSourceAudit.ts");
const { conditionalEventChoices } = await import("../app/EventChoiceModel.ts");
const { eventGroups: rawGroups } = await import("../app/EventsData.ts");
const { eventGroups } = await import("../app/EventCatalogueModel.ts");
const { conditionSelectsVariant, resultSelectionLabels } = await import("../app/EventDecisionModel.ts");
const { getAgentEvents } = await import("../app/AgentEventsModel.ts");
const { agents } = await import("../app/AgentsData.ts");

for (const [a,b,context] of [
 ["god_is_iastur", "!god_is_iastur"], ["god_is_iastur", "god_is_mammon"],
 ["(god_is_iastur | god_is_mammon)", "!(god_is_iastur | god_is_mammon)"],
 ["is_species_human", "is_species_orc"], ["challenge_is_lore", "challenge_is_intrigue"],
 ["$state = 1", "$state = 2"], ["x > 3", "x < 3"], ["x > y", "x = y"],
 ["x > y", "y > x"], ["x = 2", "!(x = 2)"],
 ["(x + y) > (a + b)", "(x + y) < (a + b) | (x + y) = (a + b)"],
 ["a | b & !a", "a"], // game's boolean operators have equal precedence
 ["a", "b", "(a & !b) | (!a & b)"],
]) assert.ok(mutuallyExclusive(a,b,context), [a,b,context].join(" / "));
for (const [a,b,context] of [
 ["a", "b"], ["a | b", "a"], ["", "a"], ["x > 3", "x > 4"],
 ["x > 3 | x = 3", "x < 3 | x = 3"], ["x > y | x = y", "y > x | y = x"],
 ["!is_agent_trickster", "stat_intrigue > 4 | is_agent_trickster"],
 ["is_agent_human", "is_agent_courtier"], ["gold > 9", "gold > 4", "gold > 24"],
 ["a; b", "!a"], ["2 < 3", "a"], ["a", "b", "(a & b) | (!a & !b)"],
]) assert.equal(mutuallyExclusive(a,b,context), false, [a,b,context].join(" / "));
assert.deepEqual(exclusiveChoiceGroups(["a", "!a", "!a & gold > 7"]), [[0],[1,2]]);
assert.deepEqual(exclusiveChoiceGroups(["a", "!a", ""]), []);

// Independent numeric witness check: no reported proof may hide an overlap.
const expressions = ["x < -1", "x > -1", "x = -1", "x ~ -1", "x < 0", "x > 0", "x = 0", "x ~ 0", "x < 1", "x > 1", "x = 1", "x ~ 1", "x < 2", "x > 2", "x = 2", "x ~ 2"];
const evaluate = (text, value) => { const [,op,n] = /^x ([<>=~]) (-?\d+)$/.exec(text); return op === "<" ? value < +n : op === ">" ? value > +n : op === "=" ? value === +n : value !== +n; };
for (const a of expressions) for (const b of expressions) {
 const overlap = [-3,-2,-1,-0.5,0,0.5,1,1.5,2,3].some(value => evaluate(a,value) && evaluate(b,value));
 assert.equal(mutuallyExclusive(a,b), !overlap, a + " / " + b);
}

const raw = rawGroups.flatMap(group => group.records), records = eventGroups.flatMap(group => group.records);
const auditById = new Map(eventChoiceSourceAudit.map(row => [row.id,row]));
let read = 0, missing = 0;
for (const record of raw) {
 const annotated = conditionalEventChoices(record);
 // Annotation never changes names, condition text, effects, or event eligibility.
 assert.deepEqual({ ...annotated, eventOptions: annotated.eventOptions?.map(({conditionGroup, ...option}) => option) }, record.entry);
 if (!existsSync(record.sourceFile)) { missing++; assert.equal(record.entry.eventOptions.length, 0); continue; }
 const source = JSON.parse(readFileSync(record.sourceFile,"utf8").replace(/^\uFEFF/,"")); read++;
 assert.equal(source.id, record.eventId); assert.equal(source.conditional, record.condition);
 const groups = exclusiveChoiceGroups(source.choices.map(choice => choice.condition?.trim() ?? ""), record.condition);
 assert.deepEqual(auditById.get(record.eventId)?.groups ?? [], groups, record.eventId);
 const presented = records.find(item => item.eventId === record.eventId);
 assert.deepEqual(presented.entry.eventOptions?.map(option => option.conditionGroup), annotated.eventOptions?.map(option => option.conditionGroup));
 if (groups.length) {
  assert.deepEqual(groups.flat().sort((a,b) => a-b), source.choices.map((_,index) => index));
  const changed = { ...record, condition: record.condition + " & true" };
  assert.ok(!conditionalEventChoices(changed).eventOptions.some(option => option.conditionGroup !== undefined));
 }
}
assert.equal(read,599); assert.equal(missing,1); assert.equal(eventChoiceSourceAudit.length,11);
const dreams = records.filter(record => /^maeRedux.god_dream_/.test(record.eventId));
assert.equal(dreams.length,5);
assert.equal(conditionSelectsVariant(dreams),false);
assert.deepEqual(resultSelectionLabels(dreams,dreams), { relative: true, labels: ["20%","20%","20%","20%","20%"] });
for (const record of dreams) assert.deepEqual(record.entry.eventOptions.map(option => option.conditionGroup), [0,1]);
const iastur = dreams.find(record => record.eventId.endsWith("_iastur"));
assert.equal([...iastur.entry.eventOptions[1].text.matchAll(/25%：/g)].length,4);
for (const stat of ["Might","Lore","Intrigue","Command"]) assert.match(iastur.entry.eventOptions[1].text, new RegExp(stat + " \\+1"));
assert.match(iastur.entry.eventOptions[1].text,/999 回合/);
for (const agent of agents) for (const group of getAgentEvents(agent.id)) for (const item of group.items) {
 const original = records.find(record => record.entry.id === item.eventOriginal.href.split("#entry-")[1]);
 if (original.entry.eventOptions.some(option => option.conditionGroup !== undefined)) assert.ok(item.eventOptions.every(option => option.conditionGroup !== undefined), agent.id);
}
console.log(JSON.stringify({ status:"PASS", sourceEvents:read, codeOnlyWithoutOptions:missing, conditionalEvents:eventChoiceSourceAudit.length, deterministicEvents:eventChoiceSourceAudit.filter(row => row.groups.every(group => group.length === 1)).length, dreamVersionProbability:"20%", iasturRewardProbabilities:"4 × 25%" },null,2));
