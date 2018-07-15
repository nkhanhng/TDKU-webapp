import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button} from 'reactstrap';
import axios from '../../axios'
import RegSuccess from '../RegSuccess';

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        success: false
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

    register = () => {
        axios.post('http://localhost:6969/api/users', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        })
        .then(data => {
            console.log(data)
            this.handleSuccess()
        })
        .catch(err => console.log(err))
    }

    handleSuccess = () => {
        this.setState({success: true})
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
                <Button className="btn btn-primary" onClick={this.register} >Sign Up</Button>
                <RegSuccess 
                    isOpen={this.state.success} 
                    toggle={()=>this.setState({success: !this.state.success})}
                />
            </Form>
        )
    }
}

export default Register;