import React from "react";
import BannerDividerStarships from "../BannerDividerStarships/BannerDividerStarships.jsx";
import StarshipCards from "../StarshipCards/StarshipCards.jsx";

/**
 * StarshipSection
 * Combina: BannerDividerStarships (fondo) + StarshipCards (encima)
 * Props:
 *  - items: array de cards
 *  - bgImage, circleImage, height, overlay: mismos props que tu BannerDividerStarships
 */
export default function StarshipSection({
  items = [],
  bgImage,
  circleImage,
  height = 360,
  overlay = true,
}) {
  return (
    <section className="starship-section" style={{ position: "relative" }}>
      {/* Fondo */}
      <BannerDividerStarships
        bgImage={bgImage}
        circleImage={circleImage}
        height={height}
        overlay={overlay}
      />

      {/* Overlay con las cards */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          pointerEvents: "none" /* evita interceptar scroll/clicks del fondo */
        }}
        aria-hidden={false}
      >
        {/* Permitimos interacción en las cards */}
        <div style={{ width: "100%", pointerEvents: "auto" }}>
          <StarshipCards items={items} />
        </div>
      </div>
    </section>
  );
}
