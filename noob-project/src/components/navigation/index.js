import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand>
            League of Noobs
          </Navbar.Brand>
        </LinkContainer>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/Champions">
          <NavItem eventKey={1}>Champions</NavItem>
        </LinkContainer>
        <NavItem eventKey={2} href="/Guides">Guides</NavItem>
        <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/ContactUs">Contact Us</MenuItem>
          <MenuItem eventKey={3.2}>Help</MenuItem>
          <MenuItem eventKey={3.3}></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Sign-In</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
