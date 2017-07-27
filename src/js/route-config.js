import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Photos from './components/photos';
import Likes from './components/likes';

const RouteConfig = () => (
  <Router>
    <div>
      <header>
        <div className="container">
          <ul>
            <li><Link to="/">Photos</Link></li>
            <li><Link to="/likes">Likes</Link></li>
          </ul>
        </div>
      </header>
      <Route exact path="/" component={Photos}/>
      <Route path="/likes" component={Likes}/>
    </div>
  </Router>
)

export default RouteConfig;