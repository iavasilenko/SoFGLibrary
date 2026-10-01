# Agent 特有事件与分支核对（2026-09-25）

## 范围与资料

- 检查当前 Agent 目录的 26 个角色；不增加 Supplicant、神祇限定角色或泛化的 Human 事件。
- 游戏本体采用 DLC 有效数据：data/coreData 的 JSON，以及 work/swwf-audit/dlc/Assets.Code 的反编译结果。
- Mod 使用事件目录已有的全目录清单 work/events-audit/scopes.json、active.json、calls.json；以 v2.0 为先，无分版本目录时使用根目录。读取 631 个有效原始定义，沿用已核对的 521 个目录节点与覆盖去重规则。
- Agent 身份对应 work/agents-audit/agents-reviewed.json 的实际类；基础身份字段核对 EventRuntime.cs，扩展身份字段核对 CommunityLib/ModCore.cs 的注册和类型检测。
- Agent 数据、技能、挑战与招募条件保持不变。

## 收录方法

- 事件或选项的已解析条件必须正向引用该 Agent 身份；只排除此 Agent 的条件不收录。
- 整个事件由身份参与限定时列事件；通用事件只在选项具有 Agent 专用入口时列相关选项，包括以身份替代属性门槛的情况。各选项仍保留完整实际条件。
- 不将有相同种族、可学同类魔法、可携带同一物品当作 Agent 专属事件。
- 同名变体沿用事件目录的语义名称；不是分支 01/02。
- 本体与各 Mod 在每个 Agent 下分别分栏。来源为 Mod 的本体 Agent 内容仍标为对应 Mod。
- 211 个 Agent 对应条目涉及 135 个不同事件、313 个选项。一项可因多个 Agent 有不同特殊入口而出现在各自栏中。
- 正文和效果复用 EventsData，经 AgentEventBindings 挑选；不复制一份独立效果数据库。
- 同一 Agent 中已收录的后续使用本页锚点；其余跳转事件目录，并携带分类、正文、选项和图片预览。

## 代码直触发及剧情后续

- The Cursed：T_CursedVowOfVengeance.onAcquire、onKill、turnTick。分别列立誓与复仇完成；目标因其他原因死亡也能在回合更新中完成。完成后 Might / Lore / Intrigue / Command 各 +1。
- The Harvester：T_Howl_DeathCurse.onDeath、Curse_TheHowling.turnTick。杀手存在时向其家族施加 The Howling，Sanity 上限压至 4；事件选项只是确认。
- The Redeemer：Kernel_RedeemerMod.interceptCombatOutcomeEvent、onPersonDeath_EndOfProcess、crown_Redeemer。区分战斗胜利通知和 Chosen One 死亡回调的救赎转换条件；不把转换归因于确认选项。
- Drowned Prophet：Pr_Cult_DrownedProphet、Rt_DeepOne_Summon_Prophet、Society_DrownedProphet、HolyOrder_DrownedProphet；出现和势力扩张通知不要求已经被玩家接管。
- Heirophant：Trusted counsel 写入 W2W_RULER_HIERO 后的专用后续。
- The Courtier / The Aristocrat / The Courtesan：Noble natured friendship 保留初始事件；等待比较方向异常的哀悼与背叛后续已于 2026-10-01 从页面移除。
- Buccaneer 船员事件原有不满计数、等待和后续链接直接沿用事件目录已核对数据。

## 无法正常触发或未找到

- The Fisherman 的 TEST：PERSON 概率为 0%，只检查 IS_FISHERMAN，未找到正常赋值或直触发路径，已从页面移除。
- Werewolf、The Surveyor、被腐化的 Acolyte：未找到专用事件或专用分支。Werewolf Run 是地点成熟通知，不限定玩家 Werewolf，未重复收录。
- 13 处 Agent 关联被事件外层种族条件挡住：Baroness 2、Survivor 3、Harvester 5、Whisperer 3；已从对应 Agent 页面移除，事件对其他合法 Agent 仍保留。
- 入口清零顺序或等待比较方向使条件无法成立的事件已移除；解析器未读取的条件后段仍按实际已解析条件说明，不将有效的前半段事件误删。

## 实现与验证

- app/AgentEventBindings.ts：经核对的 Agent—事件/选项关联。
- app/AgentEventsModel.ts：复用事件数据、处理本页及跨页预览。
- app/AgentsArchive.tsx、agents.css：在每个 Agent 的专有挑战后增加事件栏。
- Agent 页和事件页按需加载，共用事件数据块，不将整套事件数据加入索引页的主包。

## 2026-10-01：实际可触发范围整理

- 展示层同步采用人物条件分组、A/B 选项简写、独立触发间隔/一次性信息、中文动态占位说明和“系列事件”分类名称。跨事件页面的引用及手机确认跳转打开新页，本页节点仍留在当前页。

- 覆盖当前 29 个 Agent，保留 207 张专有事件/分支卡；原 227 处关联移除 13 处种族阻断关联及 7 处指向不可触发事件的关联。
- 复核 DLC EventRuntime 的身份/种族判断、Task_PerformChallenge 的途中事件检查与计时清零顺序，并与原始 JSON 条件相对照。
- 动态注册的 is_doing_challenge_* 字段不会因未出现为字面量而被误判为无效。
- Agent 的简介、属性、招募、技能和挑战不变；事件叙事、计时、人物 A/B 说明复用目录整理结果。
- Whisperer / The Courtesan / The Robber Baron 合计保留 11 张事件卡。
- 数据断言、类型检查、静态构建及桌面/手机事件页面验证通过。
- work/agents-audit/check-events.cjs：关联、图片、选项名称和效果、语义分支名、链接及预览格式检查。
- work/agents-audit/verify-events.mjs：320/390/760/1440 宽度、211 张新卡、344 张总卡、154 张图片、跨页与系列手机预览、确认跳转、重复 ID 与坏锚点。
## 2026-10-01：与完整事件目录同步

- 207 张关联卡复用事件目录标准化数据；每项新增完整事件页链接与预览，仍只展示当前 Agent 对应的选项。
- 同名变体与系列使用共享的四卡布局和流程图，保留系列节点号；全部展开包含总览和流程图。
- 当前 Agent 的引用留在本页，跨页链接在新标签打开；不可触发的关联不收录。
- Mod 分类与导航排序、事件正文及条件／间隔字号统一；Agent 回归、25 神祇投影与桌面／手机检查通过。
