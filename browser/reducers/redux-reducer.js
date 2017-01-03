import {CHANGE_REDUCER} from '../actionTypes';
import {ADD_REDUCER} from '../actionTypes';
import {REMOVE_REDUCER} from '../actionTypes';

/* ------------------------------------------- ACTION CREATORS ----------------------------------------- */







/* ------------------------------------------- REDUCER ----------------------------------------- */

// Can we switch reducer state to simple array? 

const initialState = {
  reducerNames: ['']
};

export default function reduxReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_REDUCER:
      return Object.assign({}, state, {reducerNames: state.reducerNames.map((r, i) => i === action.index ? action.value : r)});
    case ADD_REDUCER: 
      return Object.assign({}, state, {reducerNames: [...state.reducerNames, '']});
    case REMOVE_REDUCER: 
      return Object.assign({}, state, {reducerNames: state.reducerNames.filter((r, i) => i !== action.index)});
    default: 
      return state;
  }
} 