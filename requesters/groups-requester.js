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
	'create' : 'req-res.api.v1.groups.create',
	'read'   : 'req-res.api.v1.groups.read',
	'update' : 'req-res.api.v1.groups.update',
	'delete' : 'req-res.api.v1.groups.delete'
};

var requesters = { };
for ( var type in messageTypes ) {
	requesters[ type ] = new GroupTypeRequester( {
		'messageType' : messageTypes[ type ]
	} );
}

module.exports = requesters;
