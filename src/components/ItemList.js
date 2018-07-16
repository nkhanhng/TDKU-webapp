import React, { Component } from 'react';
import axios from "../axios";
import NavBar from './NavBar';
import MainContent from './MainContent';
import DescriptionWeb from './DescriptionWeb';
import ImageHome from './ImageHome'
class ItemList extends Component {
    state = {
        images: [],
        searchString: ""
      };
    
      componentDidMount() {
        axios
          .get("/api/post")
          .then(data => {
            console.log(data.data);
            this.setState({
              images: data.data
            });
          })
          .catch(err => console.error(err));
      }
    
      _onSearchChanged = text => this.setState({ searchString: text });
  render() {
    const displayedImages = this.state.images.filter(
        img =>
          img.title.includes(this.state.searchString) 
      );
    return (
        <div className="App">
        
        <NavBar onSearchChanged={this._onSearchChanged} />
        <ImageHome/>
        <DescriptionWeb/>
        <MainContent images={displayedImages} />
      
      </div>
    );
  }
}

export default ItemList;