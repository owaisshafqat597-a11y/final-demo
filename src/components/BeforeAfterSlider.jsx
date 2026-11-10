import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) {
  const [split, setSplit] = useState(50);
  const frameRef = useRef(null);
  const isDragging = useRef(false);

  const updateSplit = useCallback((clientX) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(6, Math.min(94, (x / rect.width) * 100));
    setSplit(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updateSplit(e.clientX);
    const onPointerMove = (moveEvent) => {
      if (isDragging.current) updateSplit(moveEvent.clientX);
    };
    const onPointerUp = () => {
      isDragging.current = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setSplit((prev) => Math.max(6, prev - 5));
    if (e.key === 'ArrowRight') setSplit((prev) => Math.min(94, prev + 5));
  };

  return (
    <div
      className="before-after__frame"
      style={{ '--split': `${split}%` }}
      ref={frameRef}
      onPointerDown={handlePointerDown}
    >
      <div className="before-after__image before-after__image--before">
        <img src={beforeImage} alt="Sample Organik before comparison" loading="lazy" />
        <span className="before-after__label">{beforeLabel}</span>
      </div>
      <div className="before-after__image before-after__image--after">
        <img src={afterImage} alt="Sample Organik after comparison" loading="lazy" />
        <span className="before-after__label">{afterLabel}</span>
      </div>
      <div
        className="before-after__handle"
        role="slider"
        aria-label="Drag to compare sample images"
        aria-roledescription="comparison slider"
        aria-orientation="horizontal"
        aria-valuemin={6}
        aria-valuemax={94}
        aria-valuenow={Math.round(split)}
        aria-valuetext={`${Math.round(split)} percent comparison`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <span className="before-after__handle-icon">
          <span className="before-after__handle-arrows">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
          </span>
          <span className="before-after__handle-label" aria-hidden="true">Drag</span>
        </span>
      </div>
    </div>
  );
}
