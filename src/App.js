import React, { Component } from "react";
import { Route,BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import PostForm from './components/PostForm';
import AllStory from './components/UserPage/AllStory'
import NavBar from "./components/NavBar";
import RegSuccess from "./components/RegSuccess"

class App extends Component {
  render(){
    return (
      <div className="App " > 
      <BrowserRouter>
        <div>
          <Route exact path="/"component={ItemList}  />
          <Route path="/post/:id" component={ItemDetail} />   
          <Route  path="/postDetail"component={PostForm}  /> 
          <Route path="/user/:id" component={AllStory}/>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;