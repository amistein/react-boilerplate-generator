const promisified = require('../promisified');
const funcs = {};

funcs.generateContainers = (state, archiveFile) => {
  return promisified.readFile(__dirname + '/../../boilerplates/container.txt')
  .then(containerFile => createContainersArray(containerFile, state, archiveFile));
};

funcs.generateReducers = (state, archiveFile) =>  {
  return promisified.readFile(__dirname + '/../../boilerplates/reducer.txt')
  .then(reducerFile => createReducersArray(reducerFile, state, archiveFile));
};

function createContainersArray(containerFile, state, archiveFile) {
  const regex = new RegExp('COMPONENT_NAME', 'g');
  state.resources.forEach(resource => {
    if (resource.container) {
      const container = containerFile.replace(regex, resource.name);
      archiveFile.append(container, {name: `${state.project.name}/app/containers/${resource.name}.js`});
    }
  })
  return;
}

function createReducersArray(reducerFile, state, archiveFile) {
  state.resources.forEach(resource => {
    if (resource.reducer) {
      const replacedReducerFile = reducerFile.replace('REDUCER_NAME', resource.name);
      archiveFile.append(replacedReducerFile, {name: `${state.project.name}/app/reducers/${resource.name}.js`});
    }
  });

  state.redux.reducerNames.forEach(reducer => {
    const replacedReducerFile = reducerFile.replace('REDUCER_NAME', reducer);
    archiveFile.append(replacedReducerFile, {name: `${state.project.name}/app/reducers/${reducer}.js`});
  });
}

module.exports = funcs;