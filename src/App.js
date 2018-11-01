import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CustomListItem from './components/CustomListItem';
import CustomNavbar from './components/CustomNavbar';

import Dashboard from './screens/Dashboard';
import About from './screens/About';
import Home from './screens/Home';
import ZipDetails from './screens/ZipDetails';
import Error from './screens/Error';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/about" component={About}/>
            <Route path="/zips/:id" component={ZipDetails}/>
            <Route component={Error}/>
          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
