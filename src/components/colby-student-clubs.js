import React from 'react';

import styles from './colby-student-clubs.module.scss';

import CategoriesContainer from '../containers/categories-container';
import PageContainer from '../containers/page-container';
import SearchInputContainer from '../containers/search-input-container';

const App = () =>
  (<div className={styles.container}>
    <div className={styles['category-pane']}>
      <SearchInputContainer />
      <CategoriesContainer />
    </div>
    <div className={styles['page-pane']}>
      <div>
        <PageContainer />
      </div>
    </div>
  </div>);

export default App;
