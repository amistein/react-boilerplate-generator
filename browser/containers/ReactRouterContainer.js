import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    selected: storeState.reactRouter.selected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCategory: function() {
      dispatch({type: actions.TOGGLE_REACT_ROUTER_CATEGORY});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  return (
    <Category name="React-Router" containerProps={props} checked={props.selected} toggleCheckbox={props.toggleCategory}>
      <h3>React Router Form Goes Here</h3>
    </Category>
  );
});