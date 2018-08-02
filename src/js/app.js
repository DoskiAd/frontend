import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
import Routes from './router.js';

const appData = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component{
  render(){
    return (
      <Provider store={appData}>
        <Routes />
      </Provider>
    );
  }
}
