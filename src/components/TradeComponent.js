import React, { Component } from 'react';
import axios from '../axios';


class Trade extends Component {

    state = {
        allRequest:[],
        guestId:[],
        postId:[]
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

    

    render() {
        let guestId =[]
        this.state.allRequest.map(request => {
            console.log(request)
            guestId.push(<h4>User {request.guestId} want to trade with you </h4>)
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