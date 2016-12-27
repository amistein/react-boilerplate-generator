import React from 'react'; 
import {connect} from 'react-redux';
import Category from '../components/Category';
import ExpressForm from '../components/ExpressForm';

function mapStateToProps(storeState) {
  return {};
} 

function mapDispatchToProps(storeState) {
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
        <Category name="Express" checkboxClickHandle={this.checkboxClickHandle} checked={this.state.checked}>
          <ExpressForm/>
        </Category>
      );
    }
});

