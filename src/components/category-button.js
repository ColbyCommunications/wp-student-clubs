/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './colby-student-clubs.module.scss';

const CategoryButton = ({
  active, id, name, onClick, endpoint,
}) => (
  <button
    onClick={() => onClick(endpoint, active === true ? null : id)}
    className={[styles.category, active === true ? styles['category--active'] : '']
      .join(' ')
      .trim()}
    dangerouslySetInnerHTML={{ __html: name }}
  />
);

CategoryButton.propTypes = {
  active: PropTypes.bool.isRequired,
  endpoint: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryButton;
