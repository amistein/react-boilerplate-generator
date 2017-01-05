import React from 'react'; 
import {connect} from 'react-redux';
import Category from '../components/Category';
import ExpressForm from '../components/ExpressForm';
import {TOGGLE_EXPRESS_CATEGORY} from '../actionTypes';
import {CHANGE_PORT} from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    selected: storeState.express.selected,
    portNumber: storeState.express.port
  };
} 

function mapDispatchToProps(dispatch) {
  return {
    toggleCategory: function() {
      dispatch({type: TOGGLE_EXPRESS_CATEGORY});
    },

    changePort: function(e) {
      dispatch({type: CHANGE_PORT, port: e.target.value});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  return (
    <Category name="Express" containerProps={props} checked={props.selected} toggleCheckbox={props.toggleCategory}>
      <ExpressForm />
    </Category>
  );
});

