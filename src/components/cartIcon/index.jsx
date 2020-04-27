// Core
import React from 'react';
import { useDispatch } from 'react-redux';

// Other
import './index.styles.scss';
import { ReactComponent as IconBag } from '../../assets/images/iconBag.svg';
import { toggleCartVisibility } from '../../redux/cart';

export const CardIcon = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(toggleCartVisibility());

  return (
    <div className='cartIcon' onClick={onClickHandler}>
      <IconBag className='cartIconBag' />
      <span className='cartIconCount'>0</span>
    </div>
  )
};

