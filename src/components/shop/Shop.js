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
          <ShopItem
            img={blue} name="The Cape" price={65}
            description="MINT - GINGER - MOSS"
          />
          <ShopItem
            img={green} name="Sequoia" price={65}
            description="SMOKEY INCENSE - CEDARWOOD - SANDALWOOD"
          />
        </div>
        <div className="shop__row">
          <ShopItem
            img={brown} name="Mojave" price={65}
            description="BERGAMOT - BLACK PEPPER - TOBACCO LEAF"
          />
          <ShopItem
            img={red} name="Teluride" price={65}
            description="SUEDE - SANDALWOOD - TONKA BEAN"
          />
        </div>
      </div>
    );
  }
}

export default Shop;
