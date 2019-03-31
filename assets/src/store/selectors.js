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
	( state ) => [ state.searchTerm, state.activeCategory ],
);
