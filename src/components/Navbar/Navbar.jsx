import React from "react";
import "./Navbar.css";

export default function Navbar({ logoSrc, logoAlt, links = [], className = "" }) {
  return (
    <header className={`nav-root ${className}`}>
      <nav className="nav" aria-label="Primary">
        <div className="nav__brand">
          <img className="nav__logo" src={logoSrc} alt={logoAlt || "Site logo"} />
        </div>

        <ul className="nav__list">
          {links.map(({ id, label, active }) => (
            <li key={id} className="nav__item">
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
