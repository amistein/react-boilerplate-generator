import React from 'react';
import {connect} from 'react-redux';
import {CHANGE_PROJECT_NAME} from '../actionTypes';
import {generateCodeDispatcher} from '../reducers/project-reducer';
import Main from './Main';

function mapStateToProps(storeState) {
  return {
    storeState,
    projectName: storeState.project.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeName: function(e) {
      dispatch({type: CHANGE_PROJECT_NAME, name: e.target.value});
    },

    generateCode: function(storeState) {
      dispatch(generateCodeDispatcher(storeState));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);