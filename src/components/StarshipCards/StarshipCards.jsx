import React from "react";
import "./StarshipCards.css";

/**
 * StarshipCards
 * Renderiza N cards a partir de un array de datos [{id, title, href, ariaLabel}]
 * Sin navegación real (visual only). Si quisieras, puedes pasar onCardClick.
 */
export default function StarshipCards({ items = [], onCardClick }) {
  return (
    <div className="starship-cards" role="list">
      {items.map((it) => (
        <article
          key={it.id}
          className="starship-card"
          role="listitem"
          aria-label={it.title}
          
        >
          <div className="starship-card__body">
            <h3 className="starship-card__title">{it.title}</h3>
            <span className="starship-card__underline" aria-hidden="true" />
          </div>

          {/* Botón circular con flecha (visual) */}
          <button
            className="starship-card__circle"
            type="button"
            aria-label={it.ariaLabel || `Open ${it.title}`}
          >
            <svg
              className="starship-card__arrow"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 12h8m0 0l-4-4m4 4l-4 4"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </article>
      ))}
    </div>
  );
}
