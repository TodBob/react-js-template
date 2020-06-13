import React from 'react';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const NavbarComponent = () => (
  <Navbar bg="light" expand="sm" sticky="top">
    <div className="container">
      <Navbar.Brand href="#home">Movies Database</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavbarComponent;
