'use strict';

var handlers = require( '../handlers' );

module.exports = [
	{
		'method' : 'POST',
		'path'   : '/v1/groups',
		'config' : {
			'handler' : handlers.request.create,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'PUT',
		'path'   : '/v1/groups',
		'config' : {
			'handler' : handlers.request.upsert,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/groups/{id}/exists',
		'config' : {
			'handler'     : handlers.request.exists,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/groups/{id}',
		'config' : {
			'handler'     : handlers.request.findById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/groups',
		'config' : {
			'handler'     : handlers.request.findAll,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/groups/findOne',
		'config' : {
			'handler'     : handlers.request.findOne,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'DELETE',
		'path'   : '/v1/groups/{id}',
		'config' : {
			'handler'     : handlers.request.deleteById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/groups/count',
		'config' : {
			'handler'     : handlers.request.count,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'PUT',
		'path'   : '/v1/groups/{id}',
		'config' : {
			'handler'     : handlers.request.updateById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'POST',
		'path'   : '/v1/groups/update',
		'config' : {
			'handler'     : handlers.request.updateAll,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	}
];
