import React, { Component } from 'react';
import ImageService from '../services/image-service';
import LocalStorageService from '../services/local-storage-service';
import Card from './card';

class Photos extends Component {

  constructor() {
    super();

    this.state = {
      photos: []
    }

    this.imageService = new ImageService();
    this.localStorageService = new LocalStorageService();
    this.localStorageService.activate();

    this._saveToLocalStorage = this._saveToLocalStorage.bind(this);
    this._removeCurrentLikes = this._removeCurrentLikes.bind(this);
  }

  componentDidMount() {
    this.imageService.getImages()
      .then((response) => {
        let results = response.items;
        let likes = this.localStorageService.get('likes');

        console.log(results.length);
        // console.log(likes.length);

        const photos = results.concat(likes);
        console.log(photos);
        // this._removeCurrentLikes(response.items);

        this.setState({ photos: results });
      });
  }

  render() {
    return (
      <div className="App-header">
        <div className="container">
          {this.state.photos.map((photo, index) =>
            <Card key={index}
                  photo={photo}
                  onLike={this._saveToLocalStorage} />
          )}

          {!this.state.photos.length && 
            <div className="loading-spinner"></div>
          }
        </div>
      </div>
    );
  }

  _saveToLocalStorage(photo) {
    let currentLikes = this.localStorageService.get('likes');
    currentLikes = currentLikes || [];
    currentLikes.push(photo);
    this.localStorageService.upsert('likes', currentLikes);
  }

  _removeCurrentLikes(photos) {
    let currentLikes = this.localStorageService.get('likes');
    console.log(currentLikes);
    console.log(photos);

    for(var i=0; i<photos.length; i++) {
      var photoUrl = photos[i].media.m;
      var regex = new RegExp('([0-9a-z]+)(?=[^\/]*$)');
      var photoId = regex.exec(photoUrl)[0];
    }
  }
}

export default Photos;
