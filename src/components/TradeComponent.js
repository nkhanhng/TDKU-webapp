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
        })
        .catch(err => console.log(err))
        
    }

    

    render() {
        return (
            <div>
                <p></p>
            </div>
        );
    }
}

export default Trade;