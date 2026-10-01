// Verified against DLC EventManager / Task_PerformChallenge and source JSON.
export const unavailableEventIds: Readonly<Record<string, string>> = {
  "anw.moveRuins": "MOVE 概率为 0，未找到代码直触发。",
  "anw.vengeance": "INERT 定义无正常调用入口。",
  "Wonderblunder_DeepOnes.fisherman_debug": "PERSON 概率为 0，身份标记无正常赋值或直触发。",
  "maeRedux.midch_fort_suspicious": "MIDCHALLENGE 入口将计时清零后，事件要求计时等于 4。",
  "maeRedux.midchP2P_noble_friendship_mourn": "已发生回合被要求大于当前回合加 40，正常写入后不能成立。",
  "maeRedux.midchP2P_noble_friendship_betray": "已发生回合被要求大于当前回合加 20，正常写入后不能成立。",
};

export const unavailableEntryIds = new Set([
  "event-base-anw-moveruins", "event-base-anw-vengeance",
  "event-2879667447-wonderblunder-deepones-fisherman-debug",
  "event-3261852980-maeredux-midch-fort-suspicious",
  "event-3261852980-maeredux-midchp2p-noble-friendship-mourn",
  "event-3261852980-maeredux-midchp2p-noble-friendship-betray",
]);

// Only this Agent's association is removed; other eligible Agents retain the event.
export const unavailableAgentEntries: Readonly<Record<string, readonly string[]>> = {
  baroness: ["event-3261852980-maeredux-midchp2p-assurance", "event-3261852980-maeredux-midch-burning-tavern"],
  survivor: ["event-3261852980-maeredux-midch-burning-tavern", "event-3261852980-maeredux-midch-graveyardshift", "event-3261852980-maeredux-midch-patresvamirt1"],
  harvester: ["event-3261852980-maeredux-midch-hunting-manticore", "event-3261852980-maeredux-midch-hunting-ogre", "event-3261852980-maeredux-midch-patresvamirt1", "event-3261852980-maeredux-midch-village-field-witness", "event-3261852980-maeredux-midch-village-field-witness-snow"],
  whisperer: ["event-3261852980-maeredux-midchp2p-barteringforaccess1", "event-3261852980-maeredux-midch-banker-witness", "event-3261852980-maeredux-midch-rowdytavern"],
};
