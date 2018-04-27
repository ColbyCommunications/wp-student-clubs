import React from 'react';
import PropTypes from 'prop-types';

import styles from './colby-student-clubs.module.scss';

import CategoryButtonContainer from '../containers/category-button-container';

const Categories = ({ categories, endpoint }) => (
  <div className={styles.categories}>
    {categories.map(category => (
      <CategoryButtonContainer
        endpoint={endpoint}
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
  endpoint: PropTypes.string.isRequired,
};

export default Categories;
