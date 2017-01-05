import {combineReducers} from 'redux';
import projectReducer from './project-reducer';
import expressReducer from './express-reducer';
import expressMiddlewareReducer from './express-middleware-reducer';
import staticMiddlewareReducer from './static-middleware-reducer';
import reduxReducer from './redux-reducer';

export default combineReducers({
  project: projectReducer,
  express: expressReducer,
  expressMiddleware: expressMiddlewareReducer,
  staticMiddleware: staticMiddlewareReducer,  
  redux: reduxReducer
});
