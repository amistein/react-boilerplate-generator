import {combineReducers} from 'redux';
import projectReducer from './project-reducer';
import expressReducer from './express-reducer';

export default combineReducers({
  project: projectReducer,
  express: expressReducer
});
