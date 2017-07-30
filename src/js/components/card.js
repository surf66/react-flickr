import React, { Component } from 'react';

export default class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photo: props.photo
    }

    this._likePhoto = this._likePhoto.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ photo: newProps.photo });  
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <button onClick={this._likePhoto}>
            <span className={"heart " + (this.state.photo.liked ? 'liked' : '')}></span>
          </button>
           <img className="main-image" src={this.state.photo.media.m} alt={this.state.photo.title} /> 
        </div>
        <div className="card-details">
           <p>{this._truncateText(this.state.photo.title)}</p> 
        </div>
      </div>
    );
  }

  _likePhoto() {
    let photoCopy = this.state.photo;
    photoCopy.liked = !photoCopy.liked;
    this.setState({ photo: photoCopy }, () => {
      this.props.onLike(this.state.photo);
    });
  }

  _truncateText(text) {
    let truncatedString = text.substring(0, 60);
    return `${truncatedString}...`;
  }
}
