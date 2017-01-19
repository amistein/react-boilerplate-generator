import React from 'react';
import {connect} from 'react-redux';
import * as resourceActions from '../reducers/resources-reducer';
import AddResourceForm from '../components/AddResourceForm';
import * as actions from '../actionTypes';

const AddResourcesPanel = props => {
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">
          Add Resources
        </h3>
      </div>
      <div className="panel-body pos-rel">
        {props.resources.map((resource, index) => 
          <AddResourceForm 
            key={index}
            index={index}
            inputValue={resource.name}
            removeResource={() => props.removeResource(index)}
            changeResourceName={e => props.changeResourceName(index, e.target.value)}
            toggleResourceOption={props.toggleResourceOption}
            options={resource}
          />
        )}
        <div className="pos-rel">
          <i className="material-icons add-circle-md" onClick={props.addResource}>add_circle_outline</i>
          <h4 className="pd-left-lg">Add Resource</h4>
        </div>

      </div>
    </div>
  );
}

export default connect(
  ({resources}) => ({resources}),
  {
    addResource: resourceActions.addResource, 
    removeResource: resourceActions.removeResource, 
    changeResourceName: resourceActions.changeResourceName, 
    toggleResourceOption: resourceActions.toggleResourceOption
  }
) (AddResourcesPanel);