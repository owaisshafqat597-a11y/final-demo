import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { assets, treatments } from '../data/siteData';
import { ActionLink, ImageCard, PageIntro, Reveal, SectionHeading } from '../components/Common';

const curatedMenuData = {
  'lashes-brows': {
    id: 'lashes-brows',
    label: 'Lashes & Brows',
    title: 'Framing your eyes with effortless grace',
    description:
      'Tailored classic and volume lash sets, cutting-edge UV/LED lash technology, precision brow sculpts and gentle lash lifts. Each treatment is customised to your face shape, natural lash health and personal aesthetic.',
    photo: assets.clinicDetailOne,
    photoAlt: 'Lash extensions and brow styling at Organik',
    services: [
      { name: 'Eyelash Extensions (Classic / Volume)', price: 'From $120', slug: 'eyelash-extensions' },
      { name: 'UV/LED Eyelash Extensions', price: 'From $140', slug: 'uv-led-eyelash-extensions' },
      { name: 'Lash & Brow Definition', price: 'From $35', slug: 'lash-brows' },
      { name: 'Lash Lift & Keratin Infusion', price: 'From $85', slug: 'lash-brows' }
    ]
  },
  'skin-facials': {
    id: 'skin-facials',
    label: 'Skin & Facials',
    title: 'Restorative, clinical dermal care',
    description:
      'Nourishing bespoke facials, medical-grade skin needling and collagen induction therapies. We focus on skin barrier integrity, deep hydration and gentle cellular regeneration in a relaxed, private clinic environment.',
    photo: assets.clinicDetailThree,
    photoAlt: 'Skin and facial therapy at Organik Laser & Beauty',
    services: [
      { name: 'Custom Organik Facial Care', price: 'From $90', slug: 'facials' },
      { name: 'Skin Needling (Collagen Induction)', price: 'From $199', slug: 'skin-needling' },
      { name: 'Advanced Skin Rejuvenation', price: 'From $240', slug: 'skin-needling' }
    ]
  },
  'cosmetic-advanced': {
    id: 'cosmetic-advanced',
    label: 'Cosmetic & Advanced',
    title: 'Precision tattooing & plasma skin tightening',
    description:
      'Natural-look cosmetic tattooing for brows, lips and subtle eyeliner, plus Queensland Health licensed non-surgical plasma fibroblast lifting. Performed exclusively by Racheal with high-grade European pigments and clinical precision.',
    photo: assets.clinicDetailTwo,
    photoAlt: 'Cosmetic tattooing and advanced plasma fibroblast at Organik',
    services: [
      { name: 'Cosmetic Tattoo (Powder Brows, Lip Blush)', price: 'From $350', slug: 'cosmetic-tattoo' },
      { name: 'Plasma Fibroblast Skin Tightening', price: 'From $430 (Offer)', slug: 'plasma-fibroblast' },
      { name: 'Annual Colour Refresh / Touch-Up', price: 'From $250', slug: 'cosmetic-tattoo' }
    ]
  }
};

export function TreatmentsPage() {
  const [selectedKey, setSelectedKey] = useState('lashes-brows');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectCategory = (key) => {
    if (key === selectedKey) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedKey(key);
      setIsTransitioning(false);
    }, 200); // 200ms crossfade as specified in requirements
  };

  const activeCategory = curatedMenuData[selectedKey];

  return (
    <main className="page page--treatments page-motion" data-division="treatments">
      {/* Treatments Intro Header */}
      <PageIntro
        eyebrow="The Treatment Room · Mermaid Beach"
        title="Thoughtful beauty, made personal."
        description="A curated menu of beauty, skin and advanced aesthetic services — all delivered by Racheal with time, care and a conversation first."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Treatments' }]}
        image={assets.clinicHero}
        imageAlt="Organik Laser & Beauty private clinic in Mermaid Beach"
      />

      {/* 3. Curated Interactive Treatment Menu with 200ms Crossfade */}
      <section className="treatments-curated-section section-pad page-container">
        <Reveal>
          <div style={{ maxWidth: '640px', marginBottom: '32px' }}>
            <p className="eyebrow" style={{ color: 'var(--treatments-burgundy)' }}>
              Curated Treatment Menu
            </p>
            <h2 style={{ color: 'var(--treatments-burgundy)', fontSize: '2.5rem', marginBottom: '12px' }}>
              Choose your focus area.
            </h2>
            <p style={{ color: 'var(--treatments-plum)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Select a category to preview our featured services, pricing and photographic results.
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <div className="curated-category-tabs" role="tablist" aria-label="Curated treatment categories">
          {Object.values(curatedMenuData).map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              id={`tab-${cat.id}`}
              aria-selected={selectedKey === cat.id}
              aria-controls={`panel-${cat.id}`}
              className={`curated-tab-btn ${selectedKey === cat.id ? 'is-active' : ''}`}
              onClick={() => handleSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Crossfading Display Area */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className={`curated-content-wrap ${isTransitioning ? 'is-transitioning' : ''}`}
        >
          {/* Featured Natural-Light Photograph */}
          <div className="curated-photo-frame">
            <img
              src={activeCategory.photo}
              alt={activeCategory.photoAlt}
              loading="eager"
            />
          </div>

          {/* Description & Curated Services List */}
          <div className="curated-body">
            <span
              className="eyebrow"
              style={{ color: 'var(--treatments-copper)', marginBottom: '8px', display: 'block' }}
            >
              Featured Selection
            </span>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '2rem',
                color: 'var(--treatments-burgundy)',
                marginBottom: '14px',
                lineHeight: 1.25
              }}
            >
              {activeCategory.title}
            </h3>
            <p
              style={{
                color: 'var(--treatments-plum)',
                fontSize: '1rem',
                lineHeight: 1.65,
                marginBottom: '28px'
              }}
            >
              {activeCategory.description}
            </p>

            <div className="curated-service-list">
              {activeCategory.services.map((svc) => (
                <Link
                  key={svc.name}
                  to={`/treatments/${svc.slug}`}
                  className="curated-service-row"
                  aria-label={`View details for ${svc.name}`}
                >
                  <span className="curated-service-name">{svc.name}</span>
                  <span className="curated-service-price">{svc.price} &rarr;</span>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact?enquiry=treatments"
                className="btn-treatments-primary"
                aria-label="Book a Treatment"
              >
                <span>Book a Treatment</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                to="/pricing"
                className="text-link"
                style={{ color: 'var(--treatments-burgundy)', fontWeight: 600 }}
              >
                View full pricing guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Catalogue Section */}
      <section className="section-pad page-container treatment-hub-intro">
        <Reveal>
          <SectionHeading
            eyebrow="Complete Catalogue"
            title="All clinic treatments."
            description="Explore every individual service, preparation steps and transparent appointment pricing."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="treatment-hub-intro__notice" style={{ background: 'var(--treatments-panel)', borderColor: 'var(--treatments-panel-border)' }}>
            <span>
              <Heart aria-hidden="true" style={{ color: 'var(--treatments-burgundy)' }} />
            </span>
            <p style={{ color: 'var(--treatments-plum)' }}>
              Every treatment begins with a personal conversation. Suitability and bespoke styling are confirmed with Racheal prior to starting.
            </p>
            <ActionLink href="/contact?enquiry=treatments" variant="text">
              Ask a question
            </ActionLink>
          </div>
        </Reveal>

        <div className="treatment-grid">
          {treatments.map((t, index) => (
            <ImageCard
              key={t.slug}
              title={t.title}
              category={t.categoryLabel}
              description={t.description}
              image={t.image}
              href={`/treatments/${t.slug}`}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Personal Care Guarantee CTA */}
      <section className="soft-cta section-pad" style={{ backgroundColor: 'var(--treatments-panel)', borderTop: '1px solid var(--treatments-panel-border)' }}>
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--treatments-burgundy)' }}>
              Personal &amp; Private Clinic
            </p>
            <h2 style={{ color: 'var(--treatments-burgundy)' }}>Questions before booking?</h2>
            <p style={{ color: 'var(--treatments-plum)' }}>
              Racheal is happy to talk you through treatment options, preparation, or any questions about your skin.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/contact?enquiry=treatments" className="btn-treatments-primary">
                <span>Book a Treatment</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
