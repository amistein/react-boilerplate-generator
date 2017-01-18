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
  return Promise.all([
    promisified.readFile(__dirname + '/../boilerplates/expressApp.txt'),
    generateExpressMiddleware(state),
    promisified.readAndReplace(__dirname + '/../boilerplates/expressListen.txt', /PORT/g, state.express.port),
  ])
  .then(snippets => snippets.join('\n'));
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

module.exports = {
  generateRandomString,
  generateCode
};
