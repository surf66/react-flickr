import React, { Component } from 'react';
import LocalStorageService from '../services/local-storage-service';
import Card from './card';

export default class Likes extends Component {

  constructor() {
    super();
    this.state = {
      likes: []
    }

    this.localStorageService = new LocalStorageService();

    this._unlikePhoto = this._unlikePhoto.bind(this);
  }

  componentDidMount() {
    let currentLikes = this.localStorageService.get('likes');
    this.setState({ likes: currentLikes });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Photos you've liked</h1>
          {!this.state.likes || !this.state.likes.length ? (
            <p>You haven't liked any photos yet.</p>
          ) : (
            this.state.likes && this.state.likes.map((like, index) =>
              <Card key={index} photo={like} onLike={this._unlikePhoto}  />
            )
          )}
        </div>
      </div>
    );
  }

  _unlikePhoto(photo) {
    let currentLikes = this.localStorageService.get('likes');
    currentLikes = currentLikes || [];

    for(var i in currentLikes) {
      if(currentLikes[i].media.m === photo.media.m) {
        currentLikes.splice(i, 1);
        break;
      }
    }
    
    this.localStorageService.upsert('likes', currentLikes);
    this.setState({ likes: currentLikes });
  }
}
