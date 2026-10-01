// Refresh source-backed God events; changed conditions/choices need a fresh audit.
import fs from "node:fs";
import ts from "typescript";
import vm from "node:vm";
import { registerHooks } from "node:module";
import { spawnSync } from "node:child_process";
registerHooks({ resolve(s, c, next) {
 if (s.startsWith(".") && c.parentURL && !/\.[cm]?[jt]sx?$/.test(s)) {
  const u = new URL(s + ".ts", c.parentURL);
  if (fs.existsSync(u)) return next(u.href, c);
 }
 return next(s, c);
}});
const { normalizeReferenceMarkers } = await import("../app/ArchiveReferenceMarkup.ts");
const { godEventGroups } = await import("../app/GodEventsData.ts");
const { godEventBindings } = await import("../app/GodEventBindings.ts");
const configs = fs.readdirSync("app").filter(f => f.endsWith("Archive.tsx")).flatMap(file => {
 const sf = ts.createSourceFile(file, fs.readFileSync("app/" + file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
 const declaration = sf.statements.filter(ts.isVariableStatement).flatMap(s => s.declarationList.declarations)
  .find(d => d.name.getText(sf) === "config" && d.type?.getText(sf) === "GodConfig");
 return declaration ? [vm.runInNewContext("(" + declaration.initializer.getText(sf) + ")")] : [];
});
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const quote = text => String(text ?? "").replace(/<CrossReference name="([^"]+)"(?:"[^"]*"|[^">])*\/>/g, "$1").replaceAll('"', "“").replace(/\s*[\r\n]+\s*/g, " ");
const escape = text => text.replace(/[.*+?^\${}()|[\]\\]/g, "\\$&");
let checked = 0, linked = 0;
for (const group of godEventGroups) for (const record of group.records) {
 if (fs.existsSync(record.sourceFile)) {
  const source = JSON.parse(fs.readFileSync(record.sourceFile, "utf8"));
  if (source.id !== record.eventId || source.name !== record.entry.name || source.type !== record.type ||
      (source.conditional ?? "") !== record.condition ||
      JSON.stringify((source.choices ?? []).map(c => c.name)) !== JSON.stringify((record.entry.eventOptions ?? []).map(c => c.name)))
   throw Error("Source changed; re-audit " + record.sourceFile);
  checked++;
 }
 const config = configs.find(c => c.id === record.gods[0]);
 if (!config) throw Error("Unknown god " + record.gods[0]);
 const powers = [...config.powers, ...(config.powerGroups ?? []).flatMap(g => g.powers)];
 const entries = [...powers, ...(config.supplicant?.abilities ?? []), ...config.sections.flatMap(s => s.items)];
 const seen = new Map();
 const identities = new Map(entries.map(entry => {
  const key = entry.id ?? slug(entry.name), count = seen.get(key) ?? 0;
  seen.set(key, count + 1);
  return [entry, entry.id ?? key + (count ? "-" + (count + 1) : "")];
 }));
 function reference(entry) {
  const id = identities.get(entry), canonical = godEventBindings[config.id]?.[id]?.[0];
  const section = config.sections.find(s => s.items.includes(entry)), image = entry.image ?? entry.icon;
  const preview = entry.effect ?? [entry.text, ...(entry.tenetRange ? ["等级范围：" + entry.tenetRange] : []),
   ...(entry.tenetLevels ?? []).map(level => level.level + ": " + level.text)].filter(Boolean).join("\n");
  return '<CrossReference name="' + entry.name + '" href="' + (canonical ? "?page=events#entry-" + canonical : "?god=" + config.id + "#entry-" + id) +
   '" meta="' + (powers.includes(entry) ? "神力" : section?.title ?? "机制") + '" text="' + quote(preview) +
   '"' + (image ? ' image="./' + config.assetDir + "/" + image + '"' : "") + " />";
 }
 const ownEntries = config.sections.filter(s => ["location-modifiers", "traits", "character-traits", "items", "locations", "points-of-interest"].includes(s.id))
  .flatMap(s => s.items).filter(entry => entry.name.length > 3 && !["Shadow", "Madness", "Unrest", "Devastation", "Death", "Plague", "Gold"].includes(entry.name))
  .sort((a, b) => b.name.length - a.name.length);
 const named = new Map(ownEntries.map(entry => [entry.name, entry]));
 const pattern = named.size ? new RegExp("(?<![A-Za-z0-9])(?:" + [...named.keys()].map(escape).join("|") + ")(?![A-Za-z0-9])", "g") : undefined;
 const rewrite = text => {
  text = normalizeReferenceMarkers(text);
  const markers = [];
  let masked = text.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g, marker => {
   const name = /name="([^"]+)"/.exec(marker)?.[1], href = /href="([^"]+)"/.exec(marker)?.[1];
   const entry = href?.startsWith("#") ? entries.find(e => "#entry-" + identities.get(e) === href) : !href ? entries.find(e => e.name === name) : undefined;
   return "\uE000" + (markers.push(entry ? reference(entry) : marker) - 1) + "\uE001";
  });
  if (pattern) masked = masked.replace(pattern, name => { linked++; return "\uE000" + (markers.push(reference(named.get(name))) - 1) + "\uE001"; });
  return masked.replace(/\uE000(\d+)\uE001/g, (_, i) => markers[Number(i)]);
 };
 if (config.id === "ixthus") {
  const trigger = record.entry.name === "Eternal City" ?
   "统治者完成 Constitute Eternal City、城市转化时显示；转化效果由统治者行动结算。" :
   "完成 To Eternal Life!、人物饮下 Holy Grail 时显示；永生效果由对应行动结算。";
  record.entry.text = record.entry.text.split("\n\n")[0] + "\n\n" + trigger;
  record.decision.trigger = trigger;
 }
 record.entry.text = rewrite(record.entry.text);
 record.entry.eventOptions?.forEach(option => {
  option.text = rewrite(option.text);
  if (option.condition) option.condition = rewrite(option.condition);
 });
 record.decision.trigger = rewrite(record.decision.trigger);
 record.decision.condition = rewrite(record.decision.condition);
}
const file = "app/GodEventsData.ts";
const content = 'import type { EventSourceGroup } from "./EventTypes";\n\n// Effective root/v2.0 JSON; custom DLL effects retain their audited descriptions.\nexport const godEventGroups: EventSourceGroup[] = ' + JSON.stringify(godEventGroups, null, 2) + ";\n";
const old = fs.readFileSync(file, "utf8").replaceAll("\r\n", "\n");
if (old !== content) {
 const patchCommand = process.env.CODEX_PATCH_COMMAND ?? "C:/Users/zi123/AppData/Local/OpenAI/Codex/bin/c6fe824d725f02d7/codex.exe";
 const apply = patch => {
  const r = spawnSync(patchCommand, ["--codex-run-as-apply-patch", patch], {encoding: "utf8", maxBuffer: 2e6});
  if (r.status) throw Error(r.stdout + r.stderr);
 };
 apply("*** Begin Patch\n*** Delete File: " + file + "\n*** End Patch");
 const lines = content.trimEnd().split("\n");
 let offset = 0;
 while (offset < lines.length) {
  const start = offset, chunk = []; let size = 0;
  while (offset < lines.length && size < 6500) { const line = lines[offset++]; chunk.push(line); size += line.length; }
  apply("*** Begin Patch\n" + (!start ? "*** Add File: " + file + "\n" : "*** Update File: " + file + "\n@@\n " + lines[start - 1] + "\n") +
   chunk.map(s => "+" + s).join("\n") + (start ? "\n*** End of File" : "") + "\n*** End Patch");
 }
}
console.log(JSON.stringify({sourceJSONChecked: checked, newReferences: linked, events: godEventGroups.reduce((n, g) => n + g.records.length, 0)}));
