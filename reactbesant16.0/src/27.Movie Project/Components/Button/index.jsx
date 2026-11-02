
import React from 'react';
import './index.scss';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
