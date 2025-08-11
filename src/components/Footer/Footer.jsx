import "./Footer.css";
import logo from "../../assets/Hoyoverse_Logo.png"; // 🔹 Ajusta la ruta y nombre de tu logo

export default function Footer() {
  return (
    <footer className="footer">
      {/* 🔹 Fila superior: enlaces */}
      <div className="footer__links">
        <span>Home</span>
        <span>News</span>
        <span>About Us</span>
        <span>Careers</span>
        <span>Business Affairs</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Help Center</span>
      </div>

      {/* 🔹 Fila central: logo */}
      <div className="footer__logo">
        <img src={logo} alt="Hoyoverse Logo" />
      </div>

      {/* 🔹 Fila inferior: texto */}
      <div className="footer__text">
        <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
