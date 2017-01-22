import React from 'react';
import Checkbox from './Checkbox';

export default props => {
  const options = props.options;
  const toggleResourceHelper = option => () => props.toggleResourceOption(props.index, option);

  return (
    <div>
      <div className="well well-lg pos-rel">
        <div className="row">
          <span className="glyphicon glyphicon glyphicon-remove remove-resource" aria-hidden="true" onClick={props.removeResource}></span>
          <form className="form-inline mgn-sm" onSubmit={e => {e.preventDefault()}}>
            <div className="form-group">
              <label>Resource Name
                <input type="text" className="form-control mgn-left-sm" value={props.inputValue} onChange={props.changeResourceName}/>
              </label>
            </div>
          </form>
        </div>
      <div className="row">
        <div className="col-md-3">
          <Checkbox label="Express Route" checked={options.express} onChange={toggleResourceHelper('express')}/>
        </div>
        <div className="col-md-3">
          <Checkbox label="React-Router Route" checked={options.reactRouter} onChange={toggleResourceHelper('reactRouter')}/>
        </div>
        <div className="col-md-3">
          <Checkbox label="Container Component" checked={options.container} onChange={toggleResourceHelper('container')}/>
        </div>
        <div className="col-md-3">
          <Checkbox label="Reducer" checked={options.reducer} onChange={toggleResourceHelper('reducer')}/>
        </div>
      </div>
    </div>
    </div>
  );
}