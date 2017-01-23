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

const Body = props => 
  <p className="rr-p">You can define routes by adding a resource below.</p>;

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  return (
    <Category name="React-Router" containerProps={props} checked={props.selected} toggleCheckbox={props.toggleCategory}>
      <Body/>
    </Category>
  );
});