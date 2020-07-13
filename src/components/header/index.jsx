// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { CardIcon, CartDropDown, Logo } from '../../components';

// Other
// import './index.styles.scss';
import { Container, Navigation, NavigationLink } from './index.styles';
import { auth } from '../../firebase/utils';
import { selector, signOutStart } from '../../redux/user';
import { cartSelector } from '../../redux/cart';

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selector);
  const { isVisible } = useSelector(cartSelector);

  const activeLinkCX = { borderBottom: '2px solid #413382' };
  const onSignOut = () => dispatch(signOutStart());

  const authActionJSX = user ? (
    <NavigationLink as='div' onClick={onSignOut}>Sign Out</NavigationLink>
  ) : (
    <NavigationLink activeStyle={activeLinkCX} to='/auth'>Sign In</NavigationLink>
  );

  const cartDropDownJSX = isVisible ? <CartDropDown /> : null;

  return (
    <Container>
      <Logo />

      <Navigation>
        <NavigationLink activeStyle={activeLinkCX} to='/shop'>Shop</NavigationLink>
        {authActionJSX}
        <CardIcon />
      </Navigation>

      {cartDropDownJSX}
    </Container>
  )
};
