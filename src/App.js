// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Hooks
import { useUserData } from './hook/useUserData';

// Pages
import { HomePage, ShopPage, AuthPage } from './pages';

// Components
import { Header } from './components/header';

// Other
import './App.css';

function App() {
  useUserData();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
