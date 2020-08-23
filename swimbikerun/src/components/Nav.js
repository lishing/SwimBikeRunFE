import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul className='nav-links'> 
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/fav">
                        <li>Your Favourites</li>
                    </Link>
                    <Link to="/new">
                        <li>Add a Tip</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Nav
