import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    const item = this.props.item
    return (
      <Navbar  collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Zipline</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} componentClass={Link} href="/" to="/Dashboard">
              Dashboard
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/About">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
