'use strict';

var handlers = require( '../handlers' );

module.exports = [
	{
		'method' : 'POST',
		'path'   : '/v1/group-types',
		'config' : {
			'handler' : handlers.request.create
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types',
		'config' : {
			'handler' : handlers.request.read
		}
	}
];
