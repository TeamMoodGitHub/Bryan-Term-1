import React, { Component } from 'react';

import './Champions.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Champions extends Component {
  render() {
    return (
      <div className="Champions">
      <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">League of Noobs</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="#">Champions</NavItem>
            <NavItem eventKey={2} href="#">Guides</NavItem>
            <NavDropdown eventKey={3} title="Other" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Contact Us</MenuItem>
                <MenuItem eventKey={3.2}>Help</MenuItem>
                <MenuItem eventKey={3.3}></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Sign-In</MenuItem>
            </NavDropdown>
            </Nav>
        </Navbar>
        <div className="Champions-header">

          <h2>Hello World!</h2>
        </div>
        <p className="Champions-intro">

        </p>
      </div>
    );
  }
}

export default Champions;
