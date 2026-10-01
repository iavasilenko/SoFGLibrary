import { modifierGroups } from "./BaseLocationModifiersData";
import { characterModifiers } from "./CharacterModifiersData";
import { agents } from "./AgentsData";
import { minionSections } from "./MinionsData";
import { eventPlainText } from "./EventConditionPresentation";

type EffectReference = { name: string; href: string; meta: string; text: string; image?: string; source: string };
const modifiers: EffectReference[] = modifierGroups.flatMap(group => group.sections.flatMap(section => section.items.map(item => ({
  name: item.name, href: "?page=base-location-modifiers#entry-" + item.id, meta: "地点修正", text: item.text,
  image: item.image, source: group.baseGame ? "base" : group.id.replace(/^modifiers-/, ""),
}))));
const traits: EffectReference[] = [...characterModifiers.map(item => ({
  name: item.name, href: "?page=character-modifiers#entry-" + item.id, meta: "角色特质", text: item.text, source: item.source,
})), ...agents.flatMap(agent => agent.skills.map(skill => ({
  name: skill.name, href: "?page=agents#entry-" + (skill.id ?? skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")),
  meta: "Agent 技能", text: skill.text, source: "agent",
})))];
for (const [name, canonical] of [["Death Mastery", "Mastery of Death"], ["Blood Mastery", "Mastery of Blood Magic"], ["Geomancy Mastery", "Mastery of Geomancy"]]) {
  const ref = traits.find(ref => ref.name === canonical);
  if (ref) traits.push({ ...ref, name });
}
const minions: EffectReference[] = minionSections.flatMap(section => section.items.map(item => ({
  name: item.name, href: "?page=minions#entry-" + item.id, meta: "随从", text: [item.stats, item.text, item.acquisition].filter(Boolean).join("\n"),
  image: item.image, source: section.baseGame || item.baseGame ? "base" : section.id,
})));

const quote = (text: string) => text.replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1").replaceAll('"', "“").replace(/\s*\n+\s*/g, " ");
const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function referenceIndex(references: EffectReference[]) {
  const candidates = new Map<string, EffectReference[]>();
  for (const ref of references) {
    const key = ref.name.toLowerCase();
    const values = candidates.get(key) ?? []; values.push(ref); candidates.set(key, values);
  }
  const names = [...candidates.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp("(?<![A-Za-z0-9])(" + names.map(escape).join("|") + ")(?![A-Za-z0-9])", "gi");
  return { candidates, pattern };
}
const modifierIndex = referenceIndex(modifiers), traitIndex = referenceIndex(traits), minionIndex = referenceIndex(minions);
const minionStats = new RegExp("((?:获得|得到)\\s*(?:\\d+\\s*个)?随从\\s+)(" + [...minionIndex.candidates.keys()].sort((a, b) => b.length - a.length).map(escape).join("|") + ")[：:]\\s*HP[^\\n。]*(。?)", "gi");
function linkNames(text: string, { candidates, pattern }: ReturnType<typeof referenceIndex>, entryId?: string, eligible?: (name: string, before: string, after: string) => boolean) {
  return eventPlainText(text, value => value.replace(pattern, (name: string, _capture: string, index: number) => {
    if (eligible && !eligible(name, value.slice(0, index), value.slice(index + name.length))) return name;
    const options = candidates.get(name.toLowerCase())!;
    const ref = options.find(ref => entryId?.startsWith("event-" + ref.source + "-")) ?? options.find(ref => ref.source === "base") ?? options[0];
    return '<CrossReference name="' + quote(name) + '" href="' + ref.href + '" meta="' + ref.meta + '" text="' + quote(ref.text) + '"'
      + (ref.image ? ' image="' + quote(ref.image) + '"' : "") + ' />';
  }));
}

export function linkEventConditionReferences(text: string, entryId?: string) {
  // Local modifiers and personal Shadow are not the same entry. Check each
  // logical term separately; never link a numeric attribute as a trait.
  return eventPlainText(text, value => value.split(/(\n| 或 |；(?=\d+\.\s+))/g).map(part => {
    part = linkNames(part, modifierIndex, entryId, (_name, before) => /当地|地点|地块|相邻地点|世界平均/.test(before) && !/[AB]\s*$/.test(before));
    return linkNames(part, traitIndex, entryId, (name, before, after) => !/^(Might|Lore|Intrigue|Command)$/i.test(name) || /拥有|特质/.test(before + after));
  }).join(""));
}

// Link additions, not unrelated prose or bare attribute changes (Might +1).
export function linkEventEffectReferences(text: string, entryId?: string) {
  return text.split("\n").map(line => {
    const plain = line.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, "");
    if (/(?:获得|得到)\s*(?:\d+\s*个)?随从/.test(plain)) {
      line = eventPlainText(line, value => value.replace(minionStats, "$1$2$3"));
      line = linkNames(line, minionIndex, entryId);
    }
    if (/特质名称为/.test(plain)) line = eventPlainText(line, value => value.replace(/(特质名称为\s*)([^。；\n]+)/g,
      (_, prefix: string, name: string) => prefix + linkNames(name, traitIndex, entryId)));
    if (/当地|地点|地块/.test(plain) && /出现|添加|新增|建立|获得|加入|设为|[+＋]/.test(plain)) line = linkNames(line, modifierIndex, entryId);
    if (/获得|添加|新增|赋予|加入|得到|拥有|施加|变为/.test(plain)) line = linkNames(line, traitIndex, entryId);
    return line;
  }).join("\n");
}
