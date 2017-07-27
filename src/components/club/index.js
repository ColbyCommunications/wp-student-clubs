import React from 'react';
import PropTypes from 'prop-types';

import styles from '../colby-student-clubs.module.scss';

import ClubMeta from './meta';
import ClubTitle from './club-title';
import ClubDescription from './club-description';

const Club = ({
  description,
  title,
  office_phone,
  faculty_advisor,
  faculty_advisor_email,
  student_advisor,
  student_advisor_email,
  website,
}) =>
  (<div className={styles.club}>
    <ClubTitle website={website} title={title} />
    <ClubDescription description={description} />
    <ClubMeta
      /* eslint-disable camelcase */
      officePhone={office_phone}
      facultyAdvisor={faculty_advisor}
      facultyAdvisorEmail={faculty_advisor_email}
      studentAdvisor={student_advisor}
      studentAdvisorEmail={student_advisor_email}
      /* eslint-enable camelcase */
    />
  </div>);

Club.defaultProps = {
  description: null,
  faculty_advisor: null,
  faculty_advisor_email: null,
  office_phone: null,
  student_advisor: null,
  student_advisor_email: null,
  website: null,
};

Club.propTypes = {
  title: PropTypes.string.isRequired,

  description: PropTypes.string,
  faculty_advisor: PropTypes.string,
  faculty_advisor_email: PropTypes.string,
  office_phone: PropTypes.string,
  student_advisor: PropTypes.string,
  student_advisor_email: PropTypes.string,
  website: PropTypes.string,
};

export default Club;
