import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
