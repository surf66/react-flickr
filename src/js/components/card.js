import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this._likePhoto = this._likePhoto.bind(this);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <button onClick={this._likePhoto}>
            <span className={"heart " + (this.props.photo.liked ? 'liked' : '')}></span>
          </button>
           <img className="main-image" src={this.props.photo.media.m} alt={this.props.photo.title} /> 
        </div>
        <div className="card-details">
           <p>{this._truncateText(this.props.photo.title)}</p> 
        </div>
      </div>
    );
  }

  _likePhoto() {
    this.props.onLike(this.props.photo);
  }

  _truncateText(text) {
    let truncatedString = text.substring(0, 60);
    return `${truncatedString}...`;
  }
}

export default Card;
