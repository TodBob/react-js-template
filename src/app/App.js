import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home/containers/Home';
import MovieDetails from './pages/movieDetails/containers/MovieDetails';
import VideoPlayer from './components/videoplayer/components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/video">
            <VideoPlayer />
          </Route>
          <Route path="/details/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
