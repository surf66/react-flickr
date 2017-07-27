import React, { Component } from 'react';
import ImageService from './services/image-service';
import Card from './components/card';

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
        <div className="row">
          <div className="col-6">
            1
          </div>
          <div className="col-6">
            2
          </div>
        </div>
        {this.state.images.map((image, index) =>
          <Card key={index}
                title={image.title}
                imageSrc={image.media.m} />
        )}
      </div>
    );
  }
}

export default App;
