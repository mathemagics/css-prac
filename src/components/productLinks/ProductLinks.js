import React from 'react';

import './styles.scss';

export default (props) => {
  return (
    <div className="product-links">
      <div className="product-links__aligner">
        <div className="product-links__text">
          <p className="product-links__text--name">{props.name}</p>
          <p className="product-links__text--coords">{props.coords}</p>
          <p className="product-links__text--description">{props.description}</p>
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
    </div>
  );
};
