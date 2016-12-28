import React from 'react';
import Checkbox from './Checkbox';

export const Column = props => {
  return (
      <div className="col-md-6 col-sm-6">
        {props.rows.map(row => <Checkbox key={row} label={row} />)}
      </div>
  );
}

export default ({middleware}) => {
  const column1rows = middleware.filter((m, i) => i % 2 === 0);
  const column2rows = middleware.filter((m, i) => i % 2 !== 0);
  return (
    <div className="clearfix">
      <Column rows={column1rows} />
      <Column rows={column2rows} />
    </div>
  );
}