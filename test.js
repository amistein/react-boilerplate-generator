const fs = require('fs');

fs.readFile(__dirname + '/boilerplates/package.json', 'utf8', (err, data) => {
  console.log(data);
});