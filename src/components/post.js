/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

function drawMeta(clubProps) {
  const phone = clubProps.phone
    ? [<dt>Phone</dt>, <dd>{clubProps.phone}</dd>]
    : [];

  const facultyAdvisor = clubProps.faculty_advisor &&
    clubProps.faculty_advisor_email
    ? [
      <dt key={`${clubProps.faculty_advisor_email}-dt`}>Faculty Advisor</dt>,
      <dd key={`${clubProps.faculty_advisor_email}-dd`}>
        <a href={`mailto:${clubProps.faculty_advisor_email}`}>
          {clubProps.faculty_advisor
              .split(',')
              .map((item) => item.trim())
              .join(', ')}
        </a>
      </dd>,
    ]
    : [];

  const studentAdvisor = clubProps.student_advisor &&
    clubProps.student_advisor_email
    ? [
      <dt key={`${clubProps.student_advisor_email}-dt`}>Student Advisor</dt>,
      <dd key={`${clubProps.student_advisor_email}-dd`}>
        <a href={`mailto:${clubProps.student_advisor_email}`}>
          {clubProps.student_advisor
              .split(',')
              .map((item) => item.trim())
              .join(', ')}
        </a>
      </dd>,
    ]
    : [];

  return (
    <dl className={styles.meta}>
      {phone.concat(facultyAdvisor).concat(studentAdvisor)}
    </dl>
  );
}

export default function Club(props) {
  const drawTitle = ({ title, website }) => {
    const h1 = (
      <h1
        className={styles['club-name']}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    );

    return website ? <a href={website}>{h1}</a> : h1;
  };

  const description = props.description
    ? <p dangerouslySetInnerHTML={{ __html: props.description }} />
    : null;

  return (
    <div className={styles.club}>
      {drawTitle({ website: props.website, title: props.title })}
      {description}
      {drawMeta({
        office_phone: props.office_phone,
        faculty_advisor: props.faculty_advisor,
        faculty_advisor_email: props.faculty_advisor_email,
        student_advisor: props.student_advisor,
        student_advisor_email: props.student_advisor_email,
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
