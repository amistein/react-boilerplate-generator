import axios from 'axios';
import {replaceWithDefaults} from '../utils';
import {CHANGE_PROJECT_NAME} from '../actionTypes';
import {CODE_GENERATED} from '../actionTypes';

/* --- ACTION CREATORS --- */


/* --- DISPATCHERS --- */

export function generateCodeDispatcher(state) {
  const stateWithDefaults = replaceWithDefaults(state);
  return dispatch => {
    axios.post('/api/generateCode', stateWithDefaults)
    .then(res => res.data)
    .then(resObj => {
      window.location.assign(`/api/downloadCode/${resObj.fileName}/${resObj.projName}`);
      dispatch({type: CODE_GENERATED});
    });
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