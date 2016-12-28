import {CHANGE_REDUCER} from '../actionTypes';
import {ADD_REDUCER} from '../actionTypes';
import {REMOVE_REDUCER} from '../actionTypes';

/* ------------------------------------------- ACTION CREATORS ----------------------------------------- */







/* ------------------------------------------- REDUCER ----------------------------------------- */

const initialState = {
  reducerNames: ['']
};

export default function reduxReducer(state = initialState, action) {
  let newReducerNames;
  switch (action.type) {
    case CHANGE_REDUCER:
      newReducerNames = state.reducerNames.slice();
      newReducerNames[action.index] = action.value;
      return Object.assign({}, state, {reducerNames: newReducerNames});
    case ADD_REDUCER: 
      return Object.assign({}, state, {reducerNames: state.reducerNames.concat([''])});
    case REMOVE_REDUCER: 
      newReducerNames = state.reducerNames.slice();
      newReducerNames.splice(action.index, 1)
      return Object.assign({}, state, {reducerNames: newReducerNames});
    default: 
      return state;
  }
} 