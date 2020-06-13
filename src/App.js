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

// Components
import { Header, Footer } from './components';

// Other
import './App.css';

function App() {
  const { user } = useUserData();
  const authRenderHandler = () => user ? <Redirect to='/' /> : <AuthPage />;

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
