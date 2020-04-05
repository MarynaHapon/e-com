// Core
import React from 'react';

// Other
import './index.styles.scss';

export const Button = ({ type, variant, onClick, children }) => {
  return (
    <button
      type={type}
      className={`button ${variant || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
};
