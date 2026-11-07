import React from 'react';
import { ArrowUpRight, Award, Check, Heart, Sparkles, UserCheck } from 'lucide-react';
import { assets } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';

export function TrainerPage() {
  return (
    <main className="page page--academy page-motion">
      <PageIntro
        eyebrow="Your trainer"
        title="Meet Racheal."
        description="An experienced beauty professional who loves helping students build their confidence and find their own way in the industry."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Meet your trainer' }
        ]}
        image={assets.academyHero}
        imageAlt="Organik Beauty Academy owner and trainer image"
      />

      <section className="section-pad page-container trainer-page">
        <Reveal>
          <div className="trainer-page__copy">
            <p className="eyebrow">
              <span className="eyebrow__line"></span>A personal approach to training
            </p>
            <h2>
              Here to help you <em>find your feet.</em>
            </h2>
            <p>
              Racheal is the founder of Organik Beauty Academy and Organik Laser &amp; Beauty, bringing over eight years of
              experience in the beauty industry to each class. She holds laser licensing, specialises in advanced skin and
              aesthetic treatments, and is currently completing TAE40122 Certificate IV in Training and Assessment.
            </p>
            <ul className="check-list">
              <li>
                <Check size={16} aria-hidden="true" /> Certified Beauty Specialist
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> 8+ years experience
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> Award-winning educator
              </li>
            </ul>
            <p>
              Her approach is hands-on and supportive: small classes, time to practise and space to ask the questions that help
              you feel ready for your next step.
            </p>
            <p>
              Racheal also hosts The Organik Lounge Podcast, sharing conversations around beauty, learning and the people behind
              the work.
            </p>
            <div className="trainer-page__actions">
              <ActionLink href="/academy/courses" variant="primary">
                Explore courses
              </ActionLink>
              <a
                className="text-link"
                href="https://www.youtube.com/results?search_query=The+Organik+Lounge+Podcast"
                target="_blank"
                rel="noreferrer"
              >
                The Organik Lounge Podcast <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="trainer-page__photo">
            <img src={assets.academyHero} alt="Organik Beauty Academy trainer Racheal" loading="lazy" />
            <span>
              <Sparkles size={16} aria-hidden="true" /> Learn with Organik
            </span>
          </div>
        </Reveal>
      </section>

      {/* Values Section */}
      <section className="section-pad section-pad--soft">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The Organik approach"
              title="Learning that feels personal."
              description="Every student brings something different. The academy makes room for that."
            />
          </Reveal>

          <div className="trainer-values">
            {[
              {
                icon: Heart,
                title: "A warm welcome",
                copy: "Feel comfortable asking questions and talking about what you want from your training."
              },
              {
                icon: UserCheck,
                title: "Supported practice",
                copy: "Build skills with trainer guidance and live-model practice where included in your course."
              },
              {
                icon: Sparkles,
                title: "A path that fits",
                copy: "Course content, entry details and kit options are discussed with you before enrolment."
              }
            ].map(({ icon: Icon, title, copy }, idx) => (
              <Reveal key={title} delay={idx * 70}>
                <article className="value-card">
                  <span>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">Start with a question</p>
            <h2>Tell us what you'd love to learn.</h2>
            <p>Racheal will help you find the course details that fit your goals.</p>
            <ActionLink href="/contact?enquiry=academy" variant="primary">
              Enquire with Racheal
            </ActionLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
