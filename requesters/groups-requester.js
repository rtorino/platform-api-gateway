'use strict';

var util   = require( 'util' );
var Rabbus = require( 'rabbus' );
var Rabbit = require( 'wascally' );

var GroupTypeRequester = function ( options ) {
	Rabbus.Requester.call( this, Rabbit, {
		'exchange'    : 'req-res.groups-exchange',
		'messageType' : options.messageType
	} );
};

util.inherits( GroupTypeRequester, Rabbus.Requester );

var messageTypes = {
	'create'     : 'req-res.api.v1.groups.create',
	'upsert'     : 'req-res.api.v1.groups.upsert',
	'exists'     : 'req-res.api.v1.groups.exists',
	'findById'   : 'req-res.api.v1.groups.findById',
	'findAll'    : 'req-res.api.v1.groups.findAll',
	'findOne'    : 'req-res.api.v1.groups.findOne',
	'deleteById' : 'req-res.api.v1.groups.deleteById',
	'count'      : 'req-res.api.v1.groups.count',
	'updateById' : 'req-res.api.v1.groups.updateById',
	'updateAll'  : 'req-res.api.v1.groups.updateAll'
};

var requesters = { };
for ( var type in messageTypes ) {
	requesters[ type ] = new GroupTypeRequester( {
		'messageType' : messageTypes[ type ]
	} );
}

module.exports = requesters;
