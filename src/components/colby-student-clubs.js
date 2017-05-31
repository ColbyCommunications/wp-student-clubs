import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import Categories from '../containers/categories';
import CurrentPage from '../containers/current-page';
import SearchInputContainer from '../containers/search-input-container';

const ColbyStudentClubs = ({ pageOne }) => (
  <div className={styles.container}>
    <div className={styles['category-pane']}>
      <SearchInputContainer />
      <Categories />
    </div>
    <div className={styles['page-pane']}>
      <CurrentPage pageOne={pageOne} />
    </div>
  </div>
);

ColbyStudentClubs.propTypes = {
  pageOne: PropTypes.string.isRequired,
};

export default ColbyStudentClubs;
