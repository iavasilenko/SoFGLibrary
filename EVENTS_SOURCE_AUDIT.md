# 事件目录来源核对

当前展示 DLC 2.0 数据，Mod 优先读取 v2.0，否则读取根目录。事件与选项保留英文原名，机制说明使用中文。
- 桌面与手机确认一次性信息、触发次数块、无自链接、地形流程图与 Agent 同步；37 页浏览器检查无运行时错误、字体／分类／预览回退。静态编译通过，docs 的入口及 13 个构建资产与 pages-dist 逐一 SHA-256 匹配；未推送。
## 2026-10-01：互斥事件选项

- 核对目录全部 600 个事件：599 个 JSON 原始定义与页面事件 ID、外层条件和选项数量一致；另一个 Fear and Paranoia 是代码提示，没有选项，不涉及随机选项判定。
- EventParser 的 `&` 和 `|` 同优先级、从左向右结合；PopupEvent 逐项检查 choice.condition，条件不符的按钮不可选择，不会在选项之间随机抽选。条件证明遵循该语法，只使用已核实的神祇、种族与任务属性互斥关系；未知字段、复杂或无法解析的表达式保留原展示。
- 11 个定义具有互斥选项组：A Glimpse Of The Greater Things 的五个梦境、Venality: As agreed upon、Parallel investigations、Something witty、The rare sight of charity、They shouldn't have seen that、Orcish road toll。6 个定义在各条件下只有一个结果，显示“条件结果”；5 个定义仍有组内可选项，显示“条件分支”，组内仍由玩家选择。
- 所有原始效果、英文选项名与条件保持不变；分类标记随选项传播到 Agent 与神祇投影。已存在的条件重叠情况没有改成互斥，例如 Campfire bonding 的最高属性并列、Pickpockets 的高 Intrigue 与非 Trickster 同时成立。
- A Glimpse Of The Greater Things 的五个 `maeRedux.god_dream_*` 定义外层条件完全相同、事件概率均为 0.05；Task_PerformChallenge.triggerMidChallengeEvent 会随机抽取事件版本，因此五种梦境组内各 20%。每个版本的两项选择分别要求对应 god_is_* / !god_is_*，只开放一个结果。Iastur 的对应奖励内部仍为四种属性各 25%，持续 999 回合。展示区分这三层判定，不移除真实随机。
- scripts/audit-event-choice-conditions.mjs 可重新核对原始 JSON；生成清单同时保护事件条件、选项名和原始显示条件，发生数据变化时不会套用旧分组。scripts/check-event-choice-conditions.mjs 验证 599 个源事件、互斥规则、重叠反例、数值边界、真实随机与 Agent 投影。
- 本地静态编译通过，桌面 1602px 与手机 390px 逐项验证 11 个定义及 Agent 投影；无横向溢出或运行时异常。产物同步到 docs，未推送。

## 2026-10-01：概率结果换行

- 按最新要求覆盖此前的同行展示规则：每个概率结果独占一行，同一结果的多个效果保持在一起；概率下划线和两位小数规则不变。链接预览属性不参与拆行。
- Shared EventPresentation 同步作用于事件目录、Agent 与神祇投影；600 个事件检查通过。对 1376 个选项去除空白后比较 SHA-256 一致，确认概率数字与结算文字未改动。
- 浏览器扫描事件目录 117 个多概率选项均以换行显示；用户指出的 Shipwreck 四个结果在桌面与手机分别起行，下划线保留，无横向溢出或运行时异常。TypeScript、神祇投影、静态编译通过，产物同步到 docs，未推送。



## 2026-10-01：简洁条件、触发间隔与系列事件

- 保留 517 个有效分支/节点，207 张 Agent 关联事件卡；原始判定表达式和抽选数据不变。
- 人物关系条件分为人物 A、人物 B、双方关系、其他条件，分组使用边线和分隔线；组内省去重复主语。选项使用 A/B，比较使用 >、<；同类身份的且排除与或包含合并，混合或条件保持原逻辑。
- 仅将相邻、同值、无附加限制的双向好感变化合并为 AB 互相变化；单向、封顶、不等值和不同随机结果不合并。
- 176 个事件的等待信息单列“触发间隔”，显示固定回合或最短/最长回合与选项差别。98 个所有结果都禁止自身重复的事件单列“一次性事件”。仅特定选项结束剧情的限制仍留在该选项。
- Venality 的兑现节点可被新的约定重新激活，不标记为全局一次性。Story time 的共用累计次数仅在第一选项说明，第二/第三选项不重复；Iastur 页面同步使用已核对的条件和选项效果。
- 对照 DLC PopupEvent.bindReferences：%him2 等带 2 的代词对应人物 B，不带 2 的对应人物 A；R0/R1/R2 是另外的叙事人物。动态地点、城市、统治者、教团等用中文花括号占位说明，真实概率数字不受影响；仅改显示文字，既有锚点不改。
- 原 35 组事件链改名为系列事件，另增加 14 组、38 个关联节点，共 49 组。10 组通过共同读写剧情状态关联；另核对 Venality、Contradictory Texts / Missing Pages、Stumbling into intrigue / lore、Fresh horses / Sailing winds 的跨节点状态写入。仅共用资格筛选、没有相互影响的沉船随机池未据此归组。
- 系列按整体描述、流程图、节点卡片统一展示。保留原 chain-* 外层锚点、所有节点锚点及各来源边界；不将共享计时误画为必须顺序发生。
- Corrupt Guards、Encircled 的 151–199 与 351–399 回合同时开放两个节点，组内各 50%；其他区间单节点不显示概率。The Sting、Suspicious Guards 同样按实际重叠窗口划分。系列流程图不再显示计时字段写入公式。
- 导航统一为：索引进入详情、返回索引和同页锚点使用当前页；详情跨页引用打开新页。手机先预览，确认按钮遵守同一规则；同页位置返回仍保留。
- 验证：scripts/check-event-presentation.mjs、check-agent-expansions.mjs、TypeScript、build:pages，以及桌面/手机的系列图、占位符、分组条件、新窗口与同页返回验证。

## 2026-09-25 数量快照（当前数量见 2026-10-01 核对）

- 通用目录分为任务中事件、其他事件、遗迹事件、事件链；各来源仍独立分栏。
- 共 8 个来源、521 个保留的分支/节点，整理为 431 个主条目。
- 38 组同名变体包含 128 个分支。每组独立成一个子分类，依次展示名称与整体描述、流程图、各分支的选项与效果卡片。
- 同名变体只在同一来源与分类内合组，并统一排在该分类的普通事件之后。事件链节点不套用变体模式，保持节点链接与原卡片结构。
- 遗迹事件包含本体 60 个节点，其中 12 条连续遗迹路线独立分组；其他仅以遗迹为场景的事件仍按实际入口分类。
- Mod 神祇来源的 85 个事件不放入通用事件目录，对应神祇页保留其资料。

| 来源 | 节点数 | 任务中事件 | 其他事件 | 遗迹事件 | 其他事件链节点 |
|---|---:|---:|---:|---:|---:|
| 游戏本体 | 246 | 66 | 82 | 60 | 38 |
| Deep Ones Plus | 7 | 5 | 2 | 0 | 0 |
| Living Wilds | 11 | 0 | 11 | 0 | 0 |
| Covens, Curses & Curios Recast | 3 | 3 | 0 | 0 | 0 |
| Community Library | 10 | 7 | 1 | 0 | 2 |
| Orcs Plus | 5 | 2 | 3 | 0 | 0 |
| Redeemer Agent | 1 | 0 | 1 | 0 | 0 |
| AAEnglishman and Mall's Event Pack - REDUX | 238 | 155 | 38 | 0 | 45 |

## 遗迹覆盖的精简

- Community Library 的 15 个遗迹覆盖定义不再使用独立卡片，包括先前已折叠成简短对比的 3 项。
- 8 条遗迹路线的新增单局首次发现限制，统一在 Community Library 的“遗迹事件”中说明并链接本体节点。
- Catalogue the findings 按遗迹记录最多 3 次，Vinerva 种子特质及 Tempt Ruler 的实际变更也纳入文字说明。
- Mountain Monastery 的内部标记改名、纯英文提示修正、图片前缀修正不在页面单独列出。
- 删除“与原版的区别 · 合并展示”及其数据字段、样式。
- 仍保留 4 个确有其他玩法变化的覆盖条目：Daughter Seer、Chosen One Mentor、Orcs Plus 的两个敬酒版本。对比栏只写实际机制变化。

## 同名变体与流程图

- Victory、Defeat、Mourning 等使用“概述卡 + 流程图卡 + 分支结果卡”，全部为同级折叠卡片。桌面每行四张，概述与流程图各占一格；可用内容宽度不足 1000px 时为两列，不足 600px 时为一列。
- 战斗结算按“对手 → Agent 攻守身份 → 败方状态”绘制流程图。所有分支相同的对手、攻守身份或败方状态仅在入口显示一次；图内只保留真正改变结果的判断。底层分支数据仍可逐叶还原原入口说明。
- 其他变体按实际触发入口分组，先检查共同条件，再检查差异条件，最后显示各分支的候选概率或权重及结果链接。同入口、同条件的候选共用判断节点；Mourning 的哀悼入口和人物关系入口分别显示。
- 主描述根据原始事件叙述概括；各分支保留原有英文选项名、选项条件、概率、数值效果和无法确认的提示。
- 图使用 SVG 箭头、菱形判断、是/否边和终止节点；支持放大查看，实际线路按节点位置计算。图中分别记录代码触发入口、公共条件、差异条件以及实际参与版本选择的概率/权重。只提取解析器格式化后的顶层 AND 公共项，嵌套 OR 整体保留。
- 每个分支共享条件与差异条件重组后，与原表达式的顶层 AND 条款逐一相同；没有把重叠条件误画为互斥的 if/else。
- 连续事件按 SHOW_EVENT 关系保留链式结构；The Auction 的三个直接相接节点归入事件链，未当作并列变体。
- 全部保留节点的条件、选项、结果与图片逐一对照整理前数据，无内容损失。

- 本体/Orcs Plus 的 The orcish toast、On the hunt、Opportunity cost、Witness in the field、Weird Dreams III 共 6 组互斥条件版本，从分流图与版本预览去除抽选权重；保留源数据及真正会竞争的重叠候选权重。
- 依据 Task_PerformChallenge.triggerMidChallengeEvent：MIDCHALLENGE 在全部符合条件的途中事件中按 probability 加权；互斥版本之间并非加权抽签。EventRuntime 的单位类型、种族、任务属性判定和对应 JSON 确认这些分流条件。
- 放大图链接委托到原卡片的引用组件，避免关闭放大图时销毁手机预览状态；Esc、关闭按钮、焦点返回与手机确认跳转均已验证。

## 来源与执行依据

- 本体事件：data/coreData 的直接子目录；官方 Cordyceps：data/optionalData/God_Insect/v2.0。
- 检查 Workshop 全部 21 个数字 ID Mod 文件夹；17 个包含事件定义。初始读取有效定义 631 个，另有 37 个当前加载器不扫描的嵌套旧定义被排除。
- 本体反编译：work/swwf-audit/dlc/Assets.Code。重点核对 EventManager、EventRuntime、EventParser、EventContext、EventData、PopupEvent、Task_PerformChallenge、Person、Ch_ExploreRuins。
- Ch_ExploreRuins.complete 按 INERT + ID 含 exploreRuins_ 取得候选，再检查条件和概率、按权重选择；遗迹路线的关联后续同放在该路线。
- Community Library：v2.0/OVERRIDE_*.json 与对应本体 JSON 逐字段比较；ModCore.cs 的修正叠加、种子命令，以及 Rt_TemptRuler.cs 的直接调用作为说明依据。
- Orcs Plus：ModCore.cs 的 DRINK_GROTT / GAIN_GROTT 与 T_Grott.cs；时长读取当前 Params.ch_primalWatersDur = 40。
- MIDCHALLENGE 使用候选权重，普通事件使用候选概率；探索同时有候选概率与权重。页面不把权重冒充触发百分比。
- 选项结果按实际 weight 归一化；环境记录先写入，再依次执行效果。未知命令会中断后续执行。

## 去重与旧链接

- The Entrance 的 10 种同效果幻象合成 1 张卡片，保留不同插图，注明游戏仍选择不同叙述。
- War in Heaven 的相同旧兼容定义合并至当前有效入口。
- 25 个移除/合并前的旧锚点仍有效；Community Library 遗迹旧链接转到文字说明，其余转到规范节点。
- 同名变体原节点锚点完全保留。真实跳转才展开对应分支及概述/流程卡；手机预览不会提前改变展开状态。

## 未确认与源文件异常

- anw.vengeance 的直接触发入口未找到，已于 2026-10-01 从页面移除。
- 未找到 SHIFT_P1_TO_P2_RELATION 和带尾随空格的 PLACE_ARCANE_SECRET_PLAYER_ONLY 指令实现。
- 部分条件字段未注册、部分表达式含解析器未读取的后段；沿用现有明确提示。
- MIDCHALLENGE 要求已被清零的事件计时达到阈值，以及 Noble natured friendship 的错误方向等待条件，已于 2026-10-01 从页面移除。
- Deep Ones Plus 的三项 Cult 事件奖励已于 2026-10-01 复核：v2.0 没有旧环境字段结算流程，事件又未调用注册的奖励指令；对应 Cult 数值与特殊物品奖励不执行。
- Wonderblunder_DeepOnes.fisherman_debug 为不可触发调试事件，已从页面移除；未使用无关替代素材。

## 2026-10-01：可触发性、人物关系和简洁说明

- 当前保留 517 个事件节点，合并同名变体后为 427 个事件条目；每个节点均已对照原始 description 补充简短剧情介绍。
- 独立列出 66 项人物关系事件，按人物 A、人物 B、双方关系和共同环境说明条件；真正的事件链仍按链展示。
- 删除人物关系及途中任务事件中重复的入口说明；流程图只保留分类名。
- 176 项含再次触发计时的事件，将计时集中到触发条件。Reconciliation 统一为 16 回合；城市散步系列按共用间隔和选项差值归纳。
- 同时写入本局与人物状态时保留两层范围；只有部分选项会重置计时的，明确适用选项；不把它们错写成所有选择都重置。
- 选项的 OR 条件按神祇、单位、人物、种族、特质分行，同类备选值在一行；嵌套 AND/OR 保持原逻辑。
- 一次性限制统一为“不能再次触发”；任务进度变化不再显示“最低为 0”；Abandon challenge 统一只显示“取消当前挑战”。
- 保留原始条件与效果用于源码核对，过滤展示层的无效记录及其后续链接，并保持已有系列锚点不变。

### 移除的六项不可触发事件

- anw.moveRuins：MOVE 概率为 0，未找到直触发调用。
- anw.vengeance：INERT 定义没有找到正常调用入口。
- Wonderblunder_DeepOnes.fisherman_debug：PERSON 概率为 0，身份标记没有正常赋值或直触发。
- maeRedux.midch_fort_suspicious：途中事件入口先清零计时，条件却要求计时等于阈值 4。
- maeRedux.midchP2P_noble_friendship_mourn：已发生回合必须大于当前回合加 40，正常写入后不成立。
- maeRedux.midchP2P_noble_friendship_betray：已发生回合必须大于当前回合加 20，正常写入后不成立。

### 验证

- scripts/check-event-presentation.mjs：叙事覆盖、无效条目过滤、分类、关联链接、共用/多层/部分选项计时、OR/AND 条件及简短取消挑战说明。
- scripts/check-agent-expansions.mjs：新增三名 Agent 的数据、素材和关联完整性。
- 全部保留 Agent 关联的外层身份与种族可达性检查通过；桌面及手机页面无运行错误或横向溢出。

### Deep Ones Plus 奖励字段重新核对

- 重新反编译当前本体 EventContext / EventManager，以及 Deep Ones Plus v1.0、v2.0 全 DLL；没有修改游戏或 Mod 文件。
- 当前执行链：EventManager.chooseOutcome → EventContext.updateEnvironment → writeEnvironment，仅写入状态字典。只有 effects 才进入 EventRuntime.evaluate(effect) → properties[command].setValue。
- v2.0 Modcore.initializeEventVariables 注册 DEEPONEPLUS_GAINPROFILE、DEEPONEPLUS_GAINMENACE、DEEPONEPLUS_GAINITEM 为奖励指令，却未在三项事件 JSON 的 effects 中调用；GAINCHARGE 未注册为指令，EVENTEFFECT 计数也没有消费路径。
- v1.0 的 deepOnePlusLocationCultEventEffect / deepOnePlusPersonEventEffect 读取并清理上述环境字段，分别改变 Cult 数值、调用 calcItem；v2.0 已删除这套流程。此版本差异告知用户，不把旧版效果写进采用 v2.0 的页面。
- Community Library 对事件入口与弹窗的补丁没有转接 writeEnvironment / updateEnvironment 或奖励字段。
- Around the Corner、Makeshift Temple、Accused Deep One 集中说明当前配置的未执行奖励，选项中去掉反复的“实际生效未确认”。直接执行的 Menace、HP、任务进度、临时属性、普通物品与 Arcane Secret 保留；生效结果完全相同的概率合并。
- 另核对 Stumbling into lore：PLACE_ARCANE_SECRET_PLAYER_ONLY 末尾含空格，本体指令字典采用精确匹配，不能冒充无空格的合法指令；anw.vengeance 的未知关系指令所在事件已移除。
- 二进制 SHA256：本体 42468A86DD6CA90E9090F303343BABBDB266FEFB63B0654423F63C4808A4FA46；Deep Ones Plus v1.0 ACED9C9E2EF354C9899586F457DEAECDA8C693B4F9FEF83FE4709AACF3277593；v2.0 5D4CE15E5B1E0396B28C93F7CCBE2745F8F69F2DAAFCA0F8E889FFB4FF29789C。

## 实现与验证

- 页面/数据：app/EventsArchive.tsx、app/EventsData.ts、app/EventTypes.ts。
- 变体：app/EventVariants.tsx、app/EventVariantModel.ts、app/EventFamilyDescriptions.ts、app/EventDecisionModel.ts、app/EventDecisionFlow.tsx；局部样式 app/event-variants.css。
- 共用神祇页面内容未改写；只扩展分类标签以支持事件目录的“遗迹事件”，并导出已有折叠卡片组件供复用。
- TypeScript 检查通过；pnpm run build:pages 成功并同步至 docs。
- 浏览器检查 320、390、760、1024、1440、1920 宽度，597 张实际折叠卡片全部展开时无横向溢出、重复 DOM ID、坏链接或运行时错误。
- 267 个不同图片地址均可读取；38 个变体子分类、521 个原节点、25 个旧锚点均验证。
- 原事件链中出现变体子分类的数量为 0；手机预览与确认后跳转通过。
- 自动检查：work/events-audit/check-variants.cjs、verify-variants.mjs、verify-flowchart.mjs；结果：invariants-variants.json、verification-variants.json、verification-flowchart.json。
- 本地查看：http://127.0.0.1:8765/index.html?page=events。

## Mod 读取路径与反编译目录

- Cordyceps：E:/Steam/steamapps/common/Shadows of Forbidden Gods/data/optionalData/God_Insect/v2.0；反编译：work/cordyceps-audit/v2.0。
- Ixthus, King of cups：E:/Steam/steamapps/workshop/content/1741640/2866026291；反编译：work/batch-audit/ixthus。
- Kishi, God of Bloodshed：E:/Steam/steamapps/workshop/content/1741640/2879207914；反编译：work/batch-audit/kishi。
- Living Void God：E:/Steam/steamapps/workshop/content/1741640/2879249746/v2.0；反编译：work/batch-audit/void-2。
- Chandalor the Cursed Bloom God：E:/Steam/steamapps/workshop/content/1741640/2879251084/v2.0；反编译：work/batch-audit/love-2。
- Deep Ones Plus：E:/Steam/steamapps/workshop/content/1741640/2879667447/v2.0；反编译：work/mod-items-audit/decompiled/2879667447。
- Flesh God：E:/Steam/steamapps/workshop/content/1741640/2900259087/v2.0；反编译：work/batch-audit/flesh-2。
- Living Wilds：E:/Steam/steamapps/workshop/content/1741640/2932110698/v2.0；反编译：work/mod-items-audit/decompiled/2932110698。
- Covens, Curses & Curios Recast：E:/Steam/steamapps/workshop/content/1741640/2932765110/v2.0；反编译：work/mod-items-audit/decompiled/2932765110。
- Community Library：E:/Steam/steamapps/workshop/content/1741640/2968835416/v2.0；反编译：work/mod-items-audit/decompiled/2968835416。
- Adolia, the Faceless Memory：E:/Steam/steamapps/workshop/content/1741640/2980692812/v2.0；反编译：work/batch-audit/adolia-2。
- KeeperItemMod：E:/Steam/steamapps/workshop/content/1741640/2988960487；反编译：work/mod-items-audit/decompiled/2988960487。
- Orcs Plus：E:/Steam/steamapps/workshop/content/1741640/3003549759/v2.0；反编译：work/mod-items-audit/decompiled/3003549759。
- Mirror God：E:/Steam/steamapps/workshop/content/1741640/3192034838/v2.0；反编译：work/mirror-audit/v2.0。
- Out of Gods：E:/Steam/steamapps/workshop/content/1741640/3232578780；反编译：work/outsiders-audit/decompiled。
- Redeemer Agent：E:/Steam/steamapps/workshop/content/1741640/3236779751/v2.0；反编译：work/mod-items-audit/decompiled/3236779751。
- AAEnglishman and Mall's Event Pack - REDUX：E:/Steam/steamapps/workshop/content/1741640/3261852980；反编译：。
- Aberrant Metal：E:/Steam/steamapps/workshop/content/1741640/3320562229/v2.0；反编译：work/aberrant-metal-audit/v2.0。
- Alai, God of Webs：E:/Steam/steamapps/workshop/content/1741640/3383875039；反编译：work/alai-audit/decompiled。
- MEKHANE The Broken God：E:/Steam/steamapps/workshop/content/1741640/3591348120/v2.0；反编译：work/mekhane-audit/v2。
- Villikos, the First Claimant：E:/Steam/steamapps/workshop/content/1741640/3647343379/v2.0；反编译：work/villikos-audit/v2。
- The Surveyor：E:/Steam/steamapps/workshop/content/1741640/3700090862；反编译：work/mod-items-audit/decompiled/3700090862。

## 排除的未加载旧定义

- anw.friendE101：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101.json
- anw.friendE101M：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101m.json
- anw.friendE101MD：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e101md.json
- anw.friendE1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e1a.json
- anw.friendE201：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e201.json
- anw.friendE202：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e202.json
- anw.friendE2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_e2a.json
- anw.friendEm1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\friend_em1.json
- anw.locButcher：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\location_butcher.json
- anw.moveCathedral1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_cathedral.json
- anw.moveCathedral2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_cathedral_2.json
- anw.moveDesertCity：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_desertCity.json
- anw.moveEmptyDesert：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_emptyDesert.json
- anw.moveEmptySnow：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_emptySnow.json
- anw.moveRuins：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_ruins.json
- anw.moveShadowVillage：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_shadowVillage.json
- anw.moveTown1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town.json
- anw.moveTown2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town2.json
- anw.moveTownMist：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\move_town_mist.json
- anw.locPyro：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_0.json
- anw.locPyro1：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_1.json
- anw.locPyro2：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_2.json
- anw.locPyro2b：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_2b.json
- anw.locPyro3：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_3.json
- anw.locPyroE：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\pyro_e.json
- anw.twins01：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_01.json
- anw.twins02：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_02.json
- anw.twins03：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_03.json
- anw.twinsEnd：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_End.json
- anw.twinsR01：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R01.json
- anw.twinsR02：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R02.json
- anw.twinsR03：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R03.json
- anw.twinsR04：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\twins_R04.json
- anw.shadowProgress20：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\world_shadowProgress20.json
- anw.shadowProgress50：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\default\shadows2\world_shadowProgress50.json
- fog.midchP2P_much_incommon：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\fog\rm\midchP2P_much_incommon.json
- fog.P2P_NPCver_much_incommon：E:\Steam\steamapps\common\Shadows of Forbidden Gods\data\coreData\fog\rm\P2P_NPCver_much_incommon.json

## 2026-09-25：剧情状态用途与简化流程图

- 对照 EventContext.updateEnvironment/readEnvironment/writeEnvironment、EventParser、EventRuntime，以及实际加载的事件与选项条件，追踪目录中 280 个字段的 1141 处写入。
- 更新 851 个选项的状态说明：一次性标记、共享次数上限、剧情阶段、人物/地点资格、种子数量、冷却和时间窗口；引用具体后续节点并保留原锚点。
- 不将状态条件通过写成必定触发；仍需其他条件及对应事件入口。严格大于的等待按最早可满足回合说明，例如超过 15 回合即选择后第 16 回合起。
- 比较方向错误、字段大小写不一致、未解析条件与本局/地点作用域不一致按源码标注；没有据此伪造正常冷却。
- 未找到后续用途的字段：ANW_FIRST_DAUGHTER、FOG_DREAMS3、WEIGHT_OF_THE_TASK、MAEREDUX_NOBLE_CONNECTIONS_EARNED、MAE_GVW_1。
- Deep Ones Plus 的奖励字段在 2026-10-01 已重新反编译并逐路径确认；展示层集中说明配置问题，只列实际执行的选项效果。
- 同条件随机分支合并为一个结果框。途中事件的权重只换算为该框内的相对概率；其他事件继续使用候选检查概率，不冒充整局触发概率。
- 去除成立/是/否/排除/结束的冗余判断节点。放大图在可用宽度至少 900px 时每行最多三分支；战斗图展平后使用同一布局。
- 本次不改动神祇页面。事件目录仍为 521 个原节点、38 个同名分类、597 张折叠卡；普通事件在同名分类之前，事件链保持原结构。
- check-state-semantics.cjs 核对了 2404 行非状态效果文本未丢失、选项名称和条件不变、新增链接全部指向保留节点。check-variants.cjs 核对全部判定项和原图不变。
- TypeScript 与 build:pages 通过；320/390/760/1024/1440/1920 宽度下无横向溢出、坏锚点、重复 ID 或运行时错误；手机先预览后跳转通过。
- docs 与 pages-dist 的 1687 个构建文件逐个 SHA-256 校验一致。
- 本轮数据脚本：work/events-audit/flag-semantics.cjs；核对结果：verification-state-semantics.json、verification-variants.json、verification-flowchart.json。

## 2026-09-25：候选重叠与单结果框

- 流程图内只有一个候选时不显示抽选权重；独立的候选检查概率仍保留。
- The Alchemists：Human 同时满足 anw.mid_alchemist 与 fog.midch_alchemists，两个候选的组内概率各 50%；非 Human 只保留前者。
- Merchant of Antiquities、Watched、A light in the dark 同样按无附加条件的候选与较窄候选重叠分组。
- 另对 Sandstorm、The audacity!、Helping Hands、Potential Benefactor、Slow Learning、The turncoat and the hidden path 的地形、回合、冷却及双修正条件逐项分区；单独场景明确列出全部同时有效的候选。
- Source guard：app/EventSelectionCases.ts 保留每项原始 condition；源条件变化时不沿用未经重新核对的情形表。
- EventRuntime.cs：is_agent_human 要求受玩家控制且人物种族为 map.species_human；is_desertlike 覆盖 DESERT/DRY/ARID，不是独立地形。
- 5887 组源条件等价性检查通过；10 组重叠事件已校正。原事件卡片、选项与条件未改写，仅流程图重复列出在不同条件下仍有效的候选。
- 浏览器确认 Human 框为两个 50%、非 Human 框无权重；手机端先预览再跳转保持不变。
- 检查：check-selection-overlap.cjs、verify-selection.mjs；结果：verification-selection-overlap.json、verification-selection-ui.json。

## 2026-10-01：条件与效果展示统一

- 517 个可展示事件及 Agent 关联事件复用同一展示规则，原始 EventRecord 条件、选项执行顺序与概率数据保留。
- 且条件用编号列表；或条件同行以“或”连接。嵌套条件保留括号，AND 排除项可合并，OR 排除项不改成 AND。
- 选项条件采用独立浅底块；触发条件、流程图条件、选项条件中的地点修正及角色特质增加详情链接，不将 Might 等普通属性或个人 Shadow 误连到地点修正。
- A/B 的单位简称 A/B；任务进度简称“A的任务进度”；扣血移除上限说明并保留降至 0 死亡提示；Mastery 比较不重复写“等级”。
- 同一选项的随机结果同行展示，百分比保留最多两位小数并加下划线；不同随机结果不跨组相加。
- 同一结果中连续获得相同随从或物品合并为数量；随从链接到详情页，效果正文不重复属性，预览保留属性。已核对 Wretched Poor、Skeletal Juggernaut、Daughter 和 Skeleton Warrior 等引用。
- 取消任务统一为“取消当前挑战”；禁止重复触发的自身引用移除，仅保留涉及其他事件的引用。
- Fairy festival 的 NoMore_FairyFestivals 使用 local:false，EventContext.writeEnvironment 写入 map.eventState；前三项选择使本局全局不可再次触发，并非仅同地点。Move on 仅重置 101 回合等待，因此不标为所有选项均一次性。
- 普通数值范围、默认 HP/遗迹/教团上限不重复说明；事件专设的数值上限和次数限制保留。
- 全站正文、属性公式与引用预览省略“百分点”；数值、正负号和百分比不变。
- 移除解析器提示和“任务事件计时 = 任务事件计时阈值”默认内部条件；实际触发间隔与其他条件保留，编号连续，流程图不留下空条件框。
- 37 个页面浏览器检查无上述冗余文字或运行时错误；517 个事件回归检查、Agent 检查、TypeScript 与静态编译通过。
- 回归检查、TypeScript、静态编译通过；桌面和手机实测编号条件、同行概率下划线、跨页详情新标签、手机确认弹窗与无横向溢出。

## 2026-09-25：系列引用、语义名称与进入条件

- 覆盖同来源、同分类、同名系列全部成员的相同计数/等待限制，合并为“事件名 系列事件”链接；子集仍列具体语义分支。同名但来源不同或独立事件链不合并。
- 为系列整体卡增加配置预览对象；手机点击先展示系列说明，确认后展开并跳转。
- 38 组同名事件、128 个原分支全部使用语义名称；条件型按神祇、人物、地形或回合命名，同条件的不同叙事按实际叙述或选项区分。
- 分支卡上方列进入条件；重叠候选复用已经核对的 selectionRoutes，相对概率明确为抽中本系列后的组内分配。
- 521 个原节点、597 张卡和原选项数不变。2404 行非状态效果及全部选项名称/条件保留；5887 组源条件等价测试通过。
- 浏览器核对 320–1920 宽度、4 卡布局、放大图 3 分支布局、系列预览、手机确认跳转。
- Agent 页新增的事件使用相同数据；参见 AGENT_EVENTS_SOURCE_AUDIT.md。
## 2026-10-01：神祇事件同步、分类与字号

- 三个页面复用同一份标准化事件记录：神祇页投影 97 张卡，Agent 页保留 207 张可达关联卡；每张关联卡附完整事件页链接和预览，跨页在新标签打开。
- 加入 83 个神祇相关记录（82 项 JSON、1 项 Cordyceps 代码通知），合计 600 个节点／分支；JSON 的 ID、名称、类型、条件和选项名称逐项校验，自定义 DLL 结算保留既有审计效果。
- Kalastrophe 三个概括确认项展开为 22 个实际事件：Assist 10、Interfere 8、Terrorize 4；保留英文选项与对应神力引用。
- 神祇限定优先于其他分类；108 个节点归入该类，其中 3 个系列保留整体介绍、流程图和节点卡片，且只出现一次。
- 专属特质／修正引用链接相应神祇页，通用内容链接通用目录。Pareidolia Crises 是代码机制，移回 Adolia 机制模块，不伪装为独立事件。Ixthus 两项提示采用实际选项，前置转化由行动完成。
- 同名变体按当前分类分组，防止跨模块合并；保留事件锚点，为旧 In the dark 系列总览提供重定向。
- 全站 Mod 顺序：Deep Ones Plus（2879667447）、Living Wilds（2932110698）、Orcs Plus（3003549759），再神祇、其他、Agent Mod；每类编号升序。Robber Baron=3446675112，Surveyor=3700090862，已核对 mod_desc.json。
- 魔法保留学派等级，排序同等级 Mod 增项；发展型修正保留前置模块，在其中使用同一来源顺序。
- 描述／条件／间隔正文均为 13px，与选项正文一致；条件／间隔标题与事件选项标题同为 12px，已核对计算字号。
- 事件、Agent、神祇投影回归、TypeScript 与静态编译通过；37 页面无重复 ID、导航排序错误或运行时异常，桌面及手机跨页预览通过。
## 2026-10-01：条件逻辑简写

- 相同完整操作数的严格比较与相等条件，以或连接时合并为 ≥／≤，例如 A Intrigue > A Lore 或 A Intrigue = A Lore → A Intrigue ≥ A Lore。
- 同一人物的多个肯定身份／种族条件省去重复主语，例如 A 是 Human 或 A 的种族是 Elf → A 是 Human 或 Elf；不同人物、不同操作数、且条件和否定或条件不误合并。
- 原始 EventRecord 判定保持不变，事件目录、Agent、神祇与流程图共用该展示规则；幂等、嵌套条件和引用保护回归通过。
- One supplicant, and another 的自身引用已核对源文件：两个选项均写 MAEREDUX_CORDY_RUB=1，本事件要求该值为 0；因此为本局一次性。次数和时间字段仅被本事件读取，无法越过已触发锁。现有自引用来自旧状态说明生成器，不是新的事件调用；本轮按用户要求解释，未改其内容。
## 2026-10-01：自身引用与重复状态说明清理

- 扫描全部 600 个事件，展示正文、选项条件、效果与间隔中不再保留指向本事件自身的链接；Agent 及神祇页继续复用同一标准化记录。跨事件、系列总览与完整事件页链接保留。
- One supplicant, and another 只保留一次性事件信息。删除无法越过 MAEREDUX_CORDY_RUB 锁的自身时间窗口、次数字段和相关要求；两个选项均显示“无效果”。JSON 与原始 EventRecord 判定不改动。
- 六个使用 turn 写入已触发标记的事件，合并各选项重复的已触发说明到一次性信息；其他真实效果和随机结果保留。
- A village of faithful、Inhospitable village 与 Shadowed by another 的所有结果都会使独立的全局次数 +1，因此将最多 2／2／3 次统一显示为触发次数，不再在每个结果重复计数和自身链接。
- Story time 保留用户指定的首选项次数规则但不引用自身；Cracked Molar 保留实际解锁的选项。A dreadful habit 的条件型次数例外只说明一次，不误改成无条件次数上限。
- 仅全局一次性锁移除无后续作用的自身计时；人物作用域的锁不删除共享计时，后续节点的等待与链接不删。Inn between places 的无效字段写入技术说明不再重复出现在每个选项，未伪造有效冷却。
- 同类肯定条件提取共同主语和谓语，例如“地形为 Snow 或 Arctic 或 Drycold 或 Tundra”“当前神祇是 Iastur 或 Mammon”“当地有 Sewers 或 Ancient Ruins”。不同人物、否定条件、嵌套且／或和引用属性不混并。
- 回归包含自身与他事件混合引用、死计时／死次数、全局与人物锁、选择性一次性、次数限制、链接保护、概率结果及段落边界；600 个事件、25 个神祇投影、Agent 与 TypeScript 检查通过。
## 2026-10-01：链接标记与条件结构隔离

- 修复 A Petty Imitation、Idle Delusions、Lonely at the Top 等事件中链接预览的多行文本被当成条件行、标签及属性泄漏到正文的问题。条件与段落拆分前仅合并链接标记内部换行，正文换行保持原样。
- 条件语法解析时暂存完整链接标记；预览内的编号、括号、人物 A／B、且／或不参与条件分组与主语删减。完整预览仍可悬浮／触摸查看，并保留跨页面新标签跳转。
- Escamrak 的 Revelry of the Body 原引用含空预览，严格标签匹配未识别。渲染支持空预览属性，且该教义引用补入既有等级范围与 -1 档效果；生成器同步纳入教义等级并规范链接内换行。
- 添加多行／双段落／编号／逻辑词／人物主语的链接保护回归，以及图中三项条件列表数量检查。600 个事件、25 个神祇投影、Agent、TypeScript 与静态编译通过。
- 浏览器扫描索引列出的全部 37 页，未再发现链接源码显示在正文；核对桌面与手机 Imperial Blood 预览、Escamrak 教义预览及跨页新标签行为，无运行时异常。静态产物同步到 docs，未推送。
