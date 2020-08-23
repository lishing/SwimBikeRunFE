import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css'

class TipNew extends Component {
    render() {
        return (
            <div>
                <h1>Add a new tip</h1>
                <Form> 
                <Form.Group controlId="title-new" className="new-container">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="enter a short title" />
                </Form.Group>
                <Form.Group controlId="tags-new" className="new-container">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="select">
                    <option>training</option>
                    <option>diet</option>
                    <option>equipments</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description-new" className="new-container">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="describe in more details" />
                </Form.Group>
                <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </div>
        )
    }
}

export default TipNew
