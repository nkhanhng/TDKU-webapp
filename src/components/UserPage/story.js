import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <img style={{height: '100px'}} src={'http://localhost:6969' + this.props.imageUrl} alt='post'/>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default Story;