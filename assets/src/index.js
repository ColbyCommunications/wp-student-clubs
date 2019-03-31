/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import ColbyStudentClubs from './components/colby-student-clubs';
import SingleCategory from './components/single-category';

/**
 * Internal dependencies
 */
import setUpStore, { STORE_NAME } from './store';

export let ROOT_DATASET;

domReady( () => {
	const root = document.querySelector( '[data-student-clubs-root]' );

	if ( ! root ) {
		return;
	}

	ROOT_DATASET = root.dataset;
	setUpStore();

	dispatch( STORE_NAME ).setContent( root.innerHTML.trim() );
	if ( ROOT_DATASET.categories.length ) {
		dispatch( STORE_NAME ).setCategories( ROOT_DATASET.categories.split( ',' ) );

		render( <SingleCategory />, root );
		return;
	}

	render( <ColbyStudentClubs />, root );
} );
