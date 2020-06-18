import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Navbar, Nav,
} from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="light" expand="sm" sticky="top">
    <div className="container">
      <Link className="mx-2 navbar-brand" to="/"><FormattedMessage id="main.title" /></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="mx-2" to="/"><FormattedMessage id="navbar.home" /></Link>
          <Link className="mx-2" to="/search"><FormattedMessage id="navbar.search" /></Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default NavbarComponent;
