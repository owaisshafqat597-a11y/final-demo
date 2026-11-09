import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  Smartphone
} from 'lucide-react';
import { siteConfig, treatmentsHours, academyHours } from '../data/siteData';
import { PageIntro, Reveal } from '../components/Common';

function ContactForm({ activeDivision, setActiveDivision }) {
  const [searchParams] = useSearchParams();
  const enquiryParam = searchParams.get('enquiry');
  const courseParam = searchParams.get('course');
  const treatmentParam = searchParams.get('treatment');

  const [enquiry, setEnquiry] = useState(() => {
    if (courseParam || enquiryParam === 'academy') return 'Academy courses';
    return 'Treatments';
  });

  const [preselectedItem, setPreselectedItem] = useState(courseParam || treatmentParam || '');
  const [message, setMessage] = useState(() => {
    if (courseParam) {
      return `Hi Racheal, I would like to enquire about enrolling in the ${courseParam} at Organik Beauty Academy. Please share details on upcoming dates, kit options, and enrolment.`;
    }
    if (treatmentParam) {
      return `Hi Racheal, I would like to enquire about booking the ${treatmentParam} at your Mermaid Beach clinic. Please let me know your earliest available appointment.`;
    }
    return '';
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (courseParam) {
      setEnquiry('Academy courses');
      setPreselectedItem(courseParam);
      setActiveDivision('academy');
    } else if (treatmentParam) {
      setEnquiry('Treatments');
      setPreselectedItem(treatmentParam);
      setActiveDivision('treatments');
    } else if (enquiryParam === 'academy') {
      setEnquiry('Academy courses');
      setActiveDivision('academy');
    } else if (enquiryParam === 'treatments') {
      setEnquiry('Treatments');
      setActiveDivision('treatments');
    }
  }, [courseParam, treatmentParam, enquiryParam, setActiveDivision]);

  const handleEnquiryChange = (newVal) => {
    setEnquiry(newVal);
    if (newVal === 'Academy courses') {
      setActiveDivision('academy');
    } else if (newVal === 'Treatments') {
      setActiveDivision('treatments');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) {
      setErrorMsg('');
      setSubmitted(true);
    }
  };

  const isAcademy = enquiry === 'Academy courses';

  return (
    <form className="contact-form" onSubmit={handleSubmit} style={{ background: '#FFFFFF', border: `1px solid ${isAcademy ? 'var(--academy-brass)' : 'var(--treatments-copper)'}`, borderRadius: 'var(--radius-card)', padding: '36px' }}>
      {submitted ? (
        <div className="contact-form__success" role="status">
          <span style={{ background: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', color: '#FAF7F2', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check aria-hidden="true" size={24} />
          </span>
          <div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', marginTop: '12px' }}>
              Thanks for getting in touch.
            </h2>
            <p style={{ marginTop: '8px', lineHeight: 1.6 }}>
              This is a demo preview. In a live environment, your enquiry would be securely sent to {isAcademy ? siteConfig.academyEmail : siteConfig.treatmentsEmail}.
            </p>
            <button
              type="button"
              className="text-link"
              style={{ marginTop: '16px', fontWeight: 600, color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}
              onClick={() => {
                setSubmitted(false);
                setMessage('');
              }}
            >
              Send another demo enquiry &rarr;
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="eyebrow" style={{ color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
            {isAcademy ? 'Academy Enrolment Enquiry' : 'Clinic Appointment Enquiry'}
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.4rem', color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', marginBottom: '8px' }}>
            Let's start with a conversation.
          </h2>
          <p className="contact-form__intro" style={{ color: 'var(--color-text-body)', marginBottom: '24px' }}>
            Share a little about what you're looking for and Racheal will guide you through the next steps.
          </p>

          {/* Preselected Course or Treatment Banner */}
          {preselectedItem && (
            <div style={{ background: isAcademy ? 'var(--academy-parchment)' : 'var(--treatments-panel)', border: `1px solid ${isAcademy ? 'rgba(23,63,56,0.15)' : 'var(--treatments-panel-border)'}`, borderRadius: 'var(--radius-sm)', padding: '12px 16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', display: 'block' }}>
                  {isAcademy ? 'Selected Course' : 'Selected Treatment'}
                </span>
                <strong style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: isAcademy ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
                  {preselectedItem}
                </strong>
              </div>
              <button
                type="button"
                onClick={() => setPreselectedItem('')}
                style={{ fontSize: '0.8125rem', background: 'none', border: 'none', textDecoration: 'underline', color: 'var(--color-text-muted)', cursor: 'pointer' }}
              >
                Clear
              </button>
            </div>
          )}

          <div className="contact-form__grid">
            <label>
              <span>
                Your name <i aria-hidden="true">*</i>
              </span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="First and last name"
                required
              />
            </label>
            <label>
              <span>
                Email address <i aria-hidden="true">*</i>
              </span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Phone number</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="0400 000 000"
              />
            </label>
            <label>
              <span>
                I'm enquiring about <i aria-hidden="true">*</i>
              </span>
              <select
                value={enquiry}
                onChange={(e) => handleEnquiryChange(e.target.value)}
                name="enquiry"
                required
                style={{ fontFamily: 'var(--sans)' }}
              >
                <option value="Treatments">Clinic Treatments</option>
                <option value="Academy courses">Academy Courses &amp; Mentorship</option>
                <option value="Gift cards">Gift Cards</option>
                <option value="General enquiry">General Question</option>
              </select>
            </label>
            <label className="contact-form__message">
              <span>
                Your message <i aria-hidden="true">*</i>
              </span>
              <textarea
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help? Tell us your preferred dates or questions."
                required
              />
            </label>
          </div>

          {errorMsg ? (
            <p className="contact-form__error" role="alert">
              {errorMsg}
            </p>
          ) : null}

          <div style={{ marginTop: '24px' }}>
            <button
              className={isAcademy ? 'btn-academy-primary' : 'btn-treatments-primary'}
              type="submit"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>{isAcademy ? 'Send Academy Enquiry' : 'Send Treatment Enquiry'}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <p className="contact-form__demo-note" style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            Demo mode active — messages are safely previewed without transmission.
          </p>
        </>
      )}
    </form>
  );
}

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const enquiryParam = searchParams.get('enquiry');
  const courseParam = searchParams.get('course');
  const initialDivision = courseParam || enquiryParam === 'academy' ? 'academy' : 'treatments';
  const [activeDivision, setActiveDivision] = useState(initialDivision);

  return (
    <main className="page page--shared page-motion" data-division={activeDivision}>
      <PageIntro
        eyebrow="We're here to help"
        title="Say hello."
        description="Ask a question about a clinic treatment, academy enrolment or custom visit. Racheal is happy to talk through every detail."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Contact' }]}
        compact
      />

      <section className="section-pad page-container contact-page">
        <Reveal>
          <ContactForm activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        </Reveal>

        <Reveal delay={100}>
          <aside className="contact-aside" style={{ background: activeDivision === 'academy' ? 'var(--academy-parchment)' : 'var(--treatments-panel)', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-card)', padding: '36px' }}>
            <div className="contact-aside__intro">
              <p className="eyebrow" style={{ color: activeDivision === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
                Find Organik
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: activeDivision === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)' }}>
                Mermaid Beach, <em>Gold Coast.</em>
              </h2>
              <p style={{ marginTop: '8px', lineHeight: 1.6 }}>
                Located on the Gold Coast Highway in beautiful Mermaid Beach with convenient client parking.
              </p>
            </div>

            <div className="contact-aside__block" style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: activeDivision === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Studio Address</h3>
                  <address style={{ fontStyle: 'normal', marginTop: '4px', lineHeight: 1.5 }}>
                    {siteConfig.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="contact-aside__block" style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Phone size={20} style={{ color: activeDivision === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Direct Phone &amp; SMS</h3>
                  <p style={{ margin: '4px 0 0' }}>
                    <a href={siteConfig.mobileHref} style={{ color: 'inherit', fontWeight: 600 }}>
                      {siteConfig.mobile}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-aside__block" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--color-border-subtle)' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: activeDivision === 'academy' ? 'var(--academy-eucalyptus)' : 'var(--treatments-burgundy)', marginBottom: '12px' }}>
                {activeDivision === 'academy' ? 'Academy Training Hours' : 'Clinic Operating Hours'}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem' }}>
                {(activeDivision === 'academy' ? academyHours : treatmentsHours).map(([days, hrs]) => (
                  <li key={days} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span>{days}</span>
                    <strong>{hrs}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>
    </main>
  );
}
