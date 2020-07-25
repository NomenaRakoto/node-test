const google = require('google'); 
const cheerio = require('cheerio');
function search(query, callback){
	google.resultsPerPage = 10
	google.lang = 'fr'
	google.tld = 'fr'
	google(query, function (err, res){
		console.log("=============result google=========");
		if(err)
		{

			console.log(err);
			callback(err, []);
		} else {
			const $ = cheerio.load(res.body);
			var res = [];
			console.log("=============body=========");
			/*console.log(res.body);*/
			$('div.kCrYT').each(function(){
				/*console.log("=============elements=========");
				console.log($(this).html());*/
				var title = $(this).find("h3").text();
				var href = $(this).find("a").attr("href");
				console.log("title : " + title);
				console.log("lien : " + href);
				if(title && href) {
					var links = href.split('&sa');
					href = links[0];
					links = href.split('q=');
					href = links[links.length-1];
					/*console.log("title : " + title);
					console.log("lien : " + href);*/
					res.push({
						title : title,
						href : href
					});
				}
			});
			callback(null, res);
		}
	});
};
exports.search = search;