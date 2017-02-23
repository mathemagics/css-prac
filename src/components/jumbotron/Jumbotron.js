import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './styles.scss';
import image from '../../assets/images/jumbotest.jpg';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <img src={image} alt="jumbo" className="jumbotron__image" />
      </div>
    );
  }
}

export default Jumbotron;
