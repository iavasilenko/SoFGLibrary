import manifest from "./IconImageManifest.json" with { type: "json" };

type IconVariant = { src: string; width: number; height: number };
const images: Record<string, IconVariant[]> = manifest;

export function archiveIconSources(source: string, size: number) {
  const fallback = { src: source, srcSet: undefined as string | undefined, sizes: `${size}px` };
  // External/data images and unknown local assets retain their existing URL.
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|\.\.\/)/i.test(source)) return fallback;
  let key = source.split(/[?#]/, 1)[0].replace(/^\.\//, "").replace(/^\//, "");
  try { key = decodeURIComponent(key); } catch { return fallback; }
  const variants = images[key];
  if (!variants?.length) return fallback;
  return {
    src: variants[0].src,
    srcSet: variants.length > 1 ? variants.map(variant => `${variant.src} ${variant.width}w`).join(", ") : undefined,
    sizes: `${size}px`,
  };
}
