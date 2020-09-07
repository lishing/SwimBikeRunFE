import './App.css';
import React, { Component } from 'react';
import About from './components/About.js';
import LandingPage from './components/LandingPage.js';
import TipNew from './components/TipNew.js';
import FavTipsInfo from './components/FavTipsInfo.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/about" component={About}/>
              <Route path="/tips/liked" component={FavTipsInfo}/>
              <Route exact path="/tips/new" component={TipNew}/>
            </Switch>
          </div>
        </Router>
      )
  }
}

export default App

