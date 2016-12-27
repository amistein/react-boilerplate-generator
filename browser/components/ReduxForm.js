import React from 'react';

const Reducer = props => {
  return (
    <form className="form-inline pd-top-sm">
      <div className="form-group">
        <label htmlFor={`Reducer ${props.num}`}>Reducer #{props.num + 1}</label>
        <input 
          type="text" 
          className="form-control mgn-left-sm" 
          id={`Reducer ${props.num}`} 
          placeholder="Name" 
          value={props.value}
          onChange={props.onReducerChange}
        />
      </div> 
    </form>
  );
};

export default class ReduxForm extends React.Component {
  constructor() {
    super();

    this.state = {
      reducerNames: ['']
    };

    this.addReducer = this.addReducer.bind(this);
  }

  addReducer() {
    this.setState({
      reducerNames: this.state.reducerNames.concat('')
    });
  }

  onReducerChange(value, index) {
    const newReducerNames = this.state.reducerNames.slice();
    newReducerNames[index] = value;
    this.setState({
      reducerNames: newReducerNames
    });
  }

  render() {
    return (
      <div>
        <h4 className="pd-top-btm-sm">Define your reducers:</h4>      
        {this.state.reducerNames.map((reducer, index) => 
          <Reducer key={index} num={index} value={reducer} onReducerChange={e => this.onReducerChange(e.target.value, index)}/>)}
        <div className="pos-rel pd-top-sm">
          <i className="material-icons add-circle" onClick={this.addReducer}>add_circle_outline</i>
          <h5 className="mgn-left-md">Add Reducer</h5>
        </div>
        <div className="checkbox pos-rel">
          <label>
            <input type="checkbox" className="pos-down-sm"/><h4>Use React-Router</h4>
          </label>
        </div>
      <h4>What Redux middleware would you like to use?</h4>
      </div>      
    );
  }
}
