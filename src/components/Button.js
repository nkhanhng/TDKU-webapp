import React, { Component } from 'react';
import axios from '../axios'
// import config from '../../config';

class ButtonForPost extends Component {
    state = {
        userId: '',
        statusText:""
    }

    componentDidMount(){
        axios.get("http://localhost:6969/api/auth")
            .then(res => this.setState({userId: res.data.userId})
            )
            .catch(err => console.log(err))
    }

    sendRequest = () => {
        axios.post(`http://localhost:6969/api/trade`,{
            ownerId: this.props.ownerId,
            postId: this.props.postId,
            guestId: this.props.guestId
        })
        .then(response => {
            console.log(response)
            this.setState({statusText: response.statusText})
            console.log(this.state.statusText)
        })
        .catch(err => console.log(err))
    }

    acceptRequest = (id) => {
        axios.post(`http://localhost:6969/api/${id}/accept`)
        .then(response=>console.log(response))
        .catch(err => console.log(err))
    }

    render() {
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
                    <button className="btn btn-primary" onClick={()=>this.sendRequest()}>Trade</button>
                    {this.state.statusText === "OK"
                    ? <p color="red">Request sent</p>
                    : ""}
                </div>
            );
        }
    }
}

export default ButtonForPost;