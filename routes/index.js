'use strict';

var mixins = require( 'utils/mixins' );
var glob   = require( 'glob' );
var path   = require( 'path' );

var cwd = process.cwd();
var mod = { };

// Get all definitions
var files = glob.sync( path.join( cwd, 'routes' ) + '/*-definition.js' );

files.forEach( function ( file ) {
	var capitalized    = mixins.capitalize( path.basename( file, '-definition.js' ) );
	mod[ capitalized ] = require( file );
} );

module.exports = mod;
