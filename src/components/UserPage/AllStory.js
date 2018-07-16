import React, { Component } from 'react';
import axios from '../../axios'
import config from '../../config';
import Story from './story';
import NavBar from '../NavBar'

class AllStory extends Component {

    state = {
        posts: [],
        userId: ""
    }

    componentDidMount() {
        axios
            .get('http://localhost:6969/api/post')
            .then(data => this.setState({posts: data.data}))
        axios
            .get('http://localhost:6969/api/auth')
            .then(data =>
                
                 this.setState({userId: data.data.userId}))
            
        }
        

    render() { 
        var allPost = []
        this.state.posts.map(post => {
            if (this.state.userId == post.createBy) {
                console.log(post)
                allPost.push(<Story title={post.title} imageUrl={post.imageUrl} guestId={this.props.match.params.id}
                    postId={post._id} ownerId={post.createBy} />)
                console.log("Guest",this.props.match.params.id)
                console.log("PostId",post._id)
                console.log("Owner",post.createBy)
            }  
        })
       
        return (
           
        <div className='allStory'>
            <NavBar/>
            
            <h1 className='storyTitle'>Các post của bạn:</h1>
            <div>{allPost}</div>
        </div>
        );
    } 
}

export default AllStory;