import React from 'react';
import ExpressContainer from './ExpressContainer';
import ReduxContainer from './ReduxContainer';

export default class Main extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>React Boilerplate Generator</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ExpressContainer/>
            <ReduxContainer/>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    );
  }
}