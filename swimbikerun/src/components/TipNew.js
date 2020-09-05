import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import '../App.css'
import TipsList from './TipsList'
import api from '../api/index.js'
import axios from 'axios'

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
    handleSummit = async (event) =>{
        event.preventDefault()
        const payload = {
            title: this.state.title,
            tags: this.state.tags, //this cannot be stored when i selected it
            description:this.state.description
        }
        await axios.post(process.env.REACT_APP_BACKEND_URL+'/tips/new', payload)
    }
    submitHandler = event =>{
        event.preventDefault()
        console.log(this.state)
        const submit = api.createNewTip(this.state) 
        if (submit){
            window.location.href = '/'
        }
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
                    <option value="training">training</option>
                    <option value="diet">diet</option>
                    <option value="equipments">equipments</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="description-new" className="new-container">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="describe in more details" name="description" value={description} onChange={this.handleChange} />
                </Form.Group>
                <p>
                    <Button onClick={this.handleSummit} className="btn btn-primary">Submit</Button>
                </p>
                </Form>
                <Link to="/">
                    <Button type="back" className="btn btn-primary">Back</Button>
                </Link>
                
            </div>
        )
    }
}

export default TipNew
