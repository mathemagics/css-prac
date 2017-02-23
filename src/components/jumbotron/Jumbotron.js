import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './styles.scss';
import image1 from '../../assets/images/jumbotron1.jpg';
import image2 from '../../assets/images/jumbotron2.jpg';
import image3 from '../../assets/images/jumbotron3.jpg';
import image4 from '../../assets/images/jumbotron4.jpg';
import image5 from '../../assets/images/jumbotron5.jpg';

const imageArray = [image1, image2, image3, image4, image5];
let count = 0;


class Jumbotron extends Component {
  constructor(props) {
    super(props);

    this.state = { currentImage: imageArray[0] };
  }

  componentDidMount() {
    this.timer = setInterval(this.renderImage.bind(this), 7000);
  }
  renderImage() {
    count = count < imageArray.length - 1 ? count += 1 : 0;
    this.setState({ currentImage: imageArray[count] });
  }

  render() {
    return (
      <div className="jumbotron">
        <img src={this.state.currentImage} className="jumbotron__image" />
      </div>
    );
  }
}

export default Jumbotron;
