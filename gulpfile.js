'use strict';

var gulp   = require( 'gulp' );
var eslint = require( 'gulp-eslint' );
var jshint = require( 'gulp-jshint' );
var jscs   = require( 'gulp-jscs' );

var utils  = require( './gulp/utils' );

var sourceFiles = [ ];

gulp.task( 'loadFiles', function ( cb ) {
	utils.getStagedFiles( function ( error, files ) {
		if ( error ) {
			cb( error );
		} else {
			sourceFiles = files;
			cb( null, sourceFiles );
		}
	} );
} );

gulp.task( 'eslint', [ 'loadFiles' ], function () {
	var stream = gulp.src( sourceFiles )
		.pipe( eslint() )
		.pipe( eslint.format() );

	return stream;
} );

gulp.task( 'jscs', [ 'loadFiles' ], function () {
	var stream = gulp.src( sourceFiles )
		.pipe( jscs() );

	return stream;
} );

gulp.task( 'jshint', [ 'loadFiles' ], function () {
	var stream = gulp.src( sourceFiles )
			.pipe( jshint() )
			.pipe( jshint.reporter( 'jshint-stylish' ) );

	return stream;
} );

gulp.task( 'lint', [ 'eslint', 'jscs', 'jshint' ] );

gulp.task( 'default', [ 'lint' ], function () {

} );
