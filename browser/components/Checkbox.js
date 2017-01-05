import React from 'react';

export default ({label, checked, onChange}) => (
  <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange}/> {label}
      </label>
    </div>
);