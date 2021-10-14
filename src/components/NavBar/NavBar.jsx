import "./NavBar.css";
import astro from "../../img/astro.png";
import { CartWidet } from "../CartWidget/CartWidget";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-moon">
        <a className="nav-brand" href="/#">
          Tienda Moon
        </a>
        <img src={astro} alt="logo" width="80" height="80" />
      </div>

      <ul className="navbar-list">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            New
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Bebés
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Niñxs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Niñxs +10
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            SALE!
          </a>
        </li>
      </ul>
      <div className="carrito">
        <CartWidet />
      </div>
    </nav>
  );
}
