import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GraduationCap,
  Leaf,
  Play,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { assets } from '../data/siteData';
import { ActionLink, Reveal, SectionHeading } from '../components/Common';
import { CourseFinder } from '../components/CourseFinder';

export function AcademyHomePage() {
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
    <main className="page page--academy page-motion" data-division="academy">
      {/* 1. Substantial Eucalyptus Hero with Learning-in-Practice Photo */}
      <section className="academy-eucalyptus-hero" aria-labelledby="academy-hero-title">
        <div className="page-container">
          <div className="academy-hero-grid">
            <div>
              <span
                className="eyebrow"
                style={{ color: 'var(--academy-brass)', display: 'block', marginBottom: '12px' }}
              >
                Organik Beauty Academy · Boutique Training
              </span>
              <h1 id="academy-hero-title">
                Learn with care.
                <br />
                <em>Grow with confidence.</em>
              </h1>
              <p className="hero-lead">
                Career-focused, mostly one-on-one beauty education with live models and dedicated mentorship from Racheal.
                Gain the practical confidence to launch or elevate your beauty career.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Primary Action in Dark Hero: Eucalyptus text on Parchment */}
                <a
                  href="#course-finder"
                  className="btn-academy-hero-action"
                  aria-label="Find a Course in Organik Beauty Academy"
                >
                  <span>Find a Course</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link
                  to="/contact?enquiry=academy"
                  className="action-link action-link--outline"
                  style={{ color: '#FAF7F2', borderColor: 'rgba(250, 247, 242, 0.4)' }}
                >
                  Ask about enrolment
                </Link>
              </div>
            </div>

            <div className="academy-hero-photo-wrap">
              <img
                src={assets.academyHero}
                alt="Student receiving live supervised instruction at Organik Beauty Academy"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Course Finder Immediately Below Hero on Parchment */}
      <CourseFinder showIntro={true} />

      {/* Learning Experience & Mentorship Philosophy */}
      <section className="section-pad page-container academy-intro">
        <Reveal>
          <div className="academy-intro__copy">
            <p className="eyebrow" style={{ color: 'var(--academy-brass)' }}>
              <span className="eyebrow__line" style={{ background: 'var(--academy-brass)' }}></span>A Welcoming Place to Learn
            </p>
            <h2 style={{ color: 'var(--academy-eucalyptus)' }}>
              Intimate classes. <em>Real guidance.</em>
            </h2>
            <p style={{ color: 'var(--academy-dark-text)', lineHeight: 1.65 }}>
              Organik Beauty Academy is an intimate training space in Mermaid Beach led personally by Racheal.
              We believe quality training cannot happen in crowded classrooms. That is why our courses are capped
              to 1-on-1 or micro-groups, ensuring you spend maximum time on live models with your trainer beside you.
            </p>
            <p style={{ color: 'var(--academy-dark-text)', lineHeight: 1.65 }}>
              From hygiene and skin anatomy to client consultation, pricing strategy, and ongoing post-graduation
              WhatsApp support, you are supported every step of the journey.
            </p>
            <div style={{ marginTop: '24px' }}>
              <ActionLink href="/academy/trainer" variant="text">
                Meet Racheal Morris (Trainer Bio) &rarr;
              </ActionLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="academy-intro__image">
            <img src={assets.academyEditorial} alt="Organik Beauty Academy practical training studio" loading="lazy" />
            <span className="academy-intro__image-note">
              <Users size={16} aria-hidden="true" /> Live model supervised sessions
            </span>
          </div>
        </Reveal>
      </section>

      {/* Academy Advantages Strip */}
      <section className="section-pad section-pad--soft" style={{ background: 'var(--academy-parchment)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="page-container">
          <Reveal>
            <SectionHeading
              eyebrow="The Academy Difference"
              title="Why study at Organik?"
              description="Designed specifically to build genuine practical competence and industry readiness."
              align="center"
            />
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginTop: '36px' }}>
            <div style={{ background: '#FFFFFF', padding: '32px 28px', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ color: 'var(--academy-eucalyptus)', marginBottom: '16px' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--academy-eucalyptus)', marginBottom: '10px' }}>
                1-on-1 &amp; Micro Classes
              </h3>
              <p style={{ color: 'var(--academy-dark-text)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Every student receives full attention. No feeling rushed or overlooked. You learn at your own pace with continuous feedback.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px 28px', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ color: 'var(--academy-eucalyptus)', marginBottom: '16px' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--academy-eucalyptus)', marginBottom: '10px' }}>
                Supervised Live Models
              </h3>
              <p style={{ color: 'var(--academy-dark-text)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Transition seamlessly from theory and mannequin drills to live client models under direct supervision in a calm environment.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '32px 28px', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border-subtle)' }}>
              <div style={{ color: 'var(--academy-eucalyptus)', marginBottom: '16px' }}>
                <GraduationCap size={28} />
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--academy-eucalyptus)', marginBottom: '10px' }}>
                Lifetime Mentorship
              </h3>
              <p style={{ color: 'var(--academy-dark-text)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Learning doesn't end when class finishes. Access ongoing direct WhatsApp support with Racheal as you take your first paying clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demonstrations */}
      <section className="section-pad page-container">
        <Reveal>
          <SectionHeading
            eyebrow="Hands-On Masterclasses"
            title="Watch techniques in practice."
            description="Take a preview look inside our curriculum, equipment and training techniques."
          />
        </Reveal>

        <div className="video-masterclass-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
          {academyVideos.map((video) => (
            <article
              key={video.id}
              className="video-card"
              style={{ background: '#FFFFFF', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border-subtle)', overflow: 'hidden' }}
            >
              <div
                className="video-card__thumbnail"
                style={{ position: 'relative', height: '200px', cursor: 'pointer' }}
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(23, 63, 56, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FAF7F2', color: 'var(--academy-eucalyptus)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <span style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', color: '#FFFFFF', padding: '2px 8px', borderRadius: '3px', fontSize: '0.75rem' }}>
                  {video.duration}
                </span>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="eyebrow" style={{ color: 'var(--academy-brass)', fontSize: '0.75rem', marginBottom: '6px', display: 'block' }}>
                  {video.badge}
                </span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--academy-eucalyptus)', marginBottom: '8px' }}>
                  {video.title}
                </h3>
                <p style={{ color: 'var(--academy-dark-text)', fontSize: '0.875rem', lineHeight: 1.55 }}>
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(18, 51, 45, 0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
          onClick={() => setSelectedVideo(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedVideo(null)}
        >
          <div
            style={{ background: '#FAF7F2', borderRadius: 'var(--radius-card)', maxWidth: '720px', width: '100%', padding: '28px', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--academy-eucalyptus)' }}
              aria-label="Close video preview"
            >
              <X size={24} />
            </button>
            <span className="eyebrow" style={{ color: 'var(--academy-brass)' }}>
              {selectedVideo.badge} · {selectedVideo.duration}
            </span>
            <h2 style={{ fontFamily: 'var(--serif)', color: 'var(--academy-eucalyptus)', fontSize: '1.8rem', marginTop: '6px', marginBottom: '14px' }}>
              {selectedVideo.title}
            </h2>
            <div style={{ height: '340px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '18px', background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={selectedVideo.thumbnail} alt={selectedVideo.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <p style={{ color: 'var(--academy-dark-text)', lineHeight: 1.6 }}>
              {selectedVideo.description} Full technique walk-throughs and hands-on practice are provided in our accredited courses.
            </p>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="soft-cta section-pad" style={{ backgroundColor: 'var(--academy-eucalyptus)', color: '#FAF7F2' }}>
        <div className="page-container soft-cta__inner" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ color: 'var(--academy-brass)' }}>
              Next Enrolment Intake
            </p>
            <h2 style={{ color: '#FAF7F2' }}>Ready to start your beauty journey?</h2>
            <p style={{ color: 'var(--academy-sage)', maxWidth: '540px', margin: '0 auto 28px' }}>
              Enquire today to discuss upcoming course dates, kit options, or flexible payment plans with Afterpay and Zip.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact?enquiry=academy" className="btn-academy-hero-action">
                <span>Enquire About a Course</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/pricing?tab=academy" className="action-link action-link--outline" style={{ color: '#FAF7F2', borderColor: 'rgba(250, 247, 242, 0.4)' }}>
                View Course Fees
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
