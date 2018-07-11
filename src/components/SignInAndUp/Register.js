import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button} from 'reactstrap';

class Register extends Component {
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
                    <Input type="text" name="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input/>
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