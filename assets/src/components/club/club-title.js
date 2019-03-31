/**
 * Internal dependencies
 */
import styles from '../colby-student-clubs.module.scss';

const ClubTitle = ( { title, website } ) => {
	const Title = () => <h1 className={ styles[ 'club-name' ] }>{ title }</h1>;
	return website && website.length > 0 ? (
		<a style={ { textDecoration: 'underline' } } href={ website }>
			<Title />
		</a>
	) : (
		<Title />
	);
};

export default ClubTitle;
