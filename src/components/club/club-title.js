import React from 'react';
import PropTypes from 'prop-types';

import styles from '../colby-student-clubs.module.scss';

const ClubTitle = ({ title, website }) => {
  const h1 = <h1 className={styles['club-name']}>{title}</h1>;

  return website ? (
    <a style={{ textDecoration: 'underline' }} href={website}>
      {h1}
    </a>
  ) : (
    h1
  );
};

ClubTitle.defaultProps = {
  title: '',
  website: null,
};

ClubTitle.propTypes = {
  title: PropTypes.string,
  website: PropTypes.string,
};

export default ClubTitle;
