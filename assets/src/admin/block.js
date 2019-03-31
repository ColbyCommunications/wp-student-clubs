/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls, RichText } from '@wordpress/editor';

registerBlockType( 'colbycomms/wp-student-clubs', {
	title: __( 'Student Clubs' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		endpoint: {
			type: 'string',
		},
		'categories-endpoint': {
			type: 'string',
		},
		categories: {
			type: 'string',
		},
		content: {
			type: 'string',
		},
	},
	edit( { attributes, setAttributes } ) {
		return [
			<InspectorControls key="colbycomms/wp-student-clubs-inspector">
				<PanelBody>
					<TextControl
						value={ attributes.endpoint }
						onChange={ ( newValue ) => {
							setAttributes( { endpoint: newValue } );
						} }
						label={ __( 'REST endpoint' ) }
						help={ __( "Defaults to the student organization post type's endpoint on this site." ) }
					/>
					<TextControl
						value={ attributes[ 'categories-endpoint' ] }
						onChange={ ( newValue ) => {
							setAttributes( { 'categories-endpoint': newValue } );
						} }
						label={ __( 'Categories REST endpoint' ) }
						help={ __( 'Defaults to the endpoint for categories on the current site.' ) }
					/>
					<TextControl
						value={ attributes.categories }
						onChange={ ( newValue ) => {
							setAttributes( { categories: newValue } );
						} }
						label={ __( 'Included categories' ) }
						help={ __(
							'A comma-separated list of category IDs. Causes the page to render with a different layout.',
						) }
					/>
				</PanelBody>
			</InspectorControls>,
			<div key="colbycomms/wp-student-clubs-edit">
				<RichText
					onChange={ ( newContent ) => {
						setAttributes( { content: newContent } );
					} }
					value={ attributes.content }
					placeholder={ __( 'Write intro content ...' ) }
				/>
			</div>,
		];
	},
	save() {
		return <RichText.Content />;
	},
} );