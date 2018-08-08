import React from 'react';
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import RestorePassPage from './components/RestorePassPage.js';
import ItemPage from './components/ItemPage.js';
import NewAdPage from './components/NewAdPage.js';
import AccConfirmPage from './components/AccConfirmPage.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePage home={true} />} />
        <Route path="/item/:id" render={(props) =>
            <ItemPage {...props} />} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/confirmacc" component={AccConfirmPage} />
        <Route path="/userlogin" component={LoginPage} />
        <Route path="/restorepass" component={RestorePassPage} />
        <Route path="/newad" component={NewAdPage} />
        <Route path="/favorites" render={() => <HomePage favorites={true} />} />
        <Route path="/categorypage/:categoryId" render={(props) =>
            <HomePage {...props} category={true} />} />
      </Switch>
    </Router>
  );
}

export default Routes;
