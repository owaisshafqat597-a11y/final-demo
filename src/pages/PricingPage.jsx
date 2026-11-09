import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  GraduationCap,
  Heart,
  Sparkles,
  Wallet
} from 'lucide-react';
import {
  cosmeticTattooPrices,
  plasmaOffers,
  treatments,
  clinicPaymentTerms,
  academyPaymentTerms,
  courses
} from '../data/siteData';
import { ActionLink, PageIntro, Reveal } from '../components/Common';

const treatmentPriceTabs = [
  { id: 'lash-brow', label: 'Lash & Brow' },
  { id: 'cosmetic-tattoo', label: 'Cosmetic Tattoo' },
  { id: 'facials-skin', label: 'Facials & Skin' },
  { id: 'advanced', label: 'Advanced' }
];

const groupBadges = {
  'Lip Tattoo': 'Lips & Contour',
  'Brow Tattoo': 'Brows & Shape',
  'Eyeliner Tattoo': 'Lash Line & Eyeliner',
  'Packages': 'Bespoke Packages'
};

function PriceTable({ rows, caption, durationLabel = 'Appointment', isAcademy = false }) {
  return (
    <div className="price-table-wrap">
      <table className="price-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">{durationLabel}</th>
            <th scope="col">Price</th>
            <th scope="col" style={{ textAlign: 'right' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.service}-${row.price}`}>
              <th scope="row">
                <span>{row.service}</span>
                {row.detail ? <small>{row.detail}</small> : null}
              </th>
              <td>
                <span className="duration-pill">{row.duration || 'Enquire for details'}</span>
              </td>
              <td>
                <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
                  {row.price}
                </strong>
              </td>
              <td style={{ textAlign: 'right' }}>
                <Link
                  to={isAcademy ? `/contact?enquiry=academy&course=${encodeURIComponent(row.service)}` : `/contact?enquiry=treatments&treatment=${encodeURIComponent(row.service)}`}
                  className="price-row-action"
                  style={{ color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', fontWeight: 600 }}
                >
                  {isAcademy ? 'Enquire' : 'Book'} <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CosmeticTattooPrices({ compact = false }) {
  const items = compact ? cosmeticTattooPrices.slice(0, 5) : cosmeticTattooPrices;
  const groups = Array.from(new Set(items.map((i) => i.group)));

  return (
    <div className="tattoo-prices">
      {groups.map((group) => (
        <div key={group} className="tattoo-prices__group">
          <div className="tattoo-prices__heading">
            <div>
              <h3>{group}</h3>
              <span className="pink-badge-pill">{groupBadges[group] || '✨ Premium Treatment'}</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#8c7377' }}>All prices in AUD</span>
          </div>
          <PriceTable
            caption={`${group} pricing`}
            rows={items.filter((a) => a.group === group)}
          />
        </div>
      ))}
      {compact && (
        <ActionLink href="/treatments/price-list?category=cosmetic-tattoo" variant="text">
          View all cosmetic tattoo prices
        </ActionLink>
      )}
    </div>
  );
}

function PriceCategoryContent({ category }) {
  if (category === 'cosmetic-tattoo') {
    return <CosmeticTattooPrices />;
  }

  if (category === 'advanced') {
    return (
      <div className="price-category-content">
        <div className="pricing-intro-banner" style={{ marginBottom: '24px' }}>
          <div className="pricing-intro-banner__icon">
            <Sparkles size={22} />
          </div>
          <div className="pricing-intro-banner__text">
            <strong>Limited-time promotional pricing:</strong> Plasma Fibroblast offer pricing is listed below.
            Save up to $565 on full face and neck lifts with owner-practitioner Racheal.
          </div>
        </div>

        {/* Plasma Offers Cards */}
        <div className="plasma-offers-grid" style={{ marginBottom: '32px' }}>
          {plasmaOffers.map((offer) => (
            <article key={offer.title} className="plasma-offer-card">
              <span className="pink-badge-pill" style={{ marginBottom: '10px' }}>
                Special Offer · {offer.detail}
              </span>
              <h3>{offer.title}</h3>
              <div className="plasma-offer-card__price" style={{ margin: '12px 0 16px' }}>
                <s>{offer.oldPrice}</s>
                <strong>{offer.price}</strong>
              </div>
              <Link to="/contact?enquiry=treatments" className="text-link" style={{ fontWeight: 600 }}>
                Claim this offer <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="tattoo-prices__group">
          <div className="tattoo-prices__heading">
            <div>
              <h3>Other Advanced Services</h3>
              <span className="pink-badge-pill">✨ Tailored Skin Therapies</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#8c7377' }}>Consultation first</span>
          </div>
          <PriceTable
            caption="Advanced skin services"
            rows={treatments
              .filter((t) => t.category === 'advanced' && t.slug !== 'plasma-fibroblast')
              .map((t) => ({
                service: t.title,
                price: 'Enquire for pricing',
                duration: '60–90 min'
              }))}
          />
        </div>
      </div>
    );
  }

  const categoryTreatments = treatments
    .filter((t) => t.category === category)
    .map((t) => ({
      service: t.title,
      price: 'Enquire for pricing',
      duration: '45–90 min'
    }));

  const label = treatmentPriceTabs.find((c) => c.id === category)?.label ?? 'Treatment';

  return (
    <div className="tattoo-prices__group">
      <div className="tattoo-prices__heading">
        <div>
          <h3>{label}</h3>
          <span className="pink-badge-pill">✨ Personalised Care</span>
        </div>
        <span style={{ fontSize: '0.85rem', color: '#8c7377' }}>All prices in AUD</span>
      </div>
      <PriceTable caption={`${label} pricing`} rows={categoryTreatments} />
    </div>
  );
}

export function PricingPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isDedicatedPriceList = location.pathname === '/treatments/price-list';

  // Division tab
  const initialDivision = searchParams.get('tab') === 'academy' ? 'academy' : 'treatments';
  const [division, setDivision] = useState(initialDivision);

  // Sub-category tab
  const initialCategoryParam = searchParams.get('category');
  const initialCategory =
    treatmentPriceTabs.find((c) => c.id === initialCategoryParam)?.id ??
    (isDedicatedPriceList ? 'lash-brow' : 'cosmetic-tattoo');
  const [treatmentCategory, setTreatmentCategory] = useState(initialCategory);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'academy') setDivision('academy');
    if (tab === 'treatments') setDivision('treatments');
  }, [searchParams]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && treatmentPriceTabs.some((c) => c.id === cat)) {
      setTreatmentCategory(cat);
    }
  }, [searchParams]);

  const activeCategoryLabel =
    treatmentPriceTabs.find((c) => c.id === treatmentCategory)?.label ?? 'Treatment prices';

  // Dedicated /treatments/price-list view
  if (isDedicatedPriceList) {
    return (
      <main className="page page--treatments page-motion">
        <PageIntro
          eyebrow="Treatment menu"
          title="A clear guide to pricing."
          description="Cosmetic tattoo and current Plasma Fibroblast offer prices are listed below. For other services, please enquire for current pricing."
          breadcrumbs={[
            { label: 'Organik', href: '/' },
            { label: 'Treatments', href: '/treatments' },
            { label: 'Price list' }
          ]}
          compact
        />

        <section className="section-pad page-container price-list-page">
          <Reveal>
            <div className="pricing-intro-banner">
              <div className="pricing-intro-banner__icon">
                <Sparkles size={22} />
              </div>
              <div className="pricing-intro-banner__text">
                <strong>PayID &amp; Cash Discount:</strong> Pay by PayID, direct transfer or cash and receive <strong>$5 OFF</strong> at checkout.
                We'll always confirm service details, timing and exact price with you before your appointment.
              </div>
            </div>
          </Reveal>

          <div className="price-tabs" role="tablist" aria-label="Treatment price categories">
            {treatmentPriceTabs.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`price-tab-${cat.id}`}
                aria-selected={treatmentCategory === cat.id}
                aria-controls="price-tab-panel"
                className={treatmentCategory === cat.id ? 'is-active' : ''}
                onClick={() => setTreatmentCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            id="price-tab-panel"
            role="tabpanel"
            aria-labelledby={`price-tab-${treatmentCategory}`}
            className="price-tab-panel"
            style={{ marginTop: '24px' }}
          >
            <Reveal key={treatmentCategory}>
              <div className="price-tab-panel__heading" style={{ marginBottom: '20px' }}>
                <div>
                  <p className="eyebrow">Organik Laser &amp; Beauty</p>
                  <h2>{activeCategoryLabel}</h2>
                </div>
                <span>All prices in AUD</span>
              </div>
              <PriceCategoryContent category={treatmentCategory} />
            </Reveal>
          </div>

          <div className="price-list-page__footer">
            <p>Prices and offers are subject to availability. Final details are confirmed directly with Organik.</p>
            <ActionLink href="/contact?enquiry=treatments" variant="primary">
              Enquire about a treatment
            </ActionLink>
          </div>
        </section>
      </main>
    );
  }

  // Full /pricing hub view
  return (
    <main className="page page--pricing page-motion" data-division={division}>
      <PageIntro
        eyebrow="Pricing"
        title="Clear, honest pricing."
        description="Treatment prices and course fees for Organik Laser & Beauty and Organik Beauty Academy — all in one place."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Pricing' }]}
        compact
      />

      <section className="section-pad page-container price-list-page">
        {/* Division Tabs */}
        <div className="price-tabs pricing-division-tabs" role="tablist" aria-label="Choose pricing">
          <button
            type="button"
            role="tab"
            id="pricing-tab-treatments"
            aria-selected={division === 'treatments'}
            aria-controls="pricing-panel"
            className={division === 'treatments' ? 'is-active' : ''}
            onClick={() => setDivision('treatments')}
          >
            Treatments &amp; Cosmetic
          </button>
          <button
            type="button"
            role="tab"
            id="pricing-tab-academy"
            aria-selected={division === 'academy'}
            aria-controls="pricing-panel"
            className={division === 'academy' ? 'is-active' : ''}
            onClick={() => setDivision('academy')}
          >
            Academy Course Fees
          </button>
        </div>

        <div id="pricing-panel" role="tabpanel" aria-labelledby={`pricing-tab-${division}`}>
          {division === 'treatments' ? (
            <>
              {/* Treatments Intro Notice */}
              <Reveal>
                <div className="pricing-intro-banner">
                  <div className="pricing-intro-banner__icon">
                    <Sparkles size={22} />
                  </div>
                  <div className="pricing-intro-banner__text">
                    <strong>Exclusive $5 Savings:</strong> Pay by PayID, direct transfer or cash and receive <strong>$5 OFF</strong> at checkout.
                    All treatments are personally performed by licensed practitioner Racheal Morris.
                  </div>
                </div>
              </Reveal>

              {/* Sub tabs */}
              <div className="price-tabs price-tabs--sub" role="tablist" aria-label="Treatment price categories">
                {treatmentPriceTabs.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    id={`pricing-category-${cat.id}`}
                    aria-selected={treatmentCategory === cat.id}
                    aria-controls="pricing-category-panel"
                    className={treatmentCategory === cat.id ? 'is-active' : ''}
                    onClick={() => setTreatmentCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Price Panel */}
              <div
                id="pricing-category-panel"
                role="tabpanel"
                aria-labelledby={`pricing-category-${treatmentCategory}`}
                className="price-tab-panel"
                style={{ marginTop: '24px' }}
              >
                <Reveal key={treatmentCategory}>
                  <div className="price-tab-panel__heading" style={{ marginBottom: '20px' }}>
                    <div>
                      <p className="eyebrow">Organik Laser &amp; Beauty</p>
                      <h2>{activeCategoryLabel}</h2>
                    </div>
                    <span>All prices in AUD</span>
                  </div>
                  <PriceCategoryContent category={treatmentCategory} />
                </Reveal>
              </div>

              {/* Terms */}
              <div className="trainer-values pricing-terms">
                {clinicPaymentTerms.map((term, index) => {
                  const icons = [Wallet, CreditCard, Heart];
                  const Icon = icons[index % icons.length];
                  return (
                    <Reveal key={term.title} delay={index * 70}>
                      <article className="value-card">
                        <span style={{ color: 'var(--c-maroon)', background: '#fae8ed' }}>
                          <Icon aria-hidden="true" />
                        </span>
                        <h3>{term.title}</h3>
                        <p>{term.copy}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <div className="price-list-page__footer">
                <p>Prices and offers are subject to availability. Final details are confirmed directly with Organik.</p>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/contact?enquiry=treatments" className="btn-treatments-primary">
                    <span>Book a Treatment</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Academy Intro Notice */}
              <Reveal>
                <div
                  className="pricing-intro-banner"
                  style={{
                    background: 'linear-gradient(135deg, #f0f7f3 0%, #e3eee7 100%)',
                    borderColor: '#cce0d4'
                  }}
                >
                  <div
                    className="pricing-intro-banner__icon"
                    style={{ color: 'var(--c-forest)', background: '#ffffff' }}
                  >
                    <GraduationCap size={22} />
                  </div>
                  <div className="pricing-intro-banner__text" style={{ color: '#163b28' }}>
                    <strong>Career-Focused Training:</strong> One-on-one and intimate small-group classes with live model practice.
                    Full professional starter kit options, lifetime WhatsApp trainer mentorship, and flexible payment plans from $250/week.
                  </div>
                </div>
              </Reveal>

              <div className="tattoo-prices__group">
                <div className="tattoo-prices__heading">
                  <div>
                    <h3>Academy Course Tuition</h3>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--academy-eucalyptus)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Career Pathways</span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#586960' }}>Duration &amp; Fees</span>
                </div>
                <PriceTable
                  caption="Organik Beauty Academy course fees"
                  rows={courses.map((c) => ({
                    service: c.title,
                    duration: c.duration,
                    price: c.price,
                    detail: c.upcoming ? 'Enquire for dates' : 'Professional kit & live model training'
                  }))}
                  durationLabel="Duration"
                  isAcademy={true}
                />
              </div>

              {/* Academy Terms */}
              <div className="trainer-values pricing-terms">
                {academyPaymentTerms.map((term, index) => {
                  const icons = [Wallet, CreditCard, Sparkles];
                  const Icon = icons[index % icons.length];
                  return (
                    <Reveal key={term.title} delay={index * 70}>
                      <article className="value-card">
                        <span style={{ color: 'var(--c-forest)', background: '#e3ede7' }}>
                          <Icon aria-hidden="true" />
                        </span>
                        <h3>{term.title}</h3>
                        <p>{term.copy}</p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              <div className="price-list-page__footer">
                <p>Course dates, kits and pricing are confirmed directly with the academy before enrolment.</p>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/contact?enquiry=academy" className="btn-academy-primary">
                    <span>Enquire About a Course</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
