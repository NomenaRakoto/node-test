exports.keepAwake = function(){
	var http = require("https");
	setInterval(function() {
	    http.get(process.env.SERVER_URL);
	}, 300000); // every 5 minutes (300000)
}