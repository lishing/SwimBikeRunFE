import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav.js';
import About from './components/About.js';
import TipsList from './components/TipsList.js';
import Header from './components/Header.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//dummy data of tips, how to insert?
const tips = [
  {
    "_id": {
        "$oid": "5f3946071ad88a882c367aa1"
    },
    "title": "Start with a training plan",
    "tags": "training",
    "description": "You can google training plans online"
}]

class App extends Component {
  constructor() {
    super();
    this.state={
      allTips: null,
    }
  }
  componentDidMount = async () =>{
    const allTipsList = tips
    this.setState({
      allTips: allTipsList,
      displayAllTips : true
    })
    console.log('this.state.allTips', this.state.allTips)
  }
  render() {
    console.log(tips);
    if (this.state.allTips === null){
      return(<h3>page loading...</h3>)
    } else {
      return (
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/about" component={About}/>
              {/* <Route path="/fav" component={FavTips}/> */}
            </Switch>
            <Header />
            { this.state.displayAllTips ?
            <TipsList tips={this.state.allTips ? this.state.allTips : []} /> :
            null }
          </div>
        </Router>
      )
    }
  }
}

export default App

