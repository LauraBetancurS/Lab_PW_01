import { useEffect, useRef } from "react";
import "./BannerDivider.css";

export default function BannerDivider({
  bgImage,
  circleImage,
  height = 420,      // alto del banner
  overlay = true,   // si es true, pone una capa oscura encima
  speed = 0.25      // qué tan rápido se mueve el círculo
}) {
  const sectionRef = useRef(null); // apunta al contenedor del banner
  const circleRef  = useRef(null); // apunta al círculo
  const rafIdRef   = useRef(null); // guarda el id de la animación

  useEffect(() => {
    // Función que calcula y mueve el círculo
    const update = () => {
      if (!sectionRef.current || !circleRef.current) return;

      // 📏 Info de posición y tamaño del banner
      const rect = sectionRef.current.getBoundingClientRect();

      // 🖥 Centro de la pantalla (en vertical)
      const viewportCenter = window.innerHeight / 2;

      // 🎯 Centro del banner
      const sectionCenter  = rect.top + rect.height / 2;

      // 🔄 Distancia entre el centro del banner y el centro de la pantalla
      const centerDelta = viewportCenter - sectionCenter;

      // ⚡ Movimiento del círculo según la velocidad (speed)
      const offset = centerDelta * speed;

      // 🎨 Aplica el movimiento (subir o bajar un poco el círculo)
      circleRef.current.style.transform =
        `translate(-50%, calc(-50% + ${offset}px))`;
    };

    // Cuando hago scroll, calculo de nuevo la posición
    const onScroll = () => {
      // Cancela cualquier animación pendiente
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      // Pide un nuevo cálculo para el próximo frame (suave)
      rafIdRef.current = requestAnimationFrame(update);
    };

    // Escucha scroll y cambios de tamaño
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Calcula posición al cargar
    onScroll();

    // Limpia todo cuando el componente se quita de la pantalla
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
        
        
      />
    </section>
  );
}
