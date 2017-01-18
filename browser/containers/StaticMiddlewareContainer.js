import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ExpandingOption from '../components/ExpandingOption';
import InputsWithAdd from '../components/InputsWithAdd';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    checked: storeState.expressMiddleware.static,
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

export default connect(mapStateToProps, mapDispatchToProps)(props =>
  <ExpandingOption label="Static" checked={props.checked} onChange={props.toggleStaticMiddleware}>
    <InputsWithAdd
      inputs={props.paths}
      label="File Path"
      changeInput={props.changePath}
      removeInput={props.removePath}
      addInput={props.addPath}
    /> 
  </ExpandingOption>
);