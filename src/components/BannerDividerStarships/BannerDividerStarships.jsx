import "./BannerDividerStarships.css";

export default function BannerDividerStarships({
  bgImage,
  height = 360,
  tint = "rgba(45, 85, 170, 0.18)",   // azul suave
  className = "",
}) {
  return (
    <section
      className={`bd-starships ${className}`}
      style={{ "--bd-height": `${height}px`, "--bd-tint": tint }}
      
    >
      <img className="bd-starships__bg" src={bgImage} alt="" />
      <div className="bd-starships__overlay" />
    </section>
  );
}