import React from 'react';

import Product from './products';
import Jumbotron from './jumbotron';

export default () => {
  return (
    <div id="main">
      <Jumbotron />
      <Product />
    </div>
  );
};
