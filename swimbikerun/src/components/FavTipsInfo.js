import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import FavTipsModal from './FavTipsModal.js'
import axios from 'axios';

class FavTipsInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            id: null,
            show: false,
            displayOneTip:null, 
            title: this.props.title,
            description: this.props.description,
            liked: this.props.liked
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
            description: this.state.description,
            liked: this.state.liked
        }
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
    removeFromFav(event, id) {
        this.setState({liked: !this.state.liked})
        console.log('removeFromFav')
    }
    // deleteTip = async (event, id) =>{
    //     //const id = this.state.id
    //     const payload = {
    //         title: this.state.title,
    //         tags: this.state.tag,
    //         description: this.state.description,
    //         liked: this.state.liked,
    //     }
    //     await axios.delete(process.env.REACT_APP_BACKEND_URL+`/tips/${id}`, payload)
    // }
    // deleteTip = (event, id) =>{
    //     // const id = this.props.id
    //     fetch(process.env.REACT_APP_BACKEND_URL+`/tips/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     }).then(response =>{
    //         axios.get(process.env.REACT_APP_BACKEND_URL+'/tips')
    //     })
    // }
    render() {
        console.log('favtipsinfo', this.props)
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
                        <Card.Link onClick={(e)=>this.removeFromFav(e, this.props.id)}>Remove from Favorites</Card.Link>
                    </Card.Body>
                    <FavTipsModal 
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

export default FavTipsInfo;