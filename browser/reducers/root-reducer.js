import {combineReducers} from 'redux';
import projectReducer from './project-reducer';
import expressReducer from './express-reducer';
import reduxReducer from './redux-reducer';

export default combineReducers({
  project: projectReducer,
  express: expressReducer,
  redux: reduxReducer
});
