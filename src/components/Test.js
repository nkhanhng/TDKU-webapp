import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div className='container itemImage'>
          <div className='ass '>
           
            <img className='img-fluid detailImg' src={`http://localhost:6969${this.props.img.imageUrl}`}
                alt="fail"/>
                <div className='descriptionImg'>
                  <p>{this.props.img.title}</p>
                  <p> {this.props.img.description}</p>
                </div>
               
             
           
          </div>
        
       </div>   
    );
  }
}

export default Test;