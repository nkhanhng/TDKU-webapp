import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button } from 'reactstrap';
import axios from '../../axios'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    login = () => {
        axios.post('http://localhost:6969/api/auth', {
            username: this.state.username,
            password: this.state.password
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>
                    Sign In
            </ModalHeader>
                <ModalBody>
                    {this.renderBody()}
                </ModalBody>
            </Modal>
        );
    }

    renderBody() {
        return (
            <Form>
                <FormGroup>
                    <Label>Username</Label>
                        <Input type="text" placeholder="Username" placeholder="Username"
                        onChange={(event)=>this.setState({username:event.target.value})}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" placeholder="Password" 
                        onChange={(event)=>this.setState({password:event.target.value})}/>
                </FormGroup>
                <Button className="btn btn-primary" onClick={this.login}>Login</Button>
            </Form>
        )
    }
}

export default Login;