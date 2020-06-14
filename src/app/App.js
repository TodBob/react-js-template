import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home/containers/Home';
import MovieDetails from './pages/movieDetails/containers/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
