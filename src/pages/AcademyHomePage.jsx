import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Leaf,
  Play,
  Users,
  X
} from 'lucide-react';
import { assets, courses } from '../data/siteData';
import { ActionLink, CourseCard, Reveal, SectionHeading } from '../components/Common';

export function AcademyHomePage() {
  const featuredCourses = courses.filter((c) => !c.upcoming).slice(0, 3);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const academyVideos = [
    {
      id: 'uv-lash',
      title: 'UV/LED Lash System & Live Model Practice',
      badge: 'Live Demonstration',
      duration: '04:20',
      description: 'Watch Racheal demonstrate safe UV light placement, beam isolation, and instant adhesive cure techniques.',
      thumbnail: assets.academyDetailOne
    },
    {
      id: 'brow-map',
      title: 'Brow Mapping & Symmetry Secrets',
      badge: 'Technique Masterclass',
      duration: '06:15',
      description: 'Hands-on caliper measuring, brow string mapping, and bone structure alignment with student participation.',
      thumbnail: assets.academyDetailTwo
    },
    {
      id: 'studio-tour',
      title: 'Inside the Mermaid Beach Academy Studio',
      badge: 'Campus Tour',
      duration: '03:45',
      description: 'Explore our tranquil training space, private treatment beds, equipment sterilisation setup and student kits.',
      thumbnail: assets.academyEditorial
    }
  ];

  return (
    <main className="page page--academy page-motion">
      {/* Academy Hero */}
      <section className="division-hero division-hero--academy">
        <img
          src={assets.academyHero}
          alt="Organik Beauty Academy original website imagery"
          fetchPriority="high"
        />
        <div className="division-hero__overlay"></div>
        <div className="division-hero__content page-container">
          <p className="eyebrow">Organik Beauty Academy</p>
          <h1>
            Learn with care.
            <br />
            <em>Grow with confidence.</em>
          </h1>
          <p>Career-focused beauty education with the space to practise, ask questions and find your own way forward.</p>
          <div className="division-hero__actions">
            <ActionLink href="/academy/courses" variant="light">
              Explore courses
            </ActionLink>
            <ActionLink href="/contact?enquiry=academy" variant="outline">
              Ask about enrolment
            </ActionLink>
          </div>
        </div>
        <span className="division-hero__caption">Mermaid Beach · Small, supportive classes</span>
      </section>

      {/* Intro Band */}
      <section className="academy-intro-band">
        <div className="page-container academy-intro-band__inner">
          <span className="academy-intro-band__icon">
            <Leaf size={24} aria-hidden="true" />
          </span>
          <div>
            <h2>Career-focused courses</h2>
            <p>Helping students move into the beauty industry</p>
          </div>
          <Link to="/academy/course-information" className="text-link">
            How learning works <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Intro Copy & Photo */}
      <section className="section-pad page-container academy-intro">
        <Reveal>
          <div className="academy-intro__copy">
            <p className="eyebrow">
              <span className="eyebrow__line"></span>A welcoming place to learn
            </p>
            <h2>
              Small classes. <em>Real guidance.</em>
            </h2>
            <p>
              Organik Beauty Academy is a personal training space led by Racheal. Learn in a small group, practise with
              live models under supervision and build confidence at your own pace.
            </p>
            <p>
              Course details, kit options and entry requirements are discussed with you before enrolment, so you can
              choose the pathway that feels right.
            </p>
            <ActionLink href="/academy/trainer" variant="text">
              Meet your trainer
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="academy-intro__image">
            <img src={assets.academyEditorial} alt="Organik Beauty Academy learning space" loading="lazy" />
            <span className="academy-intro__image-note">
              <Users size={16} aria-hidden="true" /> A personal learning experience
            </span>
          </div>
        </Reveal>
      </section>

      {/* Courses Showcase */}
      <section className="section-pad section-pad--soft">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="Choose your next chapter"
              title="Courses with room to grow."
              description="Browse the current course pathways and get in touch to talk through dates, pricing and what is included."
            />
          </Reveal>

          <div className="course-grid">
            {featuredCourses.map((c, idx) => (
              <Reveal key={c.slug} delay={idx * 75}>
                <CourseCard course={c} index={idx} />
              </Reveal>
            ))}
          </div>

          <div className="section-link-row">
            <ActionLink href="/academy/courses" variant="secondary">
              Browse all courses
            </ActionLink>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="academy-steps section-pad page-container">
        <Reveal>
          <SectionHeading
            eyebrow="A clear path forward"
            title="From curious to confident."
            description="A simple, supportive process from your first question to your first day in class."
          />
        </Reveal>

        <div className="steps-grid">
          {[
            { number: "01", title: "Choose a pathway", copy: "Explore the courses and decide what you would like to learn." },
            { number: "02", title: "Talk it through", copy: "Ask about course details, dates, kit options and enrolment." },
            { number: "03", title: "Learn by doing", copy: "Practise in a welcoming setting with personal trainer guidance." }
          ].map((step, idx) => (
            <Reveal key={step.number} delay={idx * 70}>
              <article className="step-card">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video / Reel Showcase (Client Update) */}
      <section className="academy-video-showcase section-pad">
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="Watch &amp; learn"
              title="Inside the Organik Academy."
              description="Step into our training room. See live model demonstrations, lash mapping precision and the calm, supportive learning atmosphere."
            />
          </Reveal>

          <div className="video-card-grid">
            {academyVideos.map((video, idx) => (
              <Reveal key={video.id} delay={idx * 80}>
                <article className="video-card" onClick={() => setSelectedVideo(video)}>
                  <div className="video-card__thumbnail">
                    <img src={video.thumbnail} alt={video.title} loading="lazy" />
                    <span className="video-card__badge">{video.badge}</span>
                    <span className="video-card__duration">{video.duration}</span>
                    <button
                      type="button"
                      className="video-card__play-btn"
                      aria-label={`Play ${video.title}`}
                    >
                      <Play size={22} fill="currentColor" />
                    </button>
                  </div>
                  <div className="video-card__body">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(10, 20, 15, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              backgroundColor: '#1b382b',
              color: '#ffffff',
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '340px' }}>
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#1b382b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <Play size={28} fill="currentColor" />
                </div>
                <span className="green-badge-pill" style={{ background: 'rgba(255,255,255,0.9)', color: '#163b28' }}>
                  {selectedVideo.badge} · {selectedVideo.duration}
                </span>
                <p style={{ marginTop: '12px', fontSize: '0.9rem', color: '#e0efe7' }}>
                  Full high-definition video lesson preview available at Academy enrolment.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '24px 28px' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', margin: '0 0 8px' }}>
                {selectedVideo.title}
              </h3>
              <p style={{ color: '#cfe1d7', fontSize: '0.925rem', lineHeight: 1.5, margin: '0 0 20px' }}>
                {selectedVideo.description}
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <ActionLink href="/contact?enquiry=academy" variant="primary">
                  Ask about enrolment
                </ActionLink>
                <ActionLink href="/academy/courses" variant="outline">
                  View all courses
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Section */}
      <section className="academy-quote">
        <div className="page-container academy-quote__inner">
          <Reveal>
            <span className="academy-quote__mark">“</span>
            <p>My aim is to help every student feel supported, seen and ready for the next step in their beauty career.</p>
            <span className="academy-quote__attribution">Racheal · Trainer, Organik Beauty Academy</span>
            <a
              href="https://www.youtube.com/results?search_query=The+Organik+Lounge+Podcast"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Find The Organik Lounge Podcast <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Academy CTA */}
      <section className="academy-cta section-pad page-container">
        <Reveal>
          <div>
            <p className="eyebrow">Your next chapter</p>
            <h2>Let's talk about what you want to learn.</h2>
            <p>Tell us about your goals and we'll help you explore the right course.</p>
            <ActionLink href="/contact?enquiry=academy" variant="primary">
              Enquire about a course
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="academy-cta__image">
            <img src={assets.academyDetailOne} alt="Learning at Organik Beauty Academy" loading="lazy" />
            <span>
              <GraduationCap size={16} aria-hidden="true" /> Learn at Organik
            </span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
