/**
 * Internal dependencies
 */
import { getRootDataAttribute } from '../get-root-data-attribute';

test( 'getRootDataAttributeFunction', () => {
	expect( getRootDataAttribute( 'myField', { myField: 'myValue' } ) ).toBe( 'myValue' );
} );
