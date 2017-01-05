import React from 'react';

const Input = props => {
  return ( 
    <div>
      <form className="form-inline pd-top-sm">
        <div className="form-group pos-rel">
          {props.additionalInputs ? <i className="material-icons remove-circle" onClick={props.removeInput}>remove_circle_outline</i> : null}
          <label className="mgn-left-md">
            {props.label}
            <input
              type="text"
              className="form-control mgn-left-sm"
              value={props.value}
              onChange={props.onInputChange}
              />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ({inputs, label, changeInput, removeInput, addInput}) => {
  return (
    <div>
      {
        inputs.map((input, index) =>
        <Input
          key={index}
          num={index}
          label={label}
          value={input}
          onInputChange={e => changeInput(e.target.value, index)}
          removeInput={() => removeInput(index)}
          additionalInputs={index > 0}
        />)
      }
      <div className="pos-rel pd-top-sm">
        <i className="material-icons add-circle" onClick={addInput}>add_circle_outline</i>
        <h5 className="mgn-left-md">Add {label}</h5>
      </div>
    </div>
  );  
}