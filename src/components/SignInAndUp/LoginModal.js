import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Label, Input, FormGroup, Button } from 'reactstrap';

class Login extends Component {
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

    state = {
        username: "",
        password: ""
    }

    login = () => {
        console.log(this.state);
        this.props.login(this.state.username,this.state.password)
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
                <Button className="btn btn-primary">Login</Button>
            </Form>
        )
    }
}

export default Login;