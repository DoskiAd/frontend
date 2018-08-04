import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index.js';
import Routes from './router.js';
import {fillCategories, fillItems} from './middleware/thunks.js';

const appData = createStore(reducer, applyMiddleware(thunk));

appData.dispatch(fillCategories());
appData.dispatch(fillItems());

export default class App extends React.Component{
  render(){
    return (
      <Provider store={appData}>
        <Routes />
      </Provider>
    );
  }
}
