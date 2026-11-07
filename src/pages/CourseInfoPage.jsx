import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { assets } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';
import { Accordion } from '../components/Accordion';

const faqItems = [
  {
    question: "Why choose Organik Beauty Academy?",
    answer: "We focus on real salon experience, hands-on practical learning, small personalised training and modern beauty techniques used in today’s industry."
  },
  {
    question: "Do I need experience before enrolling?",
    answer: "No. Many of our courses are beginner-friendly and designed for students starting fresh, while some advanced courses suit those with prior beauty knowledge."
  },
  {
    question: "Will I be working on live models?",
    answer: "Yes. Depending on the course, students work on live models under trainer supervision. Some courses begin with mannequin or practice work before moving on to live models."
  },
  {
    question: "How many students are in each class?",
    answer: "Training is primarily delivered one-on-one, giving you a highly personalised experience with dedicated trainer support. You may also choose to study alongside a friend where suitable."
  },
  {
    question: "Can I study with a friend?",
    answer: "Yes. If you study with a friend, you both receive a 10% discount on the course — that’s a 20% discount between the two of you."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes. We offer Zip, Afterpay and customised academy payment plans for eligible students, with minimum weekly repayments of $250 and the full fee finalised before your start date. A 20% deposit is required for all courses to secure your booking date."
  },
  {
    question: "Can I contact the trainer after training?",
    answer: "Yes. Support continues beyond the training day — students stay in touch with their trainer through WhatsApp for guidance, advice and encouragement."
  },
  {
    question: "Can I book extra training after my course?",
    answer: "Yes. Additional hands-on, in-person academy training days can be arranged at $500 per day, subject to trainer availability."
  },
  {
    question: "Can I start working straight after my course?",
    answer: "Many students begin offering treatments after completing their course. Ongoing practice is essential, and you should make sure you understand any insurance, licensing or local regulations before working independently."
  }
];

export function CourseInfoPage() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <main className="page page--academy page-motion">
      <PageIntro
        eyebrow="A clear and supportive process"
        title="Course information."
        description="Everything you need to know before choosing a course at Organik Beauty Academy."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Course information' }
        ]}
        compact
      />

      <section className="section-pad section-pad--soft">
        <div className="page-container course-info-page">
          <Reveal>
            <SectionHeading
              eyebrow="Before your first day"
              title="Feel prepared, at every step."
              description="Select a topic to explore how learning and enrolment work at the academy."
            />
          </Reveal>

          {/* Tab buttons */}
          <div className="course-info-tabs" role="tablist" aria-label="Course information topics">
            {[
              { id: 'experience', label: 'The learning experience' },
              { id: 'enrolment', label: 'Enrolment & kits' },
              { id: 'payments', label: 'Payment options' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`info-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls="course-info-panel"
                className={activeTab === tab.id ? 'is-active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="course-info-panel" id="course-info-panel" role="tabpanel" aria-labelledby={`info-tab-${activeTab}`}>
            {activeTab === 'experience' && (
              <div className="course-info-panel__content">
                <span className="course-info-panel__number">01</span>
                <div>
                  <h2>Hands-on, with guidance beside you.</h2>
                  <p>
                    Courses are delivered in a small, supportive class setting. Students have time to practise, ask questions
                    and work with live models under trainer guidance.
                  </p>
                  <ul className="check-list">
                    <li>
                      <Check size={16} aria-hidden="true" /> Practical, supervised learning
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Typically scheduled between 9am and 2pm
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Course-specific details confirmed before enrolment
                    </li>
                  </ul>
                </div>
                <img src={assets.academyEditorial} alt="Academy learning experience" loading="lazy" />
              </div>
            )}

            {activeTab === 'enrolment' && (
              <div className="course-info-panel__content">
                <span className="course-info-panel__number">02</span>
                <div>
                  <h2>Choose the right pathway.</h2>
                  <p>
                    Tell us about your experience, what you hope to learn and the course you are interested in. The trainer
                    will confirm entry requirements, available dates and the course outline.
                  </p>
                  <ul className="check-list">
                    <li>
                      <Check size={16} aria-hidden="true" /> Ask about kit included and no-kit options
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Confirm course dates and class arrangements
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Receive course details before committing
                    </li>
                  </ul>
                </div>
                <img src={assets.academyDetailTwo} alt="Enrolment and kits" loading="lazy" />
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="course-info-panel__content">
                <span className="course-info-panel__number">03</span>
                <div>
                  <h2>Clear payment steps.</h2>
                  <p>
                    A 20% deposit secures your course place. The full remaining balance is due two weeks before the course
                    start date. Afterpay and Zip are available; confirm the current arrangements with the academy.
                  </p>
                  <ul className="check-list">
                    <li>
                      <Check size={16} aria-hidden="true" /> 20% deposit to secure a place
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Full balance due two weeks before the course
                    </li>
                    <li>
                      <Check size={16} aria-hidden="true" /> Ask about Afterpay and Zip availability
                    </li>
                  </ul>
                </div>
                <img src={assets.academyDetailOne} alt="Payment options" loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad page-container course-info-faq">
        <Reveal>
          <SectionHeading eyebrow="More details" title="Frequently asked questions." />
        </Reveal>
        <Reveal delay={80}>
          <Accordion items={faqItems} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <h2>Still wondering about something?</h2>
            <p>Send a quick enquiry and we'll make sure you have the details you need.</p>
            <ActionLink href="/contact?enquiry=academy" variant="primary">
              Ask the academy
            </ActionLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
