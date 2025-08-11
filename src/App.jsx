import Navbar from "./components/Navbar/Navbar.jsx";
import { navbarData } from "./data/navLinks.js";

import Banner from "./components/Banner/Banner.jsx";
import { bannerData } from "./data/bannerData.js";

import SectionHeader from "./components/SectionHeader/SectionHeader.jsx";
import NewsGrid from "./components/NewsGrid/NewsGrid.jsx";

/* 🔹 BannerDivider existente */
import BannerDivider from "./components/BannerDivider/BannerDivider.jsx";

/* 🔹 Nuevo contenedor: BannerDividerStarships + Cards encima */
import StarshipSection from "./components/StarshipSection/StarshipSection.jsx";
import { starshipCardsData } from "./data/starshipCardsData.js";

/* 🔹 Rutas de las imágenes (en src/assets/) */
import starsBg from "./assets/estrella.png";
import circleImg from "./assets/circulo.png";

import ProductsGrid from "./components/ProductsGrid/ProductsGrid.jsx";

/* 🔹 Footer */
import Footer from "./components/Footer/Footer.jsx";

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

        <section className="news-section">
          <SectionHeader
            title="Latest Updates"
            buttonLabel="More"
            onButtonClick={() => console.log("See more clicked")}
          />
          <NewsGrid />
        </section>
      </main>

      {/* 🔹 Divider existente (full-width) */}
      <BannerDivider
        bgImage={starsBg}
        circleImage={circleImg}
        height={360}
        overlay
      />

      {/* 🔹 Sección de productos */}
      <section className="container products-section">
        <SectionHeader title="Our Products" />
        <ProductsGrid />
      </section>

      {/* 🔹 StarshipSection = BannerDividerStarships + 2 cards encima */}
      <StarshipSection
        items={starshipCardsData}
        bgImage={starsBg}
        circleImage={circleImg}
        height={500}
        overlay
      />

      {/* 🔹 Footer */}
      <Footer />
    </>
  );
}
