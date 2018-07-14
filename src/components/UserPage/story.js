import React, { Component } from 'react';
import ButtonForPost from "../Button"

class Story extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row '>
          
          <img style={{height: '200px', width:"200px"}} src={'http://localhost:6969' + this.props.imageUrl} className="col-3"/>
          <h1 className="col-5 border-right">{this.props.title}</h1>
          <ButtonForPost userId={this.props.userId}/>
        </div>
        
      </div>
    );
  }
}

export default Story;