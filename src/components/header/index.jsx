// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Other
import './index.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/utils';
import { userSelector } from '../../redux/user';

export const Header = () => {
  const { user } = useSelector(userSelector);
  const signOut = () => auth.signOut();

  console.log(user);

  const authActionJSX = user ? (
    <div className='navLink' onClick={signOut}>
      Sign Out
    </div>
  ) : (
    <Link to='/auth'>
      Sign In
    </Link>
  );

  return (
    <header className='header'>
      <Link to='/' className='logoContainer'>
        <Logo className='logo' />
      </Link>

      <nav className='nav'>
        <Link to='shop' className='navLink'>Shop</Link>
        <Link to='shop' className='navLink'>Contact</Link>
        {authActionJSX}
      </nav>
    </header>
  )
};
