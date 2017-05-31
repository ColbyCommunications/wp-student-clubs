import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import Category from '../containers/category';

const CategoryPane = ({ categories }) => (
  <div className={styles.categories}>
    {categories.map((category) => (
      <Category key={category.id} id={category.id} name={category.name} />
    ))}
  </div>
);

CategoryPane.defaultProps = {
  categories: [],
};

CategoryPane.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default CategoryPane;
