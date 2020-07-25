// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Other
import './index.styles.scss';
import { ReactComponent as IconLogo } from '../../assets/images/logo.svg';

export const Logo = () => {
  return (
    <Link to='/' className='logoContainer'>
      <span className='logoText'>E-com</span>
      <IconLogo className='logoImage' />
    </Link>
  )
};

