/**
 * Selectors allow the app to fetch state data in standardized ways. Some
 * selectors have corresponding resolvers. See resolvers.js.
 */

/**
 * External dependencies
 */
import createSelector from 'rememo';

export const getContent = ( state ) => state.content;

export const getIsLoading = ( state ) => state.isLoading;

export const getPosts = ( state ) => state.posts[ JSON.stringify( getQuery( state ) ) ];

export const getCategories = ( state ) => state.categories;

export const getActiveCategory = ( state ) => state.activeCategory;

export const getSearchTerm = ( state ) => state.searchTerm;

/**
 * The createSelector function from the rememo package allows expensive
 * selectors to be memoized so that they only run when needed.
 */
export const getQuery = createSelector(
	( state ) => {
		const query = {};

		const searchTerm = getSearchTerm( state );
		if ( searchTerm.length > 3 ) {
			query.search = searchTerm;
		}

		const category = getActiveCategory( state );
		if ( null !== category && 'all' !== category ) {
			query.categories = [ category ];
		}

		// Order the object by key so that cached query keys are uniform.
		return Object.keys( query )
			.sort()
			.reduce( ( result, key ) => {
				result[ key ] = query[ key ];
				return result;
			}, {} );
	},

	/**
	 * The function passed as the first parameter will re-run only
	 * when one of these values changes.
	 *
	 * @param {Object} state Current state.
	 * @return {Array} List of values the memoization function depends on.
	 */
	( state ) => [ state.searchTerm, state.activeCategory ],
);
