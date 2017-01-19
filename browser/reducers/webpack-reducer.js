import * as actions from '../actionTypes';

const initialState = {
  selected: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_WEBPACK_CATEGORY:
      return Object.assign({}, state, {selected: !state.selected});
    default: 
      return state;
  }
} 