import React from 'react';
import {connect} from 'react-redux';
import StaticMiddleware from '../components/StaticMiddleware';
import Category from '../components/Category';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    selected: storeState.expressMiddleware.static,
    paths: storeState.staticMiddleware
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleStaticMiddleware() {
      dispatch({type: actions.TOGGLE_EXPRESS_MIDDLEWARE, middleware: 'static'});
    },

    changePath(value, index) {
      dispatch({type: actions.CHANGE_PATH, value, index});
    },

    addPath() {
      dispatch({type: actions.ADD_PATH});
    },

    removePath(index) {
      dispatch({type: actions.REMOVE_PATH, index});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticMiddleware);