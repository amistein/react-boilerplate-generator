import * as actions from '../actionTypes';

const initialState = {};

export default function expressReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_BPJ_OPTION:
      return Object.assign({}, state, {[action.option]: !state[action.option]});
    default: 
      return state;
  }
}