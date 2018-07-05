import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar'
import SlideShow from './components/SlideShow';
class App extends Component {
  render() {
    return (
      <div className="App " >      
      <div>
        <NavBar/>
        <SlideShow/>  
        
      </div>
      <img src="./components/1.jpeg" />    
      </div>
    );
  }
}

export default App;
