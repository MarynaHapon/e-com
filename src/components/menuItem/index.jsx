// Core
import React from 'react';

// Other
import './index.styles.scss';

export const MenuItem = ({ title, subtitle, imageUrl, size }) => (
  <div className={`menuItem ${size}`}>
    <div className='backgroundImage' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle.toUpperCase()}</span>
    </div>
  </div>
);
