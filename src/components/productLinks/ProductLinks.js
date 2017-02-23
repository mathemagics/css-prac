import React from 'react';

import './styles.scss';

export default () => {
  return (
    <div className="product-links">
      <div className="product-links__text">
        <p className="product-links__text--name">THE CAPE</p>
        <p className="product-links__text--coords">41.6787° N , 70.4789° W</p>
        <p className="product-links__text--description">MINT - GINGER - MOSS</p>
      </div>
      <button className="product-links__button product-links__button--blue">
        shop now
      </button>
      <button className="product-links__button product-links__button--white">
        see the adventure
      </button>
    </div>
  );
};
