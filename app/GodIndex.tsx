"use client";

import ArchiveIcon from "./ArchiveIcon";
import { Shield, ArrowUpRight, BookOpen, CircleDot, Package, Users, Landmark, Contact, Swords, ScrollText, MapPinned } from "lucide-react";
import type { ArchivePageChoice } from "./GodArchiveTypes";
import { sortArchiveMods } from "./ArchiveModOrder";

type GodChoice = ArchivePageChoice;
const gods = [
  { id: "she-who-will-feast", name: "She Who Will Feast", type: "游戏本体", image: "./she-who-will-feast/portrait.png", focus: "渗透、Shadow 扩散与苏醒军队" },
  { id: "iastur", name: "Iastur, The Laughing King", type: "游戏本体", image: "./iastur/portrait.png", focus: "Laughing Tome、Madness 与性格操纵" },
  { id: "vinerva", name: "Vinerva, the Dark Goddess", type: "游戏本体", image: "./vinerva/portrait.png", focus: "森林之心、诱惑馈赠与自然军势" },
  { id: "ophanim", name: "Ophanim, The Divine Beyond", type: "游戏本体", image: "./ophanim/portrait.png", focus: "Faith、Doubt 与神权国家" },
  { id: "mammon", name: "Mammon, Wealth of Man, Spirit of the Mountain", type: "游戏本体", image: "./mammon/portrait.png", focus: "贸易网络、Greed/Decadence 与吞噬" },
  { id: "broken-maker", name: "The Broken Maker", type: "游戏本体", image: "./broken-maker/portrait.png", focus: "家族诅咒、世代轮回与借用神力" },
  { id: "evil-beneath", name: "The Evil Beneath", type: "游戏本体", image: "./evil-beneath/portrait.png", focus: "地下触手、吞食、地下意识与地表决战" },
  { id: "cordyceps", name: "Cordyceps Hive Mind", type: "游戏本体", image: "./cordyceps/god_portrait.png", focus: "感染、Hive、Larval Mass 与虫群军队" },
  { id: "deaths-games", name: "Death's Games", type: "游戏本体", image: "./deaths-games/godCardsTMP.png", focus: "抽卡、概率与一次性干预" },
  { id: "ixthus", name: "Ixthus, King of Cups", type: "模组神祇", image: "./ixthus/kingOfCups_Portrait.png", focus: "Holy Grail、永生、英雄与统治者的死亡" },
  { id: "kishi", name: "Kishi, the Jagged Tide", type: "模组神祇", image: "./kishi/god_portrait.png", focus: "Bloodstain、Soul-Scar 与恶魔浪潮" },
  { id: "living-void", name: "The Living Void", type: "模组神祇", image: "./living-void/god_portrait.png", focus: "虚空侵蚀、真空异常与世界坍缩" },
  { id: "chandalor", name: "Chandalor, the Cursed Bloom", type: "模组神祇", image: "./chandalor/god_portrait.png", focus: "婚姻网络、家族诅咒与精神干扰" },
  {"id":"escamrak","name":"Escamrak","type":"模组神祇","image":"./escamrak/god_game.png","focus":"Fleshcrafting、活体聚居地与神体重构"},
  {"id":"adolia","name":"Adolia, the Faceless Memory","type":"模组神祇","image":"./adolia/facelessmemory_portrait.png","focus":"记忆感染、Pareidolia 与化身扩散"},
  { id: "kalastrophe", name: "Kalastrophe, the Shifting Calamity", type: "模组神祇", image: "./kalastrophe/God_Ingame.png", focus: "神力定制、英雄腐化与灾厄组合" },
  {"id":"thing-from-beyond","name":"The Thing From Beyond, Interdimensional Parasite","type":"模组神祇","image":"./out-of-gods/god_portrait.png","focus":"现实裂隙、魔法仪式与残存邪恶势力"},
  {"id":"paradoxis","name":"Paradoxis, Closer of Loops","type":"模组神祇","image":"./out-of-gods/god_portrait2.png","focus":"时间衰变、时间干预与闭合时间环"},
  {"id":"shadow-counsel","name":"Shadow Counsel, Fickle Muse, Dark Advisor","type":"模组神祇","image":"./out-of-gods/god_portrait3.png","focus":"Pawn 操控、战争维持与统治者干预"},
  {"id":"shadow-counsel-war","name":"Shadow Counsel, WAR-MODE","type":"模组神祇","image":"./out-of-gods/god_portrait3.png","focus":"性格操纵、帝国战争与军队支援"},
  {"id":"lotus-egregore","name":"Lotus Egregore, Collective blissful apathy","type":"模组神祇","image":"./out-of-gods/god_portrait4.png","focus":"Lotus 种植、供货网络与金库经营"},
  { id: "aberrant-metal", name: "Aberrant Metal", type: "模组神祇", image: "./aberrant-metal/factory_portrait.png", focus: "生产核心、工业污染与活体工厂" },
  { id: "alai", name: "Alai, the Strings That Bind", type: "模组神祇", image: "./alai/god_portrait.png", focus: "家族吞噬、傀儡继承与灵魂织网" },
  { id: "mekhane", name: "MEKHANE, the Broken God", type: "模组神祇", image: "./mekhane/mekhane_portrait.png", focus: "组件制造、三支教派与神体重组" },
  { id: "villikos", name: "Villikos, the First Claimant", type: "模组神祇", image: "./villikos/villikos_portrait.png", focus: "Claim 扩散、Imperial Blood 与帝国征服" },
] as const;

export default function GodIndex() {
  const baseGods = gods.filter((god) => god.type === "游戏本体");
  const modGods = sortArchiveMods(gods.filter((god) => god.type === "模组神祇"), god => [god.id, god.name]);
  const renderCard = (god: (typeof gods)[number]) => {
    const index = gods.findIndex((item) => item.id === god.id);
return <a className="god-index-card" key={god.id} href={"?god=" + god.id}><span className="god-index-number">{String(index + 1).padStart(2, "0")}</span><span className="god-index-image"><ArchiveIcon src={god.image} fill size={132} sizes="(max-width: 760px) 84px, 132px" /></span><span className="god-index-copy"><small>{god.type}</small><b>{god.name}</b><span>{god.focus}</span></span><ArrowUpRight className="god-index-arrow" size={20} /></a>;
  };
  return <main className="archive-index"><header className="index-header"><div className="index-brand"><CircleDot size={18} /><span>Shadows of Forbidden Gods</span></div><p>神祇资料库</p><h1>选择神祇</h1><div className="index-intro"><BookOpen size={18} /><span>基于游戏本体程序集、模组 DLL、事件定义与原始美术素材整理。每个页面均可查看封印、神力、Agent、单位、地点修正、任务与相关机制。</span></div></header><section className="god-index-group" aria-labelledby="base-gods-heading"><div className="index-group-heading"><p>游戏本体</p><h2 id="base-gods-heading">游戏本体</h2><span>9 位神祇</span></div><div className="god-index-grid">{baseGods.map(renderCard)}</div></section><section className="god-index-group" aria-labelledby="mod-gods-heading"><div className="index-group-heading"><p>Mod</p><h2 id="mod-gods-heading">Mod 神祇</h2><span>{modGods.length} 位神祇</span></div><div className="god-index-grid">{modGods.map(renderCard)}</div></section><section className="god-index-group" aria-labelledby="other-information-heading"><div className="index-group-heading"><h2 id="other-information-heading">其他信息</h2></div><div className="other-information-grid"><a className="modifier-library-link" href="?page=locations"><MapPinned size={22} /><span>地点</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=points-of-interest"><Landmark size={22} /><span>兴趣点</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=base-location-modifiers"><BookOpen size={22} /><span>地点修正</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=base-items"><Package size={22} /><span>物品</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=minions"><Shield size={22} /><span>随从</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=character-modifiers"><CircleDot size={22} /><span>角色特质</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=agents"><Users size={22} /><span>Agent</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=non-player-units"><Contact size={22} /><span>非玩家单位</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=armies"><Swords size={22} /><span>军队</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=magic"><BookOpen size={22} /><span>魔法</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=religions"><Landmark size={22} /><span>教义</span><ArrowUpRight size={20} /></a><a className="modifier-library-link" href="?page=events"><ScrollText size={22} /><span>事件</span><ArrowUpRight size={20} /></a></div></section><footer className="index-footer">当前共收录 {gods.length} 位神祇</footer></main>;
}
