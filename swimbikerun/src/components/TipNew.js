import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css'
import TipsList from './TipsList'
import axious from 'axious'

class TipNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            tags: '',
            description: '',
            addSuccess: false
        }
    }
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        console.log(this.state)
        axious.post('the url of mongodb!', this.state) //edit with mongodb link, should i use URL?
        .then(response) 
    }
    render() {
        const { title, tags, description } = this.state
        return (
            <div>
                <h1>Add a new tip</h1>
                <Form onSubmit={this.submitHandler}> 
                <Form.Group controlId="title-new" className="new-container">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="enter a short title" name="title" value={title} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="tags-new" className="new-container">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="select" type="text" name="tags" value={tags} onChange={this.handleChange}>
                    <option>training</option>
                    <option>diet</option>
                    <option>equipments</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description-new" className="new-container">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="describe in more details" name="description" value={description} onChange={this.handleChange} />
                </Form.Group>
                <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </div>
        )
    }
}

export default TipNew
