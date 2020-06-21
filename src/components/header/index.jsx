// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { CardIcon, CartDropDown, Logo } from '../../components';

// Other
// import './index.styles.scss';
import { Container, Navigation, NavigationLink } from './index.styles';
import { auth } from '../../firebase/utils';
import { userSelector } from '../../redux/user';
import { cartSelector } from '../../redux/cart';

export const Header = () => {
  const { user } = useSelector(userSelector);
  const { isVisible } = useSelector(cartSelector);

  const signOut = () => auth.signOut();

  const activeLinkCX = { borderBottom: '2px solid #413382' };

  const authActionJSX = user ? (
    <NavigationLink as='div' onClick={signOut}>Sign Out</NavigationLink>
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
