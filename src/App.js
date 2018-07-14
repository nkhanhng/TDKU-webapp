import React, { Component } from "react";
import { Route,BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import PostForm from './components/PostForm';

class App extends Component {
  render(){
    return (
      <div className="App " >      
      <BrowserRouter>
        <div>
          <Route exact path="/"component={ItemList}  />
          <Route path="/post/:id" component={ItemDetail} />   
           <Route  path="/postDetail"component={PostForm}  /> 
        </div>
         
      </BrowserRouter>
      </div>
    )
  }
}

export default App;