import "./Footer.css";
import rocket from "../../assets/rocket.png";
import whatsapp from "../../assets/whatsapp.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={rocket} alt="cute astronaut" width="70" />
        <ul>
          <ul>Copyright 2021 Tienda Moon</ul>
          <ul>Diseñado por Belén Romero</ul>
        </ul>
      </div>
      <div className="footer-rigth">
        <p>¡Encontranos en nuestras redes!</p>
        <ul className="footer-links">
          <li>
            <img src={whatsapp} alt="icono whatsapp" width="35" />
          </li>
          <li>
            <img src={instagram} alt="icono instagram" width="35" />
          </li>
          <li>
            <img src={facebook} alt="icono facebook" width="35" />
          </li>
        </ul>
      </div>
    </div>
  );
}
