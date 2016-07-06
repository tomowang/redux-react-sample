/**
 * Created by tomo on 2016-06-23.
 */
//import { Schema, arrayOf, normalize } from 'normalizr'
import 'isomorphic-fetch'

function callApi(endpoint) {
  return fetch(endpoint)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return Object.assign({}, json)
    })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let {endpoint} = callAPI;
  const { types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
