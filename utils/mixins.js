'use strict';

module.exports = {
	'capitalize' : function capitalize ( str ) {
		if ( str === null ) {
			str =  '';
		} else {
			str = String ( str );
		}

		return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
	}
};
