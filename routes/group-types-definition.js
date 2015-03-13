'use strict';

var handlers = require( '../handlers' );

module.exports = [
	{
		'method' : 'POST',
		'path'   : '/v1/group-types',
		'config' : {
			'handler'     : handlers.request.create,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'PUT',
		'path'   : '/v1/group-types',
		'config' : {
			'handler'     : handlers.request.upsert,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types/{id}/exists',
		'config' : {
			'handler'     : handlers.request.exists,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types/{id}',
		'config' : {
			'handler'     : handlers.request.findById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types',
		'config' : {
			'handler'     : handlers.request.findAll,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types/findOne',
		'config' : {
			'handler'     : handlers.request.findOne,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'DELETE',
		'path'   : '/v1/group-types/{id}',
		'config' : {
			'handler'     : handlers.request.deleteById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'GET',
		'path'   : '/v1/group-types/count',
		'config' : {
			'handler'     : handlers.request.count,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'PUT',
		'path'   : '/v1/group-types/{id}',
		'config' : {
			'handler'     : handlers.request.updateById,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	},

	{
		'method' : 'POST',
		'path'   : '/v1/group-types/update',
		'config' : {
			'handler'     : handlers.request.updateAll,
			'description' : 'Some description',
			'notes'       : [ ],
			'tags'        : [ ]
		}
	}
];
