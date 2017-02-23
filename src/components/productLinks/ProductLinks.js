import React from 'react';

import './styles.scss';

export default (props) => {
  return (
    <div className="product-links">
      <div className="product-links__text">
        <p className="product-links__text--name">THE CAPE</p>
        <p className="product-links__text--coords">41.6787° N , 70.4789° W</p>
        <p className="product-links__text--description">MINT - GINGER - MOSS</p>
      </div>
      <button
        className={`product-links__button product-links__button--primary-${props.color}`}
      >
        shop now
      </button>
      <button
        className={`product-links__button product-links__button--secondary-${props.color}`}
      >
        see the adventure
      </button>
    </div>
  );
};
