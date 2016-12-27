import {CHANGE_PROJECT_NAME} from '../actionTypes';

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