// Verify source mapping, transparent images, dimensions and deployed files.
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { archiveIconSources } from "../app/ArchiveImageSources.ts";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
const manifest = JSON.parse(await readFile(path.join(root, "app/IconImageManifest.json"), "utf8"));
const unique = new Map();
assert.ok(Object.keys(manifest).length > 0);
for (const [source, variants] of Object.entries(manifest)) {
  const original = await sharp(path.join(publicDir, source)).metadata();
  const resolved = archiveIconSources("./" + source, 56);
  assert.equal(resolved.src, variants[0].src, source);
  assert.equal(resolved.sizes, "56px");
  assert.deepEqual(archiveIconSources("/" + source + "?v=2#image", 56), resolved, source);
  assert.ok(!resolved.srcSet || !resolved.srcSet.includes(source), source);
  let previous = 0;
  for (const variant of variants) {
    assert.ok(variant.src.startsWith("./image-thumbnails/"), source);
    assert.ok(variant.width > previous && variant.width <= 320 && variant.height <= 320, source);
    assert.ok(Math.max(variant.width, variant.height) <= Math.max(original.width, original.height), source);
    previous = variant.width;
    const metadata = unique.get(variant.src) ?? await sharp(path.join(publicDir, variant.src.slice(2))).metadata();
    assert.equal(metadata.format, "webp");
    assert.equal(metadata.width, variant.width);
    assert.equal(metadata.height, variant.height);
    // WebP can omit an unused, fully opaque alpha channel without changing pixels.
    if (original.hasAlpha && !metadata.hasAlpha)
      assert.ok((await sharp(path.join(publicDir, source)).stats()).isOpaque, "Lost transparency: " + source);
    unique.set(variant.src, metadata);
  }
}
for (const source of ["https://example.com/icon.png", "//example.com/icon.png", "data:image/png;base64,AA", "./missing/icon.png", "../outside.png", "./bad%XX.png"]) {
  assert.equal(archiveIconSources(source, 72).src, source);
  assert.equal(archiveIconSources(source, 72).srcSet, undefined);
}
const examples = [];
for (const source of ["agents/mod/whisperer/challenge_command_prey.png", "alai/power_predatory_instinct.png", "agents/mod/courtesan/AdvancedScandalPic.jpg"]) {
  const original = await stat(path.join(publicDir, source));
  const small = await stat(path.join(publicDir, manifest[source][0].src.slice(2)));
  const retina = await stat(path.join(publicDir, manifest[source].at(-1).src.slice(2)));
  examples.push({ source, originalBytes: original.size, smallBytes: small.size, retinaBytes: retina.size });
  assert.ok(small.size < original.size / 10, source);
}
if (process.argv.includes("--deployed")) {
  for (const src of unique.keys()) {
    const relative = src.slice(2);
    assert.deepEqual(await readFile(path.join(root, "docs", relative)), await readFile(path.join(publicDir, relative)), "Deployment mismatch: " + relative);
  }
}
console.log(JSON.stringify({ sources: Object.keys(manifest).length, uniqueThumbnails: unique.size, examples }, null, 2));
console.log("Icon source, size, transparency and fallback checks passed.");
