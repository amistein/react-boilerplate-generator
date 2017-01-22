const promisified = require('../promisified');
const funcs = {};

funcs.generateExpressFile = (state, archiveFile) => {
  if (!state.express.selected) return Promise.resolve(null);
  else return Promise.all([
    promisified.readFile(__dirname + '/../../boilerplates/server.txt'),
    promisified.readFile(__dirname + '/../../boilerplates/expressRouter.txt')
  ])
  .then(([expressFile, routerFile]) => generateExpressRouters(expressFile, state, routerFile, archiveFile))
  .then(file => generatePort(file, state.express.port));
};

function generateExpressMiddleware(state) {
  let result = '';
  if (state.expressMiddleware.static) result += generateStaticMiddleware(state.staticMiddleware);
  return Promise.resolve(result);
}

function generateStaticMiddleware(paths) {
  let result = '';
  paths.forEach(path => {
    if (path) result += `app.use(express.static('${path}'));\n`
  });
  return result;
}

function generatePort(file, port) {
  const regex = new RegExp('PORT', 'g');
  return file.replace(regex, port);
}

function generateExpressRouters(expressFile, state, routerFile, archiveFile) {
  const routerMiddlewares = [];
  state.resources.forEach(resource => {
    if (resource.express) {
      const name = resource.name;
      routerMiddlewares.push(`app.use('/${name}', require('/${name}');`);
      archiveFile.append(routerFile, {name: `${state.project.name}/server/${resource.name}.router.js`});
    }
  });
  return expressFile.replace('EXPRESS-ROUTERS', routerMiddlewares.join('\n'));
}

module.exports = funcs;