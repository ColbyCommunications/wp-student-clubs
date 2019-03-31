/**
 * Internal dependencies
 */
import { getTestState } from './reducer.test';
import {
	getContent,
	getIsLoading,
	getCategories,
	getPosts,
	getQuery,
	getActiveCategory,
	getSearchTerm,
} from '../selectors';
import reducer from '../reducer';
import { setPosts, setSearchTerm } from '../actions';

test( 'selectors', () => {
	expect( getContent( getTestState() ) ).toBe( 'my content' );
	expect( getIsLoading( getTestState() ) ).toBe( true );
	expect( getQuery( getTestState() ) ).toMatchObject( { categories: [ 5 ], search: 'my-search-term' } );

	let state = getTestState();
	state = reducer( state, setSearchTerm( 'new search term' ) );
	state = reducer( state, setPosts( JSON.stringify( { categories: [ 5 ], search: 'new search term' } ), [ 'post99' ] ) );
	expect( getPosts( state ) ).toContain( 'post99' );

	expect( getCategories( getTestState() ) ).toContain( 'cat1' );
	expect( getActiveCategory( getTestState() ) ).toBe( 5 );
	expect( getSearchTerm( getTestState() ) ).toBe( 'my-search-term' );
} );
