'use strict';

var mod = { };

var capitalize = function ( str ) {
	str = str === null ? '' : String ( str );

	return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
};

mod.capitalize = capitalize;

module.exports = mod;
