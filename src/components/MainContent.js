import React, { Component } from 'react';
import "../App.css";
import Item1 from './Item1';

class MainContent extends Component {
  render() {
    const allImages = this.props.images.map(img => (
      <Item1 key={img._id} img={img} />
    ));

    return (
        <div className='container '> 

            <div className= 'card-columns main_content'>       
                
              {allImages}
              
            </div>
            
        </div> 
    );
  }
}

export default MainContent;