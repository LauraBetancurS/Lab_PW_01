import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import { newsData } from "../../data/newsData.js";

/**
 * Fila 1: 4 cards
 * Fila 2: 3 cards (la última con doble ancho -> wide: true en data)
 * Para que sean más anchas sin cambiar el conteo, usamos .full-bleed
 * y aumentamos el max-width del grid, manteniendo 4 columnas.
 */
export default function NewsGrid() {
  return (
    <section className="news-grid full-bleed" aria-label="Latest updates">
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
    </section>
  );
}
