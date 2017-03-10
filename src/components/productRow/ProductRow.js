import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProductLinks from '../productLinks';
import './styles.scss';

export default (props) => {
  return (
    <div className="product-row">
      <LazyLoad throttle={200} height={410} width={722} scroll>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <img src={props.primaryImage} className="products__primary-image" />
        </ReactCSSTransitionGroup>
      </LazyLoad>
      <LazyLoad throttle={200} height={443} width={144} scroll>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <img src={props.secondaryImage} className="products__secondary-image" />
        </ReactCSSTransitionGroup>
      </LazyLoad>
      <LazyLoad throttle={200} height={410} width={722} scroll>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <ProductLinks
            name={props.name}
            color={props.color}
            coords={props.coords}
            description={props.description}
          />
        </ReactCSSTransitionGroup>
      </LazyLoad>
    </div>
  );
};
