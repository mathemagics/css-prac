import React from 'react';

import ProductLinks from '../productLinks';
import './styles.scss';

export default (props) => {
  return (
    <div className="product-row">
      <img src={props.primaryImage} className="products__primary-image" />
      <img src={props.secondaryImage} className="products__secondary-image" />
      <ProductLinks
        name={props.name}
        color={props.color}
        coords={props.coords}
        description={props.description}
      />
    </div>
  );
};
