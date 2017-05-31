import React from 'react';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import Categories from '../containers/categories';
import CurrentPage from '../containers/current-page';

const ColbyStudentClubs = () => (
  <div className={styles.container}>
    <div className={styles['category-pane']}>
      <Categories />
    </div>
    <div className={styles['page-pane']}>
      <CurrentPage />
    </div>
  </div>
);

export default ColbyStudentClubs;
