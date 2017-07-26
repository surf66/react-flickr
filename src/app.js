import React, { Component } from 'react';
import Card from './card';

class App extends Component {

  constructor() {
    super();

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.setState({ images: window.images });
  }

  render() {
    return (
      <div className="App-header">
        <h2>React Flickr</h2>
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
