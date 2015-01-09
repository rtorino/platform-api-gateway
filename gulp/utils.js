'use strict';

var _         = require( 'lodash-node' );
var exec      = require( 'child_process' ).exec;
var parseArgs = require( 'minimist' );
var readdirp  = require( 'readdirp' );

module.exports = {
	'getDirFiles' : function ( callback ) {
		var files = [ ];
		var argv  = parseArgs( process.argv.slice( 2 ) );

		if ( argv.dir ) {
			return readdirp( {
				'root'       : argv.dir,
				'fileFilter' : '*.js'
			}, function ( errors, entries ) {
				if ( errors ) {
					errors.forEach( function ( error ) {
						console.error( 'Error: ', error );
					} );
				}

				_.forEach( entries.files, function ( file ) {
					files.push( file.fullPath );
				} );

				callback( files );
			} );
		}

		if ( argv.file ) {
			callback( files.concat( argv.files ) );
		}
	},

	'getStagedFiles' : function ( callback ) {
		var cmd = 'git diff --name-only --staged';

		exec( cmd, function ( error, stdout, stderr ) {
			if ( error ) {
				throw error;
			}

			var files = _.without( stdout.split( '\n' ), '', null, undefined );

			if ( _.isFunction( callback ) ) {
				callback( files );
			}
		} );
	}
};
