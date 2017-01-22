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

  const reducers = [];

  state.resources.forEach(resource => {
    if (resource.reducer) {
      reducers.push(resource.name);
      const replacedReducerFile = reducerFile.replace('REDUCER_NAME', resource.name);
      archiveFile.append(replacedReducerFile, {name: `${state.project.name}/app/reducers/${resource.name}.js`});
    }
  });

  state.redux.reducerNames.forEach(reducer => {
    reducers.push(reducer);
    const replacedReducerFile = reducerFile.replace('REDUCER_NAME', reducer);
    archiveFile.append(replacedReducerFile, {name: `${state.project.name}/app/reducers/${reducer}.js`});
  });

  return generateRootReducer(reducers, archiveFile, state.project.name);
}

function generateRootReducer(reducers, archiveFile, projectName) {
  const reducerObjArray = reducers.map(reducer => `${reducer}: require('./${reducer}').default`);
  return promisified.readFile(__dirname + '/../../boilerplates/rootReducer.txt')
  .then(rootReducerFile => rootReducerFile.replace('ROOT_REDUCER_OBJ', reducerObjArray.join(',\n  ')))
  .then(rootReducerFile => {
    archiveFile.append(rootReducerFile, {name: `${projectName}/app/reducers/index.js`});
  })
  .catch(err => console.log('generateRootReducer error: ' + err));
}

module.exports = funcs;