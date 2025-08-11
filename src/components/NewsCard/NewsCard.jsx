import React from "react";
import "./NewsCard.css";

/**
 * Card de noticia (solo visual)
 * Props:
 * - image, imageAlt, type, gameName, title
 * - className (opcional) para estilos condicionales (e.g., wide)
 */
export default function NewsCard({
  image,
  imageAlt,
  type,
  gameName,
  title,
  className = ""
}) {
  return (
    <article className={`news-card ${className}`} aria-label={title}>
      <img className="news-card__bg" src={image} alt={imageAlt} />

      {/* Type tag con data-attr para estilizar por tipo */}
      <span className="news-card__tag" data-type={type}>
        {type}
      </span>

      <div className="news-card__content">
        <p className="news-card__game">{gameName}</p>
        <h3 className="news-card__title">{title}</h3>
      </div>
    </article>
  );
}
