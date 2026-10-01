// Run with Node >= 22.13: node scripts/check-event-presentation.mjs
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
registerHooks({ resolve(specifier, context, next) {
  if (specifier.startsWith(".") && context.parentURL && !/\.[cm]?[jt]sx?$/.test(specifier)) {
    const candidate = new URL(specifier + ".ts", context.parentURL);
    if (existsSync(candidate)) return next(candidate.href, context);
  }
  return next(specifier, context);
} });
const { eventGroups } = await import("../app/EventCatalogueModel.ts");
const { eventAliases } = await import("../app/EventsData.ts");
const { eventNarrative } = await import("../app/EventNarratives.ts");
const { extractEventTiming } = await import("../app/EventTimingPresentation.ts");
const { eventPlainText, formatOptionCondition, formatRelationshipConditions, relationshipConditionGroups } = await import("../app/EventConditionPresentation.ts");
const { combineRepeatedRewards, conciseEventEffects, presentEventItems, withoutOrdinaryEventBounds } = await import("../app/EventPresentation.ts");
const { concisePercentageUnits } = await import("../app/ArchiveTextPresentation.ts");
const { linkEventConditionReferences, linkEventEffectReferences } = await import("../app/EventEffectReferences.ts");
const { replaceEventPlaceholders } = await import("../app/EventPlaceholders.ts");
const { archiveReferenceTarget } = await import("../app/ArchiveLinkTarget.ts");
const { relatedEventSeries } = await import("../app/EventRelatedSeries.ts");
const { selectionRoutes, resultSelectionLabels } = await import("../app/EventDecisionModel.ts");
const { unavailableAgentEntries, unavailableEntryIds, unavailableEventIds } = await import("../app/EventAvailability.ts");
const { agentEventBindings } = await import("../app/AgentEventBindings.ts");
const { getAgentEvents } = await import("../app/AgentEventsModel.ts");
const { groupEventVariants } = await import("../app/EventVariantModel.ts");
const records = eventGroups.flatMap(group => group.records);
const byId = new Map(records.map(record => [record.eventId, record]));
const families = groupEventVariants(records).filter(family => family.records.length > 1);
const seriesGroups = new Map();
for (const record of records.filter(record => record.chain)) {
 const key = record.source + ":" + record.chain.id;
 seriesGroups.set(key, (seriesGroups.get(key) ?? 0) + 1);
}
const anchors = new Set([...records.map(record => "entry-" + record.entry.id), ...families.flatMap(family => [family.id + "-overview", family.id + "-flow"])]);
for (const record of records) {
  assert.ok(!unavailableEventIds[record.eventId]);
  assert.ok(!unavailableEntryIds.has(record.entry.id));
  assert.ok(eventNarrative(record.eventId, record.entry.name) || record.entry.id.startsWith("event-god-") && record.entry.text.split("\n\n")[0], "missing story: " + record.eventId);
  assert.ok(!/%[A-Za-z]/.test(replaceEventPlaceholders(JSON.stringify(record.entry))), "unknown placeholder: " + record.eventId);
  if (record.type === "P2P" && !record.chain) assert.equal(record.category, record.gods?.length ? "gods" : "relationships");
  const text = [record.entry.text, record.entry.eventRepeat?.interval ?? "", ...(record.entry.eventOptions ?? []).flatMap(option => [option.text, option.condition ?? ""])].join("\n");
  for (const option of record.entry.eventOptions ?? []) if (/^abandon challenge$/i.test(option.name.trim())) assert.equal(option.text, "取消当前挑战");
  assert.ok(!text.includes('href="#entry-' + record.entry.id + '"'), "self-reference: " + record.eventId);
  assert.ok(!/只在尚未发生时进入候选；选项在第 1 回合|的相关要求：|本组选项没有建立有效冷却/.test(text), "redundant repeat internals: " + record.eventId);
  assert.ok(!/人物关系事件检查时触发。|玩家 Agent 执行任务期间，在途中事件检查中抽取。/.test(text));
  assert.ok(!/任务进度[^\n]*最低为\s*0|一次性触发机会已用完|计时范围|选择后第/.test(text));
  for (const option of record.entry.eventOptions ?? []) {
    const plain = [option.text, option.condition ?? ""].join("\n").replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, "");
    assert.ok(!/人物 [AB]|当前人物|另一人物|人物金币|大于|小于/.test(plain), "uncompacted option: " + record.eventId);
    assert.ok(!/[AB]\s*的单位|正在执行的任务进度|取消当前任务|不结算完成奖励|满足任一项|\n且 |Mastery\s*等级/.test(plain), "verbose option: " + record.eventId);
    assert.ok(!/HP\s*[−-]\d+[^。]*最高为/.test(plain), "negative HP cap: " + record.eventId);
    const outcomes = option.text.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, "");
    for (const match of outcomes.matchAll(/\d+(?:\.\d+)?%[：:]/g))
      assert.ok(match.index === 0 || outcomes[match.index - 1] === "\n", "inline random outcome: " + record.eventId);
  }
  for (const paragraph of record.entry.text.split("\n\n").filter(paragraph => paragraph.startsWith("触发条件\n"))) {
    assert.ok(!/大于|小于/.test(paragraph.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, "")));
    for (const group of relationshipConditionGroups(paragraph.slice(5))) if (/^人物 [AB]$/.test(group.label))
      assert.ok(!group.text.includes(group.label), "repeated group subject: " + record.eventId);
  }
  for (const match of text.matchAll(/href="#(entry-event-[^"]+)"/g)) assert.ok(anchors.has(match[1]) || eventAliases[match[1]], "bad href: " + match[1]);
}
for (const [agent, bindings] of Object.entries(agentEventBindings)) {
  assert.ok(bindings.every(binding => !unavailableAgentEntries[agent]?.includes(binding.id)));
  const items = getAgentEvents(agent).flatMap(group => group.items);
  assert.equal(items.length, bindings.length);
  assert.ok(items.every(item => !/^进入条件\s*$/m.test(item.text)), "duplicate projected branch condition: " + agent);
}
const reconcile = byId.get("anw.reconcile").entry;
assert.match(reconcile.text, /人物 A：/); assert.match(reconcile.text, /人物 B：/);
assert.equal(reconcile.eventRepeat.interval, "16 回合");
assert.ok(!/16 回合|剧情记录/.test(reconcile.text));
assert.match(reconcile.eventOptions[0].text, /15%：无效果/);
assert.match(reconcile.eventOptions[2].text, /AB 之间互相好感等级−1/);
assert.match(reconcile.eventOptions[0].text, /A 对 B 的好感等级 \+1；增加后的等级必须 < 2/);
const stroll = byId.get("maeRedux.midch_chaos_city_hunger").entry;
assert.match(stroll.eventRepeat.interval, /最少 121 回合，最多 146 回合/);
assert.match(stroll.eventRepeat.interval, /上述间隔均增加 25 回合/);
assert.ok(!/回合|剧情记录/.test(stroll.text));
assert.match(stroll.eventOptions[2].condition, /当前神祇是 Escamrak 或 Ixthus 或 MEKHANE/);
assert.equal(stroll.eventOptions[2].text, "A的任务进度+20。");
const ref = '<CrossReference name="Example" href="#entry-example" />';
const { normalizeReferenceMarkers } = await import("../app/ArchiveReferenceMarkup.ts");
const { numberedEventConditionItems } = await import("../app/EventConditionPresentation.ts");
// Preview prose is opaque even when it resembles condition syntax or actors.
const multilineReference = '<CrossReference name="Imperial Blood" href="?god=villikos#entry-t-fc-imperial" meta="人物特质" text="人物 B：\n1. 当前人物 Lore 大于 3；或者 当前人物 Command 大于 3\n人物 A 的单位（预览；并且 HP < 4\n\n预览第二段。" />';
const inlineReference = normalizeReferenceMarkers(multilineReference);
assert.ok(!/[\r\n]/.test(inlineReference));
assert.equal(normalizeReferenceMarkers(inlineReference), inlineReference);
assert.equal(normalizeReferenceMarkers("段落一\n\n1. " + multilineReference + "\n2. 条件"), "段落一\n\n1. " + inlineReference + "\n2. 条件");
const linkedAndCondition = formatOptionCondition("当前人物拥有 " + multilineReference + "\n并且 当前人物 Lore 大于 2");
assert.equal(linkedAndCondition, "1. A 拥有 " + inlineReference + "\n2. A Lore > 2");
assert.deepEqual(numberedEventConditionItems(linkedAndCondition), ["A 拥有 " + inlineReference, "A Lore > 2"]);
assert.equal(formatOptionCondition(linkedAndCondition), linkedAndCondition);
const linkedActorConditions = formatRelationshipConditions("当前人物拥有 " + multilineReference + "\n并且 当前人物是统治者\n并且 另一人物是君主");
const linkedActorGroups = relationshipConditionGroups(linkedActorConditions);
assert.deepEqual(linkedActorGroups.map(group => group.label), ["人物 A", "人物 B"]);
assert.equal(linkedActorGroups[0].text, "1. 拥有 " + inlineReference + "\n2. 是统治者");
assert.equal(linkedActorGroups[1].text, "1. 是君主");
const linkedAlternatives = formatOptionCondition("当前人物拥有 " + multilineReference + "；或者 当前人物拥有 " + ref);
assert.equal(linkedAlternatives, "A 拥有 " + inlineReference + " 或 " + ref);
for (const record of records) {
 const fields = [record.entry.text, record.entry.eventRepeat?.interval ?? "", ...(record.entry.eventOptions ?? []).flatMap(option => [option.text, option.condition ?? ""])];
 for (const field of fields) {
  const markers = [...field.matchAll(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g)];
  assert.equal(markers.length, [...field.matchAll(/<CrossReference\b/g)].length, "broken marker: " + record.eventId);
  assert.ok(markers.every(match => !/[\r\n]/.test(match[0])), "multiline marker: " + record.eventId);
 }
}
const revelry = records.find(record => record.entry.id === "event-god-escamrak-flesh-ho-triggered");
assert.match(revelry.entry.text, /text="等级范围：-1 – 0。-1: Acolyte 获得 Endless Regrowth/);
assert.ok(!revelry.entry.text.includes('text=""'));
const pettyConditions = relationshipConditionGroups(byId.get("God_FirstClaimant.p2p_villikos1").entry.text.split("触发条件\n")[1]);
assert.deepEqual(pettyConditions.map(group => group.label), ["人物 A", "人物 B", "双方关系", "其他条件"]);
assert.deepEqual(pettyConditions.map(group => numberedEventConditionItems(group.text)?.length), [3, 1, 1, 1]);
assert.equal(numberedEventConditionItems(byId.get("God_FirstClaimant.person_villikos1").entry.text.split("触发条件\n")[1]).length, 4);
assert.equal(numberedEventConditionItems(byId.get("God_FirstClaimant.person_villikos2").entry.text.split("触发条件\n")[1]).length, 3);
const multi = extractEventTiming([{ name: "A", text: `计时范围：本局。\n${ref}：选择后第 51 回合起才满足等待条件。\n计时范围：当前人物。\n${ref}：选择后第 101 回合起才满足等待条件。\n当前人物 金币 +40。` }], "example");
assert.match(multi.description, /51 回合/); assert.match(multi.description, /101 回合/);
assert.equal(multi.options[0].text, "当前人物 金币 +40。");
const partial = extractEventTiming([{ name: "Wait", text: `计时范围：本局。\n${ref}：选择后第 16 回合起才满足等待条件。` }, { name: "Continue", text: "无效果。" }], "example");
assert.match(partial.description, /选择 Wait 后重置此间隔/);
assert.equal(formatOptionCondition("当前神祇是 Iastur；或者 当前神祇是 Mammon；或者 当前单位是 Human；或者 当前人物拥有 Brightness"), "当前神祇是 Iastur 或 Mammon 或 A 是 Human 或 A 拥有 Brightness");
const nested = formatOptionCondition("（当前神祇是 Iastur；或者 当前单位是 Human）；并且 神力 大于 1");
assert.equal(nested, "1. 当前神祇是 Iastur 或 A 是 Human\n2. 神力 > 1");
assert.equal(formatOptionCondition(nested), nested);
const nestedOr = formatOptionCondition("（当前人物 Lore 大于 1；并且 当前人物 Might 大于 1）；或者 当前单位是 Human");
assert.equal(nestedOr, "（1. A Lore > 1；2. A Might > 1） 或 A 是 Human");
assert.equal(formatOptionCondition(nestedOr), nestedOr);
assert.equal(formatOptionCondition("当前人物 Command 大于 3；或者 当前单位是 Supplicant"), "A Command > 3 或 A 是 Supplicant");
assert.equal(formatOptionCondition("Death Mastery 等级 > 0；或者 Blood Mastery 等级 > 0；或者 Geomancy Mastery 等级 > 0"), "Death Mastery > 0 或 Blood Mastery > 0 或 Geomancy Mastery > 0");

const comparisonsAndIdentities = [
 ["当前人物 Intrigue 大于 当前人物 Lore；或者 当前人物 Intrigue = 当前人物 Lore", "A Intrigue ≥ A Lore"],
 ["1. A Intrigue > A Lore 或 A Intrigue = A Lore", "A Intrigue ≥ A Lore"],
 ["A Lore = A Intrigue 或 A Intrigue > A Lore", "A Intrigue ≥ A Lore"],
 ["A HP < 4 或 A HP = 4", "A HP ≤ 4"],
 ["A Intrigue > A Lore 或 B Intrigue = A Lore", "A Intrigue > A Lore 或 B Intrigue = A Lore"],
 ["A Intrigue > A Lore；并且 A Intrigue = A Lore", "1. A Intrigue > A Lore\n2. A Intrigue = A Lore"],
 ["当前单位是 Human；或者 当前人物的种族是 Elf", "A 是 Human 或 Elf"],
 ["1. A 是 Human 或 A 的种族是 Elf", "A 是 Human 或 Elf"],
 ["A 是 Human 或 B 的种族是 Elf", "A 是 Human 或 B 是 Elf"],
 ["（A 是 Human；并且 A Gold > 4）；或者 A 的种族是 Elf", "（1. A 是 Human；2. A Gold > 4） 或 A 是 Elf"],
 ["地形为 Snow 或 地形为 Arctic 或 地形为 Drycold 或 地形为 Tundra", "地形为 Snow 或 Arctic 或 Drycold 或 Tundra"],
 ["地形为 Snow；并且 地形为 Arctic", "1. 地形为 Snow\n2. 地形为 Arctic"],
 ["当前神祇是 Iastur 或 当前神祇是 Mammon", "当前神祇是 Iastur 或 Mammon"],
 ["当地有 Sewers 或 当地有 Ancient Ruins 或 A 拥有 Brightness", "当地有 Sewers 或 Ancient Ruins 或 A 拥有 Brightness"],
 ["A 拥有 Brightness 或 A 拥有 Call of the Abyss", "A 拥有 Brightness 或 Call of the Abyss"],
 ["A 拥有 Brightness 或 B 拥有 Brightness", "A 拥有 Brightness 或 B 拥有 Brightness"],
 ["当地不是 Village 或 当地不是 City", "当地不是 Village 或 当地不是 City"],
 ["（地形为 Snow；并且 A HP > 1）；或者 地形为 Arctic", "（1. 地形为 Snow；2. A HP > 1） 或 地形为 Arctic"],
];
for (const [source, expected] of comparisonsAndIdentities) {
 assert.equal(formatOptionCondition(source), expected);
 assert.equal(formatOptionCondition(expected), expected, "simplification must be idempotent");
}
assert.match(formatRelationshipConditions("当前人物 Intrigue 大于 当前人物 Lore；或者 当前人物 Intrigue = 当前人物 Lore"), /Intrigue ≥ Lore/);

const mourning = byId.get("anw.mourning_5").entry;
const mourningGroups = relationshipConditionGroups(mourning.text.split("触发条件\n")[1]);
assert.deepEqual(mourningGroups.map(group => group.label), ["人物 A", "人物 B", "双方关系"]);
assert.ok(mourningGroups.slice(0, 2).every(group => group.text.includes("朋友数量 < 3") && !/人物 [AB]/.test(group.text)));
assert.equal(mourning.eventOptions[0].text, "AB 之间互相好感等级+1。");
const hero = byId.get("fog.midchP2P_my_hero_1").entry;
assert.equal(hero.eventRepeat.once, true);
assert.ok(!hero.eventOptions.some(option => /不能再次触发/.test(option.text)));
assert.equal(hero.eventOptions[1].condition, "A 金币 > 14");
assert.match(hero.text, /不是 The Cursed, The Baroness, The Harvester/);
const story = byId.get("fog.P2P_iastur_story_time").entry;
assert.match(story.eventOptions[0].text, /另两个选项的累计选择次数达到 4 后，该事件不再触发/);
assert.ok(!story.eventOptions.slice(1).some(option => /选择次数|次数限制/.test(option.text)));
assert.match(story.eventOptions[1].text, /B 被打断3回合/);
assert.equal(formatOptionCondition("当前人物 Lore 大于 3；或者 当前人物 Command 大于 3；或者 当前人物 Intrigue 大于 3"), "A Lore > 3 或 A Command > 3 或 A Intrigue > 3");
assert.equal(formatOptionCondition("当前单位是 The Cursed；或者 当前单位是 The Baroness；或者 当前单位是 The Harvester"), "A 是 The Cursed 或 The Baroness 或 The Harvester");
assert.equal(formatOptionCondition("不满足（当前单位是 The Cursed）；或者 不满足（当前单位是 The Baroness）"), "A 不是 The Cursed 或 A 不是 The Baroness");
assert.match(formatRelationshipConditions("另一人物金币 大于 39"), /^人物 B：\n金币 > 39$/);
const synthetic = { id: "example", name: "Example", text: "触发条件\n「Example · 人物」剧情记录 = 0", eventCategory: "other", eventOptions: [{ name: "Continue", text: '本局内，<CrossReference name="Example" href="#entry-example" /> 不能再次触发。\n当前人物 金币 +40。' }] };
const once = presentEventItems([synthetic])[0];
assert.equal(once.eventRepeat.once, true); assert.equal(once.eventOptions[0].text, "A 金币 +40。");
assert.ok(!once.text.includes("剧情记录"));
const choiceDependent = presentEventItems([{ ...synthetic, eventOptions: [...synthetic.eventOptions, { name: "Keep going", text: "无效果。" }] }])[0];
assert.ok(!choiceDependent.eventRepeat.once); assert.match(choiceDependent.eventOptions[0].text, /不能再次触发/);
assert.equal(choiceDependent.eventOptions[0].text, "该事件本局不能再次触发。\nA 金币 +40。");
const anotherRef = '<CrossReference name="Follow-up" href="#entry-follow-up" />';
const deadSelfState = presentEventItems([{ ...synthetic,
 text: "触发条件\n「Example · 人物」剧情记录 = 0\n并且 「Example · 进度 2」剧情记录 小于 3\n并且 A HP > 2",
 eventOptions: [{ name: "Continue", text: `本局内，${ref} 不能再次触发。\n计时范围：本局。\n${ref}：选择后第 51 回合起才满足等待条件。\n${anotherRef}：选择后第 9 回合起才满足等待条件。\n本局的 Example 的累计选择次数 +1。\n${ref} 的相关要求：Example 的累计选择次数 小于 3。\n继续事件 ${anotherRef}。\n当前人物 金币 +40。` }],
}])[0];
assert.equal(deadSelfState.eventRepeat.once, true);
assert.ok(!/Example|51|剧情记录/.test(deadSelfState.text));
assert.ok(!/51 回合/.test(deadSelfState.eventRepeat.interval));
assert.match(deadSelfState.eventRepeat.interval, /Follow-up.*9 回合/);
assert.match(deadSelfState.eventOptions[0].text, /继续事件 <CrossReference name="Follow-up"/);
assert.match(deadSelfState.eventOptions[0].text, /A 金币 \+40/);
assert.ok(!/累计选择次数|相关要求/.test(deadSelfState.eventOptions[0].text));
const perPerson = presentEventItems([{ ...synthetic, eventOptions: [{ name: "Continue",
 text: `另一人物内，${ref} 不能再次触发。\n计时范围：本局。\n${ref}：选择后第 151 回合起才满足等待条件。\n当前人物 金币 +40。`,
}] }])[0];
assert.equal(perPerson.eventRepeat.interval, "151 回合", "a per-person lock must not discard a shared global timer");
const timestampOnce = presentEventItems([{ ...synthetic, eventOptions: [{ name: "Continue",
 text: `本局的 ${ref} 只在尚未发生时进入候选；选项在第 1 回合或之后结算便会阻止再次触发。\n当前人物 金币 +40。`,
}] }])[0];
assert.equal(timestampOnce.eventRepeat.once, true);
assert.equal(timestampOnce.eventOptions[0].text, "A 金币 +40。");
const cordyRub = byId.get("maeRedux.MOVE_cordyrub").entry;
assert.deepEqual(cordyRub.eventRepeat, { once: true });
assert.deepEqual(cordyRub.eventOptions.map(option => option.text), ["无效果。", "无效果。"]);
assert.ok(!/剧情记录|时间窗口|选择次数/.test(cordyRub.text));
assert.ok(cordyRub.text.includes("\n\n触发条件\n"), "keep section paragraph boundaries");
for (const [id, limit] of [["maeRedux.move_oph_village_purge", 2], ["maeRedux.person_hero_inhospitable_village", 2], ["maeRedux.P2P_MIDCH_Agent_shadowed", 3]]) {
 const entry = byId.get(id).entry;
 assert.ok(entry.text.includes("触发次数\n本局最多触发 " + limit + " 次。"));
 assert.ok(!entry.eventOptions.some(option => /共用计数|共用最多/.test(option.text)));
}
const poison = byId.get("maeRedux.mid_crackedmolar").entry;
assert.match(poison.eventOptions[0].text, /解锁 Not the first time with this poison 选项/);
assert.match(poison.eventOptions[2].condition, /剧情记录 = 1/);
assert.match(byId.get("fog.midchP2P_in_the_dark_generic").entry.eventOptions[0].text, /name="In the dark 系列事件"/, "retain meaningful shared-family links");

assert.ok(!byId.get("maeRedux.midchP2P_venal_hero_as_agreed_upon").entry.eventRepeat?.once);
assert.equal(replaceEventPlaceholders("%him2"), "人物 B");
assert.equal(replaceEventPlaceholders("%him"), "人物 A");
assert.equal(replaceEventPlaceholders("%him2self / %himself"), "人物 B 自己 / 人物 A 自己");
assert.equal(replaceEventPlaceholders("%LOCATION_NAME / %HEX_NAME / %CITY_NAME"), "{地点名称} / {地点名称} / {城市名称}");
assert.equal(replaceEventPlaceholders("%hisR1 / 33.33% / 100%"), "{剧情人物 1} 的 / 33.33% / 100%");
const currentUrl = "https://zizi12321.github.io/SoFGLibrary/?page=events#here";
for (const href of ["#entry-example", "?page=events#entry-example", "./index.html?page=events#entry-example", "./", "?god=index"])
 assert.equal(archiveReferenceTarget(href, currentUrl), undefined);
for (const href of ["?page=agents#entry-agent-whisperer", "?god=iastur", "https://example.com/other"])
 assert.equal(archiveReferenceTarget(href, currentUrl), "_blank");
assert.equal(archiveReferenceTarget("?page=events", "https://zizi12321.github.io/SoFGLibrary/"), undefined);
for (const series of relatedEventSeries) {
 const nodes = records.filter(record => record.chain?.mode === "related" && record.chain.id === series.id);
 assert.ok(nodes.length >= 2, "missing series: " + series.id);
 assert.ok(nodes.every(record => record.category === "chains" && record.entry.eventChain?.id === series.id &&
  (series.flag ? record.condition.includes("$" + series.flag) : series.eventIds.includes(record.eventId))));
}
for (const id of ["corrupt-guards", "encircled"]) {
 const nodes = records.filter(record => record.chain?.mode === "related" && record.chain.id === id);
 const branches = selectionRoutes(nodes)[0].branches;
 assert.deepEqual(branches.map(branch => branch.records.map(record => nodes.indexOf(record) + 1)), [[1], [1,2], [2], [2,3], [3]]);
 assert.deepEqual(branches.map(branch => branch.condition), ["回合 ≤ 150", "回合为 151–199", "回合为 200–350", "回合为 351–399", "回合 ≥ 400"]);
 assert.deepEqual(resultSelectionLabels(branches[1].records, nodes).labels, ["50%", "50%"]);
 assert.deepEqual(resultSelectionLabels(branches[0].records, nodes).labels, [""]);
}
for (const n of [1, 2, 3]) {
  const entry = byId.get("Wonderblunder_DeepOnes.deepOnePlusCult" + n).entry;
  assert.match(entry.text, /奖励结算/);
  assert.ok(!entry.eventOptions.some(option => /实际生效未确认|只写入字段/.test(option.text)));
}
const temple = byId.get("Wonderblunder_DeepOnes.deepOnePlusCult2").entry;
assert.match(temple.eventOptions[1].text, /从普通物品池随机获得一件物品/);
assert.match(temple.eventOptions[2].text, /当地出现 <CrossReference name="Arcane Secret" href="\?page=base-location-modifiers#entry-arcane-secret"/);
assert.equal(byId.get("Wonderblunder_DeepOnes.deepOnePlusCult3").entry.eventOptions[0].text, "无效果。");
const stripMarkers = text => text.replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1");
const underclass = byId.get("bug.MIDCH_sewer_underclass_no_wretched_nobles_here").entry;
assert.match(underclass.eventOptions[1].text, /获得 3 个随从 <CrossReference name="Wretched Poor" href="\?page=minions#entry-wretched-poor"/);
assert.ok(!/HP|Attack|Defence|Command/.test(stripMarkers(underclass.eventOptions[1].text)));
assert.match(stripMarkers(underclass.eventOptions[0].text), /获得 3 个随从 Wretched Poor.*获得 2 个随从 Wretched Poor.*获得随从 Wretched Poor/s);
assert.equal(combineRepeatedRewards("获得物品 Example。\n获得物品 Example。\n获得物品 Example。"), "获得 3 个物品 Example。");
assert.equal(combineRepeatedRewards("50%：获得物品 Example。\n\n50%：获得物品 Example。"), "50%：获得物品 Example。\n\n50%：获得物品 Example。");
assert.equal(conciseEventEffects("A HP −2，最高为其 HP 上限；降至 0 时死亡。"), "A HP-2，降至0时死亡。");
assert.equal(conciseEventEffects("A HP +2，最高为其 HP 上限。"), "A HP +2。");
assert.equal(conciseEventEffects("A 正在执行的任务进度 −12，最高为 100。"), "A的任务进度−12。");
assert.equal(conciseEventEffects("取消当前任务，不结算完成奖励。"), "取消当前挑战");
assert.equal(conciseEventEffects("33.333%：无效果。\n\n33.333%： A Menace +5。"), "33.333%：无效果。\n33.333%： A Menace +5。");
assert.equal(conciseEventEffects("25%：A 金币 +130。 损耗一次。 20%：损耗一次。 A HP-2，降至0时死亡。 15%：损耗一次。 A HP-4，降至0时死亡。 40%：损耗一次。"),
 "25%：A 金币 +130。 损耗一次。\n20%：损耗一次。 A HP-2，降至0时死亡。\n15%：损耗一次。 A HP-4，降至0时死亡。\n40%：损耗一次。");
const quotedProbability = '<CrossReference name="Example" href="#entry-example" text="25%：预览甲。 75%：预览乙。" />';
assert.equal(conciseEventEffects("25%：获得 " + quotedProbability + "。 75%：无效果。"), "25%：获得 " + quotedProbability + "。\n75%：无效果。");
const wreckRandom = byId.get("CLib.plunderWreck_Generic1").entry.eventOptions[1].text;
assert.deepEqual(wreckRandom.split("\n").map(line => /^\d+(?:\.\d+)?%/.exec(line)?.[0]), ["25%", "20%", "15%", "40%"]);
assert.equal(conciseEventEffects(wreckRandom), wreckRandom);
assert.match(linkEventEffectReferences("A Command +1，持续 25 回合；特质名称为 Dueled an orc。"), /name="Dueled an orc" href="\?page=character-modifiers#entry-character-base-event-dueled-an-orc"/);
const minionLink = linkEventEffectReferences("获得随从 Daughter: Chathoa：HP 2，Attack 3，Defence 4，Command 0。");
assert.equal(stripMarkers(minionLink), "获得随从 Daughter: Chathoa。");
assert.equal(eventPlainText(minionLink, text => text.replaceAll("Command", "BROKEN")), minionLink);
const masteryLink = linkEventConditionReferences("Death Mastery > 0 或 Blood Mastery > 0 或 Geomancy Mastery > 0");
assert.equal(stripMarkers(masteryLink), "Death Mastery > 0 或 Blood Mastery > 0 或 Geomancy Mastery > 0");
assert.equal([...masteryLink.matchAll(/href="\?page=character-modifiers#/g)].length, 3);
assert.match(linkEventConditionReferences("当地 Madness 强度 > 49"), /href="\?page=base-location-modifiers#entry-madness"/);
assert.equal(linkEventConditionReferences("A Might > 3 或 A Shadow > 50"), "A Might > 3 或 A Shadow > 50");
const linkedCondition = linkEventConditionReferences("1. 当地 Shadow > 49\n2. A 拥有 Brightness");
assert.equal(linkEventConditionReferences(linkedCondition), linkedCondition);
assert.equal(conciseEventEffects("当地 Shadow +10 个百分点，限制在 0–100%。"), "当地 Shadow +10。");
assert.equal(conciseEventEffects("当地 Madness 强度 +150，限制在 0–100。"), "当地 Madness 强度 +150，限制在 0–100。");
assert.equal(conciseEventEffects("当地 Shadow +10 个百分点，限制在 0–50%。"), "当地 Shadow +10，限制在 0–50%。");
assert.equal(conciseEventEffects("A Sanity −5，最低为 0。"), "A Sanity −5。");
assert.equal(conciseEventEffects("遗迹探索深度 +1，最高为该遗迹的最大深度。"), "遗迹探索深度 +1。");
assert.equal(conciseEventEffects("遗迹探索深度 +1，最高为 3。"), "遗迹探索深度 +1，最高为 3。");
assert.equal(conciseEventEffects("当地教团的玩家影响力 +40，受该教团影响力上限约束。"), "当地教团的玩家影响力 +40。");
const shadowMarker = '<CrossReference name="Shadow" href="?page=base-location-modifiers#entry-shadow" meta="地点修正" text="范围为 0–100%。" />';
assert.equal(withoutOrdinaryEventBounds("当地 " + shadowMarker + " +10 个百分点，限制在 0–100%。"), "当地 " + shadowMarker + " +10 个百分点。");
assert.equal(concisePercentageUnits("Shadow +10 个百分点，Awareness −5 个百分点。"), "Shadow +10，Awareness −5。");
assert.equal(concisePercentageUnits("Complexity: 90 + 世界恐慌百分点 ×0.25"), "Complexity: 90 + 世界恐慌 ×0.25");
assert.equal(concisePercentageUnits("概率等于超过 100% 的百分点。"), "概率等于超出 100% 的差值。");
assert.equal(replaceEventPlaceholders("Shadow +10 个百分点"), "Shadow +10");
assert.equal(replaceEventPlaceholders("当地是人类聚居地\n此条件存在无法参与判定的后段，按当前解析器已读取部分展示"), "当地是人类聚居地\n");
assert.equal(formatOptionCondition("任务事件计时 = 任务事件计时阈值\n并且 当前单位是 The Baroness\n并且 当地是人类聚居地\n此条件存在无法参与判定的后段，按当前解析器已读取部分展示"), "1. A 是 The Baroness\n2. 当地是人类聚居地");
for (const record of records) {
  const displayed = replaceEventPlaceholders(stripMarkers(JSON.stringify(record.entry)));
  assert.ok(!/百分点|此条件存在无法参与判定的后段|任务事件计时 = 任务事件计时阈值/.test(displayed), "internal presentation: " + record.eventId);
  for (const option of record.entry.eventOptions ?? []) assert.ok(!/Shadow[^。]*限制在 0–100%|Sanity[^。]*最低为 0|最高为该遗迹的最大深度|受该教团影响力上限约束/.test(stripMarkers(option.text)), "ordinary bound: " + record.eventId);
}
console.log(JSON.stringify({ status: "PASS", nodes: records.length, relationships: records.filter(record => record.category === "relationships").length,
  displayEntries: records.length - families.reduce((sum, family) => sum + family.records.length - 1, 0) - [...seriesGroups.values()].reduce((sum, count) => sum + count - 1, 0),
  agentEventCards: Object.values(agentEventBindings).flat().length,
  timedEvents: records.filter(record => record.entry.eventRepeat?.interval).length,
  onceOnlyEvents: records.filter(record => record.entry.eventRepeat?.once).length,
  series: new Set(records.filter(record => record.chain).map(record => record.source + ":" + record.chain.id)).size,
  relatedSeries: relatedEventSeries.length,
  relatedNodes: records.filter(record => record.chain?.mode === "related").length,
  mutualRelationshipOutcomes: records.flatMap(record => record.entry.eventOptions ?? []).filter(option => /AB 之间互相好感等级/.test(option.text)).length }, null, 2));
