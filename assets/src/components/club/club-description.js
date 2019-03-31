/**
 * WordPress dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';

const ClubDescription = ( { description } ) => {
	if ( description === null ) {
		return null;
	}

	return <div dangerouslySetInnerHTML={ { __html: decodeEntities( description ) } } />;
};

export default ClubDescription;
