//Module starts howl server server
//@author: Billy Erwin, 2-17-2019

var http = require('http');

var routeAPI = require('./router.js');

var server = http.createServer(function(req, resp){
	return routeAPI.routeRequest(req, resp);
});

server.listen(8080);