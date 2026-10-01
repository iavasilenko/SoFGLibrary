import { locationGroups as sourceLocationGroups, locationIntro } from "./LocationsData";
import { sortArchiveMods } from "./ArchiveModOrder";
import type { ArchiveRecordConfig, DetailItem, SectionConfig } from "./GodArchiveTypes";

import { locationEnvironment } from "./LocationEnvironmentData";

import { commonPlaceActionScopes } from "./CommonPlaceActions";
import { locationOwnership } from "./LocationOwnership";
import { locationRulerGroups, locationRulerBindings } from "./LocationRulerData";

const unplacedIds = new Set(sourceLocationGroups.flatMap(group => group.sections.filter(section => section.id.endsWith("-unplaced")).flatMap(section => section.items.map(item => item.id!))));

const rawLocationGroups = sortArchiveMods(sourceLocationGroups, group => [group.id, group.title]).map(group => {
 const sections = group.sections.filter(section => !section.id.endsWith("-unplaced")).map(section => ({ ...section, items: section.items.map(item => {
   const environment = locationEnvironment[item.id!];
   if (!environment) return { ...item };
   const paragraphs = item.text.split("\n\n");
   paragraphs.splice(1, 0, "Temperature\n" + environment.temperature, "Prosperity\n" + environment.prosperity);
   return { ...item, text: paragraphs.join("\n\n") };
 }) }));
 const rulers = locationRulerGroups.find(source => source.id === group.id);
 if (rulers) sections.push(...rulers.sections);
 const extras = new Map<string, Set<string>>();
 for (const binding of locationRulerBindings.filter(binding => binding.scope === group.id)) for (const host of binding.hosts) {
   if (!extras.has(host)) extras.set(host, new Set());
   binding.entryIds.forEach(id => extras.get(host)!.add(id));
 }
 const actions = new Map((rulers?.sections ?? []).flatMap(section => section.items.map(item => [item.id!, item] as const)));
 for (const [host, ids] of extras) {
   const list = "\n\n统治者行动：\n" + [...ids].map(id => '<CrossReference name="' + actions.get(id)!.name + '" href="#entry-' + id + '" />').join("、");
   const own = sections.flatMap(section => section.items).find(item => item.id === host);
   if (own) { own.text += list; continue; }
   const original = sourceLocationGroups.flatMap(source => source.sections.flatMap(section => section.items)).find(item => item.id === host);
   if (!original) continue;
   let hooks = sections.find(section => section.id.endsWith("-extensions"));
   if (!hooks) { hooks = { id: group.id + "-ruler-extensions", title: "条件性行动入口", items: [] }; sections.push(hooks); }
   hooks.items.push({ id: "place-hook-rulers-" + group.id + "-" + host, name: original.name + " · 统治者行动", image: original.image, text: '对应地点 / 兴趣点\n<CrossReference name="' + original.name + '" href="#entry-' + host + '" />' + list });
 }
 return { ...group, sections };
});

const locationGroups = rawLocationGroups.map(group => ({ ...group,
  description: group.id === "places-base" ? "人类、精灵、矮人、Orc、Deep Ones 与奇观相关的通用地点和兴趣点。" : group.description,
  sections: group.sections.map(section => ({ ...section, items: section.items.filter(item => !locationOwnership[item.id!] && item.id !== "place-hook-kalastrophe-defile") })).filter(section => section.items.length),
})).filter(group => group.sections.length);

export type PlacePage = "locations" | "points-of-interest";
type Block = { title: string; items: DetailItem[] };
export type PlaceArticle = { id: string; name: string; image?: string; description?: string; blocks: Block[]; unplaced?: boolean };
type Source = { id: string; title: string; description: string; articles: PlaceArticle[] };
type PageModel = { kind: PlacePage; title: string; sources: Source[]; intro: DetailItem[]; config: ArchiveRecordConfig; redirects: Record<string, string>; aliases: Record<string, string> };
const allSections = rawLocationGroups.flatMap(group => group.sections);
const allItems = allSections.flatMap(section => section.items);
const originals = new Map(allItems.map(item => [item.id!, item]));
const category = new Map(allSections.flatMap(section => section.items.map(item => [item.id!, section.title] as const)));
const isEntity = (item: DetailItem) => item.id?.startsWith("location-");
const kindOf = (item: DetailItem): PlacePage => item.id?.startsWith("location-sub-") ? "points-of-interest" : "locations";
const references = (text: string) => [...text.matchAll(/href="#entry-([^"]+)"/g)].map(match => match[1]);
const actionIds = (items: DetailItem[]) => [...new Set(items.flatMap(item => references(item.text)).filter(id => /^place-(?:task|ruler)-/.test(id) && !locationOwnership[id]))];
const hookTargets = (item: DetailItem) => {
  const paragraph = item.text.split("\n\n").find(part => part.startsWith("对应地点 / 兴趣点"));
  return paragraph ? references(paragraph).filter(id => originals.has(id) && isEntity(originals.get(id)!)) : [];
};
const hookImage = (item: DetailItem) => item.image ?? hookTargets(item).map(id => originals.get(id)?.image).find(Boolean);
const ownActionSection = /^(?:共同行动|英雄任务|挑战|宗教任务|自主单位任务|统治者行动)：/;
const withoutActionLists = (text: string) => text.split("\n\n").filter(part => !ownActionSection.test(part)).join("\n\n");
const actionBlocks = (ids: string[]): Block[] => {
  const groups = new Map<string, DetailItem[]>();
  for (const id of ids) {
    const item = originals.get(id);
    if (!item) continue;
    const name = category.get(id)!;
    groups.set(name, [...(groups.get(name) ?? []), item]);
  }
  return [...groups].map(([title, items]) => ({ title, items }));
};

function sourceArticles(kind: PlacePage): Source[] {
  return locationGroups.map(group => {
    const entities = group.sections.flatMap(section => section.items).filter(item => isEntity(item) && kindOf(item) === kind);
    const hooks = group.sections.filter(section => section.id.endsWith("-extensions")).flatMap(section => section.items);
    const usedHooks = new Set<string>();
    const articles: PlaceArticle[] = entities.map(item => {
      const attached = hooks.filter(hook => hookTargets(hook).includes(item.id!));
      attached.forEach(hook => usedHooks.add(hook.id!));
      const overview = { ...item, text: withoutActionLists(item.text) };
      return {
        id: "place-article-" + item.id, name: item.name, image: item.image,
        unplaced: group.sections.some(section => section.id.endsWith("-unplaced") && section.items.includes(item)),
        blocks: [
          { title: kind === "locations" ? "地点" : "兴趣点", items: [overview] },
          ...(attached.length ? [{ title: "条件性行动入口", items: attached.map(hook => ({ ...hook, image: hookImage(hook), text: withoutActionLists(hook.text) })) }] : []),
          ...actionBlocks(actionIds([item, ...attached])),
        ],
      };
    });
    // Existing locations extended by a mod stay in that mod's source section.
    const extensionTargets = [...new Set(hooks.filter(hook => !usedHooks.has(hook.id!)).flatMap(hookTargets))]
      .filter(id => kindOf(originals.get(id)!) === kind && !entities.some(item => item.id === id));
    for (const targetId of extensionTargets) {
      const target = originals.get(targetId)!;
      const attached = hooks.filter(hook => hookTargets(hook).includes(targetId));
      attached.forEach(hook => usedHooks.add(hook.id!));
      articles.push({
        id: group.id + "-extension-" + targetId, name: target.name + " · 扩展", image: target.image,
        blocks: [{ title: "条件性行动入口", items: attached.map(hook => ({ ...hook, image: hookImage(hook), text: withoutActionLists(hook.text) })) }, ...actionBlocks(actionIds(attached))],
      });
    }
    // Hooks without a concrete POI target are settlement/location additions.
    if (kind === "locations") for (const hook of hooks.filter(hook => !hookTargets(hook).length)) {
      articles.push({ id: "place-article-" + hook.id, name: hook.name, image: hookImage(hook), blocks: [
        { title: "条件性行动入口", items: [{ ...hook, image: hookImage(hook), text: withoutActionLists(hook.text) }] },
        ...actionBlocks(actionIds([hook])),
      ] });
    }
    return { id: group.id, title: group.title, description: group.description, articles };
  }).filter(group => group.articles.length);
}

const pages = new Map<PlacePage, PageModel>();
const rawPages = new Map<PlacePage, Source[]>([
  ["locations", sourceArticles("locations")], ["points-of-interest", sourceArticles("points-of-interest")],
]);
// Retain any independently documented action without manufacturing a host.
const referenced = new Set([...rawPages.values()].flatMap(groups => groups.flatMap(group => group.articles.flatMap(article => article.blocks.flatMap(block => block.items.map(item => item.id))))));
for (const group of locationGroups) {
  const leftovers = group.sections.flatMap(section => section.items).filter(item => item.id?.startsWith("place-task-") && !referenced.has(item.id));
  if (!leftovers.length) continue;
  const groups = rawPages.get("locations")!;
  let target = groups.find(source => source.id === group.id);
  if (!target) { target = { id: group.id, title: group.title, description: group.description, articles: [] }; groups.push(target); }
  target.articles.push({ id: group.id + "-additional-actions", name: "其他地点行动", blocks: actionBlocks(leftovers.map(item => item.id!)) });
}
for (const groups of rawPages.values()) groups.sort((a, b) => locationGroups.findIndex(group => group.id === a.id) - locationGroups.findIndex(group => group.id === b.id));

// Extract only reviewed base-game scopes; Mod additions stay in their own source.
const commonAliases = new Map<PlacePage, Record<string, string>>();
for (const [kind, sources] of rawPages) {
  const source = sources.find(source => source.id === "places-base");
  if (!source) continue;
  const aliases: Record<string, string> = {};
  const commonArticles: PlaceArticle[] = [];
  for (const scope of commonPlaceActionScopes[kind]) {
    const hosts = source.articles.filter(article => scope.hosts.includes(article.id.replace("place-article-", "")));
    const selected = new Set(scope.actions);
    const blocks = new Map<string, Block>();
    const scopeText = hosts.map(article => article.name).join("、");
    const groupLink = '<CrossReference name="' + scope.name + '" href="#' + scope.id + '" meta="共用行动" text="适用范围：' + scopeText + '。仍需满足各行动的执行条件。" />';
    for (const article of hosts) {
      for (const block of article.blocks) block.items = block.items.filter(item => {
        if (!selected.has(item.id!)) return true;
        const target = blocks.get(block.title) ?? { title: block.title, items: [] };
        if (!target.items.some(existing => existing.id === item.id)) target.items.push(item);
        blocks.set(block.title, target);
        aliases["entry-" + article.id + "--" + item.id] = item.id!;
        return false;
      });
      article.blocks = article.blocks.filter(block => block.items.length);
      const overview = article.blocks.find(block => ["地点", "兴趣点"].includes(block.title))?.items[0];
      if (overview) overview.text += "\n\n可以执行：" + groupLink + "。";
    }
    if (blocks.size) commonArticles.push({
      id: scope.id, name: scope.name,
      description: "适用范围：" + hosts.map(article => {
        const item = article.blocks.find(block => ["地点", "兴趣点"].includes(block.title))!.items[0];
        return '<CrossReference name="' + article.name + '" href="#entry-' + item.id + '" />';
      }).join("、") + "。",
      blocks: [...blocks.values()],
    });
  }
  source.articles.unshift(...commonArticles);
  commonAliases.set(kind, Object.fromEntries(Object.entries(aliases).map(([id, target]) => [id, "entry-" + target])));
}

const destinations = new Map<string, Map<PlacePage, string>>();
for (const [kind, sources] of rawPages) {
  const seen = new Set<string>();
  for (const source of sources) for (const article of source.articles) {
    for (const block of article.blocks) block.items = block.items.map(item => {
      const originalId = item.id!;
      const id = seen.has(originalId) ? article.id + "--" + originalId : originalId;
      seen.add(originalId);
      const targets = destinations.get(originalId) ?? new Map<PlacePage, string>();
      if (!targets.has(kind)) targets.set(kind, id);
      destinations.set(originalId, targets);
      return { ...item, id };
    });
  }
}
const plain = (text: string) => text.replace(/<CrossReference name="([^"]+)"[^>]*\/>/g, "$1").replaceAll('"', "“");
for (const [kind, sources] of rawPages) {
  const rewrite = (text: string, local = new Map<string, string>()) => text.replace(/<CrossReference name="([^"]+)" href="#entry-([^"]+)"\s*\/>/g, (full, name: string, id: string) => {
    if (unplacedIds.has(id)) return name;
    const localId = local.get(id) ?? destinations.get(id)?.get(kind);
    if (localId) return '<CrossReference name="' + name + '" href="#entry-' + localId + '" />';
    const target = [...(destinations.get(id)?.entries() ?? [])][0];
    const exclusive = locationOwnership[id];
    const item = originals.get(id);
    if ((!target && !exclusive) || !item) return full;
    const preview = plain([item.text, item.location && "执行地点：" + item.location, item.meta, item.statLine, item.limit && "执行条件：" + item.limit].filter(Boolean).join("\n"));
    const title = isEntity(item) ? (kindOf(item) === "locations" ? "地点" : "兴趣点") : category.get(id) ?? "";
    return '<CrossReference name="' + name + '" href="' + (exclusive?.href ?? ("?page=" + target[0] + "#entry-" + target[1])) + '" meta="' + title + '" text="' + preview + '"' + (item.image ? ' image="' + item.image + '"' : "") + ' />';
  });
  const rewriteItem = (item: DetailItem, local?: Map<string, string>): DetailItem => ({
    ...item, text: rewrite(item.text, local),
    location: item.location ? rewrite(item.location, local) : undefined,
    limit: item.limit ? rewrite(item.limit, local) : undefined,
  });
  for (const source of sources) for (const article of source.articles) {
    if (article.description) article.description = rewrite(article.description);
    const local = new Map(article.blocks.flatMap(block => block.items.map(item => [item.id!.split("--").at(-1)!, item.id!] as const)));
    for (const block of article.blocks) block.items = block.items.map(item => rewriteItem(item, local));
  }
  const intro = locationIntro.map(item => rewriteItem({
    ...item,
    text: item.id === "place-model" ? "地点是地图上的聚居地或野外地点载体；兴趣点是附加在地点内的具体设施。\n每个条目分别列出自身提供的挑战与任务；地点修正、单位、神祇与 Mod 追加的行动另注明条件。实际能否执行还取决于执行者、渗透、资源、信仰及世界状态。" : item.text,
  }));
  const sections: SectionConfig[] = [
    { id: "place-guide", title: "阅读说明", items: intro },
    ...sources.flatMap(source => source.articles.flatMap(article => article.blocks.map((block, index) => ({
      id: article.id + "-block-" + index, title: block.title, items: block.items,
    })))),
  ];
  const redirects: Record<string, string> = Object.fromEntries(Object.entries(locationOwnership).map(([id, value]) => ["entry-" + id, value.href]));
  for (const [id, targets] of destinations) if (!targets.has(kind)) {
    const [targetKind, targetId] = [...targets][0];
    redirects["entry-" + id] = "?page=" + targetKind + "#entry-" + targetId;
  }
  pages.set(kind, { kind, title: kind === "locations" ? "地点" : "兴趣点", sources, intro, redirects, aliases: commonAliases.get(kind) ?? {},
    config: { id: kind, assetDir: "locations", autoLink: false, powers: [], sections } });
}
export function getLocationPage(kind: PlacePage) { return pages.get(kind)!; }
