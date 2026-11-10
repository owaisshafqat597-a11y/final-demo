import React from 'react';
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
import { assets, treatments } from '../data/siteData';
import { ActionLink, ImageCard, Reveal, SectionHeading } from '../components/Common';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewCarousel, StarRating } from '../components/ReviewCarousel';

export function HomePage() {
  const featuredTreatments = [
    treatments.find((t) => t.slug === 'cosmetic-tattoo'),
    treatments.find((t) => t.slug === 'plasma-fibroblast'),
    treatments.find((t) => t.slug === 'eyelash-extensions'),
    treatments.find((t) => t.slug === 'skin-needling')
  ].filter(Boolean);

  return (
    <main className="page page--home page-motion">
      {/* Luxury Split Hero: Two Journeys with Central Floating Glassmorphic Lockup */}
      <section className="split-hero" aria-labelledby="home-title">
        {/* Clinic Side */}
        <Link
          className="split-hero__panel split-hero__panel--treatments"
          to="/treatments"
          aria-label="Explore Beauty & Skin Treatments at Organik"
        >
          <img
            src={assets.clinicHero}
            alt="Client receiving personal skin treatment at Organik clinic"
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

        {/* Academy Side */}
        <Link
          className="split-hero__panel split-hero__panel--academy"
          to="/academy"
          aria-label="Explore Organik Beauty Academy courses"
        >
          <img
            src={assets.academyHero}
            alt="Hands-on training session at Organik Beauty Academy"
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

        {/* Iconic Floating Center Glass Lockup (Unique Keratin inspired luxury glassmorphism) */}
        <div className="split-hero__center-lockup">
          <span className="split-hero__center-mark">
            <Sparkles size={13} style={{ display: 'inline', marginRight: '6px' }} />
            A considered beauty experience
          </span>
          <h1 id="home-title">
            A little more <em>you.</em>
          </h1>
          <span className="split-hero__center-rule"></span>
          <p>One name. Two thoughtful journeys.</p>
        </div>

        <span className="split-hero__scroll-note" aria-hidden="true">
          Scroll to discover &darr;
        </span>
      </section>

      {/* Trust Strip with Luxury Glass Cards */}
      <section className="trust-strip" aria-label="Organik highlights">
        <div className="trust-strip__inner page-container">
          <div className="reveal trust-item">
            <span className="trust-item__icon" style={{ color: '#D4AF37' }}>
              <Star size={20} fill="#D4AF37" aria-hidden="true" />
            </span>
            <span className="trust-item__number">
              <span>162+</span>
            </span>
            <span className="trust-item__label">5-star Google reviews</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '70ms' }}>
            <span className="trust-item__icon" style={{ color: 'var(--treatments-burgundy)' }}>
              <Heart size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">Owner-operated</span>
            <span className="trust-item__label">Personal care, every visit</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '140ms' }}>
            <span className="trust-item__icon" style={{ color: 'var(--academy-eucalyptus)' }}>
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">QLD Health</span>
            <span className="trust-item__label">Licensed laser practitioner</span>
          </div>
          <div className="reveal trust-item" style={{ transitionDelay: '210ms' }}>
            <span className="trust-item__icon" style={{ color: '#AF8273' }}>
              <Check size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number trust-item__number--text">Afterpay &amp; Zip</span>
            <span className="trust-item__label">Payment plans available</span>
          </div>
        </div>
      </section>

      {/* Personal Section: Story & Founder */}
      <div className="reveal">
        <section className="personal-section section-pad page-container">
          <div className="personal-section__image-wrap">
            <img
              src={assets.clinicPortrait}
              alt="Organik owner and lead practitioner Racheal Morris"
              loading="lazy"
            />
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
              in a warm and welcoming Mermaid Beach space where every client feels valued, heard and cared for.
            </p>
            <p style={{ marginTop: '12px', color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Whether you arrive for our restorative clinical skin therapies or to master high-demand beauty techniques in our academy, you receive over 8 years of industry expertise and genuine, unhurried care.
            </p>
            <div className="personal-section__signature">
              <span>Racheal Morris</span>
              <small>Founder · Organik Laser &amp; Beauty · Organik Beauty Academy</small>
            </div>
            <div style={{ marginTop: '20px' }}>
              <ActionLink href="/treatments/team" variant="text">
                Get to know Racheal
              </ActionLink>
            </div>
          </div>
        </section>
      </div>

      {/* Treatments Showcase Section */}
      <section className="treatments-section section-pad section-pad--soft section-tone--rose" id="treatments">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The treatment room"
              title="Your time, your treatment."
              description="A few of our most-loved services. Every appointment starts with listening, bespoke consultation and gentle care."
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

      {/* Special Offer Card (Plasma Fibroblast Feature) */}
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

      {/* Academy Teaser Section */}
      <section className="academy-teaser section-pad page-container section-tone--sage">
        <div className="academy-teaser__visual">
          <img src={assets.academyHero} alt="Organik Beauty Academy hands-on practice" loading="lazy" />
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
                <Check size={16} aria-hidden="true" /> Beginner-friendly courses &amp; masterclasses
              </span>
            </Reveal>
            <Reveal delay={80}>
              <span>
                <Check size={16} aria-hidden="true" /> Ongoing WhatsApp mentorship after training
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

      {/* Unique Keratin Style Interactive Before & After Slider Section */}
      <section className="before-after-section section-pad section-pad--soft">
        <div className="page-container before-after-section__inner">
          <Reveal>
            <SectionHeading
              eyebrow="Before & after"
              title="See the difference."
              description="Explore genuine treatment transformations and student artistry created under trainer supervision."
              align="center"
            />
          </Reveal>

          <Reveal delay={100} className="before-after-section__slider">
            <BeforeAfterSlider
              beforeImage={assets.clinicDetailOne}
              afterImage={assets.clinicDetailTwo}
              beforeLabel="Sample image · Before"
              afterLabel="Sample image · After"
            />
          </Reveal>

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

      {/* Verified Reviews Section */}
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
            <strong>162+</strong>
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
