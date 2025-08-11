import React from "react";
import "./BannerCard.css";
import { bannerData } from "../../data/bannerData";

/**
 * Renderiza 1 mini-card por cada banner del arreglo (solo visual).
 * Usa banner.bgImage como fondo.
 */
export default function BannerCard() {
  return (
    <div className="banner-cards">
      {bannerData.map((b) => (
        <div
          key={b.id}
          className="banner-card"
          style={{ backgroundImage: `url(${b.bgImage})` }}
          title={b.bgAlt}
          aria-label={b.bgAlt}
        />
      ))}
    </div>
  );
}
