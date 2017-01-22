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
    reduxCode.generateStoreFile(),
    reduxCode.generateContainers(appState, archive),
    reduxCode.generateReducers(appState, archive),
    generateIndexFile(archive, appState.project.name)
  ])
  .then(([expressFile, mainReactFile, storeFile]) => {
    archive.append(expressFile, {name: `${appState.project.name}/server/app.js`});
    archive.append(mainReactFile, {name: `${appState.project.name}/app/main.js`});
    archive.append(storeFile, {name: `${appState.project.name}/app/store.js`});
    archive.finalize();
    archive.pipe(output);
  })
  .catch(err => console.log('Generate Code Error: ' + err));

  return promisified.outputStreamClose(output);
}

function generateIndexFile(archiveFile, projName) {
  return promisified.readFile(__dirname + '/../../boilerplates/index.html.txt')
  .then(file => file.replace('PROJECT_NAME', projName))
  .then(file => archiveFile.append(file, {name: `${projName}/public/index.html`}))
  .catch(err => console.log('generateIndexFile Error: ' + err));
}


module.exports = {
  generateCode
};