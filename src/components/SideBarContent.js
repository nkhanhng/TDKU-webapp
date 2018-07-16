import React, { Component } from 'react';

class SideBarContent extends Component {
    render() {
        return (
            <div className={`Side_nav${this.props.isShow ? " open" : ""}`}>
                <a href="javascript:void(0)" className="closebtn" onClick={this.props.toggle2}
                >&times;</a>
                <a href='/user/:id'> Avatar</a>
                <a href="/">Home</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        );
    }
}

export default SideBarContent;