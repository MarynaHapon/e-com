// Core
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import { CardIcon, CartDropDown, Logo } from '../../components';

// Other
import './index.styles.scss';
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
    <NavLink to='/auth' className='navLink' activeClassName='selected'>
      Sign In
    </NavLink>
  );

  const cartDropDownJSX = isVisible ? <CartDropDown /> : null;

  return (
    <header className='header'>
      <Logo />

      <nav className='nav'>
        <NavLink to='/shop' replace className='navLink' activeClassName='selected'>Shop</NavLink>
        {/*<NavLink to='/shop' className='navLink' activeClassName='selected'>Contact</NavLink>*/}
        {authActionJSX}
        <CardIcon />
      </nav>

      {cartDropDownJSX}
    </header>
  )
};
