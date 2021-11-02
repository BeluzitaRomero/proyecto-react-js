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
          <Link className="nav-link" to="/categoria/niñxs">
            Niñxs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/+10">
            Niñxs +10
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categoria/sale">
            SALE!
          </Link>
        </li>
      </ul>
      <div className="carrito">
        <CartWidet />
      </div>
    </nav>
  );
}
