
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express()
  , oneDay = 86400000;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  
  // Connect favicon middle-ware (maxAge option is required).
  app.use(express.favicon(__dirname + '/public/favicon.ico'), {maxAge: oneDay});
  
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  
  // Connect Static Middle-ware is implemented here
  app.use(express.static(path.join(__dirname, 'public')), {maxAge: oneDay, redirect: true});
  
  // Connect Directory Middle-ware
  app.use(express.directory(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
