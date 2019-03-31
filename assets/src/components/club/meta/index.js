/**
 * Internal dependencies
 */
import styles from '../../colby-student-clubs.module.scss';

import Advisor from './advisor';
import AdvisorPhone from './advisor-phone';

const Meta = ( { phone, facultyAdvisor, facultyAdvisorEmail, studentAdvisor, studentAdvisorEmail } ) => (
	<dl className={ styles.meta }>
		<AdvisorPhone phone={ phone } />
		<Advisor title="Faculty/Staff Advisor" email={ facultyAdvisorEmail } name={ facultyAdvisor } />
		<Advisor title="Student Advisor" email={ studentAdvisorEmail } name={ studentAdvisor } />
	</dl>
);

export default Meta;
