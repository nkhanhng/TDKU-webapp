import React, { Component } from 'react';
import "../App.css"
class SearchField extends Component {
  render() {
    return (
      <form className="col-3 search ">
        <input
          onChange={this._handleTextChange}
          className="form-control"
          type="text"
          placeholder="Search"
        />
      </form>
    );
  }
}

export default SearchField;