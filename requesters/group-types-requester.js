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
	'create' : 'req-res.api.v1.group-types.create',
	'read'   : 'req-res.api.v1.group-types.read',
	'update' : 'req-res.api.v1.group-types.update',
	'delete' : 'req-res.api.v1.group-types.delete'
};

var requesters = { };
for ( var type in messageTypes ) {
	requesters[ type ] = new GroupRequester( {
		'messageType' : messageTypes[ type ]
	} );
}

module.exports = requesters;
