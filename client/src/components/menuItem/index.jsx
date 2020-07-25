// Core
import React from 'react';
import { useHistory } from 'react-router-dom';

// Other
import './index.styles.scss';

export const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl }) => {
  const routerHistory = useHistory();

  const clickHandler = () => { routerHistory.push(linkUrl) };

  return (
    <div className={`menuItem ${size}`} onClick={clickHandler}>
      <div className='icon'>
        <div className='iconImage' style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>

      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
  )
};
