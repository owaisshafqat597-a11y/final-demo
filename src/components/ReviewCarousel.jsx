import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import { reviews } from '../data/siteData';

export function StarRating() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={15} fill="#D4AF37" stroke="#D4AF37" aria-hidden="true" />
      ))}
    </span>
  );
}

export function ReviewCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="loved-by-locals-section" role="region" aria-label="Client testimonials">
      {/* Infinite Smooth Scrolling Marquee (Unique Keratin inspired) */}
      <div 
        className={`loved-by-locals-marquee-wrapper ${isPaused ? 'is-paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="loved-by-locals-track">
          {doubledReviews.map((rev, idx) => (
            <article 
              key={`${rev.name}-${idx}`} 
              className="marquee-review-card"
              tabIndex={0}
            >
              <div className="marquee-review-card__header">
                <StarRating />
                <span className="marquee-review-card__verified">
                  <CheckCircle2 size={13} aria-hidden="true" /> Verified Client
                </span>
              </div>
              <p className="marquee-review-card__quote">
                “{rev.quote}”
              </p>
              <div className="marquee-review-card__footer">
                <div className="marquee-review-card__author-info">
                  <strong className="marquee-review-card__author">{rev.name}</strong>
                  <span className="marquee-review-card__meta">{rev.service} · {rev.when}</span>
                </div>
                <span className="marquee-review-card__quote-badge" aria-hidden="true">
                  <Quote size={20} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="loved-by-locals-footnote">
        <span>Hover or tap any review to pause</span>
      </div>
    </div>
  );
}
