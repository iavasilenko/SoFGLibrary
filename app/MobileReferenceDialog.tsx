"use client";

import ArchiveIcon from "./ArchiveIcon";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";

type MobileReferenceDialogProps = {
  open: boolean;
  originId?: string;
  onClose: () => void;
  name: string;
  meta: string;
  text: string;
  href: string;
  imageSrc?: string;
  target?: "_blank";
};

export default function MobileReferenceDialog({ open, onClose, name, meta, text, href, imageSrc, target, originId }: MobileReferenceDialogProps) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="mobile-reference-backdrop" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="mobile-reference-dialog" role="dialog" aria-modal="true" aria-label={`${name} 资料`}>
        <button className="mobile-reference-close" type="button" onClick={onClose} aria-label="关闭资料弹窗"><X size={18} /></button>
        <div className={"mobile-reference-card" + (imageSrc ? " has-image" : "")}>
          {imageSrc && <span className="mobile-reference-image"><ArchiveIcon src={imageSrc} fill size={72} loading="eager" /></span>}
          <div className="mobile-reference-copy">
            {meta && <small>{meta}</small>}
            <b>{name}</b>
            {text && <p>{text}</p>}
          </div>
        </div>
        <a className="mobile-reference-jump" data-jump-origin={originId} href={href} target={target} rel={target ? "noopener noreferrer" : undefined} onClick={onClose}>前往对应位置 <ArrowRight size={16} /></a>
      </section>
    </div>,
    document.body,
  );
}
