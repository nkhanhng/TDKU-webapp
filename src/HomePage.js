import React, { Component } from 'react';
import DescriptionWeb from './components/DescriptionWeb';
import MainContent from './components/MainContent';

class HomePage extends Component {
  render() {
    return (
        <div>
            <DescriptionWeb/>
            <MainContent/>

        </div>
    );
  }
}

export default HomePage;