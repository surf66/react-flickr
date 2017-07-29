import React, { Component } from 'react';
import LocalStorageService from '../services/local-storage-service';
import Card from './card';

class Likes extends Component {

  constructor() {
    super();
    this.state = {
      likes: []
    }

    this.localStorageService = new LocalStorageService();
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
          {this.state.likes && this.state.likes.map((like, index) =>
            <Card key={index}
                  photo={like} />
          )}

          {!this.state.likes && 
            <p>You haven't liked any photos yet.</p>
          }
        </div>
      </div>
    );
  }
}

export default Likes;
