import React from "react";
import "./NewsGrid.css";
import NewsCard from "../NewsCard/NewsCard.jsx";
import { newsData } from "../../data/newsData.js";

/**
 * Grid con 4 columnas en la fila 1 y,
 * en la segunda fila 3 tarjetas donde la última ocupa 2 columnas.
 */
export default function NewsGrid() {
  return (
    <section className="news-grid" aria-label="Latest updates">
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
