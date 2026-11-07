import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { assets, treatments } from '../data/siteData';
import { ActionLink, PageIntro, Reveal } from '../components/Common';

export function AftercarePage() {
  const items = treatments.map((t) => ({
    title: t.title,
    slug: t.slug,
    copy:
      t.slug === 'cosmetic-tattoo'
        ? 'Your practitioner will provide a personal healing plan. The overview on the treatment page is a demo and should be replaced by approved clinic guidance before launch.'
        : t.slug === 'plasma-fibroblast'
        ? 'Service-specific aftercare is discussed and provided by your practitioner at your appointment.'
        : 'Ask the clinic for the aftercare specific to this service. Follow the individual guidance provided at your appointment.'
  }));

  return (
    <main className="page page--treatments page-motion">
      <PageIntro
        eyebrow="After your appointment"
        title="Care that continues at home."
        description="Your practitioner will give you guidance for your specific service. If anything is unclear, please contact the clinic before changing your routine."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: 'Aftercare' }
        ]}
        image={assets.clinicDetailFour}
        imageAlt="Organik Laser & Beauty image — sample visual"
      />

      <section className="section-pad section-pad--soft">
        <div className="page-container aftercare-intro">
          <Reveal>
            <div>
              <p className="eyebrow">The most important part</p>
              <h2>
                Your personal instructions <em>come first.</em>
              </h2>
              <p>
                Aftercare depends on the service and your individual appointment. The cards below link to service pages; they are not a substitute for the instructions provided by your practitioner.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <aside className="aftercare-note">
              <span>
                <Leaf aria-hidden="true" />
              </span>
              <strong>Not sure about something?</strong>
              <p>Contact Organik and we'll help you confirm the right aftercare guidance.</p>
              <ActionLink href="/contact" variant="text">
                Contact the clinic
              </ActionLink>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-pad page-container">
        <div className="aftercare-grid">
          {items.map((item, s) => (
            <Reveal key={item.slug} delay={(s % 3) * 50}>
              <article className="aftercare-card">
                <span className="aftercare-card__number">{String(s + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
                <Link to={`/treatments/${item.slug}`} className="text-link">
                  Service details <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="section-disclaimer">
          This page is a design demonstration. Before launch, replace general notes with clinic-approved, service-specific aftercare copy.
        </p>
      </section>
    </main>
  );
}
