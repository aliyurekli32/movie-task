import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import useAuth from "../helper/zustand";

const NavbarR = () => {
  const user=useAuth(state=>state.user)
  const removeUser=useAuth(state=>state.removeUser)
  const removeAuth=useAuth(state=>state.removeAuth)

  const check=(user)=>{
    return Object.keys(user).length
  }

  const handleLogout = ()=>{
      removeUser();
      removeAuth();
  }
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
          {user.firstName && <Nav className="me-auto">
           
           <Button className="btn-success" style={{width:"20vw"}} >{user.firstName}</Button>
         
       </Nav>}
          
          <Nav>
            {
              Object.keys(user).length > 0 ? <Link
              className="m-1"
              to="/"
            >
              <Button onClick={handleLogout} >Logout</Button>
            </Link> : <>
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
              <Button >Login</Button>
            </Link>
            </>
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarR;
