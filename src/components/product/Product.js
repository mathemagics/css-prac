import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './styles.scss';
import ProductLinks from '../productLinks';
import blue from '../../assets/images/blue.jpg';
import blue2 from '../../assets/images/blue2.png';
import green1 from '../../assets/images/green.jpg';
import green2 from '../../assets/images/green2.png';
import brown1 from '../../assets/images/brown.jpg';
import brown2 from '../../assets/images/brown2.png';
import red1 from '../../assets/images/red.jpg';
import red2 from '../../assets/images/red2.png';

class Product extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="product">
          <img src={blue} alt="blue" className="product__primary-image" />
          <img src={blue2} alt="blue2" className="product__secondary-image" />
          <ProductLinks color={'blue'} />
        </div>
        <div className="product">
          <ProductLinks color={'green'} />
          <img src={green1} alt="Test" className="product__primary-image" />
          <img src={green2} alt="Test2" className="product__secondary-image" />
        </div>
        <div className="product">
          <img src={brown1} alt="Test" className="product__primary-image" />
          <img src={brown2} alt="Test2" className="product__secondary-image" />
          <ProductLinks color={'brown'} />
        </div>
        <div className="product">
          <ProductLinks color={'red'} />
          <img src={red1} alt="Test" className="product__primary-image" />
          <img src={red2} alt="Test2" className="product__secondary-image" />
        </div>
      </div>
    );
  }
}

export default Product;
