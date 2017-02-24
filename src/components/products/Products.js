import React from 'react';

import './styles.scss';
import ProductRow from '../productRow';
import blue1 from '../../assets/images/blue.jpg';
import blue2 from '../../assets/images/blue2.png';
import green1 from '../../assets/images/green.jpg';
import green2 from '../../assets/images/green2.png';
import brown1 from '../../assets/images/brown.jpg';
import brown2 from '../../assets/images/brown2.png';
import red1 from '../../assets/images/red.jpg';
import red2 from '../../assets/images/red2.png';

// Products are hard-coded in, as we felt it wasn't paticularly important
// to create a back-end of any sort for the purposes of this project.

export default() => {
  return (
    <div className="products">
      <ProductRow
        primaryImage={blue1}
        secondaryImage={blue2}
        color={'blue'}
        name={'THE CAPE'}
        coords={'41.6787° N , 70.4789° W'}
        description={'MINT - GINGER - MOSS'}
      />
      <ProductRow
        primaryImage={green1}
        secondaryImage={green2}
        color={'green'}
        name={'SEQUOIA'}
        coords={'36.4864° N , 1 1 8.5658° W'}
        description={'SMOKEY INCENSE - CEDARWOOD - SANDALWOOD'}
      />
      <ProductRow
        primaryImage={brown1}
        secondaryImage={brown2}
        color={'brown'}
        name={'MOJAVE'}
        coords={'35.4166° N , 115.5842° W'}
        description={'BERGAMOT - BLACK PEPPER - TOBACCO LEAF'}
      />
      <ProductRow
        primaryImage={red1}
        secondaryImage={red2}
        color={'red'}
        name={'TELLURIDE'}
        coords={'37.9375° N , 107.8123° W'}
        description={'SUEDE - SANDALWOOD - TONKA BEAN'}
      />
    </div>
  );
};
