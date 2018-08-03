import React from 'react';
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom';
import HomePage from './components/HomePage.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default Routes;
