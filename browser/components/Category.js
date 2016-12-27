import React from 'react';

export default props => {
  return (
    <div className="pos-rel">
      <h3 className="mgn-left-md">{props.name}</h3>
      <input type="checkbox" className="chk-box" onChange={props.checkboxClickHandle} checked={props.checked}/>
      {props.checked ? props.children : null}
    </div>
  );
}