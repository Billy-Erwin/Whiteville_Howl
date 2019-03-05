//Module handles incoming requests, routing them to the proper resources
//@author: Billy Erwin, 2-17-2019

var url = require('url');
var emailEndpoint = require('./email.endpoint.js');

//@param req = HTTP request object
//@param resp = HTTP response object
exports.routeRequest = function(req, resp){

	var urlObj = url.parse(req.url, true);
	var resourcePath = urlObj.pathname.toString();

	if(resourcePath === '/howl/becomeASponsor') {
		emailEndpoint.sendIt(JSON.parse(urlObj.query.model));
		resp.writeHead(200, {'Content-Type': 'application/json'});
		resp.end(JSON.stringify(urlObj.query));
	}
}