import React from 'react';
import TwoColumnOptions from './TwoColumnOptions';

const Reducer = props => {
  return (
    <form className="form-inline pd-top-sm">
      <div className="form-group pos-rel">
        {props.additionalReducers ? <i className="material-icons remove-circle" onClick={props.onReducerRemove}>remove_circle_outline</i> : null}
        <label className="mgn-left-md">
          Reducer #{props.num + 1}
          <input
            type="text"
            className="form-control mgn-left-sm"
            id={`Reducer ${props.num}`}
            placeholder="Name"
            value={props.value}
            onChange={props.onReducerChange}
            />
        </label>
      </div>
    </form>
  );
};

export default ({reducerNames, changeReducer, removeReducer, addReducer, onCheckboxClick}) => {
  const middleware = [{label: 'redux-logger', name: 'reduxLogger'}, {label: 'redux-thunk', name: 'reduxThunk'}];

  return (
    <div>
      <h4 className="pd-top-btm-sm">Define your reducers:</h4>
      {reducerNames.map((reducer, index) =>
        <Reducer
          key={index}
          num={index}
          value={reducer}
          onReducerChange={e => changeReducer(e.target.value, index)}
          onReducerRemove={() => removeReducer(index)}
          additionalReducers={index > 0}
          />)}
      <div className="pos-rel pd-top-sm">
        <i className="material-icons add-circle" onClick={addReducer}>add_circle_outline</i>
        <h5 className="mgn-left-md">Add Reducer</h5>
      </div>
      <h4>What Redux middleware would you like to use?</h4>
      <TwoColumnOptions options={middleware} onCheckboxClick={onCheckboxClick}/>
    </div>
  )
};
