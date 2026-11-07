# Organik Laser & Beauty / Organik Beauty Academy — 1:1 Duplicate

A complete, high-fidelity frontend replica of [novus-taupe-gamma.vercel.app](https://novus-taupe-gamma.vercel.app/).

## 🌟 What is Included
- **All 36 Routes & Pages:**
  - `/` (Home page with Split Hero, Trust highlights, Owner story, Featured treatments, Plasma special offer, Academy teaser, Before/After comparison slider, 5-star Google review carousel, and Final invite)
  - `/about` (The Organik story, Clinic & Academy divisions, Founder bio, Studio location)
  - `/academy` (Academy home, Career-focused course teaser, Learning workflow, 3-step pathway, Trainer quote)
  - `/academy/courses` (Complete course catalogue with category filters: Lash & Brow, Dermal, Cosmetic Tattoo, Beauty, Laser Courses)
  - `/academy/courses/:slug` (Individual detail pages for each of the 8 courses with schedules, kit info, prerequisites, and FAQs)
  - `/academy/course-information` (Interactive 3-tab guide: The learning experience, Enrolment & kits, Payment options + 9 FAQs)
  - `/academy/student-gallery` (Student before & after comparison sliders and live model photo grid with full-screen Lightbox)
  - `/academy/trainer` (Meet Racheal, credentials, award-winning educator background, TAE40122 certification, and values)
  - `/academy/shop` (Demo product grid with interactive "Add to demo bag" button)
  - `/treatments` (Treatment catalogue with category filter chips: Lash & Brow, Cosmetic Tattoo, Facials & Skin, Advanced)
  - `/treatments/:slug` (Individual detail pages for all 12 treatments with durations, consultation notes, and FAQs)
  - `/treatments/team` (Meet Racheal, Queensland Health Laser Licence, clinic philosophy)
  - `/treatments/aftercare` (Comprehensive aftercare guide for Cosmetic Tattoos, Plasma Fibroblast, Lashes, and Needling)
  - `/treatments/price-list` and `/pricing` (Interactive division tabs for Treatments vs Academy, category sub-tabs, full pricing tables, and plasma special offers)
  - `/gallery` (Treatment vs Academy tabs, interactive draggable before/after sliders, and image viewer lightbox)
  - `/policies` (Salon policies and Academy student policies)
  - `/contact` (Interactive enquiry form with category dropdown, phone/WhatsApp/email links, Mermaid Beach studio map link, and opening hours)
- **100% Exact Styles & CSS Design System:**
  - Extracted compiled 127KB stylesheet with all Tailwind utilities and custom CSS
  - Custom keyframe animations: `page-arrive`, `topbar-arrive`, `header-arrive`, `hero-image-settle`, `hero-copy-arrive`, `lockup-arrive`, `marquee`, `drag-arrow-nudge`, `review-copy-enter`, `drawer-in`, `fade-in`
  - Typography: Google Fonts `DM Sans`, `Playfair Display`, and `Italiana`
  - Responsive design matching all breakpoints (desktop navigation, mobile slide-in drawer, fluid typography, responsive grids)
- **Interactive Features:**
  - Draggable Before/After image comparison sliders with touch and mouse dragging
  - Review carousel with Previous/Next controls and slide counter
  - Full-screen modal Lightbox for gallery photos with arrow keys & Esc support
  - Mobile slide-in navigation drawer with backdrop and smooth animations
  - Sliding Cart / Bag Drawer with add/remove demo items
  - Custom trailing cursor with inner dot and outer ring that reacts to buttons and interactive links
  - Dismissible announcement bar
  - WhatsApp & Phone floating quick-action buttons

## 🚀 How to Run Locally

### Option 1: Run with Vite (Recommended)
1. Navigate to the project folder:
   ```bash
   cd "C:\Users\FLH\.gemini\antigravity\scratch\organik-laser-beauty"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Option 2: Build for Production / Deployment
To create an optimized production build for Vercel, Netlify, or GitHub Pages:
```bash
npm run build
```
The output will be in the `dist/` directory, ready to deploy.
