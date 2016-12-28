import React from 'react';
import Checkbox from './Checkbox';

const options = ['Static', 'Body Parser (JSON)', 'Body Parser (URL Encoded)', 'Morgan', 'Volleyball', 'Session'];

export default () => (
  <div>
    <h4>What express middleware would you like to use?</h4>
    {options.map(option => <Checkbox key={option} label={option}/>)}
    <h5 className="inlb">Which port should the server listen on?</h5>
    <input type="text" className="form-control inlb port-input" placeholder="8080"/>
  </div>
);