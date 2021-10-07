import astro from "./img/astro.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav-brand">
        Tienda Moon
      </a>
      <img src={astro} alt="logo" width="30" height="30" />
      <ul className="navbar-list">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Colecciones
          </a>
        </li>
      </ul>
    </nav>
  );
}
