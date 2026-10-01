import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import vm from "node:vm";
import { registerHooks } from "node:module";
registerHooks({resolve(s,c,next) {
 if(s.startsWith(".") && c.parentURL && !/\.[cm]?[jt]sx?$/.test(s)) {
  const u = new URL(s+".ts",c.parentURL);
  if(fs.existsSync(u))return next(u.href,c);
 }
 return next(s,c);
}});
const { eventGroups } = await import("../app/EventCatalogueModel.ts");
const { prepareGodConfig } = await import("../app/GodArchiveTypes.ts");
const { godEventBindings } = await import("../app/GodEventBindings.ts");
const { eventGods } = await import("../app/EventGodClassification.ts");
const { getAgentEvents } = await import("../app/AgentEventsModel.ts");
const { agents } = await import("../app/AgentsData.ts");
const { archiveModOrder, sortArchiveMods } = await import("../app/ArchiveModOrder.ts");
const { groupEventVariants, eventPresentationCardIds } = await import("../app/EventVariantModel.ts");
const records = eventGroups.flatMap(g=>g.records), byId = new Map(records.map(r=>[r.entry.id,r]));
assert.equal(new Set(records.map(r=>r.entry.id)).size,records.length,"duplicate canonical event");
const configs = fs.readdirSync("app").filter(f=>f.endsWith("Archive.tsx")).flatMap(file=>{
 const sf=ts.createSourceFile(file,fs.readFileSync("app/"+file,"utf8"),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const d=sf.statements.filter(ts.isVariableStatement).flatMap(s=>s.declarationList.declarations)
  .find(d=>d.name.getText(sf)==="config" && d.type?.getText(sf)==="GodConfig");
 return d?[vm.runInNewContext("("+d.initializer.getText(sf)+")")]:[];
});
let projected=0, agentEvents=0;
for(const raw of configs) {
 const oldEvents=raw.sections.find(s=>s.id==="events")?.items??[];
 const count=oldEvents.reduce((n,e)=>n+(godEventBindings[raw.id]?.[e.id??e.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")]?.length??0),0);
 const config=prepareGodConfig(raw), items=config.sections.find(s=>s.id==="events")?.items??[];
 assert.equal(items.length,count,raw.id+" missing projection");
 const ids=[...config.powers,...(config.powerGroups??[]).flatMap(g=>g.powers),...config.sections.flatMap(s=>s.items)].map(e=>e.id??e.name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""));
 assert.equal(new Set(ids).size,ids.length,raw.id+" duplicate anchor");
 for(const item of items) {
  const id=item.eventOriginal?.href.split("#entry-")[1], canonical=byId.get(id);
  assert.ok(canonical,raw.id+" missing canonical link "+id);
  assert.ok(item.eventOriginal.text?.length,"missing preview");
  assert.equal(item.eventCategory,canonical.category);
  assert.equal(item.eventChain?.id,canonical.chain?.id);
  assert.deepEqual(item.eventRepeat,canonical.entry.eventRepeat?.interval ?
   {...canonical.entry.eventRepeat,interval:item.eventRepeat.interval} : canonical.entry.eventRepeat);
  projected++;
 }
 if(config.id==="adolia") assert.ok(config.sections.find(s=>s.id==="mechanisms")?.items.some(e=>e.name==="Pareidolia Crises"));
}
for(const agent of agents) for(const source of getAgentEvents(agent.id)) {
 for(const item of source.items) {
  assert.ok(byId.has(item.eventOriginal.href.split("#entry-")[1]),"missing Agent event link");
  agentEvents++;
 }
 assert.equal(new Set(eventPresentationCardIds(source.records)).size,eventPresentationCardIds(source.records).length);
}
for(const family of groupEventVariants(records)) assert.equal(new Set(family.records.map(r=>r.category)).size,1,"family crosses categories");
for(const record of records.filter(r=>r.gods?.length)) {
 assert.equal(record.category,"gods");
 assert.equal(record.entry.eventCategory,"gods");
 if(record.chain) assert.equal(record.entry.eventChain.id,record.chain.id);
}
assert.deepEqual(eventGods({condition:"!god_is_iastur & !god_is_snake",eventId:"example"}),[]);
assert.deepEqual(eventGods({condition:"god_is_iastur | god_is_snake",eventId:"example"}),["iastur","she-who-will-feast"]);
const expected = [
 ["Deep Ones Plus",1,2879667447],["Living Wilds",1,2932110698],["Orcs Plus",1,3003549759],
 ["Ixthus",2,2866026291],["Escamrak",2,2900259087],["Kalastrophe",2,3192034838],["MEKHANE",2,3591348120],
 ["Community Library",3,2968835416],["KeeperItemMod",3,2988960487],
 ["The Whisperer",4,3236518418],["The Robber Baron",4,3446675112],["The Surveyor",4,3700090862],
];
for(const [name,rank,id] of expected) assert.deepEqual(archiveModOrder(name),[rank,id],name);
const key=g=>[g.id,g.name];
assert.deepEqual(eventGroups.map(g=>g.id),sortArchiveMods(eventGroups,key).map(g=>g.id));
const workshop="E:/Steam/steamapps/workshop/content/1741640/";
for(const id of fs.readdirSync(workshop)) {
 const file=workshop+id+"/mod_desc.json";
 if(!fs.existsSync(file))continue;
 const name=JSON.parse(fs.readFileSync(file,"utf8")).displayedName;
 assert.equal(archiveModOrder(name)[1],Number(id),"source name mapping: "+name);
}
console.log(JSON.stringify({status:"PASS",godsChecked:configs.length,projectedGodEvents:projected,agentEvents,
 godOnlyEvents:records.filter(r=>r.category==="gods").length,
 godOnlySeries:new Set(records.filter(r=>r.category==="gods"&&r.chain).map(r=>r.source+":"+r.chain.id)).size,
 sourceGroups:eventGroups.map(g=>g.name)},null,2));
