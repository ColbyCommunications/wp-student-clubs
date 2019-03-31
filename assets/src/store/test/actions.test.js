/**
 * Internal dependencies
 */
import {
	setContent,
	setIsLoading,
	SET_CONTENT,
	SET_IS_LOADING,
	setPosts,
	SET_POSTS,
	setSearchTerm,
	SET_SEARCH_TERM,
	setCategories,
	SET_CATEGORIES,
	setActiveCategory,
	SET_ACTIVE_CATEGORY,
} from '../actions';

test( 'redux action creators', () => {
	expect( setContent( 'mycontent' ) ).toMatchObject( { type: SET_CONTENT, content: 'mycontent' } );
	expect( setIsLoading( false ) ).toMatchObject( { type: SET_IS_LOADING, isLoading: false } );
	expect( setPosts( 'query', [ 'post', 'post1' ] ) ).toMatchObject( {
		type: SET_POSTS,
		query: 'query',
		posts: [ 'post', 'post1' ],
	} );
	expect( setSearchTerm( 'search term' ) ).toMatchObject( { type: SET_SEARCH_TERM, searchTerm: 'search term' } );
	expect( setCategories( [ 'cat1', 'cat2' ] ) ).toMatchObject( { type: SET_CATEGORIES, categories: [ 'cat1', 'cat2' ] } );
	expect( setActiveCategory( 5 ) ).toMatchObject( { type: SET_ACTIVE_CATEGORY, activeCategory: 5 } );
} );
