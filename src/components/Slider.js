import React, { Component } from 'react';


class Slider extends Component {
  constructor(props) {
    super(props);

    const { images } = this.props;

    this.state = {
      image: images[0],
    }
  }

  handleLeftArrowClicked = () => {
    const { images } = this.props;

    this.setState({ image: images[0] });
  }

  handleRightArrowClicked = () => {
    const { images } = this.props;

    this.setState({ image: images[1] });
  }

  renderLeftArrow() {
    return (
      <div className="button-container">
        <button onClick={() => this.handleLeftArrowClicked()}>
          Left arrow
        </button>
      </div>
    )
  }

  renderRightArrow() {
    return (
      <div className="button-container">
        <button onClick={() => this.handleRightArrowClicked()}>
          Right arrow
        </button>
      </div>
    )
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
        {this.renderLeftArrow()}
        {this.renderScreen()}
        {this.renderRightArrow()}
      </div>
    )
  }
}

export default Slider;
