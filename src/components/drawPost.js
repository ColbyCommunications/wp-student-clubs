import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
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

export default drawPost;
