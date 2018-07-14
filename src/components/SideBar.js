import React, { Component } from 'react';
import SideBarContent from './SideBarContent';
class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { show: true };
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
                {this.state.show && <SideBarContent toggle2={this.toggleDiv} />}
            </div>
        );
    }
}

export default SideBar;