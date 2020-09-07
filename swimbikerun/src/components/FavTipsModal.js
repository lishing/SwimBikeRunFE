import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function FavTipsModal(props) {
    return (
      <>
        <Modal show={props.show} onHide={props.toggleClose} animation={false}>
        {/* <Modal show={this.state.show} onHide={this.toggleClose}> */}
                        <Form>
                            <Modal.Header closeButton>
                            <Form.Group controlId="Title">
                                <Modal.Title>Title</Modal.Title>
                                <Form.Control type="text" onChange={props.handleChange} name="title" defaultValue={props.title} />
                            </Form.Group>
                            </Modal.Header>
                            <Form.Group controlId="description">
                                <Modal.Title>Description</Modal.Title>
                                <Form.Control as="textarea" rows="3" onChange={props.handleChange} name="description" defaultValue={props.description} />
                            </Form.Group>     
                            <Modal.Footer>
                            <Button variant="secondary" onClick={props.toggleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>props.toggleClose(e)}>
            Save Changes
          </Button>
                            </Modal.Footer>
                        </Form>
                </Modal> 
      </>
    );
  }

  
export default FavTipsModal