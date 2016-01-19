import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import CounterContainer from '../containers/counter';

let initialState = {
  count: 0
}

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let reduxStore = createStoreWithMiddleware(reducer, initialState);

ReactDOM.render(
  <Provider store={reduxStore}>
    <CounterContainer />
  </Provider>,
  $('#counter')[0]
)
