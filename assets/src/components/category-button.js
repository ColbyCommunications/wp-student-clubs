/**
 * WordPress dependencies
 */
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import styles from './colby-student-clubs.module.scss';
import { STORE_NAME } from '../store';

const CategoryButton = ( { active, setActiveCategory, id, name } ) => (
	<button
		onClick={ () => {
			setActiveCategory( active ? null : id );
		} }
		className={ [ styles.category, active === true ? styles[ 'category--active' ] : '' ].join( ' ' ).trim() }
		dangerouslySetInnerHTML={ { __html: name } }
	/>
);

/**
 * Connect the component to the Redux store.
 */
export default compose( [
	withSelect( ( select, { id } ) => ( {
		active: select( STORE_NAME ).getActiveCategory() === id,
	} ) ),
	withDispatch( ( dispatch ) => {
		return {
			setActiveCategory: dispatch( STORE_NAME ).setActiveCategory,
		};
	} ),
] )( CategoryButton );
