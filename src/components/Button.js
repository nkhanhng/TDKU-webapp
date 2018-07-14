import React, { Component } from 'react';
import axios from '../axios'
// import config from '../../config';

class ButtonForPost extends Component {
    state = {
        userId: ''
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/auth")
            .then(res => this.setState({userId: res.data.userId})
            )
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.props.userId)
        console.log(this.state.userId)
        if(this.state.userId == this.props.userId){
            return (
                <div>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-success">View</button>
                </div>
            )}
        else{
            return (
                <div>
                    <button className="btn btn-primary">Trade</button>
                </div>
            );
        }
    }
}

export default ButtonForPost;