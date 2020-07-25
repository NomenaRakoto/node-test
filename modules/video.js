var yt = require('scrape-youtube')
const MAX_LENGTH = 26109542;
const SERVER_URL = "https://powerful-peak-71126.herokuapp.com/";
const SERVER_BOT_URL = "https://alfredbotai2.herokuapp.com/";
const NB_MAX = 15;
var youtube = new yt.Youtube();

function search_video(title,callback){
	/*youtube.search.list({
				part: 'id,snippet',
				q: title,
				"maxResults": NB_MAX
			  }, function (err, data) {
			  	console.log("========data===========" + JSON.stringify(data));
				if (err) {
					callback("Sorry, I can't do your request",null,null);
				}
				if (data) {
					callback(null,data);
				}
	});*/
	youtube.search(title).then(results => {
	    callback(null,results);
	});

	
}


exports.search_video = search_video;