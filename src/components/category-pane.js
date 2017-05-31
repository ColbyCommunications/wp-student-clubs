import React from 'react';
import PropTypes from 'prop-types';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import Category from '../containers/category';

class CategoryPane extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    return (
      <div className={styles.categories}>
        {this.props.categories.map((category) => (
          <Category key={category.id} id={category.id} name={category.name} />
        ))}
      </div>
    );
  }
}

CategoryPane.defaultProps = {
  categories: [],
};

CategoryPane.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onLoad: PropTypes.func.isRequired,
};

export default CategoryPane;
