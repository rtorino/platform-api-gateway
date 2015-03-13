'use strict';

var requestHandlers  = require( './request-handlers' );

module.exports = {
	// request handlers
	'request' : {
		'create'     : requestHandlers.handleCreate,
		'upsert'     : requestHandlers.handleUpsert,
		'exists'     : requestHandlers.handleExists,
		'findById'   : requestHandlers.handleFindById,
		'findAll'    : requestHandlers.handleFindAll,
		'findOne'    : requestHandlers.handleFindOne,
		'deleteById' : requestHandlers.handleDeleteById,
		'count'      : requestHandlers.handleCount,
		'updateById' : requestHandlers.handleUpdateById,
		'updateAll'  : requestHandlers.handleUpdateAll
	}
};
