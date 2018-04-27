import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../colby-student-clubs.module.scss';

import Advisor from './advisor';
import AdvisorPhone from './advisor-phone';

const Meta = ({
  phone,
  facultyAdvisor,
  facultyAdvisorEmail,
  studentAdvisor,
  studentAdvisorEmail,
}) => (
  <dl className={styles.meta}>
    <AdvisorPhone phone={phone} />
    <Advisor title="Faculty/Staff Advisor" email={facultyAdvisorEmail} name={facultyAdvisor} />
    <Advisor title="Student Advisor" email={studentAdvisorEmail} name={studentAdvisor} />
  </dl>
);

Meta.defaultProps = {
  facultyAdvisor: null,
  facultyAdvisorEmail: null,
  phone: null,
  studentAdvisor: null,
  studentAdvisorEmail: null,
};

Meta.propTypes = {
  facultyAdvisor: PropTypes.string,
  facultyAdvisorEmail: PropTypes.string,
  phone: PropTypes.string,
  studentAdvisor: PropTypes.string,
  studentAdvisorEmail: PropTypes.string,
};

export default Meta;
