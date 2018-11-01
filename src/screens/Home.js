import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styling/Home.css';
import CustomListItem from '../components/CustomListItem';

export default class Home extends Component {


  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <h2>Welcome to Zipline</h2>
          <p>Woooooooo</p>
          <a href="https://www.google.com">
            <h3 style={{fontSize:14}} bsStyle="primary">Check out the real site</h3>
          </a>
        </Jumbotron>
      </div>
    );
  }
}
