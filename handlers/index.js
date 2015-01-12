'use strict';

var requestHandlers  = require( './request-handlers' );
var responseHandlers = require( './response-handlers' );

module.exports = {
	// request handlers
	'request' : {
		'create' : requestHandlers.handleCreateRequest,
		'read'   : requestHandlers.handleReadRequest,
		'update' : requestHandlers.handleUpdateRequest,
		'delete' : requestHandlers.handleDeleteRequest
	},
	// response handlers
	'response' : {
		'create' : responseHandlers.handleCreateResponse,
		'read'   : responseHandlers.handleReadResponse,
		'update' : responseHandlers.handleUpdateResponse,
		'delete' : responseHandlers.handleDeleteResponse
	}
};
