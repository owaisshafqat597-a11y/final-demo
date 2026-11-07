import React from 'react';
import { Sparkles } from 'lucide-react';
import { assets, shopProducts } from '../data/siteData';
import { useOrganikCart } from '../components/SiteShell';
import { ActionLink, PageIntro, Reveal } from '../components/Common';

export function ShopPage() {
  const { addItem } = useOrganikCart();

  return (
    <main className="page page--academy page-motion">
      <PageIntro
        eyebrow="Organik Beauty Academy"
        title="The shop."
        description="A small design-demo product grid. Product details, stock and pricing need to be confirmed before launch."
        breadcrumbs={[
          { label: 'Organik', href: '/' },
          { label: 'Academy', href: '/academy' },
          { label: 'Shop' }
        ]}
        image={assets.academyDetailTwo}
        imageAlt="Organik Beauty Academy shop imagery"
      />

      <section className="section-pad page-container shop-page">
        <Reveal>
          <div className="shop-page__notice">
            <span>
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <p>Sample products only. No inventory, pricing or checkout is connected in this design demo.</p>
          </div>
        </Reveal>

        <div className="product-grid">
          {shopProducts.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 70}>
              <article className="product-card">
                <div className="product-card__image">
                  <img src={p.image} alt={`Organik sample ${p.category.toLowerCase()} product`} loading="lazy" />
                  <span>{p.tag}</span>
                </div>
                <div className="product-card__body">
                  <p className="eyebrow">{p.category}</p>
                  <h2>{p.name}</h2>
                  <p>Sample listing — add approved product information and pricing before publishing.</p>
                  <strong>Enquire for pricing</strong>
                  <button
                    className="button button--outline product-card__button"
                    type="button"
                    onClick={() => addItem(p.name, 'Enquire for pricing')}
                  >
                    Add to demo bag
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="shop-page__footer">
          <p>To ask about a product or gift card, contact Organik directly.</p>
          <ActionLink href="/contact" variant="secondary">
            Contact Organik
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
