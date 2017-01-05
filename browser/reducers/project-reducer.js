import {CHANGE_PROJECT_NAME} from '../actionTypes';
import {CODE_GENERATED} from '../actionTypes';

/* --- ACTION CREATORS --- */


/* --- DISPATCHERS --- */

export function generateCodeDispatcher() {
  return dispatch => {
    dispatch({type: CODE_GENERATED});
  };
}


/* --- REDUCER--- */


const initialState = {
  name: ''
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROJECT_NAME:
      return Object.assign({}, state, {name: action.name});
    default: 
      return state;
  }
}