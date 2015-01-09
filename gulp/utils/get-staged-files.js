'use strict';

var _     = require( 'lodash-node' );
var exec  = require( 'child_process' ).exec;

var filterFilePaths = require( './filter-file-paths' );

module.exports = function ( callback ) {
	var cmd = 'git diff --name-only --staged';

	exec( cmd, function ( error, stdout, stderr ) {
		if ( error ) {
			callback( error, null );
		}

		var files = _.without( stdout.split( '\n' ), '', null, undefined );

		files = filterFilePaths( files );
		callback( null, files );
	} );
};
