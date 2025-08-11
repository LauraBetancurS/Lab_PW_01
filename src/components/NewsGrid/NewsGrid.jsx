import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import { newsData } from "../../data/newsData.js";

/**
 * Fila 1: 4 cards
 * Fila 2: 3 cards (la última con doble ancho -> wide: true en data)
 * Centrado vertical y horizontal con un contenedor interno para el grid.
 */
export default function NewsGrid() {
  return (
    <section className="news-grid" aria-label="Latest updates">
      <div className="news-grid__inner">
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            image={item.image}
            imageAlt={item.imageAlt}
            type={item.type}
            gameName={item.gameName}
            title={item.title}
            className={item.wide ? "news-card--wide" : ""}
          />
        ))}
      </div>
    </section>
  );
}
