import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TagsHeader extends Component {
    render() {
        return (
            <div>
                <ul className='nav-links'> 
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/tips">
                        <li>Tips</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default TagsHeader
