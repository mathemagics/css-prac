import React, { Component } from 'react';

import './styles.scss';

export default (props) => {
  return (
    <div className="jumbotron">
      <img src={props.imageUrl} alt="jumbo" className="jumbotron__image" />
    </div>
  );
};
