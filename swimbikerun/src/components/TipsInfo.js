import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class TipsInfo extends Component {
    constructor(){
        super();
        this.state={
            displayOneTip:null,
        }
    }
    render() {
        return (
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.tag}</Card.Subtitle>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Link href="/:id">View</Card.Link>
                        <Card.Link href="/fav">Add to Favorites</Card.Link>
                    </Card.Body>
                </Card>   
            </div>
        )
    }
}

export default TipsInfo;