import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';
import ReduxForm from '../components/ReduxForm';

function mapStateToProps(storeState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
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
          <ReduxForm/>
        </Category>
      );
    }
});