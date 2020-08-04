import React, { Component } from 'react';


class Slider extends Component {
  constructor(props) {
    super(props);

    const { images } = this.props;

    this.state = {
      image: images[0],
    }
  }

  renderScreen() {
    const { image } = this.state;

    return (
      <div className="screen-container">
        <img src={image} className="single-pane" alt={image} />
      </div>
    )
  }

  render() {
    return (
      <div className="slider-container">
        {this.renderScreen()}
      </div>
    )
  }
}

export default Slider;
