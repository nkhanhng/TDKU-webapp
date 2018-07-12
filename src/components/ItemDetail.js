import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from '../axios';
import config from '../config';
import Item1 from './Item1';
import NavBar from './NavBar';
class ItemDetail extends Component {
    componentWillMount(){
        const itemId = this.props.match.params.id;
        axios.get(`http://localhost:6969/api/post/${itemId}`)
        .then(respone =>{
            console.log(respone)
            this.setState({
                item: respone.data
            })
        })
        .catch(err => console.log(err));
    }
    state={
        item: null
    }

    // back = ()=>{
    //     this.props.history.goBack();
    // }

    render() {
        if(!this.state.item) return <div>Loading...</div>
        
        return (
            <div className='container detailItem'>
                {/* <NavBar/> */}
                {/* <button onClick={this.back}>
                    Back
                </button> */}
                <div >
                    <div style={{width: "70%"}} className="child">
                        <img className="img-fluid w-100" src={ `http://localhost:6969${this.state.item.imageUrl}`}
                        alt={this.state.item.title} />
                        <h5 className='title'>{this.state.item.title}</h5>
                        <hr className='styleHR'/>
                        <p className='description'>{this.state.item.description}</p>
                        <hr className='styleHR'/>
                        <h5 className='text-left'>Add a comment: </h5>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className='btn btn-primary mt-3'>Send your comment</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemDetail;