import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ExpandingOption from '../components/ExpandingOption';
import TwoColumnOptions from '../components/TwoColumnOptions';
import * as actions from '../actionTypes';

function mapStateToProps(storeState) {
  return {
    checked: storeState.expressMiddleware.bodyParserJson,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleBodyParserJson() {
      dispatch({type: actions.TOGGLE_EXPRESS_MIDDLEWARE, middleware: 'bodyParserJson'});
    },
    toggleOption(option) {
      dispatch({type: actions.TOGGLE_BPJ_OPTION, option})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(props => {
  const options = ['extended', 'strict'];
  return (
    <ExpandingOption label="Body Parser (JSON)" checked={props.checked} onChange={props.toggleBodyParserJson}>
      <TwoColumnOptions options={options} onCheckboxClick={props.toggleOption} />
    </ExpandingOption>
  );
});