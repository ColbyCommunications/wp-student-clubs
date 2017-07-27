import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './colby-student-clubs.module.scss';

import CategoriesContainer from '../containers/categories-container';
import PageContainer from '../containers/page-container';
import SearchInputContainer from '../containers/search-input-container';

export default class App extends React.Component {
  static get propTypes() {
    return {
      categories: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.object,
          PropTypes.string,
          PropTypes.array,
        ])
      ).isRequired,
      goBack: PropTypes.func.isRequired,
      history: PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.number,
          PropTypes.object,
          PropTypes.string,
        ])
      ).isRequired,
    };
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      if (action === 'POP') {
        for (let i = 0; i < this.props.categories.length; i += 1) {
          if (
            location.pathname.replace(/\//g, '') ===
            this.props.categories[i].slug
          ) {
            this.props.goBack(this.props.categories[i].id);
            break;
          }
        }
      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles['category-pane']}>
          <SearchInputContainer />
          <CategoriesContainer />
        </div>
        <div className={styles['page-pane']}>
          <div>
            <Route exact path="/" component={PageContainer} />
            <Route path="/:id" component={PageContainer} />
          </div>
        </div>
      </div>
    );
  }
}
