import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant, ...props }) => {
  return (
    <button className={`button ${variant ? `button--${variant}` : ''}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['primary', 'icon']),
};

export default Button;
