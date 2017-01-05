import * as actions from '../actionTypes';

const initialState = [''];

export default function expressReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_PATH:
      return state.map((path, index) => index === action.index ? action.value : path);
    case actions.ADD_PATH:
      return [...state, ''];
    case actions.REMOVE_PATH:
      return state.filter((path, index) => action.index !== index);
    default: 
      return state;
  }
}