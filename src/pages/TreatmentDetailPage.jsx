import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, UserRound } from 'lucide-react';
import { assets, treatments, cosmeticTattooPrices, plasmaOffers } from '../data/siteData';
import { ActionLink, ImageCard, PageIntro, Reveal, SectionHeading } from '../components/Common';
import { Accordion } from '../components/Accordion';

export function TreatmentDetailPage({ explicitSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = explicitSlug || routeSlug;
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <main className="page page--treatments page-motion">
        <PageIntro
          eyebrow="Treatment menu"
          title="We couldn't find that treatment."
          description="Browse the complete treatment menu or get in touch and we can help you find the right page."
          breadcrumbs={[
            { label: 'Organik', href: '/' },
            { label: 'Treatments', href: '/treatments' },
            { label: 'Not found' }
          ]}
          compact
        />
        <section className="section-pad page-container">
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
          <div className="section-link-row">
            <ActionLink href="/treatments" variant="primary">
              Back to treatments
            </ActionLink>
          </div>
        </section>
      </main>
    );
  }

  const isCosmetic = slug === 'cosmetic-tattoo';
  const isPlasma = slug === 'plasma-fibroblast';

  const cosmeticTattooServices = [
    "Lip Blush",
    "Ombre Lips",
    "Ombre / Powder Brows",
    "Nano Brows",
    "Combination Brows",
    "Microblading / Hairstrokes",
    "Lash Enhancement",
    "Bottom Eyeliner"
  ];

  const cosmeticTattooFaqs = [
    {
      question: "How long does cosmetic tattooing take?",
      answer: "Lip Blush, Ombre Lips and the listed brow services are shown as 2 hours. Other timings are noted in the price list or can be confirmed before booking."
    },
    {
      question: "Which style should I choose?",
      answer: "Racheal can talk through the listed options — including Ombre / Powder Brows, Nano Brows, Combination Brows and Microblading / Hairstrokes — during your consultation."
    },
    {
      question: "What should I expect after my appointment?",
      answer: "You will receive service-specific aftercare from your practitioner. Healing and results vary from person to person, so follow your individual instructions."
    },
    {
      question: "Can I book an annual touch-up?",
      answer: "Annual touch-up services are listed for lips and brows, and eyeliner. Please contact the clinic to discuss your previous work and suitability."
    }
  ];

  const plasmaFaqs = [
    {
      question: "Do I need a consultation first?",
      answer: "Yes. A personal conversation helps confirm the area you are enquiring about, suitability and the appointment details before a booking is made."
    },
    {
      question: "What does the offer include?",
      answer: "The listed offers include Full Face Lift with upper eyelids, Half Face Lift, Upper Blepharoplasty, Full Neck Lift including turkey neck, and Half Neck Lift."
    },
    {
      question: "Where can I find aftercare information?",
      answer: "Your practitioner will provide the service-specific aftercare instructions and explain how to contact the clinic if you have questions."
    }
  ];

  const defaultFaqs = [
    {
      question: "How do I know if this treatment is right for me?",
      answer: "Contact the clinic to discuss your preferences and service details. Any individual suitability questions should be raised with Racheal before booking."
    },
    {
      question: "How much does this service cost?",
      answer: "Pricing and appointment details vary by service. Please enquire for current information before making a booking."
    },
    {
      question: "Will I receive aftercare guidance?",
      answer: "Yes. Any service-specific aftercare is discussed with you directly at your appointment."
    }
  ];

  const healingTimeline = [
    {
      title: "Before your appointment",
      detail: "Share your relevant questions and any previous cosmetic tattoo history during your consultation. Your practitioner will confirm any service-specific preparation."
    },
    {
      title: "The first days",
      detail: "Follow the personalised written aftercare provided at your appointment. If anything is unclear, contact Organik before changing your routine."
    },
    {
      title: "As your skin settles",
      detail: "Healing experiences differ. Your practitioner will explain what to expect for your service and when to get in touch if you have a concern."
    },
    {
      title: "Touch-up timing",
      detail: "Any touch-up recommendation is discussed individually. Refer to the current price list and confirm timing directly with the clinic."
    }
  ];

  const tattooGroups = Array.from(new Set(cosmeticTattooPrices.map((p) => p.group)));

  return (
    <main className="page page--treatments page-motion">
      <PageIntro
        eyebrow={treatment.categoryLabel}
        title={treatment.title}
        description={treatment.description}
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: treatment.title }
        ]}
        image={treatment.image}
        imageAlt={`Organik ${treatment.categoryLabel.toLowerCase()} image — sample visual`}
      />

      <section className="treatment-detail-intro section-pad page-container">
        <Reveal>
          <div className="treatment-detail-intro__copy">
            <p className="eyebrow">
              <span className="eyebrow__line"></span>Your appointment
            </p>
            <h2>
              {isCosmetic ? (
                <>
                  Thoughtful detail.
                  <br />
                  <em>Soft definition.</em>
                </>
              ) : isPlasma ? (
                <>
                  A considered service, <em>with you at the centre.</em>
                </>
              ) : (
                <>
                  A little time for <em>yourself.</em>
                </>
              )}
            </h2>
            <p>
              {isCosmetic
                ? "Cosmetic tattooing offers personalised definition for lips, brows and eyeliner. Explore the service options, then take the time to talk through your preferences with Racheal."
                : isPlasma
                ? "Plasma Fibroblast appointments begin with a personal conversation about the area, your questions and the offer details. Suitability and aftercare are always discussed before booking."
                : "Every appointment starts with a conversation about the service, your preferences and what you would like to know. Racheal will walk you through the details before you decide."}
            </p>
            <div className="treatment-detail-hero__pricing-bar" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', margin: '20px 0 24px' }}>
              <div style={{ background: 'var(--treatments-panel)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--treatments-panel-border)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--treatments-copper)', display: 'block' }}>Pricing Info</span>
                <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--treatments-burgundy)' }}>{treatment.prices || 'Enquire for pricing'}</strong>
              </div>
              {treatment.duration && (
                <div style={{ background: 'var(--treatments-panel)', padding: '10px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--treatments-panel-border)' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--treatments-copper)', display: 'block' }}>Duration</span>
                  <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--treatments-burgundy)' }}>{treatment.duration}</strong>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link
                to={`/contact?enquiry=treatments&treatment=${encodeURIComponent(treatment.title)}`}
                className="btn-treatments-primary"
                aria-label={`Book a Treatment - ${treatment.title}`}
              >
                <span>Book a Treatment</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="text-link" style={{ color: 'var(--treatments-burgundy)', fontWeight: 600 }}>
                View full pricing guide &rarr;
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <aside className="treatment-detail-intro__aside">
            <span className="treatment-detail-intro__aside-icon">
              <UserRound aria-hidden="true" />
            </span>
            <h3>Personal, owner-operated care</h3>
            <p>Your treatment is personally performed by Racheal in the Mermaid Beach clinic.</p>
            <span className="treatment-detail-intro__aside-line"></span>
            <p className="treatment-detail-intro__aside-note">
              <ShieldCheck aria-hidden="true" />
              Queensland Health laser licence details are available on the team page.
            </p>
          </aside>
        </Reveal>
      </section>

      {/* Cosmetic Tattoo Specific Layout */}
      {isCosmetic && (
        <>
          <section className="section-pad section-pad--soft">
            <div className="page-container">
              <Reveal>
                <SectionHeading
                  eyebrow="Cosmetic tattoo menu"
                  title="Find your finish."
                  description="Explore the available lip, brow and eyeliner services. Your preferred shape and colour are discussed with Racheal before the appointment."
                />
              </Reveal>

              <div className="tattoo-services-grid">
                {cosmeticTattooServices.map((service, s) => (
                  <Reveal key={service} delay={(s % 4) * 50}>
                    <article className="tattoo-service-card">
                      <span className="tattoo-service-card__number">0{s + 1}</span>
                      <h3>{service}</h3>
                      <p>Ask about your preferred style and the right appointment for you.</p>
                      <Link to="/contact?enquiry=treatments" aria-label={`Enquire about ${service}`}>
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad page-container">
            <Reveal>
              <SectionHeading
                eyebrow="Transparent pricing"
                title="Cosmetic tattoo prices."
                description="Appointment durations are listed where provided. Please confirm all service details when enquiring."
              />
            </Reveal>

            <div className="tattoo-prices">
              {tattooGroups.map((group) => (
                <div key={group} className="tattoo-prices__group">
                  <div className="tattoo-prices__heading">
                    <h3>{group}</h3>
                    <span>Prices as supplied</span>
                  </div>
                  <div className="price-table-wrap">
                    <table className="price-table">
                      <caption>{group} pricing</caption>
                      <thead>
                        <tr>
                          <th scope="col">Service</th>
                          <th scope="col">Appointment</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cosmeticTattooPrices
                          .filter((p) => p.group === group)
                          .map((row) => (
                            <tr key={`${row.service}-${row.price}`}>
                              <th scope="row">
                                <span>{row.service}</span>
                                {row.detail ? <small>{row.detail}</small> : null}
                              </th>
                              <td>{row.duration || 'Enquire for details'}</td>
                              <td>{row.price}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              <ActionLink href="/treatments/price-list?category=cosmetic-tattoo" variant="text">
                View all cosmetic tattoo prices
              </ActionLink>
            </div>
          </section>

          <section className="healing-section section-pad section-pad--soft">
            <div className="page-container">
              <Reveal>
                <SectionHeading
                  eyebrow="Your aftercare"
                  title="A clear, personal healing plan."
                  description="Healing and aftercare vary by person. The instructions from your practitioner are the most important guide."
                />
              </Reveal>

              <div className="healing-timeline">
                {healingTimeline.map((step, i) => (
                  <Reveal key={step.title} delay={70 * i}>
                    <article className="healing-step">
                      <span className="healing-step__index">0{i + 1}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.detail}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <p className="section-disclaimer">
                Aftercare overview for design demonstration only. Follow the written service-specific guidance supplied by your practitioner.
              </p>
            </div>
          </section>
        </>
      )}

      {/* Plasma Fibroblast Specific Layout */}
      {isPlasma && (
        <>
          <section className="section-pad section-pad--soft">
            <div className="page-container">
              <Reveal>
                <SectionHeading
                  eyebrow="Current Plasma Fibroblast offers"
                  title="Choose the area you'd like to discuss."
                  description="The following promotional prices were supplied by Organik. Please confirm current availability and suitability with Racheal."
                />
              </Reveal>

              <div className="plasma-offers-grid">
                {plasmaOffers.map((offer, s) => (
                  <Reveal key={offer.title} delay={(s % 3) * 60}>
                    <article className="plasma-offer-card">
                      <p className="eyebrow">Offer · {offer.detail}</p>
                      <h3>{offer.title}</h3>
                      <div className="plasma-offer-card__price">
                        <s>{offer.oldPrice}</s>
                        <strong>{offer.price}</strong>
                      </div>
                      <Link to="/contact?enquiry=treatments" className="text-link">
                        Ask about this offer <ArrowRight aria-hidden="true" />
                      </Link>
                    </article>
                  </Reveal>
                ))}
              </div>

              <p className="section-disclaimer">
                Promotional pricing is shown as supplied. Appointment availability and suitability are confirmed directly with the clinic.
              </p>
            </div>
          </section>

          <section className="section-pad page-container">
            <div className="plasma-process">
              <Reveal>
                <div>
                  <p className="eyebrow">Before you decide</p>
                  <h2>
                    A personal conversation, <em>first.</em>
                  </h2>
                  <p>
                    Talk through your questions, the area you are considering, and the service-specific details before making a booking. Your practitioner will provide aftercare guidance at your appointment.
                  </p>
                  <ActionLink href="/contact?enquiry=treatments" variant="text">
                    Enquire about Plasma Fibroblast
                  </ActionLink>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="plasma-process__list">
                  <p>
                    <span>01</span>
                    <strong>Discuss your enquiry</strong>
                    <small>Share the area and questions you have.</small>
                  </p>
                  <p>
                    <span>02</span>
                    <strong>Confirm the details</strong>
                    <small>Review offer availability and service information.</small>
                  </p>
                  <p>
                    <span>03</span>
                    <strong>Receive individual guidance</strong>
                    <small>Aftercare is explained by your practitioner.</small>
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* Default Layout for Other Treatments */}
      {!isCosmetic && !isPlasma && (
        <section className="section-pad section-pad--soft">
          <div className="page-container">
            <Reveal>
              <div className="service-detail-grid">
                <div>
                  <p className="eyebrow">A little more information</p>
                  <h2>
                    Personalised to <em>you.</em>
                  </h2>
                  <p>
                    Each appointment is tailored through a conversation about the service and your preferences. Treatment steps, timing and aftercare are confirmed directly with the clinic so you know what to expect.
                  </p>
                  <ul className="check-list">
                    <li>
                      <Check aria-hidden="true" />
                      Owner-operated, personal service
                    </li>
                    <li>
                      <Check aria-hidden="true" />
                      Appointment details confirmed before booking
                    </li>
                    <li>
                      <Check aria-hidden="true" />
                      Service-specific aftercare guidance
                    </li>
                  </ul>
                  <ActionLink href="/treatments/aftercare" variant="text">
                    Explore aftercare
                  </ActionLink>
                </div>

                <div className="service-detail-grid__image">
                  <img
                    src={assets.clinicDetailThree}
                    alt="Organik treatment image — sample visual"
                    loading="lazy"
                  />
                  <span>Organik Laser &amp; Beauty · Mermaid Beach</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-pad page-container treatment-faq-section">
        <div className="treatment-faq-section__heading">
          <Reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="A few helpful answers."
              description="Still have a question? Contact the clinic and Racheal will be happy to help."
            />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Accordion
            items={isCosmetic ? cosmeticTattooFaqs : isPlasma ? plasmaFaqs : defaultFaqs}
          />
        </Reveal>
      </section>

      {/* Soft CTA */}
      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">Your next step</p>
            <h2>Let's find the right appointment.</h2>
            <p>Send an enquiry or take a look at the current treatment menu and pricing.</p>
            <div className="soft-cta__actions">
              <Link
                to={`/contact?enquiry=treatments&treatment=${encodeURIComponent(treatment.title)}`}
                className="btn-treatments-primary"
              >
                <span>Book a Treatment</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <ActionLink href="/pricing" variant="text">
                See full pricing
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
