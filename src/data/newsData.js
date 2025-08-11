
import N1 from "../assets/news/n1.jpg";
import N2 from "../assets/news/n2.jpg";
import N3 from "../assets/news/n3.jpg";
import N4 from "../assets/news/n4.jpg";
import N5 from "../assets/news/n5.jpg";
import N6 from "../assets/news/n6.jpg";

import N7 from "../assets/news/n7.jpg";



// Arreglo para el grid: 4 arriba, 3 abajo (la última es "wide": true)
export const newsData = [
  {
    id: "n1",
    image: N1,
    imageAlt: "Counter scene artwork",
    type: "Product",
    gameName: "Honkai Impact 3rd",
    title: "Honkai Impact 3rd Launching v7.9 [Stars Derailed] on..."
  },
  {
    id: "n2",
    image: N2,
    imageAlt: "Characters artwork",
    type: "Product",
    gameName: "Genshin Impact",
    title: "Genshin Impact Version 5.2: Enhanced Aerial Abilities in Natlan"
  },
  {
    id: "n3",
    image: N3,
    imageAlt: "Summer festival scene",
    type: "Product",
    gameName: "Genshin Impact",
    title: "Genshin Impact Version 5.8 Refreshes Your Summer at..."
  },
  {
    id: "n4",
    image: N4,
    imageAlt: "Battle scene blue tones",
    type: "Product",
    gameName: "Zenless Zone Zero",
    title: "ZZZ Version 2.1 “The Impending Crash of Waves”…"
  },
  // Fila 2
  {
    id: "n5",
    image: N5,
    imageAlt: "Corporate blue background",
    type: "Company",
    gameName: "HoYoverse",
    title: "HoYoverse Announces Gamescom 2025 Lineup"
  },
  {
    id: "n6",
    image: N6,
    imageAlt: "Golden hero artwork",
    type: "Product",
    gameName: "Honkai: Star Rail",
    title: "Honkai: Star Rail Version 3.4 “For the Sun is Set to Die”"
  },
  {
    id: "n7",
    image: N7, // más ancho ayuda al recorte
    imageAlt: "Epic combat panorama",
    type: "Product",
    gameName: "Genshin Impact",
    title: "Genshin Impact Version 5.7 Welcomes Skirk, the Sinner's Pupil...",
    wide: true // 👈 esta se dibuja con doble ancho
  }
];
