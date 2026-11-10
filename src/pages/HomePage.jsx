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
import { assets, treatments, siteConfig } from '../data/siteData';
import { ActionLink, ImageCard, Reveal, SectionHeading } from '../components/Common';
import { ReviewCarousel, StarRating } from '../components/ReviewCarousel';

export function HomePage() {
  const featuredTreatments = [
    treatments.find((t) => t.slug === 'cosmetic-tattoo'),
    treatments.find((t) => t.slug === 'plasma-fibroblast'),
    treatments.find((t) => t.slug === 'eyelash-extensions'),
    treatments.find((t) => t.slug === 'skin-needling')
  ].filter(Boolean);

  const authenticGalleryHighlights = [
    {
      src: assets.clinicDetailOne,
      alt: 'Lash extension artistry at Organik clinic',
      caption: 'Lash Extensions · Mermaid Beach Clinic'
    },
    {
      src: assets.academyDetailOne,
      alt: 'Hands-on live model training at Organik Beauty Academy',
      caption: 'Student Live Model Practice · Academy'
    },
    {
      src: assets.clinicDetailTwo,
      alt: 'Precision cosmetic tattooing result at Organik',
      caption: 'Cosmetic Brow Tattooing · Clinic'
    },
    {
      src: assets.academyDetailTwo,
      alt: 'Brow mapping and caliper measurement training',
      caption: 'Technique Masterclass · Academy'
    }
  ];

  return (
    <main className="page page--home page-motion">
      {/* 2. Recomposed Homepage Hero: Two Equal Prominent Entrances */}
      <section className="home-entrances-section" aria-label="Organik destinations">
        <div className="page-container">
          <div className="home-entrances-grid">
            {/* Clinic Entrance */}
            <article className="entrance-card entrance-card--clinic">
              <div className="entrance-card__image-wrap">
                <img
                  src={assets.clinicHero}
                  alt="Client receiving a relaxing skin treatment at Organik Laser & Beauty"
                  fetchPriority="high"
                />
              </div>
              <div className="entrance-card__solid-body">
                <div>
                  <span className="eyebrow" style={{ color: 'var(--treatments-burgundy)' }}>
                    Clinic · Mermaid Beach
                  </span>
                  <h2>Beauty &amp; Skin Treatments</h2>
                  <p>
                    Thoughtful beauty and personalised skin care in our private Mermaid Beach clinic.
                  </p>
                </div>
                <div>
                  <Link
                    to="/treatments"
                    className="btn-treatments-primary"
                    aria-label="Explore Treatments at Organik Laser & Beauty"
                  >
                    <span>Explore Treatments</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Academy Entrance */}
            <article className="entrance-card entrance-card--academy">
              <div className="entrance-card__image-wrap">
                <img
                  src={assets.academyHero}
                  alt="Learner practising beauty technique with hands-on trainer guidance at Organik Beauty Academy"
                  fetchPriority="high"
                />
              </div>
              <div className="entrance-card__solid-body">
                <div>
                  <span className="eyebrow" style={{ color: 'var(--academy-eucalyptus)' }}>
                    Academy · Career Training
                  </span>
                  <h2>Organik Beauty Academy</h2>
                  <p>
                    Hands-on, one-on-one beauty training and industry mentorship with real client practice.
                  </p>
                </div>
                <div>
                  <Link
                    to="/academy"
                    className="btn-academy-primary"
                    aria-label="Find a Course at Organik Beauty Academy"
                  >
                    <span>Find a Course</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Founder Introduction Section (Directly beneath entrances) */}
      <section className="founder-intro-section" aria-labelledby="founder-title">
        <div className="page-container">
          <div className="founder-intro-grid">
            <div className="founder-intro-portrait">
              <img
                src={assets.clinicPortrait}
                alt="Racheal Morris, owner of Organik Laser & Beauty and lead trainer at Organik Beauty Academy"
                loading="lazy"
              />
            </div>
            <div className="founder-intro-content">
              <p className="eyebrow" style={{ color: 'var(--treatments-burgundy)' }}>
                One Founder · Two Thoughtful Journeys
              </p>
              <h2 id="founder-title">
                Personal care in the clinic. <em>Real guidance in the academy.</em>
              </h2>
              <p>
                Organik is proudly founded and operated by Racheal. With over 8 years of clinical and industry experience,
                she connects both businesses under one shared ethos: thoughtful, unhurried care and high professional standards.
              </p>
              <p style={{ marginTop: '14px' }}>
                Whether you arrive for a restorative treatment or to learn a new profession, every client and student receives Racheal&rsquo;s personal dedication from day one.
              </p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/treatments/team" className="text-link" style={{ fontWeight: 600, color: 'var(--treatments-burgundy)' }}>
                  Read Racheal&rsquo;s story &rarr;
                </Link>
                <span style={{ fontSize: '0.875rem', color: 'var(--treatments-plum)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} aria-hidden="true" /> QLD Health Licensed Practitioner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" aria-label="Organik highlights">
        <div className="trust-strip__inner page-container">
          <div className="reveal trust-item">
            <span className="trust-item__icon">
              <Star size={20} aria-hidden="true" />
            </span>
            <span className="trust-item__number">
              <span>160+</span>
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

      {/* Curated Treatments Section */}
      <section className="treatments-section section-pad section-pad--soft section-tone--rose" id="treatments">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The Treatment Room"
              title="Thoughtful beauty, made personal."
              description="Our most-loved services. Every appointment starts with attentive listening and personalised care."
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

      {/* Academy Teaser Section */}
      <section className="academy-teaser section-pad page-container section-tone--sage">
        <div className="academy-teaser__visual">
          <img src={assets.academyHero} alt="Organik Beauty Academy teaching in practice" loading="lazy" />
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
            <p className="eyebrow" style={{ color: 'var(--academy-eucalyptus)' }}>
              <span className="eyebrow__line" style={{ background: 'var(--academy-eucalyptus)' }}></span>Organik Beauty Academy
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

      {/* 5. Authentic Gallery Presentation (Replacing sample comparison slider with genuine photos) */}
      <section className="authentic-gallery-section section-pad section-pad--soft">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="Real Work & Results"
              title="A glimpse into the clinic and academy."
              description="Authentic client transformations and student work captured directly in our Mermaid Beach studio."
              align="center"
            />
          </Reveal>

          <div className="gallery-preview-grid">
            {authenticGalleryHighlights.map((item, idx) => (
              <div key={idx} className="gallery-preview-card">
                <div className="gallery-preview-card__image">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <div className="gallery-preview-card__caption">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-link-row section-link-row--center" style={{ marginTop: '36px' }}>
            <ActionLink href="/gallery" variant="secondary">
              View Clinic Gallery
            </ActionLink>
            <ActionLink href="/gallery?tab=academy" variant="text">
              View Student Work
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
                Book a Treatment
              </ActionLink>
              <ActionLink href="/contact?enquiry=academy" variant="outline">
                Ask about a Course
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
