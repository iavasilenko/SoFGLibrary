import type { DetailItem } from "./GodArchiveTypes";

// Current v2.0 DLL registers these names as Effect setters, but the three
// unchanged event JSON files put them in environment. EventContext writes
// environment directly; the v1.0 deferred environment consumer was removed.
const deepOneNotes: Readonly<Record<string, string>> = {
  "Wonderblunder_DeepOnes.deepOnePlusCult1": "配置中的 Cult Profile +15 与 Deep Ones 物品奖励未执行；角色 Menace 与临时属性效果正常结算。",
  "Wonderblunder_DeepOnes.deepOnePlusCult2": "配置中的 Cult 强度 +15 与 Deep Ones 物品奖励未执行；普通物品、Arcane Secret 与临时属性奖励正常结算。",
  "Wonderblunder_DeepOnes.deepOnePlusCult3": "配置中的 Cult Menace、Profile 与强度变化未执行；HP 和临时属性效果正常结算。",
};

export function verifiedEventEffects(entry: DetailItem, eventId: string): DetailItem {
  const note = deepOneNotes[eventId];
  if (!note) return entry;
  return { ...entry, text: entry.text + "\n\n奖励结算\n" + note,
    eventOptions: entry.eventOptions?.map(option => ({ ...option,
      text: (() => {
        const outcomes = new Map<string, number>();
        for (const paragraph of option.text.split("\n\n")) {
          const probability = /^(\d+(?:\.\d+)?%：)/.exec(paragraph)?.[1] ?? "";
          const effects = paragraph.slice(probability.length).split("\n")
            .filter(line => !/实际生效未确认/.test(line)).join("\n").trim();
          const text = effects || "无效果。";
          outcomes.set(text, (outcomes.get(text) ?? 0) + (probability ? Number(probability.slice(0, -2)) : 100));
        }
        return [...outcomes].map(([text, probability]) => (probability === 100 ? "" : probability + "%：") + text).join("\n\n");
      })(),
    })),
  };
}
