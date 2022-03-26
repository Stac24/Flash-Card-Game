import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Container, Nav, NavDropdown,
} from 'react-bootstrap';

function Navigation({ isAuthenticated, setAuth }) {
  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };
  return (
    <Navbar className="mb-3" bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./high-voltage.png" width="30" height="30" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              Create Flash Cards
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {isAuthenticated
              ? (
                <NavDropdown title={`Welcome ${localStorage.getItem('name')}`} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={logout} href="#action/3.1">Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
