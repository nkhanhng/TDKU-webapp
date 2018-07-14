import React, { Component } from 'react';
import Register from './SignInAndUp/Register';
import {Button} from 'reactstrap';
import Login from './SignInAndUp/LoginModal';
import axios from '../axios';


class ProfilePanel extends Component {
  state={
    loginModalOpen : false ,
    regModalOpen : false,
    username : null
  }

  // register = () => {
  //   axios.post("api/users/create",{
      
  //   })
  //   this.setState({
  //     regModalOpen: true
  //   })
  // }

  login = () => {
    axios.post("api/auth",{
      username: "admin",
      password: "123"
    })
    .then(response => {
      this.setState({
        username: response.data.username,
        id: response.data.id
      })
    })
    .catch(err => console.log(err))
    this.setState({
      loginModalOpen :true
    })
  }

  render() {
    return (
      <div className='mr-3'>
          <Button className="btn btn-light " onClick={this.register}>Sign Up</Button>{'  '}
          
          
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
  renderContent(){
    if(!this.state.username){
      return <Button className="btn btn-light " onClick={this.login}>Sign In</Button>;
    }else{
      return <div>{this.state.username}</div>
    }
  }
}

export default ProfilePanel;