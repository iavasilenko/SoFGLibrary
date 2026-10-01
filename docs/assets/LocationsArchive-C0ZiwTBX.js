import{A as e,C as t,D as n,F as r,I as i,N as a,O as o,P as s,i as c,k as l,m as u,n as d,t as f,w as p}from"./index-DWDGuJ0J.js";var m=i(),h=[{id:`place-model`,name:`地点、兴趣点与行动入口`,text:`地点是地图上的聚居地或野外地点载体；兴趣点是附加在地点内的具体设施。
地点与兴趣点各自提供候选行动；地点修正、当地单位、神祇与 Mod 也能追加行动。最终还需检查执行者、渗透、资源、信仰及世界状态，才会显示为可执行。
同一行动在多个地点出现时只保留一份详情，地点卡与兴趣点卡均可跳转。`,baseGame:!0},{id:`place-ruin-distinction`,name:`Ruins 与 Ancient Ruins`,text:`<CrossReference name="Ruins" href="#entry-location-set-cityruins" /> 是毁灭后留下的地点；<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" /> 才是提供 Explore Ruins 的兴趣点。地点名字含 Ruins 不代表可探索。
Temple 是教团设施，Holy Site 是可被亵渎的圣所，二者也不是同一兴趣点。`,baseGame:!0}],g=[{id:`places-base`,title:`游戏本体`,description:`包含人类、精灵、矮人、Orc、Deep Ones、奇观，以及本体神祇相关地点。`,sections:[{id:`places-base-location`,title:`地点`,items:[{id:`location-set-city`,name:`City`,text:`城市的名称与规模随人口、所属文化及现有兴趣点变化；Town、City 等显示名并非各自独立的地点类型。常规防御上限为人口 × Prosperity，再加各兴趣点的防御加成。

出现方式
地图生成或人类殖民完成时建立。固定带有 <CrossReference name="City Palace" href="#entry-location-sub-city" />；沿海城市另带 <CrossReference name="Docks" href="#entry-location-sub-docks" />，并进行 1 次随机兴趣点抽取；内陆城市抽取 2 次。每次从 <CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Library" href="#entry-location-sub-library" /> 等概率选择，重复结果直接舍弃。

可能配置的兴趣点
<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Docks" href="#entry-location-sub-docks" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Cave Fortress" href="#entry-location-sub-undergroundfort" />、<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

英雄任务：
<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />、<CrossReference name="Sell Elven Jewellery" href="#entry-place-task-base-ch-elf-selljewellery" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Bribe Guards" href="#entry-place-task-base-ch-bribeguards" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />、<CrossReference name="Organise Dissent" href="#entry-place-task-base-ch-organisedissent" />、<CrossReference name="Lay Low（聚居地）" href="#entry-place-task-base-ch-laylow" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Ward" href="#entry-place-task-base-ch-h-ward" />、<CrossReference name="Holy: Remove Ward" href="#entry-place-task-base-ch-h-removeward" />、<CrossReference name="Holy: Abyssal Faith" href="#entry-place-task-base-ch-h-abyssalfaith" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />`,image:`/locations/game/loc_city_prague.png`,baseGame:!0},{id:`location-set-cityruins`,name:`Ruins`,text:`聚居地毁灭后留下的地点。会保留原地点的 Shadow，以及允许在毁灭后存续的兴趣点；地点自身不提供 <CrossReference name="Explore Ruins" href="#entry-place-task-base-ch-exploreruins" />。

出现方式
聚居地执行毁灭流程后形成；名称通常为 Ruins of [地点名]。

可能配置的兴趣点
<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />、<CrossReference name="Brother of Sleep" href="#entry-location-sub-wonder-deathisland" />、<CrossReference name="The Entrance" href="#entry-location-sub-wonder-doorway" />、<CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/loc_minor_ruins.png`,baseGame:!0},{id:`location-set-deeponeabyssalcity`,name:`Abyssal City`,text:`地下海洋中的 Deep One 聚居地，防御上限为 50。人口超过 50 后会尝试向相邻地下海洋扩张：新城市分得 25 人口；向已有合格城市迁移时转移本城人口的 25%。

出现方式
<CrossReference name="Deep One Sanctum" href="#entry-location-set-deeponesanctum" /> 引导人口入海后建立；也可由已有 Abyssal City 扩张。普通城市固定带 Abyssal City 兴趣点；建设 Armory 或 Cathedral 时可能新建特殊城市，或在既有城市中增加对应兴趣点。

可能配置的兴趣点
<CrossReference name="Abyssal Armory" href="#entry-location-sub-deep-armory" />、<CrossReference name="Abyssal Cathedral" href="#entry-location-sub-deep-cathedral" />、<CrossReference name="Abyssal City" href="#entry-location-sub-deep-city" />。
固定、随机与改建来源见各兴趣点。

挑战：
<CrossReference name="Deep Armory" href="#entry-place-task-base-ch-deeponesarmory" />、<CrossReference name="Deep Cathedral" href="#entry-place-task-base-ch-deeponescathedral" />`,image:`/locations/game/loc_evil_deepOneCity.png`,baseGame:!0},{id:`location-set-deeponesanctum`,name:`Deep One Sanctum`,text:`人类聚居地被 Deep Ones 接管后的陆地据点。初始 Shadow 为 100%，防御上限为 50；固定增加 <CrossReference name="Sanctum" href="#entry-location-sub-deep-sanctum" />，并接收旧聚居地的兴趣点。

出现方式
Deep One Cult 的转化流程建立。旧兴趣点继续影响此处可执行的任务。

可能配置的兴趣点
<CrossReference name="Sanctum" href="#entry-location-sub-deep-sanctum" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/loc_evil_deepOneSanctum.png`,baseGame:!0},{id:`location-set-dwarvencity`,name:`Dwarven City`,text:`矮人城市。人口上限按继承公式翻倍，防御上限比通常人类体系聚居地额外增加 20。保留一组经过删减的人类聚居地任务，另提供 <CrossReference name="Gold like the Sun" href="#entry-place-task-base-ch-dwarf-sacrificegold" />。

出现方式
地图生成的矮人主要据点。反复从 <CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Gold Mine" href="#entry-location-sub-goldmine" /> 抽取，直至拥有 3 个不同兴趣点。

可能配置的兴趣点
<CrossReference name="Gold Mine" href="#entry-location-sub-goldmine" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />。
固定、随机与改建来源见各兴趣点。

英雄任务：
<CrossReference name="Gold like the Sun" href="#entry-place-task-base-ch-dwarf-sacrificegold" />、<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />`,image:`/locations/game/loc_major_dwarves.png`,baseGame:!0},{id:`location-set-dwarvenoutpost`,name:`Dwarven Outpost`,text:`矮人小型据点。防御上限额外增加 20；提供 <CrossReference name="Gold like the Sun" href="#entry-place-task-base-ch-dwarf-sacrificegold" /> 与 <CrossReference name="Raid Periphery" href="#entry-place-task-base-ch-raidperiphery" />。

出现方式
地图生成的矮人次要据点，从 <CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Gold Mine" href="#entry-location-sub-goldmine" /> 中随机配置 1 个兴趣点。

可能配置的兴趣点
<CrossReference name="Gold Mine" href="#entry-location-sub-goldmine" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />。
固定、随机与改建来源见各兴趣点。

英雄任务：
<CrossReference name="Gold like the Sun" href="#entry-place-task-base-ch-dwarf-sacrificegold" />、<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

挑战：
<CrossReference name="Raid Periphery" href="#entry-place-task-base-ch-raidperiphery" />、<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />`,image:`/locations/game/loc_minor_dwarves.png`,baseGame:!0},{id:`location-set-elvencity`,name:`Elven City`,text:`精灵聚居地，固定带有同名兴趣点，并建立强度 150 的 Elven Arrogance。精灵社会的统治者产生、族群关系与对外援助任务在这里执行。
随从招募：Elven Warbear。

出现方式
地图生成，或精灵扩张行动建立。扩张接收的地点还可能保留原有兴趣点。

可能配置的兴趣点
<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />。
固定、随机与改建来源见各兴趣点。

英雄任务：
<CrossReference name="Find Ruler" href="#entry-place-task-base-ch-elf-findruler" />、<CrossReference name="Duty to the World" href="#entry-place-task-base-ch-elf-dutytotheworld" />、<CrossReference name="Gift Elven Ruler Gold" href="#entry-place-task-base-ch-elf-giverulegold" />、<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

挑战：
<CrossReference name="Drive Xenophobia" href="#entry-place-task-base-ch-elf-drivexenophobia" />、<CrossReference name="Elder Birthright" href="#entry-place-task-base-ch-elf-elderbirthright" />、<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />、<CrossReference name="Temptation of Eternity" href="#entry-place-task-base-ch-elf-temptationofeternity" />、<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />`,image:`/locations/game/loc_minor_elves.png`,baseGame:!0},{id:`location-set-minorhuman`,name:`小型人类聚居地`,text:`农庄、堡垒、教堂等地点共用此类型；首个能定义名称与地图图像的兴趣点决定其外观。提供 <CrossReference name="Raid Periphery" href="#entry-place-task-base-ch-raidperiphery" />，并保留适用的人类聚居地任务。

出现方式
地图生成或人类殖民完成时建立。Farming Community、<CrossReference name="Fortress" href="#entry-location-sub-fort" /> 是候选；相邻地点没有 Holy Site 时，Holy Site 也加入等概率候选池。选中 Holy Site 后另有 50% 概率附带 <CrossReference name="Catacombs" href="#entry-location-sub-catacombs" />。

可能配置的兴趣点
<CrossReference name="Catacombs" href="#entry-location-sub-catacombs" />、<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />、<CrossReference name="Farming Community / Mushroom Farm" href="#entry-location-sub-farms" />、<CrossReference name="Fortress" href="#entry-location-sub-fort" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Cave Fortress" href="#entry-location-sub-undergroundfort" />、<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

英雄任务：
<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Bribe Guards" href="#entry-place-task-base-ch-bribeguards" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />、<CrossReference name="Organise Dissent" href="#entry-place-task-base-ch-organisedissent" />、<CrossReference name="Raid Periphery" href="#entry-place-task-base-ch-raidperiphery" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Ward" href="#entry-place-task-base-ch-h-ward" />、<CrossReference name="Holy: Remove Ward" href="#entry-place-task-base-ch-h-removeward" />、<CrossReference name="Holy: Abyssal Faith" href="#entry-place-task-base-ch-h-abyssalfaith" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />`,image:`/locations/game/loc_minor_farm.png`,baseGame:!0},{id:`location-set-minorother`,name:`野外兴趣点地点`,text:`用于承载遗迹、奇观与女巫据点。普通构造时带 <CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />；若用于生成奇观或女巫据点，生成器会清除这份默认遗迹后放入实际兴趣点。

出现方式
未占用的非海洋地点可生成 <CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />；地图生成器另选址安放奇观与女巫据点。

可能配置的兴趣点
<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />、<CrossReference name="Brother of Sleep" href="#entry-location-sub-wonder-deathisland" />、<CrossReference name="The Entrance" href="#entry-location-sub-wonder-doorway" />、<CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/loc_minor_castle.png`,baseGame:!0},{id:`location-set-minorvinerva`,name:`Heart of the Forest 所在野地`,text:`Vinerva 在空地点放置 <CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" /> 时使用的地点载体；真正提供范围与 <CrossReference name="Harvest Seed" href="#entry-place-task-base-ch-harvestseed" /> 的是该兴趣点。

出现方式
<CrossReference name="Heart of the Forest" href="?god=vinerva#entry-heart-of-the-forest" meta="神力" text="建立 Heart of the Forest；空地点会先生成容纳设施的据点。首次消耗 0，之后消耗 min(4, max(1, floor(N/2))) Power，N 为此前未消耗种子的施放次数。不用种子时依次为 0、1、1、1、2、2、3、3、4，此后为 4。
当地任一人物携有 Vinerva Seed 时会消耗找到的第一枚种子，并且该次不增加 N；即使地点本来就在范围内也会消耗种子。已有 5 个设施的地点可以被选中，但实际不会加入新的 Heart。" image="./vinerva/heart-of-forest.png" /> 神力在空地点建立。

可能配置的兴趣点
<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/forest.png`,baseGame:!1},{id:`location-set-orccamp`,name:`Orc Camp`,text:`Orc 营地用专精区分普通 Camp、<CrossReference name="Fortress" href="#entry-location-sub-fort" />、Mage Camp、Menagerie、Empty Shipyard、Shipyard 与 Mines。这些是营地状态，不是附加兴趣点。
普通营地可建设专精；Mage Camp 增加 Spelltwister 招募；Menagerie 增加特殊随从。<CrossReference name="Fortress" href="#entry-location-sub-fort" />、Mage Camp 能重建常备军，Mines 允许部落进入地下。
随从招募：普通营地提供 Orc Warrior、Goblin；Mage Camp 另有 Spelltwister；Menagerie 另有 Goblin Infiltrator、Webspinner、Razor Rat、Giggler、Changeling。

出现方式
地图生成或 Orc 扩张建立。新营地加入 5 强度 Orcish Industry。基础防御上限为 50 + Orcish Defences / 2，每回合恢复 2 防御，不超过上限。

挑战：
<CrossReference name="Subjugate Orc Camp" href="#entry-place-task-base-ch-subjugate-orcs" />、<CrossReference name="Rest and Resupply（Orc Camp）" href="#entry-place-task-base-ch-rest-inorccamp" />、<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />、<CrossReference name="Orcish Raiding" href="#entry-place-task-base-ch-orcraiding" />、<CrossReference name="Challenge the Horde" href="#entry-place-task-base-ch-orcs-challengethehorde" />、<CrossReference name="Cause Orcish Expansion" href="#entry-place-task-base-ch-orcs-expand" />、<CrossReference name="Opportunistic Encroachment" href="#entry-place-task-base-ch-orcs-opportunisticencroachment" />、<CrossReference name="Organise the Horde" href="#entry-place-task-base-ch-orcs-organisethehorde" />、<CrossReference name="Retreat to the Hills" href="#entry-place-task-base-ch-orcs-retreattothehills" />、<CrossReference name="Build Orc Fortress" href="#entry-place-task-base-ch-orcs-buildfortress" />、<CrossReference name="Tutor Orc Spelltwisters" href="#entry-place-task-base-ch-orcs-buildmages" />、<CrossReference name="Build Menagerie" href="#entry-place-task-base-ch-orcs-buildmenagerie" />、<CrossReference name="Build Shipyard" href="#entry-place-task-base-ch-orcs-buildshipyard" />、<CrossReference name="Build Mines" href="#entry-place-task-base-ch-orcs-buildmines" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />

英雄任务：
<CrossReference name="Devastate Orcish Industry" href="#entry-place-task-base-ch-orcs-devastateorcishindustry" />`,image:`/locations/game/loc_evil_orc.png`,baseGame:!0},{id:`location-set-tombofgods`,name:`The Elder Tomb`,text:`玩家神祇的起始据点，初始 Shadow 为 100%，向外正常传播；自身的毁灭方法为空，不会按普通聚居地变成废墟。
使用 Mammon 时，显示为 The Mountain，并采用对应图像。神祇可通过修正或替换地点增加额外任务。

出现方式
开局生成。没有固定附属兴趣点；直接提供 <CrossReference name="Reforge The Seal" href="#entry-place-task-base-ch-reforgetheseals" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" /> 与 <CrossReference name="Geomancy: Arcane Fortress" href="#entry-place-task-base-mg-aranefortresstomb" />，实际执行者及苏醒条件仍须满足。

英雄任务：
<CrossReference name="Reforge The Seal" href="#entry-place-task-base-ch-reforgetheseals" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" />、<CrossReference name="Geomancy: Arcane Fortress" href="#entry-place-task-base-mg-aranefortresstomb" />

Mammon 使用 The Mountain 时的地点修正
。`,image:`/locations/game/loc_evil_tomb.png`,baseGame:!0},{id:`location-set-vinervamanifestation`,name:`Manifestation`,text:`Vinerva 显现后的地点。保留原先允许毁灭后存续的兴趣点，并增加 <CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />。每回合向随机路径附近的地块扩展森林；毁灭只移除不能存续的兴趣点，不把 Manifestation 换成普通废墟。

出现方式
Vinerva 的 <CrossReference name="Manifestation" href="?god=vinerva#entry-manifestation" meta="神力" text="清空当地 Vinerva's Gift，摧毁原人类聚居地并替换为 Manifestation；保留原废墟中幸存的设施，新增 Heart of the Forest，并清除地点所属国家。除摧毁聚居地的分数外，每个 Manifestation 额外计 3 点胜利分。" image="./vinerva/manifestation.png" /> 神力建立。

可能配置的兴趣点
<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/loc_evil_vinvera.png`,baseGame:!1}]},{id:`places-base-interest`,title:`兴趣点`,items:[{id:`location-sub-ancientruins`,name:`Ancient Ruins`,text:`可供探索的古代遗迹，默认最多探索 5 次。探索带来遗迹事件、物品或危险；同时提供 Hero’s Journey、<CrossReference name="Guard Ruins" href="#entry-place-task-base-ch-guardruins" />、<CrossReference name="Wait to Explore Ruins" href="#entry-place-task-base-ch-waittoexploreruins" /> 和野外 Lay Low。不能渗透，所在聚居地毁灭后仍可存续。

出现方式
地图在合格野地随机生成；不是所有名为 <CrossReference name="Ruins" href="#entry-location-set-cityruins" /> 的地点都拥有此兴趣点。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="Ruins" href="#entry-location-set-cityruins" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Hero's Journey" href="#entry-place-task-base-ch-prophecystep" />、<CrossReference name="Wait to Explore Ruins" href="#entry-place-task-base-ch-waittoexploreruins" />

共同行动：
<CrossReference name="Explore Ruins" href="#entry-place-task-base-ch-exploreruins" />、<CrossReference name="Guard Ruins" href="#entry-place-task-base-ch-guardruins" />

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />`,image:`/locations/game/ancientRuins.png`,baseGame:!0},{id:`location-sub-catacombs`,name:`Catacombs`,text:`当地 Death 低于 200 时，每回合从每个相邻地点吸收最多 5 Death，并转入当地。200 是开始吸收前的检查值，多个邻地同时转入时可以越过该值。

出现方式
普通小型聚居地生成 Holy Site 后，另有 50% 概率配置。

可出现地点
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/catacombs.png`,baseGame:!0},{id:`location-sub-cathedral`,name:`Holy Site / Desecrated Holy Site`,text:`未被亵渎时提供 <CrossReference name="Consecrate" href="#entry-place-task-base-ch-consacrate" />、<CrossReference name="Desecrate Holy Site" href="#entry-place-task-base-ch-desecrate" /> 与 <CrossReference name="Cleanse Own Soul" href="#entry-place-task-base-ch-cleanseownsoul" />；仍可提供适用的 <CrossReference name="Blasphemous Rituals" href="#entry-place-task-base-ch-blasphemousrituals" />。
被亵渎后每回合增加当地 Shadow 1%，最高 100%。Dark Empire 会使其进入亵渎状态；Ophanim 控制会解除该状态；亵渎的圣所在 Alliance 中每回合增加 2 Menace。

出现方式
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />的随机候选；附近已有 Holy Site 时，不加入新地点的候选池。

可出现地点
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Blasphemous Rituals" href="#entry-place-task-base-ch-blasphemousrituals" />、<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Desecrate Holy Site" href="#entry-place-task-base-ch-desecrate" />

英雄任务：
<CrossReference name="Consecrate" href="#entry-place-task-base-ch-consacrate" />、<CrossReference name="Cleanse Own Soul" href="#entry-place-task-base-ch-cleanseownsoul" />`,image:`/locations/game/cathedral.png`,baseGame:!0},{id:`location-sub-city`,name:`City Palace`,text:`城市的政治中心。除 <CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、招募与训练外，按国家首都、Alliance、政治不稳定等条件提供外交、Conclave、<CrossReference name="Dark Coronation" href="#entry-place-task-base-ch-darkcoronation" /> 等任务。
随从招募：Sellsword 供双方招募；Knight 通常属于英雄招募，Dark Empire 或 Ophanim Theocracy 中转为黑暗阵营招募。统治者 Shadow <50%、Awareness >90% 时，另加入英雄的 Paladin 招募。

出现方式
<CrossReference name="City" href="#entry-location-set-city" /> 创建时固定配置。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、<CrossReference name="Inflame Tensions" href="#entry-place-task-base-ch-inflametensions" />、<CrossReference name="Fund Colonisation" href="#entry-place-task-base-ch-buyoutpostflag" />、<CrossReference name="Political Gridlock" href="#entry-place-task-base-ch-politicalgridlock" />、<CrossReference name="Dark Coronation" href="#entry-place-task-base-ch-darkcoronation" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />、<CrossReference name="Redress Crimes" href="#entry-place-task-base-ch-redresscrimes" />

英雄任务：
<CrossReference name="Complete Training" href="#entry-place-task-base-ch-levelup" />、<CrossReference name="Reduce Tensions" href="#entry-place-task-base-ch-reducetensions" />、<CrossReference name="Build Alliance" href="#entry-place-task-base-ch-co-buildalliance" />、<CrossReference name="Conclave of Peace" href="#entry-place-task-base-ch-co-conclave-peace" />、<CrossReference name="Conclave of the Remedy" href="#entry-place-task-base-ch-co-conclave-remedy" />、<CrossReference name="Conclave for a Grand Army" href="#entry-place-task-base-ch-co-conclave-grandarmy" />、<CrossReference name="Mediate Politics" href="#entry-place-task-base-ch-mediatepolitics" />`,image:`/locations/game/cityCentre.png`,baseGame:!0},{id:`location-sub-deep-armory`,name:`Abyssal Armory`,text:`每回合逐个处理世界各处有至少 1 人口的 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />：消耗最多 7 人口，等量补入最近、当前 HP < 100 的 Deep One Raiders；若没有合格军队则在 Armory 所在地点新建。实际实现为 1 人口换 1 HP。
提供 <CrossReference name="Deeps Ones Rise Up" href="#entry-place-task-base-ch-deeponesriseup" />，命令军队行动；不能渗透。

出现方式
<CrossReference name="Deep Armory" href="#entry-place-task-base-ch-deeponesarmory" /> 挑战建立；可附加在已有 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />，或在新建地下海洋据点中替换默认的城市兴趣点。

可出现地点
<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Deeps Ones Rise Up" href="#entry-place-task-base-ch-deeponesriseup" />`,image:`/locations/game/deepOneCity.png`,baseGame:!0},{id:`location-sub-deep-cathedral`,name:`Abyssal Cathedral`,text:`每回合使世界上已有的 Madness、Deep One Cult 各增加 1 强度，并使所有人物已有的 Call of the Abyss 增加 1 强度。只要本回合实际增强了任一目标，自身 Menace +1。提供 <CrossReference name="Deeps Ones Rise Up" href="#entry-place-task-base-ch-deeponesriseup" />，不能渗透。

出现方式
<CrossReference name="Deep Cathedral" href="#entry-place-task-base-ch-deeponescathedral" /> 消耗原城市 25 人口建立；可附加在既有 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />，或在新建据点中替换默认兴趣点。

可出现地点
<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Deeps Ones Rise Up" href="#entry-place-task-base-ch-deeponesriseup" />`,image:`/locations/game/deepOneCity.png`,baseGame:!0},{id:`location-sub-deep-city`,name:`Abyssal City`,text:`地下海洋人口的载体，提供野外 Lay Low 与 <CrossReference name="Flee Beneath" href="#entry-place-task-base-ch-fleebeneaththewaves" />。不能渗透。

出现方式
普通 Abyssal City 创建时配置。

可出现地点
<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />、<CrossReference name="Flee Beneath" href="#entry-place-task-base-ch-fleebeneaththewaves" />`,image:`/locations/game/deepOneCity.png`,baseGame:!0},{id:`location-sub-deep-sanctum`,name:`Sanctum`,text:`<CrossReference name="Deep One Sanctum" href="#entry-location-set-deeponesanctum" /> 固定带有的兴趣点。已经处于渗透状态，不可再渗透；提供野外 Lay Low 与 <CrossReference name="Propagation" href="#entry-place-task-base-ch-deeponespropagation" />。

出现方式
<CrossReference name="Deep One Sanctum" href="#entry-location-set-deeponesanctum" /> 创建时配置。

可出现地点
<CrossReference name="Deep One Sanctum" href="#entry-location-set-deeponesanctum" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />、<CrossReference name="Propagation" href="#entry-place-task-base-ch-deeponespropagation" />`,image:`/locations/game/deepOneSanctum.png`,baseGame:!0},{id:`location-sub-docks`,name:`Docks`,text:`增加 0.2 Prosperity 影响值，并提供 <CrossReference name="Malign Catch" href="#entry-place-task-base-ch-maligncatch" />、<CrossReference name="Plague Ships" href="#entry-place-task-base-ch-plagueships" /> 与渗透。

出现方式
沿海 <CrossReference name="City" href="#entry-location-set-city" /> 创建时固定配置。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Malign Catch" href="#entry-place-task-base-ch-maligncatch" />、<CrossReference name="Plague Ships" href="#entry-place-task-base-ch-plagueships" />、<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/docks.png`,baseGame:!0},{id:`location-sub-elvencity`,name:`Elven City`,text:`精灵城市的中心兴趣点，提供渗透与训练，以及符合首都、国际关系和政治不稳定条件的外交任务。

出现方式
Elven City 创建时固定配置。

可出现地点
<CrossReference name="Elven City" href="#entry-location-set-elvencity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Inflame Tensions" href="#entry-place-task-base-ch-inflametensions" />、<CrossReference name="Political Gridlock" href="#entry-place-task-base-ch-politicalgridlock" />

英雄任务：
<CrossReference name="Complete Training" href="#entry-place-task-base-ch-levelup" />、<CrossReference name="Reduce Tensions" href="#entry-place-task-base-ch-reducetensions" />、<CrossReference name="Build Alliance" href="#entry-place-task-base-ch-co-buildalliance" />、<CrossReference name="Mediate Politics" href="#entry-place-task-base-ch-mediatepolitics" />`,image:`/locations/game/cityCentre.png`,baseGame:!0},{id:`location-sub-farms`,name:`Farming Community / Mushroom Farm`,text:`粮食生成倍率为 2。位于地下时名称变为 Mushroom Farm；还可渗透。

出现方式
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />的随机候选。

可出现地点
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/farms.png`,baseGame:!0},{id:`location-sub-fort`,name:`Fortress`,text:`为所在地点增加 200 防御上限，延长敌军攻占或摧毁地点所需时间。

出现方式
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />的随机候选。

可出现地点
<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/fort.png`,baseGame:!0},{id:`location-sub-goldmine`,name:`Gold Mine`,text:`增加 0.2 Prosperity 影响值，并每回合给当地统治者 1 Gold。

出现方式
矮人城市或据点的随机候选。

可出现地点
<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/orcMines.png`,baseGame:!0},{id:`location-sub-holyordercapital`,name:`Seat of Holy Order`,text:`教团的权力中心。继承 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 的任务，额外提供 <CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" /> 与满足教义条件的 The Hunger’s Promise。为当地提供 2 Security 加成。

出现方式
地图生成教团时安放，通常替换所在地第一个兴趣点；该地点也成为教团的政治据点。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Dark Worship（Temple）" href="#entry-place-task-base-ch-darkworshipattemple" />、<CrossReference name="False Miracle" href="#entry-place-task-base-ch-falsemiracle" />、<CrossReference name="Undermine Religion" href="#entry-place-task-base-ch-underminereligion" />、<CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、<CrossReference name="The Hunger's Promise" href="#entry-place-task-base-ch-hungerspromise" />

宗教任务：
<CrossReference name="Holy: Dark Worship" href="#entry-place-task-base-ch-h-darkworshipattemple" />、<CrossReference name="Holy: Start Plague" href="#entry-place-task-base-ch-h-startplague" />、<CrossReference name="Holy: Basic Worship" href="#entry-place-task-base-ch-h-basicworship" />

共同行动：
<CrossReference name="Influence Holy Order" href="#entry-place-task-base-ch-influenceholyorder" />、<CrossReference name="Fund Holy Order" href="#entry-place-task-base-ch-fundholyorder" />`,image:`/locations/game/holyOrderSeat.png`,baseGame:!0},{id:`location-sub-library`,name:`Library`,text:`每回合有 2% 概率生成 Arcane Secret；当地已有 Arcane Secret 时不重复建立。生成的秘密初始强度为 50。提供 <CrossReference name="Research Arcane Secret" href="#entry-place-task-base-ch-undertakeresearch" />；Iastur 存在且 Library 未被渗透时，额外提供 <CrossReference name="Weaken Iastur" href="#entry-place-task-base-ch-weakeniastur" />。

出现方式
城市与矮人据点的随机候选。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />

英雄任务：
<CrossReference name="Weaken Iastur" href="#entry-place-task-base-ch-weakeniastur" />

共同行动：
<CrossReference name="Research Arcane Secret" href="#entry-place-task-base-ch-undertakeresearch" />`,image:`/locations/game/library.png`,baseGame:!0},{id:`location-sub-market`,name:`Market`,text:`增加 0.2 Prosperity 影响值，配置 3 个商品购买槽。商品由 <CrossReference name="Buy Item" href="#entry-place-task-base-ch-buyitem" /> 的刷新逻辑决定，Prosperity 影响物品品质；渗透后可 Force Restock。

出现方式
城市与矮人据点的随机候选。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Force Restock（Market）" href="#entry-place-task-base-ch-forcerestock" />、<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />

共同行动：
<CrossReference name="Buy Item" href="#entry-place-task-base-ch-buyitem" />`,image:`/locations/game/market.png`,baseGame:!0},{id:`location-sub-sewers`,name:`Vast Sewers`,text:`城市地下管网。渗透后可传播 Plague，并招募此处配置的 Vermin。

出现方式
城市与矮人据点的随机候选。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Start Plague" href="#entry-place-task-base-ch-startplague" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />`,image:`/locations/game/sewers.png`,baseGame:!0},{id:`location-sub-temple`,name:`Temple`,text:`所属教团的神殿，实际名称由教团决定。提供影响教团、捐款、<CrossReference name="False Miracle" href="#entry-place-task-base-ch-falsemiracle" />、<CrossReference name="Undermine Religion" href="#entry-place-task-base-ch-underminereligion" /> 及教义允许的宗教任务；每回合执行该教团教义对神殿的效果，Prosperity 影响也由教团计算。

出现方式
<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" /> 在信奉本教团的聚居地建立；女巫宗教模式也可能在野外地点直接生成。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Dark Worship（Temple）" href="#entry-place-task-base-ch-darkworshipattemple" />、<CrossReference name="False Miracle" href="#entry-place-task-base-ch-falsemiracle" />、<CrossReference name="Undermine Religion" href="#entry-place-task-base-ch-underminereligion" />

宗教任务：
<CrossReference name="Holy: Dark Worship" href="#entry-place-task-base-ch-h-darkworshipattemple" />、<CrossReference name="Holy: Start Plague" href="#entry-place-task-base-ch-h-startplague" />、<CrossReference name="Holy: Basic Worship" href="#entry-place-task-base-ch-h-basicworship" />

共同行动：
<CrossReference name="Influence Holy Order" href="#entry-place-task-base-ch-influenceholyorder" />、<CrossReference name="Fund Holy Order" href="#entry-place-task-base-ch-fundholyorder" />`,image:`/locations/game/temple.png`,baseGame:!0},{id:`location-sub-undergroundfort`,name:`Cave Fortress`,text:`为所在地点增加 200 防御上限。

出现方式
人类向地下建立殖民据点时配置；该流程最多保留规定数量的其他兴趣点后加入本堡垒。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/fort.png`,baseGame:!0},{id:`location-sub-vinerva-heartofforest`,name:`Heart of the Forest`,text:`Vinerva 神力的范围支点，增加 50 防御上限，不能渗透。提供 <CrossReference name="Harvest Seed" href="#entry-place-task-base-ch-harvestseed" />；使用相关神力积累 Menace，可能引来国家军队摧毁它。

出现方式
<CrossReference name="Heart of the Forest" href="?god=vinerva#entry-heart-of-the-forest" meta="神力" text="建立 Heart of the Forest；空地点会先生成容纳设施的据点。首次消耗 0，之后消耗 min(4, max(1, floor(N/2))) Power，N 为此前未消耗种子的施放次数。不用种子时依次为 0、1、1、1、2、2、3、3、4，此后为 4。
当地任一人物携有 Vinerva Seed 时会消耗找到的第一枚种子，并且该次不增加 N；即使地点本来就在范围内也会消耗种子。已有 5 个设施的地点可以被选中，但实际不会加入新的 Heart。" image="./vinerva/heart-of-forest.png" /> 神力可在合格既有地点增加兴趣点，空地点则先建立其野地载体；<CrossReference name="Manifestation" href="?god=vinerva#entry-manifestation" meta="神力" text="清空当地 Vinerva's Gift，摧毁原人类聚居地并替换为 Manifestation；保留原废墟中幸存的设施，新增 Heart of the Forest，并清除地点所属国家。除摧毁聚居地的分数外，每个 Manifestation 额外计 3 点胜利分。" image="./vinerva/manifestation.png" /> 也会添加。

可出现地点
<CrossReference name="Heart of the Forest 所在野地" href="#entry-location-set-minorvinerva" />、<CrossReference name="Manifestation" href="#entry-location-set-vinervamanifestation" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Harvest Seed" href="#entry-place-task-base-ch-harvestseed" />`,image:`/locations/game/forest.png`,baseGame:!1},{id:`location-sub-witchcoven`,name:`Coven of Witches`,text:`可渗透的野外女巫据点，防御加成 50。渗透后可利用 <CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、Dark Worship 以及 Crow 招募；Menace 增长可能引来人类军队摧毁兴趣点。

出现方式
采用旧式女巫据点生成方式时放入<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />；宗教模式下的<CrossReference name="女巫 Temple" href="#entry-place-hook-base-1" /> 是另一种实现。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />、<CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、<CrossReference name="Dark Worship（Coven）" href="#entry-place-task-base-ch-darkworship" />、<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />`,image:`/locations/game/coven.png`,baseGame:!0},{id:`location-sub-wonder-deathisland`,name:`Brother of Sleep`,text:`奇观，提供 <CrossReference name="A Gift to Others" href="#entry-place-task-base-ch-deathisland-xpshare" /> 与 <CrossReference name="A Gift of Silence" href="#entry-place-task-base-ch-deathisland-disrupt" />，用于分享经验，或牺牲执行者以打断英雄行动。防御加成 50，不能渗透，毁灭后仍存续。

出现方式
地图奇观生成器放入<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="Ruins" href="#entry-location-set-cityruins" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="A Gift to Others" href="#entry-place-task-base-ch-deathisland-xpshare" />、<CrossReference name="A Gift of Silence" href="#entry-place-task-base-ch-deathisland-disrupt" />`,image:`/locations/game/deathIsland.png`,baseGame:!0},{id:`location-sub-wonder-doorway`,name:`The Entrance`,text:`奇观，Agent 移动到这里可以触发相关事件；自身任务列表为空。防御加成 50，不能渗透，毁灭后仍存续。

出现方式
地图奇观生成器放入<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="Ruins" href="#entry-location-set-cityruins" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/doorway.png`,baseGame:!0},{id:`location-sub-wonder-primalfont`,name:`Primal Font`,text:`以独立 Control 数值争夺的奇观，提供两种 Wrestle for Control 与 <CrossReference name="Drink Primal Waters" href="#entry-place-task-base-ch-drinkprimalwaters" />。每回合将所在及相邻地块的温度、湿度设为 0.5。防御加成 50，不能渗透，毁灭后仍存续。

出现方式
地图奇观生成器放入<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="Ruins" href="#entry-location-set-cityruins" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Wrestle for Control（玩家）" href="#entry-place-task-base-ch-wrestleforcontrol" />

英雄任务：
<CrossReference name="Wrestle for Control（英雄）" href="#entry-place-task-base-ch-wrestleforcontrol-good" />

共同行动：
<CrossReference name="Drink Primal Waters" href="#entry-place-task-base-ch-drinkprimalwaters" />`,image:`/locations/game/font.png`,baseGame:!0}]},{id:`places-base-extensions`,title:`条件性任务入口`,items:[{id:`place-hook-base-0`,name:`Iastur · The Elder Tomb`,text:`使用 Iastur 时，开局额外向 <CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" /> 加入 <CrossReference name="Summon Tome" href="#entry-place-task-base-ch-summonlaughingtome" />。

对应地点 / 兴趣点
<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />

挑战：
<CrossReference name="Summon Tome" href="#entry-place-task-base-ch-summonlaughingtome" />`,baseGame:!0},{id:`place-hook-base-1`,name:`女巫 Temple`,text:`女巫教团建立 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 时，额外加入 <CrossReference name="Holy: Arbormancy" href="#entry-place-task-base-ch-h-w-arbormancy" />、野外 Lay Low 与 Crow 招募。

对应地点 / 兴趣点
<CrossReference name="Temple" href="#entry-location-sub-temple" />

宗教任务：
<CrossReference name="Holy: Arbormancy" href="#entry-place-task-base-ch-h-w-arbormancy" />

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />`,baseGame:!0}]},{id:`places-base-0`,title:`挑战`,items:[{id:`place-task-base-ch-poisonhero`,name:`Poison Hero`,text:`目标英雄下一次休息时中毒，先被打断 5 回合，再保留中毒削弱 25 回合。`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`目标以这里为故乡；地点渗透度 >0%，目标没有 Poisoned。`,statLine:`Complexity: 25
Profile: 50
Menace: 40
XP: 42`},{id:`place-task-base-ch-ransackpossessions`,name:`Ransack Possessions`,text:`打开目标人物的物品与 Gold 转移界面，可拿取或塞入物品；目标会对执行者结怨。`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`目标以这里为故乡；地点渗透度 ≥50%，距离上次使用至少 100 回合。`,statLine:`Complexity: 25
Profile: 50
Menace: 40
XP: 42`},{id:`place-task-base-ch-wellofshadows`,name:`Well of Shadows`,text:`建立或增强 Well of Shadows，向相邻 Shadow 更低的人类聚居地传播黑暗。`,image:`/locations/game/wellOfShadows.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地 Shadow ≥10%，Well of Shadows <100。`,statLine:`Complexity: 40
Profile: 40
Menace: 30 × 相邻合格人类地点的正向 Shadow 差值之和 / 100；差值为 0 时 -50
XP: 60`},{id:`place-task-base-ch-bribeguards`,name:`Bribe Guards`,text:`消耗 25 Gold，建立 Bribed Guards，使 Security 降低 2，持续 25 回合。`,image:`/locations/game/bribe.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`没有 Bribed Guards，且执行者有足够 Gold。`,statLine:`Complexity: 2
Profile: 60
Menace: 0
XP: 6`},{id:`place-task-base-ch-assassinatesilent`,name:`Silent Assassination`,text:`暗杀当地统治者，由继承人接替；相较 <CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />，暴露更低。`,image:`/locations/game/silentAssassin.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地有统治者，渗透度为 100%。`,statLine:`Complexity: 30 + 5 × Security
Profile: 50
Menace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-assassinatebrutal`,name:`Brutal Assassination`,text:`杀死当地统治者，由继承人接替；提高执行者的 Profile 与 Menace。`,image:`/locations/game/brutalAssassination.png`,meta:`Might`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地有统治者。`,statLine:`Complexity: 50 + 5 × Security
Profile: 50
Menace: （继承人 Shadow − 统治者 Shadow）/ 2；没有合格继承人时 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-accessvault`,name:`Access Vault`,text:`打开统治者的物品与 Gold 转移界面，可拿取财物或放入物品。`,image:`/locations/game/accessVault.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地有统治者且渗透度为 100%；Dark Empire 或 Ophanim Theocracy 走专门放行分支。`,statLine:`Complexity: 20 + 8 × Security；Dark Empire / Ophanim Theocracy 为 1
Profile: 50
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-accessvaultlimited`,name:`Subtle Thievery`,text:`打开统治者财物界面，本次最多取得 35 Gold。`,image:`/locations/game/accessVault.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地有统治者，渗透度为 100%。`,statLine:`Complexity: 10 + 4 × Security
Profile: 50
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-organisedissent`,name:`Organise Dissent`,text:`建立 Organised Dissent，持续降低 Security、增加 Unrest，直到其持续期结束或统治者更换。`,image:`/locations/game/organisedDissent.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地有统治者、没有 Organised Dissent，并且有 Lingering Resentment，或 Unrest ≥100。`,statLine:`Complexity: 25
Profile: 40
Menace: 50
XP: 42`},{id:`place-task-base-ch-laylow`,name:`Lay Low（聚居地）`,text:`首回合不减少数值；之后每回合降低 Profile、Menace 各 1，不低于人物下限。渗透度 ≥50%、Shadow ≥50%、信仰 Ophanim 的地点分别增加同量效果。`,image:`/locations/game/layLow.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Subsumed Settlement" href="#entry-location-sub-memory-adolia" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />`,limit:`Profile 或 Menace 高于人物下限。`,statLine:`Complexity: 15
Profile: 30
Menace: 0
XP: 29`},{id:`place-task-base-ch-deeponesarmory`,name:`Deep Armory`,text:`创建 <CrossReference name="Abyssal Armory" href="#entry-location-sub-deep-armory" />；在新的地下海洋地点建立据点，或在已有 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 增加 Armory。军队补充由 Armory 每回合处理。`,image:`/locations/game/deepOnes.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />`,limit:`无额外限制。`,statLine:`Complexity: 40
Profile: 50
Menace: 100
XP: 60`},{id:`place-task-base-ch-deeponescathedral`,name:`Deep Cathedral`,text:`消耗 25 人口，创建 <CrossReference name="Abyssal Cathedral" href="#entry-location-sub-deep-cathedral" />；可新建地下据点或向已有城市添加兴趣点。`,image:`/locations/game/deepOnes.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />`,limit:`出发 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 人口 >25。`,statLine:`Complexity: 40
Profile: 50
Menace: 100
XP: 60`},{id:`place-task-base-ch-raidperiphery`,name:`Raid Periphery`,text:`增加当地 Devastation，破坏 Prosperity 与粮食供应。`,image:`/locations/game/raid.png`,meta:`Might`,baseGame:!0,location:`<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />`,limit:`Devastation <150；Complexity 随防御增长。`,statLine:`Complexity: max(10, 防御 / 2)
Profile: 50
Menace: 30 ×（1 − 当地 Shadow / 50）
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-elf-drivexenophobia`,name:`Drive Xenophobia`,text:`使本国及邻国完全渗透的地点中的统治者更厌恶其他种族。`,image:`/locations/game/driveXenophobia.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`当地精灵国家与相邻非精灵国家的关系 ≤-30%。`,statLine:`Complexity: 1
Profile: 60
Menace: 0
XP: 3`},{id:`place-task-base-ch-elf-elderbirthright`,name:`Elder Birthright`,text:`消耗 1 神力，使当地 Elven Arrogance +25，最高 300。`,image:`/locations/game/elderBirthright.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`至少有 1 神力。`,statLine:`Complexity: 1
Profile: 50
Menace: 0
XP: 3`},{id:`place-task-base-ch-subjugate-orcs`,name:`Subjugate Orc Camp`,text:`通过击败营地首领，使 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 完全渗透。`,image:`/locations/game/infiltrate.png`,meta:`Might + Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地未完全渗透，执行者携带该部落的 Horde Banner。`,statLine:`Complexity: 25
Profile: 40
Menace: 40
XP: 42`},{id:`place-task-base-ch-rest-inorccamp`,name:`Rest and Resupply（Orc Camp）`,text:`恢复执行者与非 Undead 随从 HP；Orc 随从也能在这里恢复。`,image:`/locations/game/restAndRearm.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />`,limit:`玩家执行者要求营地完全渗透；Orc 自主单位使用自己的放行条件。`,statLine:`Complexity: 3
Profile: 20
Menace: 0
XP: 8`},{id:`place-task-base-ch-laylowwilderness`,name:`Lay Low（野外）`,text:`首回合不减少数值；之后每回合降低 Profile、Menace 各 2，不低于人物下限。地点完全渗透时效果翻倍。`,image:`/locations/game/layLow.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />、<CrossReference name="Abyssal City" href="#entry-location-sub-deep-city" />、<CrossReference name="Sanctum" href="#entry-location-sub-deep-sanctum" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />、<CrossReference name="Demonic Nexus（兴趣点）" href="#entry-location-sub-bloodshed-fortress" />、<CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />、<CrossReference name="Werewolf Run（兴趣点）" href="#entry-location-sub-nature-wolfrun" />、<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`Profile 或 Menace 高于人物下限。`,statLine:`Complexity: 7
Profile: 30
Menace: 0
XP: 16`},{id:`place-task-base-ch-orcraiding`,name:`Orcish Raiding`,text:`劫掠相邻最富有的人类统治者，取得其 Gold 的 20%，并使部落 Menace +2。`,image:`/locations/game/raid.png`,meta:`Might + Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />`,limit:`至少相邻一个有人类统治者的聚居地。`,statLine:`Complexity: 50
Profile: 40
Menace: 40
XP: 72`},{id:`place-task-base-ch-orcs-challengethehorde`,name:`Challenge the Horde`,text:`立即与 Orc Upstart 开战，执行者作为防守方。`,image:`/locations/game/evil_orcUpstart.png`,meta:`Might + Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`玩家控制人物，没有随从；该部落没有现存的 Orc Upstart。`,statLine:`Complexity: 5
Profile: 40
Menace: 40
XP: 12`},{id:`place-task-base-ch-orcs-expand`,name:`Cause Orcish Expansion`,text:`在相邻可定居地点建立已渗透的 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。`,image:`/locations/game/orcishIndustry.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />`,limit:`当前营地已完全渗透，属于 Orc 部落，至少有一个满足部落宜居度等定居检查的相邻地点。`,statLine:`Complexity: 15
Profile: 30
Menace: 0
XP: 29`},{id:`place-task-base-ch-orcs-opportunisticencroachment`,name:`Opportunistic Encroachment`,text:`向相邻合格人类小型聚居地加入 Orcish Encroachment。目标国家卷入战争，且当地 Devastation >20 或防御为 0 时，可被部落夺取；会恶化两国关系。`,image:`/locations/game/orcEncroachment.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />`,limit:`营地完全渗透，相邻目标不是 <CrossReference name="City" href="#entry-location-set-city" /> 或 <CrossReference name="Elven City" href="#entry-location-set-elvencity" />，且尚无 Orcish Encroachment。`,statLine:`Complexity: 15
Profile: 30
Menace: 0
XP: 29`},{id:`place-task-base-ch-orcs-organisethehorde`,name:`Organise the Horde`,text:`本地 Orcish Industry +50，相邻地点 +25，各自最高 100。`,image:`/locations/game/orcishIndustry.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`已完全渗透的 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />，当地 Industry <100。`,statLine:`Complexity: 15
Profile: 30
Menace: max(0, 100 − Orcish Industry)
XP: 29`},{id:`place-task-base-ch-orcs-retreattothehills`,name:`Retreat to the Hills`,text:`把部落边境一半 Orcish Industry 转为防御工事，并调动部队防守。`,image:`/locations/game/orcDefences.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`已完全渗透的 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。`,statLine:`Complexity: 1
Profile: 30
Menace: -20
XP: 3`},{id:`place-task-base-ch-orcs-buildfortress`,name:`Build Orc Fortress`,text:`把普通营地升级为 <CrossReference name="Fortress" href="#entry-location-sub-fort" />，允许建立常备军。`,image:`/locations/game/unit_orc.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地已完全渗透且未专精；费用为 25 ×（2 + 相邻专精 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 数）Gold。`,statLine:`Complexity: 50
Profile: 30
Menace: 0
XP: 72`},{id:`place-task-base-ch-orcs-buildmages`,name:`Tutor Orc Spelltwisters`,text:`把普通营地升级为 Mage Camp，允许招募 Spelltwister 并供养施法军队。`,image:`/locations/game/unit_magicOrc.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地已完全渗透且未专精；任一基础法术学派至少 2 级；费用为 25 ×（2 + 相邻专精 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 数）Gold。`,statLine:`Complexity: 50
Profile: 30
Menace: 0
XP: 72`},{id:`place-task-base-ch-orcs-buildmenagerie`,name:`Build Menagerie`,text:`把普通营地升级为 Menagerie，开放特殊随从招募。`,image:`/locations/game/manticore.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地已完全渗透且未专精；携带 Manticore Trophy，费用为 2 × 25 Gold。`,statLine:`Complexity: 50
Profile: 30
Menace: 0
XP: 72`},{id:`place-task-base-ch-orcs-buildshipyard`,name:`Build Shipyard`,text:`建立 Empty Shipyard；之后需要 The Warlord 从人类 <CrossReference name="Docks" href="#entry-location-sub-docks" /> 夺来船只，才能用于海上扩张。`,image:`/locations/game/unit_ship.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`地表沿海、已完全渗透且未专精的 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />；费用为 25 ×（2 + 相邻专精 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 数）Gold。`,statLine:`Complexity: 50
Profile: 30
Menace: 0
XP: 72`},{id:`place-task-base-ch-orcs-buildmines`,name:`Build Mines`,text:`把普通营地升级为 Mines，使该部落能够扩张到地下。`,image:`/locations/game/orcMines.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地已完全渗透且未专精；费用为 2 × 25 Gold。`,statLine:`Complexity: 50
Profile: 30
Menace: 0
XP: 72`},{id:`place-task-base-ch-infiltrate`,name:`Infiltrate`,text:`渗透一个兴趣点，解锁依赖它的行动。`,image:`/locations/game/infiltrate.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="Catacombs" href="#entry-location-sub-catacombs" />、<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />、<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Docks" href="#entry-location-sub-docks" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />、<CrossReference name="Farming Community / Mushroom Farm" href="#entry-location-sub-farms" />、<CrossReference name="Fortress" href="#entry-location-sub-fort" />、<CrossReference name="Gold Mine" href="#entry-location-sub-goldmine" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Library" href="#entry-location-sub-library" />、<CrossReference name="Market" href="#entry-location-sub-market" />、<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Cave Fortress" href="#entry-location-sub-undergroundfort" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />、<CrossReference name="Dwarven Fortress" href="#entry-location-sub-dwarffortress" />、<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`兴趣点尚未渗透；<CrossReference name="City Palace" href="#entry-location-sub-city" /> 必须最后渗透，先完成当地其他可渗透兴趣点。所选 Alliance 规则可能禁止在联盟领地渗透。`,statLine:`Complexity: 50 + 25 × Security
Profile: 30
Menace: 20
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-blasphemousrituals`,name:`Blasphemous Rituals`,text:`神力 +2，兴趣点 Menace +15，当地 Death +5。`,image:`/locations/game/blasphemousRituals.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />`,limit:`Holy Site 已被亵渎。`,statLine:`Complexity: 35
Profile: 40
Menace: 45；无法继续寻找传播目标时 -50
XP: 55`},{id:`place-task-base-ch-desecrate`,name:`Desecrate Holy Site`,text:`把 Holy Site 转为 Desecrated Holy Site，使其持续产生 Shadow 并关闭 <CrossReference name="Consecrate" href="#entry-place-task-base-ch-consacrate" />。`,image:`/locations/game/desecreatedCathedral.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />`,limit:`Holy Site 已渗透，Shadow ≥66%；当地不属于 Dark Empire 或 Ophanim Theocracy。`,statLine:`Complexity: 30
Profile: 30
Menace: 20
XP: 49`},{id:`place-task-base-ch-enshadow`,name:`Enshadow`,text:`提高当地 Shadow，建立能向周边传播黑暗的据点。`,image:`/locations/game/enshadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />`,limit:`地点完全渗透、Shadow <100%，Ward ≤50。`,statLine:`Complexity: 25
Profile: 50
Menace: 50 ×（1 − 当地 Shadow / 100）× min(Well of Shadows / 100 + 1, 2)
XP: 42`},{id:`place-task-base-ch-inflametensions`,name:`Inflame Tensions`,text:`使本国与所有邻国关系降低 35%。`,image:`/locations/game/badDiplomacy.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`在首都的 <CrossReference name="City Palace" href="#entry-location-sub-city" /> 或 <CrossReference name="Elven City" href="#entry-location-set-elvencity" /> 执行，目标兴趣点已渗透。`,statLine:`Complexity: 30
Profile: 国家领地数×5
Menace: 国家最高外交紧张度×100
XP: 49`},{id:`place-task-base-ch-buyoutpostflag`,name:`Fund Colonisation`,text:`花费 300 Gold，取得用于建立新殖民据点的旗帜。`,image:`/locations/game/wrestleForControl.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`在首都；国家属于 Dark Empire 或 Ophanim Theocracy，或执行者 Menace <10。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-base-ch-politicalgridlock`,name:`Political Gridlock`,text:`取消当地统治者当前行动，改为浪费 10 回合的 Political Gridlock；若在首都，国家行动也受到影响。`,image:`/locations/game/gridlock.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`当地完全渗透。`,statLine:`Complexity: 20
Profile: 50
Menace: 30
XP: 36`},{id:`place-task-base-ch-darkcoronation`,name:`Dark Coronation`,text:`授予新 Agent 领导 Dark Empire 的能力，允许其发动 Dark Crusade，或在帝国毁灭后重建。`,image:`/locations/game/darkCrown.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`在 Dark Empire 首都，当前没有能发动 Dark Crusade 的 Agent；消耗 200 Gold。`,statLine:`Complexity: 50
Profile: 100
Menace: 5000
XP: 72`},{id:`place-task-base-ch-deeponesriseup`,name:`Deeps Ones Rise Up`,text:`命令 Deep One Raiders 开始进攻人类聚居地。`,image:`/locations/game/deepOnes.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="Abyssal Armory" href="#entry-location-sub-deep-armory" />、<CrossReference name="Abyssal Cathedral" href="#entry-location-sub-deep-cathedral" />`,limit:`可用性随世界的 Deep One 进攻状态处理。`,statLine:`Complexity: 30
Profile: 50
Menace: 100
XP: 49`},{id:`place-task-base-ch-fleebeneaththewaves`,name:`Flee Beneath`,text:`进入隐藏状态；不移动或开始其他行动时，英雄无法攻击，每回合降低 1 Menace 与 Profile。`,image:`/locations/game/hideInAbyss.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Abyssal City" href="#entry-location-sub-deep-city" />`,limit:`无额外限制。`,statLine:`Complexity: 1
Profile: 40
Menace: 50
XP: 3`},{id:`place-task-base-ch-deeponespropagation`,name:`Propagation`,text:`吸引相邻已渗透人类聚居地的 20% 人口进入深海城市，并使 <CrossReference name="Sanctum" href="#entry-location-sub-deep-sanctum" /> Menace +10。`,image:`/locations/game/deepOnes.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Sanctum" href="#entry-location-sub-deep-sanctum" />`,limit:`效果作用于相邻目标；实际入口检查为世界上存在任一渗透度 >0 的人类聚居地。`,statLine:`Complexity: 35
Profile: 50
Menace: 100
XP: 55`},{id:`place-task-base-ch-maligncatch`,name:`Malign Catch`,text:`建立 Malign Catch，逐回合增强 Shadow、Madness，并为发展 Deep One Cult 提供入口。`,image:`/locations/game/malignCatch.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Docks" href="#entry-location-sub-docks" />`,limit:`<CrossReference name="Docks" href="#entry-location-sub-docks" /> 已渗透，当地没有 Malign Catch 或 Deep One Cult。`,statLine:`Complexity: 40
Profile: 50
Menace: Shadow >50% 时为 -50；否则为（100 − Plague）× 0.5
XP: 60`},{id:`place-task-base-ch-plagueships`,name:`Plague Ships`,text:`把 Plague 沿贸易路线传给其他 <CrossReference name="Docks" href="#entry-location-sub-docks" />。`,image:`/locations/game/plague.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Docks" href="#entry-location-sub-docks" />`,limit:`本地 <CrossReference name="Docks" href="#entry-location-sub-docks" /> 已渗透，Plague ≥10，存在连接其他 <CrossReference name="Docks" href="#entry-location-sub-docks" /> 的贸易路线。`,statLine:`Complexity: 50
Profile: 50
Menace: Shadow >50% 时为 -50；否则为（100 − Plague）× 0.5
XP: 72`},{id:`place-task-base-ch-darkworshipattemple`,name:`Dark Worship（Temple）`,text:`向最近的未完全 Enshadowed 连通地点分配总量最多 150% 的 Shadow；<CrossReference name="Temple" href="#entry-location-sub-temple" /> Menace +20。`,image:`/locations/game/enshadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`地点完全渗透，<CrossReference name="Temple" href="#entry-location-sub-temple" /> 所属教团的 Dark Worship <0。`,statLine:`Complexity: 25
Profile: 40
Menace: 45；传播已无可达目标时为 −50
XP: 42`},{id:`place-task-base-ch-falsemiracle`,name:`False Miracle`,text:`消耗 2 神力伪造神迹，增加对教团的影响力；教团规模越大，收益越低。`,image:`/locations/game/falseMiracle.png`,meta:`Lore + Intrigue`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`任务整个期间都需要保有足够神力。`,statLine:`Complexity: 30
Profile: 0
Menace: 0
XP: 49`},{id:`place-task-base-ch-underminereligion`,name:`Undermine Religion`,text:`使国家君主更厌恶目标 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 的教团。`,image:`/locations/game/badDiplomacy.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`<CrossReference name="Temple" href="#entry-location-sub-temple" /> 已渗透，首都有部分渗透；首都信仰不同且君主对目标教团尚未达到最厌恶。`,statLine:`Complexity: 30
Profile: 0
Menace: 0
XP: 49`},{id:`place-task-base-ch-hungerspromise`,name:`The Hunger's Promise`,text:`为教团加入 The Feast 教义，使其能发展 The Hunger 与 Vampire 相关能力。`,image:`/locations/game/theHunger.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />`,limit:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" /> 已渗透，尚无 The Feast；执行者为 The Baroness、带 The Hunger，或该教团已有带 The Hunger 的 Acolyte。`,statLine:`Complexity: 35
Profile: 50
Menace: 200
XP: 55`},{id:`place-task-base-ch-forcerestock`,name:`Force Restock（Market）`,text:`花费 15 Gold，刷新 <CrossReference name="Market" href="#entry-location-sub-market" /> 的商品。`,image:`/locations/game/market.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="Market" href="#entry-location-sub-market" />`,limit:`<CrossReference name="Market" href="#entry-location-sub-market" /> 已渗透，执行者有足够 Gold。`,statLine:`Complexity: 10
Profile: 30
Menace: 20
XP: 21`},{id:`place-task-base-ch-startplague`,name:`Start Plague`,text:`建立 Plague，降低 Prosperity 与人口，并可能继续向邻地传播。`,image:`/locations/game/plague.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />`,limit:`<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" /> 已渗透，当地没有 Plague。`,statLine:`Complexity: 35
Profile: 50
Menace: Shadow >50% 时为 -50；否则为（100 − Plague）× 0.5
XP: 55`},{id:`place-task-base-ch-harvestseed`,name:`Harvest Seed`,text:`完成后获得一枚 Vinerva Seed。没有额外的执行者限制。`,image:`/locations/game/i_vinervaSeed.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Heart of the Forest" href="#entry-location-sub-vinerva-heartofforest" />`,limit:`无额外限制。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-base-ch-darkworship`,name:`Dark Worship（Coven）`,text:`向最近未完全 Enshadowed 的连通地点分配总量最多 150% 的 Shadow；Coven Menace +20。`,image:`/locations/game/enshadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />`,limit:`地点完全渗透。`,statLine:`Complexity: 25
Profile: 40
Menace: 45；传播已无可达目标时为 −50
XP: 42`},{id:`place-task-base-ch-deathisland-xpshare`,name:`A Gift to Others`,text:`牺牲执行者，将其累积 XP 分给其他 Agent。`,image:`/locations/game/skull.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Brother of Sleep" href="#entry-location-sub-wonder-deathisland" />`,limit:`至少有 2 名 Agent。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`},{id:`place-task-base-ch-deathisland-disrupt`,name:`A Gift of Silence`,text:`牺牲执行者，打断全部英雄当前任务，并使其持续受阻等同于执行者等级的回合数。`,image:`/locations/game/skull.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Brother of Sleep" href="#entry-location-sub-wonder-deathisland" />`,limit:`执行者至少 1 级。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`},{id:`place-task-base-ch-wrestleforcontrol`,name:`Wrestle for Control（玩家）`,text:`增加玩家对 <CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" /> 的 Control。`,image:`/locations/game/wrestleForControl.png`,meta:`Might + Lore + Intrigue + Command`,baseGame:!0,location:`<CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" />`,limit:`Control <100。`,statLine:`Complexity: 100
Profile: 30
Menace: 20
XP: 121`},{id:`place-task-base-ch-summonlaughingtome`,name:`Summon Tome`,text:`召回遗失、休眠或被非玩家人物持有的未封印书。有人正在 Bind Tome 时不能开始；若非玩家英雄或统治者持有封印书，召回会失败，需要夺回或等待其使用、离手。完成取回时 Profile +3、Menace +10。`,image:`/locations/game/i_laughingTome.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />`,limit:`无人正在执行 Bind Tome。被非玩家英雄或统治者持有的封印书不能正常召回。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`}]},{id:`places-base-1`,title:`共同行动`,items:[{id:`place-task-base-ch-rest`,name:`Rest and Resupply`,text:`恢复人物以及非 Undead、非 Orc 随从的 HP。`,image:`/locations/game/restAndRearm.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Subsumed Settlement" href="#entry-location-sub-memory-adolia" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者不能带 Undead 或 Orc 标签；地点 Unrest <100、Famine <50。非玩家英雄在高 Ophanim’s Faith 地点另受限制。`,statLine:`Complexity: 3
Profile: 20
Menace: 0
XP: 8`},{id:`place-task-base-ch-recruitminion`,name:`Recruit Minion`,text:`招募当地配置的随从。不同地点实例提供不同种类，费用和 Command 需求取决于该随从。`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Vast Sewers" href="#entry-location-sub-sewers" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />、<CrossReference name="Eternal City" href="#entry-location-set-crypt" />、<CrossReference name="Demonic Nexus（兴趣点）" href="#entry-location-sub-bloodshed-fortress" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`满足随从的身份条件、有足够 Gold 与 Command；需要渗透的兴趣点或营地必须已完全渗透。Orc Upstart 对部分兴趣点渗透检查有豁免。`,statLine:`Complexity: 由随从的招募时间决定
Profile: 20
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-base-ch-elf-temptationofeternity`,name:`Temptation of Eternity`,text:`按 Lore 与 Command 提高当地 Elven Arrogance，劝说精灵远离人类事务。`,image:`/locations/game/unit_elfArmy.png`,meta:`Lore + Command`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`执行者是 Elf，城市有统治者且不属于黑暗国家。`,statLine:`Complexity: 50
Profile: 140
Menace: 0
XP: 72`},{id:`place-task-base-ch-exploreruins`,name:`Explore Ruins`,text:`探索遗迹并触发对应遗迹事件，可获得财物、物品，也可能受伤或死亡。`,image:`/locations/game/exploreRuins.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`遗迹探索次数尚未达到上限；自主英雄不能进入秘密遗迹，并受世界恐慌或 Allure 条件限制。`,statLine:`Complexity: 7
Profile: 50
Menace: 0
XP: 16`},{id:`place-task-base-ch-guardruins`,name:`Guard Ruins`,text:`留下随从守卫遗迹，提高其他人探索时面对的 Danger。`,image:`/locations/game/exploreRuins.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`执行者有随从，遗迹 Danger <5。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`},{id:`place-task-base-ch-redresscrimes`,name:`Redress Crimes`,text:`花费 25 Gold，最多减少 10 Menace。`,image:`/locations/game/tax.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`执行者 Menace 高于自身下限且 <20，有足够 Gold。`,statLine:`Complexity: 1
Profile: 40
Menace: 50
XP: 3`},{id:`place-task-base-ch-influenceholyorder`,name:`Influence Holy Order`,text:`增加可用于调整教义的影响力；所得数值随教团地点、<CrossReference name="Temple" href="#entry-location-sub-temple" />、Acolyte 数量增长而降低。`,image:`/locations/game/basicPrayer.png`,meta:`Lore + Command`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Drowned Prophet’s Landing（教团）" href="#entry-location-sub-drownedprophet-landing" />`,limit:`根据执行者阵营计入对应影响力。`,statLine:`Complexity: 60
Profile: 30
Menace: 0
XP: 82`},{id:`place-task-base-ch-fundholyorder`,name:`Fund Holy Order`,text:`向教团捐款，资助其扩张，并获得等于捐赠 Gold 一半的影响力。`,image:`/locations/game/bribe.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`至少有 1 Gold。`,statLine:`Complexity: 1
Profile: 40
Menace: 0
XP: 3`},{id:`place-task-base-ch-undertakeresearch`,name:`Research Arcane Secret`,text:`消耗 120 Gold，取得 1 级 Arcane Knowledge。`,image:`/locations/game/arcaneSecret.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Library" href="#entry-location-sub-library" />`,limit:`玩家人物要求地点完全渗透；自主人物要求当地为非 Dark Empire、非 Ophanim Theocracy 的人类国家；均须有足够 Gold。`,statLine:`Complexity: 50
Profile: 80
Menace: 0
XP: 72`},{id:`place-task-base-ch-buyitem`,name:`Buy Item`,text:`花费 35 Gold 购买当前槽位物品，随后刷新该商品；Prosperity 影响新商品的稀有度。`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Market" href="#entry-location-sub-market" />`,limit:`有足够 Gold。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-base-ch-drinkprimalwaters`,name:`Drink Primal Waters`,text:`获得 Primal Waters：Might +2、Lore +2、Intrigue +2、Command +2，持续 40 回合；到期后四项加成一并消失。
玩家控制的 Agent 可以再次饮用，将剩余时间重置为 40 回合；属性加成不叠加。首次获得该特质时，还会清零自上次休息以来的任务计数。`,image:`/locations/game/primalWaters.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" />`,limit:`玩家或黑暗阵营要求 Control ≥50；其他人物要求 Control ≤50。自主人物已有 Primal Waters 时不能再次饮用。`,statLine:`Complexity: 2
Profile: 40
Menace: 0
XP: 6`}]},{id:`places-base-2`,title:`英雄任务`,items:[{id:`place-task-base-ch-warntheworld`,name:`Warn The World`,text:`提高当地及邻近统治者的 Awareness。`,image:`/locations/game/warnTheWorld.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者 Awareness 必须为 100%；当地统治者尚未完全觉醒，且不属于 Dark Empire、Ophanim Theocracy 或正在被 Ophanim 接管的聚居地。`,statLine:`Complexity: 3
Profile: 60
Menace: 0
XP: 8`,positiveTags:`Co-Operation`,negativeTags:`Danger`},{id:`place-task-base-ch-drivebackshadow`,name:`Drive Back Shadow`,text:`降低当地 Shadow；相邻人类聚居地中最低的 Shadow 越低，清除效果越强。`,image:`/locations/game/driveBackShadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地 Shadow > 5%；执行者 Shadow < 50%。`,statLine:`Complexity: 40
Profile: 60
Menace: 0
XP: 60`,positiveTags:`无`,negativeTags:`Shadow`},{id:`place-task-base-ch-savehero`,name:`Save Hero`,text:`减少目标英雄的 Shadow。`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`目标为当地故乡英雄，Shadow >20% 且 <100%，仍存活且未被玩家控制；执行者不能是目标本人，Shadow ≤80%。`,statLine:`Complexity: 20
Profile: 70
Menace: 0
XP: 36`,positiveTags:`无`,negativeTags:`Shadow、Gold、Cruelty`},{id:`place-task-base-ch-elf-giveruleelfstone`,name:`Gift Ruler an Elfstone`,text:`把携带的 Elfstone 交给当地统治者。`,image:`/locations/game/i_elfstone.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`仅 Elven Artificer，且携带 Elfstone。`,statLine:`Complexity: 1
Profile: 100
Menace: 0
XP: 3`,positiveTags:`Religion、Co-Operation`,negativeTags:`Shadow`},{id:`place-task-base-ch-sabotageruler`,name:`Sabotage Ruler`,text:`随机破坏当地统治者的事务。`,image:`/locations/game/vendetta.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`地点属于国家，且存在统治者。`,statLine:`Complexity: 30
Profile: 30
Menace: 0
XP: 49`,positiveTags:`Cruelty`,negativeTags:`Co-Operation`},{id:`place-task-base-ch-assassinateenshadowedruler`,name:`Assassinate Enshadowed Ruler`,text:`Alliance 英雄刺杀受 Shadow 侵蚀的统治者。`,image:`/locations/game/silentAssassin.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于 Alliance；目标 Shadow >20%，且目标国家不是 Dark Empire 或 Ophanim Theocracy。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Cruelty、Danger`,negativeTags:`Co-Operation、Shadow`},{id:`place-task-base-ch-redeemruler`,name:`Redeem Ruler`,text:`当地统治者 Shadow 减半。`,image:`/locations/game/consacrate.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`当地属于 Alliance 且有统治者；执行者 Shadow <95%。`,statLine:`Complexity: 50
Profile: 40
Menace: 200 × 统治者 Shadow / 100
XP: 72`,positiveTags:`无`,negativeTags:`Shadow`},{id:`place-task-base-ch-redeemsovereign`,name:`Redeem Sovereign`,text:`清空君主 Shadow，建立 Ward，并驱散周边 Shadow。`,image:`/locations/game/crown.png`,meta:`Lore + Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`由 Chosen One 在合格国家首都执行；君主 Shadow >50%，国家不是 Dark Empire 或 Ophanim Theocracy，并且特殊行动冷却已结束。`,statLine:`Complexity: 100
Profile: 100
Menace: 40 × 当地 Shadow / 100
XP: 121`,positiveTags:`无`,negativeTags:`无`},{id:`place-task-base-ch-elf-selljewellery`,name:`Sell Elven Jewellery`,text:`Elven Artificer 在城市出售精灵珠宝，积累 Gold。`,image:`/locations/game/bribe.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />`,limit:`仅 Elven Artificer，且不属于 Dark Empire。`,statLine:`Complexity: 5
Profile: 100
Menace: 0
XP: 12`,positiveTags:`Gold、Co-Operation、Human`,negativeTags:`无`},{id:`place-task-base-ch-dwarf-sacrificegold`,name:`Gold like the Sun`,text:`消耗 10 Gold，移除执行者的 Shadow。`,image:`/locations/game/sacrificeGold.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`执行者是 Dwarf，且至少有 10 Gold。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 21`,positiveTags:`无`,negativeTags:`Shadow、Gold`},{id:`place-task-base-ch-elf-findruler`,name:`Find Ruler`,text:`为尚无统治者的 <CrossReference name="Elven City" href="#entry-location-set-elvencity" /> 找到新统治者。`,image:`/locations/game/silentAssassin.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`仅属于该城市国家的 Elven Wayfinder。`,statLine:`Complexity: 25
Profile: 100
Menace: 0
XP: 42`,positiveTags:`Religion、Co-Operation`,negativeTags:`无`},{id:`place-task-base-ch-elf-dutytotheworld`,name:`Duty to the World`,text:`按 Lore 与 Command 降低 Elven Arrogance，劝说精灵介入世界危机。`,image:`/locations/game/unit_elfArmy.png`,meta:`Lore + Command`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`执行者不是 Elf；当地统治者不存在，或尚未完全 Enshadowed 且不属于黑暗国家。`,statLine:`Complexity: 50
Profile: 100
Menace: 0
XP: 72`,positiveTags:`Co-Operation`,negativeTags:`Shadow`},{id:`place-task-base-ch-elf-giverulegold`,name:`Gift Elven Ruler Gold`,text:`Elven Artificer 把 Gold 交给当地精灵统治者。`,image:`/locations/game/bribe.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`执行者是 Elven Artificer，Gold >75。`,statLine:`Complexity: 1
Profile: 100
Menace: 0
XP: 3`,positiveTags:`Elf、Co-Operation`,negativeTags:`Gold、Ambition`},{id:`place-task-base-ch-orcs-devastateorcishindustry`,name:`Devastate Orcish Industry`,text:`当地 Orcish Industry −35，削弱依靠这里补给的军队。`,image:`/locations/game/orcishIndustry.png`,meta:`Might`,baseGame:!0,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 的 Industry >40。`,statLine:`Complexity: 40
Profile: 40
Menace: Orcish Industry / 2
Danger: 3
XP: 60`,positiveTags:`Danger`,negativeTags:`Orc`},{id:`place-task-base-ch-reforgetheseals`,name:`Reforge The Seal`,text:`重新封印玩家神祇，触发玩家失败。`,image:`/locations/game/reforgeTheSeal.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />、<CrossReference name="Great Wound" href="#entry-location-set-customtomb" />、<CrossReference name="Accident Site" href="#entry-location-set-accidentsite" />`,limit:`世界恐慌 ≥75%，游戏尚未结束；执行者为 Awareness >50% 的英雄法师。`,statLine:`Complexity: 170
Profile: 1000
Menace: 0
XP: 180`,positiveTags:`Co-Operation`,negativeTags:`无`},{id:`place-task-base-ch-fulfilltheprophecy`,name:`Fulfil the Prophecy`,text:`Chosen One 完成预言，触发玩家失败。`,image:`/locations/game/theProphecy.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />、<CrossReference name="Great Wound" href="#entry-location-set-customtomb" />、<CrossReference name="Accident Site" href="#entry-location-set-accidentsite" />、<CrossReference name="Destroyed Coven" href="#entry-location-set-fallencoven" />`,limit:`世界恐慌 ≥80%，游戏尚未结束；执行者为 Chosen One，特殊行动冷却已结束。`,statLine:`Complexity: 50
Profile: 1000
Menace: 0
XP: 72`,positiveTags:`Ambition`,negativeTags:`无`},{id:`place-task-base-mg-aranefortresstomb`,name:`Geomancy: Arcane Fortress`,text:`利用墓穴的力量建立 Arcane <CrossReference name="Fortress" href="#entry-location-sub-fort" />，无需 Geomantic Locus。`,image:`/locations/game/arcaneFortress.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />、<CrossReference name="Great Wound" href="#entry-location-set-customtomb" />、<CrossReference name="Accident Site" href="#entry-location-set-accidentsite" />、<CrossReference name="Destroyed Coven" href="#entry-location-set-fallencoven" />`,limit:`当地 Arcane <CrossReference name="Fortress" href="#entry-location-sub-fort" /> <100；Geomancy ≥1，或执行者为 Chosen One。`,statLine:`Complexity: 50
Profile: 100
Menace: 0
XP: 72`,positiveTags:`无`,negativeTags:`无`},{id:`place-task-base-ch-prophecystep`,name:`Hero's Journey`,text:`推进 Chosen One 的预言旅程。`,image:`/locations/game/theProphecy.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`仅尚未完成第一步的 Chosen One，世界恐慌满足预言阶段门槛。`,statLine:`Complexity: 25
Profile: 1000
Menace: 0
XP: 42`,positiveTags:`Ambition`,negativeTags:`无`},{id:`place-task-base-ch-waittoexploreruins`,name:`Wait to Explore Ruins`,text:`等待当前探索结束，获得机会后立即开始 <CrossReference name="Explore Ruins" href="#entry-place-task-base-ch-exploreruins" />。`,image:`/locations/game/exploreRuins.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`探索未满，当前 <CrossReference name="Explore Ruins" href="#entry-place-task-base-ch-exploreruins" /> 已被玩家人物占用；自主英雄另受秘密遗迹、恐慌或 Allure 限制。`,statLine:`Complexity: 7
Profile: 50
Menace: 0
XP: 16`,positiveTags:`Gold`,negativeTags:`无`},{id:`place-task-base-ch-consacrate`,name:`Consecrate`,text:`清除当地全部 Shadow。`,image:`/locations/game/consacrate.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />`,limit:`Holy Site 未被亵渎；当地 Shadow >2% 且 <75%；执行者 Shadow <99%。`,statLine:`Complexity: 30
Profile: 40
Menace: 2 × 当地 Shadow
XP: 49`,positiveTags:`无`,negativeTags:`Combat、Shadow`},{id:`place-task-base-ch-cleanseownsoul`,name:`Cleanse Own Soul`,text:`执行者自身 Shadow 减半。`,image:`/locations/game/consacrate.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />`,limit:`Holy Site 未被亵渎，当地 Shadow <75%；执行者有 Shadow 且 Awareness >0。`,statLine:`Complexity: 15
Profile: 40
Menace: 0
XP: 29`,positiveTags:`无`,negativeTags:`Shadow`},{id:`place-task-base-ch-levelup`,name:`Complete Training`,text:`消耗技能点取得或提升人物特质。`,image:`/locations/game/levelUp.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`执行者至少有 1 技能点。`,statLine:`Complexity: 10
Profile: 40
Menace: 0
XP: 21`,positiveTags:`无`,negativeTags:`无`},{id:`place-task-base-ch-reducetensions`,name:`Reduce Tensions`,text:`改善本国与关系为负的其他国家之间的关系。`,image:`/locations/game/diplomacy.png`,meta:`Intrigue`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`国家存在负面国际关系；<CrossReference name="City Palace" href="#entry-location-sub-city" /> 与 <CrossReference name="Elven City" href="#entry-location-set-elvencity" /> 的入口还要求这里是首都并达到对应紧张度。`,statLine:`Complexity: 20
Profile: 5 × 本国地点数
Menace: 100 × 本国最高国际紧张度
XP: 36`,positiveTags:`Co-Operation`,negativeTags:`Combat、Danger、Discord`},{id:`place-task-base-ch-co-buildalliance`,name:`Build Alliance`,text:`Chosen One 会见君主，提高其支持 Alliance 的可能性。`,image:`/locations/game/alliance.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`这里是首都；君主 Awareness 达标，不厌恶 Chosen One，且对其偏好尚未到最高。`,statLine:`Complexity: 50
Profile: 150
Menace: 0
XP: 72`,positiveTags:`无`,negativeTags:`无`},{id:`place-task-base-ch-co-conclave-peace`,name:`Conclave of Peace`,text:`Chosen One 召集人类君主开会，缓和各国冲突。`,image:`/locations/game/conclave.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`在合格首都，世界恐慌达到 Conclave 门槛，当地 Shadow 不超出上限，国家不是 Dark Empire 或 Ophanim Theocracy；特殊行动冷却已结束。`,statLine:`Complexity: 32
Profile: 150
Menace: 0
XP: 51`,positiveTags:`Co-Operation`,negativeTags:`Discord、Cruelty、Combat、Danger`},{id:`place-task-base-ch-co-conclave-remedy`,name:`Conclave of the Remedy`,text:`Chosen One 召集君主分发 Plague 的解药。`,image:`/locations/game/conclave.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`在合格首都，世界恐慌达到 Conclave 门槛，当地 Shadow 不超出上限，国家不是 Dark Empire 或 Ophanim Theocracy；特殊行动冷却已结束。`,statLine:`Complexity: 32
Profile: 150
Menace: 0
XP: 51`,positiveTags:`Co-Operation`,negativeTags:`Discord、Cruelty、Combat、Danger`},{id:`place-task-base-ch-co-conclave-grandarmy`,name:`Conclave for a Grand Army`,text:`Chosen One 为 Alliance 集结更强的军队。`,image:`/locations/game/conclave.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />`,limit:`Alliance 首都，Military Fervour ≤50，世界恐慌与 Shadow 满足 Conclave 条件；特殊行动冷却已结束。`,statLine:`Complexity: 32
Profile: 150
Menace: 0
XP: 51`,positiveTags:`Co-Operation`,negativeTags:`Discord、Cruelty、Combat、Danger`},{id:`place-task-base-ch-mediatepolitics`,name:`Mediate Politics`,text:`降低当地 Political Instability。`,image:`/locations/game/diplomacy.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`该兴趣点的任务入口要求当地存在 Political Instability。`,statLine:`Complexity: 15
Profile: Political Instability÷2
Menace: Political Instability÷2
XP: 29`,positiveTags:`Cooperation`,negativeTags:`Combat、Danger、Discord`},{id:`place-task-base-ch-weakeniastur`,name:`Weaken Iastur`,text:`消耗封印书。若当前神力 >floor(神力上限÷2)，则神力清零；否则我方所有可控人物单位各增加 Profile 5、Menace 5。之后在执行者所在地留下 Laughing King's Tome (Asleep)。上限为奇数时，比较阈值先向下取整。`,image:`/locations/game/i_laughingTomeBound.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Library" href="#entry-location-sub-library" />`,limit:`携带已经封印的 Laughing Tome；<CrossReference name="Library" href="#entry-location-sub-library" /> 未渗透，当前神祇为 Iastur。`,statLine:`Complexity: 5
Profile: 1000
Menace: 150
XP: 12`,positiveTags:`无`,negativeTags:`Madness`},{id:`place-task-base-ch-wrestleforcontrol-good`,name:`Wrestle for Control（英雄）`,text:`减少玩家对 <CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" /> 的 Control，让英雄取得使用权。`,image:`/locations/game/wrestleForControl.png`,meta:`Might + Lore + Intrigue + Command`,baseGame:!0,location:`<CrossReference name="Primal Font" href="#entry-location-sub-wonder-primalfont" />`,limit:`Control >0。`,statLine:`Complexity: 100
Profile: 50
Menace: Primal Font 当前 Control
XP: 121`,positiveTags:`Co-Operation`,negativeTags:`无`}]},{id:`places-base-3`,title:`宗教任务`,items:[{id:`place-task-base-ch-h-preach`,name:`Holy: Preach Faith`,text:`将当地信仰改为执行者所属教团。`,image:`/locations/game/temple.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于 Holy Order，与当地信仰不同；教团允许传教，并有足够传教资金。Ophanim 教团要求当地 Faith 达到门槛；其他教团不能覆盖其接管地。不得在其他教团的权力中心传教。`,statLine:`Complexity: 10
Profile: 40
Menace: 0
XP: 21`,positiveTags:`Religion、Co-Operation`,negativeTags:`无`},{id:`place-task-base-ch-h-buildtemple`,name:`Holy: Build Temple`,text:`在本教团信仰覆盖的聚居地建立 <CrossReference name="Temple" href="#entry-location-sub-temple" />；可替换其他教团的 <CrossReference name="Temple" href="#entry-location-sub-temple" />。`,image:`/locations/game/temple.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于当地教团；教团资金加玩家控制人物可支付的 Gold 足以支付建殿费用。不能已有本教团 <CrossReference name="Temple" href="#entry-location-sub-temple" />；新增时还要有兴趣点容量。`,statLine:`Complexity: 20
Profile: 60
Menace: 0
XP: 36`,positiveTags:`Religion、Cooperation`,negativeTags:`无`},{id:`place-task-base-ch-h-preachtoruler`,name:`Holy: Preach to Ruler`,text:`消耗 100 Gold，使统治者更喜欢本教团或 Religion，并降低对其他教团的偏好。`,image:`/locations/game/temple.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于教团，统治者的相关偏好仍有提高空间。`,statLine:`Complexity: 10
Profile: 40
Menace: 0
XP: 21`,positiveTags:`Religion、Ambition`,negativeTags:`无`},{id:`place-task-base-ch-h-ward`,name:`Holy: Ward`,text:`当地 Ward +100。`,image:`/locations/game/driveBackShadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于当地教团，Candle Circles >0，Ward <100。`,statLine:`Complexity: 20
Profile: 40
Menace: 0
XP: 36`,positiveTags:`Religion`,negativeTags:`Shadow`},{id:`place-task-base-ch-h-removeward`,name:`Holy: Remove Ward`,text:`当地 Ward −100。`,image:`/locations/game/driveBackShadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于当地教团，Candle Circles <0，当地 Ward >0。`,statLine:`Complexity: 30
Profile: 40
Menace: 0
XP: 49`,positiveTags:`Religion、Shadow`,negativeTags:`无`},{id:`place-task-base-ch-h-abyssalfaith`,name:`Holy: Abyssal Faith`,text:`按 Abyssal Faith 的倾向，使当地统治者更喜欢或更厌恶 Deep Ones。`,image:`/locations/game/deepOnes.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于当地教团；Abyssal Faith 非中立，统治者的对应偏好仍可改变。`,statLine:`Complexity: 20
Profile: 40
Menace: 0
XP: 36`,positiveTags:`Religion`,negativeTags:`无`},{id:`place-task-base-ch-h-aware`,name:`Holy: Aware`,text:`按 Aware of Elder Powers 的倾向，提高或降低当地统治者 Awareness。`,image:`/locations/game/warnTheWorld.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`仅 Acolyte；属于当地教团，教义非中立，统治者 Awareness 仍有对应变化空间。`,statLine:`Complexity: 20
Profile: 60
Menace: 0
XP: 36`,positiveTags:`Religion`,negativeTags:`无`},{id:`place-task-base-ch-h-doomsay`,name:`Holy: Prophesy Doom`,text:`当地 Madness +50。`,image:`/locations/game/madness.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`仅本地教团的 Acolyte，Prophets of Doom <0，Madness <200。`,statLine:`Complexity: 25
Profile: 40
Menace: 0
XP: 42`,positiveTags:`Religion、Madness`,negativeTags:`无`},{id:`place-task-base-ch-h-militaryfervour`,name:`Holy: Military Fervour`,text:`当地 Military Fervour +50，增强军队。`,image:`/locations/game/war.png`,meta:`Command`,baseGame:!0,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`执行者属于当地教团，Crusader Faith >0；仅限 <CrossReference name="City" href="#entry-location-set-city" />，且 Military Fervour <100。`,statLine:`Complexity: 40
Profile: 40
Menace: 0
XP: 60`,positiveTags:`Religion、Combat`,negativeTags:`无`},{id:`place-task-base-ch-h-darkworshipattemple`,name:`Holy: Dark Worship`,text:`向周边连通地点分配总量最多 60% 的 Shadow；<CrossReference name="Temple" href="#entry-location-sub-temple" /> Menace +10。`,image:`/locations/game/enshadow.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`仅该 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 所属教团的 Acolyte，Dark Worship <0。`,statLine:`Complexity: 40
Profile: 50
Menace: 0
XP: 60`,positiveTags:`Shadow`,negativeTags:`无`},{id:`place-task-base-ch-h-startplague`,name:`Holy: Start Plague`,text:`当地 Plague +50。`,image:`/locations/game/plague.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`执行者属于该 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 的教团，Healers <0；Plague <200。`,statLine:`Complexity: 40
Profile: 40
Menace: 0
XP: 60`,positiveTags:`Religion、Disease`,negativeTags:`无`},{id:`place-task-base-ch-h-basicworship`,name:`Holy: Basic Worship`,text:`进行基础礼拜；不产生独立的世界数值效果。`,image:`/locations/game/basicPrayer.png`,meta:`固定进度`,baseGame:!0,location:`<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />、<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`仅该 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 所属教团的 Acolyte。`,statLine:`Complexity: 3
Profile: 50
Menace: 0
XP: 8`,positiveTags:`Religion`,negativeTags:`无`},{id:`place-task-base-ch-h-w-arbormancy`,name:`Holy: Arbormancy`,text:`改善本地与相邻地点的宜居度：把这些领土地块的温度向 0.5 靠近，缩短 25% 的温差。`,image:`/locations/game/give.png`,meta:`Lore`,baseGame:!0,location:`<CrossReference name="Temple" href="#entry-location-sub-temple" />`,limit:`所属教团为女巫教团，满足 Arbormancy 的教义条件。`,statLine:`Complexity: 50
Profile: 50
Menace: 0
XP: 72`,positiveTags:`无`,negativeTags:`无`}]}]},{id:`places-cordyceps`,title:`Cordyceps`,description:``,sections:[{id:`places-cordyceps-location`,title:`地点`,items:[{id:`location-set-hive`,name:`Hive`,text:`由 Start Hive 建立的虫巢聚居地。保留当地原有 Shadow，并处于已渗透状态；内含 <CrossReference name="Hive Spire" href="#entry-location-sub-hivespire" /> 与 Larval Mass。Drone 和 Arthropodic Drone 在这里卸下猎物并重新出发。Airborne Spores 可永久开启巢内感染和两格范围内的人口感染传播，地图图标随之变红。

出现方式
<CrossReference name="Start Hive" href="?god=cordyceps#entry-start-hive" meta="神力" text="杀死目标，在当地建立 Hive、Hive Spire 和 Larval Mass，并生成一只 Arthropodic Drone。" image="./cordyceps/fungalHive.png" /> 神力创建。固定带 <CrossReference name="Hive Spire" href="#entry-location-sub-hivespire" />，并在地点创建 Larval Mass。Hive 本身及 <CrossReference name="Hive Spire" href="#entry-location-sub-hivespire" /> 的任务列表为空；相关生产挑战由 Larval Mass 提供。

可能配置的兴趣点
<CrossReference name="Hive Spire" href="#entry-location-sub-hivespire" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。

地点修正与其生产挑战
<CrossReference name="Larval Mass" href="?god=cordyceps#entry-larval-mass" meta="地点修正" text="Hive 储存的幼虫资源，用于 Arthropod Drone、Assign Guard 与 Vespidic Swarm。数值可以超过 100；储量与封印进度分别记录，使用幼虫不会倒退封印。归零时保留。" image="./cordyceps/insect-larval-mass.png" />。`,image:`/locations/mod/insect.loc_minor_fungus.png`,baseGame:!1}]},{id:`places-cordyceps-interest`,title:`兴趣点`,items:[{id:`location-sub-hivespire`,name:`Hive Spire`,text:`<CrossReference name="Hive" href="#entry-location-set-hive" /> 内的设施。开启 Airborne Spores 后每回合 Menace +1；未开启时没有这项增加。

出现方式
<CrossReference name="Hive" href="#entry-location-set-hive" /> 创建时固定加入。

可出现地点
<CrossReference name="Hive" href="#entry-location-set-hive" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/insect.fungalHive.png`,baseGame:!1}]},{id:`places-cordyceps-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-cordyceps-0`,name:`人类聚居地的感染行动`,text:`使用 Cordyceps 时向人类体系聚居地增加感染与清除感染源的行动。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

挑战：
<CrossReference name="Infect Ruler" href="#entry-place-task-cordyceps-ch-infectruler" />、<CrossReference name="Targeted Infection" href="#entry-place-task-cordyceps-ch-targettedinfection" />

英雄任务：
<CrossReference name="Remove Vector" href="#entry-place-task-cordyceps-ch-removevector" />`,baseGame:!1}]},{id:`places-cordyceps-0`,title:`挑战`,items:[{id:`place-task-cordyceps-ch-infectruler`,name:`Infect Ruler`,text:`给当地统治者添加 Cordyceps Infection；不检查其 Awareness。完成时自身 Menace +10、Profile +2。`,image:`/locations/game/insect_infectedPopulace.png`,meta:`Lore + Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`当地完全渗透，存在未感染的统治者。`,statLine:`Complexity: 20
Profile: 50
Menace: 50
XP: 36`},{id:`place-task-cordyceps-ch-targettedinfection`,name:`Targeted Infection`,text:`感染以当地为家乡的所有英雄与教徒，不要求他们此刻在场；Chosen One 除外。完成时自身 Menace +10、Profile +2。`,image:`/locations/game/agent_insect_lateStage.png`,meta:`Lore + Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`Infected Populace >99；至少有一名存活、尚未感染且以当地为故乡的人物。`,statLine:`Complexity: 20
Profile: 50
Menace: 50
XP: 36`}]},{id:`places-cordyceps-2`,title:`英雄任务`,items:[{id:`place-task-cordyceps-ch-removevector`,name:`Remove Vector`,text:`杀死感染的统治者，让继任机制接手。执行者 Awareness 必须大于 90%；世界恐慌越高，英雄越倾向采取这项极端措施。完成时自身 Menace +10、Profile +20。`,image:`/locations/game/agent_insect_lateStage.png`,meta:`Lore + Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`统治者已感染，继承人未感染；执行者 Awareness >90%。`,statLine:`Complexity: 20
Profile: 50
Menace: 0
XP: 36`,positiveTags:`Cruel、Danger、Discord`,negativeTags:`Cordyceps、Disease、Cooperation`}]}]},{id:`places-2866026291`,title:`Ixthus, King of cups`,description:``,sections:[{id:`places-2866026291-location`,title:`地点`,items:[{id:`location-set-crypt`,name:`Eternal City`,text:`由 ruler 的 Constitute Eternal City 行动把人类聚居地转化而来；地点会获得 <CrossReference name="Eternal Palace" href="#entry-location-sub-eternalpalace" /> 与 <CrossReference name="Crypt Depths" href="#entry-location-sub-cryptunderbelly" />，并可以建造城墙、传播 Shadow、提高周边温度和扩张危险。

出现方式
统治者完成 <CrossReference name="Constitute Eternal City" href="?god=ixthus#entry-constitute-eternal-city" meta="统治者行动" text="增加 Eternal City 计数，触发 Eternal City 模组事件，使原 聚居地陷入毁灭，并替换为 Eternal City。" image="./ixthus/crypt_loc.png" /> 后建立，增加 <CrossReference name="Eternal Palace" href="#entry-location-sub-eternalpalace" />、<CrossReference name="Crypt Depths" href="#entry-location-sub-cryptunderbelly" />，并接收旧地点的兴趣点。自身直接提供 Husk 招募与 <CrossReference name="Fund Eternal City" href="#entry-place-task-2866026291-ch-fundcrypt" />，不继承普通聚居地任务列表。

可能配置的兴趣点
<CrossReference name="Crypt Depths" href="#entry-location-sub-cryptunderbelly" />、<CrossReference name="Eternal Palace" href="#entry-location-sub-eternalpalace" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />

挑战：
<CrossReference name="Fund Eternal City" href="#entry-place-task-2866026291-ch-fundcrypt" />

统治者行动
<CrossReference name="Construct Eternal Palace" href="?god=ixthus#entry-construct-eternal-palace" meta="统治者行动" text="花费 150 Gold，在 Eternal City 中建立 Eternal Palace。
消耗：150 Gold" image="./ixthus/crypt_palace.png" />：8 回合
<CrossReference name="Construct City Walls" href="?god=ixthus#entry-construct-city-walls" meta="统治者行动" text="创建或强化 Eternal City Walls，消耗 统治者 一半 Gold。" image="./ixthus/walls_0.png" />：8 回合
<CrossReference name="Eternal Dark Worship" href="?god=ixthus#entry-eternal-dark-worship" meta="统治者行动" text="从 Eternal Palace 向最多 60% Shadow 的目标地点传播 Shadow，并使 Eternal Palace 的 menace 增加 15。" image="./ixthus/crypt_0.jpg" />：10 回合
<CrossReference name="Dust to dust" href="?god=ixthus#entry-dust-to-dust" meta="统治者行动" text="从 Eternal City 改变 climate 与 temperature，使 desert 扩张，并使 Eternal Palace 的 menace 增加 15。" image="./ixthus/hourglass.png" />：10 回合`,image:`/locations/mod/kingOfCups.crypt_loc.png`,baseGame:!1}]},{id:`places-2866026291-interest`,title:`兴趣点`,items:[{id:`location-sub-cryptunderbelly`,name:`Crypt Depths`,text:`<CrossReference name="Eternal City" href="#entry-location-set-crypt" /> 的地下设施，作为独立兴趣点存在。

出现方式
<CrossReference name="Eternal City" href="#entry-location-set-crypt" /> 创建时固定加入。自身不提供挑战；保留城主藏身的地下设施。

可出现地点
<CrossReference name="Eternal City" href="#entry-location-set-crypt" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/kingOfCups.crypt_small.jpg`,baseGame:!1},{id:`location-sub-eternalpalace`,name:`Eternal Palace`,text:`<CrossReference name="Eternal City" href="#entry-location-set-crypt" /> 的权力中心；Eternal Dark Worship 与 Dust to dust 会从这里向外影响地点，并各自增加其 menace 15。

出现方式
<CrossReference name="Eternal City" href="#entry-location-set-crypt" /> 创建时固定加入；符合条件的统治者也可通过建造行动添加。

可出现地点
<CrossReference name="Eternal City" href="#entry-location-set-crypt" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/kingOfCups.crypt_palace.png`,baseGame:!1}]},{id:`places-2866026291-0`,title:`挑战`,items:[{id:`place-task-2866026291-ch-fundcrypt`,name:`Fund Eternal City`,text:`执行者用 Gold 为 <CrossReference name="Eternal City" href="#entry-location-set-crypt" /> 的 ruler 提供资金，最多按一次 50 Gold 的交易处理；资金交给城主后可用于城市设施。`,image:`/locations/game/bribe.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Eternal City" href="#entry-location-set-crypt" />`,limit:`执行者必须至少有 1 Gold。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`}]}]},{id:`places-2879207914`,title:`Kishi, God of Bloodshed`,description:``,sections:[{id:`places-2879207914-location`,title:`地点`,items:[{id:`location-set-bloodshed-fortress`,name:`Demonic Nexus`,text:`地点保持完全 Shadow，每回合产生 5 Demonic Energy，可招募 Firehusk，也可通过 Distill Demonic Horde 生成恶魔军团。初始防御为 100，但最大防御值为 50。

出现方式
<CrossReference name="Engulfing Tide" href="?god=kishi#entry-engulfing-tide" meta="神力" text="消耗人物合计 4 层 Bloodstain 与 Soul-Scar，将其转化为 Demon of the Tide，摧毁聚居地、建立 Demonic Nexus，并生成 150 HP 的 Rampaging Demons。" image="./kishi/power_engulfing_tide.png" /> 在目标恶魔所在地创建，固定加入同名兴趣点。

可能配置的兴趣点
<CrossReference name="Demonic Nexus（兴趣点）" href="#entry-location-sub-bloodshed-fortress" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。

地点修正提供的军队生产入口
<CrossReference name="Demonic Energy" href="?god=kishi#entry-demonic-energy" meta="地点修正" text="供 Distill Demonic Horde 生成 Rampaging Demons，军队初始 HP 等于消耗量。" image="./kishi/power_engulfing_tide.png" />。`,image:`/locations/mod/bloodshed.location_demon_stronghold.png`,baseGame:!1}]},{id:`places-2879207914-interest`,title:`兴趣点`,items:[{id:`location-sub-bloodshed-fortress`,name:`Demonic Nexus（兴趣点）`,text:`Kishi 的据点设施。提供野外 Lay Low 和 Firehusk 招募；Demonic Energy 修正另提供军队生产相关挑战。

出现方式
<CrossReference name="Demonic Nexus" href="#entry-location-set-bloodshed-fortress" /> 地点创建时固定加入。

可出现地点
<CrossReference name="Demonic Nexus" href="#entry-location-set-bloodshed-fortress" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />`,image:`/locations/mod/bloodshed.power_engulfing_tide.png`,baseGame:!1}]}]},{id:`places-2879249746`,title:`Living Void God`,description:``,sections:[{id:`places-2879249746-location`,title:`地点`,items:[{id:`location-set-customtomb`,name:`Great Wound`,text:`<CrossReference name="Living Void" href="#entry-location-set-livingvoid" /> 的特殊 Elder Tomb，保持 100% Shadow 且不能被摧毁。提供 <CrossReference name="Nothing from Something" href="#entry-place-task-2879249746-ch-getvoidstone" />，用 Agent 的 2 HP 换取 Voidstone；也是 Vacuum Collapse 的固定扩散起点。

出现方式
选择 <CrossReference name="Living Void" href="#entry-location-set-livingvoid" /> 后，地图初始化将 <CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" /> 替换为此地点。

英雄任务：
<CrossReference name="Reforge The Seal" href="#entry-place-task-base-ch-reforgetheseals" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" />、<CrossReference name="Geomancy: Arcane Fortress" href="#entry-place-task-base-mg-aranefortresstomb" />

挑战：
<CrossReference name="Nothing from Something" href="#entry-place-task-2879249746-ch-getvoidstone" />`,image:`/locations/mod/vacuum.void_eldertomb.png`,baseGame:!1},{id:`location-set-livingvoid`,name:`Living Void`,text:`Vacuum Collapse 留下的永久地形。原聚居地被摧毁且修正被清空；进入其中的非玩家单位通常会被直接杀死。

出现方式
<CrossReference name="Vacuum Collapse" href="?god=living-void#entry-vacuum-collapse" meta="神力" text="以 Great Wound 和所有 World Rupture 为中心，把半径内地形永久转化为 Living Void。首次范围半径为 2，此后每次施放增加 2。聚居地会被摧毁，绝大多数非玩家单位会死亡；施放后神力先归零，再按 Great Wound 与 World Rupture 的总数返还，每处 1 点。 范围按水平坐标距离计算，同时覆盖地表与地下。" image="./living-void/void_vacuumcollapse.png" /> 从 <CrossReference name="Great Wound" href="#entry-location-set-customtomb" /> 或 <CrossReference name="World Rupture" href="#entry-location-set-worldrupture" /> 向外扩展时形成。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/vacuum.void_livingvoid.png`,baseGame:!1},{id:`location-set-worldrupture`,name:`World Rupture`,text:`Hungry Rift 达到 300% 后形成的永久入口，保持 100% Shadow 但不向外传播。它提供 <CrossReference name="Nothing from Something" href="#entry-place-task-2879249746-ch-getvoidstone" />，也是 Devour Warmth 与 Vacuum Collapse 的目标；Chosen One 可以尝试 <CrossReference name="Seal Rupture" href="#entry-place-task-2879249746-ch-closerupture" /> 将其彻底关闭。

出现方式
Hungry Rift 到达危机阈值后替换原地点，并清除该处修正。

挑战：
<CrossReference name="Nothing from Something" href="#entry-place-task-2879249746-ch-getvoidstone" />

英雄任务：
<CrossReference name="Seal Rupture" href="#entry-place-task-2879249746-ch-closerupture" />`,image:`/locations/mod/vacuum.void_worldrupture.png`,baseGame:!1}]},{id:`places-2879249746-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2879249746-0`,name:`Temple 的裂隙仪式`,text:`使用 <CrossReference name="Living Void" href="#entry-location-set-livingvoid" /> 时，<CrossReference name="Temple" href="#entry-location-sub-temple" /> 增加宗教裂隙仪式。

对应地点 / 兴趣点
<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />

宗教任务：
<CrossReference name="Holy: Open Rift" href="#entry-place-task-2879249746-ch-h-makerift" />`,baseGame:!1}]},{id:`places-2879249746-0`,title:`挑战`,items:[{id:`place-task-2879249746-ch-getvoidstone`,name:`Nothing from Something`,text:`在 <CrossReference name="Great Wound" href="#entry-location-set-customtomb" /> 或 <CrossReference name="World Rupture" href="#entry-location-set-worldrupture" /> 牺牲 2 HP，获得一枚 Voidstone。只有当前 HP 大于 2 时才可执行。`,image:`/locations/mod/vacuum.void_stone_get.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Great Wound" href="#entry-location-set-customtomb" />、<CrossReference name="World Rupture" href="#entry-location-set-worldrupture" />`,limit:``,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`}]},{id:`places-2879249746-2`,title:`英雄任务`,items:[{id:`place-task-2879249746-ch-closerupture`,name:`Seal Rupture`,text:`Chosen One 进行的引导任务，完成后彻底关闭 <CrossReference name="World Rupture" href="#entry-location-set-worldrupture" />，并移除其 Draining Warmth 等裂口附属修正。引导期间可通过远程地术攻击、直接攻击或迫使其撤退来打断。`,image:`/locations/mod/vacuum.void_CO_CloseRupture.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="World Rupture" href="#entry-location-set-worldrupture" />`,limit:`执行者带有 Chosen One 特质，并且特殊行动与尝试冷却已结束。`,statLine:`Complexity: 50
Profile: 100
Menace: 0
XP: 72`,positiveTags:`无`,negativeTags:`无`}]},{id:`places-2879249746-3`,title:`宗教任务`,items:[{id:`place-task-2879249746-ch-h-makerift`,name:`Holy: Open Rift`,text:`教团侍僧在本教神庙所在地建立 50% Hungry Rift；若当地已有 Hidden Voidstone，则消耗它并把初始强度提高到 100%。完成时增加 10 Profile 与 10 Menace。只有对应 Holy Order 的侍僧可执行，且教义必须处于 Elder 影响状态。`,image:`/locations/mod/vacuum.void_riftmodifier.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />`,limit:`当地没有 Hungry Rift；执行者属于对应 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 的教团，Seekers of a New World 处于负向等级。`,statLine:`Complexity: 40
Profile: 40
Menace: 0
XP: 60`,positiveTags:`Religion`,negativeTags:`无`}]}]},{id:`places-2879251084`,title:`Chandalor the Cursed Bloom God`,description:``,sections:[{id:`places-2879251084-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2879251084-0`,name:`人类聚居地的诅咒仪式`,text:`使用 Chandalor 时，属于非黑暗人类国家的聚居地增加此宗教任务。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

宗教任务：
<CrossReference name="Holy: Wicked Curse" href="#entry-place-task-2879251084-ch-h-witchcurse" />`,baseGame:!1}]},{id:`places-2879251084-3`,title:`宗教任务`,items:[{id:`place-task-2879251084-ch-h-witchcurse`,name:`Holy: Wicked Curse`,text:`Witches Holy Order 的成员在任意人类聚居地施加一种随机地点诅咒，完成时增加 5 Profile 与 8 Menace。地点不能已有 Wicked Curse，Dark Empire 统治地不可选。五种结果均以 100 点强度开始、每回合衰减 2，约持续 50 回合。`,image:`/locations/mod/love.ch_witchcurse.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Witches 教团成员，Wicked Curses 处于负向等级；地点没有 Wicked Curse，不能属于 Dark Empire。`,statLine:`Complexity: 50
Profile: 100
Menace: 0
XP: 72`,positiveTags:`Religion、Cruelty`,negativeTags:`无`}]}]},{id:`places-2879667447`,title:`Deep Ones Plus`,description:``,sections:[{id:`places-2879667447-location`,title:`地点`,items:[{id:`location-set-inundai-palace`,name:`Inundai Palace`,text:`Inundai Court 在地下海洋中的宫廷据点，容纳 Deep One 人口，并与 Inundai Emissary 的产生关联。

出现方式
Inundai Cult 成熟后向合格地下海洋地点转移人口并建立；同时加入 Inundai Palace 兴趣点。

可能配置的兴趣点
<CrossReference name="Inundai Palace（兴趣点）" href="#entry-location-sub-inundai-palace" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/Wonderblunder_DeepOnes.icon_inundaipalace_loc.png`,baseGame:!1},{id:`location-set-sunkenruins`,name:`Sunken Ruins`,text:`Relentless Tides 淹没后的遗址；接收原地点留下的兴趣点。地点自身不添加任务，附属兴趣点仍各自提供任务。

出现方式
Relentless Tides 在符合条件的聚居地推进淹没流程后建立。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconSunkenRuins.png`,baseGame:!1}]},{id:`places-2879667447-interest`,title:`兴趣点`,items:[{id:`location-sub-drownedprophet-abyssaltower`,name:`Abyssal Tower`,text:`向周边传播 Shadow 的 Drowned Prophet 据点，允许其强力 Hymn 仪式，并提供拆除塔楼的行动。

出现方式
Breathless 完成 Build Abyssal Tower 后，在合格人类聚居地增加。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />

共同行动：
<CrossReference name="Hymn of the Drowned" href="#entry-place-task-2879667447-mg-drownedprophetconvert" />、<CrossReference name="Hymn of Transformation" href="#entry-place-task-2879667447-mg-drownedprophetcreatedeepones" />、<CrossReference name="Hymn of Swords" href="#entry-place-task-2879667447-mg-drownedprophetabyssalcrusade" />

自主单位任务：
<CrossReference name="Dismantle Abyssal Tower" href="#entry-place-task-2879667447-ch-breathlessdismantleabyssaltower" />`,image:`/locations/mod/Wonderblunder_DeepOnes.iconAbyssalTower.png`,baseGame:!1},{id:`location-sub-drownedprophet-landing`,name:`Drowned Prophet’s Landing（教团）`,text:`Drowned Prophet 的降临地点，具有 <CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" /> 的仪式功能。英雄在此可尝试驱逐 Drowned Prophet；此教团形式还允许 <CrossReference name="Influence Holy Order" href="#entry-place-task-base-ch-influenceholyorder" />。

出现方式
Drowned Prophet Cult 成熟或 Summon Drowned Prophet 完成时，在降临地配置并设为教团中心。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Banish Drowned Prophet" href="#entry-place-task-2879667447-ch-drownedprophet-banish" />

共同行动：
<CrossReference name="Hymn of the Drowned" href="#entry-place-task-2879667447-mg-drownedprophetconvert" />、<CrossReference name="Hymn of Transformation" href="#entry-place-task-2879667447-mg-drownedprophetcreatedeepones" />、<CrossReference name="Hymn of Swords" href="#entry-place-task-2879667447-mg-drownedprophetabyssalcrusade" />、<CrossReference name="Influence Holy Order" href="#entry-place-task-base-ch-influenceholyorder" />`,image:`/locations/mod/Wonderblunder_DeepOnes.iconProphetsLanding.png`,baseGame:!1},{id:`location-sub-drownedprophet-landing-soc`,name:`Drowned Prophet’s Landing（国家）`,text:`Drowned Prophet 的降临地点，提供三种 Hymn 与 <CrossReference name="Banish Drowned Prophet" href="#entry-place-task-2879667447-ch-drownedprophet-banish" />。所属为 Drowned Prophet 的国家时使用这一形式。

出现方式
同一降临流程在国家模式下配置。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Banish Drowned Prophet" href="#entry-place-task-2879667447-ch-drownedprophet-banish" />

共同行动：
<CrossReference name="Hymn of the Drowned" href="#entry-place-task-2879667447-mg-drownedprophetconvert" />、<CrossReference name="Hymn of Transformation" href="#entry-place-task-2879667447-mg-drownedprophetcreatedeepones" />、<CrossReference name="Hymn of Swords" href="#entry-place-task-2879667447-mg-drownedprophetabyssalcrusade" />`,image:`/locations/mod/Wonderblunder_DeepOnes.iconProphetsLanding.png`,baseGame:!1},{id:`location-sub-inundai-palace`,name:`Inundai Palace（兴趣点）`,text:`Inundai Court 的人口与使者生成中心，提供 <CrossReference name="Attract Deep Ones" href="#entry-place-task-2879667447-ch-inundai-deeponepops" />。

出现方式
Inundai Cult 成熟后建立地下宫廷时加入。

可出现地点
<CrossReference name="Inundai Palace" href="#entry-location-set-inundai-palace" />。
改建或覆灭后是否保留，还受对应流程限制。

共同行动：
<CrossReference name="Attract Deep Ones" href="#entry-place-task-2879667447-ch-inundai-deeponepops" />`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaipalace.png`,baseGame:!1}]},{id:`places-2879667447-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2879667447-0`,name:`Drowned Prophet 的 Temple`,text:`Drowned Prophet 教团建立 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 时，额外加入野外 Lay Low。

对应地点 / 兴趣点
<CrossReference name="Temple" href="#entry-location-sub-temple" />

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />`,baseGame:!1},{id:`place-hook-2879667447-1`,name:`沿海聚居地与 Inundai Presence`,text:`Inundai 已被召唤后，向有人类统治者的聚居地加入任务；实际执行还要求沿海。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

自主单位任务：
<CrossReference name="Establish Inundai Presence" href="#entry-place-task-2879667447-ch-inundai-establishpresence" />`,baseGame:!1},{id:`place-hook-2879667447-2`,name:`人类首都的 Deep One 应对行动`,text:`开启 Conclave，目标为君主所在首都，且不属于 Drowned Prophet 的领域。

对应地点 / 兴趣点
<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />

英雄任务：
<CrossReference name="Conclave Against the Deep Ones" href="#entry-place-task-2879667447-ch-co-conclave-deepones" />`,baseGame:!1},{id:`place-hook-2879667447-3`,name:`Deep One Cult 与深海仪式`,text:`Abyssal Siren Call 需要有人类统治者；其余行动依赖当地 Deep One Cult。Inundai 的行动还要求其已被召唤；Drowned Prophet 领域会抑制部分仪式。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

共同行动：
<CrossReference name="Abyssal Siren Call Ritual" href="#entry-place-task-2879667447-mg-ritualistcreateobsession" />、<CrossReference name="Abyssal Circulation Ritual" href="#entry-place-task-2879667447-mg-ritualistdispersemenace" />、<CrossReference name="Abyssal Red Tide Ritual" href="#entry-place-task-2879667447-mg-ritualistsacrificepops" />、<CrossReference name="Abyssal Black Water Ritual" href="#entry-place-task-2879667447-mg-ritualistsacrificeruler" />

挑战：
<CrossReference name="Summon Abyssal Priest" href="#entry-place-task-2879667447-ch-summonabyssalpriest" />

自主单位任务：
<CrossReference name="Feed on Cult" href="#entry-place-task-2879667447-ch-inundai-feedoncult" />`,baseGame:!1},{id:`place-hook-2879667447-4`,name:`聚居地内的 Madness 与 Abyssal Locus`,text:`任何已有聚居地、并具有对应地点修正的地点可加入此入口；不是兴趣点本身产生的行动。

共同行动：
<CrossReference name="Absorb Madness" href="#entry-place-task-2879667447-mg-ritualistabsorbmadness" />、<CrossReference name="Absorb Abyssal Charge" href="#entry-place-task-2879667447-mg-ritualistabsorblocus" />`,baseGame:!1},{id:`place-hook-2879667447-5`,name:`Inundai Debt 的催收地点`,text:`欠债英雄的故乡，或欠债统治者所治理的聚居地。

自主单位任务：
<CrossReference name="Recollect on Debt" href="#entry-place-task-2879667447-ch-inundai-recollect" />`,baseGame:!1}]},{id:`places-2879667447-0`,title:`挑战`,items:[{id:`place-task-2879667447-ch-summonabyssalpriest`,name:`Summon Abyssal Priest`,text:`召唤 Abyssal Priest；Deep One Cult 的 Menace +30。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconAbyssalPriest.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`Deep One Cult 强度 ≥50，当地完全渗透。`,statLine:`Complexity: 40
Profile: 10
Menace: 0
XP: 60`}]},{id:`places-2879667447-1`,title:`共同行动`,items:[{id:`place-task-2879667447-mg-drownedprophetconvert`,name:`Hymn of the Drowned`,text:`夺取相邻的合格人类聚居地，杀死当地统治者，并各生成 15 HP 的 Breathless Horde。所属势力 Menace +5。
完成时 Profile +15、 Menace +7。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />、<CrossReference name="Drowned Prophet’s Landing（教团）" href="#entry-location-sub-drownedprophet-landing" />、<CrossReference name="Drowned Prophet’s Landing（国家）" href="#entry-location-sub-drownedprophet-landing-soc" />`,limit:`仅 Drowned Prophet，在己方 <CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" /> 或降临点执行；有相邻、尚未归属己方的人类聚居地。教团模式要求 1st Hymn 处于负向等级。`,statLine:`Complexity: 40
Profile: 90
Menace: 0
XP: 60`},{id:`place-task-2879667447-mg-drownedprophetcreatedeepones`,name:`Hymn of Transformation`,text:`把势力内各合格聚居地的人口设为 ⌊(原人口 −3)/4⌋，将这些数值之和加入一处 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />；没有可用城市时尝试在海洋创建。施法期间每回合自身 Menace +1.5；完成后所属势力 Menace +10，并允许教团自行生成 Breathless。
完成时 Profile +40、 Menace +20。`,image:`/locations/game/deepOneCity.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />、<CrossReference name="Drowned Prophet’s Landing（教团）" href="#entry-location-sub-drownedprophet-landing" />、<CrossReference name="Drowned Prophet’s Landing（国家）" href="#entry-location-sub-drownedprophet-landing-soc" />`,limit:`仅 Drowned Prophet，在己方 <CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" /> 或降临点执行，尚未完成本 Hymn；存在带 Tower、人口 >3 的合格聚居地。教团模式要求 2nd Hymn 处于负向等级。`,statLine:`Complexity: 50
Profile: 60
Menace: 0
XP: 72`},{id:`place-task-2879667447-mg-drownedprophetabyssalcrusade`,name:`Hymn of Swords`,text:`在每个非空 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 生成 HP 为当地人口三倍的 Breathless Horde，并向符合条件的国家宣战。Dark Empire、Witches 与 Ophanim 的教团不在宣战目标内。
完成时 Profile +50、 Menace +50。`,image:`/locations/game/war.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />、<CrossReference name="Drowned Prophet’s Landing（教团）" href="#entry-location-sub-drownedprophet-landing" />、<CrossReference name="Drowned Prophet’s Landing（国家）" href="#entry-location-sub-drownedprophet-landing-soc" />`,limit:`仅 Drowned Prophet，在己方 <CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" /> 或降临点执行，尚未完成本 Hymn；存在人口 >0 的 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。教团模式要求 3rd Hymn 处于负向等级。`,statLine:`Complexity: 25
Profile: 60
Menace: 0
XP: 42`},{id:`place-task-2879667447-ch-inundai-deeponepops`,name:`Attract Deep Ones`,text:`把其他 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 各 50% 的人口变为 Entranced Deep Ones，前来加入 <CrossReference name="Inundai Palace" href="#entry-location-set-inundai-palace" />；执行者 Favor +50。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaideepone.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Inundai Palace（兴趣点）" href="#entry-location-sub-inundai-palace" />`,limit:`仅 Inundai Emissary，或具有 Agent Payment 资格的玩家人物。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 0`},{id:`place-task-2879667447-mg-ritualistcreateobsession`,name:`Abyssal Siren Call Ritual`,text:`把当地统治者与英雄对 Deep Ones 的偏好推向极端；不影响 Chosen One。厌恶 Deep Ones 的人物会变为憎恨，统治者因此可成为 Black Water Ritual 的祭品。 消耗 100 Abyssal Magic。`,image:`/locations/game/agony.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`当地有人类统治者；携带 Ritualist Shard，Abyssal Magic 储量足够支付仪式。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`},{id:`place-task-2879667447-mg-ritualistdispersemenace`,name:`Abyssal Circulation Ritual`,text:`把 Deep One Cult 的 Menace 分散给当地英雄与 Agent；不影响 Chosen One。 消耗 50 Abyssal Magic。`,image:`/locations/game/agony.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`Cult 的 Menace >10；携带 Ritualist Shard，Abyssal Magic 储量足够支付仪式。`,statLine:`Complexity: 30
Profile: 100
Menace: 0
XP: 49`},{id:`place-task-2879667447-mg-ritualistsacrificepops`,name:`Abyssal Red Tide Ritual`,text:`牺牲 10 人口，Deep One Cult 强度 +30、Menace +30。 消耗 60 Abyssal Magic。`,image:`/locations/game/agony.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`有人类人口的聚居地，人口 >30，存在 Deep One Cult；携带 Ritualist Shard，Abyssal Magic 储量足够。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`},{id:`place-task-2879667447-mg-ritualistsacrificeruler`,name:`Abyssal Black Water Ritual`,text:`牺牲当地统治者，使 Deep One Cult 加速成熟 30 回合；Cult 的 Profile +30。 消耗 60 Abyssal Magic。`,image:`/locations/game/agony.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`存在 Deep One Cult；统治者对 Deep Ones 极端喜好或极端厌恶；携带 Ritualist Shard，Abyssal Magic 储量足够。Drowned Prophet 的特定活跃状态会阻止仪式。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`},{id:`place-task-2879667447-mg-ritualistabsorbmadness`,name:`Absorb Madness`,text:`每回合吸收当地 10 Madness，为 Ritualist Shard 补充 Abyssal Magic。`,image:`/locations/game/madnessUpsidedown.png`,meta:`固定进度`,baseGame:!1,location:`任何已有聚居地、并具有对应地点修正的地点可加入此入口；不是兴趣点本身产生的行动。`,limit:`Madness >2；携带 Ritualist Shard 并拥有 Abyssal Magic。`,statLine:`Complexity: 5
Profile: 150
Menace: 20
XP: 12`},{id:`place-task-2879667447-mg-ritualistabsorblocus`,name:`Absorb Abyssal Charge`,text:`每回合吸收 Abyssal Locus 的 5 强度，为 Ritualist Shard 补充 Abyssal Magic。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconAbyssalLocus.png`,meta:`固定进度`,baseGame:!1,location:`任何已有聚居地、并具有对应地点修正的地点可加入此入口；不是兴趣点本身产生的行动。`,limit:`Abyssal Locus >5；携带 Ritualist Shard 并拥有 Abyssal Magic。`,statLine:`Complexity: 10
Profile: 50
Menace: 0
XP: 21`}]},{id:`places-2879667447-2`,title:`英雄任务`,items:[{id:`place-task-2879667447-ch-drownedprophet-banish`,name:`Banish Drowned Prophet`,text:`驱逐 Drowned Prophet，并摧毁其教团。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Drowned Prophet’s Landing（教团）" href="#entry-location-sub-drownedprophet-landing" />、<CrossReference name="Drowned Prophet’s Landing（国家）" href="#entry-location-sub-drownedprophet-landing-soc" />`,limit:`Drowned Prophet 仍存在。`,statLine:`Complexity: 30 ×（1 + |驱逐教义等级 + 该教义负向等级上限|）；无教团模式为 90
Profile: 60
Menace: 20
XP: ⌊max(1, 6 × Complexity)^0.75⌋`,positiveTags:`Danger、Ambition`,negativeTags:`Deep Ones、Shadow`},{id:`place-task-2879667447-ch-co-conclave-deepones`,name:`Conclave Against the Deep Ones`,text:`Chosen One 召集各国君主，共同应对 Deep Ones。`,image:`/locations/game/conclave.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="City Palace" href="#entry-location-sub-city" />、<CrossReference name="Elven City" href="#entry-location-sub-elvencity" />`,limit:`由 Chosen One 在合格首都执行，满足 Conclave 的世界恐慌、Shadow 与特殊行动冷却条件。`,statLine:`Complexity: 32
Profile: 150
Menace: 0
XP: 51`,positiveTags:`Co-Operation`,negativeTags:`Discord、Deep Ones、Madness、Danger`}]},{id:`places-2879667447-4`,title:`自主单位任务`,items:[{id:`place-task-2879667447-ch-breathlessdismantleabyssaltower`,name:`Dismantle Abyssal Tower`,text:`拆除当地 <CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconAbyssalTower.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Abyssal Tower" href="#entry-location-sub-drownedprophet-abyssaltower" />`,limit:`仅 Breathless；不能拆除 Drowned Prophet 的降临点，也不能在其正在引导大型 Hymn 时拆塔。`,statLine:`Complexity: 10
Profile: 40
Menace: 0
XP: 21`},{id:`place-task-2879667447-ch-inundai-establishpresence`,name:`Establish Inundai Presence`,text:`建立 Inundai Presence，并提高 Inundai Emissary 的 Hunger。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaicult.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Inundai Emissary；沿海、有人类统治者且没有 Inundai Presence 的聚居地。`,statLine:`Complexity: 1 + 2 × 现有 Inundai Presence 数；无追踪器时为 10
Profile: 100
Menace: 0
XP: 0`},{id:`place-task-2879667447-ch-inundai-feedoncult`,name:`Feed on Cult`,text:`消耗当地 Deep One Cult 的部分强度，降低 Inundai Emissary 的 Hunger。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaideepone.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Inundai Emissary；Deep One Cult 强度 >1。`,statLine:`Complexity: 4
Profile: 100
Menace: 0
XP: 0`},{id:`place-task-2879667447-ch-inundai-recollect`,name:`Recollect on Debt`,text:`催收 Inundai Debt，使 Emissary 的 Hunger 减少两倍本次追索额，最低为 0。
英雄债务被清除，并获得 Call of the Abyss；已有该诅咒则强度 +25，同时 Sanity −5。
统治者用当地 Madness 抵债。Madness 不足本次追索额时，增加或建立 Coral Statues；尚未疯狂则陷入疯狂，已经疯狂则获得或增强 Call of the Abyss，并损失 Sanity。`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaipresence.png`,meta:`固定进度`,baseGame:!1,location:`欠债英雄的故乡，或欠债统治者所治理的聚居地。`,limit:`执行者是负责追索的 Inundai Emissary。`,statLine:`Complexity: 5
Profile: 100
Menace: 0
XP: 0`}]},{id:`places-2879667447-unplaced`,title:`未找到正常生成路径的类型`,items:[{id:`location-set-drownedprophet`,name:`Drowned Prophet 聚居地基类`,text:`供 Drowned Prophet 聚居地体系使用的人类聚居地派生类。
当前有效版本未找到直接创建该地点类的正常调用。`,meta:`未找到正常生成路径`}]}]},{id:`places-2900259087`,title:`Flesh God`,description:``,sections:[{id:`places-2900259087-location`,title:`地点`,items:[{id:`location-set-livingsettlement`,name:`Living Settlement`,text:`初始完全 Enshadowed，此后每回合恢复 10% Shadow；人口上限 250。城防尚未归零时，每回合恢复最大城防的 10%，最多 20。对当地实施夷平、掠夺或占领的非驻军，每回合受到向下取整的“人口 × 5%”伤害。
苏醒后加入 Escamrak 的独立社会，每回合 Unrest、Political Agitation、Political Instability 各减少 25。清除 Banditry、Deep One Cult；统治者可 Study Living Settlement。

出现方式
Fleshcrafters 或 Living Terrain 转化人类聚居地时建立，并保留原有兴趣点；Escamrak 的改造选项也可直接创建带 Farming Community 的新聚居地。

可能配置的兴趣点
<CrossReference name="Twisted Library" href="#entry-location-sub-fleshlibrary" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Bribe Guards" href="#entry-place-task-base-ch-bribeguards" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />、<CrossReference name="Organise Dissent" href="#entry-place-task-base-ch-organisedissent" />、<CrossReference name="Lay Low（聚居地）" href="#entry-place-task-base-ch-laylow" />

英雄任务：
<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Ward" href="#entry-place-task-base-ch-h-ward" />、<CrossReference name="Holy: Remove Ward" href="#entry-place-task-base-ch-h-removeward" />、<CrossReference name="Holy: Abyssal Faith" href="#entry-place-task-base-ch-h-abyssalfaith" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />`,image:`/locations/mod/flesh.flesh_city.png`,baseGame:!1},{id:`location-set-livingterrain`,name:`Twisted Landscape`,text:`Living Terrain 侵蚀空地或废墟后形成，可由 Escamrak 改造成下列形态。被夷平时清除 Living Terrain，并留下火山损伤，暂缓再次侵蚀。

出现方式
Living Terrain 侵蚀空地或废墟时建立，固定带一个随地形形态变化的兴趣点。

可能配置的兴趣点
<CrossReference name="Twisted Landscape（兴趣点）" href="#entry-location-sub-livingterrain" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/flesh.flesh_creepland0_hex.png`,baseGame:!1}]},{id:`places-2900259087-interest`,title:`兴趣点`,items:[{id:`location-sub-fleshlibrary`,name:`Twisted Library`,text:`由 <CrossReference name="Twist Library" href="#entry-place-task-2900259087-ch-corruptlibrary" /> 转化普通 <CrossReference name="Library" href="#entry-location-sub-library" />。每回合有 20% 概率在当地没有 Escamrak Secret 时创建一个；提供 <CrossReference name="Propagate Knowledge" href="#entry-place-task-2900259087-ch-spreadlibrary" />。

出现方式
<CrossReference name="Twist Library" href="#entry-place-task-2900259087-ch-corruptlibrary" /> 替换原 <CrossReference name="Library" href="#entry-location-sub-library" />。新兴趣点已渗透，实际返回列表仅包含 <CrossReference name="Propagate Knowledge" href="#entry-place-task-2900259087-ch-spreadlibrary" />。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Living Settlement" href="#entry-location-set-livingsettlement" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Propagate Knowledge" href="#entry-place-task-2900259087-ch-spreadlibrary" />`,image:`/locations/mod/flesh.flesh_library.png`,baseGame:!1},{id:`location-sub-livingterrain`,name:`Twisted Landscape（兴趣点）`,text:`随所在 <CrossReference name="Twisted Landscape" href="#entry-location-set-livingterrain" /> 一同切换形态。
Spawning Grounds 生成 Maddened Spawn；Impassible Nets 损伤军队；Growing Cocoon 增加 Arcane <CrossReference name="Fortress" href="#entry-location-sub-fort" />；Bone Libraries 提供 <CrossReference name="Delve into Library" href="#entry-place-task-2900259087-ch-bonelibrarylearn" />。
这些是同一兴趣点的不同状态。代码还定义 Oozing Pustules 的名称与图像，但未找到它的独立每回合效果或任务。

出现方式
<CrossReference name="Twisted Landscape" href="#entry-location-set-livingterrain" /> 地点创建时固定加入，后由 Escamrak 的改造选择改变形态。

可出现地点
<CrossReference name="Twisted Landscape" href="#entry-location-set-livingterrain" />。
改建或覆灭后是否保留，还受对应流程限制。

共同行动：
<CrossReference name="Delve into Library" href="#entry-place-task-2900259087-ch-bonelibrarylearn" />`,image:`/locations/mod/flesh.flesh_creepland0_sub.png`,baseGame:!1}]},{id:`places-2900259087-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2900259087-0`,name:`人类聚居地的 Fleshcrafting 行动`,text:`使用 Escamrak 时增加；寄生体行动还绑定于以当地为故乡的合格英雄。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

挑战：
<CrossReference name="Teach Fleshcrafting" href="#entry-place-task-2900259087-ch-teachfleshcrafting" />

自主单位任务：
<CrossReference name="Infest Home Location" href="#entry-place-task-2900259087-ch-parasiteinfests" />`,baseGame:!1},{id:`place-hook-2900259087-1`,name:`Library 的转化`,text:`使用 Escamrak 时，普通 <CrossReference name="Library" href="#entry-location-sub-library" /> 提供转化入口；已经变为 <CrossReference name="Twisted Library" href="#entry-location-sub-fleshlibrary" /> 后移除此入口。

对应地点 / 兴趣点
<CrossReference name="Library" href="#entry-location-sub-library" />

挑战：
<CrossReference name="Twist Library" href="#entry-place-task-2900259087-ch-corruptlibrary" />`,baseGame:!1}]},{id:`places-2900259087-0`,title:`挑战`,items:[{id:`place-task-2900259087-ch-spreadlibrary`,name:`Propagate Knowledge`,text:`支付 40 Gold，创建最多等于 Fleshcrafting 等级数量的 Escamrak Secret；优先放在本地，再逐个放入尚无该修正的相邻地点。完成时增加 2 Profile、5 Menace。`,image:`/locations/mod/flesh.flesh_library_corrupt.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Twisted Library" href="#entry-location-sub-fleshlibrary" />`,limit:`掌握 Fleshcrafting，至少有 40 Gold。`,statLine:`Complexity: 40
Profile: 0
Menace: 0
XP: 60`},{id:`place-task-2900259087-ch-teachfleshcrafting`,name:`Teach Fleshcrafting`,text:`玩家 Agent 与自主人物均可执行。创建一级 Fleshcrafters，当地 Shadow +2%，人口计入封印积分。完成时增加 5 Profile。`,image:`/locations/mod/flesh.fleshcraft_teach.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`掌握 Fleshcrafting。`,statLine:`Complexity: 40
Profile: 70
Menace: 0
XP: 60`},{id:`place-task-2900259087-ch-corruptlibrary`,name:`Twist Library`,text:`将普通 <CrossReference name="Library" href="#entry-location-sub-library" /> 替换为 <CrossReference name="Twisted Library" href="#entry-location-sub-fleshlibrary" />；完成时增加 5 Profile、6 Menace。`,image:`/locations/mod/flesh.flesh_library_corrupt.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Library" href="#entry-location-sub-library" />`,limit:`掌握 Fleshcrafting。`,statLine:`Complexity: 30
Profile: 70
Menace: 0
XP: 49`}]},{id:`places-2900259087-1`,title:`共同行动`,items:[{id:`place-task-2900259087-ch-bonelibrarylearn`,name:`Delve into Library`,text:`玩家 Agent 与自主人物均可执行。将 Fleshcrafting Knowledge 补至 6，并知晓 Fleshcrafting；非玩家控制者每补充一级知识，个人 Shadow +2%。`,image:`/locations/mod/flesh.flesh_secret.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Twisted Landscape（兴趣点）" href="#entry-location-sub-livingterrain" />`,limit:`知识少于 6 层。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 21`}]},{id:`places-2900259087-4`,title:`自主单位任务`,items:[{id:`place-task-2900259087-ch-parasiteinfests`,name:`Infest Home Location`,text:`在目标英雄故乡留下寄生影响；该英雄下次休息时学会 Fleshcrafting，并对其产生痴迷。`,image:`/locations/mod/flesh.flesh_abom_minion_3.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Abominized 产生的寄生体，在对应英雄的故乡执行；目标尚未带有该寄生效果。`,statLine:`Complexity: 45
Profile: 0
Menace: 0
XP: 66`}]}]},{id:`places-2932110698`,title:`Living Wilds`,description:``,sections:[{id:`places-2932110698-location`,title:`地点`,items:[{id:`location-set-nature-naturesanctuary`,name:`Nature Sanctuary`,text:`自然保护地，提高相邻地点宜居度；提供 <CrossReference name="Despoil Sanctuary" href="#entry-place-task-2932110698-ch-nature-despoilsanctuary" />，让不友善的执行者破坏保护地。

出现方式
统治者完成 Nature Sanctuary 行动，在选定野地花费 Gold 建立。

挑战：
<CrossReference name="Despoil Sanctuary" href="#entry-place-task-2932110698-ch-nature-despoilsanctuary" />`,image:`/locations/mod/nature.location_sanctuary.png`,baseGame:!1},{id:`location-set-nature-unoccupiedwilderness`,name:`Darkened Wilderness`,text:`用于保存野地 Shadow 的地点载体，不提供自己的任务或固定兴趣点。

出现方式
Darkened Wilds 在原本没有聚居地的地点建立。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/game/loc_minor_green.png`,baseGame:!1},{id:`location-set-nature-wolfrun`,name:`Werewolf Run`,text:`狼人完全占据后的聚居地，保存转化时人口并带有 Werewolf Run 兴趣点；Shadow 初始为 100%，正常向外流动。

出现方式
Werewolf Population 吞没合格人类聚居地后形成。

可能配置的兴趣点
<CrossReference name="Werewolf Run（兴趣点）" href="#entry-location-sub-nature-wolfrun" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/nature.location_werewolflands.png`,baseGame:!1}]},{id:`places-2932110698-interest`,title:`兴趣点`,items:[{id:`location-sub-nature-wolfrun`,name:`Werewolf Run（兴趣点）`,text:`Blood Moon 期间使相邻地点已有 Werewolf Population 加速增长；提供野外 Lay Low。

出现方式
<CrossReference name="Werewolf Run" href="#entry-location-set-nature-wolfrun" /> 创建时固定加入。

可出现地点
<CrossReference name="Werewolf Run" href="#entry-location-set-nature-wolfrun" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />`,image:`/locations/mod/nature.property_werewolfpack.png`,baseGame:!1}]},{id:`places-2932110698-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2932110698-0`,name:`Temple 与 Lycanthropy`,text:`The Moon’s Gift 由 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 或 Seat 提供，并检查 Lycanthropy 资格。

对应地点 / 兴趣点
<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />

挑战：
<CrossReference name="The Moon's Gift" href="#entry-place-task-2932110698-ch-nature-moonsgift" />`,baseGame:!1},{id:`place-hook-2932110698-1`,name:`人类聚居地的 Lycanthropy 宗教任务`,text:`当地信仰的教团允许传播 Lycanthropy 时使用。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

宗教任务：
<CrossReference name="Holy: Seed Lycanthropy" href="#entry-place-task-2932110698-ch-h-nature-seedlycanthropy" />、<CrossReference name="Holy: Infect Ruler" href="#entry-place-task-2932110698-ch-h-nature-infectruler" />`,baseGame:!1}]},{id:`places-2932110698-0`,title:`挑战`,items:[{id:`place-task-2932110698-ch-nature-despoilsanctuary`,name:`Despoil Sanctuary`,text:`摧毁 <CrossReference name="Nature Sanctuary" href="#entry-location-set-nature-naturesanctuary" />，并阻止重建。`,image:`/locations/mod/nature.property_destructive_industry.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Nature Sanctuary" href="#entry-location-set-nature-naturesanctuary" />`,limit:`无额外限制。`,statLine:`Complexity: 75
Profile: 0
Menace: 0
XP: 97`},{id:`place-task-2932110698-ch-nature-moonsgift`,name:`The Moon's Gift`,text:`为教团加入 Liberation of Beasthood，允许传播 Lycanthropy。`,image:`/locations/mod/nature.property_werewolfpack.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Seat of Holy Order" href="#entry-location-sub-holyordercapital" />`,limit:`对应 <CrossReference name="Temple" href="#entry-location-sub-temple" /> 或 Seat 已渗透；执行者或教团中至少一名 Acolyte 具有 Lycanthropy。`,statLine:`Complexity: 35
Profile: 0
Menace: 0
XP: 55`}]},{id:`places-2932110698-3`,title:`宗教任务`,items:[{id:`place-task-2932110698-ch-h-nature-seedlycanthropy`,name:`Holy: Seed Lycanthropy`,text:`建立初始强度 10 的 Werewolf Population，传播 Lycanthropy。`,image:`/locations/mod/nature.property_werewolfpack.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅处于兽形的当地教团 Acolyte；当地没有 Werewolf Population。`,statLine:`Complexity: 30
Profile: 100
Menace: 0
XP: 49`,positiveTags:`Shadow`,negativeTags:`无`},{id:`place-task-2932110698-ch-h-nature-infectruler`,name:`Holy: Infect Ruler`,text:`让当地统治者感染 Lycanthropy；每次 Blood Moon 放下统治事务外出狩猎。`,image:`/locations/mod/nature.property_werewolfpack_active.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅处于兽形的当地教团 Acolyte；统治者符合感染条件。`,statLine:`Complexity: 7
Profile: 100
Menace: 0
XP: 16`,positiveTags:`Shadow`,negativeTags:`无`}]}]},{id:`places-2932765110`,title:`Covens, Curses & Curios Recast`,description:``,sections:[{id:`places-2932765110-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2932765110-0`,name:`Catacombs 的掘墓行动`,text:`Covens, Curses & Curios Recast 在合格人类聚居地的 <CrossReference name="Catacombs" href="#entry-location-sub-catacombs" /> 加入。

对应地点 / 兴趣点
<CrossReference name="Catacombs" href="#entry-location-sub-catacombs" />

挑战：
<CrossReference name="Exhume Grave" href="#entry-place-task-2932765110-ch-exhumegrave" />`,baseGame:!1},{id:`place-hook-2932765110-1`,name:`女巫据点的交易与招募`,text:`<CrossReference name="女巫 Temple" href="#entry-place-hook-base-1" /> 或 Coven 提供 Pigeon 招募、Soulstone 与制作清单购买。Aviaries 非中立时，<CrossReference name="Temple" href="#entry-location-sub-temple" /> 还可增加 Pigeon、Owl 招募；Soulweavers 为 −2 时也会加入制作清单。

对应地点 / 兴趣点
<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />

挑战：
<CrossReference name="Buy Soulstone" href="#entry-place-task-2932765110-ch-buysoulstone" />、<CrossReference name="Buy Transposing Scroll" href="#entry-place-task-2932765110-ch-buycraftlist" />

共同行动：
<CrossReference name="Recruit Minion" href="#entry-place-task-base-ch-recruitminion" />`,baseGame:!1},{id:`place-hook-2932765110-2`,name:`聚居地的诅咒行动`,text:`宗教行动取决于当地 Curseweavers 教义；统治者变为 Toad 时增加 <CrossReference name="Squash a Toad" href="#entry-place-task-2932765110-ch-squashtoad" />。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

宗教任务：
<CrossReference name="Holy: Curse Intruder" href="#entry-place-task-2932765110-ch-h-curseintrudingacolyte" />

挑战：
<CrossReference name="Squash a Toad" href="#entry-place-task-2932765110-ch-squashtoad" />`,baseGame:!1}]},{id:`places-2932765110-0`,title:`挑战`,items:[{id:`place-task-2932765110-ch-exhumegrave`,name:`Exhume Grave`,text:`掘开墓穴，Robbed Graves +35，并产生携带至少 25 Gold 陪葬品的 Soul。`,image:`/locations/mod/CovenExpansionRecast.Icon_Graveyard.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Catacombs" href="#entry-location-sub-catacombs" />`,limit:`<CrossReference name="Catacombs" href="#entry-location-sub-catacombs" /> 已渗透；位于人类国家的聚居地，Robbed Graves <99。`,statLine:`Complexity: 20
Profile: 50
Menace: 0
XP: 36`},{id:`place-task-2932765110-ch-buysoulstone`,name:`Buy Soulstone`,text:`花费 15 Gold 购买 Soulstone。`,image:`/locations/mod/CovenExpansionRecast.Fore_Soulstone_Inactive.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />`,limit:`启用 Curseweaving，并有足够 Gold。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-2932765110-ch-buycraftlist`,name:`Buy Transposing Scroll`,text:`花费 5 Gold 购买 Transposing Scroll。`,image:`/locations/mod/CovenExpansionRecast.Fore_List.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Temple" href="#entry-location-sub-temple" />、<CrossReference name="Coven of Witches" href="#entry-location-sub-witchcoven" />`,limit:`启用 Curseweaving，并有足够 Gold。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-2932765110-ch-squashtoad`,name:`Squash a Toad`,text:`杀死被变为 Toad 的目标人物。`,image:`/locations/mod/CovenExpansionRecast.Icon_FrogCurse.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`当地存在对应 Toad。`,statLine:`Complexity: 10
Profile: 0
Menace: 0
XP: 21`}]},{id:`places-2932765110-3`,title:`宗教任务`,items:[{id:`place-task-2932765110-ch-h-curseintrudingacolyte`,name:`Holy: Curse Intruder`,text:`诅咒正在当地执行任务的外来 Acolyte。`,image:`/locations/mod/CovenExpansionRecast.Icon_Curseweave.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`执行者属于当地信仰的教团，Curseweavers <0；存在合格外来目标，且近期施咒冷却已结束。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`,positiveTags:`Cruelty、Religion、Shadow`,negativeTags:`无`}]}]},{id:`places-2968835416`,title:`Community Library`,description:``,sections:[{id:`places-2968835416-location`,title:`地点`,items:[{id:`location-set-shipwreck`,name:`Shipwreck`,text:`没有既有聚居地时，用于承载沉船兴趣点的地点。名称随所在地点生成。

出现方式
Community <CrossReference name="Library" href="#entry-location-sub-library" /> 的沉船生成入口在空地点建立，并固定配置 <CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />。

可能配置的兴趣点
<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/CLib.Loc_Shipwreck.png`,baseGame:!1}]},{id:`places-2968835416-interest`,title:`兴趣点`,items:[{id:`location-sub-dwarffortress`,name:`Dwarven Fortress`,text:`Community <CrossReference name="Library" href="#entry-location-sub-library" /> 为矮人殖民引入的堡垒，沿用 <CrossReference name="Fortress" href="#entry-location-sub-fort" /> 的渗透与防御能力。

出现方式
Task_BuildSettlement 的矮人建立据点流程配置。

可出现地点
<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />`,image:`/locations/game/fort.png`,baseGame:!1},{id:`location-sub-shipwreck`,name:`Wreck`,text:`初始 Integrity 为 40 + 两次独立的 0–10 随机整数。未加固时每回合减少 1，降至 0 后移除；若它是 <CrossReference name="Shipwreck" href="#entry-location-set-shipwreck" /> 地点的唯一兴趣点，地点也一并移除。可劫掠财物、修复或摧毁，也提供野外 Lay Low。重复沉船可以增加现有残骸的 Integrity。

出现方式
海上舰船损失等调用沉船生成入口；地点为空时创建 <CrossReference name="Shipwreck" href="#entry-location-set-shipwreck" />，否则附加到现有聚居地。

可出现地点
<CrossReference name="Shipwreck" href="#entry-location-set-shipwreck" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />。
改建或覆灭后是否保留，还受对应流程限制。

共同行动：
<CrossReference name="Plunder Shipwreck" href="#entry-place-task-2968835416-ch-plundershipwreck" />、<CrossReference name="Destroy Shipwreck" href="#entry-place-task-2968835416-ch-destroyshipwreck" />

挑战：
<CrossReference name="Recover Shipwreck" href="#entry-place-task-2968835416-ch-recovershipwreck" />、<CrossReference name="Lay Low（野外）" href="#entry-place-task-base-ch-laylowwilderness" />`,image:`/locations/mod/CLib.Icon_Shipwreck.png`,baseGame:!1}]},{id:`places-2968835416-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2968835416-0`,name:`Dwarven City 的可选扩展`,text:`启用 Community <CrossReference name="Library" href="#entry-location-sub-library" /> 相应的矮人 <CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、Lay Low 配置时，分别额外加入对应挑战。

对应地点 / 兴趣点
<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />

挑战：
<CrossReference name="Enshadow" href="#entry-place-task-base-ch-enshadow" />、<CrossReference name="Lay Low（聚居地）" href="#entry-place-task-base-ch-laylow" />`,baseGame:!1}]},{id:`places-2968835416-0`,title:`挑战`,items:[{id:`place-task-2968835416-ch-recovershipwreck`,name:`Recover Shipwreck`,text:`花费 50 Gold 修复沉船，把船只运往 Empty Shipyard。`,image:`/locations/mod/CLib.Icon_Shipwreck.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />`,limit:`<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" /> 未加固且 Integrity ≥25；存在可接收船只的 Orc Empty Shipyard。`,statLine:`Complexity: 10
Profile: 15
Menace: 10
XP: 21`}]},{id:`places-2968835416-1`,title:`共同行动`,items:[{id:`place-task-2968835416-ch-plundershipwreck`,name:`Plunder Shipwreck`,text:`从 <CrossReference name="Wreck" href="#entry-location-sub-shipwreck" /> 取得 Gold 或物品；Integrity −15。`,image:`/locations/mod/CLib.Icon_Shipwreck.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />`,limit:`当地存在 <CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />。`,statLine:`Complexity: 7
Profile: 50；Wreck 已加固时另 +10
Menace: 0
XP: 16`},{id:`place-task-2968835416-ch-destroyshipwreck`,name:`Destroy Shipwreck`,text:`摧毁 <CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />。`,image:`/locations/mod/CLib.Icon_BurningShip.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />`,limit:`当地存在 <CrossReference name="Wreck" href="#entry-location-sub-shipwreck" />。`,statLine:`Complexity: 4
Profile: 0
Menace: 0
XP: 10`}]},{id:`places-2968835416-unplaced`,title:`未找到正常生成路径的类型`,items:[{id:`location-set-naturalwonder`,name:`Natural Wonder 地点基类`,text:`Community <CrossReference name="Library" href="#entry-location-sub-library" /> 提供给其他 Mod 继承的类型。
未找到该基类作为独立游戏地点直接生成的路径。`,meta:`未找到正常生成路径`},{id:`location-set-wonder`,name:`Wonder 地点基类`,text:`Community <CrossReference name="Library" href="#entry-location-sub-library" /> 提供给其他 Mod 继承的类型。
未找到该基类作为独立游戏地点直接生成的路径。`,meta:`未找到正常生成路径`},{id:`location-sub-naturalwonder`,name:`Natural Wonder 兴趣点基类`,text:`Community <CrossReference name="Library" href="#entry-location-sub-library" /> 提供给其他 Mod 继承的类型。
未找到该基类作为独立游戏地点直接生成的路径。`,meta:`未找到正常生成路径`},{id:`location-sub-wonder`,name:`Wonder 兴趣点基类`,text:`Community <CrossReference name="Library" href="#entry-location-sub-library" /> 提供给其他 Mod 继承的类型。
未找到该基类作为独立游戏地点直接生成的路径。`,meta:`未找到正常生成路径`}]}]},{id:`places-2980692812`,title:`Adolia, the Faceless Memory`,description:``,sections:[{id:`places-2980692812-location`,title:`地点`,items:[{id:`location-set-memory-adolia`,name:`[地点名] Adolia`,text:`由 <CrossReference name="Pareidolia" href="?god=adolia#entry-pareidolia-modifier" meta="地点修正" text="强度至少 100 时 Security −1，至少 200 时改为 −2。强度达到 300 后，人类聚居地被吞没，统治者死亡，并按原设施数量生成自主 Adolia，留下 Subsumed Settlement。
当地已有 Madness 时，强度达到 50、100、150 后分别每回合为 Madness 增加 1、2、3；已有 Deep One Cult 时，达到 50、150 后分别每回合增加 1、2。100–299 阶段会发生 Pareidolia Crises。
Subsumed Settlement 内强度固定为 300；每回合对当地尚未感染、非玩家控制且不是 Chosen One 的英雄与侍僧分别进行 20% 感染判定。" image="./adolia/icon_pareidolia.png" /> 达到 300 后形成，以原地点名加 Adolia 命名。每回合设施 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1，提供 Rest 与 Lay Low。可在此招募 <CrossReference name="An Adolia" href="?god=adolia#entry-an-adolia" meta="特殊人物与自主单位" text="可从完全渗透的聚居地或 Subsumed Settlement 招募，占用正常 Agent 上限与招募次数。继承 Supplicant 开局所选的 Intrusive Thought、Mental Leech 或 Dark Memories。" image="./adolia/icon_adolia.png" />。

出现方式
<CrossReference name="Pareidolia" href="?god=adolia#entry-pareidolia" meta="神力" text="创建 Pareidolia，逐步侵蚀聚居地；达到 300 时转化为 Subsumed Settlement。" image="./adolia/icon_pareidolia.png" /> 达到 300 后替换聚居地，建立同名兴趣点。世界侵蚀另可生成没有该兴趣点的 Adolia 野地。

可能配置的兴趣点
<CrossReference name="Subsumed Settlement" href="#entry-location-sub-memory-adolia" />。
固定、随机与改建来源见各兴趣点。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/God_FacelessMemory.set_adolia.png`,baseGame:!1}]},{id:`places-2980692812-interest`,title:`兴趣点`,items:[{id:`location-sub-memory-adolia`,name:`Subsumed Settlement`,text:`每回合 Menace +1，使每个相邻人类聚居地已有 Pareidolia +1；提供 <CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" /> 与 Lay Low。

出现方式
聚居地被 <CrossReference name="Pareidolia" href="?god=adolia#entry-pareidolia" meta="神力" text="创建 Pareidolia，逐步侵蚀聚居地；达到 300 时转化为 Subsumed Settlement。" image="./adolia/icon_pareidolia.png" /> 吞没时加入。

可出现地点
<CrossReference name="[地点名] Adolia" href="#entry-location-set-memory-adolia" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Lay Low（聚居地）" href="#entry-place-task-base-ch-laylow" />

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />`,image:`/locations/mod/God_FacelessMemory.icon_adolia.png`,baseGame:!1}]},{id:`places-2980692812-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-2980692812-0`,name:`Holy Site 的 Adolia 应对`,text:`使用 Adolia 时，在拥有 Holy Site 的人类体系聚居地加入。

对应地点 / 兴趣点
<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />

英雄任务：
<CrossReference name="Cleansing Ritual" href="#entry-place-task-2980692812-ch-memory-shrinktraitholy" />`,baseGame:!1},{id:`place-hook-2980692812-1`,name:`Library 的 Adolia 应对`,text:`使用 Adolia 时，<CrossReference name="Library" href="#entry-location-sub-library" /> 会加入两种应对入口。购买相关任务的注入代码也检查 <CrossReference name="Library" href="#entry-location-sub-library" />，而不是刚取得的 <CrossReference name="Market" href="#entry-location-sub-market" /> 变量；单独拥有 <CrossReference name="Market" href="#entry-location-sub-market" /> 不能保证出现此入口。

对应地点 / 兴趣点
<CrossReference name="Library" href="#entry-location-sub-library" />

英雄任务：
<CrossReference name="Clear Mind" href="#entry-place-task-2980692812-ch-memory-shrinktraitlibrary" />、<CrossReference name="Buy Local Remedy" href="#entry-place-task-2980692812-ch-memory-shrinktraitmarket" />`,baseGame:!1},{id:`place-hook-2980692812-2`,name:`城市的 Adolia Remedy`,text:`使用 Adolia 时，<CrossReference name="City" href="#entry-location-set-city" /> 与 <CrossReference name="Elven City" href="#entry-location-set-elvencity" /> 增加传播 Remedy 的任务。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />

共同行动：
<CrossReference name="Distribute Arcane Remedy" href="#entry-place-task-2980692812-ch-memory-spreadremedy" />`,baseGame:!1}]},{id:`places-2980692812-1`,title:`共同行动`,items:[{id:`place-task-2980692812-ch-memory-spreadremedy`,name:`Distribute Arcane Remedy`,text:`消耗持有的全部同类样本，创建 0 强度的 <CrossReference name="Arcane Remedy" href="?god=adolia#entry-arcane-remedy-modifier" meta="地点修正" text="提供 Receive Arcane Remedy、Receive Arcane Remedy Sample 及对应统治者行动，疗法可以被 Corrupt Arcane Remedy 污染。
未污染时每回合使当地 Pareidolia −5、相邻尚未被吞没地点的 Pareidolia −2。关闭模组设置 Arcane Remedy 后移除。" image="./adolia/icon_arcaneremedy.png" />；使用污染样本时创建污染版本。完成时 Profile +10。`,image:`/locations/mod/God_FacelessMemory.icon_arcaneremedy.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`携带 Arcane Remedy Sample，双方人物均可执行。`,statLine:`Complexity: 25
Profile: 90 + 50 × 世界恐慌
Menace: 0
XP: 42`}]},{id:`places-2980692812-2`,title:`英雄任务`,items:[{id:`place-task-2980692812-ch-memory-shrinktraitholy`,name:`Cleansing Ritual`,text:`感染强度减半；Cathedral 已 Desecrated 时改为翻倍。完成时 Profile +5。`,image:`/locations/game/cathedral.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" />`,limit:`已有 Faceless Memory，Awareness 至少 50%，对 Adolia 无正面偏好。`,statLine:`Complexity: 5
Profile: 50 + 50 × 世界恐慌
Menace: 0
XP: 12`,positiveTags:`Religion、Cooperation`,negativeTags:`Adolia、Gold`},{id:`place-task-2980692812-ch-memory-shrinktraitlibrary`,name:`Clear Mind`,text:`感染强度减半；当地完全渗透时改为获得 <CrossReference name="Placebo" href="?god=adolia#entry-placebo" meta="人物特质" text="持续 25 回合，使 Cleansing Ritual 和 Receive Arcane Remedy 的执行意愿各减少 100。" />。完成时 Profile +5。`,image:`/locations/game/library.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Library" href="#entry-location-sub-library" />`,limit:`已感染的英雄，Awareness 至少 50%，对 Adolia 无正面偏好；Lore 至少 4，或为 Mage、Elven Specialist。`,statLine:`Complexity: 40
Profile: 70 + 50 × 世界恐慌
Menace: 0
XP: 60`,positiveTags:`无`,negativeTags:`Adolia`},{id:`place-task-2980692812-ch-memory-shrinktraitmarket`,name:`Buy Local Remedy`,text:`消耗 30 Gold，使感染强度减半；当地完全渗透时改为获得 <CrossReference name="Placebo" href="?god=adolia#entry-placebo" meta="人物特质" text="持续 25 回合，使 Cleansing Ritual 和 Receive Arcane Remedy 的执行意愿各减少 100。" />。完成时 Profile +5。`,image:`/locations/game/market.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Library" href="#entry-location-sub-library" />`,limit:`已感染，Gold 至少 30，Awareness 至少 50%，对 Adolia 无正面偏好。`,statLine:`Complexity: 5
Profile: 50 + 50 × 世界恐慌
Menace: 0
XP: 12`,positiveTags:`无`,negativeTags:`Adolia、Gold`}]}]},{id:`places-3003549759`,title:`Orcs Plus`,description:``,sections:[{id:`places-3003549759-interest`,title:`兴趣点`,items:[{id:`location-sub-orcculturecapital`,name:`Seat of the Elders`,text:`Orc 文化中心，提供 Grott 饮用、Drinking Horn 补充、三槽商品市场和 Reprimand Orc Upstart。使用 Ophanim 对应 Perfection 教义时，额外加入 Festival of Perfection。

出现方式
Orcs Plus 为部落文化选择首都，或部落分裂后重建文化中心时加入。

可出现地点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

宗教任务：
<CrossReference name="Holy: Reprimand Orc Upstart" href="#entry-place-task-3003549759-ch-h-orcs-reprimandupstart" />、<CrossReference name="Holy: Festival of Perfection" href="#entry-place-task-3003549759-ch-h-orcs-perfectionfestival" />

共同行动：
<CrossReference name="Drink Orc Grott" href="#entry-place-task-3003549759-ch-orcs-drinkgrott" />、<CrossReference name="Refill Drinking Horns" href="#entry-place-task-3003549759-ch-orcs-refilldrinkinghorns" />、<CrossReference name="Force Restock（Orc）" href="#entry-place-task-3003549759-ch-orcs-forcerestock" />、<CrossReference name="Buy item from Horde" href="#entry-place-task-3003549759-ch-orcs-buyitem" />`,image:`/locations/mod/OrcsPlus.Icon_GreatHall.png`,baseGame:!1},{id:`location-sub-orcspawningpit`,name:`Flesh Pit`,text:`每回合储存 1.25 Flesh，上限 25。Fleshweaving 保持完全向玩家倾斜且部落处于战争中时，储满后生成 25 HP 的 Maddened Spawn，清空储量并使兴趣点 Menace +10。
Fleshweaving 不再符合条件时移除此兴趣点。自身没有新增挑战，不能渗透。

出现方式
Gift of Flesh 在已专精、Fleshweaving 为 −2 且尚无 Flesh Pit 的 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 添加；需要 Escamrak 联动。

可出现地点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/OrcsPlus.Icon_Escamrak_SpawningPit.png`,baseGame:!1},{id:`location-sub-orctemple`,name:`Orc Great Hall`,text:`Orc 文化的普通宗教会堂，实际名称由文化决定。提供 Grott、物品交易、补充 Drinking Horn 与文化相关宗教任务。

出现方式
Build <CrossReference name="Temple" href="#entry-location-sub-temple" /> 建设，或部落文化中心迁移、合并、分裂时创建。

可出现地点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

宗教任务：
<CrossReference name="Holy: Reprimand Orc Upstart" href="#entry-place-task-3003549759-ch-h-orcs-reprimandupstart" />、<CrossReference name="Holy: Festival of Perfection" href="#entry-place-task-3003549759-ch-h-orcs-perfectionfestival" />

共同行动：
<CrossReference name="Drink Orc Grott" href="#entry-place-task-3003549759-ch-orcs-drinkgrott" />、<CrossReference name="Refill Drinking Horns" href="#entry-place-task-3003549759-ch-orcs-refilldrinkinghorns" />、<CrossReference name="Force Restock（Orc）" href="#entry-place-task-3003549759-ch-orcs-forcerestock" />、<CrossReference name="Buy item from Horde" href="#entry-place-task-3003549759-ch-orcs-buyitem" />`,image:`/locations/mod/OrcsPlus.Icon_GreatHall.png`,baseGame:!1},{id:`location-sub-orcwaystation`,name:`Orc Waystation`,text:`特定 Orc 部落的秘密中转站，使其能经由当地扩张和劫掠；提供营地休息、出资延伸中转站等挑战。

出现方式
<CrossReference name="Fund Waystation" href="#entry-place-task-3003549759-ch-orcs-fundwaystation" /> 在符合距离与相邻关系条件的既有聚居地增加；无主地点可同时归属建立者部落。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="Ruins" href="#entry-location-set-cityruins" />、<CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />、<CrossReference name="Manifestation" href="#entry-location-set-vinervamanifestation" />、<CrossReference name="Heart of the Forest 所在野地" href="#entry-location-set-minorvinerva" />、<CrossReference name="Deep One Sanctum" href="#entry-location-set-deeponesanctum" />、<CrossReference name="Shipwreck" href="#entry-location-set-shipwreck" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Cause Orcish Expansion" href="#entry-place-task-base-ch-orcs-expand" />、<CrossReference name="Orcish Raiding" href="#entry-place-task-base-ch-orcraiding" />、<CrossReference name="Raid Outpost" href="#entry-place-task-3003549759-ch-orcs-raidoutpost" />、<CrossReference name="Rest and Resupply（Orc Camp）" href="#entry-place-task-base-ch-rest-inorccamp" />、<CrossReference name="Fund Waystation" href="#entry-place-task-3003549759-ch-orcs-fundwaystation" />、<CrossReference name="Opportunistic Encroachment" href="#entry-place-task-base-ch-orcs-opportunisticencroachment" />`,image:`/locations/mod/OrcsPlus.Icon_Waystation.png`,baseGame:!1}]},{id:`places-3003549759-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-3003549759-0`,name:`Orc Camp 的文化扩展`,text:`Orcs Plus 创建营地时加入这些候选行动。Festival of Madness 仅在相应神祇教义为 Harbingers of Madness 时加入；其余仍逐项检查专精、教义、渗透和执行者身份。

对应地点 / 兴趣点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />

挑战：
<CrossReference name="Gather the Horde" href="#entry-place-task-3003549759-ch-orcs-gatherhorde" />、<CrossReference name="Raid Outpost" href="#entry-place-task-3003549759-ch-orcs-raidoutpost" />、<CrossReference name="Fund Waystation" href="#entry-place-task-3003549759-ch-orcs-fundwaystation" />、<CrossReference name="Build Great Hall" href="#entry-place-task-3003549759-ch-orcs-buildtemple" />、<CrossReference name="Blood Money" href="#entry-place-task-3003549759-ch-orcs-bloodmoney" />

共同行动：
<CrossReference name="Fund the Horde" href="#entry-place-task-3003549759-ch-orcs-fundhorde" />、<CrossReference name="Recruit Orc Corsair" href="#entry-place-task-3003549759-ch-orcs-recruitcorsair" />

宗教任务：
<CrossReference name="Holy: Cleansing Festival" href="#entry-place-task-3003549759-ch-h-orcs-cleansingfestival" />、<CrossReference name="Holy: Dark Festival" href="#entry-place-task-3003549759-ch-h-orcs-darkfestival" />、<CrossReference name="Holy: Festival of Madness" href="#entry-place-task-3003549759-ch-h-orcs-madnessfestival" />

自主单位任务：
<CrossReference name="Festival of War" href="#entry-place-task-3003549759-ch-orcs-warfestival" />`,baseGame:!1}]},{id:`places-3003549759-0`,title:`挑战`,items:[{id:`place-task-3003549759-ch-orcs-raidoutpost`,name:`Raid Outpost`,text:`劫掠相邻 Human Outpost 的投资 Gold，可能将其摧毁；提高部落 Menace 与玩家对文化的影响力。`,image:`/locations/game/raid.png`,meta:`Might + Command`,baseGame:!1,location:`<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`存在合格相邻 Human Outpost；地下层需可通行，执行者还需满足部落或文化关系条件。`,statLine:`Complexity: 40
Profile: 0
Menace: 0
XP: 60`},{id:`place-task-3003549759-ch-orcs-fundwaystation`,name:`Fund Waystation`,text:`花费 40 Gold在相邻合格野外聚居地建立 <CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />，并取得文化影响力。`,image:`/locations/mod/OrcsPlus.Icon_Waystation.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orc Waystation" href="#entry-location-sub-orcwaystation" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`需要相邻的合格既有野外地点与足够 Gold；除本文化 Orc Elder 外，需要已渗透营地或可用 Waystation。`,statLine:`Complexity: 15
Profile: 30
Menace: 0
XP: 29`},{id:`place-task-3003549759-ch-orcs-gatherhorde`,name:`Gather the Horde`,text:`召集本部落、故乡营地已被征服的军队到这里，暂时等待新命令。`,image:`/locations/game/i_orcishBanner.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`携带本部落 Horde Banner；营地已征服，部落处于和平，至少有一支合格军队。`,statLine:`Complexity: 10
Profile: 0
Menace: 0
XP: 21`},{id:`place-task-3003549759-ch-orcs-buildtemple`,name:`Build Great Hall`,text:`花费 60 Gold 建立 Great Hall，获得 Orc Champion 随从与文化影响力。`,image:`/locations/mod/OrcsPlus.Icon_GreatHall.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`营地已经专精并完全渗透，执行者有足够 Gold。`,statLine:`Complexity: 20
Profile: 0
Menace: 0
XP: 36`},{id:`place-task-3003549759-ch-orcs-bloodmoney`,name:`Blood Money`,text:`支付 40 Gold，说服营地建立一支新军队。`,image:`/locations/mod/OrcsPlus.Icon_BloodGold.png`,meta:`Lore + Command`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`已专精营地，没有现存的营地军队；本文化 Orc Elder 可直接执行，其他人物要求完全渗透。`,statLine:`Complexity: 20
Profile: 0
Menace: 0
XP: 36`}]},{id:`places-3003549759-1`,title:`共同行动`,items:[{id:`place-task-3003549759-ch-orcs-drinkgrott`,name:`Drink Orc Grott`,text:`暂时增加 1 Might 与 1 Command；非 Orc 饮用时损失 2 HP。同时装满携带的 Drinking Horn。`,image:`/locations/mod/OrcsPlus.Icon_Grott.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`营地具有 Great Hall 或 <CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />；本部落人物可直接使用，玩家一般需要完全渗透，特定 Orc 身份有豁免。非玩家外族人物还受文化容忍度限制。`,statLine:`Complexity: 2
Profile: 30
Menace: 0
XP: 6`},{id:`place-task-3003549759-ch-orcs-refilldrinkinghorns`,name:`Refill Drinking Horns`,text:`装满全部空的 Drinking Horn；饮用效果由物品提供。`,image:`/locations/mod/OrcsPlus.Icon_Grott.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`携带空 Drinking Horn；本部落人物可直接使用，其他执行者受营地渗透、Orc 身份或文化容忍度限制。`,statLine:`Complexity: 1
Profile: 0
Menace: 0
XP: 3`},{id:`place-task-3003549759-ch-orcs-forcerestock`,name:`Force Restock（Orc）`,text:`花费 15 Gold 刷新 Orc 市场；Orcish Industry 越高，越可能出现稀有物品。`,image:`/locations/game/market.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`营地完全渗透，并有足够 Gold。`,statLine:`Complexity: 10
Profile: 30
Menace: 20
XP: 21`},{id:`place-task-3003549759-ch-orcs-buyitem`,name:`Buy item from Horde`,text:`购买当前 Orc 商品，随后刷新该槽位；价格由商品决定，Orcish Industry 影响新商品品质。`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`有足够 Gold。`,statLine:`Complexity: 1
Profile: 20
Menace: 0
XP: 3`},{id:`place-task-3003549759-ch-orcs-fundhorde`,name:`Fund the Horde`,text:`向 Orc 文化捐赠 Gold，获得捐款一半的文化影响力。`,image:`/locations/game/bribe.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`至少有 1 Gold。`,statLine:`Complexity: 1
Profile: 40
Menace: 0
XP: 3`},{id:`place-task-3003549759-ch-orcs-recruitcorsair`,name:`Recruit Orc Corsair`,text:`招募 Orc Corsair，支付其 Gold 与 Command 需求。`,image:`/locations/mod/OrcsPlus.Foreground_OrcCorsair.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`位于合格 Orc Shipyard，并满足随从招募条件。`,statLine:`Complexity: 由 Orc Corsair 的招募时间决定
Profile: 20
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`}]},{id:`places-3003549759-3`,title:`宗教任务`,items:[{id:`place-task-3003549759-ch-h-orcs-reprimandupstart`,name:`Holy: Reprimand Orc Upstart`,text:`召回 Orc Upstart 并训诫；其在营地休息恢复 HP，快速降低 Profile 与 Menace。`,image:`/locations/mod/OrcsPlus.Icon_GreatHall.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`仅本文化的 Orc Elder；当地具有本文化的 Great Hall 或 <CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />。`,statLine:`Complexity: 2 × Orc Upstart 的 Command；无目标时为 10
Profile: 0
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`,positiveTags:`Co-Operation、Religion、Orc`,negativeTags:`Ambition、Combat、Cruelty、Discord`},{id:`place-task-3003549759-ch-h-orcs-perfectionfestival`,name:`Holy: Festival of Perfection`,text:`持续增加当地 Perfection；执行者每回合 Profile +2、Menace +4。`,image:`/locations/game/ophanimLight.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Seat of the Elders" href="#entry-location-sub-orcculturecapital" />、<CrossReference name="Orc Great Hall" href="#entry-location-sub-orctemple" />`,limit:`仅自己文化的 Orc Elder；Perfection 教义 <0，当地数值尚未达到门槛。`,statLine:`Complexity: 10
Profile: 0
Menace: 0
XP: 21`,positiveTags:`Ambition、Combat、Orc、Religion`,negativeTags:`无`},{id:`place-task-3003549759-ch-h-orcs-cleansingfestival`,name:`Holy: Cleansing Festival`,text:`把附近地点与人物的 Shadow 吸引到这里并净化；执行者每回合 Profile +1、Menace −4。`,image:`/locations/game/festival.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`仅自己文化的 Orc Elder；Shadow Weaving >0。`,statLine:`Complexity: 20
Profile: 0
Menace: 0
XP: 36`,positiveTags:`无`,negativeTags:`Shadow`},{id:`place-task-3003549759-ch-h-orcs-darkfestival`,name:`Holy: Dark Festival`,text:`增加本地、周边地点与人物的 Shadow；执行者每回合 Profile +1、Menace +2。`,image:`/locations/game/enshadow.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`仅自己文化的 Orc Elder；Shadow Weaving 为 −2。`,statLine:`Complexity: 20
Profile: 0
Menace: 0
XP: 36`,positiveTags:`Shadow`,negativeTags:`无`},{id:`place-task-3003549759-ch-h-orcs-madnessfestival`,name:`Holy: Festival of Madness`,text:`逐渐侵蚀周边人类、精灵统治者与人物的 Sanity；执行者每回合 Profile +1、Menace +2。`,image:`/locations/game/madness.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`仅自己文化的 Orc Elder；Harbingers of Madness <0。`,statLine:`Complexity: 20
Profile: 0
Menace: 0
XP: 36`,positiveTags:`Madness`,negativeTags:`无`}]},{id:`places-3003549759-4`,title:`自主单位任务`,items:[{id:`place-task-3003549759-ch-orcs-warfestival`,name:`Festival of War`,text:`持续把本地及同部落相邻营地的 Orcish Industry 转为 Death。执行者每回合 Profile +0.5、Menace +1.5；部落每回合 Menace +0.25。`,image:`/locations/game/death.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`仅本部落的 Orc Shaman。`,statLine:`Complexity: 15
Profile: 0
Menace: 0
XP: 29`}]}]},{id:`places-3192034838`,title:`Mirror God`,description:``,sections:[{id:`places-3192034838-extensions`,title:`对已有兴趣点的扩展`,items:[{id:`place-hook-kalastrophe-defile`,name:`Holy Site · Defile`,text:`<CrossReference name="Holy Site / Desecrated Holy Site" href="#entry-location-sub-cathedral" /> 受到 <CrossReference name="Defile" href="?god=kalastrophe#entry-defile" meta="神力" text="把 Holy Site 的 Consecrate 行动替换为不可执行的 Shattered Beliefs。" image="./kalastrophe/Power_3_Shadow.png" /> 影响后，<CrossReference name="Consecrate" href="#entry-place-task-base-ch-consacrate" /> 被替换为不可执行的版本，因此关闭该英雄任务。原兴趣点仍然存在。`}]}]},{id:`places-3232578780`,title:`Out of Gods`,description:``,sections:[{id:`places-3232578780-location`,title:`地点`,items:[{id:`location-set-accidentsite`,name:`Accident Site`,text:`替代初始 the Elder Tomb，地点 Shadow 设为 0，并放置一份 Greater Rift。提供 <CrossReference name="Reforge The Seal" href="#entry-place-task-base-ch-reforgetheseals" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" /> 与本体 Arcane <CrossReference name="Fortress" href="#entry-location-sub-fort" /> 法术；普通摧毁回调为空。

出现方式
The Thing From Beyond 开局替换 <CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />。

英雄任务：
<CrossReference name="Reforge The Seal" href="#entry-place-task-base-ch-reforgetheseals" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" />、<CrossReference name="Geomancy: Arcane Fortress" href="#entry-place-task-base-mg-aranefortresstomb" />`,image:`/locations/game/loc_minor_ruins.png`,baseGame:!1},{id:`location-set-fallencoven`,name:`Destroyed Coven`,text:`开局选择邻近人类聚居地的空地建立，并清除该处其他修正，放置 The Curse。提供 <CrossReference name="Weaken The Curse" href="#entry-place-task-3232578780-ch-weakencurse" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" /> 与 Arcane <CrossReference name="Fortress" href="#entry-location-sub-fort" />；普通摧毁回调为空。

出现方式
The Shadow Counsel 开局在选定的邻近人类聚居地的空地点建立。

英雄任务：
<CrossReference name="Weaken The Curse" href="#entry-place-task-3232578780-ch-weakencurse" />、<CrossReference name="Fulfil the Prophecy" href="#entry-place-task-base-ch-fulfilltheprophecy" />、<CrossReference name="Geomancy: Arcane Fortress" href="#entry-place-task-base-mg-aranefortresstomb" />`,image:`/locations/game/loc_evil_coven.png`,baseGame:!1},{id:`location-set-timerift`,name:`Temporal Rift Site`,text:`初始位置，替代 the Elder Tomb，Shadow 为 0；提供 Close Loop。地点的摧毁回调为空，因此不会被普通摧毁操作改为废墟。

出现方式
Paradoxis 开局替换 <CrossReference name="The Elder Tomb" href="#entry-location-set-tombofgods" />。

英雄任务：
<CrossReference name="Close the Loop" href="#entry-place-task-3232578780-ch-backintime" />`,image:`/locations/game/loc_evil_tomb.png`,baseGame:!1}]},{id:`places-3232578780-2`,title:`英雄任务`,items:[{id:`place-task-3232578780-ch-weakencurse`,name:`Weaken The Curse`,text:`使 The Curse 强度 −150。引导风险为 50；施法者的 Awareness 与世界恐慌越高，通常越愿意执行。`,image:`/locations/game/reforgeTheSeal.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Destroyed Coven" href="#entry-location-set-fallencoven" />`,limit:`法师英雄，个人 Awareness 超过 50%；世界恐慌至少 75%，游戏尚未结束。`,statLine:`Complexity: 170
Profile: 1000
Menace: 0
XP: 180`,positiveTags:`Co-Operation`,negativeTags:`无`},{id:`place-task-3232578780-ch-backintime`,name:`Close the Loop`,text:`触发 Paradoxis 的时间回溯，进入下一轮时间循环。`,image:`/locations/game/theProphecy.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Temporal Rift Site" href="#entry-location-set-timerift" />`,limit:`仅 Chosen One；游戏正式开始、世界恐慌与预言进度满足条件，特殊行动冷却已结束。`,statLine:`Complexity: 50
Profile: 1000
Menace: 0
XP: 72`,positiveTags:`Ambition`,negativeTags:`无`}]}]},{id:`places-3320562229`,title:`Aberrant Metal`,description:``,sections:[{id:`places-3320562229-location`,title:`地点`,items:[{id:`location-settlement-factory`,name:`Aberrant Factory`,text:`城市的工厂设施转化完成后形成。没有统治者与继承人；Prosperity 固定为 0，人口不再按常规食物和宜居度规则变化，人口上限至少等于当前人口。保留原人口与 Shadow。
每回合使已有 Eldritch Smog +5、Unrest −5、Hunger / Famine −5，并直接移除 Political Agitation。没有驻防军时，经过内部计时生成 Aberrant Laborers。
防御上限为 人口+25+设施加成；没有敌对军队进行劫掠或摧毁时，每回合恢复 max(1,⌊Core Efficiency × 0.15⌋) 防御。地点毁灭时配属军队与采集单位死亡。

出现方式
<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" /> 将所有可渗透兴趣点工厂化后，替换原人类聚居地；保留原有的工厂设施。

可能配置的兴趣点
<CrossReference name="Repurposed Structures" href="#entry-location-sub-factory-festeringmetal" />、<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />、<CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />、<CrossReference name="Biometallic Mass" href="#entry-location-sub-factory-recycler" />、<CrossReference name="Churning Machinery" href="#entry-location-sub-factory-repo" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

英雄任务：
<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Bribe Guards" href="#entry-place-task-base-ch-bribeguards" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />、<CrossReference name="Organise Dissent" href="#entry-place-task-base-ch-organisedissent" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Ward" href="#entry-place-task-base-ch-h-ward" />、<CrossReference name="Holy: Remove Ward" href="#entry-place-task-base-ch-h-removeward" />、<CrossReference name="Holy: Abyssal Faith" href="#entry-place-task-base-ch-h-abyssalfaith" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />`,image:`/locations/mod/Factory_God.icon_settlementfactory.png`,baseGame:!1},{id:`location-settlement-mobilefactory`,name:`Mobile Factory（驻地）`,text:`Mobile Factory 所关联的聚居地形式，继承工厂的人口维持与烟雾效果。防御上限为 人口+100；军队死亡会使驻地毁灭，驻地毁灭也会杀死关联军队。军队每回合按自身 HP 更新这里的人口。

出现方式
Walking <CrossReference name="City" href="#entry-location-set-city" /> 将 <CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" /> 转为可移动军队及其配套驻地。

可能配置的兴趣点
<CrossReference name="Repurposed Structures" href="#entry-location-sub-factory-festeringmetal" />、<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />、<CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />、<CrossReference name="Biometallic Mass" href="#entry-location-sub-factory-recycler" />、<CrossReference name="Churning Machinery" href="#entry-location-sub-factory-repo" />。
固定、随机与改建来源见各兴趣点。

共同行动：
<CrossReference name="Rest and Resupply" href="#entry-place-task-base-ch-rest" />

英雄任务：
<CrossReference name="Warn The World" href="#entry-place-task-base-ch-warntheworld" />、<CrossReference name="Drive Back Shadow" href="#entry-place-task-base-ch-drivebackshadow" />、<CrossReference name="Save Hero" href="#entry-place-task-base-ch-savehero" />、<CrossReference name="Gift Ruler an Elfstone" href="#entry-place-task-base-ch-elf-giveruleelfstone" />、<CrossReference name="Sabotage Ruler" href="#entry-place-task-base-ch-sabotageruler" />、<CrossReference name="Assassinate Enshadowed Ruler" href="#entry-place-task-base-ch-assassinateenshadowedruler" />、<CrossReference name="Redeem Ruler" href="#entry-place-task-base-ch-redeemruler" />、<CrossReference name="Redeem Sovereign" href="#entry-place-task-base-ch-redeemsovereign" />

挑战：
<CrossReference name="Poison Hero" href="#entry-place-task-base-ch-poisonhero" />、<CrossReference name="Ransack Possessions" href="#entry-place-task-base-ch-ransackpossessions" />、<CrossReference name="Well of Shadows" href="#entry-place-task-base-ch-wellofshadows" />、<CrossReference name="Bribe Guards" href="#entry-place-task-base-ch-bribeguards" />、<CrossReference name="Silent Assassination" href="#entry-place-task-base-ch-assassinatesilent" />、<CrossReference name="Brutal Assassination" href="#entry-place-task-base-ch-assassinatebrutal" />、<CrossReference name="Access Vault" href="#entry-place-task-base-ch-accessvault" />、<CrossReference name="Subtle Thievery" href="#entry-place-task-base-ch-accessvaultlimited" />、<CrossReference name="Organise Dissent" href="#entry-place-task-base-ch-organisedissent" />

宗教任务：
<CrossReference name="Holy: Preach Faith" href="#entry-place-task-base-ch-h-preach" />、<CrossReference name="Holy: Build Temple" href="#entry-place-task-base-ch-h-buildtemple" />、<CrossReference name="Holy: Preach to Ruler" href="#entry-place-task-base-ch-h-preachtoruler" />、<CrossReference name="Holy: Ward" href="#entry-place-task-base-ch-h-ward" />、<CrossReference name="Holy: Remove Ward" href="#entry-place-task-base-ch-h-removeward" />、<CrossReference name="Holy: Abyssal Faith" href="#entry-place-task-base-ch-h-abyssalfaith" />、<CrossReference name="Holy: Aware" href="#entry-place-task-base-ch-h-aware" />、<CrossReference name="Holy: Prophesy Doom" href="#entry-place-task-base-ch-h-doomsay" />、<CrossReference name="Holy: Military Fervour" href="#entry-place-task-base-ch-h-militaryfervour" />`,image:`/locations/mod/Factory_God.icon_settlementmobilefactory.png`,baseGame:!1}]},{id:`places-3320562229-interest`,title:`兴趣点`,items:[{id:`location-sub-factory-festeringmetal`,name:`Repurposed Structures`,text:`Prosperity −0.2，<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" /> 的 Danger +4。每回合使 Eldritch Smog 增加 Core Efficiency × 0.01。
没有存活的配属 Aberrant Miner 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Miner 并清零。每座设施各维护一个；被另一种工厂设施替换时，配属单位解散。

出现方式
<CrossReference name="Hostile Takeover" href="?god=aberrant-metal#entry-hostile-takeover" meta="神力" text="选择兴趣点，替换为 Repurposed Structures。" image="./aberrant-metal/icon_power_subsettlement1b.png" /> 替换目标兴趣点，保留被替换设施的记录。

可出现地点
<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/Factory_God.icon_power_subsettlement1b.png`,baseGame:!1},{id:`location-sub-factory-productioncore`,name:`Production Core`,text:`替换兴趣点，Prosperity −0.2，并建立 Core Efficiency。每回合生产 1+⌊Core Efficiency/25⌋ Units，Ward −2；常规核心使 Eldritch Smog 增加 Core Efficiency × 0.03，深海核心产生 Contaminated Waters。
所有可渗透兴趣点都成为工厂设施后，人类类聚居地转为 <CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />；统治者被杀死，原普通社会的地点归入邪恶势力。处于 Dark Empire 的核心会把驻防军替换为 Aberrant Laborers。
提供提升生产与烟雾、招募随从、污染水域等挑战，以及英雄任务 <CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" />。

出现方式
<CrossReference name="Begin Production" href="?god=aberrant-metal#entry-begin-production" meta="神力" text="选择一处合格兴趣点，将其替换为 Production Core，并建立 Core Efficiency。Orc Fortress 与 Deep One Abyssal City 使用对应的核心形式。" image="./aberrant-metal/icon_power_coreb.png" /> 替换合格兴趣点或在深海据点增加；<CrossReference name="Reestablish Core" href="#entry-place-task-3320562229-ch-factorygod-reestablishcore" /> 可重建 <CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />；相应特质完成挑战也能建立核心。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />、<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" />

挑战：
<CrossReference name="Recruit Laborer" href="#entry-place-task-3320562229-ch-factorygod-recruitlaborer" />、<CrossReference name="Recruit Smog-Born" href="#entry-place-task-3320562229-ch-factorygod-recruitorc" />、<CrossReference name="Boost Productivity" href="#entry-place-task-3320562229-ch-factorygod-boostproductivity" />、<CrossReference name="Boost Eldritch Smog" href="#entry-place-task-3320562229-ch-factorygod-boostsmog" />、<CrossReference name="Blood for Units" href="#entry-place-task-3320562229-ch-factorygod-createunits" />、<CrossReference name="Contaminate Waters" href="#entry-place-task-3320562229-ch-factorygod-contaminate" />`,image:`/locations/mod/Factory_God.icon_power_coreb.png`,baseGame:!1},{id:`location-sub-factory-productioncoredestroyed`,name:`Ruined Core`,text:`<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" /> 留下的核心废墟，阻止 Begin Production 再次建立核心。提供 <CrossReference name="Clear Ruined Core" href="#entry-place-task-3320562229-ch-factorygod-clearruins" /> 与 <CrossReference name="Reestablish Core" href="#entry-place-task-3320562229-ch-factorygod-reestablishcore" />。
废墟消退进度从 0 开始，每回合 +2−Shadow；达到 100 后还原原兴趣点，无原兴趣点则移除。期间每回合使 Eldritch Smog 减少 max(10,100−消退进度 × 0.1)。

出现方式
<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" /> 替换原 <CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" /> 后留下。

可出现地点
<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />、<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Clear Ruined Core" href="#entry-place-task-3320562229-ch-factorygod-clearruins" />

挑战：
<CrossReference name="Reestablish Core" href="#entry-place-task-3320562229-ch-factorygod-reestablishcore" />`,image:`/locations/mod/Factory_God.icon_power_subsettlement1.png`,baseGame:!1},{id:`location-sub-factory-recycler`,name:`Biometallic Mass`,text:`Prosperity −0.2，<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" /> 的 Danger +4。每回合使 Eldritch Smog 增加 Core Efficiency × 0.02。
没有存活的配属 Aberrant Recycler 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Recycler 并清零。每座设施各维护一个。
食物乘数为 max(1,0.05 × 记录的 Core Efficiency)。记录值在 Aberrant Recycler 缺失或死亡时更新，其存活期间保留最近一次数值。

出现方式
<CrossReference name="Resource Allocation" href="?god=aberrant-metal#entry-resource-allocation" meta="神力" text="选择兴趣点，替换为 Biometallic Mass。" image="./aberrant-metal/icon_power_subsettlement2b.png" /> 替换目标兴趣点，保留被替换设施的记录。

可出现地点
<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/Factory_God.icon_power_subsettlement2b.png`,baseGame:!1},{id:`location-sub-factory-repo`,name:`Churning Machinery`,text:`Prosperity −0.2，<CrossReference name="Banish Production Core" href="#entry-place-task-3320562229-ch-factorygod-reforgeseals" /> 的 Danger +10。每回合使 Eldritch Smog 增加 Core Efficiency × 0.01。
没有存活的配属 Aberrant Repomen 时，每回合按 Core Efficiency/10 累积组装进度，达到 100 后生成一个 Aberrant Repomen 并清零。每座设施各维护一个。

出现方式
<CrossReference name="Eldritch Promotion" href="?god=aberrant-metal#entry-eldritch-promotion" meta="神力" text="选择兴趣点，替换为 Churning Machinery。" image="./aberrant-metal/icon_power_subsettlement3.png" /> 替换目标兴趣点，保留被替换设施的记录。

可出现地点
<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/Factory_God.icon_power_subsettlement3.png`,baseGame:!1}]},{id:`places-3320562229-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-3320562229-0`,name:`人类聚居地的人口回收`,text:`使用 Aberrant Metal 且当地仍有人口时加入；只供 Aberrant Repoman 使用。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

自主单位任务：
<CrossReference name="Reposession Protocol" href="#entry-place-task-3320562229-ch-factory-stealpops" />`,baseGame:!1},{id:`place-hook-3320562229-1`,name:`Aberrant Factory 的额外行动`,text:`使用 Aberrant Metal 时，工厂聚居地增加归入 Dark Empire 与 <CrossReference name="Ash Fall" href="#entry-place-task-3320562229-mg-factory-smogcold" /> 入口。

对应地点 / 兴趣点
<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />

挑战：
<CrossReference name="Integrate into Dark Empire" href="#entry-place-task-3320562229-ch-factorygod-joinde" />、<CrossReference name="Ash Fall" href="#entry-place-task-3320562229-mg-factory-smogcold" />`,baseGame:!1}]},{id:`places-3320562229-0`,title:`挑战`,items:[{id:`place-task-3320562229-ch-factorygod-recruitlaborer`,name:`Recruit Laborer`,text:`免费招募一个 Aberrant Laborer；可由多人同时执行。`,image:`/locations/mod/Factory_God.icon_labor1.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent；完成时按 Command 容量处理随从。`,statLine:`Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6
Profile: 20
Menace: 0
XP: 6`},{id:`place-task-3320562229-ch-factorygod-recruitorc`,name:`Recruit Smog-Born`,text:`免费招募一个 Smog-Born Orc；不消耗 Smog-born。可由多人同时执行。`,image:`/locations/mod/Factory_God.icon_labor_orc.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent；当地 Smog-born 达到 100。`,statLine:`Complexity: 2 / Profile: 0 / Menace: 0 / XP: 6
Profile: 20
Menace: 0
XP: 6`},{id:`place-task-3320562229-ch-factorygod-boostproductivity`,name:`Boost Productivity`,text:`扣除执行者等同 Might 的 HP，可导致死亡；Core Efficiency 增加 Might × 5。`,image:`/locations/mod/Factory_God.icon_power_overdrive2.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent，Might 至少 1，Core Efficiency 低于当前上限。`,statLine:`Complexity: 30
Profile: 0
Menace: 0
XP: 49`},{id:`place-task-3320562229-ch-factorygod-boostsmog`,name:`Boost Eldritch Smog`,text:`扣除执行者等同 Lore 的 HP，可导致死亡；Eldritch Smog 增加 Lore × 10。`,image:`/locations/mod/Factory_God.icon_power_smog.png`,meta:`Might + Lore`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent，Lore 至少 1；已有 Eldritch Smog 且强度低于 300。`,statLine:`Complexity: 30
Profile: 0
Menace: 0
XP: 49`},{id:`place-task-3320562229-ch-factorygod-createunits`,name:`Blood for Units`,text:`牺牲执行者，将当前 HP × 20 加入即时封印进度。这项数值未写入阶段累计量，会被同回合后续的神祇结算覆盖；死亡仍会发生。`,image:`/locations/mod/Factory_God.icon_power_blood2.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent，神祇尚未苏醒。`,statLine:`Complexity: 5
Profile: 0
Menace: 0
XP: 12`},{id:`place-task-3320562229-ch-factorygod-contaminate`,name:`Contaminate Waters`,text:`扣除执行者等同 Lore 的 HP，可导致死亡；Contaminated Waters 增加 Lore × 10，没有时创建。`,image:`/locations/mod/Factory_God.icon_contaminatedwater.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`玩家可控 Agent；Contaminated Waters 不存在或低于 300。`,statLine:`Complexity: 30
Profile: 0
Menace: 0
XP: 49`},{id:`place-task-3320562229-ch-factorygod-reestablishcore`,name:`Reestablish Core`,text:`用新的 <CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" /> 替换废墟，Core Efficiency 为 1。`,image:`/locations/mod/Factory_God.icon_power_coreb.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />`,limit:`玩家可控 Agent；废墟消退进度低于 50。`,statLine:`Complexity: 75
Profile: 0
Menace: 0
Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: 97
XP: 97`},{id:`place-task-3320562229-ch-factorygod-joinde`,name:`Integrate into Dark Empire`,text:`把工厂及其支持的军队划入现存 Dark Empire。`,image:`/locations/game/darkCrown.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`玩家可控 Agent；Dark Empire 已建立，目标尚未归属它。`,statLine:`Complexity: 25
Profile: 0
Menace: 0
XP: 42`},{id:`place-task-3320562229-mg-factory-smogcold`,name:`Ash Fall`,text:`引导期间，每回合使全部地表格子的临时温度偏移减少 0.18 × min(1,S) × S，世界恐慌临时增量增加 max(0.01,0.005 × S)。引导达到 150 进度后结束，完成时没有额外效果。
S 为缓存的烟雾覆盖值：各烟雾地点所属地块按 min(1,烟雾强度 × 0.05) 加总，再除以地图平面地块总数。引导开始时产生 Profile 与 Menace，另有 160 点 Channelling Danger。`,image:`/locations/mod/Factory_God.icon_power_ashfall.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" />、<CrossReference name="Mobile Factory（驻地）" href="#entry-location-settlement-mobilefactory" />`,limit:`Geomancy 至少 2，S 大于 0。`,statLine:`Complexity: 150
Profile: 50
Menace: 0
XP: 164`}]},{id:`places-3320562229-2`,title:`英雄任务`,items:[{id:`place-task-3320562229-ch-factorygod-reforgeseals`,name:`Banish Production Core`,text:`移除 <CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" /> 与 Core Efficiency。普通地点留下 <CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />；已经成为 <CrossReference name="Aberrant Factory" href="#entry-location-settlement-factory" /> 的地点直接毁灭。普通人类类城市还会清除相关采集单位、恢复原兴趣点、清除渗透，把地点 Shadow 归零并将统治者 Shadow 降至原来的 1/3。
即时封印进度扣除 max(1,⌊Core Efficiency⌋)，随后会被神祇阶段计数覆盖；失去核心及后续产出的影响保留。
Danger = 10 + 工厂设施加成 + ⌊当地 Aberrant Laborers 当前 HP/3⌋；深海城市额外加入整数人口，<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 额外加入本地与相邻 <CrossReference name="Orc Camp" href="#entry-location-set-orccamp" /> 的工业整数总量÷3并向下取整。引导另有 50 点 Channelling Danger。`,image:`/locations/game/reforgeTheSeal.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />`,limit:`执行者个人 Shadow 低于 100%、Awareness 高于 50%，不隶属 Dark Empire；当地 Eldritch Smog 低于 100 或不存在；世界恐慌至少 37.5% 或胜利进度至少 50%。`,statLine:`Complexity: 85
Profile: 1000
Menace: 0
Danger: 5
XP: 107`,positiveTags:`Cooperation`,negativeTags:`邪恶势力、Shadow、Danger`},{id:`place-task-3320562229-ch-factorygod-clearruins`,name:`Clear Ruined Core`,text:`英雄与玩家 Agent 均可执行。废墟消退进度增加 Lore × 10；达到 100 后立即清除废墟并恢复原兴趣点。
经验在完成后按变化后的 Complexity 计算，为 ⌊(6 × Complexity)^0.75⌋。`,image:`/locations/mod/Factory_God.icon_power_subsettlement1.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Ruined Core" href="#entry-location-sub-factory-productioncoredestroyed" />`,limit:`无额外限制。`,statLine:`Complexity: max(50,100−消退进度) / Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: ⌊(6 × 完成后 Complexity)^0.75⌋
Profile: 0 / Menace: 0 / Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: ⌊(6 × 完成后 Complexity)^0.75⌋
Menace: 0
Danger: ⌊max(5,(100−消退进度)×0.2)⌋ / XP: ⌊(6 × 完成后 Complexity)^0.75⌋
XP: ⌊(6 × 完成后 Complexity)^0.75⌋`,positiveTags:`Danger`,negativeTags:`无`}]},{id:`places-3320562229-4`,title:`自主单位任务`,items:[{id:`place-task-3320562229-ch-factory-stealpops`,name:`Reposession Protocol`,text:`把等同于当前 HP 的人口转移到 Aberrant Repoman 的故乡 <CrossReference name="Production Core" href="#entry-location-sub-factory-productioncore" />；当地 Shadow 越高，完成越快。`,image:`/locations/game/unit_luredCrowd.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Aberrant Repoman；当地 Shadow >0%，没有 Core Efficiency。`,statLine:`Complexity: min(25, 向下取整(500 / 当地 Shadow))
Profile: 50
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`}]},{id:`places-3320562229-unplaced`,title:`未找到正常生成路径的类型`,items:[{id:`location-sub-factorygod`,name:`Aberrant Metal 设施基类`,text:`工厂设施共用的内部基类。
未找到直接创建此基类的正常路径。`,meta:`未找到正常生成路径`}]}]},{id:`places-3591348120`,title:`MEKHANE The Broken God`,description:``,sections:[{id:`places-3591348120-interest`,title:`兴趣点`,items:[{id:`location-sub-mek-congregation`,name:`Mekhanite Congregation`,text:`组件仓库与基础组装场所。具有独立 Profile 与最低 Profile；组装、调查和隐藏行动会改变它们。可专业化为 <CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、Forge 或 <CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />。

出现方式
<CrossReference name="Congregate" href="?god=mekhane#entry-p-mek-congregate" meta="神力" text="建立 Congregation，并产生一名普通 Acolyte。第一次同时建立 Church of the Broken God、生成 The Supplicant，将 Agent 上限从 0 提高到 2；首次免费，此后每次消耗 1。
当地可渗透设施全部完成渗透，普通 Temple 被移除，已有 Minor Sect 被移除。Congregation 数量上限为 2 + 已解封数，并受相应教义增加。" image="./mekhane/icon_subcongregation.png" /> 神力或 Build Congregation 建立。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-divertattention" />、<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Assemble Mechanism" href="#entry-place-task-3591348120-ch-assemblemechanism" />、<CrossReference name="Assemble Relic" href="#entry-place-task-3591348120-ch-assemblerelic" />、<CrossReference name="Assemble Divine Machine" href="#entry-place-task-3591348120-ch-assembledivinemachine" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />、<CrossReference name="Recruit Zealot Minion" href="#entry-place-task-3591348120-ch-mek-recruitzealot" />、<CrossReference name="Mekhanite Smithing" href="#entry-place-task-3591348120-ch-mek-smithboostmodifier" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Arm Congregation" href="#entry-place-task-3591348120-ch-mek-smithdanger" />

英雄任务：
<CrossReference name="Expose Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-exposecongregation" />、<CrossReference name="Investigate Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-investigatemekhanites" />、<CrossReference name="Steal Relics" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation" />、<CrossReference name="Destroy Relics" href="#entry-place-task-3591348120-ch-mek-hero-destroyrelic" />、<CrossReference name="Destroy Components" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents" />、<CrossReference name="Convert" href="#entry-place-task-3591348120-ch-mek-hero-convert" />`,image:`/locations/mod/God_MEKHANE.icon_subcongregation.png`,baseGame:!1},{id:`location-sub-mek-congregationabyssal`,name:`Abyssal Congregation`,text:`Abyssal Ore 达到最高 Elder Influence 后在 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 中建立。用于保存组件，不累积 Profile。

出现方式
Abyssal Ore 最高 Elder Influence 下，在合格 <CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" /> 中生成。

可出现地点
<CrossReference name="Abyssal City" href="#entry-location-set-deeponeabyssalcity" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />`,image:`/locations/mod/God_MEKHANE.icon_subcongregationAbyssal.png`,baseGame:!1},{id:`location-sub-mek-congregationorc`,name:`Orcish Congregation`,text:`<CrossReference name="Orcish Tools" href="#entry-place-task-3591348120-ch-industrytopiece" /> 达到最高 Elder Influence 后，在已渗透 Orc <CrossReference name="Fortress" href="#entry-location-sub-fort" /> 中建立；库存 Relics 强化当地防御与军队。

出现方式
<CrossReference name="Orcish Tools" href="#entry-place-task-3591348120-ch-industrytopiece" /> 最高 Elder Influence 下，在合格、已渗透的 Orc <CrossReference name="Fortress" href="#entry-location-sub-fort" /> 中生成。

可出现地点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-divertattention" />、<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Assemble Mechanism" href="#entry-place-task-3591348120-ch-assemblemechanism" />、<CrossReference name="Assemble Relic" href="#entry-place-task-3591348120-ch-assemblerelic" />、<CrossReference name="Assemble Divine Machine" href="#entry-place-task-3591348120-ch-assembledivinemachine" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />、<CrossReference name="Recruit Zealot Minion" href="#entry-place-task-3591348120-ch-mek-recruitzealot" />、<CrossReference name="Mekhanite Smithing" href="#entry-place-task-3591348120-ch-mek-smithboostmodifier" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Arm Congregation" href="#entry-place-task-3591348120-ch-mek-smithdanger" />

英雄任务：
<CrossReference name="Expose Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-exposecongregation" />、<CrossReference name="Investigate Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-investigatemekhanites" />、<CrossReference name="Steal Relics" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation" />、<CrossReference name="Destroy Relics" href="#entry-place-task-3591348120-ch-mek-hero-destroyrelic" />、<CrossReference name="Destroy Components" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents" />、<CrossReference name="Convert" href="#entry-place-task-3591348120-ch-mek-hero-convert" />`,image:`/locations/mod/God_MEKHANE.icon_subcongregationOrc.png`,baseGame:!1},{id:`location-sub-mek-congregationtower`,name:`Citadel`,text:`由 Towers of Change 建立，保留库存与 Profile。Tower of Change 培育 Metalsmith，并向普通 Acolyte 分发 Divine Schema。

出现方式
<CrossReference name="Towers of Change" href="?god=mekhane#entry-p-mek-towerofchange" meta="神力" text="把 Congregation 改为 Citadel，保留库存、Profile 与最低 Profile。以此为故乡的普通 Acolyte 转为 Metalsmith，改为提供教派增益；Citadel 支持向普通 Acolyte 分发 Divine Schema。
尚未解锁 The Clockworks 时，使其解锁回合提前 10。" image="./mekhane/icon_tower.png" /> 替换已有 <CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-divertattention" />、<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Assemble Mechanism" href="#entry-place-task-3591348120-ch-assemblemechanism" />、<CrossReference name="Assemble Relic" href="#entry-place-task-3591348120-ch-assemblerelic" />、<CrossReference name="Assemble Divine Machine" href="#entry-place-task-3591348120-ch-assembledivinemachine" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />、<CrossReference name="Recruit Zealot Minion" href="#entry-place-task-3591348120-ch-mek-recruitzealot" />、<CrossReference name="Mekhanite Smithing" href="#entry-place-task-3591348120-ch-mek-smithboostmodifier" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Arm Congregation" href="#entry-place-task-3591348120-ch-mek-smithdanger" />

英雄任务：
<CrossReference name="Expose Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-exposecongregation" />、<CrossReference name="Investigate Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-investigatemekhanites" />、<CrossReference name="Steal Relics" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation" />、<CrossReference name="Destroy Relics" href="#entry-place-task-3591348120-ch-mek-hero-destroyrelic" />、<CrossReference name="Destroy Components" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents" />、<CrossReference name="Convert" href="#entry-place-task-3591348120-ch-mek-hero-convert" />`,image:`/locations/mod/God_MEKHANE.icon_tower.png`,baseGame:!1},{id:`location-sub-mek-exiles`,name:`Exile Community`,text:`由 Fragmented Following 建立。Exile 在此实验，制造 Unorthodox Piece 和具有自主破坏能力的实验体。

出现方式
<CrossReference name="Fragmented Following" href="?god=mekhane#entry-p-mek-exiles" meta="神力" text="建立 Mekhanite Exiles，移除当地 Minor Sect 及普通 Temple。Exile 通过实验制造灾害并干扰其他地点。" image="./mekhane/icon_subexiles.png" /> 在合格地点建立。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

宗教任务：
<CrossReference name="Unorthodox Experiment" href="#entry-place-task-3591348120-ch-mek-exileexperiment" />

挑战：
<CrossReference name="Experiment with Cogworks" href="#entry-place-task-3591348120-ch-mek-exile-assembledevastation" />、<CrossReference name="Experiment with the Arcane" href="#entry-place-task-3591348120-ch-mek-exile-assemblemadness" />、<CrossReference name="Experiment with Shadow" href="#entry-place-task-3591348120-ch-mek-exile-assembleshadow" />

英雄任务：
<CrossReference name="Investigate Exiles" href="#entry-place-task-3591348120-ch-mek-hero-investigateexile" />、<CrossReference name="Raid Exiles" href="#entry-place-task-3591348120-ch-mek-hero-raidexile" />`,image:`/locations/mod/God_MEKHANE.icon_subexiles.png`,baseGame:!1},{id:`location-sub-mek-forge`,name:`Orthodox Forge`,text:`由 Standardization 建立的 Cogwork Orthodoxy 制造中心，开放 Clockwork Mechanism、Cogwork Relic 与 Automatons，并具有 Production。

出现方式
<CrossReference name="Standardization" href="?god=mekhane#entry-p-mek-spreadorthodoxy" meta="神力" text="把 Congregation 改为 Forge，保留库存、Profile 与最低 Profile，以生产 Cogwork Components 与 Automatons 为主。相关 Acolyte 转为 Orthodox Legate。
首次建立 Cogwork Orthodoxy；缺少有效 Council of Patriarchs 时在目标创建 Council。尚未解锁 Mechanical Choir 时，使其解锁回合提前 10。" image="./mekhane/icon_subforge.png" /> 替换已有 Congregation。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-divertattention" />、<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Assemble Divine Machine" href="#entry-place-task-3591348120-ch-assembledivinemachine" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />、<CrossReference name="Recruit Zealot Minion" href="#entry-place-task-3591348120-ch-mek-recruitzealot" />、<CrossReference name="Mekhanite Smithing" href="#entry-place-task-3591348120-ch-mek-smithboostmodifier" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Arm Congregation" href="#entry-place-task-3591348120-ch-mek-smithdanger" />、<CrossReference name="Assemble Cogwork Mechanism" href="#entry-place-task-3591348120-ch-assemblecogworkmechanism" />、<CrossReference name="Gild Basic Mechanism" href="#entry-place-task-3591348120-ch-assemblecogworkmechanismconversion" />、<CrossReference name="Assemble Cogwork Relic" href="#entry-place-task-3591348120-ch-assemblecogworkrelic" />、<CrossReference name="Assemble Gatherer" href="#entry-place-task-3591348120-ch-mek-automaton-basic" />、<CrossReference name="Assemble Sentinel" href="#entry-place-task-3591348120-ch-mek-automaton-sentinel" />、<CrossReference name="Assemble Speaker" href="#entry-place-task-3591348120-ch-mek-automaton-speaker" />、<CrossReference name="Centralized Knowledge" href="#entry-place-task-3591348120-ch-mek-councilschema" />

英雄任务：
<CrossReference name="Expose Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-exposecongregation" />、<CrossReference name="Investigate Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-investigatemekhanites" />、<CrossReference name="Steal Relics" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation" />、<CrossReference name="Destroy Relics" href="#entry-place-task-3591348120-ch-mek-hero-destroyrelic" />、<CrossReference name="Destroy Components" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents" />、<CrossReference name="Convert" href="#entry-place-task-3591348120-ch-mek-hero-convert" />

共同行动：
<CrossReference name="Relocate Council" href="#entry-place-task-3591348120-ch-mek-councilhide" />`,image:`/locations/mod/God_MEKHANE.icon_subforge.png`,baseGame:!1},{id:`location-sub-mek-mekhane`,name:`MEKHANE’s Body`,text:`MEKHANE 的建造地点，只接受 Divine Machines 推进重建。兴趣点自身不提供挑战；交付由携带组件的人物仪式处理。

出现方式
<CrossReference name="Begin Construction" href="?god=mekhane#entry-p-mek-body" meta="神力" text="建立 MEKHANE's Body 与对应设施，开始重组神体。此后英雄可以直接损伤神体，神体被摧毁会导致特殊失败。" image="./mekhane/icon_powermekhane.png" /> 放在合格地点；空地先创建野外兴趣点载体并清除默认遗迹。

可出现地点
<CrossReference name="野外兴趣点地点" href="#entry-location-set-minorother" />、<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/God_MEKHANE.icon_mekhane.png`,baseGame:!1},{id:`location-sub-mek-relay`,name:`Maxwellist Relay`,text:`由 Apotheosis 建立，开放 Arcane Components 与 Constructs，并通过 Signal 支援连接网络。

出现方式
<CrossReference name="Apotheosis" href="?god=mekhane#entry-p-mek-spreadmaxwellism" meta="神力" text="把 Congregation 改为 Maxwellist Relay，保留库存、Profile 与最低 Profile，以 Arcane Components、Constructs 和 Maxwellist 法术为主。相关 Acolyte 转为 Living Saint。
首次建立 Maxwellism，并创建主 Maxwellist Noosphere。" image="./mekhane/icon_subrelay.png" /> 替换已有 Congregation。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

挑战：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-divertattention" />、<CrossReference name="Store Specific Components" href="#entry-place-task-3591348120-ch-storecomponent" />、<CrossReference name="Store All Components" href="#entry-place-task-3591348120-ch-storecomponentsall" />、<CrossReference name="Take Mekhanite Component" href="#entry-place-task-3591348120-ch-takecomponent" />、<CrossReference name="Assemble Divine Machine" href="#entry-place-task-3591348120-ch-assembledivinemachine" />、<CrossReference name="Mekhanite Prayer" href="#entry-place-task-3591348120-ch-mek-prayer" />、<CrossReference name="Recruit Zealot Minion" href="#entry-place-task-3591348120-ch-mek-recruitzealot" />、<CrossReference name="Mekhanite Smithing" href="#entry-place-task-3591348120-ch-mek-smithboostmodifier" />、<CrossReference name="Mechanical Hymns" href="#entry-place-task-3591348120-ch-mek-smithboostelder" />、<CrossReference name="Arm Congregation" href="#entry-place-task-3591348120-ch-mek-smithdanger" />、<CrossReference name="Assemble Arcane Mechanism" href="#entry-place-task-3591348120-ch-assemblearcanemechanism" />、<CrossReference name="Defragment Basic Mechanism" href="#entry-place-task-3591348120-ch-assemblearcanemechanismconversion" />、<CrossReference name="Assemble Arcane Relic" href="#entry-place-task-3591348120-ch-assemblearcanerelic" />、<CrossReference name="Calculate Secret" href="#entry-place-task-3591348120-ch-assemblearcanesecret" />、<CrossReference name="Assemble Infiltrator" href="#entry-place-task-3591348120-ch-mek-maxwellist-infiltrator" />、<CrossReference name="Assemble Intelligence" href="#entry-place-task-3591348120-ch-mek-maxwellist-intelligence" />

英雄任务：
<CrossReference name="Expose Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-exposecongregation" />、<CrossReference name="Investigate Mekhanites" href="#entry-place-task-3591348120-ch-mek-hero-investigatemekhanites" />、<CrossReference name="Steal Relics" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation" />、<CrossReference name="Destroy Relics" href="#entry-place-task-3591348120-ch-mek-hero-destroyrelic" />、<CrossReference name="Destroy Components" href="#entry-place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents" />、<CrossReference name="Convert" href="#entry-place-task-3591348120-ch-mek-hero-convert" />

共同行动：
<CrossReference name="Transfer Arcane Relics" href="#entry-place-task-3591348120-ch-transferarcanerelics" />`,image:`/locations/mod/God_MEKHANE.icon_subrelay.png`,baseGame:!1},{id:`location-sub-mek-sarkicfleshthathates`,name:`Flesh That Hates`,text:`<CrossReference name="Unleash the Red Death" href="#entry-place-task-3591348120-ch-mek-sarkicreddeath" /> 建立的活体设施，产生 Red Death，并能孕育 Raging Flesh。

出现方式
<CrossReference name="Unleash the Red Death" href="#entry-place-task-3591348120-ch-mek-sarkicreddeath" /> 建立，后可由 Raging Flesh 在合格聚居地传播。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,image:`/locations/mod/God_MEKHANE.icon_sarkic_fleshthathates.png`,baseGame:!1},{id:`location-sub-mek-sarkictemple`,name:`Sarkic Temple`,text:`Sarkic 自主人物的活动中心，提供晋升、研究与扩张任务。具有独立 Profile；可通过调查与曝光再进行摧毁。

出现方式
Sarkic 初始据点、建殿行动、宗教扩张与 Ritual Power 扩展流程均可建立。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Investigate Sarkics" href="#entry-place-task-3591348120-ch-mek-sarkicheroinvestigate" />

挑战：
<CrossReference name="Investigate Sarkics" href="#entry-place-task-3591348120-ch-mek-sarkicagentinvestigate" />、<CrossReference name="Expose Sarkics" href="#entry-place-task-3591348120-ch-mek-sarkicagentexpose" />、<CrossReference name="Destroy Sarkic Temple" href="#entry-place-task-3591348120-ch-mek-sarkicdestroytemple" />

宗教任务：
<CrossReference name="Divert Attention" href="#entry-place-task-3591348120-ch-mek-sarkichidetemple" />、<CrossReference name="Imbue Knowledge" href="#entry-place-task-3591348120-ch-mek-sarkicconvertsecrets" />、<CrossReference name="Karcist Ascension" href="#entry-place-task-3591348120-ch-mek-sarkickarcist" />、<CrossReference name="Mutate" href="#entry-place-task-3591348120-ch-mek-sarkicmutate" />、<CrossReference name="Sarkic Initiation" href="#entry-place-task-3591348120-ch-mek-sarkicrecruit" />、<CrossReference name="Recruit Sarkic Initiate Minion" href="#entry-place-task-3591348120-ch-mek-sarkic-recruitminion" />、<CrossReference name="Convert Ruler" href="#entry-place-task-3591348120-ch-mek-sarkicpreference" />、<CrossReference name="Karcist's Sermon" href="#entry-place-task-3591348120-ch-mek-sarkicsermon" />、<CrossReference name="Unleash the Red Death" href="#entry-place-task-3591348120-ch-mek-sarkicreddeath" />、<CrossReference name="Root Out Infiltration" href="#entry-place-task-3591348120-ch-mek-sarkic-security" />、<CrossReference name="Form Deathless Empire" href="#entry-place-task-3591348120-ch-mek-sarkicempire" />、<CrossReference name="Grand Karcist Ascension" href="#entry-place-task-3591348120-ch-mek-sarkicgrandkarcist" />`,image:`/locations/mod/God_MEKHANE.icon_sarkicpresence.png`,baseGame:!1},{id:`location-sub-mek-vault`,name:`Containment Vault`,text:`英雄把夺取的 Relics 送来收容，推动 Vault Research；Foundation 启用后可发展为重新封印 MEKHANE 的威胁。

出现方式
由知情统治者、携带 Relic 的英雄或 MEKHANE 的对应开局选项建立；主要位于合格国家的首都。

可出现地点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />。
改建或覆灭后是否保留，还受对应流程限制。

英雄任务：
<CrossReference name="Contain Relics" href="#entry-place-task-3591348120-ch-mek-vault-hero-storerelics" />、<CrossReference name="Study Enemy" href="#entry-place-task-3591348120-ch-mek-vault-hero-learn" />

挑战：
<CrossReference name="Raid Vault" href="#entry-place-task-3591348120-ch-mek-vault-raid" />、<CrossReference name="Infiltrate" href="#entry-place-task-base-ch-infiltrate" />

共同行动：
<CrossReference name="Recover Arcane Relics" href="#entry-place-task-3591348120-ch-mek-vault-recoverarcanerelics" />、<CrossReference name="Recover Cogwork Relics" href="#entry-place-task-3591348120-ch-mek-vault-recovercogworkrelics" />、<CrossReference name="Recover Relics" href="#entry-place-task-3591348120-ch-mek-vault-recoverrelics" />`,image:`/locations/mod/God_MEKHANE.icon_vault.png`,baseGame:!1}]},{id:`places-3591348120-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-3591348120-0`,name:`Ancient Ruins 的 MEKHANE 扩展`,text:`使用 MEKHANE 时提供资源发掘；启用对应 Sarkic 开局选项时另提供 Sarkic Tomb 入口。

对应地点 / 兴趣点
<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />

宗教任务：
<CrossReference name="Unearth Klavigar's Tomb" href="#entry-place-task-3591348120-ch-mek-sarkictomb" />

挑战：
<CrossReference name="Reveal Fragments" href="#entry-place-task-3591348120-ch-mek-createresourceunearth" />`,baseGame:!1},{id:`place-hook-3591348120-1`,name:`Market 的 MEKHANE 商品`,text:`使用 MEKHANE 时，在 <CrossReference name="Market" href="#entry-location-sub-market" /> 或名称为 Grand Bazaar 的兴趣点所在地点加入。

对应地点 / 兴趣点
<CrossReference name="Market" href="#entry-location-sub-market" />

挑战：
<CrossReference name="Buy Pieces" href="#entry-place-task-3591348120-ch-buypieces" />、<CrossReference name="Buy Mechanisms" href="#entry-place-task-3591348120-ch-buymechanisms" />、<CrossReference name="Buy Relic" href="#entry-place-task-3591348120-ch-buyrelic" />`,baseGame:!1},{id:`place-hook-3591348120-2`,name:`聚居地中的 MEKHANE 行动`,text:`使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。

英雄任务：
<CrossReference name="Raise Suspicion" href="#entry-place-task-3591348120-ch-mek-hero-raisesuspicion" />、<CrossReference name="Combat Global Rotbolt Spread" href="#entry-place-task-3591348120-ch-mek-hero-shrinkrotbolt" />

挑战：
<CrossReference name="Establish Connection" href="#entry-place-task-3591348120-ch-mek-maxwellist-connection" />、<CrossReference name="Establish Congregation" href="#entry-place-task-3591348120-ch-mek-buildcongregation" />、<CrossReference name="Holy Transmission" href="#entry-place-task-3591348120-ch-mek-increasemekpreference" />、<CrossReference name="Impart Mekhanite Knowledge" href="#entry-place-task-3591348120-ch-mek-rulerschema" />、<CrossReference name="Mechanical Salvage" href="#entry-place-task-3591348120-ch-ruintopiece" />、<CrossReference name="Blood and Iron" href="#entry-place-task-3591348120-ch-deathtopiece" />、<CrossReference name="Impossible Geometry" href="#entry-place-task-3591348120-ch-madnesstopiece" />、<CrossReference name="Abyssal Ores" href="#entry-place-task-3591348120-ch-deeponestopiececult" />

自主单位任务：
<CrossReference name="Maxwellist Infiltration" href="#entry-place-task-3591348120-ch-mek-infiltrate" />、<CrossReference name="Maxwellist Disinformation" href="#entry-place-task-3591348120-ch-mek-infiltrateawareness" />、<CrossReference name="Harvest Information" href="#entry-place-task-3591348120-ch-locitopiece" />`,baseGame:!1},{id:`place-hook-3591348120-3`,name:`人类聚居地的 Mekhanite 宣讲`,text:`使用 MEKHANE 时加入 Speaker 的宣讲行动。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

宗教任务：
<CrossReference name="Speaker's Sermon" href="#entry-place-task-3591348120-ch-mek-increasemekpreferencespeaker" />`,baseGame:!1},{id:`place-hook-3591348120-4`,name:`城市的 Containment Vault 建造`,text:`使用 MEKHANE 且启用 <CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" /> 挑战选项时加入；执行者须符合英雄建造条件。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />

英雄任务：
<CrossReference name="Create Containment Vault" href="#entry-place-task-3591348120-ch-mek-vault-hero-create" />`,baseGame:!1},{id:`place-hook-3591348120-5`,name:`Orc Camp 的 MEKHANE 转化`,text:`使用 MEKHANE，具有对应 Orc 教义，且营地有 Orcish Industry 时加入。

对应地点 / 兴趣点
<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />

挑战：
<CrossReference name="Orcish Tools" href="#entry-place-task-3591348120-ch-industrytopiece" />`,baseGame:!1}]},{id:`places-3591348120-0`,title:`挑战`,items:[{id:`place-task-3591348120-ch-divertattention`,name:`Divert Attention`,text:`Congregation Profile −20。Underground Networks 每级额外减少 10；−3 时另获得 1 Divine Schema。`,image:`/locations/mod/God_MEKHANE.icon_powerhiddenworks.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`执行者是 Mekhanite、Speaker，或喜好 Mekhanites。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`},{id:`place-task-3591348120-ch-storecomponent`,name:`Store Specific Components`,text:`选择一种组件存入当地库存。`,image:`/locations/mod/God_MEKHANE.iconstore1.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />、<CrossReference name="Abyssal Congregation" href="#entry-location-sub-mek-congregationabyssal" /> 所在地点。`,limit:`携带组件。`,statLine:`Complexity: 1
Profile: 100
Menace: 0
XP: 3`},{id:`place-task-3591348120-ch-storecomponentsall`,name:`Store All Components`,text:`将携带的所有组件存入当地库存。`,image:`/locations/mod/God_MEKHANE.iconstore1.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />、<CrossReference name="Abyssal Congregation" href="#entry-location-sub-mek-congregationabyssal" /> 所在地点。`,limit:`携带至少 1 件组件。`,statLine:`Complexity: 1
Profile: 100；Priority 地点为 500
Menace: 0
XP: 3`},{id:`place-task-3591348120-ch-takecomponent`,name:`Take Mekhanite Component`,text:`选择库存中的组件领取，数量受人物物品栏空位限制。`,image:`/locations/mod/God_MEKHANE.iconstore2.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />、<CrossReference name="Abyssal Congregation" href="#entry-location-sub-mek-congregationabyssal" /> 所在地点。`,limit:`物品栏有空位。`,statLine:`Complexity: 1
Profile: 100
Menace: 0
XP: 3`},{id:`place-task-3591348120-ch-assemblemechanism`,name:`Assemble Mechanism`,text:`3 Piece 合成 1 Mechanism；Congregation Profile +2。`,image:`/locations/mod/God_MEKHANE.icon_itembasicmechanism.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-assemblerelic`,name:`Assemble Relic`,text:`3 Mechanism 合成 1 Relic；Congregation Profile +10，并获得 Divine Schema。`,image:`/locations/mod/God_MEKHANE.icon_itembasicrelic.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 30
Profile: 100
Menace: 5
XP: 49`},{id:`place-task-3591348120-ch-assembledivinemachine`,name:`Assemble Divine Machine`,text:`各消耗 1 Relic、Cogwork Relic、Arcane Relic，组装 1 Divine Machine；Congregation Profile +15。优先使用携带的材料，缺少部分可从库存补足。`,image:`/locations/mod/God_MEKHANE.icon_divinemachine.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`三类材料齐备。`,statLine:`Complexity: 50
Profile: 8
Menace: 5
XP: 72`},{id:`place-task-3591348120-ch-mek-prayer`,name:`Mekhanite Prayer`,text:`消耗 1 Divine Schema，教团 Elder Influence +10。`,image:`/locations/game/basicPrayer.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />、<CrossReference name="Abyssal Congregation" href="#entry-location-sub-mek-congregationabyssal" /> 所在地点。`,limit:`Mekhanite，持有 Divine Schema。`,statLine:`Complexity: 20
Profile: 50
Menace: 5
XP: 36`},{id:`place-task-3591348120-ch-mek-recruitzealot`,name:`Recruit Zealot Minion`,text:`消耗 Divine Schema，招募 Mekhanite Zealot 随从。Militant Following 调整费用与随从属性。`,image:`/locations/mod/God_MEKHANE.icon_acolyte_zealot.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`拥有足够 Divine Schema 与 Command 空间。`,statLine:`Complexity: 3
Profile: 90
Menace: 0
XP: 8`},{id:`place-task-3591348120-ch-mek-smithboostmodifier`,name:`Mekhanite Smithing`,text:`消耗 3 Divine Schema，创建 Mekhanite Smithing；Metalsmith 免费。`,image:`/locations/mod/God_MEKHANE.icon_brokenChurchSmithing.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`我方 Agent 或 Metalsmith。`,statLine:`Complexity: 30
Profile: 90
Menace: 0
XP: 49`},{id:`place-task-3591348120-ch-mek-smithboostelder`,name:`Mechanical Hymns`,text:`消耗 2 Divine Schema，创建 Mechanical Hymns；Metalsmith 免费。`,image:`/locations/mod/God_MEKHANE.icon_brokenchurchshadow.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" />、<CrossReference name="Abyssal Congregation" href="#entry-location-sub-mek-congregationabyssal" /> 所在地点。`,limit:`我方 Agent 或 Metalsmith。`,statLine:`Complexity: 15
Profile: 90
Menace: 0
XP: 29`},{id:`place-task-3591348120-ch-mek-smithdanger`,name:`Arm Congregation`,text:`消耗 3 Divine Schema，创建 Armed Congregation；Metalsmith 免费。`,image:`/locations/mod/God_MEKHANE.icon_brokenChurchDanger.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`我方 Agent 或 Metalsmith。`,statLine:`Complexity: 30
Profile: 90
Menace: 0
XP: 49`},{id:`place-task-3591348120-ch-mek-exile-assembledevastation`,name:`Experiment with Cogworks`,text:`消耗 3 Unorthodox Piece，制造 Rampaging Experiment；设施 Profile +10。`,image:`/locations/mod/God_MEKHANE.icon_exileExperiment.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`我方 Agent 或 Mekhanite Exile；携带材料。`,statLine:`Complexity: 25
Profile: 100
Menace: 0
XP: 42`},{id:`place-task-3591348120-ch-mek-exile-assemblemadness`,name:`Experiment with the Arcane`,text:`消耗 3 Unorthodox Piece，制造 Maddening Machine；设施 Profile +10。`,image:`/locations/mod/God_MEKHANE.icon_exileExperiment3.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`我方 Agent 或 Mekhanite Exile；携带材料。`,statLine:`Complexity: 25
Profile: 100
Menace: 0
XP: 42`},{id:`place-task-3591348120-ch-mek-exile-assembleshadow`,name:`Experiment with Shadow`,text:`消耗 3 Unorthodox Piece，制造 False Image；设施 Profile +10。`,image:`/locations/mod/God_MEKHANE.icon_exileExperiment2.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`我方 Agent 或 Mekhanite Exile；携带材料。`,statLine:`Complexity: 25
Profile: 100
Menace: 0
XP: 42`},{id:`place-task-3591348120-ch-assemblecogworkmechanism`,name:`Assemble Cogwork Mechanism`,text:`3 Piece 合成 1 Clockwork Mechanism；Congregation Profile +4。Council of Patriarchs 可降低材料费用。`,image:`/locations/mod/God_MEKHANE.icon_itemcogworkmechanism.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 20
Profile: 100
Menace: 0
XP: 36`},{id:`place-task-3591348120-ch-assemblecogworkmechanismconversion`,name:`Gild Basic Mechanism`,text:`将 1 Mechanism 转为 1 Clockwork Mechanism，另支付 Gold；Congregation Profile +3。`,image:`/locations/mod/God_MEKHANE.icon_itemcogworkmechanism.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`材料与 Gold 足够。`,statLine:`Complexity: 20
Profile: 100
Menace: 0
XP: 36`},{id:`place-task-3591348120-ch-assemblecogworkrelic`,name:`Assemble Cogwork Relic`,text:`3 Clockwork Mechanism 合成 1 Cogwork Relic；Congregation Profile +10，并获得 Divine Schema。Council of Patriarchs 可降低材料费用。`,image:`/locations/mod/God_MEKHANE.icon_itemcogworkrelic.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 30
Profile: 100
Menace: 0
XP: 49`},{id:`place-task-3591348120-ch-mek-automaton-basic`,name:`Assemble Gatherer`,text:`组装 Gatherer。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Gatherer 数)。`,image:`/locations/mod/God_MEKHANE.icon_automaton.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`我方 Agent 或 Orthodox Legate；材料足够。`,statLine:`Complexity: 30；Automatons 生产达到 100 时为 15
Profile: 90
Menace: 5
XP: 49；生产加成为 29`},{id:`place-task-3591348120-ch-mek-automaton-sentinel`,name:`Assemble Sentinel`,text:`组装 Sentinel。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Sentinel 数)。`,image:`/locations/mod/God_MEKHANE.icon_automaton_sentry.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`我方 Agent 或 Orthodox Legate；材料足够。`,statLine:`Complexity: 30；Automatons 生产达到 100 时为 15
Profile: 90
Menace: 5
XP: 49；生产加成为 29`},{id:`place-task-3591348120-ch-mek-automaton-speaker`,name:`Assemble Speaker`,text:`组装 Speaker。消耗 Clockwork Mechanism 数量为 max(1, 3 − Council of Patriarchs 强度 /100 的整数部分 + 现存 Speaker 数)。`,image:`/locations/mod/God_MEKHANE.icon_automaton_speaker.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`我方 Agent 或 Orthodox Legate；材料足够。`,statLine:`Complexity: 30；Automatons 生产达到 100 时为 15
Profile: 90
Menace: 5
XP: 49；生产加成为 29`},{id:`place-task-3591348120-ch-mek-councilschema`,name:`Centralized Knowledge`,text:`花费 Gold 获得 1 Divine Schema。`,image:`/locations/mod/God_MEKHANE.icon_orthodoxschema.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`玩家人物，携带足够 Gold。`,statLine:`Complexity: 5
Profile: 40
Menace: 5
XP: 12`},{id:`place-task-3591348120-ch-assemblearcanemechanism`,name:`Assemble Arcane Mechanism`,text:`3 Piece 合成 1 Arcane Mechanism；Congregation Profile +4。Noosphere 可降低材料费用。`,image:`/locations/mod/God_MEKHANE.icon_itemarcanemechanism.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 20
Profile: 100
Menace: 0
XP: 36`},{id:`place-task-3591348120-ch-assemblearcanemechanismconversion`,name:`Defragment Basic Mechanism`,text:`1 Mechanism 转为 1 Arcane Mechanism；Congregation Profile +3。`,image:`/locations/mod/God_MEKHANE.icon_itemarcanemechanism.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 20
Profile: 100
Menace: 0
XP: 36`},{id:`place-task-3591348120-ch-assemblearcanerelic`,name:`Assemble Arcane Relic`,text:`3 Arcane Mechanism 合成 1 Arcane Relic；Congregation Profile +10，并获得 Divine Schema。Noosphere 可降低材料费用。`,image:`/locations/mod/God_MEKHANE.icon_itemarcanerelic.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`材料足够。`,statLine:`Complexity: 30
Profile: 100
Menace: 0
XP: 49`},{id:`place-task-3591348120-ch-assemblearcanesecret`,name:`Calculate Secret`,text:`消耗 3 Divine Schema，获得 1 Arcane Knowledge。`,image:`/locations/mod/God_MEKHANE.iconmekspell2.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`持有足够 Divine Schema。`,statLine:`Complexity: 40
Profile: 0
Menace: 0
XP: 60`},{id:`place-task-3591348120-ch-mek-maxwellist-infiltrator`,name:`Assemble Infiltrator`,text:`组装 Infiltrator。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Infiltrator 数)。`,image:`/locations/mod/God_MEKHANE.icon_construct_infiltrator.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`我方 Agent 或 Living Saint；材料足够。`,statLine:`Complexity: 30
Profile: 200
Menace: 5
XP: 49`},{id:`place-task-3591348120-ch-mek-maxwellist-intelligence`,name:`Assemble Intelligence`,text:`组装自主 Intelligence。消耗 Arcane Mechanism 数量为 max(1, 3 − Noosphere 人口 /200 的整数部分 + 现存 Intelligence 数)。`,image:`/locations/mod/God_MEKHANE.icon_construct_intelligence.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`我方 Agent 或 Living Saint；材料足够。`,statLine:`Complexity: 40
Profile: 20
Menace: 0
XP: 60`},{id:`place-task-3591348120-ch-mek-sarkicagentinvestigate`,name:`Investigate Sarkics`,text:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" /> Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。`,image:`/locations/game/clues.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`我方 Agent。`,statLine:`Complexity: 10 + 当地 Security ×5
Profile: 0
Menace: 0
XP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋`},{id:`place-task-3591348120-ch-mek-sarkicagentexpose`,name:`Expose Sarkics`,text:`<CrossReference name="Temple" href="#entry-location-sub-temple" /> Profile +30。`,image:`/locations/mod/God_MEKHANE.icon_sarkicspell2.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`我方 Agent；Profile 低于 100。`,statLine:`Complexity: 40
Profile: 90 + 已解封数 ×20 + Sarkic Temple Profile
Menace: 0
XP: 60`},{id:`place-task-3591348120-ch-mek-sarkicdestroytemple`,name:`Destroy Sarkic Temple`,text:`摧毁 <CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />。`,image:`/locations/game/war.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Killing Blows 生效；Mekhanite，排除 Automaton。`,statLine:`Complexity: 10 + 当地 Security ×5
Profile: 90
Menace: 0
Danger: 30
XP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋`},{id:`place-task-3591348120-ch-mek-vault-raid`,name:`Raid Vault`,text:`夺回库存中的 Relics，并将 Vault Research 重置为 1。`,image:`/locations/game/raid.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`Mekhanite，排除 Automaton；物品栏有空位。`,statLine:`Complexity: 10 + 当地 Security ×5
Profile: 90
Menace: 0
XP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋`},{id:`place-task-3591348120-ch-mek-createresourceunearth`,name:`Reveal Fragments`,text:`消耗 10 Divine Schema，建立 Unearthed Fragments。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth.png`,meta:`Lore + Command`,baseGame:!1,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`我方 Agent；当地没有碎片。`,statLine:`Complexity: 10
Profile: 90
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-buypieces`,name:`Buy Pieces`,text:`支付 15 Gold，最多购买 3 Piece。`,image:`/locations/mod/God_MEKHANE.icon_itembasicpiece.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Market" href="#entry-location-sub-market" />`,limit:`Mekhanite，物品栏有空位；Black <CrossReference name="Market" href="#entry-location-sub-market" /> Connections ≤−1。`,statLine:`Complexity: 3
Profile: 500
Menace: 0
XP: 8`},{id:`place-task-3591348120-ch-buymechanisms`,name:`Buy Mechanisms`,text:`支付 30 Gold，最多购买 3 Mechanism。`,image:`/locations/mod/God_MEKHANE.icon_itembasicmechanism.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Market" href="#entry-location-sub-market" />`,limit:`Mekhanite，物品栏有空位；Black <CrossReference name="Market" href="#entry-location-sub-market" /> Connections ≤−2。`,statLine:`Complexity: 3
Profile: 500
Menace: 0
XP: 8`},{id:`place-task-3591348120-ch-buyrelic`,name:`Buy Relic`,text:`支付 90 Gold，购买 1 Relic。`,image:`/locations/mod/God_MEKHANE.icon_itembasicrelic.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Market" href="#entry-location-sub-market" />`,limit:`Mekhanite，物品栏有空位；Black <CrossReference name="Market" href="#entry-location-sub-market" /> Connections 为 −3。`,statLine:`Complexity: 3
Profile: 500
Menace: 0
XP: 8`},{id:`place-task-3591348120-ch-mek-maxwellist-connection`,name:`Establish Connection`,text:`建立 Maxwellist Connection。`,image:`/locations/mod/God_MEKHANE.iconmekspell6.png`,meta:`Lore`,baseGame:!1,location:`与 <CrossReference name="Maxwellist Connection" href="?god=mekhane#entry-pr-mek-connection" meta="地点修正" text="把当地人口接入 Noosphere，供 Intelligence 通过 Harvest Information 收集 Piece。
正常创建时直接处于强度上限；只有强度处于 0 与上限之间时才运行恢复检查。" image="./mekhane/iconmekspell6.png" /> 或 <CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" /> 相邻的陆地`,limit:`我方 Agent 或 Living Saint，拥有 Noosphere Connection；目标聚居地完全渗透且尚无连接。`,statLine:`Complexity: 15
Profile: 100
Menace: 0
XP: 29`},{id:`place-task-3591348120-ch-mek-buildcongregation`,name:`Establish Congregation`,text:`消耗 10 Divine Schema 建立 <CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />。`,image:`/locations/mod/God_MEKHANE.icon_subcongregation.png`,meta:`Command`,baseGame:!1,location:`可渗透的人类聚居地`,limit:`我方 Agent；当地合格且未达到 Congregation 上限。`,statLine:`Complexity: 50
Profile: 50
Menace: 0
XP: 72`},{id:`place-task-3591348120-ch-mek-increasemekpreference`,name:`Holy Transmission`,text:`消耗 Divine Schema，使当地统治者皈依 Mekhanites；统治者 Shadow 与 Word of Mouth 降低费用。`,image:`/locations/mod/God_MEKHANE.icon_wordofmouth.png`,meta:`Command`,baseGame:!1,location:`有统治者的人类聚居地`,limit:`持有足够 Divine Schema。`,statLine:`Complexity: 50
Profile: 90
Menace: 0
XP: 72`},{id:`place-task-3591348120-ch-mek-rulerschema`,name:`Impart Mekhanite Knowledge`,text:`把 Divine Schema 转交当地统治者。`,image:`/locations/mod/God_MEKHANE.icon_wordofmouth.png`,meta:`Command`,baseGame:!1,location:`Mekhanite 统治者所在聚居地`,limit:`携带足够 Divine Schema。`,statLine:`Complexity: 20
Profile: 90
Menace: 0
XP: 36`},{id:`place-task-3591348120-ch-ruintopiece`,name:`Mechanical Salvage`,text:`从废墟中取得 1 Piece。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth_orange.png`,meta:`Lore`,baseGame:!1,location:`City Ruins`,limit:`Mechanical Salvage 生效；Mekhanite 或 Automaton，物品栏有空位。`,statLine:`Complexity: 50
Profile: 500
Menace: 0
XP: 72`},{id:`place-task-3591348120-ch-deathtopiece`,name:`Blood and Iron`,text:`消耗 25 Death，得到 1 Piece。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth_red.png`,meta:`Lore`,baseGame:!1,location:`Death 或 <CrossReference name="Clockwork Death" href="?god=mekhane#entry-pr-mek-clockworkvirusdead" meta="地点修正" text="计作 Death，可被消耗 Death 的机制利用。达到 300 时触发一次 Death 危机并生成 2 Ghasts。" image="./mekhane/icon_scpclockworkvirusp1.png" /> 至少 25 的地点`,limit:`Blood and Iron 生效；Mekhanite 或 Automaton，物品栏有空位。`,statLine:`Complexity: 10
Profile: 500
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-madnesstopiece`,name:`Impossible Geometry`,text:`消耗 15 Madness，得到 1 Piece。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth_pink.png`,meta:`Lore`,baseGame:!1,location:`Madness 至少 15 的地点`,limit:`Impossible Geometry 生效；Mekhanite 或 Automaton，物品栏有空位。`,statLine:`Complexity: 10
Profile: 500
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-deeponestopiececult`,name:`Abyssal Ores`,text:`Deep One Cult 强度 +15，并取得 1 Piece。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth_green.png`,meta:`Intrigue`,baseGame:!1,location:`Deep One Cult`,limit:`Abyssal Ore 生效；Mekhanite 或 Automaton，物品栏有空位。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-industrytopiece`,name:`Orcish Tools`,text:`Orcish Industry +10，并得到 1 Piece。`,image:`/locations/mod/God_MEKHANE.icon_powerunearth_yellow.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Orc Camp" href="#entry-location-set-orccamp" />`,limit:`Orcish Tools 生效；物品栏有空位。`,statLine:`Complexity: 10
Profile: 500
Menace: 0
XP: 21`}]},{id:`places-3591348120-1`,title:`共同行动`,items:[{id:`place-task-3591348120-ch-mek-councilhide`,name:`Relocate Council`,text:`消耗 Divine Schema，把 Council of Patriarchs 及其库存搬到这里。`,image:`/locations/mod/God_MEKHANE.icon_orthodoxdistract.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 所在地点。`,limit:`玩家人物；Council 当前不在此地，且有足够 Divine Schema。`,statLine:`Complexity: 30
Profile: 40
Menace: 5
XP: 49`},{id:`place-task-3591348120-ch-transferarcanerelics`,name:`Transfer Arcane Relics`,text:`把其他 Congregation 库存中的 Arcane Relics 转移到此 Relay。`,image:`/locations/mod/God_MEKHANE.icon_itemarcanerelic.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`玩家控制的 Mekhanite。`,statLine:`Complexity: 10
Profile: 90
Menace: 0
XP: 21`},{id:`place-task-3591348120-ch-mek-vault-recoverarcanerelics`,name:`Recover Arcane Relics`,text:`从 <CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" /> 中取走最多 3 件 Arcane Relics。`,image:`/locations/mod/God_MEKHANE.icon_itemarcanerelic.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。`,statLine:`Complexity: 10 + 10 × Security
Profile: 90
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-3591348120-ch-mek-vault-recovercogworkrelics`,name:`Recover Cogwork Relics`,text:`从 <CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" /> 中取走最多 3 件 Cogwork Relics。`,image:`/locations/mod/God_MEKHANE.icon_itemcogworkrelic.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。`,statLine:`Complexity: 10 + 10 × Security
Profile: 90
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-3591348120-ch-mek-vault-recoverrelics`,name:`Recover Relics`,text:`从 <CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" /> 中取走最多 3 件 Basic Relics。`,image:`/locations/mod/God_MEKHANE.icon_itembasicrelic.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`Vault 已渗透且有对应库存，人物物品栏有空位；Mekhanite 身份，Automaton 中仅 Maxwellist Infiltrator 可使用。`,statLine:`Complexity: 10 + 10 × Security
Profile: 90
Menace: 0
XP: ⌊max(1, 6 × Complexity)^0.75⌋`}]},{id:`places-3591348120-2`,title:`英雄任务`,items:[{id:`place-task-3591348120-ch-mek-hero-exposecongregation`,name:`Expose Mekhanites`,text:`当前 Profile −20，最低 Profile +10。`,image:`/locations/mod/God_MEKHANE.icon_powerfalseimage.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`Awareness 100%，个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。`,statLine:`Complexity: 20；Sentinel Presence 生效时 40
Profile: 20 + Congregation Profile
Menace: 0
Danger: Armed Congregation +10；Augmented Population 达到 100 时 +5
XP: 36；加强后为 60`,positiveTags:`Cooperation`,negativeTags:`Mekhanites`},{id:`place-task-3591348120-ch-mek-hero-investigatemekhanites`,name:`Investigate Mekhanites`,text:`创建 Recent Investigations，持续提高 Congregation Profile。`,image:`/locations/mod/God_MEKHANE.icon_powerhiddenworks.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`非 Mekhanite；个人 Shadow 未满，对 Mekhanites 的偏好不高于 0。`,statLine:`Complexity: 40；Sentinel Presence 生效时 80
Profile: 40 + Congregation Profile
Menace: 0
XP: 60；加强后为 102`,positiveTags:`Danger`,negativeTags:`Mekhanites、Shadow`},{id:`place-task-3591348120-ch-mek-hero-raidcongregation`,name:`Steal Relics`,text:`偷走最多 3 件 Relic；对非 Relic 组件逐件进行 4/9 概率的销毁判定。Congregation Profile −15；当地 Armed Congregation 强度 −10。`,image:`/locations/game/raid.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`英雄有物品栏空位，满足任务的觉醒与 Shadow 限制。`,statLine:`Complexity: 30；Sentinel Presence 生效时 60
Profile: 50 + 已解封数 ×10
Menace: 0
Danger: Armed Congregation +10；Augmented Population 达到 100 时 +5
XP: 49；加强后为 82`,positiveTags:`Danger`,negativeTags:`Mekhanites、Shadow、Combat`},{id:`place-task-3591348120-ch-mek-hero-destroyrelic`,name:`Destroy Relics`,text:`对 Relic 逐件进行 4/9 概率的销毁判定，最多处理 3 件。`,image:`/locations/game/raid.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`Awareness 100%、个人 Shadow 未满、对 Mekhanites 偏好不高于 0 的英雄，或 Sarkic 人物。`,statLine:`Complexity: 30；Sentinel Presence 生效时 60
Profile: Congregation Profile
Menace: 0
XP: 49；加强后为 82`,positiveTags:`Combat、Danger`,negativeTags:`Mekhanites`},{id:`place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents`,name:`Destroy Components`,text:`尝试销毁最多 10 件组件，每件判定成功率 4/9；也会拿走可携带的 Relic。Congregation Profile −5。`,image:`/locations/game/raid.png`,meta:`Might`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`非 Mekhanite 英雄。`,statLine:`Complexity: 20；Sentinel Presence 生效时 40
Profile: 50 + 已解封数 ×10
Menace: 0
XP: 36；加强后为 60`,positiveTags:`Combat、Danger`,negativeTags:`Mekhanites、Shadow`},{id:`place-task-3591348120-ch-mek-hero-convert`,name:`Convert`,text:`使执行者成为 Mekhanite；人物继续自主行动。`,image:`/locations/mod/God_MEKHANE.icon_subcongregation.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Mekhanite Congregation" href="#entry-location-sub-mek-congregation" />、<CrossReference name="Orcish Congregation" href="#entry-location-sub-mek-congregationorc" />、<CrossReference name="Citadel" href="#entry-location-sub-mek-congregationtower" />、<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />、<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 所在地点。`,limit:`尚未皈依且喜好 Mekhanites。`,statLine:`Complexity: 20
Profile: 50
Menace: 0
XP: 36`,positiveTags:`Cooperation、Mekhanites、Religion`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-hero-investigateexile`,name:`Investigate Exiles`,text:`Profile +25；有 5% 概率使英雄对 Mekhanites 的偏好降低。`,image:`/locations/mod/God_MEKHANE.icon_minorsect.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`Awareness 超过 50%，设施 Profile 低于 50。`,statLine:`Complexity: 25
Profile: 50
Menace: 0
XP: 42`,positiveTags:`无`,negativeTags:`Mekhanites、Discord、Religion`},{id:`place-task-3591348120-ch-mek-hero-raidexile`,name:`Raid Exiles`,text:`Profile 超过 100 时进行摧毁判定，成功后移除设施并重置当地 Shadow 与 Infiltration；未摧毁时 Profile +25。`,image:`/locations/mod/God_MEKHANE.icon_minorsect.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`个人 Shadow 未满，设施 Profile 至少 50。`,statLine:`Complexity: 25
Profile: 50
Menace: 0
XP: 42`,positiveTags:`Combat、Danger`,negativeTags:`Mekhanites、Discord、Religion`},{id:`place-task-3591348120-ch-mek-sarkicheroinvestigate`,name:`Investigate Sarkics`,text:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" /> Profile +10，Sarkic Cult 的 Elder Influence +10，同时提高教派对我方的敌意。`,image:`/locations/game/clues.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`我方 Agent。`,statLine:`Complexity: 10 + 当地 Security ×5
Profile: 0
Menace: 0
XP: ⌊[6×(10 + 当地 Security ×5)]^0.75⌋`,positiveTags:`Danger`,negativeTags:`Disease、Sarkics`},{id:`place-task-3591348120-ch-mek-vault-hero-storerelics`,name:`Contain Relics`,text:`把携带的 Relics 放入 Vault，增加其研究速度。`,image:`/locations/mod/God_MEKHANE.icon_vault.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`英雄携带可收容的 Relic。`,statLine:`Complexity: 3
Profile: 90 + 世界恐慌百分点 ×0.25
Menace: 0
XP: 8`,positiveTags:`无`,negativeTags:`Mekhanites`},{id:`place-task-3591348120-ch-mek-vault-hero-learn`,name:`Study Enemy`,text:`获得 Specialist: Mekhanite。`,image:`/locations/mod/God_MEKHANE.icon_brokenchurchshadow.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />`,limit:`世界恐慌 ≥50%；执行者 Awareness ≥50%，不是 Mekhanite 或 Biomechanical，尚无该特质。`,statLine:`Complexity: 3
Profile: 90 + 世界恐慌 / 4
Menace: 0
XP: 8`,positiveTags:`Co-Operation`,negativeTags:`Shadow、Mekhanites`},{id:`place-task-3591348120-ch-mek-hero-raisesuspicion`,name:`Raise Suspicion`,text:`降低统治者对 Mekhanites 的偏好 1 级。`,image:`/locations/game/vendetta.png`,meta:`Command`,baseGame:!1,location:`有人类统治者的聚居地`,limit:`英雄厌恶 Mekhanites、个人 Shadow 未满；统治者 Awareness 100%。`,statLine:`Complexity: 20
Profile: 60 + 已解封数 ×20
Menace: 0
XP: 36`,positiveTags:`Cooperation`,negativeTags:`Mekhanites、Religion`},{id:`place-task-3591348120-ch-mek-hero-shrinkrotbolt`,name:`Combat Global Rotbolt Spread`,text:`持续施法期间，每回合使所有陆地 Rotbolt 减少施法者 Lore，同时消耗 2 Geomantic Locus，执行者 Profile +2。`,image:`/locations/mod/God_MEKHANE.icon_scprotbolt.png`,meta:`Lore`,baseGame:!1,location:`Geomantic Locus`,limit:`非 Mekhanite、个人 Shadow 未满，Geomancy 至少 2；当地 Locus 强度大于 0。`,statLine:`Complexity: 10
Profile: 0
Menace: 0
XP: 21`,positiveTags:`Mekhanites`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-vault-hero-create`,name:`Create Containment Vault`,text:`使用携带的 Relic 建立 <CrossReference name="Containment Vault" href="#entry-location-sub-mek-vault" />，并将它存入。`,image:`/locations/mod/God_MEKHANE.icon_vault.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />`,limit:`世界恐慌 ≥25%，Alliance 存在；执行者携带 Relic。`,statLine:`Complexity: 30
Profile: 90 + 世界恐慌 / 4
Menace: 0
XP: 49`,positiveTags:`无`,negativeTags:`Shadow、Mekhanites`}]},{id:`places-3591348120-3`,title:`宗教任务`,items:[{id:`place-task-3591348120-ch-mek-exileexperiment`,name:`Unorthodox Experiment`,text:`尝试产生 Unorthodox Piece，供实验组装使用。`,image:`/locations/mod/God_MEKHANE.icon_subexiles.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Exile Community" href="#entry-location-sub-mek-exiles" />`,limit:`仅 Mekhanite Exile。`,statLine:`Complexity: 10
Profile: 50
Menace: 0
XP: 21`,positiveTags:`Shadow、Discord`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkichidetemple`,name:`Divert Attention`,text:`消耗 3 Sarkic Insights，<CrossReference name="Temple" href="#entry-location-sub-temple" /> Profile −15。`,image:`/locations/mod/God_MEKHANE.icon_sarkichide.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Sarkic 人物；Counter-Infiltration 会阻止降低 Profile。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicconvertsecrets`,name:`Imbue Knowledge`,text:`消耗 Sarkic Insights，增加 Sarkic 教团的 Human Influence。`,image:`/locations/mod/God_MEKHANE.icon_sarkic1.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`执行者信奉 Sarkicism；影响力尚未达到修改教义所需数值，相关教义允许使用。`,statLine:`Complexity: 15
Profile: 50
Menace: 0
XP: 29`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkickarcist`,name:`Karcist Ascension`,text:`使选定的 Sarkic Cultist 晋升为 Karcist；<CrossReference name="Temple" href="#entry-location-sub-temple" /> Profile +10。消耗 Sarkic Insights：当前没有 Karcist 时为 1，否则为现存 Karcist 数 ×10。`,image:`/locations/mod/God_MEKHANE.icon_sarkicKarcist.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Karcist Ascension 生效；仅教团选定的继任者，Insights 足够。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicmutate`,name:`Mutate`,text:`消耗 2 Sarkic Insights，取得或升级一项 Sarkic Mutation。`,image:`/locations/mod/God_MEKHANE.icon_sarkicpop.png`,meta:`Lore`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Applied Mutations 生效，已有突变总等级低于人物等级。`,statLine:`Complexity: 10
Profile: 200
Menace: 0
XP: 21`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicrecruit`,name:`Sarkic Initiation`,text:`消耗 5 Sarkic Insights，招募 Sarkic Cultist。`,image:`/locations/mod/God_MEKHANE.icon_acolyte1sf.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Karcist。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkic-recruitminion`,name:`Recruit Sarkic Initiate Minion`,text:`消耗 3 Sarkic Insights，招募 Sarkic Initiate 随从。`,image:`/locations/mod/God_MEKHANE.icon_sarkic_cultist.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Sarkic 人物。`,statLine:`Complexity: 3
Profile: 90
Menace: 0
XP: 8`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicpreference`,name:`Convert Ruler`,text:`消耗 5 Sarkic Insights，使统治者皈依 Sarkic。`,image:`/locations/mod/God_MEKHANE.icon_sarkicconvert.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Sarkic 人物，目标符合转化条件。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicsermon`,name:`Karcist's Sermon`,text:`消耗 5 Sarkic Insights，创建 Karcist's Sermon。`,image:`/locations/mod/God_MEKHANE.icon_sarkicsermon.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Karcist；目标不在 Alliance，且尚未完全渗透或完全 Enshadowed。`,statLine:`Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)
Profile: 200
Menace: 0
XP: 随 Complexity 计算`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicreddeath`,name:`Unleash the Red Death`,text:`消耗 20 Sarkic Insights，向世界释放 The <CrossReference name="Flesh That Hates" href="#entry-location-sub-mek-sarkicfleshthathates" /> 和 Red Death。`,image:`/locations/mod/God_MEKHANE.icon_sarkic_fleshthathates.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Grand Karcist，Deathless Empire 已成立且此前没有释放。`,statLine:`Complexity: max(5,10 + 统治者 Shadow 百分点 ×0.25)
Profile: 200
Menace: 0
XP: 随 Complexity 计算`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkic-security`,name:`Root Out Infiltration`,text:`消耗 10 Sarkic Insights，清除当地 Infiltration。`,image:`/locations/mod/God_MEKHANE.icon_sarkicshadow.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Karcist；地点已有渗透。`,statLine:`Complexity: 25
Profile: 500
Menace: 0
XP: 42`,positiveTags:`Sarkics`,negativeTags:`Mekhanites`},{id:`place-task-3591348120-ch-mek-sarkicempire`,name:`Form Deathless Empire`,text:`建立 Deathless Empire，吸纳 Sarkic 地区并可能引起内战。`,image:`/locations/mod/God_MEKHANE.icon_sarkicempire.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Grand Karcist。`,statLine:`Complexity: 50
Profile: 50
Menace: 0
XP: 72`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkicgrandkarcist`,name:`Grand Karcist Ascension`,text:`使 Karcist 晋升为 Grand Karcist。`,image:`/locations/game/deepOnes.png`,meta:`Command`,baseGame:!1,location:`<CrossReference name="Sarkic Temple" href="#entry-location-sub-mek-sarkictemple" />`,limit:`Grand Karcist 教义生效，尚无已选定的最高领袖。需要至少 15 Sarkic Insights；完成函数没有扣除该资源。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-sarkictomb`,name:`Unearth Klavigar's Tomb`,text:`建立 Klavigar Tomb。基础费用为现存墓穴数 ×10 Insights，再加 ⌊当地 Infiltration 百分点 /20⌋。`,image:`/locations/mod/God_MEKHANE.icon_subsarkictomb.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="Ancient Ruins" href="#entry-location-sub-ancientruins" />`,limit:`Karcist；世界墓穴少于 4，地点尚未完全渗透且无冲突设施。`,statLine:`Complexity: 10
Profile: 500
Menace: 0
XP: 21`,positiveTags:`Sarkics`,negativeTags:`无`},{id:`place-task-3591348120-ch-mek-increasemekpreferencespeaker`,name:`Speaker's Sermon`,text:`创建 Speaker's Sermon，按当地人口获得最多 3 Divine Schema。`,image:`/locations/mod/God_MEKHANE.icon_orthodoxsermon.png`,meta:`固定进度`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`仅 Speaker。`,statLine:`Complexity: max(5, 30 − 统治者 Shadow 百分点 ×0.25)
Profile: 50
Menace: 0
XP: 随 Complexity 计算`,positiveTags:`Mekhanites`,negativeTags:`无`}]},{id:`places-3591348120-4`,title:`自主单位任务`,items:[{id:`place-task-3591348120-ch-mek-infiltrate`,name:`Maxwellist Infiltration`,text:`使当地一个兴趣点进入已渗透状态。`,image:`/locations/game/infiltrate.png`,meta:`Intrigue`,baseGame:!1,location:`使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。`,limit:`仅 Maxwellist Infiltrator。`,statLine:`Complexity: 50 + 25 × Security
Profile: 200
Menace: 20
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-3591348120-ch-mek-infiltrateawareness`,name:`Maxwellist Disinformation`,text:`将当地统治者 Awareness 设为 0%，持续 30 回合。`,image:`/locations/game/infiltrate.png`,meta:`Intrigue`,baseGame:!1,location:`使用 MEKHANE 时向已有聚居地加入。资源转化取决于对应教义及修正；Geomantic Locus 相关两项只在当地具有该修正时加入。实际执行还受每个行动限制。`,limit:`仅 Maxwellist Infiltrator；当地渗透度 ≥50%。`,statLine:`Complexity: 50 + 25 × Security；当地完全渗透时减半
Profile: 200
Menace: 20
XP: ⌊max(1, 6 × Complexity)^0.75⌋`},{id:`place-task-3591348120-ch-locitopiece`,name:`Harvest Information`,text:`消耗 30 Geomantic Locus，以 Piece 填满物品栏空位。`,image:`/locations/mod/God_MEKHANE.iconmekspell3.png`,meta:`Lore`,baseGame:!1,location:`Geomantic Locus 至少 30 的地点`,limit:`仅 Intelligence。`,statLine:`Complexity: 10
Profile: 100
Menace: 0
XP: 21`}]},{id:`places-3591348120-unplaced`,title:`未找到正常生成路径的类型`,items:[{id:`location-settlement-mekhanite`,name:`Mekhanite 聚居地基类`,text:`MEKHANE 聚居地体系使用的内部类型。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-settlement-mek-forge`,name:`Orthodox Forge 地点类`,text:`以聚居地形式定义的 Forge；正常的 Standardization 使用兴趣点形式 <CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" />。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-maxwellistbase`,name:`Maxwellist Hub 基类`,text:`<CrossReference name="Maxwellist Relay" href="#entry-location-sub-mek-relay" /> 继承的任务集合。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-maxwellistobeliskscp`,name:`Maxwellist Obelisk`,text:`代码定义了向连接地点生成 Arcane Secret 的设施。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-orthodoxanalyticalengine`,name:`Analytical Engine`,text:`代码定义了用 Gold 获取 Divine Schema 的设施。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-orthodoxbase`,name:`Orthodox Ministry 基类`,text:`<CrossReference name="Orthodox Forge" href="#entry-location-sub-mek-forge" /> 继承的任务集合。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-sarkicvillage`,name:`Sarkic Community`,text:`代码定义的野外 Sarkic 村落。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`},{id:`location-sub-mek-stronghold`,name:`Mekhanite Stronghold`,text:`继承 Congregation，额外逐回合产生 Shadow 的设施。
当前有效版本未找到此类型作为独立地点或兴趣点直接生成的正常调用。`,meta:`未找到正常生成路径`}]}]},{id:`places-3647343379`,title:`Villikos, the First Claimant`,description:``,sections:[{id:`places-3647343379-location`,title:`地点`,items:[{id:`location-set-fc-tower`,name:`Villikos 占领的聚居地`,text:`Empire of Villikos 接管人类类聚居地时，处决原统治者，清除继承人，并保留原地点名称、外观、人口、Shadow 和附属设施。该聚居地没有统治者或普通挑战；Defence 上限 50，每回合恢复 1。
Unrest、Lingering Resentment、Political Agitation 每存在一项，每回合使该项强度 −5，并分别产生 Death +3、Devastation +0.5。

出现方式
Empire of Villikos 接管人类体系聚居地时替换；保留原有兴趣点及其可执行任务，但地点自己的普通任务列表为空。

自身任务列表为空；当地修正、保留的兴趣点或特殊单位可能另提供行动。`,baseGame:!1}]},{id:`places-3647343379-extensions`,title:`对已有地点与兴趣点的扩展`,items:[{id:`place-hook-3647343379-0`,name:`聚居地的 Villikos 应对`,text:`使用 Villikos 时加入驱逐帝国统治者的任务。

对应地点 / 兴趣点
<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />

英雄任务：
<CrossReference name="Oust Imperial Ruler" href="#entry-place-task-3647343379-ch-fc-oustimperialruler" />`,baseGame:!1}]},{id:`places-3647343379-2`,title:`英雄任务`,items:[{id:`place-task-3647343379-ch-fc-oustimperialruler`,name:`Oust Imperial Ruler`,text:`刺杀带 <CrossReference name="Imperial Blood" href="?god=villikos#entry-t-fc-imperial" meta="人物特质" text="Awareness 每回合归零；获得时对 Ambition 的偏好设为 2。地方统治者逐步提高对 Cruel、Gold、Danger、Combat 的偏好，并可争夺更高职位、清洗家族和安插统治者。
持有者完成非 Other 类型任务时，已有 Claim +5；尚无 Claim 时创建强度 1 的修正。精灵英雄执行 Find Ruler 任命的新统治者也获得 Imperial Blood；执行 Craft Elfstone 后，携带的未腐化 Elfstone 全部转为腐化。
成为疯狂君主时，国内地点 Madness 每回合 +0.5；具有 Call of the Abyss 时，已有 Deep One Cult 每回合 +3。兼容 Living Characters／Living Wilds 时，相关吸血鬼与狼人修正还可获得每回合 +3。 
统治者首次腐化检查也会在没有 Claim 的所在地创建强度 1。" /> 的地方统治者。没有该特质的继承人会被设为 100% Awareness；否则创建新的完全 Aware 统治者。`,image:`/locations/game/brutalAssassination.png`,meta:`Intrigue`,baseGame:!1,location:`<CrossReference name="City" href="#entry-location-set-city" />、<CrossReference name="小型人类聚居地" href="#entry-location-set-minorhuman" />、<CrossReference name="Elven City" href="#entry-location-set-elvencity" />、<CrossReference name="Dwarven City" href="#entry-location-set-dwarvencity" />、<CrossReference name="Dwarven Outpost" href="#entry-location-set-dwarvenoutpost" />`,limit:`执行者为 Alliance 的非受控英雄，Awareness 为 100%；目标不能是君主。`,statLine:`Complexity: 30
Profile: 50
Menace: 0
XP: 49`,positiveTags:`无`,negativeTags:`无`}]},{id:`places-3647343379-unplaced`,title:`未找到正常生成路径的类型`,items:[{id:`location-set-fc-base`,name:`Villikos 聚居地基类`,text:`Empire of Villikos 所占领聚居地的共同类型。
由具体的 Villikos 占领地点继承，不单独作为地图地点生成。`,meta:`未找到正常生成路径`}]}]}],_=`地表 Temperature 越接近 50%，Habitability（适居度）通常越高；过冷或过热都会降低适居度。地下地点的基础适居度固定为 50%。`,v=`基础产粮＝12＋⌈0.1＋75×（Habitability−15%）⌉，再结算当地修正与兴趣点的产粮加成。`,y=`<CrossReference name="Tax Citizens" href="#entry-place-ruler-base-act-taxcitizens" /> 完成时获得 ⌊0.45×人口×Prosperity⌋ Gold；繁荣度也影响统治者筹集储备金的意愿。`,b=`城防上限＝人口×Prosperity＋兴趣点防御加成；当地供养的常规军队基础最大 HP＝⌊人口×Prosperity⌋，再结算阵营与 Military Fervour 等军队加成。
`+y+`
当地有 Market 时，购买后的补货会随 Prosperity 提高而更容易出现稀有物品：超过 100% 的部分就是稀有概率，最高必定为稀有，例如 Prosperity 150% 对应 50%。
Orc 军队夷平、Orc Raiders 掠夺此地的 Gold 收益也随人口×Prosperity 提高。`,x=`此地点不使用 Prosperity，也不结算居民税收与人口供养的常规军队。`,S={"location-set-city":{temperature:_+`
人口上限＝12＋⌈0.1＋180×（Habitability−15%）⌉。
基础产粮＝12＋⌈0.1＋75×（Habitability−15%）⌉，再结算当地修正与兴趣点的产粮加成。 可额外接收相邻、同势力小型人类聚居地的剩余粮食。
适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。`,prosperity:b},"location-set-minorhuman":{temperature:_+`
人口上限＝min（40，12＋⌈0.1＋90×（Habitability−15%）⌉）。
基础产粮＝12＋⌈0.1＋75×（Habitability−15%）⌉，再结算当地修正与兴趣点的产粮加成。 Farming Community / Mushroom Farm 将产粮翻倍；剩余粮食可供给相邻、同势力的 City 或 Dwarven City，因此气候变化也会影响这些城市的粮食。
适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。`,prosperity:b},"location-set-dwarvencity":{temperature:`地下基础 Habitability 固定为 50%，因此当地 Temperature 的变化不改变这项基础适居度；地表矮人城市则使用通常的温度—适居度规则。
人口上限＝2×［12＋⌈0.1＋90×（Habitability−15%）⌉］。地下默认上限 88。
`+v+` 地下默认基础产粮 39，可接收相邻、同势力小型聚居地的剩余粮食。人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长。
适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。`,prosperity:`城防上限＝20＋人口×Prosperity＋兴趣点防御加成。
供养的矮人军队以 ⌊人口×Prosperity⌋ 为基础，结算常规军队加成后再翻倍；因此繁荣度降低会同时削弱城防和驻军。
`+y+`
当地有 Market 时，购买后的补货会随 Prosperity 提高而更容易出现稀有物品：超过 100% 的部分就是稀有概率，最高必定为稀有，例如 Prosperity 150% 对应 50%。
Orc 军队夷平、Orc Raiders 掠夺此地的 Gold 收益也随人口×Prosperity 提高。`},"location-set-dwarvenoutpost":{temperature:`地下基础 Habitability 固定为 50%；地表矮人据点则由 Temperature 决定适居度，越靠近 50% 通常越宜居。
人口上限＝min（40，12＋⌈0.1＋90×（Habitability−15%）⌉）；地下默认上限 40。
`+v+` 地下默认基础产粮 39，Mushroom Farm 另将产粮翻倍。人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长；剩余粮食可以供给相邻、同势力的城市。
适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。`,prosperity:`城防上限＝20＋人口×Prosperity＋兴趣点防御加成；若据点供养常规军队，其基础最大 HP＝⌊人口×Prosperity⌋，再结算军队加成。
`+y+`
当地有 Market 时，购买后的补货会随 Prosperity 提高而更容易出现稀有物品：超过 100% 的部分就是稀有概率，最高必定为稀有，例如 Prosperity 150% 对应 50%。
Orc 军队夷平、Orc Raiders 掠夺此地的 Gold 收益也随人口×Prosperity 提高。`},"location-set-elvencity":{temperature:_+`
人口上限＝12＋⌈0.1＋90×（Habitability−15%）⌉。
基础产粮＝12＋⌈0.1＋75×（Habitability−15%）⌉，再结算当地修正与兴趣点的产粮加成。 精灵城市依靠本地产粮维持人口；人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长。
Temperature 高于 60% 时，城市每回合降温 1 个百分点；低于 40% 时每回合升温 1 个百分点，并向相邻格施加同向调整。仅在本地临时温差绝对值小于 10 个百分点时发动，邻格还要求临时温差绝对值小于 25 个百分点。
适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。`,prosperity:b},"location-set-orccamp":{temperature:`Temperature 通过 Habitability 决定 Orc 能否定居及继续占据此地。默认需要至少 5% 适居度，门槛随 Orc Habitability 设置调整；低于门槛时部落放弃该地点，并清除无法保留的营地与兴趣点。地下基础适居度为 50%，地下扩张另需部落具备进入地下的能力。`,prosperity:`Orc Camp 不使用 Prosperity。城防上限由营地基础值与 Orcish Defences 决定；军队规模由本地及相邻地点的 Orcish Industry 决定。`},"location-set-deeponeabyssalcity":{temperature:`Temperature 不参与深海城市的人口承载、食物或存续结算。人口由 Deep One Sanctum 转送、城市之间迁移等方式增加；人口超过 50 时按深海城市规则扩散。`,prosperity:`此处不使用 Prosperity。城防上限固定为 50；城市与其兴趣点的功能按 Deep One 人口等独立条件运行。`},"location-set-deeponesanctum":{temperature:`Temperature 不决定圣所的存续与人口承载。圣所接收的转化人口会转送至 Abyssal City，按 Deep Ones 自身的转送规则结算。`,prosperity:`此处不使用 Prosperity，城防上限固定为 50。原聚居地留下的兴趣点仍按各自规则提供功能。`},"location-set-cityruins":{temperature:`废墟本身没有人口、产粮或气候死亡结算。Temperature 仍影响此地的 Habitability，进而影响后续人类殖民据点的成长与 Orc 定居资格；重建成聚居地后，采用新聚居地的规则。`,prosperity:`废墟不保留原城市的 Prosperity、税收与军队供养。重建后由新聚居地重新计算。`},"location-set-minorother":{temperature:`Temperature 通过 Habitability 影响此地未来的殖民与定居资格。当前作为野外兴趣点载体，不进行人类人口、产粮或气候死亡结算；各兴趣点仍有各自条件。`,prosperity:x+` 当前功能由附属兴趣点与地点修正提供。`},"location-set-tombofgods":{temperature:`墓穴不按 Temperature 或 Habitability 结算人口、产粮及存续；温度变化仍会改变地表格子的适居度，地下基础适居度为 50%。`,prosperity:x+` 墓穴的挑战、任务与封印相关机制按各自条件运行。`},"location-set-inundai-palace":{temperature:`Temperature 不参与宫殿人口和存续结算。宫殿按累计人口每达到 50 的新门槛生成一名 Inundai Emissary；这项生成与温度无关。`,prosperity:`宫殿不使用 Prosperity，继承的城防上限为 50；核心进度由人口与 Inundai 的影响机制决定。`},"location-set-sunkenruins":{temperature:`沉没废墟不按 Temperature 结算居民人口、产粮或存续。作为海中废墟，其遗留内容与可执行行动取决于具体兴趣点。`,prosperity:`此处不使用 Prosperity；保存的是沉没时的 Infrastructure，而非原聚居地的繁荣度经济。`},"location-set-nature-naturesanctuary":{temperature:`Temperature 通过 Habitability 影响自然保护区的作用。保护区令相邻地点的适居度增加 15 个百分点；来源保护区所在地的适居度低于 15% 时，这些邻地加成被移除。因此恶化保护区自身的气候，也会削弱周边聚居地的粮食与人口承载。`,prosperity:x+` 此处防御为 0；它通过改善相邻地点的适居度帮助周边聚居地。`},"location-set-nature-unoccupiedwilderness":{temperature:`Temperature 仍决定该荒野的基础 Habitability；地表通常在 50% 附近最宜居，地下基础适居度为 50%。适居度继续影响当地的殖民资格及 Living Wilds 的自然环境效果；荒野本身不结算人类人口与粮食。`,prosperity:x+` 此处防御为 0；Shadow 与野生单位活动按荒野自身规则运行。`},"location-set-nature-wolfrun":{temperature:`Temperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。`,prosperity:`此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。`},"location-set-shipwreck":{temperature:`Temperature 不参与沉船残骸的存续和打捞结算。该地点提供 Shipwreck 兴趣点，打捞按残骸本身的机制处理。`,prosperity:x+` 打捞收益由 Shipwreck 的状态与相应行动决定。`}},C={locations:[{id:`locations-common-0`,name:`城市与矮人据点通用`,hosts:[`location-set-city`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`,`location-set-elvencity`],actions:[`place-ruler-base-an-razesubsettlement`,`place-ruler-base-an-appointstatereligion`,`place-ruler-base-an-abdicate`,`place-ruler-base-an-appeasenobles`,`place-ruler-base-an-declarewar`,`place-ruler-base-an-formalliance`,`place-ruler-base-an-improverelations`,`place-ruler-base-an-quarantine`,`place-ruler-base-an-taxnobles`,`place-ruler-base-an-worsenrelationship`]},{id:`locations-common-1`,name:`人类体系聚居地通用`,hosts:[`location-set-city`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`,`location-set-elvencity`,`location-set-minorhuman`],actions:`place-task-base-ch-h-buildtemple.place-ruler-base-act-attackagent.place-ruler-base-act-attackarmy.place-ruler-base-act-brutalcrackdown.place-ruler-base-act-deepone-descend.place-ruler-base-act-deepone-humanity.place-ruler-base-act-exposecultists.place-ruler-base-act-festival.place-ruler-base-act-fundchosenone.place-ruler-base-act-fundhero.place-ruler-base-act-fundoutpost.place-ruler-base-act-muster.place-ruler-base-act-raisearmy.place-ruler-base-act-reduceunrest.place-ruler-base-act-sabotageotherruler.place-ruler-base-act-sabotagevisitor.place-ruler-base-act-supportconclave.place-task-base-ch-accessvault.place-task-base-ch-accessvaultlimited.place-task-base-ch-assassinatebrutal.place-task-base-ch-assassinateenshadowedruler.place-task-base-ch-assassinatesilent.place-task-base-ch-drivebackshadow.place-task-base-ch-h-aware.place-task-base-ch-h-doomsay.place-task-base-ch-h-militaryfervour.place-task-base-ch-h-preach.place-task-base-ch-h-preachtoruler.place-task-base-ch-poisonhero.place-task-base-ch-ransackpossessions.place-task-base-ch-redeemruler.place-task-base-ch-redeemsovereign.place-task-base-ch-rest.place-task-base-ch-sabotageruler.place-task-base-ch-savehero.place-task-base-ch-warntheworld.place-task-base-ch-wellofshadows`.split(`.`)},{id:`locations-common-2`,name:`人类与矮人聚居地通用`,hosts:[`location-set-city`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`,`location-set-minorhuman`],actions:[`place-ruler-base-act-taxcitizens`,`place-ruler-base-act-treatdisease`,`place-ruler-base-act-wardagainstshadow`]},{id:`locations-common-3`,name:`人类与精灵聚居地通用`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-minorhuman`],actions:[`place-task-base-ch-elf-giveruleelfstone`]}],"points-of-interest":[{id:`points-of-interest-common-0`,name:`可渗透兴趣点通用`,hosts:[`location-sub-catacombs`,`location-sub-cathedral`,`location-sub-city`,`location-sub-docks`,`location-sub-elvencity`,`location-sub-farms`,`location-sub-fort`,`location-sub-goldmine`,`location-sub-holyordercapital`,`location-sub-library`,`location-sub-market`,`location-sub-sewers`,`location-sub-temple`,`location-sub-undergroundfort`,`location-sub-witchcoven`],actions:[`place-task-base-ch-infiltrate`]},{id:`points-of-interest-common-1`,name:`宫殿、神殿与女巫集会所通用`,hosts:[`location-sub-city`,`location-sub-temple`,`location-sub-witchcoven`],actions:[`place-ruler-base-an-razesubsettlement`]},{id:`points-of-interest-common-2`,name:`野外隐匿兴趣点通用`,hosts:[`location-sub-ancientruins`,`location-sub-deep-city`,`location-sub-deep-sanctum`,`location-sub-temple`,`location-sub-witchcoven`],actions:[`place-task-base-ch-laylowwilderness`]},{id:`points-of-interest-common-3`,name:`随从招募兴趣点通用`,hosts:[`location-sub-city`,`location-sub-sewers`,`location-sub-temple`,`location-sub-witchcoven`],actions:[`place-task-base-ch-recruitminion`]},{id:`points-of-interest-common-4`,name:`宫殿、教团总部与女巫集会所通用`,hosts:[`location-sub-city`,`location-sub-holyordercapital`,`location-sub-witchcoven`],actions:[`place-task-base-ch-enshadow`]}]},w={"location-set-hive":{god:`cordyceps`,href:`?god=cordyceps#entry-hive`},"location-sub-hivespire":{god:`cordyceps`,href:`?god=cordyceps#entry-hive-spire`},"place-hook-cordyceps-0":{god:`cordyceps`,href:`?god=cordyceps#entry-place-hook-cordyceps-0`},"place-task-cordyceps-ch-infectruler":{god:`cordyceps`,href:`?god=cordyceps#entry-infect-ruler`},"place-task-cordyceps-ch-targettedinfection":{god:`cordyceps`,href:`?god=cordyceps#entry-targeted-infection`},"place-task-cordyceps-ch-removevector":{god:`cordyceps`,href:`?god=cordyceps#entry-remove-vector`},"location-set-crypt":{god:`ixthus`,href:`?god=ixthus#entry-eternal-city`},"location-sub-cryptunderbelly":{god:`ixthus`,href:`?god=ixthus#entry-crypt-depths`},"location-sub-eternalpalace":{god:`ixthus`,href:`?god=ixthus#entry-eternal-palace`},"place-task-2866026291-ch-fundcrypt":{god:`ixthus`,href:`?god=ixthus#entry-fund-eternal-city`},"location-set-bloodshed-fortress":{god:`kishi`,href:`?god=kishi#entry-demonic-nexus`},"location-sub-bloodshed-fortress":{god:`kishi`,href:`?god=kishi#entry-location-sub-bloodshed-fortress`},"location-set-customtomb":{god:`living-void`,href:`?god=living-void#entry-great-wound`},"location-set-livingvoid":{god:`living-void`,href:`?god=living-void#entry-living-void`},"location-set-worldrupture":{god:`living-void`,href:`?god=living-void#entry-world-rupture`},"place-hook-2879249746-0":{god:`living-void`,href:`?god=living-void#entry-place-hook-2879249746-0`},"place-task-2879249746-ch-getvoidstone":{god:`living-void`,href:`?god=living-void#entry-nothing-from-something`},"place-task-2879249746-ch-closerupture":{god:`living-void`,href:`?god=living-void#entry-seal-rupture`},"place-task-2879249746-ch-h-makerift":{god:`living-void`,href:`?god=living-void#entry-holy-open-rift`},"place-hook-2879251084-0":{god:`chandalor`,href:`?god=chandalor#entry-place-hook-2879251084-0`},"place-task-2879251084-ch-h-witchcurse":{god:`chandalor`,href:`?god=chandalor#entry-holy-wicked-curse`},"location-set-livingsettlement":{god:`escamrak`,href:`?god=escamrak#entry-living-settlement`},"location-set-livingterrain":{god:`escamrak`,href:`?god=escamrak#entry-twisted-landscape`},"location-sub-fleshlibrary":{god:`escamrak`,href:`?god=escamrak#entry-twisted-library`},"location-sub-livingterrain":{god:`escamrak`,href:`?god=escamrak#entry-location-sub-livingterrain`},"place-hook-2900259087-0":{god:`escamrak`,href:`?god=escamrak#entry-place-hook-2900259087-0`},"place-hook-2900259087-1":{god:`escamrak`,href:`?god=escamrak#entry-place-hook-2900259087-1`},"place-task-2900259087-ch-spreadlibrary":{god:`escamrak`,href:`?god=escamrak#entry-propagate-knowledge`},"place-task-2900259087-ch-teachfleshcrafting":{god:`escamrak`,href:`?god=escamrak#entry-place-task-2900259087-ch-teachfleshcrafting`},"place-task-2900259087-ch-corruptlibrary":{god:`escamrak`,href:`?god=escamrak#entry-twist-library`},"place-task-2900259087-ch-bonelibrarylearn":{god:`escamrak`,href:`?god=escamrak#entry-place-task-2900259087-ch-bonelibrarylearn`},"place-task-2900259087-ch-parasiteinfests":{god:`escamrak`,href:`?god=escamrak#entry-place-task-2900259087-ch-parasiteinfests`},"location-set-memory-adolia":{god:`adolia`,href:`?god=adolia#entry-location-set-memory-adolia`},"location-sub-memory-adolia":{god:`adolia`,href:`?god=adolia#entry-subsumed-settlement`},"place-hook-2980692812-0":{god:`adolia`,href:`?god=adolia#entry-place-hook-2980692812-0`},"place-hook-2980692812-1":{god:`adolia`,href:`?god=adolia#entry-place-hook-2980692812-1`},"place-hook-2980692812-2":{god:`adolia`,href:`?god=adolia#entry-place-hook-2980692812-2`},"place-task-2980692812-ch-memory-spreadremedy":{god:`adolia`,href:`?god=adolia#entry-place-task-2980692812-ch-memory-spreadremedy`},"place-task-2980692812-ch-memory-shrinktraitholy":{god:`adolia`,href:`?god=adolia#entry-cleansing-ritual`},"place-task-2980692812-ch-memory-shrinktraitlibrary":{god:`adolia`,href:`?god=adolia#entry-clear-mind`},"place-task-2980692812-ch-memory-shrinktraitmarket":{god:`adolia`,href:`?god=adolia#entry-buy-local-remedy`},"location-settlement-factory":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-aberrant-factory`},"location-settlement-mobilefactory":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-mobile-factory-settlement`},"location-sub-factory-festeringmetal":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-repurposed-structures`},"location-sub-factory-productioncore":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-production-core`},"location-sub-factory-productioncoredestroyed":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-ruined-core`},"location-sub-factory-recycler":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-biometallic-mass`},"location-sub-factory-repo":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-churning-machinery`},"place-hook-3320562229-0":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-place-hook-3320562229-0`},"place-hook-3320562229-1":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-god-place-location-settlement-factory--place-hook-3320562229-1`},"place-task-3320562229-ch-factorygod-recruitlaborer":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-recruit-laborer`},"place-task-3320562229-ch-factorygod-recruitorc":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-recruit-smog-born`},"place-task-3320562229-ch-factorygod-boostproductivity":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-boost-productivity`},"place-task-3320562229-ch-factorygod-boostsmog":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-boost-eldritch-smog`},"place-task-3320562229-ch-factorygod-createunits":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-blood-for-units`},"place-task-3320562229-ch-factorygod-contaminate":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-contaminate-waters`},"place-task-3320562229-ch-factorygod-reestablishcore":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-reestablish-core`},"place-task-3320562229-ch-factorygod-joinde":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-integrate-into-dark-empire`},"place-task-3320562229-mg-factory-smogcold":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-place-task-3320562229-mg-factory-smogcold`},"place-task-3320562229-ch-factorygod-reforgeseals":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-banish-production-core`},"place-task-3320562229-ch-factorygod-clearruins":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-clear-ruined-core`},"place-task-3320562229-ch-factory-stealpops":{god:`aberrant-metal`,href:`?god=aberrant-metal#entry-place-task-3320562229-ch-factory-stealpops`},"location-sub-mek-congregation":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-congregation`},"location-sub-mek-congregationabyssal":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-congregationabyssal`},"location-sub-mek-congregationorc":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-congregationorc`},"location-sub-mek-congregationtower":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-congregationtower`},"location-sub-mek-exiles":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-exiles`},"location-sub-mek-forge":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-forge`},"location-sub-mek-mekhane":{god:`mekhane`,href:`?god=mekhane#entry-location-sub-mek-mekhane`},"location-sub-mek-relay":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-relay`},"location-sub-mek-sarkicfleshthathates":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-sarkicfleshthathates`},"location-sub-mek-sarkictemple":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-sarkictemple`},"location-sub-mek-vault":{god:`mekhane`,href:`?god=mekhane#entry-sub-mek-vault`},"place-hook-3591348120-0":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-0`},"place-hook-3591348120-1":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-1`},"place-hook-3591348120-2":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-2`},"place-hook-3591348120-3":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-3`},"place-hook-3591348120-4":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-4`},"place-hook-3591348120-5":{god:`mekhane`,href:`?god=mekhane#entry-place-hook-3591348120-5`},"place-task-3591348120-ch-divertattention":{god:`mekhane`,href:`?god=mekhane#entry-ch-divertattention`},"place-task-3591348120-ch-storecomponent":{god:`mekhane`,href:`?god=mekhane#entry-ch-storecomponent`},"place-task-3591348120-ch-storecomponentsall":{god:`mekhane`,href:`?god=mekhane#entry-ch-storecomponentsall`},"place-task-3591348120-ch-takecomponent":{god:`mekhane`,href:`?god=mekhane#entry-ch-takecomponent`},"place-task-3591348120-ch-assemblemechanism":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblemechanism`},"place-task-3591348120-ch-assemblerelic":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblerelic`},"place-task-3591348120-ch-assembledivinemachine":{god:`mekhane`,href:`?god=mekhane#entry-ch-assembledivinemachine`},"place-task-3591348120-ch-mek-prayer":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-prayer`},"place-task-3591348120-ch-mek-recruitzealot":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-recruitzealot`},"place-task-3591348120-ch-mek-smithboostmodifier":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-smithboostmodifier`},"place-task-3591348120-ch-mek-smithboostelder":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-smithboostelder`},"place-task-3591348120-ch-mek-smithdanger":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-smithdanger`},"place-task-3591348120-ch-mek-exile-assembledevastation":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-exile-assembledevastation`},"place-task-3591348120-ch-mek-exile-assemblemadness":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-exile-assemblemadness`},"place-task-3591348120-ch-mek-exile-assembleshadow":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-exile-assembleshadow`},"place-task-3591348120-ch-assemblecogworkmechanism":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblecogworkmechanism`},"place-task-3591348120-ch-assemblecogworkmechanismconversion":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblecogworkmechanismconversion`},"place-task-3591348120-ch-assemblecogworkrelic":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblecogworkrelic`},"place-task-3591348120-ch-mek-automaton-basic":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-automaton-basic`},"place-task-3591348120-ch-mek-automaton-sentinel":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-automaton-sentinel`},"place-task-3591348120-ch-mek-automaton-speaker":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-automaton-speaker`},"place-task-3591348120-ch-mek-councilschema":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-councilschema`},"place-task-3591348120-ch-assemblearcanemechanism":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblearcanemechanism`},"place-task-3591348120-ch-assemblearcanemechanismconversion":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblearcanemechanismconversion`},"place-task-3591348120-ch-assemblearcanerelic":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblearcanerelic`},"place-task-3591348120-ch-assemblearcanesecret":{god:`mekhane`,href:`?god=mekhane#entry-ch-assemblearcanesecret`},"place-task-3591348120-ch-mek-maxwellist-infiltrator":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-maxwellist-infiltrator`},"place-task-3591348120-ch-mek-maxwellist-intelligence":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-maxwellist-intelligence`},"place-task-3591348120-ch-mek-sarkicagentinvestigate":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicagentinvestigate`},"place-task-3591348120-ch-mek-sarkicagentexpose":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicagentexpose`},"place-task-3591348120-ch-mek-sarkicdestroytemple":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicdestroytemple`},"place-task-3591348120-ch-mek-vault-raid":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-vault-raid`},"place-task-3591348120-ch-mek-createresourceunearth":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-createresourceunearth`},"place-task-3591348120-ch-buypieces":{god:`mekhane`,href:`?god=mekhane#entry-ch-buypieces`},"place-task-3591348120-ch-buymechanisms":{god:`mekhane`,href:`?god=mekhane#entry-ch-buymechanisms`},"place-task-3591348120-ch-buyrelic":{god:`mekhane`,href:`?god=mekhane#entry-ch-buyrelic`},"place-task-3591348120-ch-mek-maxwellist-connection":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-maxwellist-connection`},"place-task-3591348120-ch-mek-buildcongregation":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-buildcongregation`},"place-task-3591348120-ch-mek-increasemekpreference":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-increasemekpreference`},"place-task-3591348120-ch-mek-rulerschema":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-rulerschema`},"place-task-3591348120-ch-ruintopiece":{god:`mekhane`,href:`?god=mekhane#entry-ch-ruintopiece`},"place-task-3591348120-ch-deathtopiece":{god:`mekhane`,href:`?god=mekhane#entry-ch-deathtopiece`},"place-task-3591348120-ch-madnesstopiece":{god:`mekhane`,href:`?god=mekhane#entry-ch-madnesstopiece`},"place-task-3591348120-ch-deeponestopiececult":{god:`mekhane`,href:`?god=mekhane#entry-ch-deeponestopiececult`},"place-task-3591348120-ch-industrytopiece":{god:`mekhane`,href:`?god=mekhane#entry-ch-industrytopiece`},"place-task-3591348120-ch-mek-councilhide":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-councilhide`},"place-task-3591348120-ch-transferarcanerelics":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-transferarcanerelics`},"place-task-3591348120-ch-mek-vault-recoverarcanerelics":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-vault-recoverarcanerelics`},"place-task-3591348120-ch-mek-vault-recovercogworkrelics":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-vault-recovercogworkrelics`},"place-task-3591348120-ch-mek-vault-recoverrelics":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-vault-recoverrelics`},"place-task-3591348120-ch-mek-hero-exposecongregation":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-exposecongregation`},"place-task-3591348120-ch-mek-hero-investigatemekhanites":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-investigatemekhanites`},"place-task-3591348120-ch-mek-hero-raidcongregation":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-raidcongregation`},"place-task-3591348120-ch-mek-hero-destroyrelic":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-destroyrelic`},"place-task-3591348120-ch-mek-hero-raidcongregation-destroycomponents":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-raidcongregation-destroycomponents`},"place-task-3591348120-ch-mek-hero-convert":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-convert`},"place-task-3591348120-ch-mek-hero-investigateexile":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-investigateexile`},"place-task-3591348120-ch-mek-hero-raidexile":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-raidexile`},"place-task-3591348120-ch-mek-sarkicheroinvestigate":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-sarkicheroinvestigate`},"place-task-3591348120-ch-mek-vault-hero-storerelics":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-vault-hero-storerelics`},"place-task-3591348120-ch-mek-vault-hero-learn":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-vault-hero-learn`},"place-task-3591348120-ch-mek-hero-raisesuspicion":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-raisesuspicion`},"place-task-3591348120-ch-mek-hero-shrinkrotbolt":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-hero-shrinkrotbolt`},"place-task-3591348120-ch-mek-vault-hero-create":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-vault-hero-create`},"place-task-3591348120-ch-mek-exileexperiment":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-exileexperiment`},"place-task-3591348120-ch-mek-sarkichidetemple":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkichidetemple`},"place-task-3591348120-ch-mek-sarkicconvertsecrets":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-sarkicconvertsecrets`},"place-task-3591348120-ch-mek-sarkickarcist":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkickarcist`},"place-task-3591348120-ch-mek-sarkicmutate":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicmutate`},"place-task-3591348120-ch-mek-sarkicrecruit":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicrecruit`},"place-task-3591348120-ch-mek-sarkic-recruitminion":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkic-recruitminion`},"place-task-3591348120-ch-mek-sarkicpreference":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicpreference`},"place-task-3591348120-ch-mek-sarkicsermon":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicsermon`},"place-task-3591348120-ch-mek-sarkicreddeath":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicreddeath`},"place-task-3591348120-ch-mek-sarkic-security":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkic-security`},"place-task-3591348120-ch-mek-sarkicempire":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicempire`},"place-task-3591348120-ch-mek-sarkicgrandkarcist":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkicgrandkarcist`},"place-task-3591348120-ch-mek-sarkictomb":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-sarkictomb`},"place-task-3591348120-ch-mek-increasemekpreferencespeaker":{god:`mekhane`,href:`?god=mekhane#entry-ch-mek-increasemekpreferencespeaker`},"place-task-3591348120-ch-mek-infiltrate":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-infiltrate`},"place-task-3591348120-ch-mek-infiltrateawareness":{god:`mekhane`,href:`?god=mekhane#entry-place-task-3591348120-ch-mek-infiltrateawareness`},"place-task-3591348120-ch-locitopiece":{god:`mekhane`,href:`?god=mekhane#entry-ch-locitopiece`},"location-set-fc-tower":{god:`villikos`,href:`?god=villikos#entry-occupied-settlement`},"place-hook-3647343379-0":{god:`villikos`,href:`?god=villikos#entry-place-hook-3647343379-0`},"place-task-3647343379-ch-fc-oustimperialruler":{god:`villikos`,href:`?god=villikos#entry-ch-fc-oustimperialruler`},"location-set-minorvinerva":{god:`vinerva`,href:`?god=vinerva#entry-heart-location`},"location-set-vinervamanifestation":{god:`vinerva`,href:`?god=vinerva#entry-manifestation-location`},"location-sub-vinerva-heartofforest":{god:`vinerva`,href:`?god=vinerva#entry-location-sub-vinerva-heartofforest`},"place-task-base-ch-harvestseed":{god:`vinerva`,href:`?god=vinerva#entry-harvest-seed`},"place-hook-base-0":{god:`iastur`,href:`?god=iastur#entry-place-hook-base-0`},"place-task-base-ch-summonlaughingtome":{god:`iastur`,href:`?god=iastur#entry-summon-tome`},"place-task-base-ch-weakeniastur":{god:`iastur`,href:`?god=iastur#entry-weaken-iastur`},"location-sub-orcspawningpit":{god:`escamrak`,href:`?god=escamrak#entry-location-sub-orcspawningpit`},"location-set-accidentsite":{god:`thing-from-beyond`,href:`?god=thing-from-beyond#entry-accident-site`},"location-set-fallencoven":{god:`shadow-counsel`,href:`?god=shadow-counsel#entry-destroyed-coven`},"location-set-timerift":{god:`paradoxis`,href:`?god=paradoxis#entry-temporal-rift-site`},"place-task-3232578780-ch-weakencurse":{god:`shadow-counsel`,href:`?god=shadow-counsel#entry-weaken-the-curse`},"place-task-3232578780-ch-backintime":{god:`paradoxis`,href:`?god=paradoxis#entry-close-loop`}},T=[{id:`places-2879667447`,sections:[{id:`places-2879667447-ruler-actions`,title:`统治者行动`,items:[{id:`place-ruler-2879667447-act-blamedeepones`,name:`Blame Deep Ones`,text:`当地 Unrest 减半，世界恐慌临时增加 2 个百分点；加深当地针对 Deep Ones 的偏见。同国内对 Deep Ones 有极端偏好的人物可能改变对领主的好感。`,limit:`由 Deep One Prejudice 提供。Unrest ≥25，且当地有 Deep One Cult；或已有 Sanctum 且深海人口胜利占比至少 35%。`,time:`5 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Cruel`,negativeTags:`Deepones、Combat、Danger`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-requestaidagainstdeepones`,name:`Request Help Against Deep Ones`,text:`当地 Deep One Cult 的 Menace 增加 30，使其更容易成为英雄的目标。对 Deep Ones 极端痴迷的国内人物可能降低对领主的好感。`,limit:`当地有 Deep One Prejudice 与 Deep One Cult。`,time:`10 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Cooperation`,negativeTags:`Deepones、Danger`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-wipeoutdeeponecult`,name:`Destroy Deep One Cult`,text:`移除当地 Deep One Cult，Devastation 增加其强度的一半。君主执行时国家 Menace 减少 20；国内人物可能依照对 Deep Ones 的偏好改变好感。`,limit:`Mod 设置允许毁灭教团，且当地有 Deep One Cult。`,time:`10 回合`,image:`/locations/game/raze.png`,baseGame:!1,positiveTags:`Combat、Cruel`,negativeTags:`Deepones、Cooperation`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-supportdeepones`,name:`Support Deep Ones`,text:`消耗 50 Gold，为 Deep One Cult 增加 20 回合加速成长，Unrest +30。君主执行时国家 Menace +10，其他领主为 +5；国内人物可能改变好感。`,limit:`有 Deep One Sympathies 与 Deep One Cult，Gold ≥50。`,time:`5 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Deepones、Danger`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-establishdeeponecult`,name:`Create Deep One Cult`,text:`建立强度 1 的 Deep One Cult，Unrest +50，已有 Inundai Debt 减少 100。君主执行时国家 Menace +15，其他领主为 +5。完成代码没有扣除 Gold。`,limit:`沿海地点有 Deep One Sympathies，尚无 Deep One Cult；领主极端喜欢 Deep Ones，Gold ≥100。`,time:`10 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Deepones、Religion`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-concealdeepones`,name:`Downplay Deep Ones`,text:`Deep One Cult 的 Menace −30，最低 0；世界恐慌降低 2 个百分点，已有 Inundai Debt −25。君主执行时国家 Menace +10，其他领主为 +5。`,limit:`有 Deep One Sympathies，且 Deep One Cult 的 Menace ≥30。`,time:`10 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Cooperation、Deepones`,negativeTags:`Danger`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-embracedrownedprophet`,name:`Embrace Drowned Prophet`,text:`世界恐慌增加 2 个百分点，移除当地 Deep One Cult 与 Deep One Sympathies，领主死亡，地点归入 Drowned Prophet 教团，并创建规模 15 的 Breathless Horde。`,limit:`Drowned Prophet 存在；所在地已经信仰该教团，或领主极端喜欢 Deep Ones。由 Deep One Sympathies 提供。`,time:`10 回合`,image:`/locations/game/deepOnes.png`,baseGame:!1,positiveTags:`Shadow、Deepones`,negativeTags:`无`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2879667447-act-drownedprophet-breathless`,name:`From the Waters`,text:`在当地创建一个 Breathless 自主单位。`,limit:`有 Drowned Prophet Domain，且所属教团或国家已经完成 Hymn of Transformation。`,time:`7 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconBreathless.png`,baseGame:!1,positiveTags:`Deepones`,negativeTags:`无`,location:`有 Drowned Prophet Domain 的聚居地。`},{id:`place-ruler-2879667447-act-drownedprophet-horde`,name:`Mass Drownings`,text:`创建规模 20 的 Breathless Horde，人口减少随机 1–3，并增加损失人口 ×10 的 Death。人口耗尽则聚居地毁灭。`,limit:`有 Drowned Prophet Domain，且已发起 Abyssal Crusade。`,time:`5 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconBreathless.png`,baseGame:!1,positiveTags:`Deepones`,negativeTags:`无`,location:`有 Drowned Prophet Domain 的聚居地。`},{id:`place-ruler-2879667447-act-drownedprophet-idle`,name:`Worship`,text:`无效果。`,limit:`由 Drowned Prophet Domain 提供。`,time:`7 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconDrownedProphet.png`,baseGame:!1,positiveTags:`Deepones`,negativeTags:`无`,location:`有 Drowned Prophet Domain 的聚居地。`},{id:`place-ruler-2879667447-act-seamonster-destroy`,name:`Destroy Abyssal Corpse`,text:`Abyssal Corpse 强度减半并进入加速销毁状态；已有 Unrest 减少 15。`,limit:`尸体强度 >0，且尚未选择销毁、掠夺或屠宰。`,time:`10 回合`,image:`/locations/game/hideInAbyss.png`,baseGame:!1,positiveTags:`无`,negativeTags:`Deepones、Discord、Madness`,location:`有 Abyssal Corpse 的聚居地。`},{id:`place-ruler-2879667447-act-seamonster-food`,name:`Butcher Abyssal Corpse`,text:`领主获得 50 Gold，已有 Unrest 减少 10；尸体切换为屠宰用途，提高食物供应并加快腐败。`,limit:`当地有正强度 Abyssal Corpse，尚未选择处理用途。`,time:`10 回合`,image:`/locations/game/hideInAbyss.png`,baseGame:!1,positiveTags:`Deepones、Cooperation`,negativeTags:`Discord`,location:`有 Abyssal Corpse 的聚居地。`},{id:`place-ruler-2879667447-act-seamonster-gold`,name:`Pillage Abyssal Corpse`,text:`领主获得 50 Gold；尸体切换为掠夺用途，提高当地 Prosperity 并加快腐败。`,limit:`当地有正强度 Abyssal Corpse，尚未选择处理用途。`,time:`10 回合`,image:`/locations/game/hideInAbyss.png`,baseGame:!1,positiveTags:`Deepones、Gold、Ambition`,negativeTags:`无`,location:`有 Abyssal Corpse 的聚居地。`},{id:`place-ruler-2879667447-act-inundai-acceptpatronage`,name:`Accept Inundai Patronage`,text:`获得 Inundai Patronage，并创建初始债额 −20 的 Inundai Debt。`,limit:`有未被封锁的 Inundai Presence，领主尚无 Inundai Patronage。`,time:`5 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaicult.png`,baseGame:!1,positiveTags:`Madness、Deepones、Ambition`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-blockpresence`,name:`Block Inundai Presence`,text:`消耗 100 Gold，封锁当地 Inundai Presence，Inundai Ire +15。全部 Presence 都被封锁后，移除 Inundai 相关人物特质与修正，将其教团转为普通 Deep One Cult，摧毁 Inundai Palace 并移除使者。`,limit:`当地 Presence 未被封锁；Gold ≥100，领主没有 Inundai Patronage。`,time:`5 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaiblocked.png`,baseGame:!1,positiveTags:`无`,negativeTags:`Deepones、Madness`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-coralstatue`,name:`Incomprehensible Rites`,text:`Sanity −3，已有 Coral Statues 强度 +25，已有 Inundai Debt −50。`,limit:`由 Coral Statues 提供，人口 >1，且当地 Inundai Presence 未被封锁。`,time:`5 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaicoralstatue.png`,baseGame:!1,positiveTags:`Madness、Discord、Deepones`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-createmadness`,name:`Spread Madness`,text:`Madness +15，Unrest +30。`,limit:`由 Inundai Debt 提供。`,time:`5 回合`,image:`/locations/game/madness.png`,baseGame:!1,positiveTags:`Madness、Discord`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-paydebt`,name:`Inundai Debt`,text:`以当地 Madness 的整数部分抵扣债务：足够时债务归零并减少一次欠款记录，不足时按可用量减债并增加一次欠款记录。完成代码未扣除 Madness。`,limit:`领主具有 Inundai Debt，且当地 Inundai Presence 未被封锁。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaithreat.png`,baseGame:!1,positiveTags:`无`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-food`,name:`Writhing Food`,text:`Writhing Food 强度 +30，Inundai Debt +50。`,limit:`由 Inundai Patronage 提供，且当地 Inundai Presence 未被封锁。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaifood.png`,baseGame:!1,positiveTags:`无`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-getwealth`,name:`Golden Scales`,text:`领主获得 25+⌊2 × 当地 Golden Scales 强度⌋ Gold；Golden Scales 强度 +25，Inundai Debt +25。`,limit:`由 Inundai Patronage 提供，且当地 Inundai Presence 未被封锁。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaigold.png`,baseGame:!1,positiveTags:`Gold`,negativeTags:`无`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-sanity`,name:`Protect Sanity`,text:`获得或延长 25 回合的 Sanity 保护；个人 Shadow 增加 15 个百分点，Inundai Debt +100。`,limit:`具有 Inundai Patronage，且当地 Inundai Presence 未被封锁。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaisanity.png`,baseGame:!1,positiveTags:`无`,negativeTags:`Madness`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-retribution`,name:`Promise of Retribution`,text:`个人 Shadow 增加 25 个百分点，Inundai Debt +50；使最厌恶的合格人类或精灵人物 Sanity −5。`,limit:`有 Inundai Patronage、未封锁 Presence，且存在存活、非玩家可控、未疯狂的仇视目标。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaiattack.png`,baseGame:!1,positiveTags:`Cruel`,negativeTags:`Cooperation`,location:`有相应 Inundai 修正或领主特质的聚居地。`},{id:`place-ruler-2879667447-act-inundai-unrest`,name:`Entrance Population`,text:`当地 Entranced Populace 强度 +25，Inundai Debt +50。`,limit:`有 Inundai Patronage、未封锁 Presence，且当地有 Unrest。`,time:`2 回合`,image:`/locations/mod/Wonderblunder_DeepOnes.iconinundaiunrest.png`,baseGame:!1,positiveTags:`无`,negativeTags:`Discord`,location:`有相应 Inundai 修正或领主特质的聚居地。`}]}]},{id:`places-2932110698`,sections:[{id:`places-2932110698-ruler-actions`,title:`统治者行动`,items:[{id:`place-ruler-2932110698-act-nature-destructiveindustry`,name:`Destructive Industry`,text:`领主获得 ⌊45 × Prosperity × 人口/100⌋ Gold，Destructive Industry 增加 5。`,limit:`由 Living Wilds 的聚居地行动更新提供。`,time:`4 回合`,image:`/locations/mod/nature.property_destructive_industry.png`,baseGame:!1,positiveTags:`Gold`,negativeTags:`Nature`,location:`City。`},{id:`place-ruler-2932110698-act-nature-enddestructiveindustry`,name:`End Destructive Industry`,text:`Destructive Industry 减少 5；当前完成代码没有实际扣除 Gold。`,limit:`当地有 Destructive Industry，且领主至少有 50 Gold。`,time:`4 回合`,image:`/locations/mod/nature.property_destructive_industry.png`,baseGame:!1,positiveTags:`Nature`,negativeTags:`Gold`,location:`有 Destructive Industry 的聚居地。`},{id:`place-ruler-2932110698-act-nature-naturesanctuary`,name:`Nature Sanctuary`,text:`消耗 60 Gold，在相邻选定空地建立 Nature Sanctuary，保留原 Shadow。`,limit:`有合格相邻空地，统治者 Gold ≥60。`,time:`4 回合`,image:`/locations/mod/nature.property_sanctuary.png`,baseGame:!1,positiveTags:`Nature`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-2932110698-act-nature-organizehunt`,name:`Organize Hunt`,text:`消耗 50 Gold，在目标地建立强度 100 的 Wild Game，英雄可狩猎并为领主所在地补充食物；增加 125 狩猎冷却。`,limit:`已选出合格狩猎地点，尚无对应 Wild Game，Gold ≥50。`,time:`4 回合`,image:`/locations/mod/nature.property_wildgame.png`,baseGame:!1,positiveTags:`Nature`,negativeTags:`Gold`,location:`City。`},{id:`place-ruler-2932110698-act-nature-plundersanctuary`,name:`Plunder Sanctuary`,text:`移除相邻 Nature Sanctuary，留下强度 100 的 Plundered Sanctuary，领主获得 40 Gold。`,limit:`所在地受到对应 Nature Sanctuary 影响。`,time:`4 回合`,image:`/locations/game/bribe.png`,baseGame:!1,positiveTags:`Gold`,negativeTags:`Nature`,location:`与 Nature Sanctuary 相邻、受到其修正影响的聚居地。`},{id:`place-ruler-2932110698-act-nature-werewolfgridlock`,name:`Absent Ruler`,text:`狼人领主外出期间暂停正常治理；Unrest ≥200 时领主被撤换，并使 Unrest 减少 100。`,limit:`由正在外出变形的狼人领主特质提供。`,time:`1 回合`,image:`/locations/mod/nature.property_werewolfpack.png`,baseGame:!1,positiveTags:`无`,negativeTags:`无`,location:`狼人领主外出期间的聚居地。`}]}]},{id:`places-2932765110`,sections:[{id:`places-2932765110-ruler-actions`,title:`统治者行动`,items:[{id:`place-ruler-2932765110-act-raiselucidity`,name:`Encourage Lucidity`,text:`当地已有 Lucidity 强度增加 15。`,limit:`当地有提供该行动的 Magic Plague，统治者未陷入 Insane。`,time:`7 回合`,image:`/locations/mod/CovenExpansionRecast.Icon_Lucid.png`,baseGame:!1,positiveTags:`无`,negativeTags:`Disease、Madness`,location:`有 Magic Plague 的人类体系聚居地。`}]}]},{id:`places-base`,sections:[{id:`places-base-ruler-actions`,title:`统治者行动`,items:[{id:`place-ruler-base-act-muster`,name:`Muster Defences`,text:`消耗 10 Gold，防御增加 25。`,limit:`当前防御低于上限，统治者至少有 10 Gold。`,time:`7 回合`,image:`/locations/game/muster.png`,baseGame:!0,positiveTags:`Combat`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-treatdisease`,name:`Inoculate Population`,text:`Plague Immunity 增加 15。`,limit:`无额外限制。`,time:`7 回合`,image:`/locations/game/plagueImmunity.png`,baseGame:!0,positiveTags:`无`,negativeTags:`Disease`,location:`City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。`},{id:`place-ruler-base-act-wardagainstshadow`,name:`Ward Against Shadow`,text:`Ward 增加 100，阻止 Shadow 向当地传播。`,limit:`世界平均 Shadow 超过 1%。`,time:`7 回合`,image:`/locations/game/driveBackShadow.png`,baseGame:!0,positiveTags:`无`,negativeTags:`Shadow`,location:`City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。`},{id:`place-ruler-base-act-taxcitizens`,name:`Tax Citizens`,text:`统治者获得 ⌊45 × Prosperity × 人口/100⌋ Gold；Unrest 增加 20。`,limit:`无额外限制。`,time:`4 回合`,image:`/locations/game/tax.png`,baseGame:!0,positiveTags:`Gold`,negativeTags:`无`,location:`City、小型人类聚居地、Dwarven City 或 Dwarven Outpost。`},{id:`place-ruler-base-act-festival`,name:`Hold Festival`,text:`消耗 50 Gold，Unrest 减少 20。`,limit:`统治者至少有 50 Gold。`,time:`2 回合`,image:`/locations/game/festival.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`Gold、Cruel、Discord`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-fundchosenone`,name:`Fund Chosen One`,text:`完成时统治者至少有 10 Gold，便将当前 Gold 的 25%（向下取整）转交 Chosen One。`,limit:`Chosen One 存在、世界恐慌至少 15%。当前实现额外要求统治者 Awareness ≥10，正常 0–100% 范围内无法满足。`,time:`3 回合`,image:`/locations/game/tax.png`,baseGame:!0,positiveTags:`Cooperation、目标人物的正面标签`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-fundhero`,name:`Fund [Hero]`,text:`将统治者当前 Gold 的 25%（向下取整）转交以当地为家乡的目标英雄。`,limit:`非教程；目标存活且已有单位，并且不是自主邪恶人物。世界恐慌至少 15%，矮人统治者不受这一恐慌门槛限制。`,time:`3 回合`,baseGame:!0,positiveTags:`Cooperation、目标人物的正面标签`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-sabotagevisitor`,name:`Sabotage Visitor`,text:`从适用效果中等概率选一项：目标最多损失 50 Gold；Menace 增加 10；非玩家可控目标被打断 5 回合；正在执行且进度超过 20 的挑战失去 20 进度。`,limit:`当地或相邻地点有统治者厌恶的人物；候选检查排除自主邪恶人物。`,time:`2 回合`,image:`/locations/game/vendetta.png`,baseGame:!0,positiveTags:`Cruel`,negativeTags:`Cooperation`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-sabotageotherruler`,name:`Sabotage Other Ruler`,text:`选取本国统治者最厌恶的另一名领主，等概率造成：Political Gridlock、最多损失 100 Gold，或当地 Unrest 增加 100。`,limit:`本国有统治者厌恶的领主。`,time:`2 回合`,image:`/locations/game/vendetta.png`,baseGame:!0,positiveTags:`Cruel`,negativeTags:`Cooperation`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-raisearmy`,name:`Raise Army`,text:`创建一支 Human Army，成为当地驻军。`,limit:`当地没有配属军队；普通人类聚居地还须是首都或主要地点。`,time:`7 回合`,image:`/locations/game/humanArmy.png`,baseGame:!0,positiveTags:`Combat`,negativeTags:`无`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-exposecultists`,name:`Expose Cultists`,text:`创建 Cultists Exposed，使英雄可以调查并逮捕当地渗透者。`,limit:`使用对应 Alliance 规则，且 Infiltration 大于 0、尚无 Cultists Exposed。`,time:`6 回合`,image:`/locations/game/cultExposed.png`,baseGame:!0,positiveTags:`Cooperation、Cruel`,negativeTags:`Shadow、Discord`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-agitateagainstsovereign`,name:`Agitate Against Sovereign`,text:`Political Agitation 增加 35。`,limit:`普通 City，属于国家且不是首都。`,time:`7 回合`,image:`/locations/game/agitate.png`,baseGame:!0,positiveTags:`Ambition`,negativeTags:`Cooperation、君主的标签`,location:`非首都的 City。`},{id:`place-ruler-base-act-attackagent`,name:`Hunt [Agent]`,text:`命令当地英雄追杀目标，并创建 Cavalry Escort 护送。`,limit:`启用军事护卫；存在合格的非玩家英雄和本城军队。目标 Profile ≥50、Menace >25，且未躲藏；Chosen One 不能被指定为追杀英雄。`,time:`7 回合`,baseGame:!0,positiveTags:`Combat`,negativeTags:`目标人物的标签`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-attackarmy`,name:`Engage [Army]`,text:`命令以当地为家乡的 Human Army 攻击目标军队。`,limit:`当地有本国配属军队；目标是 Menace 大于 0 的游荡军队。跨层行动还受地下认知限制。`,time:`7 回合`,baseGame:!0,positiveTags:`Combat、Danger`,negativeTags:`目标人物的标签；无人物时采用目标军队的正面标签`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-fundoutpost`,name:`Fund [Outpost]`,text:`将当前 Gold 的 50%（向下取整）投入本国 Outpost。`,limit:`统治者 Gold >10；Outpost 仍存在且资金不超过 200。`,time:`1 回合`,image:`/locations/game/humanColony.png`,baseGame:!0,positiveTags:`Cooperation、Ambition`,negativeTags:`Gold`,location:`符合条件的有人类体系统治者的聚居地。`},{id:`place-ruler-base-act-reduceunrest`,name:`Reduce Unrest`,text:`消耗 10 Gold，Unrest 减少 25。`,limit:`Unrest 大于 0，统治者至少有 10 Gold。`,time:`7 回合`,image:`/locations/game/reduceUnrest.png`,baseGame:!0,positiveTags:`无`,negativeTags:`Gold、Discord`,location:`有 Unrest 的人类体系聚居地。`},{id:`place-ruler-base-act-brutalcrackdown`,name:`Brutal Crackdown`,text:`Unrest 减少 40，Death 增加 5，并创建强度 30 的 Lingering Resentment。`,limit:`Unrest 大于 0。`,time:`7 回合`,image:`/locations/game/brutalJustice.png`,baseGame:!0,positiveTags:`Cruel`,negativeTags:`Discord`,location:`有 Unrest 的人类体系聚居地。`},{id:`place-ruler-base-act-supportconclave`,name:`Support Conclave`,text:`对应 Conclave 强度增加 25，上限 300，降低被破坏的风险。`,limit:`统治者是该 Conclave Opportunity 指定的人物。`,time:`10 回合`,image:`/locations/game/conclave.png`,baseGame:!0,positiveTags:`Cooperation、Chosen One 的正面标签`,negativeTags:`无`,location:`有 Conclave Opportunity 的人类体系聚居地。`},{id:`place-ruler-base-act-deepone-humanity`,name:`Maintain Humanity`,text:`Call of the Abyss 强度归零，抵抗造成的疲惫增加 3。`,limit:`统治者具有提供该行动的 Call of the Abyss。`,time:`7 回合`,image:`/locations/game/deepOnes.png`,baseGame:!0,positiveTags:`无`,negativeTags:`Deepones`,location:`具有 Call of the Abyss 的领主所在聚居地。`},{id:`place-ruler-base-act-deepone-descend`,name:`Descend into the Deep`,text:`Call of the Abyss 强度归零；领主离开职位，变为同一人物对应的 Deep One 自主单位。`,limit:`统治者具有提供该行动的 Call of the Abyss。`,time:`7 回合`,image:`/locations/game/deepOnes.png`,baseGame:!0,positiveTags:`Deepones`,negativeTags:`Danger`,location:`具有 Call of the Abyss 的领主所在聚居地。`},{id:`place-ruler-base-act-goldlikethesun`,name:`Gold like the Sun`,text:`消耗 10 Gold，统治者个人 Shadow 归零，当地 Shadow 减半。`,limit:`矮人统治者，Gold ≥10，个人 Shadow >20%。`,time:`2 回合`,image:`/locations/game/sacrificeGold.png`,baseGame:!0,positiveTags:`无`,negativeTags:`Gold、Shadow`,location:`Dwarven City 或 Dwarven Outpost。`},{id:`place-ruler-base-act-e-recruitwayfinder`,name:`Recruit Wayfinder`,text:`创建一名 Elven Wayfinder。`,limit:`精灵国家首都，且本国没有存活的 Wayfinder。`,time:`7 回合`,image:`/locations/game/humanArmy.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`无`,location:`Elven City，且为精灵国家首都。`},{id:`place-ruler-base-act-e-recruitcrystalsmith`,name:`Recruit Crystalsmith`,text:`创建一名 Elven Crystalsmith。`,limit:`精灵国家首都，且本国没有存活的 Crystalsmith。`,time:`7 回合`,image:`/locations/game/humanArmy.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`无`,location:`Elven City，且为精灵国家首都。`},{id:`place-ruler-base-act-e-expand`,name:`Expand`,text:`消耗 60 Gold，在相邻合格地点建立 Elven City；新城人口为人口上限的 20%（向上取整），Shadow 继承领主个人 Shadow。`,limit:`邻地须为无人控制的非海洋空地或 Ruins，宜居度至少 15%。`,time:`20 回合`,image:`/locations/game/humanColony.png`,baseGame:!0,positiveTags:`Cooperation、Ambition`,negativeTags:`Gold`,location:`Elven City。`},{id:`place-ruler-base-an-quarantine`,name:`Impose Quarantine`,text:`消耗 25 Gold，给国内已有 Plague 的人类体系聚居地设置强度 25 的 Quarantine。`,limit:`君主至少有 25 Gold。`,time:`7 回合`,image:`/locations/game/quarantine.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`Disease、Danger、Gold`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-appeasenobles`,name:`Appease Nobles`,text:`消耗 45 Gold，首都 Political Instability 减少 20。`,limit:`君主至少有 45 Gold。`,time:`7 回合`,image:`/locations/game/crown.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`Gold`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-taxnobles`,name:`Tax Nobles`,text:`从各非首都普通 City 的领主处收取其 Gold 的 25%（向下取整）；各城 Political Agitation 增加 8 ×（领主 Gold 偏好等级+2）。`,limit:`国家拥有多座普通 City，或属于矮人国家。`,time:`4 回合`,image:`/locations/game/tax.png`,baseGame:!0,positiveTags:`Gold`,negativeTags:`Cooperation`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-abdicate`,name:`Abdicate`,text:`君主退位，Political Instability 减少 150；没有人物单位的原君主成为 Warrior。`,limit:`Political Instability >200，距离上次退位至少 20 回合。`,time:`1 回合`,image:`/locations/game/abdicate.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`Ambition、Gold、Danger`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-appointstatereligion`,name:`Appoint State Religion`,text:`消耗 100 Gold，把全国聚居地的宗教改为首都宗教；被迫改信的领主对君主好感降低 1 级，移除异教 Temple。Ophanim 教团的聚居地保留其信仰。`,limit:`君主至少有 100 Gold。`,time:`7 回合`,image:`/locations/game/temple.png`,baseGame:!0,positiveTags:`首都教团的标签；无教团时为无`,negativeTags:`Religion`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-formalliance`,name:`Form Alliance`,text:`成立或加入 Alliance；本国 Shadow >50% 的非首都普通城市可能先分裂。存在合格 Alliance 时，领地、人物与军队并入其中。`,limit:`国家不属于 Alliance、Dark Empire 或 Ophanim Theocracy；完成时君主 Shadow 不超过 50%。`,time:`3 回合`,image:`/locations/game/alliance.png`,baseGame:!0,positiveTags:`Cooperation`,negativeTags:`Shadow`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-declarewar`,name:`War: Invasion`,text:`向目标国家宣战，当前外交关系值减半。`,limit:`目标支持常规外交，且双方尚未交战。`,time:`7 回合`,image:`/locations/game/war.png`,baseGame:!0,positiveTags:`Combat、Danger、Cruel、Ambition`,negativeTags:`目标国家的标签；目标有君主时采用君主的标签`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-improverelations`,name:`Improve Relations`,text:`外交关系增加 0.05，上限 1；双方都受 Ophanim 控制时直接设为 1。`,limit:`目标是三步内支持常规外交的国家，关系尚未达到上限。`,time:`7 回合`,image:`/locations/game/diplomacy.png`,baseGame:!0,positiveTags:`Cooperation、目标国家或其君主的标签`,negativeTags:`Combat、Cruel、Danger；国家间距离小于 3 时另含 Ambition`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-worsenrelationship`,name:`Worsen Relatioship`,text:`外交关系减少 0.25，下限 −1。`,limit:`目标是三步内支持常规外交的国家，关系尚未达到下限。`,time:`5 回合`,image:`/locations/game/badDiplomacy.png`,baseGame:!0,positiveTags:`Combat、Danger、Ambition`,negativeTags:`目标国家的标签；目标有君主时采用君主的标签`,location:`国家首都，由君主执行。`},{id:`place-ruler-base-an-razesubsettlement`,name:`Raze [Interest Point]`,text:`派最近的空闲 Human Army 前往摧毁目标兴趣点。`,limit:`目标 Menace >0、不能在聚居地毁灭后保留；目标领土无人控制、由本国或邪恶势力控制。`,time:`7 回合`,image:`/locations/game/raze.png`,baseGame:!0,positiveTags:`Combat`,negativeTags:`目标兴趣点的标签`,location:`国家首都，由君主执行。`}]}]}],E=[{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-blamedeepones`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-requestaidagainstdeepones`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-wipeoutdeeponecult`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-supportdeepones`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-establishdeeponecult`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-concealdeepones`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-embracedrownedprophet`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-drownedprophet-breathless`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-drownedprophet-horde`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-drownedprophet-idle`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-seamonster-destroy`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-seamonster-food`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-seamonster-gold`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-acceptpatronage`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-blockpresence`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-coralstatue`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-createmadness`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-paydebt`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-food`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-getwealth`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-sanity`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-retribution`]},{scope:`places-2879667447`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2879667447-act-inundai-unrest`]},{scope:`places-2932110698`,hosts:[`location-set-city`],entryIds:[`place-ruler-2932110698-act-nature-destructiveindustry`]},{scope:`places-2932110698`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2932110698-act-nature-enddestructiveindustry`]},{scope:`places-2932110698`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2932110698-act-nature-naturesanctuary`]},{scope:`places-2932110698`,hosts:[`location-set-city`],entryIds:[`place-ruler-2932110698-act-nature-organizehunt`]},{scope:`places-2932110698`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2932110698-act-nature-plundersanctuary`]},{scope:`places-2932110698`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2932110698-act-nature-werewolfgridlock`]},{scope:`places-2932765110`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-2932765110-act-raiselucidity`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-muster`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-treatdisease`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-wardagainstshadow`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-taxcitizens`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-festival`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-fundchosenone`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-fundhero`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-sabotagevisitor`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-sabotageotherruler`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-raisearmy`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-exposecultists`]},{scope:`places-base`,hosts:[`location-set-city`],entryIds:[`place-ruler-base-act-agitateagainstsovereign`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-attackagent`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-attackarmy`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-fundoutpost`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-reduceunrest`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-brutalcrackdown`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-supportconclave`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-deepone-humanity`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-minorhuman`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-deepone-descend`]},{scope:`places-base`,hosts:[`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-act-goldlikethesun`]},{scope:`places-base`,hosts:[`location-set-elvencity`],entryIds:[`place-ruler-base-act-e-recruitwayfinder`]},{scope:`places-base`,hosts:[`location-set-elvencity`],entryIds:[`place-ruler-base-act-e-recruitcrystalsmith`]},{scope:`places-base`,hosts:[`location-set-elvencity`],entryIds:[`place-ruler-base-act-e-expand`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-quarantine`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-quarantine`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-appeasenobles`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-appeasenobles`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-taxnobles`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-taxnobles`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-abdicate`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-abdicate`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-appointstatereligion`]},{scope:`places-base`,hosts:[`location-sub-temple`],entryIds:[`place-ruler-base-an-appointstatereligion`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-appointstatereligion`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-formalliance`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-formalliance`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-declarewar`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-declarewar`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-improverelations`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-improverelations`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-worsenrelationship`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-worsenrelationship`]},{scope:`places-base`,hosts:[`location-set-city`,`location-set-elvencity`,`location-set-dwarvencity`,`location-set-dwarvenoutpost`],entryIds:[`place-ruler-base-an-razesubsettlement`]},{scope:`places-base`,hosts:[`location-sub-temple`,`location-sub-witchcoven`],entryIds:[`place-ruler-base-an-razesubsettlement`]},{scope:`places-base`,hosts:[`location-sub-city`],entryIds:[`place-ruler-base-an-razesubsettlement`]}],D=new Set(g.flatMap(e=>e.sections.filter(e=>e.id.endsWith(`-unplaced`)).flatMap(e=>e.items.map(e=>e.id)))),O=u(g,e=>[e.id,e.title]).map(e=>{let t=e.sections.filter(e=>!e.id.endsWith(`-unplaced`)).map(e=>({...e,items:e.items.map(e=>{let t=S[e.id];if(!t)return{...e};let n=e.text.split(`

`);return n.splice(1,0,`Temperature
`+t.temperature,`Prosperity
`+t.prosperity),{...e,text:n.join(`

`)}})})),n=T.find(t=>t.id===e.id);n&&t.push(...n.sections);let r=new Map;for(let t of E.filter(t=>t.scope===e.id))for(let e of t.hosts)r.has(e)||r.set(e,new Set),t.entryIds.forEach(t=>r.get(e).add(t));let i=new Map((n?.sections??[]).flatMap(e=>e.items.map(e=>[e.id,e])));for(let[n,a]of r){let r=`

统治者行动：
`+[...a].map(e=>`<CrossReference name="`+i.get(e).name+`" href="#entry-`+e+`" />`).join(`、`),o=t.flatMap(e=>e.items).find(e=>e.id===n);if(o){o.text+=r;continue}let s=g.flatMap(e=>e.sections.flatMap(e=>e.items)).find(e=>e.id===n);if(!s)continue;let c=t.find(e=>e.id.endsWith(`-extensions`));c||(c={id:e.id+`-ruler-extensions`,title:`条件性行动入口`,items:[]},t.push(c)),c.items.push({id:`place-hook-rulers-`+e.id+`-`+n,name:s.name+` · 统治者行动`,image:s.image,text:`对应地点 / 兴趣点
<CrossReference name="`+s.name+`" href="#entry-`+n+`" />`+r})}return{...e,sections:t}}),k=O.map(e=>({...e,description:e.id===`places-base`?`人类、精灵、矮人、Orc、Deep Ones 与奇观相关的通用地点和兴趣点。`:e.description,sections:e.sections.map(e=>({...e,items:e.items.filter(e=>!w[e.id]&&e.id!==`place-hook-kalastrophe-defile`)})).filter(e=>e.items.length)})).filter(e=>e.sections.length),A=O.flatMap(e=>e.sections),j=A.flatMap(e=>e.items),M=new Map(j.map(e=>[e.id,e])),N=new Map(A.flatMap(e=>e.items.map(t=>[t.id,e.title]))),P=e=>e.id?.startsWith(`location-`),F=e=>e.id?.startsWith(`location-sub-`)?`points-of-interest`:`locations`,I=e=>[...e.matchAll(/href="#entry-([^"]+)"/g)].map(e=>e[1]),L=e=>[...new Set(e.flatMap(e=>I(e.text)).filter(e=>/^place-(?:task|ruler)-/.test(e)&&!w[e]))],R=e=>{let t=e.text.split(`

`).find(e=>e.startsWith(`对应地点 / 兴趣点`));return t?I(t).filter(e=>M.has(e)&&P(M.get(e))):[]},z=e=>e.image??R(e).map(e=>M.get(e)?.image).find(Boolean),B=/^(?:共同行动|英雄任务|挑战|宗教任务|自主单位任务|统治者行动)：/,V=e=>e.split(`

`).filter(e=>!B.test(e)).join(`

`),H=e=>{let t=new Map;for(let n of e){let e=M.get(n);if(!e)continue;let r=N.get(n);t.set(r,[...t.get(r)??[],e])}return[...t].map(([e,t])=>({title:e,items:t}))};function U(e){return k.map(t=>{let n=t.sections.flatMap(e=>e.items).filter(t=>P(t)&&F(t)===e),r=t.sections.filter(e=>e.id.endsWith(`-extensions`)).flatMap(e=>e.items),i=new Set,a=n.map(n=>{let a=r.filter(e=>R(e).includes(n.id));a.forEach(e=>i.add(e.id));let o={...n,text:V(n.text)};return{id:`place-article-`+n.id,name:n.name,image:n.image,unplaced:t.sections.some(e=>e.id.endsWith(`-unplaced`)&&e.items.includes(n)),blocks:[{title:e===`locations`?`地点`:`兴趣点`,items:[o]},...a.length?[{title:`条件性行动入口`,items:a.map(e=>({...e,image:z(e),text:V(e.text)}))}]:[],...H(L([n,...a]))]}}),o=[...new Set(r.filter(e=>!i.has(e.id)).flatMap(R))].filter(t=>F(M.get(t))===e&&!n.some(e=>e.id===t));for(let e of o){let n=M.get(e),o=r.filter(t=>R(t).includes(e));o.forEach(e=>i.add(e.id)),a.push({id:t.id+`-extension-`+e,name:n.name+` · 扩展`,image:n.image,blocks:[{title:`条件性行动入口`,items:o.map(e=>({...e,image:z(e),text:V(e.text)}))},...H(L(o))]})}if(e===`locations`)for(let e of r.filter(e=>!R(e).length))a.push({id:`place-article-`+e.id,name:e.name,image:z(e),blocks:[{title:`条件性行动入口`,items:[{...e,image:z(e),text:V(e.text)}]},...H(L([e]))]});return{id:t.id,title:t.title,description:t.description,articles:a}}).filter(e=>e.articles.length)}var W=new Map,G=new Map([[`locations`,U(`locations`)],[`points-of-interest`,U(`points-of-interest`)]]),K=new Set([...G.values()].flatMap(e=>e.flatMap(e=>e.articles.flatMap(e=>e.blocks.flatMap(e=>e.items.map(e=>e.id))))));for(let e of k){let t=e.sections.flatMap(e=>e.items).filter(e=>e.id?.startsWith(`place-task-`)&&!K.has(e.id));if(!t.length)continue;let n=G.get(`locations`),r=n.find(t=>t.id===e.id);r||(r={id:e.id,title:e.title,description:e.description,articles:[]},n.push(r)),r.articles.push({id:e.id+`-additional-actions`,name:`其他地点行动`,blocks:H(t.map(e=>e.id))})}for(let e of G.values())e.sort((e,t)=>k.findIndex(t=>t.id===e.id)-k.findIndex(e=>e.id===t.id));var q=new Map;for(let[e,t]of G){let n=t.find(e=>e.id===`places-base`);if(!n)continue;let r={},i=[];for(let t of C[e]){let e=n.articles.filter(e=>t.hosts.includes(e.id.replace(`place-article-`,``))),a=new Set(t.actions),o=new Map,s=e.map(e=>e.name).join(`、`),c=`<CrossReference name="`+t.name+`" href="#`+t.id+`" meta="共用行动" text="适用范围：`+s+`。仍需满足各行动的执行条件。" />`;for(let t of e){for(let e of t.blocks)e.items=e.items.filter(n=>{if(!a.has(n.id))return!0;let i=o.get(e.title)??{title:e.title,items:[]};return i.items.some(e=>e.id===n.id)||i.items.push(n),o.set(e.title,i),r[`entry-`+t.id+`--`+n.id]=n.id,!1});t.blocks=t.blocks.filter(e=>e.items.length);let e=t.blocks.find(e=>[`地点`,`兴趣点`].includes(e.title))?.items[0];e&&(e.text+=`

可以执行：`+c+`。`)}o.size&&i.push({id:t.id,name:t.name,description:`适用范围：`+e.map(e=>{let t=e.blocks.find(e=>[`地点`,`兴趣点`].includes(e.title)).items[0];return`<CrossReference name="`+e.name+`" href="#entry-`+t.id+`" />`}).join(`、`)+`。`,blocks:[...o.values()]})}n.articles.unshift(...i),q.set(e,Object.fromEntries(Object.entries(r).map(([e,t])=>[e,`entry-`+t])))}var J=new Map;for(let[e,t]of G){let n=new Set;for(let r of t)for(let t of r.articles)for(let r of t.blocks)r.items=r.items.map(r=>{let i=r.id,a=n.has(i)?t.id+`--`+i:i;n.add(i);let o=J.get(i)??new Map;return o.has(e)||o.set(e,a),J.set(i,o),{...r,id:a}})}var Y=e=>e.replace(/<CrossReference name="([^"]+)"[^>]*\/>/g,`$1`).replaceAll(`"`,`“`);for(let[e,t]of G){let n=(t,n=new Map)=>t.replace(/<CrossReference name="([^"]+)" href="#entry-([^"]+)"\s*\/>/g,(t,r,i)=>{if(D.has(i))return r;let a=n.get(i)??J.get(i)?.get(e);if(a)return`<CrossReference name="`+r+`" href="#entry-`+a+`" />`;let o=[...J.get(i)?.entries()??[]][0],s=w[i],c=M.get(i);if(!o&&!s||!c)return t;let l=Y([c.text,c.location&&`执行地点：`+c.location,c.meta,c.statLine,c.limit&&`执行条件：`+c.limit].filter(Boolean).join(`
`)),u=P(c)?F(c)===`locations`?`地点`:`兴趣点`:N.get(i)??``;return`<CrossReference name="`+r+`" href="`+(s?.href??`?page=`+o[0]+`#entry-`+o[1])+`" meta="`+u+`" text="`+l+`"`+(c.image?` image="`+c.image+`"`:``)+` />`}),r=(e,t)=>({...e,text:n(e.text,t),location:e.location?n(e.location,t):void 0,limit:e.limit?n(e.limit,t):void 0});for(let e of t)for(let t of e.articles){t.description&&=n(t.description);let e=new Map(t.blocks.flatMap(e=>e.items.map(e=>[e.id.split(`--`).at(-1),e.id])));for(let n of t.blocks)n.items=n.items.map(t=>r(t,e))}let i=h.map(e=>r({...e,text:e.id===`place-model`?`地点是地图上的聚居地或野外地点载体；兴趣点是附加在地点内的具体设施。
每个条目分别列出自身提供的挑战与任务；地点修正、单位、神祇与 Mod 追加的行动另注明条件。实际能否执行还取决于执行者、渗透、资源、信仰及世界状态。`:e.text})),a=[{id:`place-guide`,title:`阅读说明`,items:i},...t.flatMap(e=>e.articles.flatMap(e=>e.blocks.map((t,n)=>({id:e.id+`-block-`+n,title:t.title,items:t.items}))))],o=Object.fromEntries(Object.entries(w).map(([e,t])=>[`entry-`+e,t.href]));for(let[t,n]of J)if(!n.has(e)){let[e,r]=[...n][0];o[`entry-`+t]=`?page=`+e+`#entry-`+r}W.set(e,{kind:e,title:e===`locations`?`地点`:`兴趣点`,sources:t,intro:i,redirects:o,aliases:q.get(e)??{},config:{id:e,assetDir:`locations`,autoLink:!1,powers:[],sections:a}})}function X(e){return W.get(e)}var Z=r();function Q({onReturn:r,kind:i=`locations`}){let u=X(i),{config:h,title:g,sources:_,intro:v}=u,y=h.sections.flatMap(e=>e.items.map(e=>`entry-`+e.id)),{sidebarHidden:b,setSidebarHidden:x,closeMobileSidebar:S,onSidebarClick:C}=s(),[w,T]=(0,m.useState)(new Set),E=e=>T(t=>new Set(t).add(e)),D=e=>T(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),O=p(E,u.aliases);(0,m.useEffect)(()=>{let e=()=>{let e=u.redirects[window.location.hash.slice(1)];e&&window.location.replace(e)};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[u]);let k=[{name:`阅读说明`,entries:[{href:`#place-guide`,label:g}]},..._.map(e=>({name:e.title,entries:e.articles.map(e=>({href:`#`+e.id,label:e.name}))}))];return(0,Z.jsxs)(`main`,{className:`site-shell base-modifiers-theme locations-theme`+(b?` sidebar-hidden`:``),onClick:O,children:[(0,Z.jsx)(a,{hidden:b,onClose:S}),(0,Z.jsxs)(`aside`,{className:`sidebar`,onClick:C,children:[(0,Z.jsxs)(`div`,{className:`sidebar-head`,children:[(0,Z.jsxs)(`div`,{className:`sidebar-brand`,children:[(0,Z.jsx)(`span`,{className:`brand-mark`,children:i===`locations`?(0,Z.jsx)(l,{size:17}):(0,Z.jsx)(e,{size:17})}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`b`,{children:g}),(0,Z.jsx)(`small`,{children:`其他信息`})]})]}),(0,Z.jsx)(`button`,{className:`sidebar-toggle`,type:`button`,"aria-expanded":!b,"aria-label":b?`展开侧边栏`:`收起侧边栏`,onClick:()=>x(e=>!e),children:b?(0,Z.jsx)(n,{size:17}):(0,Z.jsx)(o,{size:17})})]}),(0,Z.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`}),(0,Z.jsxs)(`div`,{className:`sidebar-bulk`,children:[(0,Z.jsx)(`button`,{type:`button`,onClick:()=>T(new Set(y)),children:`全部展开`}),(0,Z.jsx)(`button`,{type:`button`,onClick:()=>T(new Set),children:`全部收起`})]}),(0,Z.jsx)(f,{groups:k,label:g+`导航`})]}),(0,Z.jsxs)(`div`,{className:`content-shell`,children:[(0,Z.jsxs)(`header`,{id:`top`,className:`modifier-library-header`,children:[(0,Z.jsx)(`h1`,{children:g}),(0,Z.jsxs)(`p`,{children:[i===`locations`?`每个地点单独分栏，列出其介绍、可能配置的兴趣点、挑战与任务。`:`每个兴趣点单独分栏，列出其出现地点、功能、挑战与任务。`,`先列游戏本体，再按 Mod 分栏；神祇限定内容见对应神祇页面。`]})]}),(0,Z.jsxs)(`section`,{className:`section location-guide`,id:`place-guide`,children:[(0,Z.jsx)(`h2`,{children:`阅读说明`}),(0,Z.jsx)(d,{config:h,items:v,openEntries:w,onToggle:D})]}),_.map(e=>(0,Z.jsxs)(`div`,{className:`location-collection`,id:e.id,children:[(0,Z.jsxs)(`header`,{className:`location-collection-heading`,children:[(0,Z.jsx)(`p`,{className:`section-index`,children:[`places-base`,`places-cordyceps`].includes(e.id)?`游戏本体`:`Mod`}),(0,Z.jsx)(`h2`,{children:e.title})]}),e.articles.map(e=>(0,Z.jsxs)(`section`,{className:`section location-article`,id:e.id,children:[(0,Z.jsxs)(`header`,{className:`location-article-heading`,children:[e.image&&(0,Z.jsx)(t,{src:e.image,size:72}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h3`,{children:e.name}),e.unplaced&&(0,Z.jsx)(`p`,{children:`未找到正常生成路径`})]})]}),e.description&&(0,Z.jsx)(`p`,{className:`location-common-scope`,children:(0,Z.jsx)(c,{config:h,text:e.description})}),e.blocks.map((e,t)=>(0,Z.jsxs)(`div`,{className:`location-article-block`+([`地点`,`兴趣点`,`条件性行动入口`].includes(e.title)?` place-overview`:``),children:[(0,Z.jsx)(`h4`,{children:[`地点`,`兴趣点`].includes(e.title)?`介绍`:e.title}),(0,Z.jsx)(d,{config:h,items:e.items,openEntries:w,onToggle:D})]},t))]},e.id))]},e.id)),(0,Z.jsx)(`footer`,{className:`archive-footer`,children:(0,Z.jsx)(`a`,{className:`sidebar-index-link`,href:`./`,children:`← 返回索引页`})})]})]})}export{Q as default};