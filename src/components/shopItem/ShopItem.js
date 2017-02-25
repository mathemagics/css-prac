import React from 'react';
import './styles.scss';

export default (props) => {
  const { img, name, price, description } = props;
  return (
    <div className="shop__item">
      <img src={props.img} alt="bottle here" className="shop__item__img" />
      <div className="shop__item__info">
        <span className="shop__item__name">{name}</span>
        <span className="shop__item__price">${price}</span>
        <div className="shop__item__description">{description}</div>
      </div>
    </div>
  );
};
