// Run with Node >= 22.13: node scripts/check-agent-expansions.mjs
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
registerHooks({
  resolve(specifier, context, next) {
    if (specifier.startsWith(".") && context.parentURL && !/\.[cm]?[jt]sx?$/.test(specifier)) {
      const candidate = new URL(specifier + ".ts", context.parentURL);
      if (existsSync(candidate)) return next(candidate.href, context);
    }
    return next(specifier, context);
  },
});
const { additionalAgents } = await import("../app/AgentExpansionData.ts");
const related = await import("../app/AgentExpansionRelatedData.ts");
const { agents } = await import("../app/AgentsData.ts");
const { armies } = await import("../app/ArmiesData.ts");
const { characterModifiers } = await import("../app/CharacterModifiersData.ts");
const { modifierGroups } = await import("../app/BaseLocationModifiersData.ts");
const { minionSections } = await import("../app/MinionsData.ts");
const { items } = await import("../app/BaseItemsData.ts");
const { eventGroups } = await import("../app/EventsData.ts");
const { agentEventBindings } = await import("../app/AgentEventBindings.ts");
const { getAgentEvents } = await import("../app/AgentEventsModel.ts");
const events = eventGroups.flatMap(g => g.records);
const idFor = i => "entry-" + (i.id ?? i.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
const ownCards = additionalAgents.flatMap(a => [...a.skills, ...a.challenges]);
assert.equal(additionalAgents.length, 3);
assert.equal(ownCards.length, 26);
assert.equal(additionalAgents.flatMap(a => a.challenges).length, 14);
assert.equal(new Set(agents.map(a => a.id)).size, agents.length);
for (const agent of agents) {
  assert.ok(agent.note.trim(), "missing gameplay introduction: " + agent.id);
  assert.ok(!agent.note.includes("具有灵魂"), "unnecessary soul description: " + agent.id);
  assert.ok(!/^属于 (Undead|Orc)/.test(agent.note), "identity must follow gameplay: " + agent.id);
  assert.ok(agent.skills.every(s => !/可选特质.*[1１一] ?级/.test(s.meta ?? "")), "redundant default level: " + agent.id);
}
for (const [id, species] of Object.entries({
  warlord: "Orc", shaman: "Orc", buccaneer: "Orc", baroness: "Undead",
  harvester: "Undead", whisperer: "Undead", survivor: "Monster",
  dissident: "Elf", exile: "Elf", "drowned-prophet": "Deep One",
})) assert.ok(agents.find(a => a.id === id)?.identity?.includes(species), "missing species: " + id);
for (const id of ["warlock", "trickster", "courtier", "redeemer", "surveyor", "corrupted-hero", "corrupted-acolyte", "werewolf", "drowned-prophet"]) {
  assert.ok(agents.find(a => a.id === id)?.identity?.includes("家族"), "missing family rule: " + id);
}
for (const agent of additionalAgents) {
  assert.equal(agents.filter(a => a.id === agent.id).length, 1);
  for (const c of agent.challenges) {
    assert.match(c.meta, /使用属性/);
    for (const name of ["Complexity", "Profile", "Menace", "XP"]) assert.ok(c.statLine.includes(name), c.id + name);
    assert.ok(c.location && c.text);
  }
  assert.ok(agent.skills.every(s => !s.image), "traits must not have portraits");
  for (const b of agentEventBindings[agent.id]) {
    const record = events.find(r => r.entry.id === b.id);
    assert.ok(record, "event binding missing: " + b.id);
    for (const i of b.choices ?? []) assert.ok(record.entry.eventOptions?.[i], "choice missing: " + b.id + ":" + i);
  }
  assert.equal(getAgentEvents(agent.id).flatMap(s => s.items).length, agentEventBindings[agent.id].length);
}
const pageEntries = {
  agents: [...agents.map(a => ({...a, id: "agent-" + a.id})), ...agents.flatMap(a => [...a.skills, ...a.challenges, ...getAgentEvents(a.id).flatMap(s => s.items)])],
  armies: [...armies.map(a => ({...a, id: "army-" + a.id})), ...armies.flatMap(a => a.skills)],
  "character-modifiers": characterModifiers,
  "base-location-modifiers": modifierGroups.flatMap(g => g.sections.flatMap(s => s.items)),
  "base-items": items,
  minions: minionSections.flatMap(s => s.items),
  events: events.map(r => r.entry),
};
const anchors = Object.fromEntries(Object.entries(pageEntries).map(([k, v]) => [k, new Set(v.map(idFor))]));
const data = {
 agents: additionalAgents,
 events: related.agentExpansionEvents,
 armies: related.robberBaronArmy,
 "character-modifiers": related.agentExpansionTraits,
 "base-location-modifiers": related.robberBaronModifiers,
};
let links = 0, pictures = 0;
const marker = /<CrossReference name="([^"]+)"(?: href="([^"]+)")?(?: meta="([^"]+)")?(?: text="([^"]+)")?(?: image="([^"]+)")?(?: target="(_blank)")?\s*\/>/g;
const checkImage = path => {
  assert.ok(existsSync(new URL("../public/" + path.replace(/^\.?\//, ""), import.meta.url)), "missing image: " + path);
  pictures++;
};
function walk(obj, page, key = "") {
  if (typeof obj === "string") {
    assert.ok(!obj.includes("\\n"), "literal backslash-n: " + key);
    if (key === "image") checkImage(obj);
    const matches = [...obj.matchAll(marker)];
    assert.equal(matches.length, (obj.match(/<CrossReference /g) ?? []).length, "invalid marker: " + obj);
    for (const m of matches) {
      if (m[5]) checkImage(m[5]);
      if (!m[2]) continue;
      const url = new URL(m[2], "http://localhost/?page=" + page);
      const pageKey = url.searchParams.get("page") || page;
      assert.ok(anchors[pageKey]?.has(url.hash.slice(1)), "bad href: " + m[2]);
      links++;
    }
  } else if (obj && typeof obj === "object") {
    for (const [k,v] of Object.entries(obj)) walk(v, page, k);
  }
}
for (const [page, value] of Object.entries(data)) walk(value, page);
for (const trait of related.agentExpansionTraits) assert.ok(characterModifiers.some(x => x.id === trait.id));
assert.ok(armies.some(a => a.id === related.robberBaronArmy.id));
assert.ok(modifierGroups.some(g => g.id === related.robberBaronModifiers.id));
assert.ok(minionSections.some(s => s.id === "mod-robber-baron"));
const audit = new URL("../AUDIT-2026-09-26-agents.md", import.meta.url);
assert.ok(existsSync(audit));
console.log(JSON.stringify({agents: 3, skills: 12, challenges: 14, directEvents: 2, eventCards: additionalAgents.flatMap(a => getAgentEvents(a.id).flatMap(s => s.items)).length, links, pictures, status: "PASS"}, null, 2));
