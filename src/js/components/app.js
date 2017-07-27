import React, { Component } from 'react';
import ImageService from '../services/image-service';
import Card from './card';

class App extends Component {

  constructor() {
    super();

    this.state = {
      images: []
    }

    this.imageService = new ImageService();
  }

  componentDidMount() {
    this.imageService.getImages()
      .then((response) => {
        this.setState({ images: response.items });
      });
  }

  render() {
    return (
      <div className="App-header">
        <h2>React Flickr</h2>
        <div className="container">
          {this.state.images.map((image, index) =>
            <Card key={index}
                  title={image.title}
                  imageSrc={image.media.m} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
