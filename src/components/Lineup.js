import React, { Component } from 'react';


class Lineup extends Component {
  render() {
    const { images } = this.props
    const lineup = images.map(img =>
      <img src={img} className="image-small" key={`${img}-small`} alt={`${img}-small`} />
    );

    return (
      <div className="lineup-container">
        {lineup}
      </div>
    )
  }
}

export default Lineup;
