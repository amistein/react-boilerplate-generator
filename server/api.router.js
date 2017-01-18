const fs = require('fs');
const express = require('express');
const router = express.Router();
const utils = require('./utils');

router.post('/generateCode', function(req, res, next) {
  const randomFileName = utils.generateRandomString();
  utils.generateCode(req.body, randomFileName)
  .then(() => {
    res.json({fileName: randomFileName + '.zip', projName: req.body.project.name});
  })
  .catch(next);
});

router.get('/downloadCode/:fileName/:projName', function(req, res, next) {
  const file = __dirname + `/../generated_files/${req.params.fileName}`;
  res.download(file, `${req.params.projName}.zip`, () => {
    fs.unlink(file);
  });
});

module.exports = router;