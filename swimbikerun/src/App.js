import './App.css';
import React, { Component } from 'react';
import About from './components/About.js';
import LandingPage from './components/LandingPage.js';
import TipNew from './components/TipNew.js';
import FavTipsList from './components/FavTipsList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FavTipsInfo from './components/FavTipsInfo';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/about" component={About}/>
              <Route path="/tips/liked" component={FavTipsList}/>
              <Route exact path="/tips/new" component={TipNew}/>
            </Switch>
          </div>
        </Router>
      )
  }
}

export default App

