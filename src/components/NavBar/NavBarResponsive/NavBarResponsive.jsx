import "./NavBar.css";
import astro from "../../assets/astro.png";
import { CartWidet } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBarResposive() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Tienda Moon</Navbar.Brand>
          <img src={astro} alt="logo" width="80" height="80" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/categoria/new">New</Nav.Link>
            <Nav.Link to="categoria">Bebés</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/categoria/niñxs">Niñxs</Nav.Link>
            <Nav.Link className="carrito">
              <CartWidet />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
