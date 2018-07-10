import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
  

import MainContent from './components/MainContent';
import DescriptionWeb from "./components/DescriptionWeb";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="App " >      
      <div>
        
        <NavBar/>
        <DescriptionWeb/>
          
        <MainContent/>
        <Footer/>
      </div>
      
      </div>
    );
  }
}

export default App;
