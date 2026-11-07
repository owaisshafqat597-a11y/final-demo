import React from 'react';
import { Heart } from 'lucide-react';
import { assets, treatments } from '../data/siteData';
import { ActionLink, ImageCard, PageIntro, Reveal, SectionHeading } from '../components/Common';

export function TreatmentsPage() {
  return (
    <main className="page page--treatments page-motion">
      <PageIntro
        eyebrow="The treatment room"
        title="Treatments, made personal."
        description="A considered menu of beauty, skin and advanced services — all delivered with time, care and a conversation first."
        breadcrumbs={[{ label: "Organik", href: "/" }, { label: "Treatments" }]}
        image={assets.clinicHero}
        imageAlt="Organik Laser & Beauty clinic imagery from the original website"
      />

      <section className="section-pad page-container treatment-hub-intro">
        <Reveal>
          <SectionHeading
            eyebrow="Explore the menu"
            title="Find the service that feels right."
            description="Choose a treatment to learn more about what to expect, pricing information and how to enquire."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="treatment-hub-intro__notice">
            <span>
              <Heart aria-hidden="true" />
            </span>
            <p>
              Every treatment begins with a personal conversation. Service suitability and exact details are confirmed with Racheal before booking.
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

      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">A question before you book?</p>
            <h2>We're happy to talk it through.</h2>
            <p>Get in touch to discuss a service, timing or a personalised appointment.</p>
            <ActionLink href="/contact?enquiry=treatments" variant="primary">
              Contact the clinic
            </ActionLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
