import React, { Component } from 'react';
import LocalStorageService from '../services/local-storage-service';

class Card extends Component {

  constructor() {
    super();
    this.localStorageService = new LocalStorageService();
    this._handleFavourite = this._handleFavourite.bind(this);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <a href="#" onClick={this._handleFavourite}><img src="./images/heart.svg" /></a>
          <img className="main-image" src={this.props.imageSrc} />
        </div>
        <div className="card-details">
          <p>{this._truncateText(this.props.title)}</p>
        </div>
      </div>
    );
  }

  _handleFavourite() {
    const favourite = {
      title: this.props.title,
      imageSrc: this.props.imageSrc
    }

    this.localStorageService.saveToLocalStorage(favourite);
  }

  _truncateText(text) {
    let truncatedString = text.substring(0, 60);
    return `${truncatedString}...`;
  }
}

export default Card;
