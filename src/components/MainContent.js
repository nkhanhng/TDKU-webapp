import React, { Component } from 'react';
import "../App.css";
import Item1 from './Item1';
import Item2 from './Item2';
import Item4 from './Item4';
class MainContent extends Component {
  render() {
    return (
        <div className='container '> 

            <div className=' row d-flex justify-content-between'>       
                <Item1 className=" col-4 pb-4"/>
                <Item1 className=" col-4"/>
               
                <Item2 className=" col-4"/>
                <Item1 className=" col-4"/>
                <Item4 className=" col-4"/>
                <Item1 className=" col-4"/>
                <Item2 className=" col-4"/>
            </div>
        </div> 
    );
  }
}

export default MainContent;