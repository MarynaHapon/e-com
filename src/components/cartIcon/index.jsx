// Core
import React from 'react';

// Other
import './index.styles.scss';
import { ReactComponent as IconBag } from '../../assets/images/iconBag.svg';

export const CardIcon = () => {
  return (
    <div className='cartIcon'>
      <IconBag className='cartIconBag' />
      <span className='cartIconCount'>0</span>
    </div>
  )
};

