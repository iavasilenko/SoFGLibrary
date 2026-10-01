import { concisePercentageUnits } from "./ArchiveTextPresentation";

// PopupEvent.bindReferences: person = A, _person2 = B. R0/R1/R2 refer to
// separately gendered narrative characters, not to either event participant.
const names: Record<string, string> = {
  PERSON_NAME: "人物 A", PERSON2_NAME: "人物 B", OTHER_NAME: "人物 B", RELATION_AND_OTHER_NAME: "人物 B",
  LOCATION_NAME: "{地点名称}", HEX_NAME: "{地点名称}", CITY_NAME: "{城市名称}", RULER_NAME: "{统治者名称}",
  HOLY_ORDER: "{教团名称}", HOLY_ORDER_NAME: "{教团名称}", SOCIETY_NAME: "{势力名称}", NATION_NAME: "{国家名称}",
  UNIT_NAME: "{单位名称}", ENTHRALLED_NAME: "{被控制者名称}", GOD_NAME: "{神祇名称}", RELATION: "{人物关系}",
  ATTACKER_NAME: "{进攻者名称}", DEFENDER_NAME: "{防守者名称}", VICTOR_NAME: "{胜者名称}", DEFEATED_NAME: "{败者名称}", HP: "{HP}",
};

export function replaceEventPlaceholders(text: string) {
  return concisePercentageUnits(text.replace(/%([A-Za-z][A-Za-z\d_]*)/g, (marker, token: string) => {
    const name = names[token.toUpperCase()]; if (name) return name;
    const pronoun = /^(he|she|him|her|his|hers)(2|R\d+)?(self)?$/i.exec(token);
    if (!pronoun) return marker;
    const actor = pronoun[2]?.startsWith("R") ? "{剧情人物 " + pronoun[2].slice(1) + "}"
      : "人物 " + (pronoun[2] === "2" ? "B" : "A");
    return actor + (pronoun[3] ? " 自己" : /^(his|hers)$/i.test(pronoun[1]) ? " 的" : "");
  }).replaceAll("事件链", "系列事件")
    .replace(/此条件存在无法参与判定的后段，按当前解析器已读取部分展示。?/g, "")
    .replace(/(?:^|\n)(?:并且 )?任务事件计时 = 任务事件计时阈值。?(?=\n|$)/g, ""));
}
