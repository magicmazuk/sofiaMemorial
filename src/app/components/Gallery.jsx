import { useEffect, useMemo, useState, useCallback } from "react";

export default function Gallery({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const safeItems = useMemo(() => Array.isArray(items) ? items : [], [items]);
  const count = safeItems.length;

  const openAt = useCallback((i) => {
    setIndex(i);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(() => {
    if (!count) return;
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    if (!count) return;
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  return (
    <div className="gallery">
      <div className="galleryGrid">
        {safeItems.map((it, i) => (
          <button
            key={i}
            className="galleryItem"
            onClick={() => openAt(i)}
            aria-label={it.alt || "Open image"}
          >
            <img src={it.src} alt={it.alt || ""} loading="lazy" />
          </button>
        ))}
      </div>

      {isOpen && count > 0 && (
        <div className="lightboxOverlay" role="dialog" aria-modal="true">
          <div className="lightboxBackdrop" onClick={close} />
          <div className="lightboxInner">
            <button className="lightboxClose" onClick={close} aria-label="Close">×</button>
            <button className="lightboxNav prev" onClick={prev} aria-label="Previous">‹</button>
            <div className="lightboxStage">
              <img
                className="lightboxImage"
                src={safeItems[index]?.src}
                alt={safeItems[index]?.alt || ""}
              />
              {safeItems[index]?.caption && (
                <div className="lightboxCaption">{safeItems[index].caption}</div>
              )}
            </div>
            <button className="lightboxNav next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </div>
  );
}
