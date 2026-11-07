// Interactive script for Organik standalone preview
document.addEventListener('DOMContentLoaded', () => {
  // 1. Announcement bar dismiss
  const announcementClose = document.querySelector('.announcement-bar__close');
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      const bar = document.querySelector('.announcement-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.site-header__menu-toggle');
  const mobileNav = document.querySelector('.mobile-navigation');
  if (menuToggle && mobileNav) {
    const openMenu = () => {
      mobileNav.style.display = 'block';
      document.body.style.overflow = 'hidden';
      menuToggle.setAttribute('aria-expanded', 'true');
    };
    const closeMenu = () => {
      mobileNav.style.display = 'none';
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) closeMenu();
      else openMenu();
    });

    const closeBtn = mobileNav.querySelector('.mobile-navigation__close');
    const backdrop = mobileNav.querySelector('.mobile-navigation__backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // 3. Custom Cursor
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ring = document.querySelector('.custom-cursor__ring');
    const dot = document.querySelector('.custom-cursor__dot');
    if (ring && dot) {
      let x = -100, y = -100, rafId = 0;
      document.addEventListener('pointermove', (e) => {
        x = e.clientX;
        y = e.clientY;
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            ring.classList.add('is-visible');
            dot.classList.add('is-visible');
            rafId = 0;
          });
        }
      });
      const isHoverable = (el) => el instanceof Element && !!el.closest('a, button, [role="button"], .image-card, .course-card, .product-card, .before-after__handle');
      document.addEventListener('pointerover', (e) => {
        if (isHoverable(e.target)) ring.classList.add('is-hovering');
      });
      document.addEventListener('pointerout', (e) => {
        if (isHoverable(e.target) && !isHoverable(e.relatedTarget)) ring.classList.remove('is-hovering');
      });
      document.addEventListener('pointerdown', () => ring.classList.add('is-pressed'));
      document.addEventListener('pointerup', () => ring.classList.remove('is-pressed'));
    }
  }

  // 4. Before-After Comparison Slider
  const beforeAfterFrames = document.querySelectorAll('.before-after__frame');
  beforeAfterFrames.forEach((frame) => {
    let isDragging = false;
    const update = (clientX) => {
      const rect = frame.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(6, Math.min(94, (x / rect.width) * 100));
      frame.style.setProperty('--split', `${pct}%`);
    };

    frame.addEventListener('pointerdown', (e) => {
      isDragging = true;
      update(e.clientX);
      const onMove = (mv) => { if (isDragging) update(mv.clientX); };
      const onUp = () => {
        isDragging = false;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });
  });

  // 5. Review Carousel
  const reviewsCarousel = document.querySelector('.reviews-carousel');
  if (reviewsCarousel) {
    const reviews = [
      {
        name: "Jennifer",
        service: "Brows & lashes",
        when: "2 weeks ago",
        quote: "Thank you Racheal! If I could give more than 5 stars I would — professional, kind, friendly and on time. I am so happy with my eyebrows and eyelashes and will continue to come here from now on."
      },
      {
        name: "Josepha Troncoso",
        service: "Skin needling",
        when: "1 month ago",
        quote: "I just had my first appointment at Organik Laser for skin needling and Racheal is so sweet and so good at what she does. I have had three skin needling sessions at different clinics but never one like this. Five stars for Racheal and the clinic!"
      },
      {
        name: "Danielle Wetherspoon",
        service: "Deluxe Classic lashes",
        when: "3 weeks ago",
        quote: "I have had the Deluxe Classic eyelashes on two separate occasions. The quality was outstanding, lasting me a fair few months — and I am very rough with my eyes. Very impressive service."
      }
    ];

    let currentRev = 0;
    const card = reviewsCarousel.querySelector('.review-card');
    const quoteEl = card ? card.querySelector('p') : null;
    const attrEl = card ? card.querySelector('.review-card__attribution') : null;
    const counterEl = reviewsCarousel.querySelector('.reviews-carousel__controls span');
    const prevBtn = reviewsCarousel.querySelector('.reviews-carousel__controls button:first-child');
    const nextBtn = reviewsCarousel.querySelector('.reviews-carousel__controls button:last-child');

    const renderReview = () => {
      const rev = reviews[currentRev];
      if (quoteEl) quoteEl.textContent = rev.quote;
      if (attrEl) attrEl.textContent = `${rev.name} · ${rev.service} · ${rev.when}`;
      if (counterEl) counterEl.innerHTML = `0${currentRev + 1} <i>/</i> 03`;
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentRev = (currentRev - 1 + reviews.length) % reviews.length;
        renderReview();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentRev = (currentRev + 1) % reviews.length;
        renderReview();
      });
    }
  }

  // 6. Accordions
  const accordionButtons = document.querySelectorAll('.accordion-item > h3 > button');
  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('is-open');
      // Close sibling items
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item').forEach((sib) => {
          sib.classList.remove('is-open');
          const sibBtn = sib.querySelector('button');
          if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
          const panel = sib.querySelector('.accordion-item__panel');
          if (panel) panel.setAttribute('aria-hidden', 'true');
        });
      }
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        const panel = item.querySelector('.accordion-item__panel');
        if (panel) panel.setAttribute('aria-hidden', 'false');
      }
    });
  });
});
