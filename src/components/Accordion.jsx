import React, { useState } from 'react';

export function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        return (
          <article key={item.question || item.title} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question || item.title}</span>
                <span className="accordion-item__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="accordion-item__panel" aria-hidden={!isOpen}>
              <div className="accordion-item__panel-inner">
                <p>{item.answer || item.description || item.copy}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
