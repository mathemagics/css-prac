import React from 'react';
import { connect } from 'react-redux';

import Product from './products';
import Jumbotron from './jumbotron';
import NavMenu from './navMenu';

const Main = (props) => {
  return props.menuOpen ?
    <NavMenu /> :
    <div id="main">
      <Jumbotron />
      <Product />
    </div>;
};

const mapStateToProps = ({ menu }) => {
  const { menuOpen } = menu;
  return { menuOpen };
};

export default connect(mapStateToProps)(Main);
