import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export function Lightbox({ photos, currentIndex, onClose, onIndexChange }) {
  useEffect(() => {
    if (currentIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIndex, photos.length, onClose, onIndexChange]);

  if (currentIndex === null || !photos[currentIndex]) return null;
  const current = photos[currentIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
      <button className="lightbox__backdrop" type="button" aria-label="Close image viewer" onClick={onClose} />
      <div className="lightbox__content">
        <button type="button" className="lightbox__close" aria-label="Close image viewer" onClick={onClose}>
          ×
        </button>
        <button
          type="button"
          className="lightbox__prev"
          aria-label="Previous image"
          onClick={() => onIndexChange((currentIndex - 1 + photos.length) % photos.length)}
        >
          <ArrowLeft size={22} aria-hidden="true" />
        </button>
        <figure>
          <img src={current.src} alt={current.alt || "Organik gallery image"} />
          <figcaption>{current.division === "academy" ? "Organik Beauty Academy" : "Organik Laser & Beauty"}</figcaption>
        </figure>
        <button
          type="button"
          className="lightbox__next"
          aria-label="Next image"
          onClick={() => onIndexChange((currentIndex + 1) % photos.length)}
        >
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
