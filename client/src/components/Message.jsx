import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ children }) => {
  return <div className='message message--red'>{children}</div>;
};

Message.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Message;
