/**
 * Internal dependencies
 */
import { getMetaField } from '../get-meta-field';

test( 'getMetaField function', () => {
	const testData = {
		key1: [ 'value1' ],
		key2: 'value2',
	};

	expect( getMetaField( testData, 'key1' ) ).toBe( 'value1' );
	expect( getMetaField( testData, 'key2' ) ).toBe( 'value2' );
	expect( getMetaField( testData, 'nonexistentKey' ) ).toBe( '' );
} );
