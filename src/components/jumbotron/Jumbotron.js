import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

import './styles.scss';
import image1 from '../../assets/images/jumbotron1.jpg';
import image2 from '../../assets/images/jumbotron2.jpg';
import image3 from '../../assets/images/jumbotron3.jpg';
import image4 from '../../assets/images/jumbotron4.jpg';
import image5 from '../../assets/images/jumbotron5.jpg';

const imageArray = [image1, image2, image3, image4, image5];
let count = 0;

class Jumbotron extends Component {
  constructor() {
    super();

    this.state = { currentImage: imageArray[0] };
  }

  componentDidMount() {
    window.setInterval(() => {
      count = count < imageArray.length - 1 ? count += 1 : 0;
      this.setState({ currentImage: imageArray[count] });
    }, 6000);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="fadein"
        transitionAppear
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
      >
        <div className="slide__container">
          <ReactCSSTransitionGroup
            transitionEnterTimeout={3000}
            transitionLeaveTimeout={3000}
            transitionName="slide"
          >
            <div
              className="jumbotron"
              key={this.state.currentImage}
            >
              <h1 className="jumbotron__header">Scents for an Inspired Life</h1>
              <Link to="/shop" className="jumbotron__link">SHOP NOW</Link>
              <img src={this.state.currentImage} className="jumbotron__image"/>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Jumbotron;
