import React from 'react';
import PropTypes from 'prop-types';

const Advisor = ({ email, name, title }) => {
  if ([email, name, title].indexOf(null) !== -1) {
    return null;
  }

  return (
    <div>
      <dt>{title}</dt>
      <dd>
        <a href={`mailto:${email}`}>
          {name.split(',').map((item) => item.trim()).join(', ')}
        </a>
      </dd>
    </div>
  );
};

Advisor.defaultProps = {
  email: null,
  name: null,
  title: null,
};

Advisor.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Advisor;
