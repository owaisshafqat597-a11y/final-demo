import React from 'react';
import { assets, courses } from '../data/siteData';
import { ActionLink, PageIntro, Reveal } from '../components/Common';
import { CourseFinder } from '../components/CourseFinder';

export function CoursesPage() {
  return (
    <main className="page page--academy page-motion" data-division="academy">
      <PageIntro
        eyebrow="Organik Beauty Academy"
        title="Courses for your next chapter."
        description="Career-focused beauty education, delivered in an intimate and supportive Mermaid Beach studio. Compare course pathways, levels and entry details below."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Courses' }
        ]}
        image={assets.academyHero}
        imageAlt="Organik Beauty Academy original training imagery"
      />

      {/* Integrated Interactive Course Finder with persistent session state */}
      <CourseFinder showIntro={false} />

      {/* Academy Enrolment Support Footer */}
      <section className="section-pad page-container" style={{ paddingTop: '16px' }}>
        <div className="course-catalogue__footer" style={{ background: 'var(--academy-parchment)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-card)', padding: '36px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', color: 'var(--academy-eucalyptus)', marginBottom: '8px' }}>
            Have a question about dates, custom kits or payment plans?
          </h3>
          <p style={{ color: 'var(--academy-dark-text)', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Every prospective student is welcome to speak with Racheal directly before committing to ensure the curriculum aligns with your goals.
          </p>
          <ActionLink href="/contact?enquiry=academy" variant="secondary">
            Enquire with the Academy
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
