// Core
import React from 'react';
import { useHistory } from 'react-router-dom';

// Other
import './index.styles.scss';

export const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => {
  const routerHistory = useHistory();

  const clickHandler = () => {
    routerHistory.push(`${match.url}${linkUrl}`);
  };

  return (
    <div className={`menuItem ${size}`} onClick={clickHandler}>
      <div className='backgroundImage' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle.toUpperCase()}</span>
      </div>
    </div>
  )
};
