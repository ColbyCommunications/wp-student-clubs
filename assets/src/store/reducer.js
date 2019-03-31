/**
 * Internal dependencies
 */
import {
	SET_IS_LOADING,
	SET_POSTS,
	SET_SEARCH_TERM,
	SET_CATEGORIES,
	SET_ACTIVE_CATEGORY,
	SET_CONTENT,
} from './actions';

export default function(
	state = {
		activeCategory: null,
		categories: [],
		content: '',
		isLoading: true,
		posts: {},
		searchTerm: '',
	},
	action = {},
) {
	switch ( action.type ) {
		case SET_CONTENT: {
			return {
				...state,
				content: action.content,
			};
		}

		case SET_IS_LOADING: {
			return {
				...state,
				isLoading: action.isLoading,
			};
		}

		case SET_POSTS: {
			return {
				...state,
				posts: {
					...state.posts,
					[ action.query ]: action.posts,
				},
			};
		}

		case SET_SEARCH_TERM: {
			return {
				...state,
				searchTerm: action.searchTerm,
			};
		}

		case SET_CATEGORIES: {
			return {
				...state,
				categories: action.categories,
			};
		}

		case SET_ACTIVE_CATEGORY: {
			return {
				...state,
				activeCategory: action.activeCategory,
			};
		}
	}

	return state;
}
