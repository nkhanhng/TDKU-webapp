import React, { Component } from 'react';
import Register from './SignInAndUp/Register';
import {Button} from 'reactstrap';
import Login from './SignInAndUp/LoginModal';

class ProfilePanel extends Component {
  state={
    loginModalOpen : false ,
    regModalOpen : false
  }

  register = () => {
    this.setState({
      regModalOpen: true
    })
  }

  login = () => {
    this.setState({
      loginModalOpen :true
    })
  }

  render() {
    return (
      <div className='mr-3'>
          <Button className="btn btn-light " onClick={this.register}>Sign Up</Button>{'  '}
          <Button className="btn btn-light " onClick={this.login}>Sign In</Button>
          
          <Register 
            isOpen={this.state.regModalOpen}
            toggle={()=>this.setState({regModalOpen: !this.state.regModalOpen})}
          />

          <Login
            isOpen={this.state.loginModalOpen}
            toggle={()=>this.setState({loginModalOpen: !this.state.loginModalOpen})}
          />
      </div>
    );
  }
}

export default ProfilePanel;