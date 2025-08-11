import Navbar from "./components/Navbar/Navbar.jsx";
import { navbarData } from "./data/navLinks.js";

import Banner from "./components/Banner/Banner.jsx";
import { bannerData } from "./data/bannerData.js";

import SectionHeader from "./components/SectionHeader/SectionHeader.jsx";
import NewsGrid from "./components/NewsGrid/NewsGrid.jsx";

export default function App() {
  const b = bannerData[0];

  return (
    <>
      <Navbar
        logoSrc={navbarData.logo.src}
        logoAlt={navbarData.logo.alt}
        links={navbarData.links}
      />

      <main>
        <Banner
          bgImage={b.bgImage}
          bgAlt={b.bgAlt}
          iconSrc={b.iconSrc}
          iconAlt={b.iconAlt}
          gameName={b.gameName}
          headline={b.headline}
          buttonLabel={b.buttonLabel}
        />

        {/* Subtítulo + botón "See more" */}
        <SectionHeader
          title="Latest Updates"
          buttonLabel="More"
          onButtonClick={() => console.log("See more clicked")}
        />

        {/* Grid de noticias */}
        <NewsGrid />
      </main>
    </>
  );
}
