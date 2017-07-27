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
        <img src={this.props.imageSrc} />
        <div className="card-details">
          <p>{this.props.title}</p>
          <a href="#" onClick={this._handleFavourite}>Favourite</a>
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
}

export default Card;
