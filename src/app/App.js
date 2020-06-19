import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MovieHomePage from './pages/movieHomePage/containers/MovieHomePage';
import MovieDetailsPage from './pages/movieDetailsPage/containers/MovieDetailsPage';
import SearchPage from './pages/searchPage/containers/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/details/:movieId/:arrayIndex/:isSearchPage">
            <MovieDetailsPage />
          </Route>
          <Route exact path="/">
            <MovieHomePage />
          </Route>
          <Route path="*">
            <MovieHomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
