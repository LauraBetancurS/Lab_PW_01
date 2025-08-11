// src/data/navLinks.js
import Logo from "../assets/Hoyoverse_Logo.png";

export const navbarData = {
  logo: {
    src: Logo, // <- ahora Vite resuelve y sirve la imagen
    alt: "HoYoverse logo"
  },
  links: [
    { id: "home",    label: "Home",       active: true },
    { id: "news",    label: "News" },
    { id: "about",   label: "About Us" },
    { id: "careers", label: "Careers" },
    { id: "help",    label: "Help Center" }
  ]
};
