import React from 'react';
import PropTypes from 'prop-types';

const AdvisorPhone = ({ phone }) => {
  if (phone === null) {
    return null;
  }

  return (
    <div>
      <dt>Phone</dt>
      <dd>{phone}</dd>
    </div>
  );
};

AdvisorPhone.defaultProps = {
  phone: null,
};

AdvisorPhone.propTypes = {
  phone: PropTypes.string,
};

export default AdvisorPhone;
