import React from "react";
import "./NewsCard.css";

/**
 * Props:
 * - image: background image URL
 * - imageAlt: alt text for background
 * - type: string for the tag (e.g., "News", "Update")
 * - gameName: string
 * - title: string
 * - className: optional extra class (e.g., "news-card--wide")
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
    <article className={`news-card ${className}`}>
      {/* Background image */}
      <img src={image} alt={imageAlt} className="news-card__bg" />

      {/* Type tag */}
      {type && (
        <div className="news-card__tag" data-type={type}>
          {type}
        </div>
      )}

      {/* Content overlay */}
      <div className="news-card__content">
        {gameName && <h4 className="news-card__game">{gameName}</h4>}
        {title && <h3 className="news-card__title">{title}</h3>}
      </div>
    </article>
  );
}
