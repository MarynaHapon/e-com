// Core
import React from 'react';

// Other
import './index.styles.scss';

export const ButtonIcon = ({ type, variant, onClick, className, icon }) => {
  return (
    <button
      type={type}
      className={`${className} buttonIcon ${variant || ''}`}
      onClick={onClick}
    >
      {icon}
    </button>
  )
};
