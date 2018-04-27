import React from 'react';
import PropTypes from 'prop-types';

import styles from './colby-student-clubs.module.scss';

import CategoriesContainer from '../containers/categories-container';
import PageContainer from '../containers/page-container';
import SearchInputContainer from '../containers/search-input-container';

const App = ({ endpoint }) => (
  <div className={styles.container}>
    <div className={styles['category-pane']}>
      <SearchInputContainer endpoint={endpoint} />
      <CategoriesContainer endpoint={endpoint} />
    </div>
    <div className={styles['page-pane']}>
      <div>
        <PageContainer />
      </div>
    </div>
  </div>
);

App.propTypes = {
  endpoint: PropTypes.string.isRequired,
};

export default App;
