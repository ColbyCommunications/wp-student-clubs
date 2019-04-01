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

/**
 * Will contain the root element's data set. Will be set after the root element
 * is selected.
 */
export let ROOT_DATASET;

const start = () => {
	const root = document.querySelector( '[data-student-clubs-root]' );

	if ( ! root ) {
		return;
	}

	ROOT_DATASET = root.dataset;
	setUpStore();

	dispatch( STORE_NAME ).setContent( root.innerHTML.trim() );

	/**
	 * If categories have been passed in, we use the SingleCategory component,
	 * which has a very different look and no interactivity. It simply fetches
	 * posts in the specified categories and displays them as card components.
	 */
	if ( ROOT_DATASET.categories.length ) {
		dispatch( STORE_NAME ).setCategories( ROOT_DATASET.categories.split( ',' ) );

		render( <SingleCategory />, root );
		return;
	}

	render( <ColbyStudentClubs />, root );
};

domReady( start );
