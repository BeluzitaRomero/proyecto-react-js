import "./NavBar.css";
import astro from "../../assets/astro.png";
import { CartWidet } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav} from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar className="d-flex justify-content-center" collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Navbar.Brand className="logo-moon mx-0" as={Link} to="/">Tienda Moon<img alt="logo" width="80" height="80" src={astro}/></Navbar.Brand>
  <Container >
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/categoria/new">New</Nav.Link>
      <Nav.Link as={Link} to="/categoria/bebes">Bebés</Nav.Link>
      <Nav.Link as={Link} to="/categoria/niñxs">Niñxs</Nav.Link>
      <Nav.Link as={Link} to="/categoria/+10">Niñxs+10</Nav.Link>
      <Nav.Link as={Link} to="/categoria/sale">SALE!</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
    <div className="cart-div">
      <Link to="/cart">
        <CartWidet/>
      </Link>
    </div>
  </Container>
</Navbar>
  );
}
