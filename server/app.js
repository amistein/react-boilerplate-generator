const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

app.use(bodyParser.json());

app.use(volleyball);

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res, next) {
    res.redirect('index.html');
});

app.listen(3000, function() {
    console.log('Server is listening on Port 3000');
})
