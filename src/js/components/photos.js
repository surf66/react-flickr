import React, { Component } from 'react';
import PhotosService from '../services/photos-service';
import LocalStorageService from '../services/local-storage-service';
import Card from './card';

export default class Photos extends Component {

  constructor() {
    super();

    this.state = {
      photos: [],
      failedRequest: false
    }

    this.photosService = new PhotosService();
    this.localStorageService = new LocalStorageService();
    this.localStorageService.activate();

    this._saveToLocalStorage = this._saveToLocalStorage.bind(this);
  }

  componentDidMount() {
    this.photosService.getPhotos()
      .then((response) => {
        let results = response.items;
        let likes = this.localStorageService.get('likes');
        let photos;
        
        for(var i=0; i<results.length; i++) {
          results[i].liked = false;
        }

        if(likes) {
          photos = this._combineArrays(results, likes);
        } else {
          photos = results;
        }
      
        this.setState({ photos: photos });
      })
      .catch(() => {
        this.setState({ failedRequest: true });
      });
  }

  render() {
    return (
      <div className="container">
        {!this.state.photos.length && !this.state.failedRequest ? (
          <div className="loading-spinner"></div>
        ) : (
          this.state.photos.map((photo, index) =>
            <Card key={index} photo={photo} onLike={this._saveToLocalStorage} />
          )
        )}

        {this.state.failedRequest &&
          <p>Sorry, somthing went wrong. We were unable to load photos.</p>
        }
      </div>
    );
  }

  _saveToLocalStorage(photo) {
    let currentLikes = this.localStorageService.get('likes');
    currentLikes = currentLikes || [];

    let alreadyLiked;
    for(var i in currentLikes) {
      if(currentLikes[i].media.m === photo.media.m) {
        currentLikes.splice(i, 1);
        alreadyLiked = true;
        break;
      }
    }

    if(!alreadyLiked) {
      photo.liked = true;
      currentLikes.push(photo);
    }
    
    this.localStorageService.upsert('likes', currentLikes);
  }

  _combineArrays(arr1, arr2) {
    var photos = [];
    for(var i in arr1) {
      var shared = false;
      for (var j in arr2)
          if (arr2[j].media.m === arr1[i].media.m) {
              shared = true;
              break;
          }
      if(!shared) photos.push(arr1[i])
    }
    photos = photos.concat(arr2);
    return photos;
  }
}
