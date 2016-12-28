import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ReduxForm from '../components/ReduxForm';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor() {
      super();

      this.state = {checked: false};
    
      this.checkboxClickHandle = this.checkboxClickHandle.bind(this);
  }

    checkboxClickHandle() {
      this.setState({
        checked: !this.state.checked
      });
    }

    render() {
      return (
        <Category name="Redux" checkboxClickHandle={this.checkboxClickHandle} checked={this.state.checked}>
          <ReduxForm
            changeReducer={this.props.changeReducer}
            addReducer={this.props.addReducer}
            removeReducer={this.props.removeReducer}
            reducerNames={this.props.reducerNames}
          />
        </Category>
      );
    }
});