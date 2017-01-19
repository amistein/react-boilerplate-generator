import * as actions from '../actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case actions.ADD_RESOURCE:
      return [...state, {
        name: '', 
        express: false, 
        reactRouter: false, 
        container: false, 
        reducer: false
      }];
    case actions.REMOVE_RESOURCE:
      return state.filter((resource, i) => i !== action.index);
    case actions.CHANGE_RESOURCE_NAME:
      return state.map((resource, index) => index === action.index ? Object.assign({}, resource, {name: action.value}) : resource);
    case actions.TOGGLE_RESOURCE_OPTION:
      return state.map((resource, index) => index === action.index ? Object.assign({}, resource, {[action.option]: !resource[action.option]}) : resource);
    default: 
      return state;
  }
}


// --- ACTION CREATORS ---

export function addResource() {
  return {type: actions.ADD_RESOURCE};
}

export function removeResource(index) {
  return {type: actions.REMOVE_RESOURCE, index};
}

export function changeResourceName(index, value) {
  return {type: actions.CHANGE_RESOURCE_NAME, index, value};
}

export function toggleResourceOption(index, option) {
  return {type: actions.TOGGLE_RESOURCE_OPTION, index, option}
}