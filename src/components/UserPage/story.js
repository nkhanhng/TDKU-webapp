import React, { Component } from 'react';
import ButtonForPost from "../Button"

class Story extends Component {
  render() {
    return (
      <div className='container'>

        <div className='row story'>
          
          <img className='imgStory col-4' src={'http://localhost:6969' + this.props.imageUrl} />
          
          <div><h1 className="border-right titleStory">{this.props.title}</h1>
          
          </div>
          
          <ButtonForPost className='btnStory' userId={this.props.userId}/>

        </div>
        
      </div>
    );
  }

}

export default Story;