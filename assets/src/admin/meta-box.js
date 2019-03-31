/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

const FIELDS = [
	'faculty_advisor_email',
	'faculty_advisor',
	'office_phone',
	'student_advisor_email',
	'student_advisor',
	'website',
];

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

export default compose( [
	withSelect( ( select ) => ( {
		values: FIELDS.reduce( ( result, field ) => {
			result[ field ] = select( 'core/editor' ).getEditedPostAttribute( field );
			return result;
		}, {} ),
	} ) ),
	withDispatch( ( dispatch ) => ( { editField: dispatch( 'core/editor' ).editPost } ) ),
] )( MetaBox );
