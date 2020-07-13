// Core
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Hooks
import { useUserData } from './hook/useUserData';

// Pages
import {
  HomePage,
  ShopPage,
  AuthPage,
  CheckoutPage,
} from './pages';

// Components
import { Header, Footer } from './components';

// Other
import './App.css';
import { checkUserSession } from './redux/user';

function App() {
  const { user } = useUserData();
  const authRenderHandler = () => user ? <Redirect to='/' /> : <AuthPage />;

  const dispatch = useDispatch();

  dispatch(checkUserSession());

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <>
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
