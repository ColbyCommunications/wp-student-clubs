/**
 * Internal dependencies
 */
import reducer from '../reducer';
import { setContent, setIsLoading, setPosts, setSearchTerm, setCategories, setActiveCategory } from '../actions';

export const getTestState = () => ( {
	activeCategory: 5,
	categories: [ 'cat1', 'cat2' ],
	content: 'my content',
	isLoading: true,
	posts: {
		[ JSON.stringify( { categories: [ 5 ], search: 'my-search-term' } ) ]: [ 'post1', 'post2' ],
		query2: [ 'post3', 'post4' ],
	},
	searchTerm: 'my-search-term',
} );

test( 'reducer', () => {
	expect( reducer( getTestState(), setContent( 'my new content' ) ).content ).toBe( 'my new content' );
	expect( reducer( getTestState(), setIsLoading( false ) ).isLoading ).toBe( false );
	expect( reducer( getTestState(), setPosts( 'query3', [ 'post5' ] ) ).posts.query3 ).toContain( 'post5' );
	expect( reducer( getTestState(), setSearchTerm( 'new search term' ) ).searchTerm ).toBe( 'new search term' );
	expect( reducer( getTestState(), setCategories( [ 'cat3' ] ) ).categories ).toContain( 'cat3' );
	expect( reducer( getTestState(), setActiveCategory( 99 ) ).activeCategory ).toBe( 99 );
	expect( reducer( getTestState(), {} ) ).toMatchObject( getTestState() );
} );
