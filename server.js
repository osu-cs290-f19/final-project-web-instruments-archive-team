var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var instrumentData = require('./instrumentData.json');
//var availablePosts = require('./postData.json');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', function (req, res) {
    console.log('404 error');
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
