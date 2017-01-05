import React from 'react';

export default ({name, containerProps, children}) => {
  return (
    <div className="pos-rel bg-white pd-left-sm">
      <h3 className="mgn-left-md pd-top-btm-md">{name}</h3>
      <input type="checkbox" className="chk-box" onChange={containerProps.toggleCategory} checked={containerProps.selected}/>
      {containerProps.selected ? React.cloneElement(children, containerProps) : null}
    </div>
  );
}