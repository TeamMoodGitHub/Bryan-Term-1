import React, { Component } from 'react';
import logo from './League_of_Legends_Icon.png';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
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
                <MenuItem eventKey={3.3}>Uninstall</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Sign-In</MenuItem>
            </NavDropdown>
            </Nav>
        </Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello World!</h2>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
