import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import CategoryButtonContainer from '../containers/category-button-container';

const Categories = ({ categories }) => (
  <div className={styles.categories}>
    {categories.map((category) => (
      <CategoryButtonContainer
        key={category.id}
        id={category.id}
        name={category.name}
        slug={category.slug}
      />
      ))}
  </div>
  );

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;
