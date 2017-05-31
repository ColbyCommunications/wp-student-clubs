import React from 'react';
import PropTypes from 'prop-types';

import AnimatedEllipsis from 'colby-react-animated-ellipsis';

import styles from 'colby-scss/modules/student-handbook.scss';

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

const Page = ({ posts, fetchingPage }) => (
  <div className={styles.page}>
    {fetchingPage === true ? <AnimatedEllipsis /> : posts.map(drawPost)}
  </div>
);

Page.defaultProps = {
  fetchingPage: false,
  posts: [],
};

Page.propTypes = {
  fetchingPage: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default Page;
