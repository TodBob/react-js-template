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
      <Link className="mx-2 navbar-brand" to="/">Movies Database</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/search">Search</Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavbarComponent;
