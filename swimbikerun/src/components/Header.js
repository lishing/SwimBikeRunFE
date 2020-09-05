import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    // handleClick = () =>{
    //     this.props.addNew(this.props.tips);
    // };

    render() {
        return (
            <div className="top">
                <Jumbotron>
                    <h1>Starting out should not be hard</h1>
                    <p>
                        Discover the best hacks, tips and tricks for triathlon. 
                        Contribute your ideas to help other athletes as well.
                    </p>
                    {/* <p>
                        <Button variant="primary" onClick={this.handleClick}>Add a Tip</Button>
                    </p> */}
                    <Link to="/tips/new">
                        <Button variant="primary">Add a Tip</Button>
                    </Link>
                </Jumbotron>
            </div>
        )
    }
}

export default Header
