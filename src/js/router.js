import React from 'react';
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom';

const HomePage = () => {
  return <div align="center"><h4 className="display-4">DoskiAd</h4></div>
}

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
