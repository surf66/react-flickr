import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photo: {
        title: props.title,
        src: props.src
      }
    }

    this._likePhoto = this._likePhoto.bind(this);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <a href="#" onClick={this._likePhoto}><img src="./images/heart.svg" /></a>
          <img className="main-image" src={this.state.photo.src} />
        </div>
        <div className="card-details">
          <p>{this._truncateText(this.state.photo.title)}</p>
        </div>
      </div>
    );
  }

  _likePhoto() {
    this.props.onLike(this.state.photo);
  }

  _truncateText(text) {
    let truncatedString = text.substring(0, 60);
    return `${truncatedString}...`;
  }
}

export default Card;
