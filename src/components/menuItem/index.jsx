// Core
import React from 'react';
import { withRouter } from 'react-router-dom';

// Other
import './index.styles.scss';

const Item = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => {
  const clickHandler = () => {
    history.push(`${match.url}${linkUrl}`);
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

export const MenuItem = withRouter(Item);
