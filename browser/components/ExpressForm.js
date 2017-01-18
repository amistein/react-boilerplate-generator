import React from 'react';
import Checkbox from './Checkbox';
import StaticMiddlewareContainer from '../containers/StaticMiddlewareContainer';
import BodyParserJsonContainer from '../containers/BodyParserJsonContainer';

const options = ['Body Parser (URL Encoded)', 'Morgan', 'Volleyball', 'Session'];

export default props => (
  <div>
    <h4>What express middleware would you like to use?</h4>
    <StaticMiddlewareContainer/>
    <BodyParserJsonContainer/>
    {options.map(option => <Checkbox key={option} label={option} onChange={props.onCheckboxChange}/>)}
    <h5 className="inlb">Which port should the server listen on?</h5>
    <input 
      type="text" 
      className="form-control inlb port-input" 
      placeholder="8080" 
      value={props.portNumber}
      onChange={props.changePort}/>
  </div>
);