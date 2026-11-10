import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  GraduationCap,
  MapPin,
  Phone,
  Smartphone
} from 'lucide-react';
import { siteConfig, treatmentsHours, academyHours } from '../data/siteData';
import { PageIntro, Reveal } from '../components/Common';

function ContactForm() {
  const [searchParams] = useSearchParams();
  const enquiryParam = searchParams.get('enquiry');
  const [enquiry, setEnquiry] = useState('Treatments');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (enquiryParam === 'academy') setEnquiry('Academy courses');
    if (enquiryParam === 'treatments') setEnquiry('Treatments');
  }, [enquiryParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.reportValidity()) {
      setErrorMsg('');
      setSubmitted(true);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {submitted ? (
        <div className="contact-form__success" role="status">
          <span>
            <Check aria-hidden="true" />
          </span>
          <div>
            <h2>Thanks for getting in touch.</h2>
            <p>
              This is a design demo, so your message hasn't been sent. Please contact Organik directly using the details on this page.
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => setSubmitted(false)}
            >
              Send another demo enquiry <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="eyebrow">Send an enquiry</p>
          <h2>Let's start with a conversation.</h2>
          <p className="contact-form__intro">
            Share a little about what you're looking for and the right Organik team member can help.
          </p>
          <div className="contact-form__grid">
            <label>
              <span>
                Your name <i aria-hidden="true">*</i>
              </span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
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
                placeholder="Optional"
              />
            </label>
            <label>
              <span>
                I'm enquiring about <i aria-hidden="true">*</i>
              </span>
              <select
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                name="enquiry"
                required
              >
                <option>Treatments</option>
                <option>Academy courses</option>
                <option>Gift cards</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="contact-form__message">
              <span>
                Your message <i aria-hidden="true">*</i>
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help?"
                required
              />
            </label>
          </div>
          {errorMsg ? (
            <p className="contact-form__error" role="alert">
              {errorMsg}
            </p>
          ) : null}
          <button className="button button--dark" type="submit">
            Send demo enquiry <ArrowRight aria-hidden="true" />
          </button>
          <p className="contact-form__demo-note">
            Demo form only — messages are not sent or stored.
          </p>
        </>
      )}
    </form>
  );
}

export function ContactPage() {
  return (
    <main className="page page--shared page-motion">
      <PageIntro
        eyebrow="We're here to help"
        title="Contact us."
        description="Ask a question about a treatment, course or visit. We'd love to hear from you."
        breadcrumbs={[{ label: 'Organik', href: '/' }, { label: 'Contact' }]}
        compact
      />

      <section className="section-pad page-container contact-page">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={100}>
          <aside className="contact-aside">
            <div className="contact-aside__intro">
              <p className="eyebrow">Find Organik</p>
              <h2>
                Mermaid Beach, <em>Gold Coast.</em>
              </h2>
              <p>Clinic and academy visits are arranged by appointment.</p>
            </div>

            <a
              className="contact-aside__address"
              href="https://maps.google.com/?q=Shop+10,+2563+Gold+Coast+Highway,+Mermaid+Beach+QLD+4218"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" />
              <span>{siteConfig.address}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>

            <div className="contact-aside__links">
              <a href={siteConfig.phoneHref}>
                <span className="contact-aside__icon-circle">
                  <Phone size={15} aria-hidden="true" />
                </span>
                <span>
                  <small>Clinic phone</small>
                  {siteConfig.phone}
                </span>
              </a>
              <a href={siteConfig.mobileHref}>
                <span className="contact-aside__icon-circle">
                  <Smartphone size={15} aria-hidden="true" />
                </span>
                <span>
                  <small>Call or WhatsApp</small>
                  {siteConfig.mobile}
                </span>
              </a>
              <a href={`mailto:${siteConfig.treatmentsEmail}`}>
                <span className="contact-aside__icon-circle contact-aside__email-icon">@</span>
                <span>
                  <small>Treatment enquiries</small>
                  {siteConfig.treatmentsEmail}
                </span>
              </a>
              <a href={`mailto:${siteConfig.academyEmail}`}>
                <span className="contact-aside__icon-circle contact-aside__email-icon">@</span>
                <span>
                  <small>Academy enquiries</small>
                  {siteConfig.academyEmail}
                </span>
              </a>
            </div>

            <div className="contact-aside__hours">
              <div className="hours-card__heading">
                <span>
                  <Clock3 aria-hidden="true" />
                </span>
                <div>
                  <h3>Clinic hours</h3>
                  <p>By appointment</p>
                </div>
              </div>
              {treatmentsHours.map(([day, hours]) => (
                <p key={day} className="hours-card__row">
                  <span>{day}</span>
                  <span>{hours}</span>
                </p>
              ))}
            </div>

            <div className="contact-aside__hours contact-aside__hours--academy">
              <div className="hours-card__heading">
                <span>
                  <GraduationCap aria-hidden="true" />
                </span>
                <div>
                  <h3>Academy hours</h3>
                  <p>Training by arrangement</p>
                </div>
              </div>
              {academyHours.map(([day, hours]) => (
                <p key={day} className="hours-card__row">
                  <span>{day}</span>
                  <span>{hours}</span>
                </p>
              ))}
            </div>
          </aside>
        </Reveal>
      </section>
    </main>
  );
}
