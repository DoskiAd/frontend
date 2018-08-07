import React from 'react';
import {
  HashRouter as Router, Route, Switch
} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import RestorePassPage from './components/RestorePassPage.js';
import ItemPageContainer from './containers/ItemPageContainer.js';
import NewAdPage from './components/NewAdPage.js';
import AccConfirmPage from './components/AccConfirmPage.js';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/item/:id" render={(props) =>
            <ItemPageContainer {...props} />} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/confirmacc" component={AccConfirmPage} />
        <Route path="/userlogin" component={LoginPage} />
        <Route path="/restorepass" component={RestorePassPage} />
        <Route path="/newad" component={NewAdPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
