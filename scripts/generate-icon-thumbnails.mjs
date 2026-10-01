// Originals stay untouched. Run before either build; identical images share files.
import { createHash } from "node:crypto";
import { readdir, readFile, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "image-thumbnails");
const manifestPath = path.join(root, "app", "IconImageManifest.json");
const sizes = [160, 320];
const recipe = "archive-icons-v1-webp-q82-alpha100-inside-rotate";
const manifest = {};
const processed = new Map();
let generated = 0;
let animated = 0;

async function imageFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (fullPath === outputDir) continue;
    if (entry.isDirectory()) files.push(...await imageFiles(fullPath));
    else if (/\.(png|jpe?g|webp|gif)$/i.test(entry.name)) files.push(fullPath);
  }
  return files.sort((a, b) => a.localeCompare(b, "en"));
}

async function variantsFor(input, digest) {
  const metadata = await sharp(input).metadata();
  // Do not silently replace an animated source with a still frame.
  if ((metadata.pages ?? 1) > 1) { animated += 1; return []; }
  if (!metadata.width || !metadata.height) throw new Error("Missing image dimensions");
  const longestEdge = Math.max(metadata.width, metadata.height);
  const edges = [...new Set(sizes.map(size => Math.min(size, longestEdge)))];
  const variants = [];
  for (const edge of edges) {
    const filename = `${digest}-${edge}.webp`;
    const destination = path.join(outputDir, filename);
    let info;
    try {
      const cached = await sharp(destination).metadata();
      if (cached.format !== "webp" || !cached.width || !cached.height) throw new Error("Invalid cached thumbnail");
      info = cached;
    } catch {
      info = await sharp(input).rotate()
        .resize({ width: edge, height: edge, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 100, effort: 4 })
        .toFile(destination);
      generated += 1;
    }
    variants.push({ src: `./image-thumbnails/${filename}`, width: info.width, height: info.height });
  }
  return variants.sort((a, b) => a.width - b.width);
}

await mkdir(outputDir, { recursive: true });
const files = await imageFiles(publicDir);
let cursor = 0;
let completed = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < files.length) {
    const file = files[cursor++];
    const input = await readFile(file);
    const digest = createHash("sha256").update(recipe).update(input).digest("hex").slice(0, 24);
    if (!processed.has(digest)) processed.set(digest, variantsFor(input, digest));
    const variants = await processed.get(digest);
    if (variants.length) manifest[path.relative(publicDir, file).split(path.sep).join("/")] = variants;
    completed += 1;
    if (completed % 400 === 0) console.log(`Icon thumbnails: ${completed}/${files.length} images checked`);
  }
}));

const sortedManifest = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b, "en")));
const json = JSON.stringify(sortedManifest, null, 2) + "\n";
const existing = await readFile(manifestPath, "utf8").catch(() => "");
if (existing !== json) await writeFile(manifestPath, json);

const destinations = [...new Set(Object.values(manifest).flat().map(variant => variant.src))];
const totalBytes = (await Promise.all(destinations.map(src => stat(path.join(publicDir, src.slice(2))))))
  .reduce((sum, entry) => sum + entry.size, 0);
console.log(`Icon thumbnails: ${Object.keys(manifest).length} sources, ${destinations.length} shared files, ${(totalBytes / 1024 / 1024).toFixed(2)} MiB; ${generated} generated, ${animated} animated sources kept original.`);
