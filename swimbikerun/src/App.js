// import './App.css';
import React, { Component } from 'react'
import About from './components/About.js'
import TipsList from './components/TipsList.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/tips" component={TipsList}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

