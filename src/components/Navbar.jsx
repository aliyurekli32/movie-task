import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

const NavbarR = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>Ali YÜREKLİ MOVİE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="m-1"
              to="/"
            >
              <Button>Home</Button>
            </Link>
          </Nav>
          <Nav>
            <Link
              className="m-1"
              to="/register"
            >
              <Button>Register</Button>
            </Link>
            <Link
              className="m-1"
              to="/login"
              eventkey={2}
            >
              <Button>Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarR;
