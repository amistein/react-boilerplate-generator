import React from 'react';
import ExpressContainer from './ExpressContainer';
import ReduxContainer from './ReduxContainer';
import ReactRouterContainer from './ReactRouterContainer';
import WebpackContainer from './WebpackContainer';

export default ({storeState, projectName, changeName, generateCode}) => {
  return (
    <div className="container">
      <div className="page-header text-center">
        <h1>React Boilerplate Generator</h1>
      </div>
      <div className="ctnr-cntrd-md">
        <form className="form-group">
          <label className="text-center full-width">Project Name:
            <input type="text" className="form-control" value={projectName} onChange={changeName}/>
          </label>
        </form>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ExpressContainer/>
          <ReduxContainer/>  
        </div>
        <div className="col-md-6">
         {
          // <ReactRouterContainer/>
          // <WebpackContainer/>
         }
        </div>
      </div>
      <div className="ctnr-cntrd-md">
        <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => generateCode(storeState)}>GENERATE CODE</button>
      </div>
    </div>
  );
}