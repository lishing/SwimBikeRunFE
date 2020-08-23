import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <div class="top">
                <Jumbotron>
                    <h1>Starting out should not be hard</h1>
                    <p>
                        Discover the best hacks, tips and tricks for triathlon. 
                        Contribute your ideas to help other athletes as well.
                    </p>
                    <p>
                        <Button variant="primary">Add a Tip</Button>
                    </p>
                </Jumbotron>

                
            </div>
        )
    }
}

export default Header
