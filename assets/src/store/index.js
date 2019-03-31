/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import { setIsLoading, setPosts, setSearchTerm, setCategories, setActiveCategory, setContent } from './actions';
import * as selectors from './selectors';
import * as resolvers from './resolvers';

export const STORE_NAME = 'wp-student-clubs';

const setUpStore = () => {
	registerStore( STORE_NAME, {
		reducer,
		actions: { setIsLoading, setPosts, setSearchTerm, setCategories, setActiveCategory, setContent },
		selectors,
		resolvers,
	} );
};

export default setUpStore;
