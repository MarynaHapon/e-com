// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import { CardIcon, CartDropDown } from '../../components';

// Other
import './index.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { auth } from '../../firebase/utils';
import { userSelector } from '../../redux/user';
import { cartSelector } from '../../redux/cart';

export const Header = () => {
  const { user } = useSelector(userSelector);
  const { isVisible } = useSelector(cartSelector);

  const signOut = () => auth.signOut();

  const authActionJSX = user ? (
    <div className='navLink' onClick={signOut}>
      Sign Out
    </div>
  ) : (
    <Link to='/auth'>
      Sign In
    </Link>
  );

  const cartDropDownJSX = isVisible ? <CartDropDown /> : null;

  return (
    <header className='header'>
      <Link to='/' className='logoContainer'>
        <Logo className='logo' />
      </Link>

      <nav className='nav'>
        <Link to='shop' className='navLink'>Shop</Link>
        <Link to='shop' className='navLink'>Contact</Link>
        {authActionJSX}
        <CardIcon />
      </nav>
      {cartDropDownJSX}
    </header>
  )
};
