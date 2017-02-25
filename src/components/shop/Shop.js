import React, { Component } from 'react';

import ShopItem from '../shopItem';

import blue from '../../assets/images/blue2.png';
import green from '../../assets/images/green2.png';
import brown from '../../assets/images/brown2.png';
import red from '../../assets/images/red2.png';

import './styles.scss';

class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="shop__row">
          <ShopItem img={blue} />
          <ShopItem img={green} />
        </div>
        <div className="shop__row">
          <ShopItem img={brown} />
          <ShopItem img={red} />
        </div>
      </div>
    );
  }
}

export default Shop;
