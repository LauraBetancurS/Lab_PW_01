import React from "react";
import "./BannerCard.css";
import { bannerData } from "../../data/bannerData";

/**
 * Muestra una tarjeta por cada banner en bannerData.
 */
export default function BannerCard() {
  return (
    <div className="banner-cards">
      {/**
       * map → recorre todos los banners y devuelve un <div> por cada uno.
       * b → es el banner actual en cada vuelta del recorrido.
       */}
      {bannerData.map((b) => (
        <div
          /**
           * key → identificador único para que React sepa cuál <div> es cuál.
           * Aquí usamos b.id porque es único para cada banner.
           */
          key={b.id}
          className="banner-card"
          style={{ backgroundImage: `url(${b.bgImage})` }}
          title={b.bgAlt}
          
        />
      ))}
    </div>
  );
}
