/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import styles from './colby-student-clubs.module.scss';
import Club from './club';
import { STORE_NAME } from '../store';

const SingleCategory = ( { posts = [] } ) => (
	<div className={ styles.cardContainer }>
		{ posts.map( ( post ) => (
			<Club key={ post.id } { ...post } style="card" />
		) ) }
	</div>
);

/**
 * Connect the component to the Redux store.
 */
export default withSelect( ( select ) => ( { posts: select( STORE_NAME ).getPosts( select( STORE_NAME ).getQuery() ) } ) )(
	SingleCategory,
);
