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
          <ProductLinks
            color={'blue'}
            name={'THE CAPE'}
            coords={'41.6787° N , 70.4789° W'}
            description={'MINT - GINGER - MOSS'}
          />
        </div>
        <div className="product">
          <ProductLinks
            color={'green'}
            name={'SEQUOIA'}
            coords={'36.4864° N , 1 1 8.5658° W'}
            description={'SMOKEY INCENSE - CEDARWOOD - SANDALWOOD'}
          />
          <img src={green1} alt="Test" className="product__primary-image" />
          <img src={green2} alt="Test2" className="product__secondary-image" />
        </div>
        <div className="product">
          <img src={brown1} alt="Test" className="product__primary-image" />
          <img src={brown2} alt="Test2" className="product__secondary-image" />
          <ProductLinks
            color={'brown'}
            name={'MOJAVE'}
            coords={'35.4166° N , 115.5842° W'}
            description={'BERGAMOT - BLACK PEPPER - TOBACCO LEAF'}
          />
        </div>
        <div className="product">
          <ProductLinks
            color={'red'}
            name={'TELLURIDE'}
            coords={'37.9375° N , 107.8123° W'}
            description={'SUEDE - SANDALWOOD - TONKA BEAN'}
          />
          <img src={red1} alt="Test" className="product__primary-image" />
          <img src={red2} alt="Test2" className="product__secondary-image" />
        </div>
      </div>
    );
  }
}

export default Product;
