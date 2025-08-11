import React from "react";
import "./ProductCard.css";

/**
 * ProductCard (visual-only)
 * Props:
 * - bgImage, bgAlt
 * - iconSrc, iconAlt
 * - title, description
 * - ctaLabel  (texto del botón)
 */
export default function ProductCard({
  bgImage,
  bgAlt,
  iconSrc,
  iconAlt,
  title,
  description,
  ctaLabel = "More"
}) {
  return (
    <article className="product-card" aria-label={title}>
      {/* Fondo del juego */}
      <img className="product-card__bg" src={bgImage} alt={bgAlt} />

      {/* Panel inferior blanco con info */}
      <div className="product-card__panel" role="group" aria-label={`${title} details`}>
        <div className="product-card__left">
          <img className="product-card__icon" src={iconSrc} alt={iconAlt} />
          <div className="product-card__text">
            <h3 className="product-card__title">{title}</h3>
            <p className="product-card__desc">{description}</p>
          </div>
        </div>

        <button type="button" className="product-card__cta" aria-label={ctaLabel}>
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
