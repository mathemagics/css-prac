import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './styles.scss';
import image from '../../assets/images/test.jpg';
import image2 from '../../assets/images/test2.png';
import ProductLinks from '../productLinks';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product">
        <img src={image} alt="Test" className="product__primary-image" />
        <img src={image2} alt="Test2" className="product__secondary-image" />
        <ProductLinks />
      </div>
    );
  }
}

export default Product;
