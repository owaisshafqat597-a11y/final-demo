import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Clock3, CreditCard, Sparkles, UserCheck } from 'lucide-react';
import { courses } from '../data/siteData';
import { ActionLink, PageIntro, Reveal, SectionHeading } from '../components/Common';
import { Accordion } from '../components/Accordion';

export function CourseDetailPage({ explicitSlug }) {
  const { slug: routeSlug } = useParams();
  const slug = explicitSlug || routeSlug;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <main className="page page--academy page-motion">
        <PageIntro
          eyebrow="Organik Beauty Academy"
          title="That course isn't here yet."
          description="Browse the current course menu or ask the academy about upcoming training."
          breadcrumbs={[
            { label: 'Organik', href: '/' },
            { label: 'Academy', href: '/academy' },
            { label: 'Courses', href: '/academy/courses' },
            { label: 'Not found' }
          ]}
          compact
        />
        <section className="section-pad page-container">
          <div className="section-link-row">
            <ActionLink href="/academy/courses" variant="primary">
              Browse all courses
            </ActionLink>
          </div>
        </section>
      </main>
    );
  }

  const isUpcoming = course.upcoming;
  const courseFaqs = [
    {
      question: `Who is the ${course.title.toLowerCase()} for?`,
      answer: "Course entry details vary by pathway. Contact the academy to discuss your experience and confirm suitability before enrolment."
    },
    {
      question: "When do classes run?",
      answer: "Training is typically scheduled between 9am and 2pm. Specific dates and daily timing are confirmed with the academy."
    },
    {
      question: "Is a kit included?",
      answer: "Kit options, including any available without-kit option, are discussed during your enquiry so you can confirm exactly what is included."
    },
    {
      question: "How does payment work?",
      answer: "A 20% deposit secures your place. The full course balance is due two weeks before the course start date. Afterpay and Zip options are available; ask the academy to confirm current payment arrangements."
    }
  ];

  return (
    <main className="page page--academy page-motion">
      <PageIntro
        eyebrow={course.category}
        title={course.title}
        description={course.summary}
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Courses', href: '/academy/courses' },
          { label: course.title }
        ]}
        image={course.image}
        imageAlt={`Organik Beauty Academy ${course.category.toLowerCase()} course`}
      />

      {/* Course Detail Intro */}
      <section className="section-pad page-container course-detail-intro">
        <Reveal>
          <div className="course-detail-intro__copy">
            <p className="eyebrow">
              {isUpcoming ? 'Coming 2027' : 'A personal learning experience'}
            </p>
            <h2>
              {isUpcoming ? (
                <>Something new is <em>on the way.</em></>
              ) : (
                <>Build your skills with <em>support beside you.</em></>
              )}
            </h2>
            <p>
              {course.summary} Course details and entry information are confirmed with the academy before enrolment.
            </p>
            <div className="course-detail-intro__meta">
              <span>
                <Clock3 size={14} aria-hidden="true" /> {course.duration}
              </span>
              <span>
                <CreditCard size={14} aria-hidden="true" /> {course.price}
              </span>
              <span>
                <Sparkles size={14} aria-hidden="true" /> Small class setting
              </span>
            </div>
            {isUpcoming ? (
              <Link
                to={`/contact?enquiry=academy&course=${encodeURIComponent(course.title)}`}
                className="btn-academy-primary"
              >
                <span>Register Your Interest</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : (
              <Link
                to={`/contact?enquiry=academy&course=${encodeURIComponent(course.title)}`}
                className="btn-academy-primary"
              >
                <span>Enquire About This Course</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <aside className="course-detail-card">
            <p className="eyebrow">Course at a glance</p>
            <div>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>
            <div>
              <span>Schedule</span>
              <strong>Typically 9am – 2pm</strong>
            </div>
            <div>
              <span>Practical learning</span>
              <strong>Live models with trainer guidance</strong>
            </div>
            <div>
              <span>Course kit</span>
              <strong>Kit options discussed at enquiry</strong>
            </div>
            <div>
              <span>Payment</span>
              <strong>20% deposit · balance due 2 weeks before start</strong>
            </div>
            <p className="course-detail-card__note">
              Payment options are confirmed during enrolment. Afterpay and Zip are available.
            </p>
          </aside>
        </Reveal>
      </section>

      {/* What You'll Explore */}
      <section className="section-pad section-pad--soft">
        <div className="page-container course-learning">
          <Reveal>
            <div>
              <p className="eyebrow">What you'll explore</p>
              <h2>
                A learning day with <em>room to practise.</em>
              </h2>
              <p>
                Course content is delivered in a personal, practical setting. The exact outline is confirmed with the
                trainer before you enrol.
              </p>
            </div>
          </Reveal>

          <div className="course-learning__list">
            {course.learn.map((item, idx) => (
              <Reveal key={item} delay={idx * 65}>
                <p>
                  <span>0{idx + 1}</span>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course FAQs */}
      <section className="section-pad page-container course-faq-section">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Before you enrol"
              title="Good to know."
              description="We want you to feel clear about the course before you commit."
            />
          </Reveal>
          <Reveal delay={90}>
            <Accordion items={courseFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="soft-cta section-pad">
        <div className="page-container soft-cta__inner">
          <Reveal>
            <p className="eyebrow">Ready to ask?</p>
            <h2>Your next step starts with a conversation.</h2>
            <p>Share your goals and the course you're considering. We'll help you get the information you need.</p>
            <div style={{ marginTop: '24px' }}>
              <Link
                to={`/contact?enquiry=academy&course=${encodeURIComponent(course.title)}`}
                className="btn-academy-primary"
              >
                <span>Enquire About This Course</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
