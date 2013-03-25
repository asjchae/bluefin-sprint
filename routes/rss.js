var feedparser = require('feedparser');


exports.get = function(req, res) {
	var req = {
	  uri: 'http://www.techmeme.com/index.xml'
	};

	// Now the trick is to figure out how this works to get actual content :3

	feedparser.parseUrl(req)
	  .on('response', function (response) {
	    console.log(response); //.statusCode
	  });
}