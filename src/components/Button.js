import React, { Component } from 'react';
import axios from '../axios'
// import config from '../../config';

class ButtonForPost extends Component {
    state = {
        userId: undefined
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/auth")
            .then(response => {
                this.setState({userId:response.userId}) 
                console.log("qqqqq",this.state.userId)
            })
            .catch(err => console.log(err))
    }

    render() {
        if(this.state.userId == this.props.userId){
            console.log(this.props.userId)
        }
        return (
            <div>
                <button className="btn btn-primary">Trade</button>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-success">View</button>
            </div>
        );
    }
}

export default ButtonForPost;