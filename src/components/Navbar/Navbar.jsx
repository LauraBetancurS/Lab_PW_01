import React from "react";
import "./Navbar.css";

export default function Navbar({ logoSrc, logoAlt, links = [], className = "" }) {
  return (
    <header className={`nav-root ${className}`}>
      <nav className="nav" >
        <div className="nav__brand">
          <img className="nav__logo" src={logoSrc} alt={logoAlt || "Site logo"} />
        </div>

        <ul className="nav__list">
          {links.map(({ id, label, active }) => (
            <li key={id} className="nav__item">
              {/* 
                active: propiedad booleana que indica si este enlace debe estar marcado como activo.
                Si active === true, se añade la clase "is-active" al span, lo que en CSS aplicará el subrayado o estilo especial.
                Esto sirve, por ejemplo, para que el enlace de "Home" aparezca resaltado por defecto al cargar la página.
              */}
              <span className={`nav__link ${active ? "is-active" : ""}`}>    
                {label}
                <span className="nav__underline" aria-hidden="true" />
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
