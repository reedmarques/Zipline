import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import CustomListItem from '../components/CustomListItem';

export default class About extends Component {

  state = {
  }

  componentWillMount() {
    this.setState({data:
      [{title:'Zip 1', maintenance: 0, status: 'Ready'},
      {title:'Zip 2', maintenance: 0, status: 'Not ready'},
      {title:'Zip 3', maintenance: 0, status: 'Ready'},
      {title:'Zip 4', maintenance: 0, status: 'Ready'},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">
            Zipline
          </h1>
        </header> */}
        <img src={logo} className="App-logo" alt="logo" />
        
      </div>
    );
  }
}
