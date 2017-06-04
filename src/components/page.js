import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import AnimatedEllipsis from 'colby-react-animated-ellipsis';
import styles from 'colby-scss/modules/colby-student-clubs.scss';
import Club from './club';

const drawPost = ({ meta, id, title, content }) => {
  const metaProps = {};

  if (meta) {
    [
      'office_phone',
      'faculty_advisor',
      'faculty_advisor_email',
      'student_advisor',
      'student_advisor_email',
      'website',
    ].forEach((key) => {
      if (meta[key] && meta[key][0] && meta[key][0].trim().length > 0) {
        metaProps[key] = meta[key][0].trim();
      }
    });
  }

  return (
    <Club
      key={id}
      title={sanitizeHtml(title.rendered, { allowedTags: [] })}
      description={sanitizeHtml(content.rendered, { allowedTags: [] })}
      {...metaProps}
    />
  );
};

drawPost.propTypes = {
  content: PropTypes.objectOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.objectOf(PropTypes.string).isRequired,
};

const Page = ({ posts, fetching, pageOne, searchTerm, activeCategory }) => {
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

  return (
    <div className={styles.page}>
      {posts.map(drawPost)}
    </div>
  );
};

Page.defaultProps = {
  activeCategory: null,
  pageOne: 'Page One',
  posts: [],
  searchTerm: '',
};

Page.propTypes = {
  activeCategory: PropTypes.number,
  fetching: PropTypes.bool.isRequired,
  pageOne: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
};

export default Page;
