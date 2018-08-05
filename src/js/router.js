import React from 'react';
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import ItemPageContainer from './containers/ItemPageContainer.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/item/:id" render={(props) =>
            <ItemPageContainer {...props} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
