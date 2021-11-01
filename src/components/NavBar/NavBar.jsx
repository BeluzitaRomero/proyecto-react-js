import "./NavBar.css";
import astro from "../../assets/astro.png";
import { CartWidet } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-moon">
        <Link className="nav-brand" to="/">
          Tienda Moon
        </Link>
        <img src={astro} alt="logo" width="80" height="80" />
      </div>

      <ul className="navbar-list">
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/new">
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/bebes">
            Bebés
          </Link>
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
