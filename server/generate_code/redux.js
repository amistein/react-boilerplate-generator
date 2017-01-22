const promisified = require('../promisified');
const funcs = {};

funcs.generateContainers = (state, archiveFile) => {
  return promisified.readFile(__dirname + '/../../boilerplates/container.txt')
  .then(containerFile => createContainersArray(containerFile, state, archiveFile));
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

module.exports = funcs;