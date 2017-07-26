import React, { Component } from 'react';

class Card extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <p>{this.props.title}</p>
        <img src={this.props.imageSrc} />
      </div>
    );
  }
}

export default Card;
