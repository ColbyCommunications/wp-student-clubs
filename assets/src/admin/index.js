/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import { select, dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './block';
import MetaBox from './meta-box';

/**
 * When the new editor is not active, we need to set up the current global post for the core editor Redux
 * store. This happens automatically with the new editor.
 *
 * @param {number} postId Current post ID.
 * @param {string} restUrl REST URL for the post.
 * @return {Promise} Promise resolving when completed.
 */
const setUpPostInClassicMode = ( postId, restUrl ) =>
	new Promise( async ( resolve ) => {
		const response = await global.fetch( `${ restUrl }${ postId }` );
		const post = await response.json();
		post.content.raw = ''; // setupEditor expects this to be set.
		dispatch( 'core/editor' ).setupEditor( post, {} );
		resolve();
	} );

domReady( async () => {
	const root = document.getElementById( 'student-organization-meta-fields' );

	const post = select( 'core/editor' ).getCurrentPost();
	if ( ! post || Object.keys( post ).length === 0 ) {
		await setUpPostInClassicMode( root.getAttribute( 'data-post-id' ), root.getAttribute( 'data-rest-url' ) );
	}

	if ( root ) {
		render( <MetaBox />, root );
	}
} );
