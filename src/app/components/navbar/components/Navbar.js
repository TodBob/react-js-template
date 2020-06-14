import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="light" expand="sm" sticky="top">
    <div className="container">
      <Navbar.Brand href="#home">Movies Database</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/"><Nav.Link>Home</Nav.Link></Link>
          <Link to="/search"><Nav.Link>Search</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavbarComponent;
