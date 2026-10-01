import type { EventChain } from "./GodArchiveTypes";
import type { EventRecord } from "./EventTypes";

// The shared keys are both read by these definitions and written by their
// choices. A common eligibility filter alone is not enough to form a series.
export const relatedEventSeries: (EventChain & { flag?: string; source?: string; eventIds?: string[] })[] = [
 { id: "corrupt-guards", name: "Corrupt Guards", flag: "MAEREDUX_CORRUPT_GUARDS", mode: "related", description: "Agent 遭遇贪财的守卫，可以贿赂、躲避或利用其腐败。三个版本按回合开放，重叠区间共同参与抽选；它们共用 66 回合的触发间隔。" },
 { id: "city-stroll", name: "A stroll through", flag: "MAEREDUX_CHAOS_IN_THE_AIR", mode: "related", description: "Agent 在受贿守卫、饥荒、疯狂、疾病或骚乱中的城市行动，借混乱降低暴露或推进任务。五种散步遭遇与 A dinner in a restless city 共用城市混乱计时；地点状况和所选选项共同影响下一次可遇到的节点。" },
 { id: "encircled", name: "Encircled", flag: "MAEREDUX_ENCIRCLED", mode: "related", description: "Agent 的仪式引来潜伏在黑暗中的异物，玩家可以等待、付出 HP 驱散它们或加深 Shadow。三个版本按回合开放，共用触发间隔；后期节点的计时写在人物上，前两节点写在本局。" },
 { id: "borrowed-talent", name: "Borrowed Talent", flag: "MAEREDUX_BORROWED_TALENT", mode: "related", description: "英雄向 Agent 借助指挥、谋略、知识或力量，双方可以交换协助或借机操纵对方。四种求助共用 76 回合的触发间隔，具体可遇节点仍受双方身份与 Menace 等条件限制。" },
 { id: "arcane-guardians", name: "Animated Armour / Stone Golems", flag: "MAEREDUX_AARMOURS", mode: "related", description: "执行 Lore 任务时，Agent 可能遭遇自动盔甲或石制守卫。两种遭遇共用计时，分别要求距上次至少 56 或 51 回合；回合 151–199 时两个版本的时间范围重叠。" },
 { id: "rare-gentleness", name: "A rare gentleness / A strange gentleness", flag: "MAEREDUX_HUMANIZING", mode: "related", description: "Agent 在移动途中对受威胁的弱者生出保护念头。普通与特殊 Agent 分别进入不同叙事，两个节点共用一次性标记，遇到任一节点后，本局不再出现另一节点。" },
 { id: "sting", name: "The Sting", flag: "MAEREDUX_STING", mode: "related", description: "守卫突袭秘密据点，Agent 面临同伙逃走、泄密或设局后的指控。三个版本按回合开放，并共用遇袭计时；选项会改变再次遭遇的等待时间和计时作用范围。" },
 { id: "suspicious-guards", name: "Suspicious Guards", flag: "MAEREDUX_SUS_GUARDS", mode: "related", description: "守卫对 Agent 的活动从轻率盘问逐渐转为怀疑。Foolish、Uncertain 与 Suspicious Guards 按回合开放，共用 51 回合的触发间隔，开放范围重叠时共同参与抽选。" },
 { id: "keep-moving", name: "Keep on moving / A dark path", flag: "MAEREDUX_AGENT_KEEP_MOVING", mode: "related", description: "Agent 移动进入人类聚居地，按身份与当地 Shadow 遭遇村民阻拦或阴暗道路。两个节点共用人物行踪记录，但当地条件、种族条件和地点标记不同。" },
 { id: "still-hope", name: "A few things left to learn / A few things left to teach", flag: "MAEREDUX_P2P_STILL_HOPE", mode: "related", description: "两位英雄在同一地点相互传授经验，试图拉回受 Shadow 影响的一方。学习与传授版本按双方年龄关系区分，共用 136 回合的触发间隔。" },
 { id: "venality", name: "Venality", eventIds: ["maeRedux.midchP2P_venal_hero", "maeRedux.midchP2P_venal_hero_as_agreed_upon"], mode: "related", description: "Agent 用金币和利益与英雄建立协助约定，之后由双方的约定标记触发兑现事件。兑现后清除这次约定的标记；初始事件经过 161 回合的间隔可以重新建立约定。" },
 { id: "broken-texts", name: "Contradictory Texts / Missing Pages", eventIds: ["maeRedux.mid_contradictorytexts", "maeRedux.mid_404pagesnotfound"], mode: "related", description: "Agent 的研究受到矛盾文献或缺页阻碍。两个节点各有触发间隔；在 Contradictory Texts 中改用其他教义的解释，会更新 Missing Pages 的等待时间。" },
 { id: "stumbling", name: "Stumbling into intrigue / Stumbling into lore", eventIds: ["maeRedux.midch_stumbling_into_intrigue", "maeRedux.midch_stumbling_into_lore"], mode: "related", description: "Agent 执行 Lay Low 时，可能卷入当地阴谋或发现魔法知识。两个节点分别使用人物计时；探索知识的特殊结果会延长下一次卷入阴谋的间隔。" },
 { id: "travel-assistance", name: "Fresh horses / Sailing winds", source: "base", eventIds: ["fog.move_fresh_horses", "fog.move_sailing_winds"], mode: "related", description: "Agent 在陆地购买马匹或马车，在海上遇到有利风向与船员，获得旅行上的帮助。陆地与海洋分别进入对应节点；海上选项会更新人物身上的 Fresh horses 计时，而 Sailing winds 自身仍读取独立的风向计时。" },
];

export function relatedSeriesFor(record: EventRecord): EventChain | undefined {
 if (record.chain) return undefined;
 const keys = new Set(record.condition.match(/\$[\w]+/g) ?? []);
 const found = relatedEventSeries.find(series => record.source === (series.source ?? "3261852980") &&
  (series.flag ? keys.has("$" + series.flag) : series.eventIds?.includes(record.eventId)));
 if (!found) return undefined;
 return { id: found.id, name: found.name, description: found.description, mode: found.mode };
}

export function compactSeriesTiming(text: string) {
 return text.replace(/（回合 大于 （「([^」]+)」剧情记录 \+ \d+）；或者 「\1」剧情记录 = 0）/g,
  "本系列尚未触发，或本节点的触发间隔已结束")
  .replace(/回合 大于 （「[^」]+」剧情记录 \+ \d+）/g, "本节点的触发间隔已结束");
}
