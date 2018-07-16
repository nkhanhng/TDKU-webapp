import React, { Component } from 'react';
import axios from '../axios';


class Trade extends Component {

    state = {

    }
    
    componentDidMount(){
        const id = "5b4a23dd8813ac09e861798d"
        axios.get(`http://localhost:6969/api/trade/all/${id}`)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }

    acceptRequest = (id) => {
        axios.post()
    }

    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    }
}

export default Trade;