import { useEffect, useRef } from "react";
import "./BannerDivider.css";

export default function BannerDivider({ bgImage, circleImage, height = 320, overlay = true }) {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!circleRef.current || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcula cuánto del banner está visible
      const progress = 1 - Math.max(0, Math.min(rect.bottom / (windowHeight + rect.height), 1));

      // Ajusta el factor 30 para controlar el desplazamiento
      const offset = progress * 30;
      circleRef.current.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`banner-divider full-bleed ${overlay ? "has-overlay" : ""}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        height: `${height}px`,
      }}
    >
      <img
        ref={circleRef}
        className="banner-divider__circle"
        src={circleImage}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
