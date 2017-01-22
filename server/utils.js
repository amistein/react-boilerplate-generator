const fs = require('fs');
const archiver = require('archiver');
const promisified = require('./promisified');

function generateRandomString() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const chars = `${alphabet}${alphabet.toLowerCase()}0123456789`;
  let result = '';

  for (let i = 0; i < 10; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}

function generateCode(appState, filename) {
  const output = fs.createWriteStream(__dirname + `/../generated_files/${filename}.zip`);
  const archive = archiver('zip', {
    store: true
  });
  
  generateExpressFile(appState)
  .then(file => {
    archive.append(file, {name: `${appState.project.name}/server/app.js`});
    archive.finalize();
    archive.pipe(output);
  });

  return promisified.outputStreamClose(output);
}

function generateExpressFile(state) {
  if (!state.express.selected) return Promise.resolve(null);
  else return promisified.readFile(__dirname + '/../boilerplates/server.txt')
  .then(file => generatePort(file, state.express.port))
  .then(file => generateExpressRouters(file, state.resources));
}

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

function generateExpressRouters(file, resources) {
  const routers = [];
  resources.forEach(resource => {
    if (resource.express) {
      const name = resource.name;
      routers.push(`app.use('/${name}', require('/${name}');`);
    }
  });
  return file.replace('EXPRESS-ROUTERS', routers.join('\n'));
}

module.exports = {
  generateRandomString,
  generateCode
};
