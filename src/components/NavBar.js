import React, { Component } from 'react';
import SearchField from "./SearchField";

import ProfilePanel from "./ProfilePanel";
import "../App.css"
import SideBar  from './SideBar';

// import LogoTeam from './LogoTeam';
class NavBar extends Component {
  render() {

    return (
        <div className="navbar navbar-expand">
                 
            <div className='navbar-content row d-flex justify-content-between'>
              <SideBar/>
              <SearchField onSearchChanged={this.props.onSearchChanged}/>
              <ProfilePanel/>  
              
            </div>

        </div>
    );
  }
}

export default NavBar;