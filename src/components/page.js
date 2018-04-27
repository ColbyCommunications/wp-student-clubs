import React from 'react';
import PropTypes from 'prop-types';
import AnimatedEllipsis from 'colby-react-animated-ellipsis';
import styles from './colby-student-clubs.module.scss';
import drawPost from './drawPost';

const Page = ({
  posts, fetching, pageOne, searchTerm,
}) => {
  if (fetching === true) {
    return (
      <div className={[styles.page, styles['page--loading']].join(' ').trim()}>
        <AnimatedEllipsis />
      </div>
    );
  }

  if (fetching === false && (!posts || posts.length === 0)) {
    if (searchTerm === '') {
      return (
        <div
          className={styles.page}
          /* eslint-disable react/no-danger  */
          dangerouslySetInnerHTML={{ __html: pageOne }}
          /* eslint-enable react/no-danger */
        />
      );
    }

    return (
      <div className={styles.page}>
        No results for <i>{searchTerm}</i>
      </div>
    );
  }

  return <div className={styles.page}>{posts.map(drawPost)}</div>;
};

Page.defaultProps = {
  pageOne: 'Page One',
  posts: [],
  searchTerm: '',
};

Page.propTypes = {
  fetching: PropTypes.bool.isRequired,
  pageOne: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
};

export default Page;
