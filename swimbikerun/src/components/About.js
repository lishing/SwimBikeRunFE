import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Placeholder text</p>
                <Link to="/">
                    <Button type="back" className="btn btn-primary">Back</Button>
                </Link>
            </div>
        )
    }
}

export default About
