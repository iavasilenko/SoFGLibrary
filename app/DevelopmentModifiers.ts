import type { DetailItem, ArchiveRecordConfig } from "./GodArchiveTypes";
import { config as originalConfig, modifierGroups as sourceModifierGroups } from "./BaseLocationModifiersData";
import { sortArchiveMods } from "./ArchiveModOrder";
const modifierGroups = sortArchiveMods(sourceModifierGroups, group => [group.id, group.name]);

type DevelopmentSpec = { id: string; normal: string; threshold: string; crisis: string; aftermath: string; options?: DetailItem["eventOptions"]; relatedPrefix?: string; modifierChange?: DetailItem["modifierChange"] };

export const developmentSpecs: DevelopmentSpec[] = [
  {
    "id": "hunger-famine",
    "normal": "同一修正在强度低于 100 时显示 Hunger，达到 100 后显示 Famine。Prosperity 修正为 −强度/200；达到 50 后不再提供通常的休息挑战。\n普通模式下，低于 100 时每回合 Unrest +4；100 至不足 200 时每回合 Unrest +16、人口 −2；200 至 300 时每回合 Unrest +4、人口减少 ⌊max(2,人口 × 0.05)⌋。\n人口损失计入 Death，剩余人口最低保留 1；100 至不足 200 时若扣减后人口不大于 0，该次不增加 Death。开启难民且地点允许时，另生成损失人口一半规模的难民，向下取整，包含在本次人口扣减中。",
    "threshold": "超过 300%",
    "crisis": "强度超过 300% 时，人类类聚居地因饥荒毁灭，转为 Ruins；Hunger / Famine 随之移除。",
    "aftermath": "原统治者死亡，毁灭时的剩余人口计入 Death。\n地点失去原国家归属，原 Shadow 保留；仅保留能在废墟中存在的兴趣点与地点修正。"
  },
  {
    "id": "plague",
    "normal": "疾病每点强度使 Prosperity −0.003。普通人类聚居地中，强度不高于 100 时每回合累计 强度/450 人死亡并增加 1 Death；超过 100 时改为 强度/300 人和 2 Death。整数死亡数结算后保留小数余量；<CrossReference name=\"Elven City\" href=\"?page=locations#entry-location-set-elvencity\" meta=\"地点\" text=\"精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。\n随从招募：Elven Warbear。\n\n出现方式\n地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。\n\n可能配置的兴趣点\nElven City、Seat of Holy Order、Temple。\n固定、随机与改建来源见各兴趣点。\n\n可以执行：城市与矮人据点通用。\n\n可以执行：人类体系聚居地通用。\n\n可以执行：人类与精灵聚居地通用。\" image=\"/locations/game/loc_minor_elves.png\" /> 不受到这项人口与 Death 结算。\n每回合增加 ⌊强度/100⌋+1 的 Unrest。\nPlague 同时促成 Plague Immunity，抵消后续增长。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 时先将 Plague 清零，再摧毁当地聚居地，使其成为 Ruins。\n该阈值对 Elven City 同样生效。",
    "aftermath": "毁灭时的剩余人口计入 Death，统治者死亡，地点失去原国家归属。\n原 Shadow 以及能够在废墟中保留的兴趣点与修正继续存在；Plague 本身移除。\n在到达阈值前，普通瘟疫死亡耗尽人口也会导致聚居地毁灭。"
  },
  {
    "id": "madness",
    "normal": "每 1 点强度造成 −0.003 Prosperity。强度超过 100% 后，每回合 Unrest 增加 强度/75。\n统治者的 Sanity 损失按（强度−100）÷0.0075 每回合累积；累积超过 1 时，Sanity 减少 1 并清空累积值。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 时回落到 150%。若当地是人类类聚居地且尚无 Madness Effect，则触发一次 Madness Crisis，随机留下下列六种长期效果之一，各为 16.67%。\n已有 Madness Effect 时只回落强度，保留原有效果。",
    "aftermath": "六种结果分别改变经济、食物、Security、个人 Shadow、Power 或其他地点修正，具体数值见下方卡片。\n这些长期效果没有自动衰减；聚居地毁灭时随当地不保留于废墟的修正一同移除。",
    "relatedPrefix": "madness-effect-"
  },
  {
    "id": "devastation",
    "normal": "战争、战斗或其他暴力造成的地点破坏。每 1 点强度使 Prosperity 减少 0.005；食物产出乘数为 1 − 强度/200，最低为 0.1。",
    "threshold": "达到 300%",
    "crisis": "非教程模式下，强度达到 300% 时摧毁当地尚未成为 Ruins 的聚居地。Devastation 随毁灭移除。",
    "aftermath": "人类类聚居地的统治者死亡，剩余人口计入 Death。\n地点变为 Ruins，失去原国家归属并保留原 Shadow；可在废墟中保留的兴趣点与修正继续存在。"
  },
  {
    "id": "unrest",
    "normal": "居民对统治者的不满会发展为抗议、暴乱和起义。每 1 点强度使 Prosperity 减少 0.005。当地达到 100 时 Security −4；每个达到 100 的相邻地点再使 Security −1，其中存在 Infiltration 的相邻地点各额外 −1。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 时触发 <CrossReference name=\"Unrest Reaches Tipping Point\" href=\"?page=events#entry-event-base-anw-modifierunrestcrisis\" meta=\"事件\" text=\"人类聚居地的 Unrest 达到 300 时发生；强度先回落到 150，并将当地已有 Lingering Resentment 清零。后续按所选选项处理。\" image=\"./events/78935168c5f8fdcb.jpg\" />，先将 Unrest 回落到 150%，并将当地 Lingering Resentment 清零。\n随后选择一个事件选项：",
    "aftermath": "处决路线会触发统治者继任；独立路线还会改变地点和相应部队的归属。\n暴乱路线增加的 Devastation 会进一步降低 Prosperity 与食物产出，累计达到 300% 后还会毁灭聚居地。\nUnrest 回落后仍可再次积累并触发危机。",
    "options": [
      {
        "name": "Heads will roll",
        "text": "民众处死当地统治者，继任者接管聚居地。"
      },
      {
        "name": "Rally the mob to war",
        "condition": "当地不是首都，且 Infiltration 为 100%。",
        "text": "民众处死统治者，当地宣布独立并与原国家爆发内战。"
      },
      {
        "name": "The mob riots",
        "text": "当地 Devastation +100。"
      }
    ]
  },
  {
    "id": "death",
    "normal": "地点积累的死亡力量，可供 Death 魔法与亡灵相关行动使用，地点成为废墟后仍保留。",
    "threshold": "达到 300%",
    "crisis": "正常游戏中，强度首次达到 300% 时触发 <CrossReference name=\"Death Overflows\" href=\"?page=events#entry-event-base-anw-modifierdeathcrisis\" meta=\"事件\" text=\"Death 达到 300、世界生成预运行结束且该修正尚未触发危机时发生。代码已在当地生成两个 Ghast；选项仅确认通知。\" image=\"./events/756d69c694b93eef.jpg\" />，并在当地生成 2 名自主 <CrossReference name=\"Ghast\" href=\"?page=non-player-units#entry-npc-ghast\" meta=\"非玩家单位\" text=\"Might: 6　Lore: 4　Intrigue: 1　Command: 1　HP: 5\n寻找尚未完全 Enshadowed、Ward 很弱且没有 Faith 的人类聚居地，持续进行 Enshadow。\" image=\"./non-player-units/game/evil_ghast.png\" />。\n不消耗 Death，也不将强度重置；同一份 Death 修正只触发一次。",
    "aftermath": "<CrossReference name=\"Ghast\" href=\"?page=non-player-units#entry-npc-ghast\" meta=\"非玩家单位\" text=\"Might: 6　Lore: 4　Intrigue: 1　Command: 1　HP: 5\n寻找尚未完全 Enshadowed、Ward 很弱且没有 Faith 的人类聚居地，持续进行 Enshadow。\" image=\"./non-player-units/game/evil_ghast.png\" /> 会寻找合适的人类聚居地，执行 Enshadow 传播 Shadow。\nDeath 仍可用于亡灵法术，也继续每回合衰减 0.5；地点毁灭后仍然保留。"
  },
  {
    "id": "political-instability",
    "normal": "国家政局的不稳定程度。由各地 Political Agitation 汇入首都，反映贵族脱离现有国家的风险。",
    "threshold": "超过 300%",
    "crisis": "强度超过 300% 时尝试让所属国家爆发内战，然后将本修正清零。\n国家至少需要 2 个主要地点。排除首都后，按 Political Agitation 强度与距首都步数之和从高到低，选出主要地点总数一半的叛乱中心，数量向下取整。",
    "aftermath": "叛乱中心形成独立国家；同家族的叛乱中心归入同一叛军国家。相邻且原属旧国的非主要地点一同转归叛军，以叛军领地为本营的单位改投叛军。\n叛军与旧国立即展开入侵战争，双方对敌对统治者发布处决命令。\n原国家与新叛军国家各地点的 Political Agitation、Political Instability 全部清零。"
  },
  {
    "id": "deep-one-cult",
    "normal": "在聚居地发展的 Deep One 秘密崇拜。Security 修正为 −⌊（50+强度）÷100⌋。强度超过 100 后，每回合增加强度 ÷1000 个百分点的 Shadow；当地 Madness 低于 Cult 强度 −100 时，每回合增加 1.5 Madness。\n令 q＝（1−Infiltration）×（1−Shadow）：每回合 Menace 增加 0.2+0.2×本地 q+0.25×相邻合格地点的 q 总和；Profile 增加 0.1+0.1×本地 q+0.1×相邻合格地点的 q 总和。合格邻地为 Society 所属的人类类聚居地。\n还提供 Conceal Deep Ones、Human Appearance 与 Call of the Deep 等行动。",
    "threshold": "达到 300%",
    "crisis": "在人类类聚居地达到 300% 时，将原人口的 70% 通过 <CrossReference name=\"Deep One Sanctum\" href=\"?page=locations#entry-location-set-deeponesanctum\" meta=\"地点\" text=\"人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。\n\nTemperature\nTemperature 不决定圣所的存续与人口承载。圣所接收的转化人口会转送至 Abyssal City，按 Deep Ones 自身的转送规则结算。\n\nProsperity\n此处不使用 Prosperity，城防上限固定为 50。原聚居地留下的兴趣点仍按各自规则提供功能。\n\n出现方式\nDeep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。\n\n可能配置的兴趣点\nSanctum。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/game/loc_evil_deepOneSanctum.png\" /> 输送到深海城市；原统治者转为自主 Deep One。\n余下人口先降为原来的 30%，向下取整且至少 1，然后随旧聚居地毁灭计入 Death。当地改为黑暗势力的 <CrossReference name=\"Deep One Sanctum\" href=\"?page=locations#entry-location-set-deeponesanctum\" meta=\"地点\" text=\"人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 Sanctum，并接收旧聚居地的兴趣点。\n\nTemperature\nTemperature 不决定圣所的存续与人口承载。圣所接收的转化人口会转送至 Abyssal City，按 Deep Ones 自身的转送规则结算。\n\nProsperity\n此处不使用 Prosperity，城防上限固定为 50。原聚居地留下的兴趣点仍按各自规则提供功能。\n\n出现方式\nDeep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。\n\n可能配置的兴趣点\nSanctum。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/game/loc_evil_deepOneSanctum.png\" />，原教派修正移除。",
    "aftermath": "Sanctum 为完全 Enshadowed 的地点，基础防御为 50；人口输送会扩充相邻 <CrossReference name=\"Abyssal City\" href=\"?page=locations#entry-location-set-deeponeabyssalcity\" meta=\"地点\" text=\"地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。\n\nTemperature\nTemperature 不参与深海城市的人口承载、食物或存续结算。人口由 Deep One Sanctum 转送、城市之间迁移等方式增加；人口超过 50 时按深海城市规则扩散。\n\nProsperity\n此处不使用 Prosperity。城防上限固定为 50；城市与其兴趣点的功能按 Deep One 人口等独立条件运行。\n\n出现方式\nDeep One Sanctum 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。\n\n可能配置的兴趣点\nAbyssal Armory、Abyssal Cathedral、Abyssal City。\n固定、随机与改建来源见各兴趣点。\" image=\"./locations/game/loc_evil_deepOneCity.png\" />，或在合格海洋位置建立新的城市。\n野外兴趣点地点成熟时也能转为 Sanctum，此时输送人口取 10。"
  },
  {
    "id": "human-outpost",
    "normal": "尚未建成的殖民据点，以资金与适居度推动建设。捐助超过当前 Founder 门槛时，捐助者成为 Founder，并为未来聚居地命名；门槛随后更新为据点当前资金总额。",
    "threshold": "超过 300%",
    "crisis": "强度超过 300% 时移除 Human Outpost，建成资助国所属的聚居地，人口为 1。\n主要地点建成 City，其他地点建成小型人类聚居地；若已有旧聚居地，保留其中能在废墟存续且未重复的兴趣点。",
    "aftermath": "当前 Founder 是玩家控制的人物时，建成后各兴趣点全部 Infiltrated；Founder 的 Shadow 大于 1% 或其为邪恶 Agent 时，聚居地继承其 Shadow。资助国是 Dark Empire 时设为完全 Enshadowed。\n地下殖民地移除 Docks、Fort，加入 Underground Fort 并按新地点的防御上限初始化防御。"
  },
  {
    "id": "mod-2879667447-drowned-prophet-cult",
    "normal": "继承 Deep One Cult 的 Security 修正：−⌊（50+强度）÷100⌋。\nMenace 与 Profile 每回合增长为普通 Deep One Cult 对应数值的两倍。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 且 Drowned Prophet 尚未被击败时，当地转归其势力，正在执行的统治者行动取消，统治者死亡。\n首次建立势力时召唤 Drowned Prophet，将首次登陆地点设为首都并添加 Prophet’s Landing；启用宗教系统时为教团，否则为国家。首次成立时向地点原属的人类国家宣战。\n消灭当前在场且以此地为本营的人类常备军，生成 1 支 <CrossReference name=\"Breathless Horde\" href=\"?page=armies#entry-army-breathless-horde\" meta=\"军队\" text=\"移动: 1　伤害倍率: 1\n自主追击敌军和征服目标，采用持续进攻模式。关联 Drowned Prophet 消失时，军队解体。\" image=\"./armies/mod/Wonderblunder_DeepOnes.iconBreathlessHorde.png\" /> 与 3 名 <CrossReference name=\"Breathless\" href=\"?page=non-player-units#entry-npc-breathless\" meta=\"非玩家单位\" text=\"Might: 1　Lore: 3　Intrigue: 3　Command: 1　HP: 5\nUndead，无灵魂，个人 Shadow 为 100%。自主建设和拆除 Abyssal Tower，并将人类人口转移到 Abyssal City。\" image=\"./non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png\" />；随后移除教派修正。",
    "aftermath": "<CrossReference name=\"Breathless Horde\" href=\"?page=armies#entry-army-breathless-horde\" meta=\"军队\" text=\"移动: 1　伤害倍率: 1\n自主追击敌军和征服目标，采用持续进攻模式。关联 Drowned Prophet 消失时，军队解体。\" image=\"./armies/mod/Wonderblunder_DeepOnes.iconBreathlessHorde.png\" /> 的初始 HP 取决于同地遍历到的最后一支人类常备军的最大 HP（记为 H，无则为 0）：教团路线中 H＜50 时为 50，否则为 2H；国家路线中 H≤100 时为 50，否则为 2H。\n<CrossReference name=\"Breathless\" href=\"?page=non-player-units#entry-npc-breathless\" meta=\"非玩家单位\" text=\"Might: 1　Lore: 3　Intrigue: 3　Command: 1　HP: 5\nUndead，无灵魂，个人 Shadow 为 100%。自主建设和拆除 Abyssal Tower，并将人类人口转移到 Abyssal City。\" image=\"./non-player-units/mod/Wonderblunder_DeepOnes.iconBreathless.png\" /> 可建造 Abyssal Tower，扩展 Drowned Prophet 的施法地点。\nDrowned Prophet 被击败后，尚未成熟的教派各自等待 7–11 回合：强度≤150 时回归普通 Deep One Cult，继承强度、Menace 和 Profile；强度更高时，若保留对应教团并启用宗教系统，有 22.22% 概率夺取地点、杀死统治者并增加 ⌊强度/2⌋ Devastation，其余 77.78% 增加 ⌊强度/3⌋ Devastation。无法走教团夺取路线时直接采用后者；两种结果都会移除该教派。"
  },
  {
    "id": "mod-2879667447-inundai-cult",
    "normal": "继承 Deep One Cult 的 Security 修正：−⌊（50+强度）÷100⌋。\n强度超过 100% 后，每回合增加 强度/1000 个百分点的当地 Shadow。\nMenace 与 Profile 每回合增长为普通 Deep One Cult 对应数值的两倍。",
    "threshold": "达到 300%",
    "crisis": "本局首次有人类类聚居地的教派达到 300% 时，统治者死亡，原人口的 70% 用于迁往海上 <CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\nTemperature\nTemperature 不参与宫殿人口和存续结算。宫殿按累计人口每达到 50 的新门槛生成一名 Inundai Emissary；这项生成与温度无关。\n\nProsperity\n宫殿不使用 Prosperity，继承的城防上限为 50；核心进度由人口与 Inundai 的影响机制决定。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" />；剩余人口降至原来的 30%（向下取整，至少 1）后随聚居地毁灭计入 Death，教派移除。\n优先在相邻空海洋建立 <CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\nTemperature\nTemperature 不参与宫殿人口和存续结算。宫殿按累计人口每达到 50 的新门槛生成一名 Inundai Emissary；这项生成与温度无关。\n\nProsperity\n宫殿不使用 Prosperity，继承的城防上限为 50；核心进度由人口与 Inundai 的影响机制决定。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" />，否则寻找最近的空海洋。找到位置后把转移人口加入宫殿，并生成 1 名 <CrossReference name=\"Inundai Emissary\" href=\"?page=non-player-units#entry-npc-inundai-emissary\" meta=\"非玩家单位\" text=\"Might: 0　Lore: 4　Intrigue: 2　Command: 2　HP: 5\n个人 Shadow 为 100%，没有灵魂；使用共享 Hunger 驱动对 Cult、Madness 与人口的索取。若所有 Inundai Presence 均被封锁且 Hunger 大于 0，Emissary 将全部死亡。\" image=\"./non-player-units/mod/Wonderblunder_DeepOnes.iconinundai.png\" />。",
    "aftermath": "此后其他成熟教派在存在 <CrossReference name=\"Inundai Palace\" href=\"?page=locations#entry-location-set-inundai-palace\" meta=\"地点\" text=\"Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。\n\nTemperature\nTemperature 不参与宫殿人口和存续结算。宫殿按累计人口每达到 50 的新门槛生成一名 Inundai Emissary；这项生成与温度无关。\n\nProsperity\n宫殿不使用 Prosperity，继承的城防上限为 50；核心进度由人口与 Inundai 的影响机制决定。\n\n出现方式\nInundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。\n\n可能配置的兴趣点\nInundai Palace（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png\" /> 时，每回合转出 ⌊人口×15%⌋ 人，至少 1 人，生成前往宫殿的 Entranced Crowd；人口耗尽时聚居地毁灭。成熟教派强度上限保持 300%。\nEmissary 会建立 Inundai Presence，开放与 Court 交易、借贷及索取的行动；宫殿后续还能按人口条件补充 Emissary。\n首次召唤需要能找到空海洋，宫殿与 Emissary 才会生成。"
  },
  {
    "id": "mod-2932110698-dormant-werewolves",
    "normal": "积累本地狼人感染。血月或近期感染激活后显示为活跃的狼人群体；活跃结算时每回合 Menace +3、Profile +2。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 时，原人类类聚居地被 <CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\nTemperature\nTemperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。\n\nProsperity\n此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/nature.location_werewolflands.png\" /> 取代，感染修正移除。<CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\nTemperature\nTemperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。\n\nProsperity\n此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/nature.location_werewolflands.png\" /> 保留转换前的人口数，并维持完全 Enshadowed。\n非狼人统治者随旧聚居地毁灭死亡；具有 Lycanthropy 的统治者脱离统治职位并以人物单位继续存在。",
    "aftermath": "<CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\nTemperature\nTemperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。\n\nProsperity\n此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/nature.location_werewolflands.png\" /> 计入被黑暗侵蚀的地点，其相邻地点的狼人群体在活跃结算期间，每个相邻 <CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\nTemperature\nTemperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。\n\nProsperity\n此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"./locations/mod/nature.location_werewolflands.png\" /> 额外提供每回合 +3 强度。\n转换流程还将原聚居地人口计入 Death。",
    "modifierChange": {
      "natural": "每 50 回合的血月将活跃期设为 20 回合；从随后一回合起，活跃结算每回合强度 +6，活跃期 −1。",
      "external": "<CrossReference name=\"Holy: Seed Lycanthropy\" href=\"?page=locations#entry-place-task-2932110698-ch-h-nature-seedlycanthropy\" meta=\"宗教任务\" text=\"建立初始强度 10 的 Werewolf Population，传播 Lycanthropy。\" image=\"/locations/mod/nature.property_werewolfpack.png\" /> 完成时 +10。\nSpread Lycanthropy 完成时 +10。\n仅在活跃结算期间：统治者具有 Lycanthropy 时，每回合 +3；每个相邻 <CrossReference name=\"Werewolf Run\" href=\"?page=locations#entry-location-set-nature-wolfrun\" meta=\"地点\" text=\"狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。\n\n出现方式\nWerewolf Population 吞没合格人类聚居地后形成。\n\n可能配置的兴趣点\nWerewolf Run（兴趣点）。\n固定、随机与改建来源见各兴趣点。\n\n自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。\" image=\"/locations/mod/nature.location_werewolflands.png\" /> 每回合 +3。\nPurge Werewolves 完成时 −100，并把群体的 Menace、Profile 减半。"
    }
  },
  {
    "id": "mod-3003549759-great-construction",
    "normal": "积累 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\nTemperature\nTemperature 通过 Habitability 决定 Orc 能否定居及继续占据此地。默认需要至少 5% 适居度，门槛随 Orc Habitability 设置调整；低于门槛时部落放弃该地点，并清除无法保留的营地与兴趣点。地下基础适居度为 50%，地下扩张另需部落具备进入地下的能力。\n\nProsperity\nOrc Camp 不使用 Prosperity。城防上限由营地基础值与 Orcish Defences 决定；军队规模由本地及相邻地点的 Orcish Industry 决定。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"./locations/game/loc_evil_orc.png\" /> 的专业化工程进度。每点 Gold 对应的进度为 300÷当前总造价；总造价按基本费用及相邻专业化据点重算。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 且工程条件仍有效时，按发起的工程将 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\nTemperature\nTemperature 通过 Habitability 决定 Orc 能否定居及继续占据此地。默认需要至少 5% 适居度，门槛随 Orc Habitability 设置调整；低于门槛时部落放弃该地点，并清除无法保留的营地与兴趣点。地下基础适居度为 50%，地下扩张另需部落具备进入地下的能力。\n\nProsperity\nOrc Camp 不使用 Prosperity。城防上限由营地基础值与 Orcish Defences 决定；军队规模由本地及相邻地点的 Orcish Industry 决定。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"./locations/game/loc_evil_orc.png\" /> 专门化为 Fortress、Mage Camp、Menagerie、Shipyard 或 Mines，并移除 Great Construction。",
    "aftermath": "Menagerie 工程消耗当地 Caged Manticore；Shipyard 工程消耗用于建造的、未加固的 Shipwreck。\nMines 使所属 Orc 势力获得地下通行能力。\nFortress 与 Mage Camp 可补充 Orc Army，其他专门化据点开放各自的招募与行动，详见 <CrossReference name=\"Orc Camp\" href=\"?page=locations#entry-location-set-orccamp\" meta=\"地点\" text=\"Orc 营地用专精区分普通 Camp、Fortress、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。\n普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。Fortress、Mage Camp 能重建常备军，Mines 允许部落进入地下。\n随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。\n\nTemperature\nTemperature 通过 Habitability 决定 Orc 能否定居及继续占据此地。默认需要至少 5% 适居度，门槛随 Orc Habitability 设置调整；低于门槛时部落放弃该地点，并清除无法保留的营地与兴趣点。地下基础适居度为 50%，地下扩张另需部落具备进入地下的能力。\n\nProsperity\nOrc Camp 不使用 Prosperity。城防上限由营地基础值与 Orcish Defences 决定；军队规模由本地及相邻地点的 Orcish Industry 决定。\n\n出现方式\n地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。\" image=\"./locations/game/loc_evil_orc.png\" />。\n若据点易主、消失、已被专门化或专门化前提丢失，工程会提前取消；取消 Menagerie 工程时，仍在当地的 Caged Manticore 会转为 Wandering Manticore。"
  },
  {
    "id": "mod-3700090862-surveyor-outpost",
    "normal": "Surveyor 设立的虚假殖民工程。强度达到 100% 后可通过 Collect Funds 取走资金，每次至多 100 Gold；取出多少 Gold 就增加多少强度。",
    "threshold": "达到 300%",
    "crisis": "强度达到 300% 时骗局败露，Surveyor Outpost 移除。剩余资金存入当地 Item Cache，并生成 30 HP 的 <CrossReference name=\"Dispossessed Colonists\" href=\"?page=armies#entry-army-dispossessed-colonists\" meta=\"军队\" text=\"移动: 1　伤害倍率: 0.3\n先返回创建时记录的本国首都，之后寻找本国聚居地。停留在本国 City 时，每回合 Unrest +3、Famine +3，自身 HP −2；停留在本国其他聚居地时，Banditry +3，HP −4。耗尽后解散。\" image=\"./armies/game/unit_refugees.png\" />。\nSurveyor 存活时获得 16 Menace、20 Profile；Profit Sharing 生效时分摊给玩家 Agent，并结束当前骗局与赞助关系。",
    "aftermath": "<CrossReference name=\"Dispossessed Colonists\" href=\"?page=armies#entry-army-dispossessed-colonists\" meta=\"军队\" text=\"移动: 1　伤害倍率: 0.3\n先返回创建时记录的本国首都，之后寻找本国聚居地。停留在本国 City 时，每回合 Unrest +3、Famine +3，自身 HP −2；停留在本国其他聚居地时，Banditry +3，HP −4。耗尽后解散。\" image=\"./armies/game/unit_refugees.png\" /> 先返回原资助国首都，再在该国内活动：停留在 City 时每回合 Unrest +3、Hunger / Famine +3、自身 HP −2；停留在其他聚居地时 Banditry +3、自身 HP −4，耗尽后解散。\n赞助人和 Founder 通常至少变为不喜欢 Surveyor（好感 −1）。若两者为同一人，已经不喜欢时降为仇恨（−2）；两者不同且 Surveyor 有 Promise of Success 时，赞助人直接仇恨（−2）。\n据点或赞助关系提前失效也会触发同一崩溃流程。"
  }
];


const developmentIntroductions: Record<string, string> = {
  "hunger-famine": "人口所需食物超过供应形成的饥饿状态；强度低于 100 时称为 Hunger，达到 100 后称为 Famine。",
  "plague": "在聚居地传播的疾病，会侵蚀当地人口与生产。",
  "madness": "当地社会的疯狂程度，会侵蚀秩序与统治者的理智。",
  "devastation": "战争、战斗及其他暴力在地点留下的破坏程度。",
  "unrest": "居民对统治者的不满，持续积累可能演变为暴乱和起义。",
  "death": "积累在当地的死亡力量，也是 Death 魔法与亡灵行动使用的资源。",
  "political-instability": "集中显示国家政局的不稳定程度，代表贵族脱离现有国家的风险。",
  "deep-one-cult": "在人类聚居地秘密发展的 Deep One 崇拜。",
  "human-outpost": "人类扩张或重建过程中、尚未建成聚居地的殖民据点。",
  "mod-2879667447-drowned-prophet-cult": "崇拜 Drowned Prophet 的 Deep One 教派分支。",
  "mod-2879667447-inundai-cult": "投向 Inundai Court 的 Deep One 教派分支。",
  "mod-2932110698-dormant-werewolves": "当地狼人感染与群体活动的规模，在休眠期和活跃期之间变化。",
  "mod-3003549759-great-construction": "Orc Camp 建造专业化设施的工程进度。",
  "mod-3700090862-surveyor-outpost": "The Surveyor 组织的虚假殖民工程，以募集资金推进。"
};


const originalEntries = originalConfig.sections.flatMap(section => section.items);
export const developmentArticles = sortArchiveMods(developmentSpecs.map(spec => {
  const entry = originalEntries.find(item => item.id === spec.id)!;
  const source = modifierGroups.find(group => group.sections.some(section => section.items.some(item => item.id === spec.id)))!;
  const related = spec.relatedPrefix ? originalEntries.filter(item => item.id?.startsWith(spec.relatedPrefix!)) : [];
  const cards: DetailItem[] = [
    {
      id: entry.id, name: "介绍和来源", image: entry.image, baseGame: entry.baseGame,
      text: developmentIntroductions[spec.id], modifierSource: entry.modifierSource,
      modifierLocations: entry.modifierLocations, initialValue: entry.initialValue,
    },
    { id: spec.id + "-effects", name: "效果", text: spec.normal, baseGame: entry.baseGame },
    {
      id: spec.id + "-changes", name: "变化方式", text: "", baseGame: entry.baseGame,
      modifierChange: spec.modifierChange ?? entry.modifierChange,
    },
    {
      id: spec.id + "-threshold", name: "300%后效果", meta: spec.threshold,
      text: [spec.crisis, spec.aftermath].filter(Boolean).join("\n\n"),
      baseGame: entry.baseGame, eventOptions: spec.options,
    },
  ];
  return { id: "development-" + spec.id, entry, source, cards, related };
}), article => [article.source.id, article.source.name]);

// Preserve links to the former aftermath card.
export const developmentAliases: Readonly<Record<string, string>> = Object.fromEntries(
  developmentArticles.map(article => ["entry-" + article.entry.id + "-aftermath", "entry-" + article.entry.id + "-threshold"]),
);

const extractedIds = new Set(developmentArticles.flatMap(article => [article.entry.id, ...article.related.map(item => item.id)]));
export const remainingModifierGroups = modifierGroups.map(group => ({
  ...group,
  sections: group.sections.map(section => ({ ...section, items: section.items.filter(item => !extractedIds.has(item.id)) })).filter(section => section.items.length),
})).filter(group => group.sections.length);

// Preserve original anchors and full preview descriptions; visible articles split these into cards.
export const config: ArchiveRecordConfig = {
  ...originalConfig,
  sections: originalConfig.sections.map(section => ({
    ...section,
    items: section.items.map(item => {
      const spec = developmentSpecs.find(spec => spec.id === item.id);
      return spec ? { ...item, ...(spec.modifierChange ? { modifierChange: spec.modifierChange } : {}), text: [spec.normal, spec.threshold + "\n" + spec.crisis, ...(spec.options?.map(option => option.name + (option.condition ? "（" + option.condition + "）" : "") + "：" + option.text) ?? []), "连带影响\n" + spec.aftermath].join("\n\n") } : item;
    }),
  })),
};
export const developmentCardIds = developmentArticles.flatMap(article => [...article.cards, ...article.related].map(item => "entry-" + item.id));
