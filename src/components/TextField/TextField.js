import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

function TextField({ type = 'text', value, onChange, ...rest }) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      className='text-center'
    />
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

export default TextField;
