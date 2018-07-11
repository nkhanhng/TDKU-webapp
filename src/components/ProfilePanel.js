import React, { Component } from 'react';
import Register from './SignInAndUp/Register';
import {Button} from 'reactstrap';

class ProfilePanel extends Component {
  state={
    regModalOpen : false
  }

  register = () => {
    this.setState({
      regModalOpen: true
    })
  }

  render() {
    return (
      <div className='mr-3'>
          <Button className="btn btn-light " onClick={this.register}>Register</Button>
          
          <Register 
            isOpen={this.state.regModalOpen}
            toggle={()=>this.setState({regModalOpen: !this.state.regModalOpen})}
          />
      </div>
    );
  }
}

export default ProfilePanel;