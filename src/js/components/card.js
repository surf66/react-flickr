import React, { Component } from 'react';

class Card extends Component {

  constructor() {
    super();
    this._handleLike = this._handleLike.bind(this);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <a href="#" onClick={this._handleLike}><img src="./images/heart.svg" /></a>
          <img className="main-image" src={this.props.imageSrc} />
        </div>
        <div className="card-details">
          <p>{this._truncateText(this.props.title)}</p>
        </div>
      </div>
    );
  }

  _handleLike() {
    const like = {
      title: this.props.title,
      imageSrc: this.props.imageSrc
    }

    var currentLikes = this.props.localStorageService.get('likes');
    currentLikes = currentLikes || [];
    currentLikes.push(like);
    this.props.localStorageService.upsert('likes', currentLikes);
  }

  _truncateText(text) {
    let truncatedString = text.substring(0, 60);
    return `${truncatedString}...`;
  }
}

export default Card;
