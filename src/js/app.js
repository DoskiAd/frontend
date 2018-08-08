import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import storeAuth from './middleware/storeAuth.js';
import reducer from './reducers/index.js';
import Routes from './router.js';
import {fillCategories, fillItems, getFavIds} from './middleware/thunks.js';

const initState = () => {
  let storedAuth = localStorage.getItem("auth");
  if(!!storedAuth && storedAuth != "undefined"){
    storedAuth = JSON.parse(storedAuth);
  } else {
    storedAuth = {
      isLoggedIn: false,
      email: null,
      name: null,
      token: null,
      isAuthenticating: false
    };
  }

  return {auth: storedAuth};
}

const appData = createStore(reducer, initState(), applyMiddleware(thunk, storeAuth));

appData.dispatch(fillCategories());
appData.dispatch(fillItems());
if(appData.getState().auth.isLoggedIn){
  appData.dispatch(getFavIds());
}

export default class App extends React.Component{
  render(){
    return (
      <Provider store={appData}>
        <Routes />
      </Provider>
    );
  }
}
