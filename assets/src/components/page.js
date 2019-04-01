/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../store';
import Club from './club';

/**
 * Internal dependencies
 */
import styles from './colby-student-clubs.module.scss';

const Page = ( { activeCategory, content, posts, loading, searchTerm } ) => {
	if ( ! Array.isArray( posts ) ) {
		posts = [];
	}

	if ( loading === true ) {
		return (
			<div className={ [ styles.page, styles[ 'page--loading' ] ].join( ' ' ).trim() }>
				<Spinner />
			</div>
		);
	}

	if ( loading === false && searchTerm.length > 0 && posts.length === 0 ) {
		return (
			<div className={ styles.page }>
				No results for <i>{ searchTerm }</i>
			</div>
		);
	}

	if ( activeCategory === null && searchTerm.length === 0 && content.length > 0 ) {
		return <div dangerouslySetInnerHTML={ { __html: content } } />;
	}

	return (
		<div className={ styles.page }>
			{ posts.map( ( post ) => (
				<Club key={ post.id } { ...post } />
			) ) }
		</div>
	);
};

/**
 * Connect the component to the Redux store.
 */
export default withSelect( ( select ) => ( {
	activeCategory: select( STORE_NAME ).getActiveCategory(),
	content: select( STORE_NAME ).getContent(),
	loading: select( STORE_NAME ).getIsLoading(),
	posts: select( STORE_NAME ).getPosts( select( STORE_NAME ).getQuery() ),
	searchTerm: select( STORE_NAME ).getSearchTerm(),
} ) )( Page );
