import Navbar from "./components/Navbar/Navbar.jsx";
import { navbarData } from "./data/navLinks.js";

import Banner from "./components/Banner/Banner.jsx";
import { bannerData } from "./data/bannerData.js";

import SectionHeader from "./components/SectionHeader/SectionHeader.jsx";
import NewsGrid from "./components/NewsGrid/NewsGrid.jsx";

/* 🔹 Nuevo: BannerDivider */
import BannerDivider from "./components/BannerDivider/BannerDivider.jsx";

/* 🔹 Rutas de las imágenes (en src/assets/) */
import starsBg from "./assets/estrella.png"; // cambia por tu archivo real
import circleImg from "./assets/circulo.png"; // cambia por tu archivo real


import { productsData } from "./data/productsData.js";
import ProductCard from "./components/ProductCard/ProductCard.jsx";

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
          {/* Subtítulo + botón "See more" */}
          <SectionHeader
            title="Latest Updates"
            buttonLabel="More"
            onButtonClick={() => console.log("See more clicked")}
          />

          {/* Grid de noticias */}
          <NewsGrid />
        </section>
      </main>

      {/* 🔹 BannerDivider al final de la página */}
      <BannerDivider
        bgImage={starsBg}
        circleImage={circleImg}
        height={360}
        overlay
      />

      <SectionHeader title="Our Products" />

      <ProductCard {...productsData [0]} />





       
          
           

    </>
  );
}
