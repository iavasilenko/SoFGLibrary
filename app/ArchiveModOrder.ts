// Shared order for content and navigation; workshop IDs are the source of truth.
const definitions: [number, number, string[]][] = [
 [1,2879667447,["Deep Ones Plus","drowned"]], [1,2932110698,["Living Wilds","living-wilds"]], [1,3003549759,["Orcs Plus","orcs"]],
 [2,2866026291,["Ixthus","kingOfCups"]], [2,2879207914,["Kishi","bloodshed"]], [2,2879249746,["Living Void","living-void","vacuum"]], [2,2879251084,["Chandalor","love"]], [2,2900259087,["Escamrak","Flesh God"]], [2,2980692812,["Adolia","God_FacelessMemory"]], [2,3192034838,["Kalastrophe","Mirror God"]],
 [2,3232578780,["Out of Gods","Thing From Beyond","Paradoxis","Shadow Counsel","Lotus Egregore","thing-from-beyond","shadow-counsel","lotus-egregore"]], [2,3320562229,["Aberrant Metal","aberrant-metal","Production God"]], [2,3383875039,["Alai","Web God"]], [2,3591348120,["MEKHANE"]], [2,3647343379,["Villikos","First Claimant"]],
 [3,2932765110,["Covens, Curses & Curios Recast","Covens","CovenExpansionRecast"]], [3,2968835416,["Community Library","CLib"]], [3,2988960487,["KeeperItemMod"]], [3,3261852980,["AAEnglishman and Mall's Event Pack","maeRedux"]],
 [4,3236518418,["The Whisperer","whisperer"]], [4,3236779751,["Redeemer Agent","redeemer"]], [4,3237303618,["The Courtesan","courtesan"]], [4,3446675112,["The Robber Baron","robber-baron"]], [4,3700090862,["The Surveyor","surveyor"]],
];
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
export function archiveModOrder(value: string | string[]): [number, number] {
 const values = Array.isArray(value) ? value : [value];
 const numeric = values.map(value => definitions.find(([, id]) => value.includes(String(id)))).find(Boolean);
 const named = numeric ?? values.map(value => definitions.find(([, , names]) => names.some(name => normalize(value).includes(normalize(name))))).find(Boolean);
 return named ? [named[0], named[1]] : [0, 0];
}
export function sortArchiveMods<T>(items: readonly T[], key: (item: T) => string | string[]): T[] {
 return [...items].sort((a, b) => { const x = archiveModOrder(key(a)), y = archiveModOrder(key(b)); return x[0] - y[0] || x[1] - y[1]; });
}
