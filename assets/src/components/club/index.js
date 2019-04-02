/**
 * Internal dependencies
 */
import styles from '../colby-student-clubs.module.scss';

import ClubMeta from './meta';
import ClubTitle from './club-title';
import ClubDescription from './club-description';
import { getMetaField } from '../../get-meta-field';

const Club = ( { content, title, meta } ) => {
	return (
		<div className={ styles.club }>
			<ClubTitle website={ getMetaField( meta, 'website' ) } title={ title.rendered } />
			<ClubDescription description={ content.rendered } />
			<ClubMeta
				officePhone={ getMetaField( meta, 'office_phone' ) }
				facultyAdvisor={ getMetaField( meta, 'faculty_advisor' ) }
				facultyAdvisorEmail={ getMetaField( meta, 'faculty_advisor_email' ) }
				studentAdvisor={ getMetaField( meta, 'student_advisor' ) }
				studentAdvisorEmail={ getMetaField( meta, 'faculty_advisor_email' ) }
			/>
		</div>
	);
};

export default Club;
