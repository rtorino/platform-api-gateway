'use strict';

var fs     = require( 'fs' );
var jshint = require( 'gulp-jshint' );
var path   = require( 'path' );

var jshintrc    = JSON.parse( fs.readFileSync( path.join( process.cwd(), '.jshintrc' ), 'utf8' ) );
jshintrc.lookup = false;

module.exports = function ( gulp ) {
	gulp.task( 'jshint',
		function ( ) {
			return gulp.src( './*.js' )
				.pipe( jshint( jshintrc ) )
				.pipe( jshint.reporter( 'jshint-stylish' ) );
		}
	);
};
