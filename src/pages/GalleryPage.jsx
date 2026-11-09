import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, Eye, Play, Sparkles } from 'lucide-react';
import { assets, galleryPhotos } from '../data/siteData';
import { PageIntro, Reveal, SectionHeading } from '../components/Common';
import { Lightbox } from '../components/Lightbox';

const tabs = [
  { id: 'treatments', label: 'Client Work (Clinic)' },
  { id: 'academy', label: 'Student Work (Academy)' }
];

export function GalleryPage({ defaultTab }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const initialTab = tabParam === 'academy' || tabParam === 'treatments' ? tabParam : defaultTab || 'treatments';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (tabParam === 'academy' || tabParam === 'treatments') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setLightboxIndex(null);
    setSearchParams({ tab: newTab });
  };

  const photos = useMemo(
    () => galleryPhotos.filter((item) => item.division === activeTab),
    [activeTab]
  );

  const isAcademy = activeTab === 'academy';

  return (
    <main className="page page--gallery page-motion" data-division={activeTab}>
      <PageIntro
        eyebrow="Visual Portfolio"
        title="The Organik Gallery."
        description="Authentic client treatments and student work captured directly in our Mermaid Beach clinic and training academy."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Gallery' }]}
        image={isAcademy ? assets.academyHero : assets.clinicEditorial}
        imageAlt="Organik visual gallery"
      />

      <section className="section-pad page-container gallery-page">
        {/* Category Tabs */}
        <div className="price-tabs gallery-tabs" role="tablist" aria-label="Gallery categories" style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`gallery-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls="gallery-tab-panel"
              className={`filter-chip ${activeTab === tab.id ? 'is-active' : ''}`}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: 'var(--radius-sm)',
                border: `1px solid ${tab.id === 'academy' ? 'var(--academy-brass)' : 'var(--treatments-copper)'}`,
                background: activeTab === tab.id ? (tab.id === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)') : '#FFFFFF',
                color: activeTab === tab.id ? '#FAF7F2' : 'inherit',
                cursor: 'pointer'
              }}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div id="gallery-tab-panel" role="tabpanel" aria-labelledby={`gallery-tab-${activeTab}`}>
          <Reveal>
            <SectionHeading
              eyebrow={isAcademy ? 'Organik Beauty Academy' : 'Organik Laser & Beauty'}
              title={isAcademy ? 'Student practice & model artistry.' : 'Personalised clinic results.'}
              description={
                isAcademy
                  ? 'Real technique work created by our students during supervised live model sessions.'
                  : 'Authentic lash styling, cosmetic tattooing, and skin treatments performed personally by Racheal.'
              }
              align="center"
            />
          </Reveal>

          {/* Authentic Photo Gallery Grid with Accessible Lightbox Trigger */}
          <div className="gallery-page__photos" style={{ marginTop: '36px' }}>
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {photos.map((photo, idx) => (
                <Reveal key={`${activeTab}-${photo.src}-${idx}`} delay={(idx % 3) * 60}>
                  <button
                    type="button"
                    className="gallery-grid__item"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`View enlarged photo ${idx + 1} of ${photos.length}`}
                    style={{
                      border: '1px solid var(--color-border-subtle)',
                      borderRadius: 'var(--radius-card)',
                      overflow: 'hidden',
                      padding: 0,
                      background: '#FFFFFF',
                      width: '100%',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: isAcademy ? 'rgba(23, 63, 56, 0.4)' : 'rgba(72, 30, 45, 0.4)',
                          opacity: 0,
                          transition: 'opacity 200ms ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FAF7F2'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', padding: '8px 16px', borderRadius: 'var(--radius-btn)', fontWeight: 600, fontSize: '0.875rem' }}>
                          <Eye size={16} /> Enlarge View
                        </span>
                      </div>
                    </div>
                    <div style={{ padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
                        {isAcademy ? 'Academy Portfolio' : 'Clinic Result'}
                      </span>
                      <small style={{ color: 'var(--color-text-muted)' }}>Photo #{idx + 1}</small>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Genuine Photography Statement */}
          <div style={{ margin: '48px auto 0', maxWidth: '680px', padding: '20px 24px', background: isAcademy ? 'var(--academy-parchment)' : 'var(--treatments-panel)', border: `1px solid ${isAcademy ? 'rgba(23,63,56,0.15)' : 'var(--treatments-panel-border)'}`, borderRadius: 'var(--radius-card)', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '0.9375rem', color: isAcademy ? 'var(--academy-dark-text)' : 'var(--treatments-plum)', lineHeight: 1.6 }}>
              <strong>Authentic Visual Standards:</strong> Every photograph represents real client care or genuine student model training at Organik. We avoid deceptive filters or unmatched comparisons.
            </p>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
            {isAcademy ? (
              <Link to="/academy" className="btn-academy-primary">
                <span>Explore Academy Courses</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <Link to="/contact?enquiry=treatments" className="btn-treatments-primary">
                <span>Book a Treatment</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        photos={photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </main>
  );
}
