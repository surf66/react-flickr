import React, { Component } from 'react';
import ImageService from '../services/image-service';
import LocalStorageService from '../services/local-storage-service';
import Card from './card';

class Photos extends Component {

  constructor() {
    super();

    this.state = {
      images: []
    }

    this.localStorageService = new LocalStorageService();
    this.localStorageService.activate();
    this.imageService = new ImageService();
  }

  componentDidMount() {
    this.imageService.getImages()
      .then((response) => {
        // get list of liked images from local storage
        
        // loop over images and remove ones that exist in likes
        
        // display updated images
        this.setState({ images: response.items });
      });
  }

  render() {
    return (
      <div className="App-header">
        <div className="container">
          {this.state.images.map((image, index) =>
            <Card key={index}
                  title={image.title}
                  imageSrc={image.media.m}
                  localStorageService={this.localStorageService} />
          )}
        </div>
      </div>
    );
  }
}

export default Photos;
