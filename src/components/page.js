import React from 'react';
import PropTypes from 'prop-types';

import AnimatedEllipsis from 'colby-react-animated-ellipsis';

import styles from 'colby-scss/modules/colby-student-clubs.scss';

import Post from './post';

function drawPost(post) {
  const metaProps = {};

  if (post.meta) {
    [
      'office_phone',
      'faculty_advisor',
      'faculty_advisor_email',
      'student_advisor',
      'student_advisor_email',
      'website',
    ].forEach((key) => {
      if (
        post.meta[key] &&
        post.meta[key][0] &&
        post.meta[key][0].trim().length > 0
      ) {
        metaProps[key] = post.meta[key][0].trim();
      }
    });
  }

  return (
    <Post
      key={post.id}
      title={post.title.rendered}
      description={post.content.rendered}
      {...metaProps}
    />
  );
}

const Page = ({ posts, fetching, pageOne, searchTerm, activeCategory }) => {
  if (fetching === true) {
    return (
      <div className={[styles.page, styles['page--loading']].join(' ').trim()}>
        <AnimatedEllipsis />
      </div>
    );
  }

  if (fetching === false && posts.length === 0) {
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

  return (
    <div className={styles.page}>
      {posts.map(drawPost)}
    </div>
  );
};

Page.defaultProps = {
  activeCategory: null,
  posts: [],
  searchTerm: '',
};

Page.propTypes = {
  activeCategory: PropTypes.number,
  fetching: PropTypes.bool.isRequired,
  pageOne: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
};

export default Page;
