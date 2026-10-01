import type { CSSProperties, ImgHTMLAttributes } from "react";
import { archiveIconSources } from "./ArchiveImageSources";

type ArchiveIconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes" | "width" | "height"> & {
  src: string;
  size: number;
  fill?: boolean;
  sizes?: string;
};

export default function ArchiveIcon({ src, size, sizes, fill, style, alt = "", loading = "lazy", decoding = "async", ...props }: ArchiveIconProps) {
  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style;
  // Static hosting uses prebuilt thumbnails and native srcSet, not an image server.
  // oxlint-disable-next-line next/no-img-element
  return <img {...props} {...archiveIconSources(src, size)} data-original-src={src} alt={alt} sizes={sizes ?? `${size}px`}
    width={fill ? undefined : size} height={fill ? undefined : size}
    loading={loading} decoding={decoding} style={fillStyle} />;
}
