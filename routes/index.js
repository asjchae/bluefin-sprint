var feedparser = require('feedparser')
  , fs = require('fs')
  , request = require('request')
  , stream = require('stream');

/*
 * GET home page.
 */

exports.stream=function(req,res){
    req.api.stream('statuses/filter').post({
    track: ['school', 'bored']
  }, function (err, stream) {
    carrier.carry(stream, function (line) {
      var line = JSON.parse(line);
      res.write(line.text + '\n');
    });
  });	
}

exports.status=function(req,res){
  req.api('statuses/update').post({
    status: req.body.status
  }, function (err, json) {
    if (err) {
      res.json({error: err});
    } else {
      res.redirect('http://twitter.com/' + json.user.screen_name + '/status/' + json.id_str);
    }
  });
}

exports.index=function(req,res){

  var array = [];
  request('http://www.techmeme.com/feed.xml') //oooo! you're teaching memes, that's good
    .pipe(new feedparser())
    
    .on('error', function (error) {
      console.error(error); //well now this is just redundent, how do you spell redunant? I don't know...
    })// this is redundant, redundent? I don't know

    .on('meta', function (meta) {
      console.log('=================', meta.title);
    })

    .on('article', function(article) {
      array.push(article); //I'd like to push your article
      // console.log('Got article: %s', article.title || article.description);
      // res.send(article.summary);
    })
//Hi Ari!!!!
//Comments are good, usually, unless they are not
    .on('end', function() {
    });

   req.api('account/verify_credentials').get(function (err, profile) {
   //res.send('Hi ' + profile.screen_name + '! <form action="/status" method="post"><input name="status"><button>Post Status</button></form>');
      res.render('index', { title:"TechWing", articleList:array, profile:profile})
    });
}