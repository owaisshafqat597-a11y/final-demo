import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  Star
} from 'lucide-react';
import { assets, treatments, beforeAfterComparisons } from '../data/siteData';
import { ActionLink, ImageCard, Reveal, SectionHeading } from '../components/Common';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewCarousel, StarRating } from '../components/ReviewCarousel';

export function HomePage() {
  const [activeBaIndex, setActiveBaIndex] = useState(0);
  const currentBa = (beforeAfterComparisons && beforeAfterComparisons[activeBaIndex]) || beforeAfterComparisons[0];
  const featuredTreatments = [
    treatments.find((t) => t.slug === 'cosmetic-tattoo'),
    treatments.find((t) => t.slug === 'plasma-fibroblast'),
    treatments.find((t) => t.slug === 'eyelash-extensions'),
    treatments.find((t) => t.slug === 'skin-needling')
  ].filter(Boolean);

  return (
    <main className="page page--home page-motion">
      {/* Split Hero */}
      <section className="split-hero" aria-labelledby="home-title">
        <Link className="split-hero__panel split-hero__panel--treatments" to="/treatments">
          <img
            src={assets.clinicHero}
            alt="Organik Laser & Beauty clinic imagery"
            fetchPriority="high"
          />
          <span className="split-hero__wash"></span>
          <span className="split-hero__content">
            <span className="split-hero__eyebrow">For your own kind of beautiful</span>
            <span className="split-hero__title">
              Thoughtful beauty, <em>made personal.</em>
            </span>
            <span className="split-hero__link">
              Explore treatments <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </span>
          <span className="split-hero__corner">Mermaid Beach · By appointment</span>
        </Link>

        <Link className="split-hero__panel split-hero__panel--academy" to="/academy">
          <img
            src={assets.academyHero}
            alt="Organik Beauty Academy imagery"
            fetchPriority="high"
          />
          <span className="split-hero__wash"></span>
          <span className="split-hero__content">
            <span className="split-hero__eyebrow">Skills for a beautiful career</span>
            <span className="split-hero__title">
              Learn with care. <em>Grow with confidence.</em>
            </span>
            <span className="split-hero__link">
              Explore the academy <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </span>
          <span className="split-hero__corner">One-on-one · Personal guidance</span>
        </Link>

        <div className="split-hero__center-lockup">
          <span className="split-hero__center-mark">A considered beauty experience</span>
          <h1 id="home-title">
            A little more <em>you.</em>
          </h1>
          <span className="split-hero__center-rule"></span>
          <p>One name. Two thoughtful journeys.</p>
        </div>

        <span className="split-hero__scroll-note" aria-hidden="true">
          Scroll to discover
        </span>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" aria-label="Organik highlights">
        <div className="trust-strip__inner page-container">
          <div className="reveal trust-item">
            <span className="trust-item__icon">
              <Star size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number">
              <span>0</span>
            </span>
            <span className="trust-item__label">5-star Google reviews</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '70ms' }}>
            <span className="trust-item__icon">
              <Heart size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">Owner-operated</span>
            <span className="trust-item__label">Personal care, every visit</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '140ms' }}>
            <span className="trust-item__icon">
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">QLD Health</span>
            <span className="trust-item__label">Licensed laser practitioner</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '210ms' }}>
            <span className="trust-item__icon">
              <Check size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">Afterpay &amp; Zip</span>
            <span className="trust-item__label">Payment plans available</span>
          </div>
        </div>
      </section>

      {/* Personal Section (Story & Owner) */}
      <div className="reveal">
        <section className="personal-section section-pad page-container">
          <div className="personal-section__image-wrap">
            <img src={assets.clinicPortrait} alt="Organik owner and practitioner Racheal" loading="lazy" />
            <span className="personal-section__image-note">
              <Sparkles size={16} aria-hidden="true" /> Personal care, always
            </span>
          </div>
          <div className="personal-section__content">
            <p className="eyebrow">
              <span className="eyebrow__line"></span>The Organik feeling
            </p>
            <h2>
              A personal beauty experience, <em>from the moment you arrive.</em>
            </h2>
            <p className="personal-section__lead">
              Organik Laser &amp; Beauty is proudly owner-operated. Every treatment is personally performed by Racheal,
              in a warm and welcoming space where every client feels valued and cared for.
            </p>
            <div className="personal-section__signature">
              <span>Racheal</span>
              <small>Owner · Organik Laser &amp; Beauty</small>
            </div>
            <ActionLink href="/treatments/team" variant="text">
              Get to know Racheal
            </ActionLink>
          </div>
        </section>
      </div>

      {/* Treatments Section */}
      <section className="treatments-section section-pad section-pad--soft section-tone--rose" id="treatments">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The treatment room"
              title="Your time, your treatment."
              description="A few of our most-loved services. Every appointment starts with listening."
            />
          </Reveal>

          <div className="treatment-grid treatment-grid--featured">
            {featuredTreatments.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 55}>
                <ImageCard
                  title={item.title}
                  category={item.categoryLabel}
                  description={item.description}
                  image={item.image}
                  href={`/treatments/${item.slug}`}
                  index={idx}
                />
              </Reveal>
            ))}
          </div>

          <div className="section-link-row">
            <ActionLink href="/treatments" variant="secondary">
              View all treatments
            </ActionLink>
            <ActionLink href="/pricing" variant="text">
              See pricing
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Special Offer Card */}
      <section className="home-offer section-pad page-container">
        <Reveal>
          <Link to="/pricing" className="offer-card offer-card--large home-offer__card">
            <img src={assets.clinicEditorial} alt="Plasma Fibroblast special offer" loading="lazy" />
            <span className="offer-card__shade"></span>
            <span className="offer-card__content">
              <span className="offer-card__tag">Special offer · Limited time</span>
              <span className="offer-card__title">Plasma Fibroblast</span>
              <span className="offer-card__prices">
                <s>$995</s>
                <strong>$430</strong>
                <small>Full face lift incl. upper eyelids</small>
              </span>
              <span className="offer-card__link">
                See all offers &amp; prices <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </span>
          </Link>
        </Reveal>
      </section>

      {/* Academy Teaser */}
      <section className="academy-teaser section-pad page-container section-tone--sage">
        <div className="academy-teaser__visual">
          <img src={assets.academyHero} alt="Organik Beauty Academy" loading="lazy" />
          <span className="academy-teaser__badge">
            <GraduationCap size={22} aria-hidden="true" />
            <span>
              Career-focused
              <br />
              beauty education
            </span>
          </span>
        </div>
        <div className="academy-teaser__content">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow__line"></span>Organik Beauty Academy
            </p>
            <h2>
              Learn a craft. <em>Build a future.</em>
            </h2>
            <p className="academy-teaser__lead">
              Personalised, mostly one-on-one training with live model practice — guided by Racheal, with 8+ years in the
              beauty industry.
            </p>
          </Reveal>

          <div className="academy-teaser__facts">
            <Reveal>
              <span>
                <Check size={16} aria-hidden="true" /> Beginner-friendly courses
              </span>
            </Reveal>
            <Reveal delay={80}>
              <span>
                <Check size={16} aria-hidden="true" /> Ongoing WhatsApp support after training
              </span>
            </Reveal>
            <Reveal delay={160}>
              <span>
                <Check size={16} aria-hidden="true" /> Study with a friend — 10% off each
              </span>
            </Reveal>
          </div>

          <div className="section-link-row section-link-row--start">
            <ActionLink href="/academy/courses" variant="secondary">
              Explore courses
            </ActionLink>
            <ActionLink href="/pricing?tab=academy" variant="text">
              Course fees
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Before & After Slider Section (Unique Keratin inspired interactive tabs) */}
      <section className="before-after-section section-pad section-pad--soft">
        <div className="page-container before-after-section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Clinical & Academy Results"
              title="See the difference."
              description="Authentic client transformations and student live-model work."
              align="center"
            />
          </Reveal>

          {/* Interactive BA Tabs */}
          <div className="ba-tabs-wrapper">
            <div className="ba-tabs-list" role="tablist" aria-label="Before and after results">
              {beforeAfterComparisons.slice(0, 5).map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={activeBaIndex === idx}
                  className={'ba-tab-btn' + (activeBaIndex === idx ? ' is-active' : '')}
                  onClick={() => setActiveBaIndex(idx)}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="ba-slider-presentation">
            <span className="ba-category-badge">
              {currentBa.division === 'academy' ? 'Academy Student Result' : 'Clinic Result'} · {currentBa.category}
            </span>
            <BeforeAfterSlider
              beforeImage={currentBa.before}
              afterImage={currentBa.after}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>

          <div className="section-link-row section-link-row--center">
            <ActionLink href="/gallery" variant="secondary">
              Treatment gallery
            </ActionLink>
            <ActionLink href="/gallery?tab=academy" variant="text">
              Academy gallery
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section section-pad page-container">
        <div className="reviews-section__heading">
          <Reveal>
            <SectionHeading
              eyebrow="What our clients say"
              title="Real reviews from real clients."
            />
          </Reveal>
          <div className="reviews-summary">
            <StarRating />
            <strong>162</strong>
            <span>5-star Google reviews</span>
          </div>
        </div>

        <ReviewCarousel />
      </section>

      {/* Final Invite */}
      <section className="final-invite">
        <div className="page-container final-invite__inner">
          <Reveal>
            <p className="eyebrow">Whenever you're ready</p>
            <h2>We'd love to welcome you.</h2>
            <p>Whether you're here for a treatment or a new skill, there's a place for you at Organik.</p>
            <div className="final-invite__actions">
              <ActionLink href="/contact?enquiry=treatments" variant="light">
                Book an appointment
              </ActionLink>
              <ActionLink href="/contact?enquiry=academy" variant="outline">
                Ask about a course
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
