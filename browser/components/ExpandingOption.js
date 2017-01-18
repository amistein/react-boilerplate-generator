import React from 'react';
import Checkbox from './Checkbox';
import InputsWithAdd from './InputsWithAdd';

export default props => {
  return (
    <div>
      <Checkbox label={props.label} checked={props.checked} onChange={props.onChange} />
      {props.checked ? props.children : null}
    </div>
  );
};