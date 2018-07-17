import React, { Component } from 'react';
import axios from '../axios';


class Trade extends Component {

    state = {
        allRequest:[],
        guestId:[],
        status:""
    }
    
    componentWillMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:6969/api/trade/all/${id}`)
        .then(response => {
            console.log(response)
            this.setState({allRequest: response.data})
            console.log(this.state.allRequest)
        })
        .catch(err => console.log(err))
        
    }

    acceptRequest = (id) => {
        axios.post(`http://localhost:6969/api/trade/${id}/accept`,{
            guestId: id
        })
        .then(data => {
            this.setState({status: data.data.success})
        })
        .catch(err => console.log(err))
    }

    render() {
        let guestId =[]
        this.state.allRequest.map(request => {
            console.log(request)
            guestId.push(
                <div>
                    <span><h4>User {request.guestId} want to trade with you </h4></span>
                    <span><button onClick={()=>this.acceptRequest(request.guestId)}>Accept</button></span>
                    <span><button>Deny</button></span>
                    {this.setState.status === 1
                    ? <p>Accepted</p>
                    : <p></p>}
                </div>
                
            )
        })
        return (
            <div>
                <h2> Your requests </h2>
                <div>{guestId}</div>
            </div>
        );
    }
}

export default Trade;