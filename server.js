'use strict';

var Hapi = require('hapi');
var Rabbit = require('wascally');
var config = require('config');
var routes = require('routes');

var env = process.env.NODE_ENV || 'development';

var server = new Hapi.Server();
server.connection({
	port: config[env].api.port
} );

Rabbit.configure({connection: config[env].rabbitmq})
	.then(function() {
		// Add all the routes within the routes folder
		for (var route in routes) {
			server.route(routes[route]);
		}
		server.start(function() {
			console.log('Server running at:', server.info.uri);
		});
	})
	.then(null, function(err) {
		setImmediate(function throwError() {
			throw err;
		});
});
