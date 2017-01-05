import * as actions from '../actionTypes';
/* ------------------------------------------- ACTION CREATORS ----------------------------------------- */

function toggleExpressMiddleware(middleware) {
  return ({type: actions.TOGGLE_EXPRESS_MIDDLEWARE, middleware})
}

/* ------------------------------------------- REDUCER ----------------------------------------- */


const initialState = {
  static: false
};

export default function expressReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_EXPRESS_MIDDLEWARE:
      return Object.assign({}, state, {[action.middleware]: !state[action.middleware]});  
    default: 
      return state;
  }
}