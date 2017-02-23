import React from 'react';

import Product from './product';
import Jumbotron from './jumbotron';

export default () => {
  return (
    <div id="main">Mainpage
      <Jumbotron />
      <Product />
    </div>
  );
};
