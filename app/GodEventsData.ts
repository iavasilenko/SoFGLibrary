import type { EventSourceGroup } from "./EventTypes";

// Effective root/v2.0 JSON; custom DLL effects retain their audited descriptions.
export const godEventGroups: EventSourceGroup[] = [
  {
    "id": "3320562229",
    "name": "Aberrant Metal",
    "records": [
      {
        "entry": {
          "name": "Wandering Labor",
          "image": "./aberrant-metal/image_factoryevent1.jpg",
          "text": "工厂的烟雾与心脏般的鼓动驱使居民无意识地游荡，逐渐沦为劳动者。\n\n地点回合更新时触发。\n\n触发条件\n当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 （当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 > 20；或者 相邻地点 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度总和 > 40）\n并且 回合 % 12 = 0",
          "eventOptions": [
            {
              "name": "They look on, helpless.",
              "text": "无效果。"
            },
            {
              "name": "Their fists clench.",
              "condition": "神力 > 0",
              "text": "当地 Unrest 强度 +200。\n神力 −1。"
            },
            {
              "name": "Despair comes over them.",
              "condition": "神力 > 0",
              "text": "当地 Shadow +100。\n神力 −1。"
            },
            {
              "name": "Your power grows.",
              "condition": "当地 Shadow（%） = 100",
              "text": "神力 +1。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-aberrant-metal-factory-god-factorycrowd",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorycrowd",
        "type": "LOCATION",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/loc_factorycrowd.json",
        "condition": "is_god_factory & is_human & ((modifier_level_factory_smog > 20) | (modifier_level_neighboring_smog > 40)) & (turn % 12 = 0)",
        "decision": {
          "trigger": "地点回合更新时触发。",
          "condition": "当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 （当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 > 20；或者 相邻地点 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度总和 > 40）\n并且 回合 % 12 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Aberrant Factory",
          "image": "./aberrant-metal/image_factorysettlement.jpg",
          "text": "城市与居民被 Aberrant Metal 改造成新的工厂，成为它在世界中的锚点。\n\n<CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" /> 完成人类类聚居地转化时强制触发，告知工厂已经形成。",
          "eventOptions": [
            {
              "name": "Another factory, another anchor in this world",
              "text": "无效果。"
            }
          ],
          "id": "event-god-aberrant-metal-factory-god-factorysettlement",
          "eventCategory": "gods",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorysettlement",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/loc_factorysettlement.json",
        "condition": "1=1",
        "decision": {
          "trigger": "<CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" /> 完成人类类聚居地转化时强制触发，告知工厂已经形成。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "An Extra Chimney",
          "image": "./aberrant-metal/image_factoryevent5.jpg",
          "text": "Agent 发现多出一座烟囱的工坊；烟尘覆盖的工匠木然站在门外。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地有 <CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" />",
          "eventOptions": [
            {
              "name": "Continue on.",
              "text": "无效果。"
            },
            {
              "name": "A reminder to %him.",
              "text": "33.33%：A的任务进度+20。\nA HP −3，降至0时死亡。\n\n33.33%：A的任务进度+15。\nA HP −2，降至0时死亡。\n\n33.33%：A的任务进度+10。\nA HP −1，降至0时死亡。"
            },
            {
              "name": "A new tool.",
              "condition": "当前人物 Command > 2",
              "text": "25%：A的任务进度−10。\n\n25%：A的任务进度−10。\n从稀有物品池获得一件物品。\n\n50%：从普通物品池获得一件物品。\nA的任务进度−10。"
            },
            {
              "name": "A place to hide.",
              "text": "A的任务进度−15。\nA Profile −20。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-aberrant-metal-factory-god-factorymidcore1",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorymidcore1",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/mid_factorycore1.json",
        "condition": "is_god_factory & is_human & !is_aberrant_factory & has_aberrant_factory_core",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地有 <CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" />",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Smokestack",
          "image": "./aberrant-metal/image_factoryevent3.jpg",
          "text": "Agent 经过不断喷出黑烟的烟囱，考虑调查、煽动居民或继续自己的工作。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地有 <CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" />",
          "eventOptions": [
            {
              "name": "Say nothing.",
              "text": "无效果。"
            },
            {
              "name": "\"Investigate\" it.",
              "text": "任务进度 −10，Menace −15，Profile +5，Unrest −30。",
              "condition": "当前人物 Intrigue > 2"
            },
            {
              "name": "Lead a mob to it.",
              "text": "任务进度 −10，Menace +5，Profile +10，Unrest +40，<CrossReference name=\"Core Efficiency\" href=\"?god=aberrant-metal#entry-core-efficiency\" meta=\"地点修正\" text=\"决定 Production Core 的产量：每回合 1 + ⌊强度/25⌋ Units。人类类城市的上限等于人口，Deep One Abyssal City 的上限等于其人口整数部分。\nOrc Fortress 的上限为 ⌊当地 Orcish Industry × 0.35 × 难度倍率 × Orc 强度设置⌋ × (1 + 合格相邻 Orc Camp 数)；合格邻地需要有 Orcish Industry。代码按当地工业值重复计入各邻地。\" image=\"./aberrant-metal/icon_power_coreb.png\" /> +20。",
              "condition": "当前人物 Command > 2"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-aberrant-metal-factory-god-factorymidcore2",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorymidcore2",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/mid_factorycore2.json",
        "condition": "is_god_factory & is_human & !is_aberrant_factory & has_aberrant_factory_core",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当前神祇是 Aberrant Metal\n并且 当地是人类聚居地\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地有 <CrossReference name=\"Production Core\" href=\"?god=aberrant-metal#entry-production-core\" meta=\"兴趣点\" text=\"替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。\n所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 Aberrant Factory；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。\n提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 Banish Production Core。\n\n出现方式\nBegin Production 替换合格兴趣点或在深海据点增加；Reestablish Core 可重建 Ruined Core；相应特质完成挑战也能建立核心。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost、Orc Camp、Abyssal City、Aberrant Factory、Mobile Factory（驻地）。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./aberrant-metal/icon_power_coreb.png\" />",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Unnatural Clouds",
          "image": "./aberrant-metal/image_factoryevent2.jpg",
          "text": "反常的烟云笼罩城市，居民的恐惧给 Agent 留下散布谣言与牟利的机会。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当地是人类聚居地\n并且 当前神祇是 Aberrant Metal\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 > 10\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 < 200",
          "eventOptions": [
            {
              "name": "Continue on.",
              "text": "无效果。"
            },
            {
              "name": "Spread rumors of black magic.",
              "text": "A的任务进度−15。\nA Menace +10。\n当地 Unrest 强度 +30。"
            },
            {
              "name": "Ease their fears.",
              "text": "75%：A的任务进度−15。\nA Menace −10。\n\n25%：A的任务进度−15。"
            },
            {
              "name": "Swindle them.",
              "text": "50%：A的任务进度−15。\nA Menace +10。\n\n50%：A的任务进度−15。\nA 金币 +15。\nA Menace −10。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-aberrant-metal-factory-god-factorymidsmog1",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorymidsmog1",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/mid_factorysmog1.json",
        "condition": "is_human & is_god_factory & !is_aberrant_factory & (modifier_level_factory_smog > 10) & (modifier_level_factory_smog < 200)",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当地是人类聚居地\n并且 当前神祇是 Aberrant Metal\n并且 不满足（当地是 <CrossReference name=\"Aberrant Factory\" href=\"?god=aberrant-metal#entry-aberrant-factory\" meta=\"地点\" text=\"城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。\n每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。\n防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。\n\n出现方式\nProduction Core 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。\n\n可能配置的兴趣点\nRepurposed Structures、Production Core、Ruined Core、Biometallic Mass、Churning Machinery。\n固定、随机与改建来源见各兴趣点。\" image=\"./aberrant-metal/icon_settlementfactory.png\" />）\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 > 10\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 < 200",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Oasis of Blue",
          "image": "./aberrant-metal/image_factoryevent4.jpg",
          "text": "<CrossReference name=\"Ward\" href=\"?god=aberrant-metal#entry-ward\" meta=\"地点修正\" text=\"抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。\" image=\"./aberrant-metal/./kalastrophe/driveBackShadow.png\" /> 或自然仪式保住了一小片蓝天，Agent 可以削弱这最后的防护。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当前神祇是 Aberrant Metal\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 < 50\n并且 （当地 <CrossReference name=\"Ward\" href=\"?god=aberrant-metal#entry-ward\" meta=\"地点修正\" text=\"抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。\" image=\"./aberrant-metal/./kalastrophe/driveBackShadow.png\" /> 强度 > 0；或者 当地 <CrossReference name=\"Nature Ritual\" href=\"?god=aberrant-metal#entry-nature-ritual-modifier\" meta=\"地点修正\" text=\"清除本地与相邻地点的 Eldritch Smog、Acid Rain 和 Contaminated Waters。可以通过 Corrupt Ritual 使其失效。\" image=\"./aberrant-metal/icon_elvencleanse.png\" /> 强度 > 0）\n并且 相邻地点 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度总和 > 24",
          "eventOptions": [
            {
              "name": "The skies remain untouched",
              "text": "无效果。"
            },
            {
              "name": "Seek the wards",
              "condition": "当前人物 Lore > 2\n并且 当地 <CrossReference name=\"Ward\" href=\"?god=aberrant-metal#entry-ward\" meta=\"地点修正\" text=\"抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。\" image=\"./aberrant-metal/./kalastrophe/driveBackShadow.png\" /> 强度 > 0",
              "text": "A的任务进度−20。\nA Menace +10。\n当地 <CrossReference name=\"Ward\" href=\"?god=aberrant-metal#entry-ward\" meta=\"地点修正\" text=\"抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。\" image=\"./aberrant-metal/./kalastrophe/driveBackShadow.png\" /> 强度 −50。"
            },
            {
              "name": "Weaken the ritual",
              "condition": "当前人物 Lore > 3\n并且 当地 <CrossReference name=\"Nature Ritual\" href=\"?god=aberrant-metal#entry-nature-ritual-modifier\" meta=\"地点修正\" text=\"清除本地与相邻地点的 Eldritch Smog、Acid Rain 和 Contaminated Waters。可以通过 Corrupt Ritual 使其失效。\" image=\"./aberrant-metal/icon_elvencleanse.png\" /> 强度 > 0",
              "text": "60%：A的任务进度−20。\nA Menace +10。\n当地 <CrossReference name=\"Nature Ritual\" href=\"?god=aberrant-metal#entry-nature-ritual-modifier\" meta=\"地点修正\" text=\"清除本地与相邻地点的 Eldritch Smog、Acid Rain 和 Contaminated Waters。可以通过 Corrupt Ritual 使其失效。\" image=\"./aberrant-metal/icon_elvencleanse.png\" /> 强度 −100。\n\n40%：A的任务进度−20。\nA Menace +10。"
            },
            {
              "name": "Spread fear",
              "text": "A的任务进度−10。\nA Menace +10。\n当地 Unrest 强度 +50。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-aberrant-metal-factory-god-factorymidsmog2",
          "eventGods": [
            "aberrant-metal"
          ],
          "baseGame": false
        },
        "source": "3320562229",
        "sourceName": "Aberrant Metal",
        "gods": [
          "aberrant-metal"
        ],
        "eventId": "Factory_God.factorymidsmog2",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0/mid_factorysmog2.json",
        "condition": "is_god_factory & (modifier_level_factory_smog < 50) & (modifier_level_ward > 0 | modifier_level_factory_nature_ritual > 0) & (modifier_level_neighboring_smog > 24)",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当前神祇是 Aberrant Metal\n并且 当地 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度 < 50\n并且 （当地 <CrossReference name=\"Ward\" href=\"?god=aberrant-metal#entry-ward\" meta=\"地点修正\" text=\"抑制从相邻地点传入的 Shadow，包括 Well of Shadows 的传播。强度达到 100 时，阻止来自相邻 Enshadowed 地点的这类自然传播。\" image=\"./aberrant-metal/./kalastrophe/driveBackShadow.png\" /> 强度 > 0；或者 当地 <CrossReference name=\"Nature Ritual\" href=\"?god=aberrant-metal#entry-nature-ritual-modifier\" meta=\"地点修正\" text=\"清除本地与相邻地点的 Eldritch Smog、Acid Rain 和 Contaminated Waters。可以通过 Corrupt Ritual 使其失效。\" image=\"./aberrant-metal/icon_elvencleanse.png\" /> 强度 > 0）\n并且 相邻地点 <CrossReference name=\"Eldritch Smog\" href=\"?god=aberrant-metal#entry-eldritch-smog\" meta=\"地点修正\" text=\"烟雾使当地 Shadow 每回合随机增加 0 至 0.05 × 强度 个百分点，最高 100%；也会侵蚀覆盖区域的纯净度。强度上限 300，废墟中仍保留。达到 100 时，英雄无法开始 Banish Production Core。\n普通传播门槛为 25，Smog-Bound 路线上为 10。沿路线的烟雾只向更靠近终点的路径地点输送。\" image=\"./aberrant-metal/icon_power_smog.png\" /> 强度总和 > 24",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "2980692812",
    "name": "Adolia, the Faceless Memory",
    "records": [
      {
        "entry": {
          "name": "Mass Delirium",
          "image": "./adolia/event_adolia0.jpg",
          "text": "饥饿而衣衫褴褛的人群喃喃念着 Adolia 的名字，仿佛已无法理解眼前世界。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Feed their delusions",
              "text": "当地 Shadow +50。\nA Menace +5。\nA的任务进度−15。"
            },
            {
              "name": "Rob them",
              "text": "A 金币 +50。\nA Menace +8。\nA的任务进度−10。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-mid1",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_mid1",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/mid_pareidolia1.json",
        "condition": "modifier_pareidolia & (!settlement_adolia)",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Social Decay",
          "image": "./adolia/event_adolia3.jpg",
          "text": "受 Adolia 影响的居民失去正常社会秩序，Agent 可以煽动、劫掠或藏身于混乱。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Fan the flames",
              "text": "当地 Unrest 强度 +50。\nA Menace +8。\nA Profile +5。\nA的任务进度−15。"
            },
            {
              "name": "Join in the looting",
              "text": "A 金币 +50。\nA Menace +5。\nA Profile +5。\nA的任务进度−10。"
            },
            {
              "name": "Hide in the chaos",
              "text": "A Menace −10。\nA Profile −10。\nA的任务进度−10。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-mid2",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_mid2",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/mid_pareidolia2.json",
        "condition": "modifier_pareidolia & (!settlement_adolia)",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Confused Vendor",
          "image": "./adolia/event_adolia6.jpg",
          "text": "商贩把熟悉的顾客与陌生事物混淆，Agent 可以帮助他，也可以利用他的错认。\n\n玩家 Agent 执行任务期间，在途中事件检查中抽取。\n\n触发条件\n当地是人类聚居地\n并且 当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "eventOptions": [
            {
              "name": "Do nothing",
              "text": "无效果。"
            },
            {
              "name": "Assist them",
              "text": "A Menace −10。\nA Profile −5。\nA的任务进度−15。"
            },
            {
              "name": "Take advantage of them",
              "text": "A 金币 +50。\nA Menace +5。\nA Profile +5。\nA的任务进度−15。"
            },
            {
              "name": "Purchase an item for cheap",
              "condition": "当前人物金币 > 29",
              "text": "66.67%：A 金币 −30。\n从普通物品池获得一件物品。\n\n33.33%：A 金币 −30。\n从稀有物品池获得一件物品。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-mid3",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_mid3",
        "type": "MIDCHALLENGE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/mid_pareidolia3.json",
        "condition": "is_human & modifier_pareidolia & (!settlement_adolia)",
        "decision": {
          "trigger": "玩家 Agent 执行任务期间，在途中事件检查中抽取。",
          "condition": "当地是人类聚居地\n并且 当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Aftermath",
          "image": "./adolia/event_adolia9.jpg",
          "text": "Agent 进入被 Adolia 吞没的聚居地，只见熟悉生活留下的空壳。\n\n玩家 Agent 移动进入地点时触发。\n\n触发条件\n当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />\n并且 不满足（当前人物是 Adolia 化身）",
          "eventOptions": [
            {
              "name": "Loot",
              "text": "12.5%：A 金币 +15。\n\n12.5%：A 金币 +30。\n\n50%：无效果。\n\n12.5%：从普通物品池获得一件物品。\n\n12.5%：从稀有物品池获得一件物品。"
            },
            {
              "name": "Rest",
              "text": "A Profile −10。\nA HP +5。"
            },
            {
              "name": "Keep moving",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-move-settlement",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_move_settlement",
        "type": "MOVE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/move_adolia_settlement.json",
        "condition": "settlement_adolia & !(is_agent_adolia)",
        "decision": {
          "trigger": "玩家 Agent 移动进入地点时触发。",
          "condition": "当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />\n并且 不满足（当前人物是 Adolia 化身）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Sighting",
          "image": "./adolia/event_adolia4.jpg",
          "text": "Adolia 的化身经过聚居地，被居民看作某个若隐若现的熟悉身影。\n\n玩家 Agent 移动进入地点时触发。\n\n触发条件\n当前人物是 Adolia 化身\n并且 当地是人类聚居地\n并且 不满足（地形为 Arctic）\n并且 不满足（地形为 Desert）",
          "eventOptions": [
            {
              "name": "Keep moving",
              "text": "无效果。"
            },
            {
              "name": "Give them a name",
              "text": "当地 Shadow +50。\nA Menace +10。\nA Profile +15。"
            },
            {
              "name": "Turn to face them",
              "text": "当地 Madness 强度 +100。\nA Menace +10。\nA Profile +15。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-move1",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_move1",
        "type": "MOVE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/move_adolia1.json",
        "condition": "is_agent_adolia & is_human & !is_arctic & !is_desert",
        "decision": {
          "trigger": "玩家 Agent 移动进入地点时触发。",
          "condition": "当前人物是 Adolia 化身\n并且 当地是人类聚居地\n并且 不满足（地形为 Arctic）\n并且 不满足（地形为 Desert）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Two Silent Ghosts",
          "image": "./adolia/event_adolia7.jpg",
          "text": "两个无声的身影远离文明，逐渐淡出旁人的注意。\n\n玩家 Agent 移动进入地点时触发。\n\n触发条件\n当前人物是 Adolia 化身\n并且 （当地是 City Ruins；或者 当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "eventOptions": [
            {
              "name": "Far from civilization their presence fades",
              "text": "A Menace −10。\nA Profile −15。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-move2",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_move2",
        "type": "MOVE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/move_adolia2.json",
        "condition": "is_agent_adolia & (is_city_ruins | settlement_adolia)",
        "decision": {
          "trigger": "玩家 Agent 移动进入地点时触发。",
          "condition": "当前人物是 Adolia 化身\n并且 （当地是 City Ruins；或者 当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Bewildered Bandits",
          "image": "./adolia/event_adolia5.jpg",
          "text": "困惑的强盗拦住 Agent，他们的认知已经被 Adolia 扭曲。\n\n玩家 Agent 移动进入地点时触发。\n\n触发条件\n当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）\n并且 不满足（当前人物是 Adolia 化身）\n并且 当地 Banditry 强度 > 0",
          "eventOptions": [
            {
              "name": "Give in to their demands",
              "text": "50%：失去全部 Gold。\n50%：无效果。"
            },
            {
              "name": "Manipulate them",
              "text": "25%：HP −4。\n25%：Gold +50。\n50%：无效果。"
            },
            {
              "name": "Try to run",
              "text": "50%：HP −3。\n50%：无效果。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-pareidolia-move1",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.pareidolia_move1",
        "type": "MOVE",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/move_pareidolia1.json",
        "condition": "modifier_pareidolia & !(settlement_adolia) & !(is_agent_adolia) & (modifier_level_banditry > 0)",
        "decision": {
          "trigger": "玩家 Agent 移动进入地点时触发。",
          "condition": "当地有 <CrossReference name=\"Pareidolia\" href=\"?god=adolia#entry-pareidolia-modifier\" meta=\"地点修正\" text=\"强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。\n当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。\nSubsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。\" image=\"./adolia/icon_pareidolia.png\" />\n并且 不满足（当地是 <CrossReference name=\"Subsumed Settlement\" href=\"?god=adolia#entry-subsumed-settlement\" meta=\"兴趣点\" text=\"由 Pareidolia 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 An Adolia。\n\n出现方式\n聚居地被 Pareidolia 吞没时加入。\n\n可出现地点\n[地点名] Adolia。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./adolia/set_adolia.png\" />）\n并且 不满足（当前人物是 Adolia 化身）\n并且 当地 Banditry 强度 > 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Something Familiar",
          "image": "./adolia/event_adolia2.jpg",
          "text": "感染 <CrossReference name=\"Faceless Memory\" href=\"?god=adolia#entry-faceless-memory\" meta=\"人物特质\" text=\"感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\nRecollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。\" /> 的人物看见熟悉的影子，把 Adolia 错认成亲人或旧日记忆。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物拥有 <CrossReference name=\"Faceless Memory\" href=\"?god=adolia#entry-faceless-memory\" meta=\"人物特质\" text=\"感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\nRecollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。\" />\n并且 回合 % 2 = 0",
          "eventOptions": [
            {
              "name": "A figment",
              "text": "无效果。"
            },
            {
              "name": "Family",
              "text": "个人 Shadow +100 个百分点；变为极端喜欢 Adolia；Power −1。",
              "condition": "神力 > 0"
            },
            {
              "name": "Adolia",
              "text": "个人 Shadow +100 个百分点；变为极端喜欢 Adolia；Power −1。",
              "condition": "当前人物 Shadow（%） > 99"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-person2",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_person2",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/person_adolia1.json",
        "condition": "has_malignant_memory & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物拥有 <CrossReference name=\"Faceless Memory\" href=\"?god=adolia#entry-faceless-memory\" meta=\"人物特质\" text=\"感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\nRecollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。\" />\n并且 回合 % 2 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Faceless Form",
          "image": "./adolia/event_adolia1.jpg",
          "text": "无面记忆不断侵蚀人物的自我，直至原本的人格和生命都可能消失。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物拥有 <CrossReference name=\"Faceless Memory\" href=\"?god=adolia#entry-faceless-memory\" meta=\"人物特质\" text=\"感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\nRecollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。\" />\n并且 回合 % 2 = 0",
          "eventOptions": [
            {
              "name": "It continues to eat away at %him...",
              "text": "无效果。"
            },
            {
              "name": "...Until there is nothing left",
              "text": "该人物死亡；Power +2。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-adolia-god-facelessmemory-adolia-person1",
          "eventGods": [
            "adolia"
          ],
          "baseGame": false
        },
        "source": "2980692812",
        "sourceName": "Adolia, the Faceless Memory",
        "gods": [
          "adolia"
        ],
        "eventId": "God_FacelessMemory.adolia_person1",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0/person_adolia2.json",
        "condition": "has_malignant_memory & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物拥有 <CrossReference name=\"Faceless Memory\" href=\"?god=adolia#entry-faceless-memory\" meta=\"人物特质\" text=\"感染初始强度为 0，每回合 +1；在下一回合开始时，达到 100 的非玩家人物转化为 Adolia。玩家 Agent 的感染固定为 100，可自行决定是否 Embrace Adolia。Chosen One 会在特质结算时摆脱感染。\n强度至少 25 且为 12 的倍数时，40% 概率移除一项 Adolia 以外的喜好或厌恶；另有 10% 概率造成 Cognitive Dissonance，使尚未极端喜欢 Adolia 的人物 Sanity −8，单位额外 Disrupted 3 回合。\nRecollection、Conceptual Bleed、污染疗法会使强度翻倍；Intrusive Thought 与 Recursive Growth 额外增加强度。正常疗法与个人治疗行动降低强度。Awareness 达到 100% 时，其他普通任务执行意愿降低向下取整的“感染强度 ÷ 2”。\" />\n并且 回合 % 2 = 0",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "3383875039",
    "name": "Alai, the Strings That Bind",
    "records": [
      {
        "entry": {
          "id": "event-god-alai-web-web-devour-attacking",
          "name": "Victory",
          "image": "./alai/event_combat_devour.jpg",
          "limit": "使用 Alai；我方人物作为进攻方获胜，败方是已经战死的非 Devoured 英雄或教士。",
          "text": "随着进攻者的打击，精神蛛丝抽向防守者。蛛网将其悬起，使其无法反抗，灵魂在 Alai 面前被撕开。伤势本应致命，但初生女神仍来得及把自己织入伤口，让对方不知不觉成为她的一部分。\n\nAgent 作为进攻者击败可吞噬的敌人、败方死亡时显示。",
          "eventOptions": [
            {
              "name": "Make them family",
              "text": "防守者满血复活并加入 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />；进攻者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Bind their will",
              "text": "防守者恢复满血、加入 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />，并成为进攻者的 Puppet 随从；进攻者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Leave the body where it lies",
              "text": "进攻者 Profile +20、Menace +25；防守者死亡。"
            },
            {
              "name": "Glory in the victory",
              "text": "进攻者 Profile +20、Menace +35；尚无 Infamous 时获得该特质；防守者死亡。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_devour_attacking",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_devour_attacking.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Agent 作为进攻者击败可吞噬的敌人、败方死亡时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-devour-defending",
          "name": "Victory",
          "image": "./alai/event_combat_devour.jpg",
          "limit": "使用 Alai；我方人物作为防守方获胜，败方是已经战死的非 Devoured 英雄或教士。",
          "text": "随着防守者的反击，精神蛛丝抽向进攻者。蛛网将其悬起，使其无法反抗，灵魂在 Alai 面前被撕开。伤势本应致命，但初生女神仍来得及把自己织入伤口，让对方成为她的一部分。\n\nAgent 作为防守者击败可吞噬的敌人、败方死亡时显示。",
          "eventOptions": [
            {
              "name": "Make them family",
              "text": "进攻者满血复活并加入 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />；防守者 Profile +15、Menace +20。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            },
            {
              "name": "Bind their will",
              "text": "进攻者恢复满血、加入 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />，并成为防守者的 Puppet 随从；防守者 Profile +15、Menace +20。"
            },
            {
              "name": "Leave the body for the rats and crows",
              "text": "败方进攻者 Profile +15、Menace +20，随后死亡。"
            },
            {
              "name": "Glory in the victory",
              "text": "败方进攻者 Profile +25、Menace +25；尚无 Infamous 时获得该特质，随后死亡。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_devour_defending",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_devour_defending.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Agent 作为防守者击败可吞噬的敌人、败方死亡时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-devour-noncontrolled",
          "name": "A Devoured Soul",
          "image": "./alai/event_combat_devour.jpg",
          "limit": "使用 Alai 并选择 Rebirth Venom；非受控 Devoured 在战斗中击杀非受控、非 Devoured 的英雄或教士。",
          "text": "受害者的生命在攻击下消逝时，Alai 的毒液渗入伤口。身体重新缝合，临死大脑最后的闪烁悄悄改换形状，抹去可能让她的孩子失和的仇怨与效忠。一场死亡变成了一次重新利用。\n\n非玩家人物杀死可吞噬的敌人，受害者被 Alai 复活并吞噬时显示。",
          "eventOptions": [
            {
              "name": "The brood grows",
              "text": "受害者满血复活并加入 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />，双方互相提高一级好感；退回一次英雄战死的恐慌累计量，默认 5 个百分点。若凶手所属社会是教团且受害者为教士，受害者改属该教团。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_devour_noncontrolled",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_devour_noncontrolled.json",
        "condition": "1=1",
        "decision": {
          "trigger": "非玩家人物杀死可吞噬的敌人，受害者被 Alai 复活并吞噬时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-undevour-noncontrolled",
          "name": "Unraveled",
          "image": "./alai/event_spoiler_5.jpg",
          "limit": "使用 Alai；Devoured 人物被 Remade 成员战斗击杀，受害者可以是玩家可控人物，但须为普通英雄、教士或 Agent。",
          "text": "Other 的仆从撕开受害者，Other 狂暴地扯走 Alai 的影响。两者都不习惯以对傀儡下达精神命令以外的方式交流，因此难以理解彼此。也许等 Remade 被清除后，才有机会再次示好或反击。\n\nRemade 杀死 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />，Other 移除受害者身上的 Alai 影响时显示。",
          "eventOptions": [
            {
              "name": "Why do They fight?",
              "text": "受害者满血复活、解除控制，个人 Shadow 清零，退出 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" /> 并恢复原家族；原家族不可用时归入黑暗势力的首个家族。受控 Agent 转为自主英雄。退回一次英雄战死的恐慌累计量，默认 5 个百分点。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_undevour_noncontrolled",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_undevour_noncontrolled.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Remade 杀死 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />，Other 移除受害者身上的 Alai 影响时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-madness",
          "name": "The Webs Consume",
          "image": "./alai/event_soul_tangle.jpg",
          "limit": "Alai's Madness 达到 300；当地为人类类聚居地，且尚无任何 Madness Effect。先产生一种随机后效，再显示对应叙事与本事件选项。",
          "text": "现实法则与居民心智一起，随 Alai 的意志扭曲。侵入性的念头、白日梦和秘而不宣的恐惧同样化为现实，预示一个以思想取代规则的新世界。\n六种专属随机形态各占 1/6；选项不会重新抽取形态，具体效果见对应修正。\n\nAlai 的 Madness 达到 300 并产生专属长期结果时显示。",
          "eventOptions": [
            {
              "name": "Life continues, changed",
              "text": "无效果。"
            },
            {
              "name": "The cult leads the insane",
              "text": "当地发动内战，反抗所属国家。",
              "condition": "不满足（当地是首都）\n并且 当地 Infiltration（%） = 100"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_madness",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_madness.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Alai 的 Madness 达到 300 并产生专属长期结果时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-1",
          "name": "Chosen No More",
          "image": "./alai/event_chosen_devoured.jpg",
          "limit": "首次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "在 Alai 触及之前，某种不同的东西已经缠入此人的灵魂。它既不像固执，也不像冷漠，而像所有灵魂共有之物的纯粹凝结。她将其抚平、抹去，为自己腾出空间时，看见那个图案向远处旋去，延伸到她暂时够不到的地方。\n那似乎是某种与她相似的存在。\n该人物失去 Chosen One 身份。\n\n首次吞噬 Chosen One 时显示。",
          "eventOptions": [
            {
              "name": "A corpse?",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_1",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_1.json",
        "condition": "1=1",
        "decision": {
          "trigger": "首次吞噬 Chosen One 时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-2",
          "name": "Unweaving and Reweaving",
          "image": "./alai/event_chosen_devoured.jpg",
          "limit": "第二次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "此人的灵魂里也有先前 Chosen One 体内的存在，驱使其追逐某种目标。它似乎反对 Alai 的黑暗，却不在意和平与战争、生与死，甚至自身力量。何等精巧的存在，会只为反抗她而造出这样的构造？\n这次她开始拆解时，那存在挣扎起来。但她的 Agent 在场，肉身也已损伤过重；那存在终于像一个整体般撤退了。\n后续 Chosen One 获得 <CrossReference name=\"Accelerated Prophecy\" href=\"?god=alai#entry-accelerated-prophecy\" meta=\"人物特质\" text=\"获得时连续尝试补充三名 Embodiment，之后每逢全局回合号为 5 的倍数尝试补充一名。每次优先填入首个空随从槽，满员时替换最后一名 Sellsword 或 Knight。补充无需预留 Command 容量。\nthe Remade 以及相应剧情阶段的 Chosen One 可获得此能力。英雄或教士被 Devour 后，会失去此能力及已有 Embodiment。\" />：首次至多补入三个 Embodiment，此后每逢 5 的倍数回合尝试补入一个。\n\n第二次吞噬 Chosen One 时显示。",
          "eventOptions": [
            {
              "name": "It still lives?",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_2",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_2.json",
        "condition": "1=1",
        "decision": {
          "trigger": "第二次吞噬 Chosen One 时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-3",
          "name": "Another Consciousness",
          "image": "./alai/event_chosen_devoured.jpg",
          "limit": "第三次通过复活或转为 Puppet，吞噬当前 Chosen One。",
          "text": "Alai 开始理解寄居于此人的 Other。那是古老的存在，长久吸收并扭曲此地生命，已与世界其余部分无法区分。人类眼中的正常悲剧都是它的一部分，Alai 却明确不属于其中。它深深的停滞，难道是失去成长空间的必然结果？\n这次 Other 更快，也更坚决。\n\n第三次吞噬 Chosen One 时显示。",
          "eventOptions": [
            {
              "name": "A rival",
              "text": "结束后续特殊路线，继续常规游戏；后续 Chosen One 保留 <CrossReference name=\"Accelerated Prophecy\" href=\"?god=alai#entry-accelerated-prophecy\" meta=\"人物特质\" text=\"获得时连续尝试补充三名 Embodiment，之后每逢全局回合号为 5 的倍数尝试补充一名。每次优先填入首个空随从槽，满员时替换最后一名 Sellsword 或 Knight。补充无需预留 Command 容量。\nthe Remade 以及相应剧情阶段的 Chosen One 可获得此能力。英雄或教士被 Devour 后，会失去此能力及已有 Embodiment。\" />。"
            },
            {
              "name": "A sibling?",
              "text": "进入 An Exchange。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_3",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_3.json",
        "condition": "1=1",
        "decision": {
          "trigger": "第三次吞噬 Chosen One 时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-4",
          "name": "An Exchange",
          "image": "./alai/event_spoiler_4.jpg",
          "limit": "在 Another Consciousness 选择“A sibling?”后显示。",
          "text": "Alai 在 Other 边缘织入微小而无害的图案，作为示好。Other 停顿，把图案复刻到更深处，随后擦除它们，猛然从 Chosen One 中抽离，快得几乎把双方撕开。Alai 已调谐到它，能感到它对自己的存在作出激烈反应，震动传遍世界。\n\n节点 3 选择 A sibling? 后显示。",
          "eventOptions": [
            {
              "name": "Incompatible natures?",
              "text": "推进特殊路线，使至多三位合格战士英雄加入 Remade，获得 Remade 与 <CrossReference name=\"Accelerated Prophecy\" href=\"?god=alai#entry-accelerated-prophecy\" meta=\"人物特质\" text=\"获得时连续尝试补充三名 Embodiment，之后每逢全局回合号为 5 的倍数尝试补充一名。每次优先填入首个空随从槽，满员时替换最后一名 Sellsword 或 Knight。补充无需预留 Command 容量。\nthe Remade 以及相应剧情阶段的 Chosen One 可获得此能力。英雄或教士被 Devour 后，会失去此能力及已有 Embodiment。\" />。他们须为未受控、非 <CrossReference name=\"Devoured\" href=\"?god=alai#entry-devoured\" meta=\"人物特质\" text=\"成为 the Devoured 后，可受 Alai 的相关神力操纵；解除时优先恢复先前家族。担任统治者时，领地获得 Devoured Court，Security −2。\n受控人物可在同地对自主行动的 Devoured 英雄或教士使用 Ensnare，Chosen One 除外；持有的每名 Devoured Puppet 都可通过 Release 释放。人物移动和每回合结算时，相关仪式随当前位置与随从更新。解散随从或主人死亡时，仍存活的 Puppet 会返回主人最后所在地点。\" />、非当前 Chosen One 的人物。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_4",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_4.json",
        "condition": "1=1",
        "decision": {
          "trigger": "节点 3 选择 A sibling? 后显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-5",
          "name": "A Nexus of Threads",
          "image": "./alai/event_spoiler_5.jpg",
          "limit": "An Exchange 产生的 Remade 英雄已全部死亡、被吞噬或离开地图，且仍有人类类聚居地可用；下回合随机选取地点，建立 Other's Core。",
          "text": "Alai 拆开 Other 派来对抗她的灵魂，终于更清晰地看见其图案。与 Other 最紧密相连的人都在此地有家族或过往，即使此前毫无迹象。它的本质在这里纠结、结晶，才让它长久地看似死去。触及此地就能触及其核心，使它无处退避。\n\n特殊路线中吞噬 Remade 后，找到 Other 的核心所在地时显示。",
          "eventOptions": [
            {
              "name": "It is in sight",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_5",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_5.json",
        "condition": "1=1",
        "decision": {
          "trigger": "特殊路线中吞噬 Remade 后，找到 Other 的核心所在地时显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-6",
          "name": "A Million Crystallized Lives",
          "image": "./alai/event_spoiler_6.jpg",
          "limit": "Pierce the Other 完成。事件出现时，Other's Core 已移除，世界的抵抗行动已被压制。",
          "text": "Other 的核心在 Alai 面前展开，她看见它数千年前纳入的每个灵魂。那些灵魂以创伤、否认和自满回应它的苏醒，只剩下恢复记忆中旧貌的欲望，并将欲望回灌给它。也许不必是今天，也许命定如此，但一切再不会保持原样。\n此时世界的抵抗行动已被压制：净化、驱影、传播觉醒、抵御黑暗和组建联盟等行动倾向减少 2000，Chosen One 的休息倾向增加 2000。\n\n完成 Pierce the Other 后显示。",
          "eventOptions": [
            {
              "name": "Tear Them apart",
              "text": "进入 All is Unwound，继续抵抗力量已经衰弱的世界。"
            },
            {
              "name": "Reach out once more",
              "text": "进入 An Intermingling，随后可达成特殊胜利。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_6",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_6.json",
        "condition": "1=1",
        "decision": {
          "trigger": "完成 Pierce the Other 后显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-7",
          "name": "All is Unwound",
          "image": "./alai/event_spoiler_6.jpg",
          "limit": "在 A Million Crystallized Lives 选择“Tear Them apart”后显示。",
          "text": "Alai 对结晶灵魂的打击传遍 Other 的每个角落。这不足以杀死更强的存在，但 Other 长久以来仅靠对正常秩序的渴求维系；渴求消失后，几乎无物留存。Other 近乎温柔地消散，人类同时感到自由与暴露，直到新的图案开始穿过他们。\n\n节点 6 选择 Tear Them apart 后显示。",
          "eventOptions": [
            {
              "name": "The world is open",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_7",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_7.json",
        "condition": "1=1",
        "decision": {
          "trigger": "节点 6 选择 Tear Them apart 后显示。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-alai-web-web-spoiler-8",
          "name": "An Intermingling",
          "image": "./alai/event_spoiler_7.jpg",
          "limit": "在 A Million Crystallized Lives 选择“Reach out once more”后显示。",
          "text": "Other 在 Alai 的压力下拼命挣扎，绝望地刺入她的图案。她最接近反击的举动，只是在核心角落刻下微小无害的图案，和之前一样。\nOther 注意到了，忽然静止。\n抚平它核心里纠缠的痛苦、封闭与怀旧，是难以想象的漫长工作；两者以不朽的耐心完成它。终于，工作结束了。\n\n节点 6 选择 Reach out once more 后显示。",
          "eventOptions": [
            {
              "name": "They spiral out...",
              "text": "立即达成特殊胜利。两位神共同利用彼此在世界留下的联系，互相改变，把人类、大地与物理法则化为持续变化的共同创作。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "web-other",
            "name": "Alai · The Other",
            "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
          },
          "eventGods": [
            "alai"
          ],
          "baseGame": false
        },
        "source": "3383875039",
        "sourceName": "Alai, the Strings That Bind",
        "gods": [
          "alai"
        ],
        "eventId": "web.web_spoiler_8",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "web-other",
          "name": "Alai · The Other",
          "description": "多次吞噬 Chosen One 后接触 The Other，再由 Remade 路线与 Pierce the Other 决定结局。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3383875039/web_spoiler_8.json",
        "condition": "1=1",
        "decision": {
          "trigger": "节点 6 选择 Reach out once more 后显示。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "2879251084",
    "name": "Chandalor, the Cursed Bloom",
    "records": [
      {
        "entry": {
          "name": "Wicked Curses",
          "id": "event-god-chandalor-love-ho-triggered",
          "image": "./chandalor/curse_activateHO.png",
          "text": "被放逐的女巫回到人类土地，开始把诅咒、饥荒与动乱传播给居民。\n\n本局第一次有女巫在 Wicked Curses 教义处于 Elder 影响时进行回合结算，会显示此事件，告知女巫教团已经开始把诅咒传播到人类聚居地。",
          "eventOptions": [
            {
              "name": "A minor diversion.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "chandalor"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2879251084",
        "sourceName": "Chandalor, the Cursed Bloom",
        "gods": [
          "chandalor"
        ],
        "eventId": "love.ho_triggered",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2879251084/v2.0/curse_HO_triggered.json",
        "condition": "1=1",
        "decision": {
          "trigger": "本局第一次有女巫在 Wicked Curses 教义处于 Elder 影响时进行回合结算，会显示此事件，告知女巫教团已经开始把诅咒传播到人类聚居地。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "base",
    "name": "游戏本体",
    "records": [
      {
        "entry": {
          "name": "Fear and Paranoia",
          "text": "模组在世界恐慌首次超过 20% 时，于 the Elder Tomb 发出一次提示：有 Awareness 的人物更不愿前往外部势力的地点。提示本身没有选项或额外数值效果；相关行动意愿惩罚随 Awareness 与世界恐慌增加。\n\n模组在世界恐慌首次超过 20% 时，于 the Elder Tomb 发出一次提示：有 Awareness 的人物更不愿前往外部势力的地点。提示本身没有选项或额外数值效果；相关行动意愿惩罚随 Awareness 与世界恐慌增加。",
          "meta": "模组全局提示",
          "eventCategory": "gods",
          "id": "event-god-cordyceps-cordyceps-fearandparanoia",
          "eventOptions": [],
          "eventGods": [
            "cordyceps"
          ],
          "baseGame": true,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "base",
        "sourceName": "游戏本体",
        "gods": [
          "cordyceps"
        ],
        "eventId": "cordyceps.fearAndParanoia",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "God_Insect::FearAndParanoia",
        "condition": "",
        "decision": {
          "trigger": "模组在世界恐慌首次超过 20% 时，于 the Elder Tomb 发出一次提示：有 Awareness 的人物更不愿前往外部势力的地点。提示本身没有选项或额外数值效果；相关行动意愿惩罚随 Awareness 与世界恐慌增加。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "2900259087",
    "name": "Escamrak",
    "records": [
      {
        "entry": {
          "name": "The Second Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening2",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "献祭者的血肉重新缝合成 Escamrak 的神体，它再次从 Elder Tomb 中升起。\n\n模组事件。在第 2 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "Our flesh never dies.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening2",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening2.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 2 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Third Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening3",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "神体再度倒下，也再度站起；Escamrak 决意不断归来。\n\n模组事件。在第 3 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening3",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening3.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 3 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Fourth Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening4",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 4 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening4",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening4.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 4 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Fifth Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening5",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 5 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening5",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening5.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 5 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Sixth Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening6",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 6 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening6",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening6.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 6 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Seventh Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening7",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 7 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening7",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening7.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 7 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Eighth Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening8",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 8 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening8",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening8.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 8 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Ninth Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening9",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 9 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We are inevitable.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening9",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening9.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 9 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Last Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening-silly1",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 10 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "We never end.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening_silly1",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening_silly1.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 10 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Final Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening-silly2",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 11 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "Our will be done.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening_silly2",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening_silly2.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 11 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Ultimate Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening-silly3",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 12 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "All will be us.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening_silly3",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening_silly3.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 12 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "The Truly Last Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening-silly4",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 13 次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "Another assault.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening_silly4",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening_silly4.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 13 次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Yet Another Awakening",
          "id": "event-god-escamrak-flesh-fleshgod-awakening-silly5",
          "image": "./escamrak/flesh_awakeningart.png",
          "text": "Escamrak 的神体再次重建，人类又一次面对它的归来。\n\n模组事件。在第 14 次及以后每次建成神体时由代码直接触发。",
          "eventOptions": [
            {
              "name": "Another assault.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventChain": {
            "id": "flesh-awakening",
            "name": "Escamrak · Awakening",
            "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
          },
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.fleshgod_awakening_silly5",
        "type": "INERT",
        "category": "gods",
        "chain": {
          "id": "flesh-awakening",
          "name": "Escamrak · Awakening",
          "description": "按神体重建次数推进；每次建成神体只显示对应阶段。第 14 次及以后重复最后一段。"
        },
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_awakening_silly5.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。在第 14 次及以后每次建成神体时由代码直接触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Living Settlement",
          "id": "event-god-escamrak-flesh-livingcity-encroached",
          "image": "./escamrak/flesh_city_event.png",
          "text": "聚居地被血肉改造，骨骼与筋腱取代砖石，居民融入活体街道。\n\n模组事件。<CrossReference name=\"Living Terrain\" href=\"?god=escamrak#entry-living-terrain-modifier\" meta=\"地点修正\" text=\"强度达到 300 后向邻地扩散，人类聚居地转化为 Living Settlement；Orc Camp、Deep One Sanctum 和女巫聚落遭到摧毁。空地或城市废墟会成为 Twisted Landscape。在地点沦为废墟后保留。\" image=\"./escamrak/flesh_god_landcorruption.png\" /> 完成对人类聚居地的转化时触发。",
          "eventOptions": [
            {
              "name": "They are ours.",
              "text": "无效果。"
            },
            {
              "name": "Witness our flesh. [PAN TO LOCATION]",
              "text": "镜头转向事发地点。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.livingcity_encroached",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_corruptionencroachcity.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。<CrossReference name=\"Living Terrain\" href=\"?god=escamrak#entry-living-terrain-modifier\" meta=\"地点修正\" text=\"强度达到 300 后向邻地扩散，人类聚居地转化为 Living Settlement；Orc Camp、Deep One Sanctum 和女巫聚落遭到摧毁。空地或城市废墟会成为 Twisted Landscape。在地点沦为废墟后保留。\" image=\"./escamrak/flesh_god_landcorruption.png\" /> 完成对人类聚居地的转化时触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Revelry of the Body",
          "id": "event-god-escamrak-flesh-ho-triggered",
          "image": "./escamrak/flesh_HO_event.png",
          "text": "信徒把 Escamrak 的力量引入自己的肉体，以遗体和肉体重组创造新的生命。\n\n模组事件。首次启用 <CrossReference name=\"Revelry of the Body\" href=\"?god=escamrak#entry-revelry-of-the-body\" meta=\"宗教教义\" text=\"等级范围：-1 – 0。-1: Acolyte 获得 Endless Regrowth 并知晓 Fleshcrafting。每座 Temple 在当地存在 Death 时，每回合消耗 10 Death、增加 1 Madness；人口未达上限时增加 1 人口。抵消 Safety in Ignorance 对销毁 Arcane Secret 和 Escamrak Secret 的相应执行意愿加成。\" /> 的有效档位时触发。",
          "eventOptions": [
            {
              "name": "What new horrors will we birth?",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.ho_triggered",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_HO_triggered.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。首次启用 <CrossReference name=\"Revelry of the Body\" href=\"?god=escamrak#entry-revelry-of-the-body\" meta=\"宗教教义\" text=\"等级范围：-1 – 0。-1: Acolyte 获得 Endless Regrowth 并知晓 Fleshcrafting。每座 Temple 在当地存在 Death 时，每回合消耗 10 Death、增加 1 Madness；人口未达上限时增加 1 人口。抵消 Safety in Ignorance 对销毁 Arcane Secret 和 Escamrak Secret 的相应执行意愿加成。\" /> 的有效档位时触发。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Living Settlement",
          "id": "event-god-escamrak-flesh-livingcity",
          "image": "./escamrak/flesh_city_event.png",
          "text": "聚居地被血肉改造，骨骼与筋腱取代砖石，居民融入活体街道。\n\n模组事件。<CrossReference name=\"Fleshcrafters\" href=\"?god=escamrak#entry-fleshcrafters\" meta=\"地点修正\" text=\"等级为 1–3，强度上限为等级 × 100。达到 300 时，聚居地转化为 Living Settlement。人口会逐渐学会增产、治病、改造劳工和繁衍：对应粮食产出 ×（1 + 1.5 × 等级），一级至三级分别为 ×2.5、×4、×5.5、每回合 Plague −8 × 等级、Prosperity +0.75 且每回合 Madness +0.5、未达到人口或粮食承载上限时每回合人口 +1。\n强度不超过 100 时有机会向相邻非 Alliance 人类聚居地传播一级知识；当地人物也会逐渐知晓 Fleshcrafting。\n只要尚未学会增产或治病，或强度 >100 且尚未学会改造劳工，每回合检查新效果：Famine ≥125 时优先学会增产并减少 200 Famine；Plague ≥125 时学会治病并减少 200 Plague；强度 >100 且 Prosperity <35% 时学会改造劳工；强度 >100 且人口 <5 时学会繁衍。没有触发上述条件时，以 10% 概率从当前允许学习的效果中随机选择。\" image=\"./escamrak/fleshcraft.png\" /> 达到 300 并形成 <CrossReference name=\"Living Settlement\" href=\"?god=escamrak#entry-living-settlement\" meta=\"地点\" text=\"初始完全 Enshadowed，此后每回合恢复 10% Shadow；人口上限 250。城防尚未归零时，每回合恢复最大城防的 10%，最多 20。对当地实施夷平、掠夺或占领的非驻军，每回合受到向下取整的“人口 × 5%”伤害。\n苏醒后加入 Escamrak 的独立社会，每回合 Unrest、Political Agitation、Political Instability 各减少 25。清除 Banditry、Deep One Cult；统治者可 Study Living Settlement。\n\n出现方式\nFleshcrafters 或 Living Terrain 转化人类聚居地时建立，并保留原有兴趣点；Escamrak 的改造选项也可直接创建带 Farming Community 的新聚居地。\n\n可能配置的兴趣点\nTwisted Library。\n固定、随机与改建来源见各兴趣点。\" image=\"./escamrak/flesh_city.png\" /> 时触发。",
          "eventOptions": [
            {
              "name": "The city breathes.",
              "text": "无效果。"
            },
            {
              "name": "The city grows eyes. [PAN TO LOCATION]",
              "text": "镜头转向事发地点。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "escamrak"
          ],
          "baseGame": false
        },
        "source": "2900259087",
        "sourceName": "Escamrak",
        "gods": [
          "escamrak"
        ],
        "eventId": "flesh.livingcity",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0/flesh_livingcity.json",
        "condition": "1=1",
        "decision": {
          "trigger": "模组事件。<CrossReference name=\"Fleshcrafters\" href=\"?god=escamrak#entry-fleshcrafters\" meta=\"地点修正\" text=\"等级为 1–3，强度上限为等级 × 100。达到 300 时，聚居地转化为 Living Settlement。人口会逐渐学会增产、治病、改造劳工和繁衍：对应粮食产出 ×（1 + 1.5 × 等级），一级至三级分别为 ×2.5、×4、×5.5、每回合 Plague −8 × 等级、Prosperity +0.75 且每回合 Madness +0.5、未达到人口或粮食承载上限时每回合人口 +1。\n强度不超过 100 时有机会向相邻非 Alliance 人类聚居地传播一级知识；当地人物也会逐渐知晓 Fleshcrafting。\n只要尚未学会增产或治病，或强度 >100 且尚未学会改造劳工，每回合检查新效果：Famine ≥125 时优先学会增产并减少 200 Famine；Plague ≥125 时学会治病并减少 200 Plague；强度 >100 且 Prosperity <35% 时学会改造劳工；强度 >100 且人口 <5 时学会繁衍。没有触发上述条件时，以 10% 概率从当前允许学习的效果中随机选择。\" image=\"./escamrak/fleshcraft.png\" /> 达到 300 并形成 <CrossReference name=\"Living Settlement\" href=\"?god=escamrak#entry-living-settlement\" meta=\"地点\" text=\"初始完全 Enshadowed，此后每回合恢复 10% Shadow；人口上限 250。城防尚未归零时，每回合恢复最大城防的 10%，最多 20。对当地实施夷平、掠夺或占领的非驻军，每回合受到向下取整的“人口 × 5%”伤害。\n苏醒后加入 Escamrak 的独立社会，每回合 Unrest、Political Agitation、Political Instability 各减少 25。清除 Banditry、Deep One Cult；统治者可 Study Living Settlement。\n\n出现方式\nFleshcrafters 或 Living Terrain 转化人类聚居地时建立，并保留原有兴趣点；Escamrak 的改造选项也可直接创建带 Farming Community 的新聚居地。\n\n可能配置的兴趣点\nTwisted Library。\n固定、随机与改建来源见各兴趣点。\" image=\"./escamrak/flesh_city.png\" /> 时触发。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "2866026291",
    "name": "Ixthus, King of Cups",
    "records": [
      {
        "entry": {
          "name": "Eternal City",
          "text": "统治者为保住永恒统治，牺牲城市中的生命，把故乡变成寂静的 <CrossReference name=\"Eternal City\" href=\"?god=ixthus#entry-eternal-city\" meta=\"地点\" text=\"由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 Eternal Palace 与 Crypt Depths，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。\n\n出现方式\n统治者完成 Constitute Eternal City 后建立，增加 Eternal Palace、Crypt Depths，并接收旧地点的兴趣点。自身直接提供 Husk 招募与 Fund Eternal City，不继承普通聚居地任务列表。\n\n可能配置的兴趣点\nCrypt Depths、Eternal Palace。\n固定、随机与改建来源见各兴趣点。\" image=\"./ixthus/crypt_loc.png\" />。\n\n统治者完成 Constitute <CrossReference name=\"Eternal City\" href=\"?god=ixthus#entry-eternal-city\" meta=\"地点\" text=\"由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 Eternal Palace 与 Crypt Depths，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。\n\n出现方式\n统治者完成 Constitute Eternal City 后建立，增加 Eternal Palace、Crypt Depths，并接收旧地点的兴趣点。自身直接提供 Husk 招募与 Fund Eternal City，不继承普通聚居地任务列表。\n\n可能配置的兴趣点\nCrypt Depths、Eternal Palace。\n固定、随机与改建来源见各兴趣点。\" image=\"./ixthus/crypt_loc.png\" />、城市转化时显示；转化效果由统治者行动结算。",
          "meta": "模组事件 · other_become_eternal.json",
          "image": "./ixthus/city_collapse.png",
          "id": "event-god-ixthus-kingofcups-becomecrypt",
          "eventCategory": "gods",
          "eventOptions": [
            {
              "name": "All life will become everlasting",
              "text": "无效果。"
            }
          ],
          "eventGods": [
            "ixthus"
          ],
          "baseGame": false
        },
        "source": "2866026291",
        "sourceName": "Ixthus, King of Cups",
        "gods": [
          "ixthus"
        ],
        "eventId": "kingOfCups.becomeCrypt",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2866026291/other_become_eternal.json",
        "condition": "1=1",
        "decision": {
          "trigger": "统治者完成 Constitute <CrossReference name=\"Eternal City\" href=\"?god=ixthus#entry-eternal-city\" meta=\"地点\" text=\"由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 Eternal Palace 与 Crypt Depths，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。\n\n出现方式\n统治者完成 Constitute Eternal City 后建立，增加 Eternal Palace、Crypt Depths，并接收旧地点的兴趣点。自身直接提供 Husk 招募与 Fund Eternal City，不继承普通聚居地任务列表。\n\n可能配置的兴趣点\nCrypt Depths、Eternal Palace。\n固定、随机与改建来源见各兴趣点。\" image=\"./ixthus/crypt_loc.png\" />、城市转化时显示；转化效果由统治者行动结算。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "To Immortality!",
          "text": "人物饮下 <CrossReference name=\"Holy Grail\" href=\"?god=ixthus#entry-holy-grail\" meta=\"物品\" text=\"由 Quest for the Grail 或 Stolen Waters 获得。持有者获得 Grails Temptation；非精灵统治者持有时，所在地提供饮用行动。\" image=\"./ixthus/grail_item_0.png\" /> 后得到不死之身，却再也无法以沉睡或死亡逃离痛苦。\n\n完成 To Eternal Life!、人物饮下 <CrossReference name=\"Holy Grail\" href=\"?god=ixthus#entry-holy-grail\" meta=\"物品\" text=\"由 Quest for the Grail 或 Stolen Waters 获得。持有者获得 Grails Temptation；非精灵统治者持有时，所在地提供饮用行动。\" image=\"./ixthus/grail_item_0.png\" /> 时显示；永生效果由对应行动结算。",
          "meta": "模组事件 · other_drink_grail_ruler.json",
          "image": "./ixthus/drinkGrailFull.png",
          "id": "event-god-ixthus-kingofcups-drinkgrail",
          "eventCategory": "gods",
          "eventOptions": [
            {
              "name": "This blessing is a curse.",
              "text": "无效果。"
            }
          ],
          "eventGods": [
            "ixthus"
          ],
          "baseGame": false
        },
        "source": "2866026291",
        "sourceName": "Ixthus, King of Cups",
        "gods": [
          "ixthus"
        ],
        "eventId": "kingOfCups.drinkgrail",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2866026291/other_drink_grail_ruler.json",
        "condition": "1=1",
        "decision": {
          "trigger": "完成 To Eternal Life!、人物饮下 <CrossReference name=\"Holy Grail\" href=\"?god=ixthus#entry-holy-grail\" meta=\"物品\" text=\"由 Quest for the Grail 或 Stolen Waters 获得。持有者获得 Grails Temptation；非精灵统治者持有时，所在地提供饮用行动。\" image=\"./ixthus/grail_item_0.png\" /> 时显示；永生效果由对应行动结算。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "3192034838",
    "name": "Kalastrophe, the Shifting Calamity",
    "records": [
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-cthonian",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Hungry Earth\" href=\"?god=kalastrophe#entry-hungry-earth\" meta=\"神力\" text=\"把目标至多 100 点 Death 转移到世界上强度最高的 Geomantic Locus 所在地点；并列时取地图列表中最后一个。未找到 Locus 时返还 2 Power。\" image=\"./kalastrophe/Power_3_Cthonian.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Hungry Earth\" href=\"?god=kalastrophe#entry-hungry-earth\" meta=\"神力\" text=\"把目标至多 100 点 Death 转移到世界上强度最高的 Geomantic Locus 所在地点；并列时取地图列表中最后一个。未找到 Locus 时返还 2 Power。\" image=\"./kalastrophe/Power_3_Cthonian.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_cthonian",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_cthonian.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Hungry Earth\" href=\"?god=kalastrophe#entry-hungry-earth\" meta=\"神力\" text=\"把目标至多 100 点 Death 转移到世界上强度最高的 Geomantic Locus 所在地点；并列时取地图列表中最后一个。未找到 Locus 时返还 2 Power。\" image=\"./kalastrophe/Power_3_Cthonian.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-deepones",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Blacken Water\" href=\"?god=kalastrophe#entry-blacken-water\" meta=\"神力\" text=\"添加 Blackening Waters，持续吸收邻接聚居地的 Shadow，并压低 Sanctum 的 Menace。\" image=\"./kalastrophe/Power_3_DeepOne.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Blacken Water\" href=\"?god=kalastrophe#entry-blacken-water\" meta=\"神力\" text=\"添加 Blackening Waters，持续吸收邻接聚居地的 Shadow，并压低 Sanctum 的 Menace。\" image=\"./kalastrophe/Power_3_DeepOne.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_deepones",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_deepones.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Blacken Water\" href=\"?god=kalastrophe#entry-blacken-water\" meta=\"神力\" text=\"添加 Blackening Waters，持续吸收邻接聚居地的 Shadow，并压低 Sanctum 的 Menace。\" image=\"./kalastrophe/Power_3_DeepOne.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-discord",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Break Bonds\" href=\"?god=kalastrophe#entry-break-bonds\" meta=\"神力\" text=\"清除目标对人物、社会和家族的所有 Like、Love，改为中立；原有厌恶保留。\" image=\"./kalastrophe/Power_3_Discord.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Break Bonds\" href=\"?god=kalastrophe#entry-break-bonds\" meta=\"神力\" text=\"清除目标对人物、社会和家族的所有 Like、Love，改为中立；原有厌恶保留。\" image=\"./kalastrophe/Power_3_Discord.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_discord",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_discord.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Break Bonds\" href=\"?god=kalastrophe#entry-break-bonds\" meta=\"神力\" text=\"清除目标对人物、社会和家族的所有 Like、Love，改为中立；原有厌恶保留。\" image=\"./kalastrophe/Power_3_Discord.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-disease",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Intellectual Refutation\" href=\"?god=kalastrophe#entry-intellectual-refutation\" meta=\"神力\" text=\"统治者基础 Lore −1，使其更难积累 Plague Immunity。\" image=\"./kalastrophe/Power_3_Disease.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Intellectual Refutation\" href=\"?god=kalastrophe#entry-intellectual-refutation\" meta=\"神力\" text=\"统治者基础 Lore −1，使其更难积累 Plague Immunity。\" image=\"./kalastrophe/Power_3_Disease.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_disease",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_disease.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Intellectual Refutation\" href=\"?god=kalastrophe#entry-intellectual-refutation\" meta=\"神力\" text=\"统治者基础 Lore −1，使其更难积累 Plague Immunity。\" image=\"./kalastrophe/Power_3_Disease.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-dwarf",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Shadowed Dwellings\" href=\"?god=kalastrophe#entry-shadowed-dwellings\" meta=\"神力\" text=\"将目标人物的 Gold 清零。\" image=\"./kalastrophe/Power_3_Dwarf.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Shadowed Dwellings\" href=\"?god=kalastrophe#entry-shadowed-dwellings\" meta=\"神力\" text=\"将目标人物的 Gold 清零。\" image=\"./kalastrophe/Power_3_Dwarf.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_dwarf",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_dwarf.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Shadowed Dwellings\" href=\"?god=kalastrophe#entry-shadowed-dwellings\" meta=\"神力\" text=\"将目标人物的 Gold 清零。\" image=\"./kalastrophe/Power_3_Dwarf.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-elf",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Deaf Ears\" href=\"?god=kalastrophe#entry-deaf-ears\" meta=\"神力\" text=\"添加 Enduring Arrogance，持续约 50 回合，防止 Elven Arrogance 低于持续期间已达到的强度。\" image=\"./kalastrophe/Power_3_Elf.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Deaf Ears\" href=\"?god=kalastrophe#entry-deaf-ears\" meta=\"神力\" text=\"添加 Enduring Arrogance，持续约 50 回合，防止 Elven Arrogance 低于持续期间已达到的强度。\" image=\"./kalastrophe/Power_3_Elf.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_elf",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_elf.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Deaf Ears\" href=\"?god=kalastrophe#entry-deaf-ears\" meta=\"神力\" text=\"添加 Enduring Arrogance，持续约 50 回合，防止 Elven Arrogance 低于持续期间已达到的强度。\" image=\"./kalastrophe/Power_3_Elf.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-human",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Fickle Hearts\" href=\"?god=kalastrophe#entry-fickle-hearts\" meta=\"神力\" text=\"把目标对 Elf 或 Dwarf 的偏好降低一级；从尚未厌恶的种族中选择，两者均符合时等概率随机。该方式最低降至 Dislike。\" image=\"./kalastrophe/Power_3_Human.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Fickle Hearts\" href=\"?god=kalastrophe#entry-fickle-hearts\" meta=\"神力\" text=\"把目标对 Elf 或 Dwarf 的偏好降低一级；从尚未厌恶的种族中选择，两者均符合时等概率随机。该方式最低降至 Dislike。\" image=\"./kalastrophe/Power_3_Human.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_human",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_human.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Fickle Hearts\" href=\"?god=kalastrophe#entry-fickle-hearts\" meta=\"神力\" text=\"把目标对 Elf 或 Dwarf 的偏好降低一级；从尚未厌恶的种族中选择，两者均符合时等概率随机。该方式最低降至 Dislike。\" image=\"./kalastrophe/Power_3_Human.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-orc",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Orcish Diplomacy\" href=\"?god=kalastrophe#entry-orcish-diplomacy\" meta=\"神力\" text=\"所属 Orc Horde 的社会 Menace −50，最低 0；各邻国对该部落的关系 +35 个百分点，最高 100%。\" image=\"./kalastrophe/Power_3_Orc.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Orcish Diplomacy\" href=\"?god=kalastrophe#entry-orcish-diplomacy\" meta=\"神力\" text=\"所属 Orc Horde 的社会 Menace −50，最低 0；各邻国对该部落的关系 +35 个百分点，最高 100%。\" image=\"./kalastrophe/Power_3_Orc.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_orc",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_orc.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Orcish Diplomacy\" href=\"?god=kalastrophe#entry-orcish-diplomacy\" meta=\"神力\" text=\"所属 Orc Horde 的社会 Menace −50，最低 0；各邻国对该部落的关系 +35 个百分点，最高 100%。\" image=\"./kalastrophe/Power_3_Orc.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-shadow",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Defile\" href=\"?god=kalastrophe#entry-defile\" meta=\"神力\" text=\"把 Holy Site 的 Consecrate 行动替换为不可执行的 Shattered Beliefs。\" image=\"./kalastrophe/Power_3_Shadow.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Defile\" href=\"?god=kalastrophe#entry-defile\" meta=\"神力\" text=\"把 Holy Site 的 Consecrate 行动替换为不可执行的 Shattered Beliefs。\" image=\"./kalastrophe/Power_3_Shadow.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_shadow",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_shadow.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Defile\" href=\"?god=kalastrophe#entry-defile\" meta=\"神力\" text=\"把 Holy Site 的 Consecrate 行动替换为不可执行的 Shattered Beliefs。\" image=\"./kalastrophe/Power_3_Shadow.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Assist",
          "id": "event-god-kalastrophe-mirror-power2-undead",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Gather the Dead\" href=\"?god=kalastrophe#entry-gather-the-dead\" meta=\"神力\" text=\"清空距目标 1–2 步地点的 Death 强度，并向目标集中其中至多 150 点；超出接收上限的部分消失。目标原有 Death 保留。\" image=\"./kalastrophe/Power_3_Undead.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Gather the Dead\" href=\"?god=kalastrophe#entry-gather-the-dead\" meta=\"神力\" text=\"清空距目标 1–2 步地点的 Death 强度，并向目标集中其中至多 150 点；超出接收上限的部分消失。目标原有 Death 保留。\" image=\"./kalastrophe/Power_3_Undead.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power2_undead",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_2_undead.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Assist\" href=\"?god=kalastrophe#entry-a-power-to-assist\" meta=\"神力\" text=\"读取目标的专长，打开神力预览；确认后替换为相应分支。多个受支持专长可自行选择，目标保留原有专长。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Gather the Dead\" href=\"?god=kalastrophe#entry-gather-the-dead\" meta=\"神力\" text=\"清空距目标 1–2 步地点的 Death 强度，并向目标集中其中至多 150 点；超出接收上限的部分消失。目标原有 Death 保留。\" image=\"./kalastrophe/Power_3_Undead.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-ambition",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Embolden\" href=\"?god=kalastrophe#entry-embolden\" meta=\"神力\" text=\"使英雄立即转向其效用最高、正面标签含 Ambition 的可用任务；统治者改做对应的地方行动，首都还会检查国家行动。中断原行动并重置相应进度；未找到目标行动或已在进行目标行动时，按对应分支返还费用。\" image=\"./kalastrophe/Power_4_Ambition.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Embolden\" href=\"?god=kalastrophe#entry-embolden\" meta=\"神力\" text=\"使英雄立即转向其效用最高、正面标签含 Ambition 的可用任务；统治者改做对应的地方行动，首都还会检查国家行动。中断原行动并重置相应进度；未找到目标行动或已在进行目标行动时，按对应分支返还费用。\" image=\"./kalastrophe/Power_4_Ambition.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_ambition",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_ambition.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Embolden\" href=\"?god=kalastrophe#entry-embolden\" meta=\"神力\" text=\"使英雄立即转向其效用最高、正面标签含 Ambition 的可用任务；统治者改做对应的地方行动，首都还会检查国家行动。中断原行动并重置相应进度；未找到目标行动或已在进行目标行动时，按对应分支返还费用。\" image=\"./kalastrophe/Power_4_Ambition.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-combat",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Bloodlust\" href=\"?god=kalastrophe#entry-bloodlust\" meta=\"神力\" text=\"赋予持续 20 回合的 Bloodlust，重复施放使剩余时间再增加 20 回合。\" image=\"./kalastrophe/Power_4_Combat.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Bloodlust\" href=\"?god=kalastrophe#entry-bloodlust\" meta=\"神力\" text=\"赋予持续 20 回合的 Bloodlust，重复施放使剩余时间再增加 20 回合。\" image=\"./kalastrophe/Power_4_Combat.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_combat",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_combat.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Bloodlust\" href=\"?god=kalastrophe#entry-bloodlust\" meta=\"神力\" text=\"赋予持续 20 回合的 Bloodlust，重复施放使剩余时间再增加 20 回合。\" image=\"./kalastrophe/Power_4_Combat.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-cooperation",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Greener Pastures\" href=\"?god=kalastrophe#entry-greener-pastures\" meta=\"神力\" text=\"移除聚居地，将全部人口变为 Refugees。若原统治者没有人物单位，则使其成为流亡统治者。\" image=\"./kalastrophe/Power_4_Cooperation.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Greener Pastures\" href=\"?god=kalastrophe#entry-greener-pastures\" meta=\"神力\" text=\"移除聚居地，将全部人口变为 Refugees。若原统治者没有人物单位，则使其成为流亡统治者。\" image=\"./kalastrophe/Power_4_Cooperation.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_cooperation",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_cooperation.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Greener Pastures\" href=\"?god=kalastrophe#entry-greener-pastures\" meta=\"神力\" text=\"移除聚居地，将全部人口变为 Refugees。若原统治者没有人物单位，则使其成为流亡统治者。\" image=\"./kalastrophe/Power_4_Cooperation.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-cruelty",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Death to Tyrants\" href=\"?god=kalastrophe#entry-death-to-tyrants\" meta=\"神力\" text=\"所属国家除首都以外的每个 City 增加 35 点 Political Agitation。没有符合条件的城市时返还 3 Power。\" image=\"./kalastrophe/Power_4_Cruelty.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Death to Tyrants\" href=\"?god=kalastrophe#entry-death-to-tyrants\" meta=\"神力\" text=\"所属国家除首都以外的每个 City 增加 35 点 Political Agitation。没有符合条件的城市时返还 3 Power。\" image=\"./kalastrophe/Power_4_Cruelty.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_cruelty",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_cruelty.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Death to Tyrants\" href=\"?god=kalastrophe#entry-death-to-tyrants\" meta=\"神力\" text=\"所属国家除首都以外的每个 City 增加 35 点 Political Agitation。没有符合条件的城市时返还 3 Power。\" image=\"./kalastrophe/Power_4_Cruelty.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-danger",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Paranoia\" href=\"?god=kalastrophe#entry-paranoia\" meta=\"神力\" text=\"赋予 Paranoia，持续 20 回合；重复施放延长 20 回合。\" image=\"./kalastrophe/Power_4_Danger.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Paranoia\" href=\"?god=kalastrophe#entry-paranoia\" meta=\"神力\" text=\"赋予 Paranoia，持续 20 回合；重复施放延长 20 回合。\" image=\"./kalastrophe/Power_4_Danger.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_danger",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_danger.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Paranoia\" href=\"?god=kalastrophe#entry-paranoia\" meta=\"神力\" text=\"赋予 Paranoia，持续 20 回合；重复施放延长 20 回合。\" image=\"./kalastrophe/Power_4_Danger.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-gold",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Hidden Hoard\" href=\"?god=kalastrophe#entry-hidden-hoard\" meta=\"神力\" text=\"创建强度 300 的 Hidden Hoard，吸引英雄执行 Pillage Hoard。\" image=\"./kalastrophe/Power_4_Gold.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Hidden Hoard\" href=\"?god=kalastrophe#entry-hidden-hoard\" meta=\"神力\" text=\"创建强度 300 的 Hidden Hoard，吸引英雄执行 Pillage Hoard。\" image=\"./kalastrophe/Power_4_Gold.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_gold",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_gold.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Hidden Hoard\" href=\"?god=kalastrophe#entry-hidden-hoard\" meta=\"神力\" text=\"创建强度 300 的 Hidden Hoard，吸引英雄执行 Pillage Hoard。\" image=\"./kalastrophe/Power_4_Gold.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-madness",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Seed of Chaos\" href=\"?god=kalastrophe#entry-seed-of-chaos\" meta=\"神力\" text=\"赋予 Seed of Chaos，使下次疯狂等级上升后最多追加两次疯狂。\" image=\"./kalastrophe/Power_4_Madness.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Seed of Chaos\" href=\"?god=kalastrophe#entry-seed-of-chaos\" meta=\"神力\" text=\"赋予 Seed of Chaos，使下次疯狂等级上升后最多追加两次疯狂。\" image=\"./kalastrophe/Power_4_Madness.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_madness",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_madness.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Seed of Chaos\" href=\"?god=kalastrophe#entry-seed-of-chaos\" meta=\"神力\" text=\"赋予 Seed of Chaos，使下次疯狂等级上升后最多追加两次疯狂。\" image=\"./kalastrophe/Power_4_Madness.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Interfere",
          "id": "event-god-kalastrophe-mirror-power4-religion",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Profane Rituals\" href=\"?god=kalastrophe#entry-profane-rituals\" meta=\"神力\" text=\"将所在地聚居地化为废墟，并把当前 Power 补至上限。\" image=\"./kalastrophe/Power_4_Religion.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Profane Rituals\" href=\"?god=kalastrophe#entry-profane-rituals\" meta=\"神力\" text=\"将所在地聚居地化为废墟，并把当前 Power 补至上限。\" image=\"./kalastrophe/Power_4_Religion.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power4_religion",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_4_religion.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Interfere\" href=\"?god=kalastrophe#entry-a-power-to-interfere\" meta=\"神力\" text=\"读取人物的性格偏好，打开神力预览；确认后替换为相应分支。多个非中立偏好可自行选择，人物的原偏好保留。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Profane Rituals\" href=\"?god=kalastrophe#entry-profane-rituals\" meta=\"神力\" text=\"将所在地聚居地化为废墟，并把当前 Power 补至上限。\" image=\"./kalastrophe/Power_4_Religion.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Terrorize",
          "id": "event-god-kalastrophe-mirror-power6-destruction",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Spread the Flames\" href=\"?god=kalastrophe#entry-spread-the-flames\" meta=\"神力\" text=\"当地 Devastation 立即 +100。施放后强度达到 300 且仍有聚居地时，摧毁该聚居地，并向每个相邻的人类类聚居地各加入“当前强度 −300”点 Devastation。\" image=\"./kalastrophe/Power_8_Destruction.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Spread the Flames\" href=\"?god=kalastrophe#entry-spread-the-flames\" meta=\"神力\" text=\"当地 Devastation 立即 +100。施放后强度达到 300 且仍有聚居地时，摧毁该聚居地，并向每个相邻的人类类聚居地各加入“当前强度 −300”点 Devastation。\" image=\"./kalastrophe/Power_8_Destruction.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power6_destruction",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_6_destruction.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Spread the Flames\" href=\"?god=kalastrophe#entry-spread-the-flames\" meta=\"神力\" text=\"当地 Devastation 立即 +100。施放后强度达到 300 且仍有聚居地时，摧毁该聚居地，并向每个相邻的人类类聚居地各加入“当前强度 −300”点 Devastation。\" image=\"./kalastrophe/Power_8_Destruction.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Terrorize",
          "id": "event-god-kalastrophe-mirror-power6-fallenheroes",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Recurring Pain\" href=\"?god=kalastrophe#entry-recurring-pain\" meta=\"神力\" text=\"世界上所有仍存活且带 Mourning 的人物失去 2 Sanity；若该哀悼记录了凶手，则改为失去 3 Sanity。每人只检查第一项 Mourning。\" image=\"./kalastrophe/Power_8_Fallen.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Recurring Pain\" href=\"?god=kalastrophe#entry-recurring-pain\" meta=\"神力\" text=\"世界上所有仍存活且带 Mourning 的人物失去 2 Sanity；若该哀悼记录了凶手，则改为失去 3 Sanity。每人只检查第一项 Mourning。\" image=\"./kalastrophe/Power_8_Fallen.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power6_fallenheroes",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_6_fallenheroes.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Recurring Pain\" href=\"?god=kalastrophe#entry-recurring-pain\" meta=\"神力\" text=\"世界上所有仍存活且带 Mourning 的人物失去 2 Sanity；若该哀悼记录了凶手，则改为失去 3 Sanity。每人只检查第一项 Mourning。\" image=\"./kalastrophe/Power_8_Fallen.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Terrorize",
          "id": "event-god-kalastrophe-mirror-power6-shadow",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Collapse Ward\" href=\"?god=kalastrophe#entry-collapse-ward\" meta=\"神力\" text=\"移除当地 Ward。\" image=\"./kalastrophe/Power_8_Shadow.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Collapse Ward\" href=\"?god=kalastrophe#entry-collapse-ward\" meta=\"神力\" text=\"移除当地 Ward。\" image=\"./kalastrophe/Power_8_Shadow.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power6_shadow",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_6_shadow.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Collapse Ward\" href=\"?god=kalastrophe#entry-collapse-ward\" meta=\"神力\" text=\"移除当地 Ward。\" image=\"./kalastrophe/Power_8_Shadow.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Power to Terrorize",
          "id": "event-god-kalastrophe-mirror-power6-underground",
          "image": "./kalastrophe/God_Select.png",
          "text": "玩家为 Kalastrophe 选定神力后，检查预览并决定是否确认。\n\n使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Implode\" href=\"?god=kalastrophe#entry-implode\" meta=\"神力\" text=\"摧毁当地聚居地，使地表出现火山破坏痕迹，并将 Awareness of the Underground 推至 100%。\" image=\"./kalastrophe/Power_8_Underground.png\" /> 后出现确认。",
          "eventOptions": [
            {
              "name": "Confirm This Power",
              "text": "将该选择位替换为 <CrossReference name=\"Implode\" href=\"?god=kalastrophe#entry-implode\" meta=\"神力\" text=\"摧毁当地聚居地，使地表出现火山破坏痕迹，并将 Awareness of the Underground 推至 100%。\" image=\"./kalastrophe/Power_8_Underground.png\" />。"
            },
            {
              "name": "Never mind",
              "text": "取消选择，保留待选择状态。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "kalastrophe"
          ],
          "baseGame": false
        },
        "source": "3192034838",
        "sourceName": "Kalastrophe, the Shifting Calamity",
        "gods": [
          "kalastrophe"
        ],
        "eventId": "mirror.power6_underground",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0/selectpower_6_underground.json",
        "condition": "1=1",
        "decision": {
          "trigger": "使用 <CrossReference name=\"A Power to Terrorize\" href=\"?god=kalastrophe#entry-a-power-to-terrorize\" meta=\"神力\" text=\"根据目标开启分支预览：the Elder Tomb 对应 Collapse Ward；City Ruins 对应 Spread the Flames；英雄对应 Recurring Pain；上下层 Tunnels 对应 Implode。确认后替换此神力。\" image=\"./kalastrophe/Power_0_Blank.png\" />，选择 <CrossReference name=\"Implode\" href=\"?god=kalastrophe#entry-implode\" meta=\"神力\" text=\"摧毁当地聚居地，使地表出现火山破坏痕迹，并将 Awareness of the Underground 推至 100%。\" image=\"./kalastrophe/Power_8_Underground.png\" /> 后出现确认。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "2879249746",
    "name": "The Living Void",
    "records": [
      {
        "entry": {
          "name": "Sealed Rift",
          "image": "./living-void/void_riftclosed.png",
          "text": "英雄封闭了 <CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" />，世界的结构开始填补 <CrossReference name=\"Living Void\" href=\"?god=living-void#entry-living-void\" meta=\"地点\" text=\"Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。\n\n出现方式\nVacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。\" image=\"./living-void/void_livingvoid.png\" /> 曾占据的空洞。\n\n英雄彻底消除 <CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 时显示的结果事件。",
          "eventOptions": [
            {
              "name": "A foothold has been lost.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-living-void-vaccuum-hungryriftsealed",
          "eventGods": [
            "living-void"
          ],
          "baseGame": false
        },
        "source": "2879249746",
        "sourceName": "The Living Void",
        "gods": [
          "living-void"
        ],
        "eventId": "vaccuum.hungryriftsealed",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0/void_rift_sealed.json",
        "condition": "1=1",
        "decision": {
          "trigger": "英雄彻底消除 <CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 时显示的结果事件。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Matured Rift",
          "image": "./living-void/void_rupture_fullimage.png",
          "text": "裂隙终于吞噬到足够规模，永久的 <CrossReference name=\"World Rupture\" href=\"?god=living-void#entry-world-rupture\" meta=\"地点\" text=\"Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 Nothing from Something，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 Seal Rupture 将其彻底关闭。\n\n出现方式\nHungry Rift 到达危机阈值后替换原地点，并清除该处修正。\" image=\"./living-void/void_worldrupture.png\" /> 留在现实中。\n\n<CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 达到 300% 并转化为 <CrossReference name=\"World Rupture\" href=\"?god=living-void#entry-world-rupture\" meta=\"地点\" text=\"Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 Nothing from Something，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 Seal Rupture 将其彻底关闭。\n\n出现方式\nHungry Rift 到达危机阈值后替换原地点，并清除该处修正。\" image=\"./living-void/void_worldrupture.png\" /> 时显示的结果事件。",
          "eventOptions": [
            {
              "name": "A foothold has been established.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "id": "event-god-living-void-vaccuum-worldruptureforms",
          "eventGods": [
            "living-void"
          ],
          "baseGame": false
        },
        "source": "2879249746",
        "sourceName": "The Living Void",
        "gods": [
          "living-void"
        ],
        "eventId": "vaccuum.worldruptureforms",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0/void_rift_maxsize.json",
        "condition": "1=1",
        "decision": {
          "trigger": "<CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 达到 300% 并转化为 <CrossReference name=\"World Rupture\" href=\"?god=living-void#entry-world-rupture\" meta=\"地点\" text=\"Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 Nothing from Something，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 Seal Rupture 将其彻底关闭。\n\n出现方式\nHungry Rift 到达危机阈值后替换原地点，并清除该处修正。\" image=\"./living-void/void_worldrupture.png\" /> 时显示的结果事件。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Seekers of the New World",
          "image": "./living-void/void_HO.png",
          "id": "event-god-living-void-vacuum-hoseekersnewworld",
          "text": "教团相信自己能创造更好的世界，在礼拜堂中撕开了通向 <CrossReference name=\"Living Void\" href=\"?god=living-void#entry-living-void\" meta=\"地点\" text=\"Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。\n\n出现方式\nVacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。\" image=\"./living-void/void_livingvoid.png\" /> 的裂隙。\n\n本局第一次由宗教任务开启 <CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 时显示，记录教团开始以新世界教义协助 <CrossReference name=\"Living Void\" href=\"?god=living-void#entry-living-void\" meta=\"地点\" text=\"Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。\n\n出现方式\nVacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。\" image=\"./living-void/void_livingvoid.png\" />。",
          "eventOptions": [
            {
              "name": "They usher Us in",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "living-void"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2879249746",
        "sourceName": "The Living Void",
        "gods": [
          "living-void"
        ],
        "eventId": "vacuum.hoSeekersNewWorld",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0/void_HO_riftmaking.json",
        "condition": "1=1",
        "decision": {
          "trigger": "本局第一次由宗教任务开启 <CrossReference name=\"Hungry Rift\" href=\"?god=living-void#entry-hungry-rift\" meta=\"地点修正\" text=\"强度达到 300 时摧毁当地人类聚居地，清除全部地点修正并形成 World Rupture。Shadow 提高 Seal Rift 的复杂度，并降低 Expand Rift 的 Profile 与 Menace。英雄对裂隙的反应取决于其历史最高强度。\" image=\"./living-void/void_riftmodifier.png\" /> 时显示，记录教团开始以新世界教义协助 <CrossReference name=\"Living Void\" href=\"?god=living-void#entry-living-void\" meta=\"地点\" text=\"Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。\n\n出现方式\nVacuum Collapse 从 Great Wound 或 World Rupture 向外扩展时形成。\" image=\"./living-void/void_livingvoid.png\" />。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Vacuum Collapse",
          "image": "./living-void/god_background.png",
          "id": "event-god-living-void-vaccuum-vacuumcollapsed-city",
          "text": "聚居地被湮灭的浪潮吞没，物质与居民一同消失，只剩虚空。\n\n每局第一次由 Vacuum Collapse 吞噬人类聚居地时显示。",
          "eventOptions": [
            {
              "name": "They were the first. But they will not be the last.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "living-void"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "2879249746",
        "sourceName": "The Living Void",
        "gods": [
          "living-void"
        ],
        "eventId": "vaccuum.vacuumcollapsed_city",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0/void_collapse_destroyfirstcity.json",
        "condition": "1=1",
        "decision": {
          "trigger": "每局第一次由 Vacuum Collapse 吞噬人类聚居地时显示。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "3591348120",
    "name": "MEKHANE, the Broken God",
    "records": [
      {
        "entry": {
          "name": "The Other Half",
          "id": "event-god-mekhane-god-mekhane-sarkic",
          "text": "另一半古老的血肉信仰开始苏醒，Sarkics 是否参与这场世界争夺由玩家决定。\n\n第 10 回合出现；选择是否让 Sarkics 加入本局。",
          "image": "./mekhane/event_Sarkic.jpg",
          "eventOptions": [
            {
              "name": "Something stirs within them.",
              "text": "创建 Sarkic Cult 与其敌对发展路线。"
            },
            {
              "name": "They pass through history.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "mekhane"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "3591348120",
        "sourceName": "MEKHANE, the Broken God",
        "gods": [
          "mekhane"
        ],
        "eventId": "God_MEKHANE.sarkic",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0/world_sarkicsStirring.json",
        "condition": "1=1",
        "decision": {
          "trigger": "第 10 回合出现；选择是否让 Sarkics 加入本局。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "A Foundation",
          "id": "event-god-mekhane-god-mekhane-foundation",
          "text": "人类的联盟中出现新的收容组织，准备以 Foundation 对抗 MEKHANE。\n\nAlliance 成立后出现一次，选择是否启用 Foundation 的收容与重新封印路线。",
          "image": "./mekhane/event_Foundation.jpg",
          "eventOptions": [
            {
              "name": "A new threat emerges.",
              "text": "启用 Foundation；<CrossReference name=\"Containment Vault\" href=\"?god=mekhane#entry-sub-mek-vault\" meta=\"兴趣点\" text=\"英雄把夺取的 Relics 送来收容，推动 Vault Research；Foundation 启用后可发展为重新封印 MEKHANE 的威胁。\n\n出现方式\n由知情统治者、携带 Relic 的英雄或 MEKHANE 的对应开局选项建立；主要位于合格国家的首都。\n\n可出现地点\nCity、小型人类聚居地、Elven City、Dwarven City、Dwarven Outpost。\n改建或覆灭后是否保留，还受对应流程限制。\" image=\"./mekhane/icon_vault.png\" /> 可帮助 Chosen One 重新封印 MEKHANE。"
            },
            {
              "name": "They pass through history.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "mekhane"
          ],
          "baseGame": false,
          "eventRepeat": {
            "once": true
          }
        },
        "source": "3591348120",
        "sourceName": "MEKHANE, the Broken God",
        "gods": [
          "mekhane"
        ],
        "eventId": "God_MEKHANE.foundation",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0/world_foundationStirring.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Alliance 成立后出现一次，选择是否启用 Foundation 的收容与重新封印路线。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "name": "Adytom",
          "id": "event-god-mekhane-god-mekhane-sarkicadytom",
          "text": "Sarkics 找到了埋藏的 Adytom，<CrossReference name=\"Ascension Ritual\" href=\"?god=mekhane#entry-pr-mek-sarkic-victory\" meta=\"地点修正\" text=\"Grand Karcist 的登神仪式进度。达到 100 时 Sarkics 获胜，玩家立即失败。\" image=\"./mekhane/icon_sarkicspell1.png\" /> 使他们逼近自己的胜利。\n\nGrand Karcist 成功 Unearth Adytom 后触发，警告 <CrossReference name=\"Ascension Ritual\" href=\"?god=mekhane#entry-pr-mek-sarkic-victory\" meta=\"地点修正\" text=\"Grand Karcist 的登神仪式进度。达到 100 时 Sarkics 获胜，玩家立即失败。\" image=\"./mekhane/icon_sarkicspell1.png\" /> 已经出现。",
          "image": "./mekhane/event_adytom.jpg",
          "eventOptions": [
            {
              "name": "They are on the threshold of victory.",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "mekhane"
          ],
          "baseGame": false
        },
        "source": "3591348120",
        "sourceName": "MEKHANE, the Broken God",
        "gods": [
          "mekhane"
        ],
        "eventId": "God_MEKHANE.sarkicAdytom",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0/world_sarkicsAdytom.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Grand Karcist 成功 Unearth Adytom 后触发，警告 <CrossReference name=\"Ascension Ritual\" href=\"?god=mekhane#entry-pr-mek-sarkic-victory\" meta=\"地点修正\" text=\"Grand Karcist 的登神仪式进度。达到 100 时 Sarkics 获胜，玩家立即失败。\" image=\"./mekhane/icon_sarkicspell1.png\" /> 已经出现。",
          "condition": "",
          "selection": ""
        }
      }
    ]
  },
  {
    "id": "3647343379",
    "name": "Villikos, the First Claimant",
    "records": [
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-loc-saltedearth",
          "name": "Salted Earth",
          "text": "Imperial Legion 为报复敌国，准备把攻占的城市化作寸草不生的盐地。\n\nImperial Legion 攻下已被残酷君主列为报复目标的敌国城市时，有 6% 概率弹出。该城市不能已有 <CrossReference name=\"Salted Earth\" href=\"?god=villikos#entry-pr-fc-salttheearth\" meta=\"地点修正\" text=\"所在领地内的 Habitability 减少 强度 ×0.015，最低为 0；地图表现会移除森林。\" image=\"./villikos/icon_habitability.png\" />；触发后清空本次报复目标记录。",
          "image": "./villikos/0_salttheEarth.jpg",
          "eventOptions": [
            {
              "name": "Nothing shall grow here",
              "text": "神力 +1；摧毁当前聚居地并创建强度 200 的 <CrossReference name=\"Salted Earth\" href=\"?god=villikos#entry-pr-fc-salttheearth\" meta=\"地点修正\" text=\"所在领地内的 Habitability 减少 强度 ×0.015，最低为 0；地图表现会移除森林。\" image=\"./villikos/icon_habitability.png\" />。"
            },
            {
              "name": "Their feelings ease",
              "text": "无效果。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.loc_saltedEarth",
        "type": "INERT",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/loc_saltedEarth.json",
        "condition": "1=1",
        "decision": {
          "trigger": "Imperial Legion 攻下已被残酷君主列为报复目标的敌国城市时，有 6% 概率弹出。该城市不能已有 <CrossReference name=\"Salted Earth\" href=\"?god=villikos#entry-pr-fc-salttheearth\" meta=\"地点修正\" text=\"所在领地内的 Habitability 减少 强度 ×0.015，最低为 0；地图表现会移除森林。\" image=\"./villikos/icon_habitability.png\" />；触发后清空本次报复目标记录。",
          "condition": "",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-p2p-villikos1",
          "name": "A Petty Imitation",
          "text": "地方统治者因衣着和举止酷似君主而受到嘲弄，宫廷冲突由此爆发。\n\n人物关系事件检查时触发。\n\n触发条件\n当前人物是统治者\n并且 不满足（当前人物是君主）\n并且 另一人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 两人属于同一国家\n并且 回合 % 2 = 0",
          "image": "./villikos/0_event1.jpg",
          "eventOptions": [
            {
              "name": "It is humiliating.",
              "text": "双方对彼此的偏好各降低一级。"
            },
            {
              "name": "%He is not the imitator...",
              "text": "消耗 1 神力，使当前城市叛乱。",
              "condition": "不满足（当地是首都）\n并且 神力 > 0"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false,
          "meta": "人物关系"
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.p2p_villikos1",
        "type": "P2P",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/p2p_villikos1.json",
        "condition": "is_ruler & (!is_a_sovereign) & (other_is_a_sovereign) & has_imperial_blood & is_same_society & (turn % 2 = 0)",
        "decision": {
          "trigger": "人物关系事件检查时触发。",
          "condition": "当前人物是统治者\n并且 不满足（当前人物是君主）\n并且 另一人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 两人属于同一国家\n并且 回合 % 2 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-person-villikos1",
          "name": "Idle Delusions",
          "text": "统治者沉迷于统治整个世界的幻想，现实王座再也无法满足他。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 当前人物尚未陷入疯狂\n并且 当前人物是统治者\n并且 回合 % 2 = 0",
          "image": "./villikos/0_event3.jpg",
          "eventOptions": [
            {
              "name": "But %he is constrained to one throne.",
              "text": "无效果。"
            },
            {
              "name": "It is all within reach.",
              "text": "消耗 1 神力，人物 Sanity −100。",
              "condition": "神力 > 0"
            },
            {
              "name": "It is not %his to take.",
              "text": "人物死亡，神力 +1。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.person_villikos1",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/person_villikos1.json",
        "condition": "has_imperial_blood & is_sane & is_ruler & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 当前人物尚未陷入疯狂\n并且 当前人物是统治者\n并且 回合 % 2 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-person-villikos2",
          "name": "Lonely at the Top",
          "text": "君主在权力顶峰只看见争夺利益的廷臣，感到孤独而空虚。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 回合 % 2 = 0",
          "image": "./villikos/0_event2.jpg",
          "eventOptions": [
            {
              "name": "Cursed to rule alone.",
              "text": "无效果。"
            },
            {
              "name": "This is what %he always wanted.",
              "condition": "当前人物 Shadow（%） < 100\n并且 神力 > 0",
              "text": "A Shadow +50。\n神力 −1。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.person_villikos2",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/person_villikos2.json",
        "condition": "is_a_sovereign & has_imperial_blood & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 回合 % 2 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-person-villikos3",
          "name": "True Likeness",
          "text": "统治者确信自己的画像和雕像属于陌生人，无法再认出自己的面孔。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物是统治者\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 回合 % 2 = 0",
          "image": "./villikos/0_event4.jpg",
          "eventOptions": [
            {
              "name": "Are they blind!?",
              "text": "无效果。"
            },
            {
              "name": "%He is someone else now.",
              "condition": "神力 > 0",
              "text": "当地 Shadow +50。\n神力 −1。"
            },
            {
              "name": "%He is right.",
              "condition": "神力 > 0",
              "text": "当地 Madness 强度 +50。\n神力 −1。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.person_villikos3",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/person_villikos3.json",
        "condition": "is_ruler & has_imperial_blood & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物是统治者\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 回合 % 2 = 0",
          "selection": ""
        }
      },
      {
        "entry": {
          "id": "event-god-villikos-god-firstclaimant-person-villikos4",
          "name": "Crown Jewels",
          "text": "前任君主留下的珍宝送到王座前，人物看中一颗适合帝冠的宝石。\n\n回合检查存活人物时触发。\n\n触发条件\n当前人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 神力 = 0\n并且 回合 % 2 = 0",
          "image": "./villikos/0_event5.jpg",
          "eventOptions": [
            {
              "name": "This will do nicely.",
              "text": "神力 +1。"
            }
          ],
          "eventCategory": "gods",
          "eventGods": [
            "villikos"
          ],
          "baseGame": false
        },
        "source": "3647343379",
        "sourceName": "Villikos, the First Claimant",
        "gods": [
          "villikos"
        ],
        "eventId": "God_FirstClaimant.person_villikos4",
        "type": "PERSON",
        "category": "gods",
        "chain": null,
        "sourceFile": "E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0/person_villikos4.json",
        "condition": "is_a_sovereign & has_imperial_blood & (power = 0) & (turn % 2 = 0)",
        "decision": {
          "trigger": "回合检查存活人物时触发。",
          "condition": "当前人物是君主\n并且 当前人物拥有 <CrossReference name=\"Imperial Blood\" href=\"?god=villikos#entry-t-fc-imperial\" meta=\"人物特质\" text=\"Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。\n持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。\n成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 \n统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。\" />\n并且 神力 = 0\n并且 回合 % 2 = 0",
          "selection": ""
        }
      }
    ]
  }
];
