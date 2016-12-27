import React from 'react';

export default props => {
  return (
    <div className="pos-rel bg-white pd-left-sm">
      <h3 className="mgn-left-md pd-top-btm-md">{props.name}</h3>
      <input type="checkbox" className="chk-box" onChange={props.checkboxClickHandle} checked={props.checked}/>
      {props.checked ? props.children : null}
    </div>
  );
}