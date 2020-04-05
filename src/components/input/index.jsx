// Core
import React from 'react';

// Other
import './index.styles.scss';

export const Input = ({
  type,
  name,
  value,
  label,
  isRequired,
  onChange,
}) => {
  const labelCX = value && value.length ? 'inputLabel isShrink' : 'inputLabel';
  const labelJSX = label ? (<label className={labelCX}>{label}</label>) : null;

  return (
    <div className='input'>
      <input
        className='inputField'
        type={type}
        name={name}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
      {labelJSX}
    </div>
  )
};
