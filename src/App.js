import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
  

import Footer from "./components/Footer";
import HomePage from './HomePage';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import PostForm from "./components/PostForm"

class App extends Component {
  render() {
    return (
      <div className="App " >      
        
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/post" component={PostForm} />
          </Switch> 
        </BrowserRouter>

        <Footer/>
      
      </div>
    );
  }
}

export default App;
 