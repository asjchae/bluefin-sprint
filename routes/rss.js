var feedparser = require('feedparser')
	, fs = require('fs');


exports.get = function(req, res) {
	var req = {
	  uri: 'http://www.techmeme.com/index.xml'
	};

	// Now the trick is to figure out how this works to get actual content :3

	// feedparser.parseUrl(req)
	//   .on('response', function (response) {
	//     console.log(response.title); //.statusCode
	//   });

	feedparser.parseStream(fs.createReadStream(req), function (err, meta, articles) {
		if (err) {
			return console.error(err);
		}

		console.log('===========', meta.title);

		articles.forEach(function(article) {
			console.log('Got article: %s', article.title || article.description);
		});

	});

};