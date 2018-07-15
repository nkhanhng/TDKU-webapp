import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button} from 'reactstrap';
// import axios from '../../axios'

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: ""
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    render() {       
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>
                    Register
                </ModalHeader>
                <ModalBody>
                    {this.renderBody()}
                </ModalBody>
            </Modal>
        );
    }

    renderBody(){
        return(
            <Form>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="text" name="username" placeholder="Username" onChange={this.handleUsername} />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Password" onChange={this.handlePassword}/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input onChange={this.handleEmail}/>
                </FormGroup>
                <FormGroup>
                <Label>Profile Image</Label>
                    <Input type="file" name="file" />
                </FormGroup>
                <Button className="btn btn-primary" >Sign Up</Button>
            </Form>
        )
    }
}

export default Register;