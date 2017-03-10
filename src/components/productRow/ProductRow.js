import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProductLinks from '../productLinks';
import './styles.scss';

export default (props) => {
  return (
    <div className="product-row">
      <LazyLoad throttle={200} height={300} scroll>
        <ReactCSSTransitionGroup
          key="1"
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <img src={props.primaryImage} className="products__primary-image" />
        </ReactCSSTransitionGroup>
      </LazyLoad>
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
