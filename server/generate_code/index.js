const fs = require('fs');
const archiver = require('archiver');
const promisified = require('../promisified');
const expressCode = require('./express');
const reactCode = require('./react');
const reduxCode = require('./redux');

function generateCode(appState, filename) {
  const output = fs.createWriteStream(__dirname + `/../../generated_files/${filename}.zip`);
  const archive = archiver('zip', {
    store: true
  });

  Promise.all([
    expressCode.generateExpressFile(appState, archive),
    reactCode.generateMainReactFile(appState),
    reduxCode.generateContainers(appState, archive),
    reduxCode.generateReducers(appState, archive)
  ])
  .then(([expressFile, mainReactFile]) => {
    archive.append(expressFile, {name: `${appState.project.name}/server/app.js`});
    archive.append(mainReactFile, {name: `${appState.project.name}/app/main.js`});
    archive.finalize();
    archive.pipe(output);
  })
  .catch(err => console.log('Generate Code Error: ' + err));

  return promisified.outputStreamClose(output);
}

module.exports = {
  generateCode
};