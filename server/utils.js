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

function generateCode(filename, projectName, port, middleware) {
  const output = fs.createWriteStream(__dirname + `/../generated_files/${filename}.zip`);
  const archive = archiver('zip', {
    store: true
  });
  
  generateExpressFile(port, middleware)
  .then(file => {
    archive.append(file, {name: `${projectName}/server/app.js`});
    archive.finalize();
    archive.pipe(output);
  });

  return promisified.outputStreamClose(output);
}

function generateExpressFile(port, middleware) {
  return Promise.all([
    promisified.readFile(__dirname + '/../boilerplates/expressApp.txt'),
    generateMiddleware(middleware),
    promisified.readAndReplace(__dirname + '/../boilerplates/expressListen.txt', /PORT/g, port),
  ])
  .then(files => files.join('\n'));
}

function generateMiddleware(middleware) {
  let result = '';
  middleware.forEach(m => {
    result += `app.use(require(${m}));\n`;
  });
  return Promise.resolve(result);
}

module.exports = {
  generateRandomString,
  generateCode
};
