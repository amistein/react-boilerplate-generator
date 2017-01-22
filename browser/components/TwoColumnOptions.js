import React from 'react';
import Checkbox from './Checkbox';

export const Column = props => {
  return (
      <div className="col-md-6 col-sm-6">
        {props.rows.map(row => <Checkbox key={row} label={row.label} onChange={() => props.onCheckboxClick(row.name)}/>)}
      </div>
  );
}

export default ({options, onCheckboxClick}) => {
  const column1rows = options.filter((m, i) => i % 2 === 0);
  const column2rows = options.filter((m, i) => i % 2 !== 0);
  return (
    <div className="clearfix">
      <Column rows={column1rows} onCheckboxClick={onCheckboxClick}/>
      <Column rows={column2rows} onCheckboxClick={onCheckboxClick}/>
    </div>
  );
}