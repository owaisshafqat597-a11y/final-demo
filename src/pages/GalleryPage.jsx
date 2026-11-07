import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Play, Sparkles } from 'lucide-react';
import { assets, beforeAfterComparisons, galleryPhotos } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Lightbox } from '../components/Lightbox';

const tabs = [
  { id: 'treatments', label: 'Treatments' },
  { id: 'academy', label: 'Academy' }
];

export function GalleryPage({ defaultTab }) {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const initialTab = tabParam === 'academy' || tabParam === 'treatments' ? tabParam : defaultTab || 'treatments';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (tabParam === 'academy' || tabParam === 'treatments') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const comparisons = useMemo(
    () => beforeAfterComparisons.filter((item) => item.division === activeTab),
    [activeTab]
  );

  const photos = useMemo(
    () => galleryPhotos.filter((item) => item.division === activeTab),
    [activeTab]
  );

  const isAcademy = activeTab === 'academy';

  return (
    <main className="page page--gallery page-motion">
      <PageIntro
        eyebrow="Before & after"
        title="The Organik gallery."
        description="Explore before and after results from the treatment room and work created by students at Organik Beauty Academy."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Gallery' }]}
        image={assets.clinicEditorial}
        imageAlt="Organik Laser & Beauty gallery imagery"
      />

      <section className="section-pad page-container gallery-page">
        {/* Category Tabs */}
        <div className="price-tabs gallery-tabs" role="tablist" aria-label="Gallery categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`gallery-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls="gallery-tab-panel"
              className={activeTab === tab.id ? 'is-active' : ''}
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
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
              title={isAcademy ? 'Student before & after.' : 'Treatment before & after.'}
              description={
                isAcademy
                  ? 'Results created by our students on live models, under trainer supervision.'
                  : 'Drag the slider on each image to compare the before and after result.'
              }
            />
          </Reveal>

          {/* Before & After Cards */}
          <div className="before-after-grid">
            {comparisons.map((comp, idx) => (
              <Reveal key={`${activeTab}-${comp.title}`} delay={(idx % 2) * 80}>
                <article className="before-after-card">
                  <BeforeAfterSlider
                    beforeImage={comp.before}
                    afterImage={comp.after}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                  <div className="before-after-card__body">
                    <p className="eyebrow">{comp.category}</p>
                    <h3>{comp.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Photo Gallery Grid */}
          <div className="gallery-page__photos">
            <Reveal>
              <SectionHeading
                eyebrow="A little peek inside"
                title={isAcademy ? 'Inside the academy.' : 'Inside the clinic.'}
              />
            </Reveal>

            <div className="gallery-grid">
              {photos.map((photo, idx) => (
                <Reveal key={`${activeTab}-${photo.src}-${idx}`} delay={(idx % 4) * 50}>
                  <button
                    type="button"
                    className="gallery-grid__item"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    <span>
                      <Play size={16} aria-hidden="true" /> View image
                    </span>
                    <small>{isAcademy ? 'Academy' : 'Treatments'}</small>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Notice */}
          <Reveal>
            <div className="gallery-page__notice">
              <span>
                <Sparkles size={18} aria-hidden="true" />
              </span>
              <p>
                Results vary from person to person. Images shown are a design preview — approved client and student
                before &amp; after photos will be added before launch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">{isAcademy ? 'Learn these skills' : 'Love what you see?'}</p>
            <h2>{isAcademy ? 'Create results like these.' : 'Your own result starts here.'}</h2>
            <p>
              {isAcademy
                ? 'Explore our career-focused courses and start building your skills.'
                : 'Book a consultation and talk through the treatment that suits you.'}
            </p>
            <div className="soft-cta__actions">
              <ActionLink
                href={isAcademy ? '/contact?enquiry=academy' : '/contact?enquiry=treatments'}
                variant="primary"
              >
                {isAcademy ? 'Enquire about a course' : 'Book appointment'}
              </ActionLink>
              <ActionLink href={isAcademy ? '/pricing?tab=academy' : '/pricing'} variant="text">
                View pricing
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        photos={photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={(idx) => setLightboxIndex(idx)}
      />
    </main>
  );
}
