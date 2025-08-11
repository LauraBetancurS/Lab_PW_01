// Puedes dejar estos placeholders o reemplazarlos por assets locales.
// Ejemplo si usas assets locales:
// import bgGenshin from "../assets/products/genshin-bg.jpg";
// import iconGenshin from "../assets/products/genshin-icon.png";
// y luego usar esas importaciones en cada item.
import P1 from "../assets/products/p1.jpg";
import P2 from "../assets/products/p2.jpeg";
import P3 from "../assets/products/p3.jpg";
import P4 from "../assets/products/p4.jpeg";
import P5 from "../assets/products/p5.jpeg";
import P6 from "../assets/products/p6.jpeg";





import P1_icon  from "../assets/gameicons/p1_icon.jpg";
import P2_icon  from "../assets/gameicons/p2_icon.jpeg";
import P3_icon  from "../assets/gameicons/p3_icon.jpeg";
import P4_icon  from "../assets/gameicons/p4_icon.jpeg";
import P5_icon  from "../assets/gameicons/p5_icon.png";
import P6_icon  from "../assets/gameicons/p6_icon.jpeg";

export const productsData = [
  {
    id: "p1",
    bgImage: P1,
    bgAlt: "Tears of Themis key art",
    iconSrc: P1_icon ,
    iconAlt: "Tears of Themis icon",
    title: "Tears of Themis",
    description: "Embark now on an adventure of romance and wits!",
    ctaLabel: "More"
  },

  {
    id: "p2",
    bgImage: P2,
    bgAlt: "Genshin Impact key art",
    iconSrc: P2_icon ,
    iconAlt: "Genshin Impact icon",
    title: "Genshin Impact",
    description: "Step into a vast magical world of adventure.",
    ctaLabel: "More"
  },
  {
    id: "p3",
    bgImage: P3,
    bgAlt: "Honkai Impact 3rd key art",
    iconSrc: P3_icon,
    iconAlt: "Honkai Impact 3rd icon",
    title: "Honkai Impact 3rd",
    description: "Fight for all that is beautiful in the world.",
    ctaLabel: "More"
  },
  {
    id: "p4",
    bgImage: P4,
    bgAlt: "Honkai: Star Rail key art",
    iconSrc: P4_icon,
    iconAlt: "Honkai: Star Rail icon",
    title: "Honkai: Star Rail",
    description: "May this journey lead us starward.",
    ctaLabel: "More"
  },
  {
    id: "p5",
    bgImage: P5,
    bgAlt: "Zenless Zone Zero key art",
    iconSrc: P5_icon,
    iconAlt: "Zenless Zone Zero icon",
    title: "Zenless Zone Zero",
    description: "Welcome to New Eridu!",
    ctaLabel: "More"
  },
  {
    id: "p6",
    bgImage: P6,
    bgAlt: "HoYoLAB key art",
    iconSrc: P6_icon,
    iconAlt: "HoYoLAB icon",
    title: "HoYoLAB",
    description:
      "HoYoLAB is a community forum with official info, fan art, tools, perks and more.",
    ctaLabel: "More"
  }
];
