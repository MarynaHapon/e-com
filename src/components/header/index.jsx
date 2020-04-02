// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Other
import './index.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export const Header = () => {

  return (
    <header className='header'>
      <Link to='/' className='logoContainer'>
        <Logo className='logo' />
      </Link>

      <nav className='nav'>
        <Link to='shop' className='navLink'>Shop</Link>
        <Link to='shop' className='navLink'>Contact</Link>
      </nav>
    </header>
  )
};
