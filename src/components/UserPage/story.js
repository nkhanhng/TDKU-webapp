import React, { Component } from 'react';
import ButtonForPost from "../Button"

class Story extends Component {
  render() {
    return (
      <div className='container'>

        <div className='row story'>
          
          <img className='imgStory col-4' src={'http://localhost:6969' + this.props.imageUrl} />
          <h1 className="col-5 border-right">{this.props.title}</h1>
          <ButtonForPost userId={this.props.userId}/>

        </div>
        
      </div>
    );
  }

}

export default Story;