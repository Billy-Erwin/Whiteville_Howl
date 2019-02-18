//Module starts howl server server
//@author: Billy Erwin, 2-17-2019

var http = require('http');
// var fs = require('fs');
// var apiDataAccess = require('./apiDataAccess');
// var authenticate = require('./authenticateAPI.js');
var routeAPI = require('./router.js');

var server = http.createServer(function(req, resp){

	// apiDataAccess.cleanBlackList(function(msg){
	//
	// 	if(msg !== ''){
	//
	// 		apiDataAccess.logger(msg);
	// 	}
		routeAPI.routeRequest(req, resp);
	// });

});

server.listen(8080);