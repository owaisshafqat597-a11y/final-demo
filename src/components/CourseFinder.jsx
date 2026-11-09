import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock3, Filter, GraduationCap, RotateCcw, Sparkles, X } from 'lucide-react';
import { courses } from '../data/siteData';

export function CourseFinder({ showIntro = true }) {
  // Session storage preservation so selections survive visiting detail pages
  const [discipline, setDiscipline] = useState(() => {
    return sessionStorage.getItem('organik_finder_discipline') || 'all';
  });
  const [level, setLevel] = useState(() => {
    return sessionStorage.getItem('organik_finder_level') || 'all';
  });
  const [availability, setAvailability] = useState(() => {
    return sessionStorage.getItem('organik_finder_avail') || 'all';
  });

  useEffect(() => {
    sessionStorage.setItem('organik_finder_discipline', discipline);
  }, [discipline]);

  useEffect(() => {
    sessionStorage.setItem('organik_finder_level', level);
  }, [level]);

  useEffect(() => {
    sessionStorage.setItem('organik_finder_avail', availability);
  }, [availability]);

  const handleReset = () => {
    setDiscipline('all');
    setLevel('all');
    setAvailability('all');
    sessionStorage.removeItem('organik_finder_discipline');
    sessionStorage.removeItem('organik_finder_level');
    sessionStorage.removeItem('organik_finder_avail');
  };

  const hasActiveFilters = discipline !== 'all' || level !== 'all' || availability !== 'all';

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Discipline filter
      if (discipline === 'lash') {
        if (course.category !== 'Lash & Brow' && course.category !== 'Beauty') return false;
      } else if (discipline === 'cosmetic') {
        if (course.category !== 'Cosmetic Tattoo') return false;
      } else if (discipline === 'dermal') {
        if (course.category !== 'Dermal') return false;
      } else if (discipline === 'laser') {
        if (course.category !== 'Laser Courses') return false;
      }

      // Level filter
      if (level === 'beginner') {
        if (!course.level.toLowerCase().includes('beginner')) return false;
      } else if (level === 'experienced') {
        if (!course.level.toLowerCase().includes('experienced')) return false;
      }

      // Availability filter
      if (availability === 'available') {
        if (course.upcoming) return false;
      } else if (availability === 'upcoming') {
        if (!course.upcoming) return false;
      }

      return true;
    });
  }, [discipline, level, availability]);

  const disciplineLabels = {
    all: 'All Disciplines',
    lash: 'Lash & Brow',
    cosmetic: 'Cosmetic Tattoo',
    dermal: 'Dermal & Skin',
    laser: 'Laser & IPL'
  };

  const levelLabels = {
    all: 'All Experience Levels',
    beginner: 'Beginners Welcome',
    experienced: 'Experienced Technicians'
  };

  const availabilityLabels = {
    all: 'All Availability',
    available: 'Enrolling Now',
    upcoming: 'Upcoming 2027'
  };

  return (
    <section className="academy-finder-section" id="course-finder" aria-labelledby="finder-title">
      <div className="page-container">
        {showIntro && (
          <div style={{ maxWidth: '640px', marginBottom: '36px' }}>
            <span
              className="eyebrow"
              style={{ color: 'var(--academy-brass)', display: 'block', marginBottom: '8px' }}
            >
              Course Finder &amp; Comparison
            </span>
            <h2
              id="finder-title"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '2.5rem',
                color: 'var(--academy-eucalyptus)',
                marginBottom: '12px'
              }}
            >
              Find the right course for your career.
            </h2>
            <p style={{ color: 'var(--academy-dark-text)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Filter by your desired discipline, your verified experience level, and current class availability.
            </p>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="finder-controls-box" style={{ background: '#FFFFFF', border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-card)', padding: '24px 28px', marginBottom: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', alignItems: 'flex-end' }}>
            {/* 1. Discipline */}
            <div>
              <label htmlFor="finder-discipline" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--academy-eucalyptus)', marginBottom: '8px' }}>
                Discipline
              </label>
              <select
                id="finder-discipline"
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', background: 'var(--academy-parchment)', color: 'var(--academy-dark-text)', fontFamily: 'var(--sans)', fontSize: '0.95rem' }}
              >
                <option value="all">All Disciplines</option>
                <option value="lash">Lashes &amp; Brows</option>
                <option value="cosmetic">Cosmetic Tattooing</option>
                <option value="dermal">Dermal Therapies</option>
                <option value="laser">Laser &amp; IPL</option>
              </select>
            </div>

            {/* 2. Verified Experience Level */}
            <div>
              <label htmlFor="finder-level" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--academy-eucalyptus)', marginBottom: '8px' }}>
                Experience Level
              </label>
              <select
                id="finder-level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', background: 'var(--academy-parchment)', color: 'var(--academy-dark-text)', fontFamily: 'var(--sans)', fontSize: '0.95rem' }}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner Friendly</option>
                <option value="experienced">Experienced Technicians</option>
              </select>
            </div>

            {/* 3. Availability */}
            <div>
              <label htmlFor="finder-avail" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--academy-eucalyptus)', marginBottom: '8px' }}>
                Availability
              </label>
              <select
                id="finder-avail"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', background: 'var(--academy-parchment)', color: 'var(--academy-dark-text)', fontFamily: 'var(--sans)', fontSize: '0.95rem' }}
              >
                <option value="all">All Availability</option>
                <option value="available">Enrolling Now</option>
                <option value="upcoming">Upcoming 2027</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges & Reset Action */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--academy-eucalyptus)' }}>
                Showing {filteredCourses.length} of {courses.length} courses
              </span>
              {hasActiveFilters && (
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {discipline !== 'all' && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(23, 63, 56, 0.08)', color: 'var(--academy-eucalyptus)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8125rem' }}>
                      {disciplineLabels[discipline]}
                      <button type="button" onClick={() => setDiscipline('all')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} aria-label="Clear discipline filter">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {level !== 'all' && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(23, 63, 56, 0.08)', color: 'var(--academy-eucalyptus)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8125rem' }}>
                      {levelLabels[level]}
                      <button type="button" onClick={() => setLevel('all')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} aria-label="Clear level filter">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                  {availability !== 'all' && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(23, 63, 56, 0.08)', color: 'var(--academy-eucalyptus)', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8125rem' }}>
                      {availabilityLabels[availability]}
                      <button type="button" onClick={() => setAvailability('all')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} aria-label="Clear availability filter">
                        <X size={12} />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--academy-eucalyptus)', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
              >
                <RotateCcw size={14} aria-hidden="true" />
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Results Grid / Empty State */}
        {filteredCourses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px', background: '#FFFFFF', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border-subtle)' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--academy-eucalyptus)', marginBottom: '12px' }}>
              No courses match your active filters.
            </h3>
            <p style={{ color: 'var(--academy-dark-text)', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              We regularly host custom one-on-one intensives. Clear your filters to explore our full curriculum or get in touch directly.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleReset}
                className="btn-academy-primary"
              >
                <span>Reset Filters</span>
              </button>
              <Link to="/contact?enquiry=academy" className="text-link" style={{ fontWeight: 600, color: 'var(--academy-eucalyptus)' }}>
                Enquire with Racheal &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map((c) => (
              <article key={c.slug} className="course-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="course-card__media">
                    <img src={c.image} alt={c.title} loading="lazy" />
                    <span className="course-card__badge" style={{ background: 'var(--academy-eucalyptus)', color: '#FAF7F2' }}>
                      {c.category}
                    </span>
                  </div>
                  <div className="course-card__body">
                    <h3 style={{ color: 'var(--academy-eucalyptus)', fontSize: '1.5rem', marginBottom: '8px' }}>
                      {c.title}
                    </h3>
                    <p style={{ color: 'var(--academy-dark-text)', fontSize: '0.9375rem', marginBottom: '20px', lineHeight: 1.55 }}>
                      {c.summary}
                    </p>

                    {/* Aligned Course Details Comparison */}
                    <div style={{ background: 'var(--academy-parchment)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-subtle)', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--color-text-muted)' }}>Duration:</span>
                        <strong style={{ color: 'var(--academy-eucalyptus)' }}>{c.duration}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--color-text-muted)' }}>Entry Level:</span>
                        <strong style={{ color: 'var(--academy-eucalyptus)' }}>{c.level}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                        <span style={{ color: 'var(--color-text-muted)' }}>Tuition:</span>
                        <strong style={{ color: 'var(--academy-eucalyptus)', fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>
                          {c.upcoming ? 'Coming 2027' : c.price}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 24px 24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link
                    to={`/academy/courses/${c.slug}`}
                    className="btn-academy-primary"
                    style={{ flex: 1, textAlign: 'center', fontSize: '0.875rem', padding: '10px 16px' }}
                  >
                    <span>View Syllabus</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    to={`/contact?enquiry=academy&course=${encodeURIComponent(c.title)}`}
                    className="text-link"
                    style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--academy-eucalyptus)' }}
                  >
                    Enquire
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
