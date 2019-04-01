/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

/**
 * These fields come from a legacy version of this plugin and are kept as is
 * for backward compatability.
 */
const FIELDS = [
	'faculty_advisor_email',
	'faculty_advisor',
	'office_phone',
	'student_advisor_email',
	'student_advisor',
	'website',
];

/**
 * Converts an underscore-style field name to a human-friendly label.
 *
 * @param {string} fieldName One of the field names.
 * @return {string} Converted field name.
 */
export const fieldNameToLabel = ( fieldName ) =>
	fieldName
		.replace( /_/g, ' ' )
		.split( ' ' )
		.map( ( word ) => word.slice( 0, 1 ).toUpperCase() + word.slice( 1 ) )
		.join( ' ' );

const MetaBox = ( { values, editField } ) => (
	<Fragment>
		{ Object.keys( values ).map( ( field ) => (
			<TextControl
				key={ field }
				name={ field }
				label={ fieldNameToLabel( field ) }
				value={ values[ field ] }
				onChange={ ( newValue ) => {
					editField( { [ field ]: newValue } );
				} }
			/>
		) ) }
	</Fragment>
);

/**
 * Connect the component to the Redux store.
 */
export default compose( [
	withSelect( ( select ) => ( {
		values: FIELDS.reduce( ( result, field ) => {
			result[ field ] = select( 'core/editor' ).getEditedPostAttribute( field );
			return result;
		}, {} ),
	} ) ),
	withDispatch( ( dispatch ) => ( { editField: dispatch( 'core/editor' ).editPost } ) ),
] )( MetaBox );
