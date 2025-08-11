import backimg from "../assets/Banner_bgrd.jpg";
import Gameicon from "../assets/Logo_genshin.jpeg";

import honkai_chico from "../assets/honkaiS_chico.jpg";


import honkaiChica from "../assets/honkai_chica.jpg";

export const bannerData = [
  {
    id: 1,
    bgImage: backimg, 
    bgAlt: "Genshin Impact Banner",
    iconSrc: Gameicon, 
    iconAlt: "Genshin Impact Icon",
    gameName: "Genshin Impact",
    headline: `Latest Updates on Version 5.8 "Sunspray Summer Resort"`,
    buttonLabel: "More"
  },
  {
    id: 2,
    bgImage: honkai_chico,
    bgAlt: "Honkai Star Rail Banner",
    iconSrc: "",
    iconAlt: "Honkai Star Rail Icon",
    gameName: "Honkai: Star Rail",
    headline: `Honkai: Star Rail V3.4 "For the Sun is Set to Die" Is Now Online!`,
    buttonLabel: "More"
  },
  {
    id: 3,
    bgImage: honkaiChica,
    bgAlt: "Honkai Impact 3rd Banner",
    iconSrc: "",
    iconAlt: "Honkai Impact 3rd Icon",
    gameName: "Honkai Impact 3rd",
    headline: `v8.3 [Flickers of a Spacetime Warp] Available Now!`,
    buttonLabel: "More"
  }
];
