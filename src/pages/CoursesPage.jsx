import React, { useState, useMemo } from 'react';
import { assets, courses } from '../data/siteData';
import { ActionLink, CourseCard, PageIntro, Reveal } from '../components/Common';

const categories = ['All courses', ...Array.from(new Set(courses.map((c) => c.category)))];

export function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All courses');

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All courses') return courses;
    return courses.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="page page--academy page-motion">
      <PageIntro
        eyebrow="Organik Beauty Academy"
        title="Courses for your next chapter."
        description="Career-focused beauty education, delivered in a personal and supportive setting."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Courses' }
        ]}
        image={assets.academyHero}
        imageAlt="Organik Beauty Academy original website imagery"
      />

      <section className="section-pad page-container course-catalogue">
        <Reveal>
          <div className="course-catalogue__intro">
            <div>
              <p className="eyebrow">Find your pathway</p>
              <h2>Explore the course menu.</h2>
            </div>
            <p>
              Course details, pricing and entry information are confirmed directly with the academy. One card per
              available course — no duplicate listings.
            </p>
          </div>
        </Reveal>

        {/* Filter Chips */}
        <div className="filter-row" role="group" aria-label="Filter courses by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${selectedCategory === cat ? 'is-active' : ''}`}
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Display */}
        {selectedCategory === 'All courses' ? (
          Array.from(new Set(courses.map((c) => c.category))).map((cat) => {
            const catCourses = courses.filter((c) => c.category === cat);
            const slug = cat.replace(/\W+/g, '-').toLowerCase();
            return (
              <section key={cat} className="course-category" aria-labelledby={`course-category-${slug}`}>
                <div className="course-category__heading">
                  <h2 id={`course-category-${slug}`}>{cat}</h2>
                  <span>
                    {catCourses.length} {catCourses.length === 1 ? 'course' : 'courses'}
                  </span>
                </div>
                <div className="course-grid">
                  {catCourses.map((c, idx) => (
                    <Reveal key={c.slug} delay={(idx % 3) * 60}>
                      <CourseCard course={c} index={idx} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className="course-grid course-grid--filtered">
            {filteredCourses.map((c, idx) => (
              <Reveal key={c.slug} delay={(idx % 3) * 60}>
                <CourseCard course={c} index={idx} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="course-catalogue__footer">
          <p>Have a question about course dates, kits or payment options?</p>
          <ActionLink href="/contact?enquiry=academy" variant="secondary">
            Enquire with the academy
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
