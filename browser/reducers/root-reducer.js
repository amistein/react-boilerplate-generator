import {combineReducers} from 'redux';
import expressReducer from './express-reducer';

export default combineReducers({
  express: expressReducer
});
