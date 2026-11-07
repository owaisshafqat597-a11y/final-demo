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

const treatmentNavLinks = [
  { label: "Treatments", href: "/treatments" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Aftercare", href: "/treatments/aftercare" },
  { label: "Meet Racheal", href: "/treatments/team" },
  { label: "Contact", href: "/contact" }
];

const academyNavLinks = [
  { label: "Courses", href: "/academy/courses" },
  { label: "Course fees", href: "/pricing?tab=academy" },
  { label: "Student gallery", href: "/academy/student-gallery" },
  { label: "Course information", href: "/academy/course-information" },
  { label: "Meet your trainer", href: "/academy/trainer" },
  { label: "Shop", href: "/academy/shop" },
  { label: "Contact", href: "/contact?enquiry=academy" }
];

const homeNavLinks = [
  { label: "Treatments", href: "/treatments" },
  { label: "Academy", href: "/academy" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our story", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function AnnouncementBar({ division }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={`announcement-bar announcement-bar--${division || 'home'}`} role="status">
      <p>
        <span className="announcement-bar__tag">A little note</span>
        <span>Clinic closed Monday 16 – Monday 23 November 2026</span>
      </p>
      <Link to="/contact" className="announcement-bar__link">
        Plan your visit <ArrowRight className="lucide lucide-arrow-right" aria-hidden="true" size={16} />
      </Link>
      <button
        type="button"
        className="announcement-bar__close"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
      >
        <X className="lucide lucide-x" aria-hidden="true" size={16} />
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
        <span className="brand-lockup__caption">laser · beauty · academy</span>
      </span>
    </Link>
  );
}

export function Header({ division, footerVisible }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = division === "treatments" ? treatmentNavLinks : division === "academy" ? academyNavLinks : homeNavLinks;
  const ctaHref = division === "academy" ? "/contact?enquiry=academy" : "/contact?enquiry=treatments";
  const ctaText = division === "academy" ? "Enrol now" : "Book appointment";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

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
          <nav className="division-switch" aria-label="Choose an Organik experience">
            <Link
              to="/treatments"
              className={division === "treatments" ? "is-active" : ""}
              aria-current={division === "treatments" ? "page" : undefined}
            >
              Treatments
            </Link>
            <span className="division-switch__separator" aria-hidden="true"></span>
            <Link
              to="/academy"
              className={division === "academy" ? "is-active" : ""}
              aria-current={division === "academy" ? "page" : undefined}
            >
              Academy
            </Link>
          </nav>
          <div className="site-header__actions">
            <Link to={ctaHref} className="action-link action-link--primary site-header__cta">
              <span>{ctaText}</span>
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

        <div className="site-header__nav-wrap">
          <nav className="site-header__nav page-container" aria-label="Main navigation">
            {links.map((link) => {
              const baseHref = link.href.split("?")[0];
              const isActive = currentPath === baseHref || (baseHref !== "/" && currentPath.startsWith(baseHref + "/"));
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={isActive ? "is-active" : ""}
                  aria-current={currentPath === baseHref ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          <button
            type="button"
            className="mobile-navigation__backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="mobile-navigation__panel" aria-label="Mobile navigation">
            <button
              type="button"
              className="icon-button mobile-navigation__close"
              aria-label="Close navigation menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
            <p className="eyebrow">Explore Organik</p>
            <Link to="/treatments" onClick={() => setMobileMenuOpen(false)}>
              Treatments <ArrowRight size={16} />
            </Link>
            <Link to="/academy" onClick={() => setMobileMenuOpen(false)}>
              Academy <ArrowRight size={16} />
            </Link>
            {links
              .filter((l) => l.href !== "/treatments" && l.href !== "/academy")
              .map((l) => (
                <Link key={l.label} to={l.href} onClick={() => setMobileMenuOpen(false)}>
                  {l.label} <ArrowRight size={16} />
                </Link>
              ))}
            <Link
              to={ctaHref}
              className="action-link action-link--primary mobile-navigation__cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{ctaText}</span>
            </Link>
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
    <div className="cart-layer">
      <button className="cart-layer__backdrop" type="button" aria-label="Close demo cart" onClick={onClose} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="cart-drawer__header">
          <div>
            <p className="eyebrow">A little something</p>
            <h2 id="cart-title">Your bag <span>({items.length})</span></h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close demo cart" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <ul className="cart-drawer__items">
              {items.map((it) => (
                <li key={it.id}>
                  <div>
                    <strong>{it.name}</strong>
                    <span>{it.price}</span>
                  </div>
                  <button type="button" onClick={() => onRemove(it.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="cart-drawer__footer">
              <p>This is a design demo. Checkout is not connected.</p>
              <button type="button" className="button button--outline" onClick={onClose}>
                Continue exploring
              </button>
            </div>
          </>
        ) : (
          <div className="cart-drawer__empty">
            <span className="cart-drawer__empty-icon">
              <ShoppingBag size={32} />
            </span>
            <h3>Your bag is taking a moment</h3>
            <p>Gift cards and sample products you add will appear here.</p>
            <button type="button" className="button button--dark" onClick={onClose}>
              Keep exploring
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export function Footer({ division }) {
  return (
    <footer className={`site-footer site-footer--${division || 'home'}`}>
      <div className="site-footer__main page-container">
        <div className="site-footer__brand">
          <BrandLockup />
          <p>A thoughtful place for beauty, skin and learning — made personal in Mermaid Beach.</p>
          <div className="site-footer__socials">
            <a href={siteConfig.instagramTreatments} target="_blank" rel="noreferrer" aria-label="Organik Laser and Beauty on Instagram">
              <Camera size={18} />
              <span>Laser &amp; Beauty</span>
              <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.instagramAcademy} target="_blank" rel="noreferrer" aria-label="Organik Beauty Academy on Instagram">
              <Camera size={18} />
              <span>Beauty Academy</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="site-footer__column site-footer__hours">
          <h2>Opening hours</h2>
          <div className="site-footer__hours-group">
            <h3>Organik Laser &amp; Beauty</h3>
            {treatmentsHours.map(([days, hrs]) => (
              <p key={days}>
                <span>{days}</span>
                <span>{hrs}</span>
              </p>
            ))}
          </div>
          <div className="site-footer__hours-group">
            <h3>Organik Beauty Academy</h3>
            {academyHours.map(([days, hrs]) => (
              <p key={days}>
                <span>{days}</span>
                <span>{hrs}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="site-footer__column site-footer__location">
          <h2>Find us</h2>
          <a href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`} target="_blank" rel="noreferrer">
            <MapPin size={18} />
            <span className="site-footer__contact-copy">
              <small>Studio address</small>
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
              <small>WhatsApp</small>
              {siteConfig.mobile}
            </span>
          </a>
          <p className="site-footer__division-note">
            {division === "academy" ? "Organik Beauty Academy" : "Organik Laser & Beauty"}
          </p>
        </div>

        <div className="site-footer__column site-footer__explore">
          <h2>Explore</h2>
          <nav className="site-footer__link-list" aria-label="Footer navigation">
            <Link to="/treatments">Treatments</Link>
            <Link to="/academy/courses">Academy courses</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/gallery">Before &amp; after gallery</Link>
            <Link to="/about">Our story</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom page-container">
        <p>© {new Date().getFullYear()} Organik Laser &amp; Beauty. All rights reserved.</p>
        <p className="site-footer__licence">Queensland Health Laser Licence · {siteConfig.licence}</p>
        <div>
          <Link to="/policies">Policies</Link>
          <span aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
          <span className="site-footer__demo">Design demo</span>
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

export function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ring = document.querySelector(".custom-cursor__ring");
    const dot = document.querySelector(".custom-cursor__dot");
    if (!ring || !dot) return;

    let rafId = 0;
    let x = -100, y = -100;

    const onPointerMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          ring.classList.add("is-visible");
          dot.classList.add("is-visible");
          rafId = 0;
        });
      }
    };

    const isInteractive = (el) => el instanceof Element && !!el.closest('a, button, [role="button"], .image-card, .course-card, .product-card, .offer-plain, .before-after__handle');
    const onOver = (e) => { if (isInteractive(e.target)) ring.classList.add("is-hovering"); };
    const onOut = (e) => { if (isInteractive(e.target) && !isInteractive(e.relatedTarget)) ring.classList.remove("is-hovering"); };
    const onDown = () => ring.classList.add("is-pressed");
    const onUp = () => ring.classList.remove("is-pressed");

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__ring"></span>
      <span className="custom-cursor__dot"></span>
    </div>
  );
}

export function SiteShell({ children }) {
  const location = useLocation();
  const path = location.pathname;
  const division = path.startsWith("/treatments") ? "treatments" : path.startsWith("/academy") ? "academy" : "home";

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

  // Scroll reveal
  useEffect(() => {
    const pageEl = document.querySelector("#main-content > .page");
    if (!pageEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const sections = Array.from(pageEl.querySelectorAll(":scope > section"));
    sections.forEach((sec, idx) => {
      sec.dataset.scrollReveal = "pending";
      sec.style.setProperty("--scroll-reveal-order", String(idx % 3));
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.dataset.scrollReveal = "visible";
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      sections.forEach((s) => {
        delete s.dataset.scrollReveal;
        s.style.removeProperty("--scroll-reveal-order");
      });
    };
  }, [path]);

  return (
    <CartContext.Provider value={cartValue}>
      <div className={`site-shell site-shell--${division}`} data-division={division}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <AnnouncementBar division={division} />
        <Header division={division} footerVisible={footerVisible} />
        <div id="main-content">
          {children}
        </div>
        <Footer division={division} />
        <FloatingContact hidden={footerVisible} />
        <CartDrawer items={cartItems} open={cartOpen} onClose={closeCart} onRemove={removeItem} />
        <CustomCursor />
      </div>
    </CartContext.Provider>
  );
}
