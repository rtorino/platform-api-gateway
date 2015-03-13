'use strict';

var Requester = require( '../requesters' );

module.exports = {
	'handleCreate' : function handleCreate ( request, reply ) {
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

	'handleUpsert' : function handleUpsert ( request, reply ) {

	},

	'handleExists' : function handleExists ( request, reply ) {

	},

	'handleFindById' : function handleFindById ( request, reply ) {

	},

	'handleFindAll' : function handleFindAll ( request, reply ) {
		var path = request.path;

		Requester[ path ].findAll.request( { }, function handleResponse ( response, done ) {
			if ( response.status === 'success' ) {
				return reply( response.data );
			} else {
				return reply( response.data ).code( 500 );
			}
		} );
	},

	'handleFindOne' : function handleFindOne ( request, reply ) {

	},

	'handleDeleteById' : function handleDeleteById ( request, reply ) {

	},

	'handleCount' : function handleCount ( request, reply ) {

	},

	'handleUpdateById' : function handleUpdateById ( request, reply ) {

	},

	'handleUpdateAll' : function handleUpdateAll ( request, reply ) {

	}
};
