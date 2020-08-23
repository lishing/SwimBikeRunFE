import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav.js';
import About from './components/About.js';
import TipsList from './components/TipsList.js';
import Header from './components/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/tips" component={TipsList}/>
          </Switch>
          <Header />
        </div>
      </Router>
    )
  }
}

export default App

