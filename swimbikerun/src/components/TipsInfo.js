import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import TipsModal from './TipsModal.js'
import axios from 'axios';

class TipsInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            id: null,
            show: false,
            displayOneTip:null, 
            title: this.props.title,
            description: this.props.description
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleUpdate = async(event) => {
        const id = this.state.id
        const payload = {
            title: this.state.title,
            tags: this.state.tag,
            description: this.state.description
        }
        console.log('this is id', process.env.REACT_APP_BACKEND_URL+`/tips/${id}`);
        await axios.put(process.env.REACT_APP_BACKEND_URL+`/tips/${id}`, payload)
        // await this.toggleClose(event)
        // window.location.reload(false);
    }
    toggleClose = async(event) =>{
        this.handleUpdate(event)
        this.setState({
            show: false,
        }, ()=>{
            setTimeout(()=>{
                this.props.updateTips()
            })   
        });
    }
    toggleOpen = async(event, id) =>{
        event.preventDefault()
        this.setState({
            show:true,
            id: id,
        });
    }

    render() {
        console.log('tipsinfo', this.props)
        return (
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.tag}</Card.Subtitle>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Link 
                            href={`/tips/${this.props.id}`} 
                            onClick={(e)=> this.toggleOpen(e, this.props.id)}
                        >
                            View
                        </Card.Link>
                        <Card.Link onClick={(e)=>this.addToFav(e, this.props.id)}>Add to Favorites</Card.Link>
                    </Card.Body>
                    <TipsModal 
                        show={this.state.show}
                        handleChange={this.handleChange} 
                        handleUpdate={this.handleUpdate}
                        title={this.props.title}
                        description={this.props.description}
                        toggleOpen={this.toggleOpen}
                        toggleClose={this.toggleClose}
                        />	
                </Card>   
            </div>
        )
    }
}

export default TipsInfo;