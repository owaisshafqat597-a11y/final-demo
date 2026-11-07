import React from 'react';
import { assets } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';

export function AboutPage() {
  const journey = [
    {
      label: "The treatment room",
      title: "Personal care, always.",
      copy: "Every clinic appointment is personally delivered by Racheal, with time for questions and tailored service details."
    },
    {
      label: "The learning space",
      title: "Sharing skills with care.",
      copy: "Career-focused courses help students explore practical beauty skills in a small, supportive class."
    },
    {
      label: "Today in Mermaid Beach",
      title: "A place for your next step.",
      copy: "Whether you are here for a treatment or a new skill, Organik welcomes you with a personal conversation."
    }
  ];

  return (
    <main className="page page--shared page-motion">
      <PageIntro
        eyebrow="One name. Two thoughtful journeys."
        title="The Organik story."
        description="Beauty and education, brought together by one owner-operated business in Mermaid Beach."
        breadcrumbs={[{ label: "Organik", href: "/" }, { label: "Our story" }]}
        image={assets.clinicHero}
        imageAlt="Organik Laser & Beauty original website imagery"
      />

      <section className="section-pad page-container about-story">
        <Reveal>
          <div className="about-story__copy">
            <p className="eyebrow">
              <span className="eyebrow__line"></span>A personal beginning
            </p>
            <h2>
              It starts with <em>how you feel.</em>
            </h2>
            <p>
              Organik was built around a simple idea: beauty should feel personal. At the clinic, that means taking time to listen, share clear information and care for each client as an individual.
            </p>
            <p>
              Every Organik Laser &amp; Beauty treatment is personally performed by owner Racheal, bringing over eight years of experience in the beauty industry to the treatment room.
            </p>
            <p>
              That same personal approach lives at Organik Beauty Academy. Racheal shares her experience with small groups of students, creating space for practical learning, questions and confidence-building.
            </p>
            <ActionLink href="/treatments/team" variant="text">
              Meet Racheal
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-story__image">
            <img
              src={assets.academyHero}
              alt="Organik Beauty Academy image from the original website"
              loading="lazy"
            />
            <span>Beauty · Learning · Personal care</span>
          </div>
        </Reveal>
      </section>

      <section className="section-pad section-pad--soft">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The Organik journey"
              title="Two paths, one personal approach."
              description="An evolving beauty practice, with people and care at the centre."
            />
          </Reveal>

          <div className="journey-timeline">
            {journey.map((item, i) => (
              <Reveal key={item.label} delay={80 * i}>
                <article className="journey-step">
                  <span className="journey-step__index">0{i + 1}</span>
                  <div>
                    <p className="eyebrow">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-divisions section-pad page-container">
        <Reveal>
          <div className="about-division-card about-division-card--clinic">
            <p className="eyebrow">For your own time</p>
            <h2>Organik Laser &amp; Beauty</h2>
            <p>A personal treatment experience, with a thoughtful range of beauty and skin services.</p>
            <ActionLink href="/treatments" variant="light">
              Explore treatments
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="about-division-card about-division-card--academy">
            <p className="eyebrow">For your next chapter</p>
            <h2>Organik Beauty Academy</h2>
            <p>Career-focused beauty education with room to practise and grow.</p>
            <ActionLink href="/academy" variant="outline">
              Explore the academy
            </ActionLink>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
