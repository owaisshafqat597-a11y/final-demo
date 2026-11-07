import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock3 } from 'lucide-react';

export function ActionLink({ href, children, variant = 'primary', className = '', onClick }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
  const Component = isExternal ? 'a' : Link;
  const props = isExternal
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noreferrer' : undefined, onClick }
    : { to: href, onClick };

  return (
    <Component className={`action-link action-link--${variant}${className ? ` ${className}` : ''}`} {...props}>
      <span>{children}</span>
      {variant === 'text' && <ArrowUpRight size={16} aria-hidden="true" />}
    </Component>
  );
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false, className = '' }) {
  return (
    <div className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}${className ? ` ${className}` : ''}`}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow__line" />
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description, breadcrumbs = [], image, imageAlt, compact = false }) {
  return (
    <section className={`page-intro${compact ? ' page-intro--compact' : ''}${image ? ' page-intro--image' : ''}`}>
      {image && (
        <div className="page-intro__image-wrap">
          <img src={image} alt={imageAlt || 'Organik beauty image'} loading="eager" />
        </div>
      )}
      <div className="page-intro__content page-container">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((crumb, idx) => (
                <li key={`${crumb.label}-${idx}`}>
                  {idx > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link to={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="eyebrow">
            <span className="eyebrow__line" />
            {eyebrow}
          </p>
        )}
        <h1>{title}</h1>
        {description && <p className="page-intro__description">{description}</p>}
      </div>
    </section>
  );
}

export function ImageCard({ title, category, description, image, href, index = 0, badge }) {
  return (
    <Link to={href} className="image-card" style={{ '--card-index': index }}>
      <span className="image-card__image">
        <img src={image} alt={`Organik ${category.toLowerCase()} image — sample visual`} loading="lazy" />
        {badge && <span className="image-card__badge">{badge}</span>}
        <span className="image-card__arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </span>
      <span className="image-card__body">
        <span className="eyebrow image-card__eyebrow">{category}</span>
        <span className="image-card__title">{title}</span>
        <span className="image-card__description">{description}</span>
        <span className="image-card__more">
          Explore service <ArrowRight size={16} aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

export function CourseCard({ course, index = 0 }) {
  const isUpcoming = course.upcoming;
  return (
    <Link to={`/academy/courses/${course.slug}`} className="course-card" style={{ '--card-index': index }}>
      <span className="course-card__image">
        <img src={course.image} alt={`Organik Beauty Academy ${course.category.toLowerCase()} training`} loading="lazy" />
        <span className="course-card__category">{course.category}</span>
        {isUpcoming && <span className="course-card__status">Coming 2027</span>}
        <span className="image-card__arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </span>
      <span className="course-card__body">
        <span className="course-card__meta">
          <span>
            <Clock3 size={14} aria-hidden="true" /> {course.duration}
          </span>
          <span>{course.price}</span>
        </span>
        <span className="course-card__title">{course.title}</span>
        <span className="course-card__description">{course.summary}</span>
        <span className="image-card__more">
          Course details <ArrowRight size={16} aria-hidden="true" />
        </span>
      </span>
    </Link>
  );
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
