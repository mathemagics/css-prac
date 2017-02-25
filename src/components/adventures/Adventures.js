import React, { Component } from 'react';
import cape from '../../assets/images/adventures-cape.jpg';
import mojave from '../../assets/images/adventures-mojave.jpg';
import sequoia from '../../assets/images/adventures-sequoia.jpg';
import telluride from '../../assets/images/adventures-telluride.jpg';

import './styles.scss';

class Adventures extends Component {
  render() {
    return (
      <div className="adventures">
        <h2>Explore the places that inspired our scents.</h2>
        <img src={cape} alt="" className="adventures__img" />
        <img src={mojave} alt="" className="adventures__img" />
        <img src={sequoia} alt="" className="adventures__img" />
        <img src={telluride} alt="" className="adventures__img" />
      </div>
    );
  }
}

export default Adventures;
