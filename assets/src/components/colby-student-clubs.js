/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import styles from './colby-student-clubs.module.scss';
import Categories from './categories';
import Page from './page';
import { STORE_NAME } from '../store';

const ColbyStudentClubs = ( { searchTerm, setSearchTerm } ) => (
	<div className={ styles.container }>
		<div className={ styles[ 'category-pane' ] }>
			<TextControl value={ searchTerm } onChange={ setSearchTerm } placeholder={ __( 'Search' ) } />
			<Categories />
		</div>
		<div className={ styles[ 'page-pane' ] }>
			<div>
				<Page />
			</div>
		</div>
	</div>
);

export default compose( [
	withSelect( ( select ) => ( { searchTerm: select( STORE_NAME ).getSearchTerm() } ) ),
	withDispatch( ( dispatch ) => ( { setSearchTerm: dispatch( STORE_NAME ).setSearchTerm } ) ),
] )( ColbyStudentClubs );
