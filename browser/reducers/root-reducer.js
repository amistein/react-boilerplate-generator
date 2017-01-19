import {combineReducers} from 'redux';
import projectReducer from './project-reducer';
import expressReducer from './express-reducer';
import expressMiddlewareReducer from './express-middleware-reducer';
import staticMiddlewareReducer from './static-middleware-reducer';
import bodyParserJsonReducer from './bodyParserJson-reducer';
import reduxReducer from './redux-reducer';
import reactRouterReducer from './react-router-reducer';
import webpackReducer from './webpack-reducer';
import resourcesReducer from './resources-reducer';

export default combineReducers({
  project: projectReducer,
  express: expressReducer,
  expressMiddleware: expressMiddlewareReducer,
  staticMiddleware: staticMiddlewareReducer,  
  bodyParserJson: bodyParserJsonReducer,
  redux: reduxReducer,
  reactRouter: reactRouterReducer,
  webpack: webpackReducer,
  resources: resourcesReducer
});
