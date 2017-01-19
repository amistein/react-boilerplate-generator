import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    selected: storeState.webpack.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCategory: function() {
      dispatch({type: actions.TOGGLE_WEBPACK_CATEGORY});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  return (
    <Category name="Webpack" containerProps={props} checked={props.selected} toggleCheckbox={props.toggleCategory}>
      <h3>Webpack Form Goes Here</h3>
    </Category>
  );
});