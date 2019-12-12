var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var instrumentData = require('./instrumentData.json');
var recordingsData = require('./recordingsData.json');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.status(200).render('index');
});

app.get('/:page', function(req, res, next) {
	var page = req.params.page.toLowerCase();
	console.log("Page:", page);
	if(page == "index.html" || page == ''){
		res.status(200).render('index');
	}else if(page == "recordings.html"){
			console.log("RecordingsData:", recordingsData); 
			res.status(200).render('recordings', {
				recordingsData: recordingsData
			});
	}else if(page == "guitar.html") {
			res.status(200).render('guitar');
	}else if(page == "piano.html") {
			res.status(200).render('piano');
	}else if(page == "seal.html") {
			res.status(200).render('seal');
	}else{
		next();
	}
});

app.post('/recordings.html/addRecording', function(req, res, next) {
	if(req.body && req.body.recording){
			recordingsData.recordings.push({
				recording: req.body.recording
			});
	}
	fs.writeFile(__dirname + '/recordingsData.json', JSON.stringify(recordingsData, 2, null), 
	function(err) {
			if(!err) {
					res.status(200).send();
			}else{
					res.status(500).send("Failed to write data on server side");
			}
	});
});

app.get('*', function (req, res) {
    console.log('404 error');
    res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
