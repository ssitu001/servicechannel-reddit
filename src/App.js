import './App.css';
import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'
import PostDetails from './components/PostDetails/PostDetails'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/:subReddit/:id'>
          <PostDetails />
        </Route>
        <Route path='/:subReddit'>
          <Posts />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
