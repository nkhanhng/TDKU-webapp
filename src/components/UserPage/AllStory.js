import React, { Component } from 'react';
import axios from '../../axios'
import config from '../../config';
import Story from './Story';

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
                    allPost.push(<Story title={post.title} imageUrl={post.imageUrl} userId={this.props.match.params.id}/>)
            }  
        })
        return (
           
        <div>
            
            <div>{allPost}</div>
        </div>
        );
    } 
}

export default AllStory;