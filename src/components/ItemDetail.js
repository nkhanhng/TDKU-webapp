import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from '../axios';
import config from '../config';

class ItemDetail extends Component {
    componentWillMount(){
        const itemId = this.props.match.params.id;
        axios.get(`/api/post/${itemId}`)
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
        if(!this.state.item) 
        return  <div className='loader'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
           
            
        return (
            <div className='container detailItem'>
                {/* <NavBar/> */}
                {/* <button onClick={this.back}>
                    Back
                </button> */}
                <div >
                    <div style={{width: "70%"}} className="child">
                        <img className="img-fluid w-100" src={config.rootPath +  this.state.item.imageUrl}
                        alt={this.state.item.title} />
                        <h5 className='title'>{this.state.item.title}</h5>
                        <hr className='styleHR'/>
                        <p className='description'>{this.state.item.description}</p>
                        <hr className='styleHR'/>
                        <h5 className='text-left'>Add a comment: </h5>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button className='btn btn-primary mt-3'>Send your comment</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemDetail;