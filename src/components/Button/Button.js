import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, onClick}) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
