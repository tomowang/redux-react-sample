/**
 * Created by tomo on 2016-06-23.
 */

import {TOGGLE_SIDEBAR} from '../actions'

const initialState = {
  collapsed: false
};

export default function sidebar (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
          return {
            collapsed: !state.collapsed
          };
    default:
          return state;
  }
}
