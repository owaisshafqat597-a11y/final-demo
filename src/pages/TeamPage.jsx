import React from 'react';
import { Check, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { assets } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';

export function TeamPage() {
  const values = [
    {
      icon: Heart,
      title: "Personal",
      copy: "Every treatment is performed by the owner, with the time to listen and tailor the experience."
    },
    {
      icon: Sparkles,
      title: "Considered",
      copy: "Clear service information and honest conversations help you feel comfortable with your choices."
    },
    {
      icon: Check,
      title: "Welcoming",
      copy: "A warm, one-to-one experience where your questions are always welcome."
    }
  ];

  return (
    <main className="page page--treatments page-motion">
      <PageIntro
        eyebrow="The person behind Organik"
        title="Meet Racheal."
        description="Owner-operated, personally delivered and grounded in genuine care for every client."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: 'Meet Racheal' }
        ]}
        image={assets.clinicPortrait}
        imageAlt="Organik owner and practitioner image from the original website"
      />

      <section className="section-pad page-container team-story">
        <Reveal>
          <div className="team-story__copy">
            <p className="eyebrow">Your practitioner</p>
            <h2>
              Beauty care with a <em>personal touch.</em>
            </h2>
            <p>
              Racheal is the owner and practitioner behind Organik Laser &amp; Beauty. With over eight years of beauty-industry experience, she brings a thoughtful, one-to-one approach to each appointment.
            </p>
            <p>
              As a proudly owner-operated business, Organik is a place to feel welcomed, listened to and cared for — with every treatment personally performed by Racheal.
            </p>
            <p className="team-story__signature">
              Racheal <span>Owner · Organik Laser &amp; Beauty</span>
            </p>
            <ActionLink href="/contact?enquiry=treatments" variant="primary">
              Book a conversation
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <aside className="licence-card">
            <span className="licence-card__icon">
              <ShieldCheck aria-hidden="true" />
            </span>
            <p className="eyebrow">Queensland Health licence</p>
            <h3>Licensed laser practitioner</h3>
            <p>Racheal Jean Morris</p>
            <strong>U0110561122</strong>
            <span className="licence-card__rule"></span>
            <p>For questions about a laser service, please contact the clinic before booking.</p>
          </aside>
        </Reveal>
      </section>

      <section className="section-pad section-pad--soft">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="What matters here"
              title="Care in every detail."
              description="A few principles that shape the way Organik welcomes and works with clients."
            />
          </Reveal>

          <div className="values-grid">
            {values.map((v, r) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={75 * r}>
                  <article className="value-card">
                    <span>
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{v.title}</h3>
                    <p>{v.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">Whenever you're ready</p>
            <h2>Come as you are.</h2>
            <p>Ask a question, talk through a treatment or plan a visit.</p>
            <ActionLink href="/contact?enquiry=treatments" variant="primary">
              Get in touch
            </ActionLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
