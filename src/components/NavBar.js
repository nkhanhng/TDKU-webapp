import React, { Component } from 'react';
import SearchField from "./SearchField";

import ProfilePanel from "./ProfilePanel";
import "../App.css"
import Test from './Test';
// import LogoTeam from './LogoTeam';
class NavBar extends Component {
  render() {

    return (
        <div className="navbar navbar-expand">
        <div className="container">
          {/* <SearchField onSearchChanged={this.props.onSearchChanged} /> */}
          <SearchField/>
          
          <ProfilePanel />
          <Test/>
        </div>
      </div>
    );
  }
}

export default NavBar;