import React, { Component } from 'react';
import axios from '../../axios'
import config from '../../config';
import Story from './story';

class AllStory extends Component {

    state = {
        posts: []
    }

    componentWillMount() {
        axios
            .get('http://localhost:6969/api/post')
            .then(data => this.setState({posts: data.data}))
    }

    render() { 
        console.log(this.state.posts)
        const allPost = this.state.posts.map(post => (<Story title={post.title} imageUrl={post.imageUrl} />))
        return (
        <div>
            <div>{allPost}</div>
        </div>
        );
    } 
}

export default AllStory;