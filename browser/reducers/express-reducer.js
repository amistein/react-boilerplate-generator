import {TOGGLE_EXPRESS_CATEGORY} from '../actionTypes';
import {CHANGE_PORT} from '../actionTypes';

const initialState = {
  selected: false,
  port: ''
};

export default function expressReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EXPRESS_CATEGORY: 
      return Object.assign({}, state, {selected: !state.selected});
    case CHANGE_PORT: 
      return Object.assign({}, state, {port: action.port});
    default: 
      return state;
  }
}