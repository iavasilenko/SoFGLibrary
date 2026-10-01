import type { ReactNode } from "react";
import { presentEventItems } from "./EventPresentation";
import { projectGodEvents } from "./GodEventProjection";

export type ArchiveGodChoice = "index" | "she-who-will-feast" | "iastur" | "vinerva" | "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps" | "ixthus" | "kishi" | "living-void" | "chandalor" | "escamrak" | "adolia" | "kalastrophe" | "thing-from-beyond" | "paradoxis" | "shadow-counsel" | "shadow-counsel-war" | "lotus-egregore" | "aberrant-metal" | "alai" | "mekhane" | "villikos";
export type Relation = { name: string; href: string; meta?: string; text?: string; image?: string; target?: "_blank" };
export type ArchivePageChoice = ArchiveGodChoice | "base-location-modifiers" | "base-items" | "agents" | "religions" | "magic" | "non-player-units" | "minions" | "armies" | "events" | "locations" | "character-modifiers" | "points-of-interest";
export type EventCategory = "gods" | "tasks" | "relationships" | "other" | "ruins" | "chains";
export type EventChain = { id: string; name: string; description: string; mode?: "related" };
export type EventComparison = { original: Relation; changes: string[] };
export type EventOption = { name: string; text: string; condition?: string; conditionGroup?: number };
export type EventRepeat = { once?: boolean; interval?: string };
export type TenetLevel = { level: number; text: string };
export type DetailItem = { name: string; text: string; acquisition?: string; eventOptions?: EventOption[]; eventRepeat?: EventRepeat; eventCategory?: EventCategory; eventChain?: EventChain; eventComparison?: EventComparison; eventOriginal?: Relation; eventGods?: string[]; tenetRange?: string; tenetLevels?: TenetLevel[]; image?: string; images?: string[]; seal?: number; meta?: string; statLine?: string; location?: string; locationGroup?: string; limit?: string; id?: string; baseGame?: boolean; time?: string; stats?: string; abilities?: DetailItem[]; positiveTags?: string; negativeTags?: string; initialValue?: string; modifierLocations?: string; modifierSource?: string; modifierChange?: { natural: string; external: string } };
export type PowerItem = { name: string; seal: number; cost: string | number; icon?: string; images?: string[]; effect: string; limit: string; id?: string };
export type PowerGroupConfig = { id: string; title: string; powers: PowerItem[] };
export type SealItem = { seal: number; progress: number; progressText?: string; agents: number | string; reward: string[]; powerRecovery?: string };
export type PlaceArticleConfig = { id: string; name: string; image?: string; unplaced?: boolean; blocks: { title: string; entryIds: string[] }[] };
export type SectionConfig = { placeArticles?: PlaceArticleConfig[]; id: string; title: string; items: DetailItem[]; media?: boolean; icon?: ReactNode };
export type SupplicantConfig = { name?: string; image?: string; stats: string; abilities: DetailItem[] };
export type GodConfig = {
  id: "ophanim" | "mammon" | "broken-maker" | "evil-beneath" | "deaths-games" | "cordyceps" | "ixthus" | "she-who-will-feast" | "iastur" | "vinerva" | "kishi" | "living-void" | "chandalor" | "escamrak" | "adolia" | "kalastrophe" | "thing-from-beyond" | "paradoxis" | "shadow-counsel" | "shadow-counsel-war" | "lotus-egregore" | "aberrant-metal" | "alai" | "mekhane" | "villikos"; name: string; number: string; theme: string; assetDir: string; background: string; portrait: string;
  flavour: string; caption: string; maxTurns: string; awaken: string; panic: string; finalAgents: string; progressLabel: string; unlockMethod?: string; dlc?: string; sourceMod?: string; initialAgents?: string; heroMetric?: { value: string; label: string }; powerRecovery: string; powerCapacity?: string; supplicant?: SupplicantConfig;
  core: string[]; overviewExtra?: { title: string; text: string; playStyle?: string }; specialVictory?: string; specialFailure?: string; seals: SealItem[]; powers: PowerItem[]; powerGroups?: PowerGroupConfig[]; drawPowers?: PowerItem[]; drawCards?: SectionConfig; sections: SectionConfig[];
  relations?: Record<string, { sources?: Relation[]; effects?: Relation[] }>;
};

export type ArchiveRecordConfig = Pick<GodConfig, "assetDir" | "powers" | "powerGroups" | "drawPowers" | "drawCards" | "supplicant" | "sections" | "relations"> & { id: string; autoLink?: boolean };

export const O = (name: string, seal: number, cost: string | number, effect: string, limit: string, icon?: string): PowerItem => ({ name, seal, cost, effect, limit, icon });
export const D = (name: string, text: string, extra: Partial<DetailItem> = {}): DetailItem => ({ name, text, ...extra });

function anchorFor(name: string) {
  return "entry-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function disambiguateConfigEntries(config: GodConfig) {
  const seen = new Map<string, number>();
  [...config.powers, ...(config.powerGroups ?? []).flatMap(group => group.powers), ...(config.drawPowers ?? []), ...(config.supplicant?.abilities ?? []), ...(config.drawCards?.items ?? []), ...config.sections.flatMap(section => section.items)].forEach(item => {
    const base = item.id ? "entry-" + item.id : anchorFor(item.name);
    const count = seen.get(base) ?? 0;
    if (count > 0 && !item.id) item.id = base.replace(/^entry-/, "") + "-" + (count + 1);
    seen.set(base, count + 1);
  });
}

function normalizeTaskTags(config: GodConfig) {
  const taskSections = new Set(["hero-tasks", "religious-tasks", "ruler-actions"]);
  config.sections.filter(section => taskSections.has(section.id)).forEach(section => section.items.forEach(item => {
    item.positiveTags ??= "未找到";
    item.negativeTags ??= "未找到";
  }));
}

function normalizeLocationModifiers(config: GodConfig) {
  config.sections.filter(section => section.id === "location-modifiers").forEach(section => section.items.forEach(item => {
    item.initialValue ??= "未找到。";
    item.modifierChange ??= { natural: "未找到。", external: "未找到。" };
  }));
}

function normalizeSectionOrder(config: GodConfig) {
  const preferredOrder = ["units", "challenges", "hero-tasks"];
  const firstPreferredIndex = config.sections.findIndex(section => preferredOrder.includes(section.id));
  if (firstPreferredIndex < 0) return;
  const preferredSections = preferredOrder
    .map(id => config.sections.find(section => section.id === id))
    .filter((section): section is SectionConfig => Boolean(section));
  const remainingSections = config.sections.filter(section => !preferredOrder.includes(section.id));
  const before = config.sections
    .slice(0, firstPreferredIndex)
    .filter(section => !preferredOrder.includes(section.id));
  const after = remainingSections.filter(section => !before.includes(section));
  config.sections = [...before, ...preferredSections, ...after];
}

export function prepareGodConfig(config: GodConfig) {
  projectGodEvents(config);
  normalizeTaskTags(config);
  normalizeLocationModifiers(config);
  normalizeSectionOrder(config);
  disambiguateConfigEntries(config);
  const entries = config.sections.flatMap(section => section.items);
  const normalized = presentEventItems(entries);
  const presented = entries.map((item, index) => item.eventOriginal ? item : normalized[index]);
  const eventDisplay = new Map(entries.map((item, index) => [item, presented[index]]));
  config.sections = config.sections.map(section => ({ ...section, items: section.items.map(item => eventDisplay.get(item)!) }));
  return config;
}
