import React, { Component } from 'react'
import Nav from './Nav.js';
import Header from './Header.js';
import TipsList from './TipsList.js';
import api from '../api/index';

const tips = [
    {
      "_id": {
          "$oid": "5f3946071ad88a882c367aa1"
      },
      "title": "Start with a training plan",
      "tags": "training",
      "description": "You can google training plans online"
}]

class LandingPage extends Component {
    constructor() {
        super();
        this.state={
          allTips: null,
        }
    }
    componentDidMount = async () =>{
      const allTipsList = await api.getAllTips()
      this.setState({
        allTips: allTipsList.data,
        displayAllTips : true
      })
      console.log('this.state.allTips', this.state.allTips)
    }
    updateTips = async () => {
      const allTipsList = await api.getAllTips()
      console.log('all updated tips', allTipsList)
      this.setState({
        allTips: allTipsList.data,
        displayAllTips : true
      })
    }
    //delete, then call allTipsList, and setState
    deleteTip = async (id) =>{
      await api.deleteTip(id)
      const allTipsList = await api.getAllTips()
      this.setState({
        allTips: allTipsList.data,
        displayAllTips : true
      })
    }

    render() {
        return (
            <div>
                <Nav />
                <Header />
                {/* { this.state.displayAllTips ? */}
                <TipsList 
                  tips={this.state.allTips ? this.state.allTips : []} 
                  updateTips={this.updateTips} deleteTip={this.deleteTip}
                />
                {/* null } */}
            </div>
        )
    }
}

export default LandingPage
