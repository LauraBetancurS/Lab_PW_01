import { useEffect, useRef } from "react";
import "./BannerDivider.css";

export default function BannerDivider({
  bgImage,
  circleImage,
  height = 420,      // un poco más alto para que el efecto se note
  overlay = true,
  speed = 0.25       // velocidad del parallax del círculo (0.15–0.4 recomendado)
}) {
  const sectionRef = useRef(null);
  const circleRef  = useRef(null);
  const rafIdRef   = useRef(null);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current || !circleRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter  = rect.top + rect.height / 2;

      // Distancia (en px) del centro del banner al centro de la ventana
      const centerDelta = viewportCenter - sectionCenter;

      // Aplica desplazamiento proporcional
      const offset = centerDelta * speed; // ajusta con 'speed'
      circleRef.current.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    };

    const onScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Primer cálculo
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`banner-divider full-bleed ${overlay ? "has-overlay" : ""}`}
      style={{ backgroundImage: `url('${bgImage}')`, height: `${height}px` }}
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
