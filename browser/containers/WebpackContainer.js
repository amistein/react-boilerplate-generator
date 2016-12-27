import React from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';

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
        <Category name="Webpack" checkboxClickHandle={this.checkboxClickHandle} checked={this.state.checked}>
          <h3>Webpack Form Goes Here</h3>
        </Category>
      );
    }
});