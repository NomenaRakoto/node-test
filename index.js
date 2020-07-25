var express = require('express');
const request = require('request');
var bodyParser = require('body-parser');
var app = express();
var util = require('util');
const path = require('path');
const awake = require('./modules/keepAwake.js');
awake.keepAwake();
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});

// API.AI configuration
//messageText: le message ho traiten api.ai
//sessionId: session anle requete

//=====================A copier===============
var video = require('./modules/video');
var g = require('./modules/google_search_scraper');
app.set('port', process.env.PORT || 80);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/', function(req, res){
	 /******************* search video********************/
	 //var title = req.query.title;
	res.setHeader('Content-Type', 'text/plain');
		res.end("Vous êtes sur la page d'acceuil");
});

app.get('/search_google', function(req, res){
	var title = req.query.title;
	g.search(title,function(error,data){
		res.end(JSON.stringify(data));
	});
});


app.get('/search_video', function(req, res){
	var title = req.query.title;
	video.search_video(title,function(error,data){
		res.end(JSON.stringify(data));
	});
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
module.exports = app;
