// Source audit: work/agents-audit/event-candidates.json and AGENT_EVENTS_SOURCE_AUDIT.md
export type AgentEventBinding = { id: string; kind: string; choices?: number[]; note?: string; title?: string };
import { unavailableAgentEntries } from "./EventAvailability";
import { eventGroups } from "./EventsData";
const sourceBindings: Readonly<Record<string, AgentEventBinding[]>> = {
  "hierophant": [
    {
      "id": "event-base-fog-p2p-wilful-to-warnings-hiero",
      "kind": "专属后续",
      "note": "Trusted counsel 在统治者身上设置专用标记后，才会进入此后续；选项降低该统治者对 Chosen One 的好感。",
      "title": "Wilful to warnings · Trusted counsel 后续"
    },
    {
      "id": "event-base-fog-p2p-wilful-to-warnings",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-bad-speech",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-legal-matters",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    }
  ],
  "warlock": [
    {
      "id": "event-base-fog-midch-fairy-festival",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-base-fog-move-spectral-assault",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-base-foge-exploreruins-deadarmy2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-confession",
      "kind": "专属选项",
      "choices": [
        0
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-lecture-dark",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-magician-hat",
      "kind": "专属选项",
      "choices": [
        0
      ]
    }
  ],
  "warlord": [
    {
      "id": "event-base-fog-midch-orcish-aspirant",
      "kind": "身份相关事件",
      "choices": [
        1,
        2
      ]
    },
    {
      "id": "event-base-fog-midch-orcish-challenger",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-toast-warlord",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-exploreruins-infil3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-base-foge-exploreruins-xerxeian-desert-2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3003549759-fog-midch-orcish-toast-warlord",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-graveyardshift",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-profguardt2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-campfire-tales-of-valour",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-vs-duel-any",
      "kind": "身份相关事件"
    }
  ],
  "banditking": [
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-bribed-guards",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-strength-maintenance",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-unfair",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-agent-shadowed",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "baroness": [
    {
      "id": "event-base-fog-midch-skeletonwarriors",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-base-fog-midch-swarming-vermin",
      "kind": "身份相关事件",
      "choices": [
        1,
        2,
        3
      ]
    },
    {
      "id": "event-base-fog-move-the-baroness-feeds-on-villagers",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-exploreruins-infil3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-base-foge-exploreruins-xerxeian-desert-2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-assurance",
      "kind": "专属选项",
      "choices": [
        3
      ],
      "note": "此事件虽然写有 The Baroness 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-arcticwolvest1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-burning-tavern",
      "kind": "专属选项",
      "choices": [
        3
      ],
      "note": "此事件虽然写有 The Baroness 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-move-humanizing-moment-monster",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-knifet2",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-lightbringing",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-404pagesnotfound",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-spoons",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "trickster": [
    {
      "id": "event-base-fog-midchp2p-my-hero-1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-base-fog-move-pickpocket",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-base-foge-exploreruins-xerxeian-desert-1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t2",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-audacious-t3",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-candyman",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-theyshouldnthaveseenthat",
      "kind": "专属选项",
      "choices": [
        3
      ]
    }
  ],
  "survivor": [
    {
      "id": "event-base-fog-exploreruins-infil3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-base-foge-exploreruins-xerxeian-desert-2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-arcticwolvest1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-burning-tavern",
      "kind": "专属选项",
      "choices": [
        3
      ],
      "note": "此事件虽然写有 The Survivor 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-graveyardshift",
      "kind": "专属选项",
      "choices": [
        2
      ],
      "note": "此事件虽然写有 The Survivor 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-move-humanizing-moment-monster",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-kept-distance",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-patresvamirt1",
      "kind": "专属选项",
      "choices": [
        3
      ],
      "note": "此事件虽然写有 The Survivor 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    }
  ],
  "doctor": [
    {
      "id": "event-3261852980-maeredux-midchp2p-health-advise",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-plague",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-crackedmolar",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-examined-body",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-foul-tide",
      "kind": "专属选项",
      "choices": [
        0
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-lecture",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-potentialbenefactor-2",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-strong-stomach",
      "kind": "专属选项",
      "choices": [
        0
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-wounded",
      "kind": "专属选项",
      "choices": [
        0
      ]
    }
  ],
  "courtier": [
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship-betray",
      "kind": "身份事件后续",
      "note": "承接 Noble natured friendship 中的对应结果；原定义中的等待时间比较方向存在问题，实际限制见下方。"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship-mourn",
      "kind": "身份事件后续",
      "note": "承接 Noble natured friendship 中的对应结果；原定义中的等待时间比较方向存在问题，实际限制见下方。"
    },
    {
      "id": "event-base-fog-midch-smoker",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-base-foge-exploreruins-xerxeian-desert-1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-agents-at-ball",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-assurance",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-banker-witness",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-deep-one-mission",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-graveyardshift",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-know-to-knock",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-lightbringing",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-spoons",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-cruel-a-goblet-of-poison",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship",
      "kind": "身份相关事件"
    }
  ],
  "monarch": [
    {
      "id": "event-3261852980-maeredux-midchp2p-assurance",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-graveyardshift",
      "kind": "身份相关事件",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-move-humanizing-moment-monster",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-lightbringing",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-other-creaturest2",
      "kind": "专属选项",
      "choices": [
        3
      ]
    }
  ],
  "cursed": [
    {
      "id": "event-base-anw-cursedvengeance1",
      "kind": "专属事件",
      "note": "获得 Unfulfilled Vow of Vengeance 时显示，指出复仇目标；这一步不增加属性。",
      "title": "Cursed · 立下誓言"
    },
    {
      "id": "event-base-anw-cursedvengeance2",
      "kind": "专属事件",
      "note": "复仇目标被 The Cursed 杀死时立即完成誓言；目标因其他原因死亡，也会在特质的回合检查中完成。Fulfilled Vow of Vengeance 使 Might、Lore、Intrigue、Command 各 +1；Petrifying Gaze 的持续回合也按完成誓言后的规则结算。奖励来自特质回调，选项仅确认。",
      "title": "Cursed · 复仇完成"
    },
    {
      "id": "event-base-fog-midch-adored-outsider",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-aspirant",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-challenger",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-efforts",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-hospitality",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-orcish-toast-human",
      "kind": "身份相关事件"
    },
    {
      "id": "event-base-fog-midch-weight-of-the-task",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3003549759-fog-midch-orcish-toast-human",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-burning-tavern",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-candlestickt1",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-move-monster-drop-glam",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-helpinghands-1",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-helpinghands-2",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-helpinghands-3",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-move-humanizing-moment-monster",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-kept-distance",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-knifet2",
      "kind": "身份相关事件",
      "choices": [
        0,
        1,
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-move-monster-keep-moving",
      "kind": "身份相关事件"
    }
  ],
  "harvester": [
    {
      "id": "event-base-anw-harvesterdeath",
      "kind": "专属事件",
      "note": "The Harvester 带有 Death Curse；死亡时若存在杀手人物，向杀手家族加入 The Howling，之后家族成员的 Sanity 上限被压至 4。诅咒由死亡回调结算，选项仅确认。"
    },
    {
      "id": "event-base-fog-midch-fairy-festival",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-butcher-of-ark",
      "kind": "身份相关事件",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-corruptguardst3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-move-humanizing-moment-monster",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-hunting-manticore",
      "kind": "专属选项",
      "choices": [
        2
      ],
      "note": "此事件虽然写有 The Harvester 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-hunting-ogre",
      "kind": "专属选项",
      "choices": [
        2
      ],
      "note": "此事件虽然写有 The Harvester 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-patresvamirt1",
      "kind": "专属选项",
      "choices": [
        3
      ],
      "note": "此事件虽然写有 The Harvester 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-turncoatnoble-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-village-field-witness",
      "kind": "专属选项",
      "choices": [
        1
      ],
      "note": "此事件虽然写有 The Harvester 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    },
    {
      "id": "event-3261852980-maeredux-midch-village-field-witness-snow",
      "kind": "专属选项",
      "choices": [
        1
      ],
      "note": "此事件虽然写有 The Harvester 的分支，但该 Agent 的通常形态无法满足外层种族或身份条件，正常情况下不能进入。"
    }
  ],
  "buccaneer": [
    {
      "id": "event-3261852980-maeredux-midchp2p-ship-ahoy",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-buccaneer-peacelilies",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-stormyseas",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-campfire-tales-of-valour",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-vs-duel-any",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-buccaneer-raider",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-buccaneer-raider-boredom",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-buccaneer-raider",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-buccaneer-upstart",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-buccaneer-raider-mutiny",
      "kind": "身份相关事件"
    }
  ],
  "dissident": [
    {
      "id": "event-base-bug-midch-sewer-underclass-no-wretched-nobles-here",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-bad-speech",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-you-want-me-dead",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-unrest",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-deep-one-mission",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-doorstuck",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-foul-tide",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-know-to-knock",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-potentialbenefactor-1",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-rowdytavern",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "shaman": [
    {
      "id": "event-3261852980-maeredux-midch-curiousfoliaget1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-patresvamirt1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-1-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-1-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-1-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-2-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-2-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-slowlearning-2-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "aristocrat": [
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship-betray",
      "kind": "身份事件后续",
      "note": "承接 Noble natured friendship 中的对应结果；原定义中的等待时间比较方向存在问题，实际限制见下方。"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship-mourn",
      "kind": "身份事件后续",
      "note": "承接 Noble natured friendship 中的对应结果；原定义中的等待时间比较方向存在问题，实际限制见下方。"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-assurance",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-legal-matters",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-banker-witness",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-graveyardshift",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-lightbringing",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-spoons",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-noble-friendship",
      "kind": "身份相关事件"
    }
  ],
  "spellbinder": [
    {
      "id": "event-3261852980-maeredux-mid-bookspooks",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-spellbinder-overload",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    }
  ],
  "exile": [
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-bribed-guards",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-concealedtrapst2",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-crackedmolar",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-curiousfoliaget1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-agent-shadowed",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "seeker": [
    {
      "id": "event-3261852980-maeredux-midchp2p-legal-matters",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-seeker-cooperation",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-seeker-wisdom",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-animatedarmourt1",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-boxofmezathotht2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-confession",
      "kind": "专属选项",
      "choices": [
        0
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-lecture",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-seeker-goal",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-mid-stainedshirt",
      "kind": "身份相关事件"
    }
  ],
  "corrupted-hero": [
    {
      "id": "event-3261852980-maeredux-midch-butcher-of-ark",
      "kind": "专属选项",
      "choices": [
        0
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-sting-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-sting-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-sting-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-suspiciousguards-t1",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-suspiciousguards-t2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-suspiciousguards-t3",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-move-alpine-witch",
      "kind": "身份相关事件"
    }
  ],
  "corrupted-acolyte": [],
  "fisherman": [
    {
      "id": "event-2879667447-wonderblunder-deepones-fisherman-debug",
      "kind": "调试定义",
      "note": "原文件的候选概率为 0%，只检查 IS_FISHERMAN 标记。未找到正常写入该标记或直接打开此事件的路径，不能作为可正常遭遇的专属事件。"
    },
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-hunger",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-deep-one-mission",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-stormyseas",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-blood-runs-cold",
      "kind": "身份相关事件"
    }
  ],
  "drowned-prophet": [
    {
      "id": "event-2879667447-wonderblunder-deepones-drownedprophet1",
      "kind": "出现事件",
      "note": "Drowned Prophet 出现并建立势力时的通知；玩家尚未使用 Direct Control 时也会出现。选项仅确认。"
    },
    {
      "id": "event-2879667447-wonderblunder-deepones-drownedprophetsanctum",
      "kind": "势力相关事件",
      "note": "属于 Drowned Prophet 的势力扩张通知，尚未使用 Direct Control 时也可发生。选项仅确认。"
    },
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-hunger",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-deep-one-mission",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-stormyseas",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-blood-runs-cold",
      "kind": "身份相关事件"
    }
  ],
  "werewolf": [],
  "redeemer": [
    {
      "id": "event-3236779751-redeemer-redeemerkillsco",
      "kind": "专属事件",
      "note": "The Redeemer 在战斗中杀死当前 Chosen One 时，替换通常的胜利结算，并失去直接控制。若 Chosen One 死亡回调同时满足救赎条件，会转为新的 Chosen One：Sanity 上限 +5，Shadow 清零，Lore、Intrigue 各 +1，HP 恢复至上限，返还 1 招募点（最高 3）。该转化由死亡回调结算；选项仅确认。",
      "title": "Victory · The Redeemer"
    },
    {
      "id": "event-3261852980-maeredux-midch-butcher-of-ark",
      "kind": "专属选项",
      "choices": [
        3
      ]
    },
    {
      "id": "event-3261852980-maeredux-midch-chaos-city-bribed-guards",
      "kind": "专属选项",
      "choices": [
        1
      ]
    },
    {
      "id": "event-3261852980-maeredux-midchp2p-confession-redeemer",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-midch-unfair",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-mid-weirddreams-2",
      "kind": "专属选项",
      "choices": [
        2
      ]
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-ruler-vs-duel-any",
      "kind": "身份相关事件"
    },
    {
      "id": "event-3261852980-maeredux-p2p-midch-agent-shadowed",
      "kind": "专属选项",
      "choices": [
        2
      ]
    }
  ],
  "surveyor": [],
  "whisperer": [
    { "id": "event-3236518418-whisperer-whisperer-lured", "kind": "专属事件" },
    { "id": "event-3261852980-maeredux-midch-arobedfiguret1", "kind": "专属选项", "choices": [3] },
    { "id": "event-3261852980-maeredux-mid-404pagesnotfound", "kind": "专属选项", "choices": [1] },
    { "id": "event-3261852980-maeredux-midch-unfair", "kind": "专属选项", "choices": [2] },
    { "id": "event-3261852980-maeredux-mid-stainedshirt", "kind": "身份相关事件" },
    { "id": "event-3261852980-maeredux-midchp2p-barteringforaccess3", "kind": "专属选项", "choices": [3] },
    { "id": "event-3261852980-maeredux-midchp2p-barteringforaccess1", "kind": "专属选项", "choices": [3], "note": "通常无法触发：选项虽点名 Whisperer，事件入口却只允许 Human、Elf 或 Orc；Whisperer 为 Undead，不满足外层条件。" },
    { "id": "event-3261852980-maeredux-midch-banker-witness", "kind": "专属选项", "choices": [2], "note": "通常无法触发：事件入口要求 Human 或 Elf 种族，Whisperer 为 Undead；仅有专属选项不代表能进入事件。" },
    { "id": "event-3261852980-maeredux-midch-rowdytavern", "kind": "专属选项", "choices": [2], "note": "通常无法触发：事件入口要求 Human、Elf 或 Orc 种族，Whisperer 为 Undead。" }
  ],
  "courtesan": [
    { "id": "event-3237303618-kat-scandalousarrival", "kind": "专属事件" },
    { "id": "event-3261852980-maeredux-midch-graveyardshift", "kind": "专属选项", "choices": [3], "note": "Unsuited for this kind of hardship 的选项描述写有 Profile +3，但实际效果列表为空；只进入同系列的等待期。" },
    { "id": "event-3261852980-maeredux-mid-lightbringing", "kind": "专属选项", "choices": [2] },
    { "id": "event-3261852980-maeredux-mid-stainedshirt", "kind": "身份相关事件" },
    { "id": "event-3261852980-maeredux-midchp2p-noble-friendship", "kind": "身份相关事件" },
    { "id": "event-3261852980-maeredux-midchp2p-noble-friendship-mourn", "kind": "剧情后续" },
    { "id": "event-3261852980-maeredux-midchp2p-noble-friendship-betray", "kind": "剧情后续" }
  ],
  "robber-baron": []
};

const availableIds = new Set(eventGroups.flatMap(group => group.records.map(record => record.entry.id)));
export const agentEventBindings: Readonly<Record<string, AgentEventBinding[]>> = Object.fromEntries(
  Object.entries(sourceBindings).map(([agent, bindings]) => [agent, bindings.filter(binding =>
    availableIds.has(binding.id) && !unavailableAgentEntries[agent]?.includes(binding.id))]),
);

export const agentEventNotes: Readonly<Record<string,string>> = {
  "robber-baron": "无专属事件。走私、贿赂与佣兵分裂由行动或军队逻辑直接结算。",
  "corrupted-acolyte": "未找到仅供被腐化的 Acolyte 使用的事件或分支。",
  "werewolf": "未找到仅供玩家控制的 Werewolf 使用的事件或分支。Werewolf Run 是狼人地点修正成熟时的通知，不要求玩家控制的 Werewolf 在场。",
  "surveyor": "未找到 The Surveyor 的专属事件或分支。当前 Mod 的奖励和赞助结算由技能、挑战及地点修正处理。"
};
