"use client";

import { GodArchive } from "./BaseGodArchive";
import { prepareGodConfig, type ArchiveGodChoice, type GodConfig } from "./GodArchiveTypes";

const config: GodConfig = {
  "id": "iastur",
  "name": "Iastur, The Laughing King",
  "number": "02",
  "theme": "iastur-theme",
  "assetDir": "iastur",
  "background": "background.png",
  "portrait": "portrait.png",
  "flavour": "",
  "caption": "Laughing Tome、Madness 与性格操纵",
  "maxTurns": "500 回合",
  "awaken": "第 360 回合",
  "panic": "75%",
  "finalAgents": "6",
  "progressLabel": "回合",
  "unlockMethod": "常规回合解锁",
  "powerCapacity": "神力上限＝已破封印数 + 1。",
  "powerRecovery": "每回合恢复＝0.035 × 神力上限 × Tome 倍率。\n未封印书由非玩家人物或统治者持有，或活跃 Laughing King's Tome 位于人类 Society 的人类聚居地时，倍率为 1.5；其余状态为 0.5。表内两个恢复值分别对应这两档的低值与高值。",
  "core": [
    "Supplicant 开局携带 <CrossReference name=\"Laughing Tome\" />；用 <CrossReference name=\"Place Tome\" /> 将其放到人类聚居地，或交给非玩家人物阅读，让书在外发挥作用并提高神力恢复。",
    "在书所在地完成 <CrossReference name=\"Drive Word of Mouth\" />，或施放 <CrossReference name=\"Stories Told In Dreams\" />，提高 <CrossReference name=\"Madness\" />。",
    "用 <CrossReference name=\"The Devil Finds Work...\" /> 和 <CrossReference name=\"...For Idle Hands\" /> 调整人物喜恶；目标携书时还能用 <CrossReference name=\"Fascinate\" /> 将普通倾向强化为极端倾向。",
    "英雄开始 <CrossReference name=\"Bind Tome\" /> 后，可用 <CrossReference name=\"Incoherent Thoughts\" /> 中断；第 7 封印后也可用 <CrossReference name=\"Hysterical Tome\" /> 移走真本并留下副本。封印书需夺回并 <CrossReference name=\"Unbind Tome\" />；休眠书可 <CrossReference name=\"Collect Tome\" /> 或 <CrossReference name=\"Summon Tome\" />。",
    "第 5 封印的 <CrossReference name=\"Everyone Shall Play\" /> 扩大书的影响；把神力用于部署新污染点，不必让全部 Agent 围着一本书行动。",
    "第 360 回合苏醒后，携未封印书在 Elder Tomb 完成 <CrossReference name=\"Waves of Madness\" />，反复使更多人物发疯；用 <CrossReference name=\"Warp Reality\" /> 防护引导者。"
  ],
  "overviewExtra": {
    "title": "Madness 与 Tome 状态",
    "text": "<CrossReference name=\"Madness\" /> 由地点上的 Tome、<CrossReference name=\"Maddening Tongues\" /> 和 <CrossReference name=\"Everyone Shall Play\" /> 等机制累积；超过 100 后会增加当地 Unrest，并逐步侵蚀统治者的 Sanity。人类聚居地达到 300 且没有长期疯狂效果时，触发一次 <CrossReference name=\"Madness Crisis\" /> 并留下长期效果；强度回落到 150。\n\nTome 处于 Bound、Asleep、Unbound 或作为地点修正影响凡人时，会改变神力恢复倍率。只有未封印书由非玩家人物持有，或活跃真本位于人类 Society 的人类聚居地时，倍率为 1.5；其余情况为 0.5。",
    "playStyle": "围绕一本会流转、被封印的 Tome 组织行动，依靠 Madness 与人物喜恶间接改变世界。需要持续关注书的位置与状态，平衡扩散、神力恢复和防守。"
  },
  "specialVictory": "无",
  "specialFailure": "无",
  "seals": [
    {
      "seal": 0,
      "progress": 0,
      "agents": 2,
      "reward": [
        "Let's see what this game brings"
      ],
      "powerRecovery": "1/0.0175–0.0525"
    },
    {
      "seal": 1,
      "progress": 12,
      "agents": 2,
      "reward": [],
      "powerRecovery": "2/0.035–0.105"
    },
    {
      "seal": 2,
      "progress": 24,
      "agents": 3,
      "reward": [
        "The Devil Finds Work..."
      ],
      "powerRecovery": "3/0.0525–0.1575"
    },
    {
      "seal": 3,
      "progress": 44,
      "agents": 3,
      "reward": [
        "...For Idle Hands",
        "It's All Just a Game"
      ],
      "powerRecovery": "4/0.07–0.21"
    },
    {
      "seal": 4,
      "progress": 72,
      "agents": 4,
      "reward": [
        "Stories Told In Dreams",
        "Fascinate"
      ],
      "powerRecovery": "5/0.0875–0.2625"
    },
    {
      "seal": 5,
      "progress": 108,
      "agents": 4,
      "reward": [
        "Everyone Shall Play"
      ],
      "powerRecovery": "6/0.105–0.315"
    },
    {
      "seal": 6,
      "progress": 152,
      "agents": 4,
      "reward": [
        "Incoherent Thoughts"
      ],
      "powerRecovery": "7/0.1225–0.3675"
    },
    {
      "seal": 7,
      "progress": 204,
      "agents": 5,
      "reward": [
        "Hysterical Tome"
      ],
      "powerRecovery": "8/0.14–0.42"
    },
    {
      "seal": 8,
      "progress": 264,
      "agents": 5,
      "reward": [],
      "powerRecovery": "9/0.1575–0.4725"
    },
    {
      "seal": 9,
      "progress": 360,
      "agents": 6,
      "reward": [
        "Warp Reality",
        "苏醒"
      ],
      "powerRecovery": "10/0.175–0.525"
    }
  ],
  "powers": [
    {
      "seal": 0,
      "name": "Let's see what this game brings",
      "cost": "动态",
      "icon": "power-game.png",
      "effect": "直接渗透目标聚居地内一个尚未渗透且允许渗透的设施；若有多个合法设施，选择列表中的最后一个。消耗会随破封数量增加：0–2 封为 1，3–4 封为 2，5–6 封为 3，7–8 封为 4，9 封为 5。",
      "limit": "目标必须是当前渗透进度恰好为 0 的聚居地，并至少有一个可渗透设施。"
    },
    {
      "seal": 2,
      "name": "The Devil Finds Work...",
      "cost": 1,
      "icon": "power-preference.png",
      "effect": "从全部普通性格标签与敌对势力标签中选择一项，让目标新增一项普通厌恶。它会改变英雄选择任务、攻击目标和承担风险的意愿。",
      "limit": "目标可以是无 Chosen One 特质的人物单位，包括我方 Agent；或已经疯狂且无 Chosen One 特质的当地统治者。普通厌恶与极端厌恶合计必须少于 5。"
    },
    {
      "seal": 3,
      "name": "...For Idle Hands",
      "cost": 1,
      "icon": "power-preference.png",
      "effect": "从全部普通性格标签与敌对势力标签中选择一项，让目标新增一项普通喜好，用来推动其偏向对应任务或行为。",
      "limit": "目标可以是无 Chosen One 特质的人物单位，包括我方 Agent；或已经疯狂且无 Chosen One 特质的当地统治者。普通喜好与极端喜好合计必须少于 7。"
    },
    {
      "seal": 3,
      "name": "It's All Just a Game",
      "cost": 3,
      "icon": "power-just-a-game.png",
      "effect": "目标 Sanity −14，最低为 0；由后续人物更新处理精神崩溃，不会在施放时直接取消追击。",
      "limit": "目标必须是正在追击另一单位的人物单位；不限定为英雄，也没有排除 Chosen One。"
    },
    {
      "seal": 4,
      "name": "Stories Told In Dreams",
      "cost": 3,
      "icon": "madness.png",
      "effect": "立即给目标地点增加 50 点 Madness，可直接越过 100 点的统治者精神侵蚀阈值，或推动地点接近 300 点危机。",
      "limit": "只能选择人类聚居地。"
    },
    {
      "seal": 4,
      "name": "Fascinate",
      "cost": 3,
      "icon": "power-fascinate.png",
      "effect": "把目标全部普通喜好移入极端喜好、普通厌恶移入极端厌恶，并清空原有普通列表；保留已有极端倾向。",
      "limit": "目标必须是携带 Laughing Tome 或 Laughing Tome (Bound) 的人物单位或当地统治者；没有排除我方 Agent 或 Chosen One。"
    },
    {
      "seal": 5,
      "name": "Everyone Shall Play",
      "cost": 0,
      "icon": "laughing-tome.png",
      "effect": "被动强化 Laughing Tome。未封印的 Tome 被非玩家人物携带时，每回合给其所在地增加 3 Madness；Tome 作为地点修正时，除当地每回合增加 3 Madness 外，还会给相邻每个人类聚居地增加 1 Madness。",
      "limit": "被动神力，解锁后自动生效，不会出现在主动施法列表中。"
    },
    {
      "seal": 6,
      "name": "Incoherent Thoughts",
      "cost": 3,
      "icon": "power-incoherent.png",
      "effect": "取消目标当前挑战，并令其陷入 3 回合 Disrupted，在此期间无法采取行动。",
      "limit": "目标必须是正在执行挑战或英雄任务、且无 Chosen One 特质的人物单位；不接受普通军队。"
    },
    {
      "seal": 7,
      "name": "Hysterical Tome",
      "cost": 5,
      "icon": "hysterical-tome.png",
      "effect": "移走 <CrossReference name=\"Laughing King's Tome\" />，在旧地点留下 <CrossReference name=\"Hysterical Tome\" href=\"#entry-hysterical-tome-modifier\" />。优先从“到旧书所在地的步数，大于旧书所在地到 Elder Tomb 的步数”的人类聚居地中随机选择新地点；没有候选时，改从全部人类聚居地随机选择，可能选回原地。",
      "limit": "只能选择当前存在 Laughing King's Tome 地点修正的地点。"
    },
    {
      "seal": 9,
      "name": "Warp Reality",
      "cost": 1,
      "icon": "arcane-fortress.png",
      "effect": "在 Elder Tomb 创建或补充 Arcane Fortress，每次 +25，最高 100，用来吸收敌方法师的魔法攻击。",
      "limit": "只能对 Elder Tomb 施放。"
    }
  ],
  "supplicant": {
    "image": "supplicant.png",
    "stats": "Might 2（携书时 4）　Lore 2　Intrigue 4　Command 3　HP 5",
    "abilities": [
      {
        "name": "Protector of the Tome",
        "text": "携带 Laughing Tome 或 Laughing Tome (Bound) 时，Might +2、Defence +2；失去书后加成消失。"
      },
      {
        "name": "Maddening Tongues",
        "text": "位于人类聚居地时，每回合使当地 Madness +1。"
      },
      {
        "name": "Favourite Toy",
        "text": "每局一次。死亡后在 Elder Tomb 等待下一次地点更新，以 1 HP 复活；Profile 和 Menace 重置至各自最低值，全部物品和随从丢失，正在追杀他的单位取消追击。使用后名称变为 Favourite Toy (USED)。"
      }
    ]
  },
  "sections": [
{
      "id": "items",
      "title": "物品",
      "media": true,
      "items": [
        {
          "name": "Laughing Tome",
          "image": "laughing-tome.png",
          "text": "开局位于 Supplicant 的第一个物品槽，可提供 Place Tome。被我方可控人物携带时不损伤精神，也不因此提高神力恢复；由非玩家人物阅读时，实际每回合 Sanity −1。\n携书者死亡、达到最高疯狂等级、失去人物单位与统治者身份，或因阅读而耗尽 Sanity 后，书会转为所在地的 Laughing King's Tome。书的物品提示写“每两回合”，但实际按每回合执行。"
        },
        {
          "name": "Laughing Tome (Bound)",
          "image": "bound-tome.png",
          "text": "Bind Tome 产生的封印书，停止阅读造成的 Sanity 与 Madness 影响；持有英雄可在未渗透的 Library 执行 Weaken Iastur。非玩家人物持有并累计经过 28 次更新后，书离手并转为 Laughing King's Tome (Asleep)。我方携带时不累计这项计时，可通过 Unbind Tome 解除封印。\n封印状态不会阻止 Protector of the Tome 或 Fascinate 生效；持有者死亡等失控情况仍可使它重新成为活跃的地点修正。"
        }
      ]
    },
{
      "id": "location-modifiers",
      "title": "地点修正",
      "media": true,
      "items": [
        {
          "name": "Laughing King's Tome",
          "image": "laughing-tome.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "在人类聚居地持续增加 Madness；提供 Drive Word of Mouth 与 Bind Tome。第 5 封印后，还会影响相邻人类聚居地。放在非人类聚居地时不会产生这项持续扩散。"
        },
        {
          "name": "Laughing King's Tome (Asleep)",
          "image": "laughing-tome.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "书的休眠地点状态，不再传播 Madness；提供 Collect Tome，也可从 Elder Tomb 使用 Summon Tome 取回。"
        },
        {
          "seal": 7,
          "name": "Hysterical Tome",
          "id": "hysterical-tome-modifier",
          "image": "hysterical-tome.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "真本移走后留下的副本，在人类聚居地持续增加 Madness；不享受 Everyone Shall Play 的相邻传播，也不能单独提高神力恢复。英雄可用 Dispel Hysterical Tome 清除。"
        },
        {
          "name": "Madness",
          "image": "madness.png",
          "baseGame": true,
          "modifierChange": {
            "natural": "",
            "external": "<CrossReference name=\"Stories Told In Dreams\" /> 一次性增加 50。\n<CrossReference name=\"Laughing King's Tome\" /> 与 <CrossReference name=\"Hysterical Tome\" href=\"#entry-hysterical-tome-modifier\" /> 在人类聚居地每回合各增加 3。\n<CrossReference name=\"Maddening Tongues\" /> 在人类聚居地每回合增加 1。\n<CrossReference name=\"Everyone Shall Play\" /> 使非玩家人物携带的未封印书每回合为所在地增加 3，并使活跃地点真本向每个相邻人类聚居地每回合增加 1。\n<CrossReference name=\"Drive Word of Mouth\" /> 完成时增加 25。\n<CrossReference name=\"A peaceful village shaken by a senseless tragedy\" /> 的 It all makes sense... 选项增加 75。"
          },
          "text": "每 1 点强度造成 −0.003 Prosperity；超过 100 后增加 Unrest，并逐步侵蚀当地统治者的 Sanity。达到 300 时强度回落到 150；若当地是人类聚居地且尚无 Madness Effect，则触发 Madness Crisis，等概率留下六种长期效果之一。",
          "initialValue": ""
        },
        {
          "seal": 9,
          "name": "Iastur",
          "image": "iastur-soul.png",
          "initialValue": "",
          "modifierChange": {
            "natural": "",
            "external": ""
          },
          "text": "苏醒后的灵魂，游戏实际地点修正名称为 Iastur。出现在 Elder Tomb，供携带未封印 Laughing Tome 的 Agent 执行 Waves of Madness。现行生成逻辑只提供此挑战，不提供旧的 Bind Iastur。",
          "id": "iastur-s-soul"
        },
        {
          "seal": 9,
          "name": "Arcane Fortress",
          "image": "arcane-fortress.png",
          "baseGame": true,
          "initialValue": "Warp Reality 新建时为 25。",
          "modifierChange": {
            "natural": "每回合强度 −2。",
            "external": "Warp Reality 每次增加 25，最高 100。"
          },
          "text": "保护地点免受敌对法师的魔法攻击；地点沦为废墟后仍保留。"
        }
      ]
    },
{
  "id": "locations",
  "title": "地点",
  "items": [
    {
      "id": "place-hook-base-0",
      "name": "Iastur · The Elder Tomb",
      "text": "使用 Iastur 时，开局额外向 <CrossReference name=\"The Elder Tomb\" href=\"?page=locations#entry-location-set-tombofgods\" meta=\"地点\" text=\"玩家神祇的起始据点，初始 Shadow 为 100%，并向外传播。提供 Reforge The Seal、Fulfil the Prophecy 与 Geomancy: Arcane Fortress；实际能否执行取决于执行者及苏醒状态。\" image=\"/locations/game/loc_evil_tomb.png\" target=\"_blank\" /> 加入 <CrossReference name=\"Summon Tome\" href=\"#entry-summon-tome\" />。\n\n对应地点 / 兴趣点\n<CrossReference name=\"The Elder Tomb\" href=\"?page=locations#entry-location-set-tombofgods\" meta=\"地点\" text=\"玩家神祇的起始据点，初始 Shadow 为 100%，并向外传播。提供 Reforge The Seal、Fulfil the Prophecy 与 Geomancy: Arcane Fortress；实际能否执行取决于执行者及苏醒状态。\" image=\"/locations/game/loc_evil_tomb.png\" target=\"_blank\" />",
      "baseGame": true,
      "image": "/locations/game/loc_evil_tomb.png"
    },
    {
      "name": "Summon Tome",
      "image": "laughing-tome.png",
      "location": "Elder Tomb。",
      "meta": "Other",
      "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
      "text": "召回遗失、休眠或被非玩家人物持有的未封印书。有人正在 Bind Tome 时不能开始；若非玩家英雄或统治者持有封印书，召回会失败，需要夺回或等待其使用、离手。完成取回时 Profile +3、Menace +10。",
      "id": "god-place-place-hook-base-0--place-task-base-ch-summonlaughingtome"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-place-hook-base-0",
      "name": "Iastur · The Elder Tomb",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "place-hook-base-0"
          ]
        },
        {
          "title": "挑战",
          "entryIds": [
            "god-place-place-hook-base-0--place-task-base-ch-summonlaughingtome"
          ]
        }
      ],
      "image": "/locations/game/loc_evil_tomb.png"
    }
  ]
},
{
  "id": "points-of-interest",
  "title": "兴趣点",
  "items": [
    {
      "id": "iastur-library",
      "name": "Library",
      "text": "携带封印后的 Laughing Tome 时，可在 Library 执行 Weaken Iastur。\n\n通用资料：<CrossReference name=\"Library\" href=\"?page=points-of-interest#entry-location-sub-library\" meta=\"兴趣点\" text=\"每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 Research Arcane Secret；Iastur 存在且 Library 未被渗透时，额外提供 Weaken Iastur。\n\n出现方式\n城市与矮人据点的随机候选。\n\n可出现地点\nCity、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"/locations/game/library.png\" target=\"_blank\" />",
      "image": "/locations/game/library.png",
      "baseGame": true
    },
    {
      "name": "Weaken Iastur",
      "image": "bound-tome.png",
      "location": "尚未渗透的 Library。",
      "meta": "Lore",
      "statLine": "Complexity: 5　Profile: 1000　Menace: 150　XP: 12",
      "positiveTags": "无",
      "negativeTags": "Madness",
      "text": "消耗封印书。若当前神力 >floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。",
      "id": "god-place-iastur-library--place-task-base-ch-weakeniastur"
    }
  ],
  "placeArticles": [
    {
      "id": "god-place-iastur-library",
      "name": "Library",
      "blocks": [
        {
          "title": "介绍",
          "entryIds": [
            "iastur-library"
          ]
        },
        {
          "title": "英雄任务",
          "entryIds": [
            "god-place-iastur-library--place-task-base-ch-weakeniastur"
          ]
        }
      ]
    }
  ]
},
{
      "id": "madness-effects",
      "title": "疯狂危机效果",
      "media": true,
      "items": [
        {
          "name": "Madness Effect: Catatonia",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "Madness Crisis 的六种随机结果之一。当地 −0.75 Prosperity、−10 Security，并固定减少 50 点食物产出。"
        },
        {
          "name": "Madness Effect: Masochism",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "非玩家控制且不是 Chosen One 的英雄停留当地时，每回合增加 5% Shadow。"
        },
        {
          "name": "Madness Effect: Fascination",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "每逢 10 的倍数回合为玩家恢复 1 点神力，不超过当前上限。"
        },
        {
          "name": "Madness Effect: Psychotics",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "出现时立刻把当地人口降至原来的 75%（最低 1），增加 100 Death；持续提供 −2 Security。"
        },
        {
          "name": "Madness Effect: Hypochondria",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "出现时建立 50 Quarantine 与 100 Plague Immunity，并持续造成 −0.65 Prosperity。"
        },
        {
          "name": "Madness Effect: Paranoid Delusions",
          "image": "madness-effect.png",
          "baseGame": true,
          "text": "出现时添加 Banditry；持续提供 Security +5。当地除 Chosen One 外的人物单位每回合个人 Shadow +5 个百分点，最高 100%，包括我方 Agent。"
        }
      ]
    },
{
      "id": "challenges",
      "title": "挑战",
      "media": true,
      "items": [
        {
          "name": "Place Tome",
          "image": "laughing-tome.png",
          "location": "携带未封印 Laughing Tome 的 Agent 所在地点；不要求聚居地，但持续扩散只在人类聚居地生效。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "携带未封印 Laughing Tome 的 Agent 把书放到所在地，生成 Laughing King's Tome。完成时额外获得 5 Profile 与 10 Menace。"
        },
        {
          "name": "Drive Word of Mouth",
          "image": "madness.png",
          "location": "有 <CrossReference name=\"Laughing King's Tome\" /> 的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 25　Profile: 当前 Madness　Menace: 当前 Madness ÷ 2　XP: 42",
          "text": "完成时使当地 Madness +25，执行者 Profile +10、Menace +10。"
        },
        {
          "name": "Collect Tome",
          "image": "laughing-tome.png",
          "location": "Laughing King's Tome (Asleep) 所在地点。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "取回未封印 Laughing Tome，并清除其他真本物品、活跃地点真本和休眠真本；不清除 Hysterical Tome 副本。完成时 Profile +3、Menace +10。"
        },
        {
          "name": "Summon Tome",
          "image": "laughing-tome.png",
          "location": "Elder Tomb。",
          "meta": "Other",
          "statLine": "Complexity: 1　Profile: 0　Menace: 0　XP: 3",
          "text": "召回遗失、休眠或被非玩家人物持有的未封印书。有人正在 Bind Tome 时不能开始；若非玩家英雄或统治者持有封印书，召回会失败，需要夺回或等待其使用、离手。完成取回时 Profile +3、Menace +10。"
        },
        {
          "name": "Unbind Tome",
          "image": "bound-tome.png",
          "location": "携带 Laughing Tome (Bound) 的玩家 Agent 当前所在地点。",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 0　Menace: 0　XP: 72",
          "text": "玩家 Agent 携带 Bound Tome 时解除封印，使其重新传播 Madness。完成时增加 3 Profile 与 5 Menace。"
        },
        {
          "seal": 9,
          "name": "Waves of Madness",
          "image": "laughing-tome.png",
          "location": "Elder Tomb 的 <CrossReference name=\"Iastur\" href=\"#entry-iastur-s-soul\" /> 修正处；执行者须携带未封印 Laughing Tome。",
          "meta": "Lore",
          "statLine": "Complexity: 50　Profile: 1000　Menace: 25　XP: 72",
          "text": "完成一次引导后，将仍存活、未疯狂且不受玩家控制的有效人物按到引导者的平面距离排序。设人数为 N，取第 floor(N×5%)+1 人的距离为界，将该距离以内的所有人 Sanity 设为 0 并触发疯狂；距离并列者全部计入，因此不一定恰好影响 5%。\n包括符合条件的英雄和统治者；排除我方可控人物及 Ghast、Cave Spider 等特殊自主人物。代码不排除 Chosen One。可重复执行，已经疯狂的人不再占据下一次的名单。\n开始引导时增加 Profile 40、Menace 40；160 是敌方法师选择反制目标时使用的引导威胁参数。可以用 Warp Reality 提供防护。"
        }
      ]
    },
{
      "id": "hero-tasks",
      "title": "英雄任务",
      "media": true,
      "items": [
        {
          "name": "Bind Tome",
          "image": "bound-tome.png",
          "location": "有 Laughing King's Tome 的地点。",
          "meta": "Other",
          "statLine": "Complexity: 5　Profile: Madness ÷ 1.25（其他地点 50）　Menace: Madness ÷ 1.5（其他地点 60）　XP: 12",
          "positiveTags": "无",
          "negativeTags": "Madness",
          "text": "封印并拾取真本，获得 Laughing Tome (Bound)，停止活跃真本的持续扩散。仅在人类 Society 的人类聚居地，Profile 与 Menace 才按 Madness 计算；其他地点分别固定为 50、60。"
        },
        {
          "name": "Weaken Iastur",
          "image": "bound-tome.png",
          "location": "尚未渗透的 Library。",
          "meta": "Lore",
          "statLine": "Complexity: 5　Profile: 1000　Menace: 150　XP: 12",
          "positiveTags": "无",
          "negativeTags": "Madness",
          "text": "消耗封印书。若当前神力 >floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。"
        },
        {
          "name": "Dispel Hysterical Tome",
          "image": "hysterical-tome.png",
          "location": "有 <CrossReference name=\"Hysterical Tome\" href=\"#entry-hysterical-tome-modifier\" /> 的地点。",
          "meta": "Lore",
          "statLine": "Complexity: 10　Profile: 50　Menace: 50　XP: 21",
          "positiveTags": "无",
          "negativeTags": "Madness",
          "text": "移除所在地的一项 Hysterical Tome，停止其继续增加 Madness。完成时额外增加 5 Profile。"
        }
      ]
    },
{
      "id": "religion",
      "title": "宗教教义",
      "items": [
        {
          "name": "Maddening Insight",
          "text": "",
          "tenetRange": "-1 – 0",
          "tenetLevels": [
            {
              "level": -1,
              "text": "该信仰的聚居地每有一名不受玩家控制的人物单位正在学习 Arcane Secret，每回合使该学习者 Sanity −1，并使当地统治者 Sanity −1，仅在各自 Sanity >0 时扣除。多名学习者分别触发，统治者可能同回合损失多点。"
            }
          ]
        }
      ],
      "media": false
    },
{
      "id": "events",
      "title": "事件",
      "media": true,
      "items": [
        {
          "name": "Madness Crisis",
          "image": "madness.png",
          "baseGame": true,
          "text": "任一人类聚居地的 Madness 达到 300 时触发。Madness 立即降回 150，并在 Catatonia、Masochism、Fascination、Psychotics、Hypochondria、Paranoid Delusions 中等概率选择一种长期地点效果；同一地点已经有 Madness Effect 时不会再次生成。",
          "eventCategory": "other"
        },
        {
          "name": "Story time",
          "text": "英雄在拥挤的场所听到源于 Laughing King's Tome 的古怪故事，玩家可以干扰其追查。\n\n触发条件\n当前人物是玩家控制的 Agent\n并且 另一人物是英雄\n并且 不满足（另一人物是 Chosen One）\n并且 另一人物对 Madness 的偏好等级 小于 0\n并且 两人位于同一地点\n并且 任务事件计时 = 任务事件计时阈值\n并且 （正在执行 Might 属性任务；或者 正在执行 Intrigue 属性任务；或者 正在执行 Command 属性任务；或者 正在执行 Lore 属性任务）\n并且 当地 Laughing King's Tome 强度 = 100\n并且 当前神祇是 Iastur。",
          "eventOptions": [
            {
              "name": "Send trouble %his2 way",
              "text": "更新 <CrossReference name=\"Story time\" /> 的次数限制：另两个选项的累计选择次数达到 4 后，该事件不再触发。\n任务中事件计时重置为 0。\n另一人物 Menace +9。\n当前人物 Menace +3。"
            },
            {
              "name": "Lead %him astray",
              "text": "任务中事件计时重置为 0。\n另一人物的单位被打断 3 回合。\n当前人物 Menace +3。"
            },
            {
              "name": "Leave %him2 to %his2 quest",
              "text": "重置途中事件计时。"
            }
          ],
          "eventCategory": "relationships"
        },
        {
          "name": "A peaceful village shaken by a senseless tragedy",
          "image": "event-shaken-village.jpg",
          "baseGame": true,
          "text": "本体移动事件。地点须有农场，Madness 在 50 与 250 之间，或当地统治者 Shadow 在 25% 与 68% 之间（没有统治者时读取地图格子的黑暗程度）；Devastation 与 Plague 均为 0，且此前未记录这起事件。概率参数为 0.01。",
          "eventOptions": [
            {
              "name": "A sign of dark times",
              "text": "当地 Shadow +33 个百分点；记录当前回合，阻止后续通常再次触发。"
            },
            {
              "name": "It all makes sense...",
              "text": "当地 Madness +75；记录当前回合，阻止后续通常再次触发。"
            }
          ],
          "eventCategory": "other"
        }
      ]
    }
],
  "relations": {
    "Laughing King's Tome": {
      "sources": [
        {
          "name": "Place Tome",
          "href": "#entry-place-tome"
        },
        {
          "name": "Laughing Tome",
          "href": "#entry-laughing-tome"
        }
      ],
      "effects": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        },
        {
          "name": "Drive Word of Mouth",
          "href": "#entry-drive-word-of-mouth"
        },
        {
          "name": "Bind Tome",
          "href": "#entry-bind-tome"
        }
      ]
    },
    "Laughing King's Tome (Asleep)": {
      "sources": [
        {
          "name": "Weaken Iastur",
          "href": "#entry-weaken-iastur"
        },
        {
          "name": "Laughing Tome (Bound)",
          "href": "#entry-laughing-tome-bound"
        }
      ],
      "effects": [
        {
          "name": "Collect Tome",
          "href": "#entry-collect-tome"
        },
        {
          "name": "Summon Tome",
          "href": "#entry-summon-tome"
        }
      ]
    },
    "Hysterical Tome": {
      "effects": [
        {
          "name": "Hysterical Tome",
          "href": "#entry-hysterical-tome-modifier",
          "meta": "地点修正"
        }
      ]
    },
    "hysterical-tome-modifier": {
      "sources": [
        {
          "name": "Hysterical Tome",
          "href": "#entry-hysterical-tome",
          "meta": "神力"
        }
      ],
      "effects": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        },
        {
          "name": "Dispel Hysterical Tome",
          "href": "#entry-dispel-hysterical-tome"
        }
      ]
    },
    "iastur-s-soul": {
      "sources": [
        {
          "name": "第 9 封印苏醒",
          "href": "#seals"
        }
      ],
      "effects": [
        {
          "name": "Waves of Madness",
          "href": "#entry-waves-of-madness"
        }
      ]
    },
    "Warp Reality": {
      "effects": [
        {
          "name": "Arcane Fortress",
          "href": "#entry-arcane-fortress"
        }
      ]
    },
    "Arcane Fortress": {
      "sources": [
        {
          "name": "Warp Reality",
          "href": "#entry-warp-reality"
        }
      ]
    },
    "Stories Told In Dreams": {
      "effects": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ]
    },
    "Madness Crisis": {
      "sources": [
        {
          "name": "Madness",
          "href": "#entry-madness"
        }
      ],
      "effects": [
        {
          "name": "Madness Effect: Catatonia",
          "href": "#entry-madness-effect-catatonia"
        },
        {
          "name": "Madness Effect: Masochism",
          "href": "#entry-madness-effect-masochism"
        },
        {
          "name": "Madness Effect: Fascination",
          "href": "#entry-madness-effect-fascination"
        },
        {
          "name": "Madness Effect: Psychotics",
          "href": "#entry-madness-effect-psychotics"
        },
        {
          "name": "Madness Effect: Hypochondria",
          "href": "#entry-madness-effect-hypochondria"
        },
        {
          "name": "Madness Effect: Paranoid Delusions",
          "href": "#entry-madness-effect-paranoid-delusions"
        }
      ]
    },
    "Madness Effect: Catatonia": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    },
    "Madness Effect: Masochism": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    },
    "Madness Effect: Fascination": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    },
    "Madness Effect: Psychotics": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    },
    "Madness Effect: Hypochondria": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    },
    "Madness Effect: Paranoid Delusions": {
      "sources": [
        {
          "name": "Madness Crisis",
          "href": "#entry-madness-crisis"
        }
      ]
    }
  }
};

const preparedConfig = prepareGodConfig(config);
export default function IasturArchive({ onGodChange }: { onGodChange: (god: ArchiveGodChoice) => void }) {
  return <GodArchive config={preparedConfig} onGodChange={onGodChange} />;
}
