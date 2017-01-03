const express = require('express');
const router = express.Router();
const utils = require('./utils');

router.get('/generateCode', function(req, res, next) {
  const randomFileName = utils.generateRandomString();
  utils.generateCode(randomFileName, 'My-test-project', '5554', ["'body-parser'", "'volleyball'"])
  .then(() => {
    res.download(__dirname + `/../generated_files/${randomFileName}.zip`, 'project-name.zip');
  });
});

module.exports = router;