import React, { Component } from 'react';

import logo from './logo.svg';
import clouds_1 from './clouds/clouds_1.jpg';
import clouds_2 from './clouds/clouds_2.jpg';
import clouds_3 from './clouds/clouds_3.jpg';
import clouds_4 from './clouds/clouds_4.jpg';
import clouds_5 from './clouds/clouds_5.jpg';

import './Slider.css';


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: logo
    }
  }

  handleLeftArrowClicked = () => {
    this.setState({ image: logo });
  }

  handleRightArrowClicked = () => {
    this.setState({ image: clouds_1 });
  }

  renderLeftArrow() {
    return (
      <button onClick={() => this.handleLeftArrowClicked()}>
        Left arrow
      </button>
    )
  }

  renderRightArrow() {
    return (
      <button onClick={() => this.handleRightArrowClicked()}>
        Right arrow
      </button>
    )
  }

  renderImage() {
    const { image } = this.state;

    return (
      <div className="image-container">
        <img src={image} className="App-logo" alt="logo" />
      </div>
    )
  }

  render() {
    return (
      <div className="slider-container">
        {this.renderLeftArrow()}
        {this.renderImage()}
        {this.renderRightArrow()}
      </div>
    )
  }
}

export default Slider;
