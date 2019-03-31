/**
 * WordPress dependencies
 */
import { dispatch } from '@wordpress/data';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '.';
import { getRootDataAttribute } from '../get-root-data-attribute';

export const getPosts = async ( query ) => {
	dispatch( STORE_NAME ).setIsLoading( true );
	const url = addQueryArgs( getRootDataAttribute( 'endpoint' ), query );

	const response = await global.fetch( url );
	const posts = await response.json();

	dispatch( STORE_NAME ).setPosts( JSON.stringify( query ), posts );
	dispatch( STORE_NAME ).setIsLoading( false );
};

export const getCategories = async () => {
	let url;
	let response;
	let totalPages = 9;
	let page = 1;
	let categories = [];

	/**
	 * The WordPress REST API only allows us to fetch 99 objects at a time, so we need to make a paginated
	 * request to handle cases where there are more than 99 categories.
	 */
	while ( page < totalPages ) {
		url = addQueryArgs( getRootDataAttribute( 'categoriesEndpoint' ), {
			per_page: 99,
			exclude: 1,
			hide_empty: true,
			page,
		} );
		response = await global.fetch( url );
		totalPages = response.headers.get( 'X-WP-TotalPages' );
		const receivedCategories = await response.json();
		categories = [ ...categories, ...receivedCategories ];
		page += 1;
	}

	dispatch( STORE_NAME ).setCategories( categories );
};
