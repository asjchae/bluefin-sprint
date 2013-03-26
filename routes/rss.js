var feedparser = require('feedparser')
	, fs = require('fs')
	, request = require('request')
	, stream = require('stream');


exports.get = function(req, res) {
	var req = {
	  uri: 'http://www.techmeme.com/index.xml'
	};

	var feed = "http://www.techmeme.com/index.xml";

// ATTEMPT ONE.

	// feedparser.parseUrl(req)
	//   .on('response', function (response) {
	//     console.log(response); //.statusCode
	//   });

	// feedparser.parseStream(new stream.read(feed), function (err, meta, articles) {
	// 	if (err) {
	// 		return console.error(err);
	// 	}

	// 	console.log('===========', meta.title);

	// 	articles.forEach(function(article) {
	// 		console.log('Got article: %s', article.title || article.description);
	// 	});

	// });

// ATTEMPT TWO.

	request('http://www.techmeme.com/feed.xml')
		.pipe(new feedparser())
		
		.on('error', function (error) {
			console.error(error);
		})

		.on('meta', function (meta) {
			console.log('=================', meta.title);
		})

		.on('article', function(article) {
			console.log('Got article: %s', article.title || article.description);
		})

		.on('end', function() {
			console.log('End');
		});

};
