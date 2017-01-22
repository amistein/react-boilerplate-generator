import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ReduxForm from '../components/ReduxForm';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    selected: storeState.redux.selected,
    reducerNames: storeState.redux.reducerNames
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeReducer(value, index) {
      dispatch({type: actions.CHANGE_REDUCER, value, index});
    },

    addReducer() {
      dispatch({type: actions.ADD_REDUCER});
    },

    removeReducer(index) {
      dispatch({type: actions.REMOVE_REDUCER, index});
    },

    toggleCategory() {
      dispatch({type: actions.TOGGLE_REDUX_CATEGORY});
    },

    onCheckboxClick(middleware) {
      dispatch({type: actions.TOGGLE_REDUX_MIDDLEWARE, middleware});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  return (
    <Category name="Redux" containerProps={props} toggleCheckbox={props.toggleCategory}>
      <ReduxForm />
    </Category>
  ); 
});