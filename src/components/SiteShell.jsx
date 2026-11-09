import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  X
} from 'lucide-react';
import { assets, siteConfig, treatmentsHours, academyHours } from '../data/siteData';

export const CartContext = createContext(null);

export const useOrganikCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useOrganikCart must be used inside SiteShell");
  return context;
};

// Clean navigation: Treatments & Academy appear ONCE in primary division switcher
const treatmentNavLinks = [
  { label: "All Treatments", href: "/treatments" },
  { label: "Price List", href: "/pricing?tab=treatments" },
  { label: "Client Gallery", href: "/gallery?tab=treatments" },
  { label: "Aftercare", href: "/treatments/aftercare" },
  { label: "Meet Racheal", href: "/treatments/team" },
  { label: "Contact Clinic", href: "/contact?enquiry=treatments" }
];

const academyNavLinks = [
  { label: "All Courses", href: "/academy/courses" },
  { label: "Course Fees", href: "/pricing?tab=academy" },
  { label: "Student Work", href: "/academy/student-gallery" },
  { label: "Course Information", href: "/academy/course-information" },
  { label: "Meet Your Trainer", href: "/academy/trainer" },
  { label: "Supplies Shop", href: "/academy/shop" },
  { label: "Contact Academy", href: "/contact?enquiry=academy" }
];

const homeNavLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Pricing & Fees", href: "/pricing" },
  { label: "Work & Gallery", href: "/gallery" },
  { label: "Find Organik", href: "/contact" }
];

export function ClinicNoticeCompact({ division }) {
  const [visible, setVisible] = useState(true);
  // Show only on treatments pages to keep academy completely focused
  if (!visible || division !== "treatments") return null;

  return (
    <div className="clinic-notice-compact" role="status">
      <span className="clinic-notice-compact__badge">Clinic Notice</span>
      <span>Clinic closed Mon 16 – Mon 23 Nov 2026. Personal care appointments resume Tue 24 Nov.</span>
      <Link to="/contact?enquiry=treatments" className="clinic-notice-compact__link">
        Plan your visit <ArrowRight size={13} aria-hidden="true" />
      </Link>
      <button
        type="button"
        aria-label="Dismiss notice"
        onClick={() => setVisible(false)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--treatments-burgundy)',
          cursor: 'pointer',
          padding: '2px',
          display: 'inline-flex',
          alignItems: 'center',
          marginLeft: '8px'
        }}
      >
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  );
}

export function BrandLockup() {
  return (
    <Link to="/" className="brand-lockup" aria-label="Organik home">
      <span className="brand-lockup__seal">
        <img src={assets.logo} alt="Organik seal" />
      </span>
      <span className="brand-lockup__text">
        <span className="brand-lockup__name">organik</span>
        <span className="brand-lockup__caption">beauty clinic · academy</span>
      </span>
    </Link>
  );
}

export function Header({ division, footerVisible }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = division === "academy" ? academyNavLinks : division === "treatments" ? treatmentNavLinks : homeNavLinks;
  const isAcademy = division === "academy";
  const ctaHref = isAcademy ? "/academy/courses" : "/contact?enquiry=treatments";
  const ctaText = isAcademy ? "Find a Course" : "Book a Treatment";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath, location.search]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setMobileMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = orig;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`site-header ${footerVisible ? "site-header--footer-visible" : ""}`} aria-hidden={footerVisible || undefined}>
        <div className="site-header__main page-container">
          <BrandLockup />
          
          {/* Primary Division Destinations: Treatments vs Academy */}
          <nav className="division-switch" aria-label="Choose Organik destination">
            <Link
              to="/treatments"
              className={division === "treatments" ? "is-active-treatments" : ""}
              aria-current={division === "treatments" ? "page" : undefined}
            >
              Treatments
            </Link>
            <Link
              to="/academy"
              className={division === "academy" ? "is-active-academy" : ""}
              aria-current={division === "academy" ? "page" : undefined}
            >
              Academy
            </Link>
          </nav>

          <div className="site-header__actions">
            <Link
              to={ctaHref}
              className={`site-header__cta ${isAcademy ? "btn-primary-academy" : "btn-primary-treatment"}`}
            >
              <span>{ctaText}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="icon-button site-header__menu-toggle"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Strip */}
        <div className="site-header__nav-wrap">
          <nav className="site-header__nav page-container" aria-label="Secondary navigation">
            {links.map((link) => {
              const baseHref = link.href.split("?")[0];
              const hasQuery = link.href.includes("?");
              const isActive = hasQuery
                ? location.pathname === baseHref && location.search.includes(link.href.split("?")[1])
                : currentPath === baseHref || (baseHref !== "/" && currentPath.startsWith(baseHref + "/"));

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          <button
            type="button"
            className="mobile-navigation__backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="mobile-navigation__panel" aria-label="Mobile navigation">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <BrandLockup />
              <button
                type="button"
                className="icon-button mobile-navigation__close"
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="eyebrow" style={{ marginBottom: '8px' }}>Primary Destinations</p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <Link
                to="/treatments"
                className="btn-primary-treatment"
                style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Treatments
              </Link>
              <Link
                to="/academy"
                className="btn-primary-academy"
                style={{ flex: 1, justifyContent: 'center', fontSize: '13px', padding: '10px 14px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Academy
              </Link>
            </div>

            <p className="eyebrow" style={{ marginBottom: '8px' }}>
              {isAcademy ? "Academy Navigation" : "Clinic Navigation"}
            </p>
            {links.map((l) => (
              <Link key={l.label} to={l.href} onClick={() => setMobileMenuOpen(false)}>
                {l.label} <ArrowRight size={16} />
              </Link>
            ))}

            <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <Link
                to={ctaHref}
                className={`mobile-navigation__cta ${isAcademy ? "btn-primary-academy" : "btn-primary-treatment"}`}
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{ctaText}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export function CartDrawer({ items, open, onClose, onRemove }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cart-layer" role="dialog" aria-modal="true" aria-label="Demo bag">
      <button
        type="button"
        className="cart-layer__backdrop"
        aria-label="Close demo bag"
        onClick={onClose}
      />
      <aside className="cart-drawer">
        <div className="cart-drawer__header">
          <div>
            <p className="eyebrow">Demo bag</p>
            <h2>Enquiry list</h2>
          </div>
          <button
            type="button"
            className="icon-button"
            aria-label="Close demo bag"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {items.length > 0 ? (
          <div className="cart-drawer__body">
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-drawer__footer">
              <p className="cart-drawer__note">
                Items added here are for demo review and will be passed to your enquiry message.
              </p>
              <Link
                to="/contact?enquiry=academy"
                className="action-link action-link--primary"
                onClick={onClose}
              >
                Enquire about these items <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-drawer__empty">
            <ShoppingBag size={40} strokeWidth={1.5} />
            <p>Your demo enquiry bag is currently empty.</p>
            <button type="button" className="action-link action-link--secondary" onClick={onClose}>
              Keep exploring
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export function Footer({ division }) {
  const isAcademy = division === "academy";
  const isTreatments = division === "treatments";

  return (
    <footer className={`site-footer ${isAcademy ? "site-footer--academy" : isTreatments ? "site-footer--treatments" : "site-footer--home"}`}>
      <div className="site-footer__main page-container">
        <div className="site-footer__brand">
          <BrandLockup />
          <p style={{ marginTop: '16px', maxWidth: '360px' }}>
            A thoughtful destination for aesthetic beauty, skin therapy and boutique professional training in Mermaid Beach, Gold Coast.
          </p>
          <div className="site-footer__socials" style={{ marginTop: '20px' }}>
            <a href={siteConfig.instagramTreatments} target="_blank" rel="noreferrer" aria-label="Organik Laser and Beauty on Instagram">
              <Camera size={16} />
              <span>@organiklaserandbeauty</span>
              <ArrowUpRight size={13} />
            </a>
            <a href={siteConfig.instagramAcademy} target="_blank" rel="noreferrer" aria-label="Organik Beauty Academy on Instagram">
              <Camera size={16} />
              <span>@organikbeautyacademy</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="site-footer__column site-footer__hours">
          <h2>Studio Hours</h2>
          <div className="site-footer__hours-group">
            <h3>Clinic Appointments</h3>
            {treatmentsHours.map(([days, hrs]) => (
              <p key={days}>
                <span>{days}</span>
                <span>{hrs}</span>
              </p>
            ))}
          </div>
          <div className="site-footer__hours-group" style={{ marginTop: '16px' }}>
            <h3>Academy Training</h3>
            {academyHours.map(([days, hrs]) => (
              <p key={days}>
                <span>{days}</span>
                <span>{hrs}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="site-footer__column site-footer__location">
          <h2>Location</h2>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noreferrer">
            <MapPin size={18} />
            <span className="site-footer__contact-copy">
              <small>Studio &amp; Academy</small>
              {siteConfig.address}
            </span>
            <ArrowUpRight size={14} className="site-footer__external-icon" />
          </a>
          <a href={siteConfig.phoneHref}>
            <Phone size={18} />
            <span className="site-footer__contact-copy">
              <small>Clinic phone</small>
              {siteConfig.phone}
            </span>
          </a>
          <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            <span className="site-footer__contact-copy">
              <small>Direct WhatsApp</small>
              {siteConfig.mobile}
            </span>
          </a>
          <p className="site-footer__division-note" style={{ marginTop: '16px' }}>
            {isAcademy ? "Organik Beauty Academy" : "Organik Laser & Beauty"}
          </p>
        </div>

        <div className="site-footer__column site-footer__explore">
          <h2>Destinations</h2>
          <nav className="site-footer__link-list" aria-label="Footer navigation">
            <Link to="/treatments">Beauty &amp; Skin Treatments</Link>
            <Link to="/academy">Organik Beauty Academy</Link>
            <Link to="/academy/courses">Course Finder &amp; Menu</Link>
            <Link to="/pricing">Treatment Prices &amp; Course Fees</Link>
            <Link to="/gallery">Client &amp; Student Gallery</Link>
            <Link to="/about">Our Story &amp; Founder</Link>
            <Link to="/contact">Contact &amp; Location</Link>
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom page-container">
        <p>© {new Date().getFullYear()} Organik Laser &amp; Beauty · Organik Beauty Academy. All rights reserved.</p>
        <p className="site-footer__licence">Queensland Health Laser Licence · {siteConfig.licence}</p>
        <div>
          <Link to="/policies">Policies</Link>
          <span aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
          <span className="site-footer__demo" style={{ marginLeft: '12px' }}>Demo Mode</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingContact({ hidden }) {
  if (hidden) return null;
  return (
    <div className="floating-contact" aria-label="Quick contact">
      <a className="floating-contact__whatsapp" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" aria-label="Message Organik on WhatsApp">
        <MessageCircle size={22} />
      </a>
      <a className="floating-contact__phone" href={siteConfig.mobileHref} aria-label="Call Organik">
        <Phone size={22} />
      </a>
    </div>
  );
}

export function SiteShell({ children }) {
  const location = useLocation();
  const path = location.pathname;
  const search = location.search;
  const params = new URLSearchParams(search);

  // Active theme determination
  const isAcademyQuery = params.get("tab") === "academy" || params.get("enquiry") === "academy";
  const isTreatmentsQuery = params.get("tab") === "treatments" || params.get("enquiry") === "treatments";

  let division = "home";
  if (path.startsWith("/treatments")) {
    division = "treatments";
  } else if (path.startsWith("/academy")) {
    division = "academy";
  } else if (isAcademyQuery) {
    division = "academy";
  } else if (isTreatmentsQuery) {
    division = "treatments";
  } else if (path === "/pricing" || path === "/gallery" || path === "/contact") {
    // Default to treatments on shared pages unless academy query
    division = "treatments";
  }

  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const addItem = (name, price) => {
    setCartItems((prev) => [...prev, { id: `${Date.now()}-${Math.random()}`, name, price }]);
    setCartOpen(true);
  };

  const removeItem = (id) => setCartItems((prev) => prev.filter((i) => i.id !== id));
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  const cartValue = useMemo(() => ({
    items: cartItems,
    addItem,
    removeItem,
    openCart,
    closeCart,
    cartOpen
  }), [cartItems, cartOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  useEffect(() => {
    const footer = document.querySelector(".site-footer");
    if (!footer || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      setFooterVisible(entries.some((e) => e.isIntersecting));
    }, { threshold: 0, rootMargin: "-120px 0px 0px 0px" });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <CartContext.Provider value={cartValue}>
      <div className={`site-shell site-shell--${division}`} data-division={division}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ClinicNoticeCompact division={division} />
        <Header division={division} footerVisible={footerVisible} />
        <div id="main-content">
          {children}
        </div>
        <Footer division={division} />
        <FloatingContact hidden={footerVisible} />
        <CartDrawer items={cartItems} open={cartOpen} onClose={closeCart} onRemove={removeItem} />
      </div>
    </CartContext.Provider>
  );
}
