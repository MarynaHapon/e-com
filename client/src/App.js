// Core
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Hooks
import { useUserData } from './hook/useUserData';

// Pages
import {
  HomePage,
  ShopPage,
  AuthPage,
  CheckoutPage,
} from './pages';

// Hooks
import { useCheckUserSession } from './hook/useCheckUserSession';

// Components
import { Header, Footer } from './components';

// Other
import { GlobalStyle } from './global.styles'

function App() {
  useCheckUserSession();

  const { user } = useUserData();
  const authRenderHandler = () => user ? <Redirect to='/' /> : <AuthPage />;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/auth' render={authRenderHandler} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
