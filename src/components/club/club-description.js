import React from 'react';
import PropTypes from 'prop-types';

const ClubDescription = ({ description }) => {
  if (description === null) {
    return null;
  }

  return <p>{description}</p>;
};

ClubDescription.defaultProps = {
  description: null,
};

ClubDescription.propTypes = {
  description: PropTypes.string,
};

export default ClubDescription;
