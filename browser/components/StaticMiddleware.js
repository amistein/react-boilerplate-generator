import React from 'react';
import Checkbox from './Checkbox';
import InputsWithAdd from './InputsWithAdd';

export default props => {
  return (
    <div>
      <Checkbox label="Static" checked={props.selected} onChange={props.toggleStaticMiddleware} />
      {props.selected ? 
        <InputsWithAdd
          inputs={props.paths}
          label="File Path"
          changeInput={props.changePath}
          removeInput={props.removePath}
          addInput={props.addPath}
        /> : 
        null}
    </div>
  );
};