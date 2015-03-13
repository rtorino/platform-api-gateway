'use strict';

var util   = require( 'util' );
var Rabbus = require( 'rabbus' );
var Rabbit = require( 'wascally' );

var GroupRequester = function ( options ) {
	Rabbus.Requester.call( this, Rabbit, {
		'exchange'    : 'req-res.group-types-exchange',
		'messageType' : options.messageType
	} );
};

util.inherits( GroupRequester, Rabbus.Requester );

var messageTypes = {
	'create'     : 'req-res.api.v1.group-types.create',
	'upsert'     : 'req-res.api.v1.group-types.upsert',
	'exists'     : 'req-res.api.v1.group-types.exists',
	'findById'   : 'req-res.api.v1.group-types.findById',
	'findAll'    : 'req-res.api.v1.group-types.findAll',
	'findOne'    : 'req-res.api.v1.group-types.findOne',
	'deleteById' : 'req-res.api.v1.group-types.deleteById',
	'count'      : 'req-res.api.v1.group-types.count',
	'updateById' : 'req-res.api.v1.group-types.updateById',
	'updateAll'  : 'req-res.api.v1.group-types.updateAll'};

var requesters = { };
for ( var type in messageTypes ) {
	requesters[ type ] = new GroupRequester( {
		'messageType' : messageTypes[ type ]
	} );
}

module.exports = requesters;
