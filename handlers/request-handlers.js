'use strict';

var Requester = require( '../requesters' );

module.exports = {
	'handleCreateRequest' : function handleCreateRequest ( request, reply ) {
		var baseUrl = request.server.info.uri;
		var path    = request.path;

		Requester[ path ].create.request( request.payload, function handleResponse ( response ) {
			var rep;
			if ( response.status === 'success' ) {
				rep = reply( { } ).created( baseUrl + path + '/' + response.id );
			} else {
				rep = reply( response.data ).code( 500 );
			}
			return rep;
		} );
	},

	'handleReadRequest' : function handleReadRequest ( request, reply ) {
		var path = request.path;

		Requester[ path ].read.request( { }, function handleResponse ( response, done ) {
			if ( response.status === 'success' ) {
				return reply( response.data );
			} else {
				return reply( response.data ).code( 500 );
			}
		} );
	},

	'handleUpdateRequest' : function handleUpdateRequest ( request, reply ) {
		return;
	},

	'handleDeleteRequest' : function handleDeleteRequest ( request, reply ) {
		return;
	}
};
