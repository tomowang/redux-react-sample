/**
 * Created by tomo on 2016-06-23.
 */
import { CALL_API } from '../middleware/api'
export const TOGGLE_SIDEBAR = 'sidebar/TOGGLE';

export function toggleSideBar() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export function fetchCategories() {
  return {
    [CALL_API]: {
      types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
      endpoint: '/api/categories'
    }
  }
}
