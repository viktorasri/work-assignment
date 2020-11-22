import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ children, variant }) => {
  return <div className={`message message--${variant}`}>{children}</div>;
};

Message.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['red', 'blue']),
};

Message.defaultProps = {
  variant: 'red',
};

export default Message;
