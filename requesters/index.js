'use strict';

module.exports = {
	'/v1/groups'      : require( './groups-requester' ),
	'/v1/group-types' : require( './group-types-requester' )
};
