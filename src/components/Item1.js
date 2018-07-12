import React, { Component } from 'react';
import config from '../config';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';
  import {Link} from 'react-router-dom';
class Item1 extends Component {
  render() {
    return (
      <div> 
         <Link to={`/post/${this.props.img._id}`}>      
        <div className="box">
          
          <Card >
            <CardImg className="imageBox"
              src={config.rootPath+this.props.img.imageUrl }
              alt="Card image cap" />
            <CardBody className="textBox" >
              <CardTitle>{this.props.img.title}</CardTitle>
              
            </CardBody>
          </Card>

        </div>
        </Link>
      </div>
    );
  }
}

export default Item1;