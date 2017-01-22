import * as actions from '../actionTypes';

const initialState = {
  reduxLogger: false,
  reduxThunk: false
};

export default function (state = [], action) {
  switch (action.type) {
    case actions.TOGGLE_REDUX_MIDDLEWARE:
      return Object.assign({}, state, {[action.middleware]: !state[action.middleware]});
    default:
      return state;
  }
}