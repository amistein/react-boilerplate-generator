import React from 'react';

const Option = props => (
  <div className="checkbox">
      <label>
        <input type="checkbox"/> {props.middleware}
      </label>
    </div>
);

const options = ['Static', 'Body Parser (JSON)', 'Body Parser (URL Encoded)', 'Morgan', 'Volleyball', 'Session'];

export default () => (
  <div>
    <h4>What express middleware would you like to use?</h4>
    {options.map(option => <Option key={option} middleware={option}/>)}
    <h5 className="inlb">Which port should the server listen on?</h5>
    <input type="text" className="form-control inlb port-input" placeholder="8080"/>
  </div>
);