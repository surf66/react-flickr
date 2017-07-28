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
  }

  componentDidMount() {
    this.imageService.getImages()
      .then((response) => {
        this.setState({ photos: response.items });
      });
  }

  render() {
    return (
      <div className="App-header">
        <div className="container">
          {this.state.photos.map((photo, index) =>
            <Card key={index}
                  title={photo.title}
                  src={photo.media.m}
                  onLike={this._saveToLocalStorage} />
          )}
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
}

export default Photos;
