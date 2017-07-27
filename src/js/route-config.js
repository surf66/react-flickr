import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/app';
import Favourites from './components/favourites';

const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
      <Route exact path="/" component={App}/>
      <Route path="/favourites" component={Favourites}/>
    </div>
  </Router>
)

export default RouteConfig;