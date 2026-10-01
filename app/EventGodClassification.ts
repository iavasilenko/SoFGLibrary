import type { EventRecord } from "./EventTypes";

const aliases: Record<string, string> = { snake: "she-who-will-feast", swwf: "she-who-will-feast", iastur: "iastur", vinerva: "vinerva", ophanim: "ophanim", mammon: "mammon", maker: "broken-maker", deathgame: "deaths-games", escamrak: "escamrak", mekhane: "mekhane", factory: "aberrant-metal" };
export function eventGods(record: EventRecord): string[] {
 if (record.gods?.length) return record.gods;
 if (/exploreRuins_Faith_|modifierOphanimCrisis/.test(record.eventId)) return ["ophanim"];
 if (record.eventId === "anw.vinervaGiftAccepted") return ["vinerva"];
 if (["anw.insectAgentInitial", "insect.droneCombat"].includes(record.eventId)) return ["cordyceps"];
 // Exclusions and an option available to one god do not make the event god-only.
 const condition = record.condition.replace(/!\(\s*(?:god_is_|is_god_)\w+\s*\)/g, "");
 return [...new Set([...condition.matchAll(/(?<![!\w])(?:god_is_|is_god_)([a-z_]+)/g)].map(match => aliases[match[1]]).filter(Boolean))];
}
