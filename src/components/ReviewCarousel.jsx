import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { reviews } from '../data/siteData';

export function StarRating() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" stroke="currentColor" aria-hidden="true" />
      ))}
    </span>
  );
}

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="reveal reviews-carousel" style={{ transitionDelay: '100ms' }}>
      <div className="review-card" aria-live="polite" aria-atomic="true">
        <span className="review-card__quote-mark">“</span>
        <StarRating />
        <p>{current.quote}</p>
        <span className="review-card__attribution">
          {current.name} · {current.service} · {current.when}
        </span>
      </div>

      <div className="reviews-carousel__controls">
        <button type="button" aria-label="Previous review" onClick={handlePrev}>
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <span>
          {String(currentIndex + 1).padStart(2, '0')} <i>/</i> {String(reviews.length).padStart(2, '0')}
        </span>
        <button type="button" aria-label="Next review" onClick={handleNext}>
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
