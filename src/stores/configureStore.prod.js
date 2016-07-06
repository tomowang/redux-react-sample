/**
 * Created by tomo on 2016-06-21.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
const reducers = require('../reducers');
import api from '../middleware/api'

module.exports = function(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk, api)
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
