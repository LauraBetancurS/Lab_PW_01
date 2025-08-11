import React from "react";
import "./Banner.css";
import BannerCard from "../BannerCard/BannerCard.jsx";

/**
 * Banner único (visual only)
 */
export default function Banner({
  bgImage,
  bgAlt,
  iconSrc,
  iconAlt,
  gameName,
  headline,
  buttonLabel
}) {
  return (
    <section className="banner full-bleed" aria-label="Featured update">
      {/* Fondo */}
      <img className="banner__bg" src={bgImage} alt={bgAlt} />

      {/* Contenido principal (texto) */}
      <div className="banner__content">
        <img className="banner__icon" src={iconSrc} alt={iconAlt} />
        <span className="banner__game">{gameName}</span>

        <h1 className="banner__headline">{headline}</h1>

        <button className="banner__cta" type="button" aria-label={buttonLabel}>
          {buttonLabel}
        </button>
      </div>

      {/* Mini-cards abajo a la derecha */}
      <div className="banner__thumbs">
        <BannerCard />
      </div>
    </section>
  );
}
