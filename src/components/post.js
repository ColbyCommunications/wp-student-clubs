import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

const drawMeta = ({
  phone,
  facultyAdvisor,
  facultyAdvisorEmail,
  studentAdvisor,
  studentAdvisorEmail,
}) => {
  const phoneRendered = phone ? [<dt>Phone</dt>, <dd>{phone}</dd>] : [];

  const facultyAdvisorRendered = facultyAdvisor && facultyAdvisorEmail
    ? [
      <dt key={`${facultyAdvisorEmail}-dt`}>Faculty Advisor</dt>,
      <dd key={`${facultyAdvisorEmail}-dd`}>
        <a href={`mailto:${facultyAdvisorEmail}`}>
          {facultyAdvisor.split(',').map((item) => item.trim()).join(', ')}
        </a>
      </dd>,
    ]
    : [];

  const studentAdvisorRendered = studentAdvisor && studentAdvisorEmail
    ? [
      <dt key={`${studentAdvisorEmail}-dt`}>Student Advisor</dt>,
      <dd key={`${studentAdvisorEmail}-dd`}>
        <a href={`mailto:${studentAdvisorEmail}`}>
          {studentAdvisor.split(',').map((item) => item.trim()).join(', ')}
        </a>
      </dd>,
    ]
    : [];

  return (
    <dl className={styles.meta}>
      {phoneRendered
        .concat(facultyAdvisorRendered)
        .concat(studentAdvisorRendered)}
    </dl>
  );
};

drawMeta.defaultProps = {
  facultyAdvisor: null,
  facultyAdvisorEmail: null,
  phone: null,
  studentAdvisor: null,
  studentAdvisorEmail: null,
};

drawMeta.propTypes = {
  facultyAdvisor: PropTypes.string,
  facultyAdvisorEmail: PropTypes.string,
  phone: PropTypes.string,
  studentAdvisor: PropTypes.string,
  studentAdvisorEmail: PropTypes.string,
};

const drawTitle = ({ title, website }) => {
  const h1 = <h1 className={styles['club-name']}>{title}</h1>;

  return website ? <a href={website}>{h1}</a> : h1;
};

drawTitle.defaultProps = {
  title: '',
  website: null,
};

drawTitle.propTypes = {
  title: PropTypes.string,
  website: PropTypes.string,
};

export default function Club({
  description,
  title,
  office_phone,
  faculty_advisor,
  faculty_advisor_email,
  student_advisor,
  student_advisor_email,
  website,
}) {
  const descriptionP = description ? <p>{description}</p> : null;

  return (
    <div className={styles.club}>
      {drawTitle({ website, title })}
      {descriptionP}
      {drawMeta({
        officePhone: office_phone,
        facultyAdvisor: faculty_advisor,
        facultyAdvisorEmail: faculty_advisor_email,
        studentAdvisor: student_advisor,
        studentAdvisorEmail: student_advisor_email,
      })}
    </div>
  );
}

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
