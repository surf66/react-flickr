import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    console.log(props);
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
