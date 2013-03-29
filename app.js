var rem = require('rem')
  , express = require('express')
  , path = require('path')
  , rss = require('./routes/rss')
  , routes =require('./routes')
  , carrier = require('carrier');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('secret', process.env.SESSION_SECRET || 'terrible, terrible secret')
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(app.get('secret')));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.set('host', 'localhost:' + app.get('port'));
  app.use(express.errorHandler());
});

app.configure('production', function () {
  app.set('host', process.env.HOST);
});

/**
 * Setup Twitter.
 */

var twitter = rem.connect('twitter.com').configure({
  key: process.env.TWITTER_KEY,
  secret: process.env.TWITTER_SECRET

});

  console.log(process.env.TWITTER_KEY);
  console.log(process.env.TWITTER_SECRET);

var oauth = rem.oauth(twitter, 'http://' + app.get('host') + '/oauth/callback');

app.get('/login/', oauth.login());

app.use(oauth.middleware(function (req, res, next) {
  console.log("The user is now authenticated.");
  res.redirect('/');
}));

app.get('/logout/', oauth.logout(function (req, res) {
  res.redirect('/');
}));

// Save the user session as req.user.
app.all('/*', function (req, res, next) {
  req.api = oauth.session(req);
  next();
});

// Start the app.
app.listen(app.get('port'), function () {
  console.log('Listening on http://' + app.get('host'))
});


// ROUTES.
app.get('/rss', rss.get);


function loginRequired (req, res, next) {
 if (!req.api) {
    res.redirect('/login/');
  } else {
    next();
  }
}

app.get('/', loginRequired,routes.index);
app.post('/status', loginRequired, routes.status)
app.get('/stream', loginRequired, routes.stream)