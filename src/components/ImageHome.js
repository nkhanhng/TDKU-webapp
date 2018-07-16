import React, { Component } from 'react';

class ImageHome extends Component {
  render() {
    return (
      <div className='imgHome'>
          <img src={require('../img/header.jpg')} />
      </div>
    );
  }
}

export default ImageHome;