import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  return (
    <div className='form__control'>
      {/* <input className='form__input' onChange={onChange} type={type} placeholder={placeholder} {...otherProps} /> */}
      <input className='form__input' {...props} />
    </div>
  );
};

FormInput.defaultProps = {
  type: 'text',
};

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default FormInput;
