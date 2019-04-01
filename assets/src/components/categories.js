/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import styles from './colby-student-clubs.module.scss';

import CategoryButton from './category-button';
import { STORE_NAME } from '../store';

const Categories = ( { categories } ) => (
	<div className={ styles.categories }>
		<CategoryButton id="all" name={ __( 'Show all' ) } />
		{ categories.map( ( { id, name } ) => (
			<CategoryButton key={ id } id={ id } name={ name } />
		) ) }
	</div>
);

/**
 * Connect the component to the Redux store.
 */
export default withSelect( ( select ) => ( { categories: select( STORE_NAME ).getCategories() } ) )( Categories );
