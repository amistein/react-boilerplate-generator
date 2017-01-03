const fs = require('fs');
const archiver = require('archiver');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function readAndReplace(filePath, regex, newStr) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data.replace(regex, newStr));
    });
  }); 
}

function outputStreamClose(outputStream) {
  return new Promise((resolve, reject) => {
    outputStream.on('close', function() {
      resolve();
    });
  })
}


module.exports = {
  readFile, 
  readAndReplace,
  outputStreamClose
};
