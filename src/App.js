import React, { Component } from "react";
import {Switch, Route,BrowserRouter, withRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";


class App extends Component {
  render(){
    return (
      <div className="App " >      
      <BrowserRouter>
        <div>
          <Route exact path="/"component={ItemList}  />
          <Route path="/post/:id" component={ItemDetail} />    
        </div>
         
      </BrowserRouter>
      </div>
    )
  }
}

export default App;