import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './styles.scss';
import image from '../../../assets/test.jpg';
import image2 from '../../../assets/test2.png';
import ProductLinks from '../productLinks';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={image} alt="Test" />
        <img src={image2} alt="Test2" />
        <ProductLinks />
      </div>
    );
  }
}

export default Product;
