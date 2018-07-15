import React, { Component } from 'react';
import SideBarContent from './SideBarContent';
class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false };
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show })
    }
    render() {
        return (
            <div>
                <button className='btn btn-outline-light showBtn' onClick={this.toggleDiv}>☰</button>
                <SideBarContent toggle2={this.toggleDiv} isShow={this.state.show} />
            </div>
        );
    }
}

export default SideBar;