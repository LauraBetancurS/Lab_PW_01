import React from "react";
import "./Banner.css";

/**
 * Banner único (visual only) estilo HoYoverse:
 * - imagen de fondo
 * - icono de juego + nombre
 * - texto de noticia (headline)
 * - botón "More" (sin funcionalidad)
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
      {/* Fondo accesible */}
      <img className="banner__bg" src={bgImage} alt={bgAlt} />

      {/* Contenido */}
      <div className="banner__content">
       
        <img className="banner__icon" src={iconSrc} alt={iconAlt} />
         <span className="banner__game">{gameName}</span>
        <h1 className="banner__headline">{headline}</h1>

        <button className="banner__cta" type="button" aria-label={buttonLabel}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
