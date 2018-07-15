import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class RegSuccess extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalBody>
                   <h3 className="text-success">Sign up successfully</h3> 
                </ModalBody>
            </Modal>
        )
    }
}

export default RegSuccess;