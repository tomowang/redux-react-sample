/**
 * Created by tomo on 2016-06-21.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
const reducers = require('../reducers');
import api from '../middleware/api'
import DevTools from '../components/DevTools/DevTools';

module.exports = function(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, api, createLogger()),
    DevTools.instrument()
  );
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
};
