// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { HomePage, ShopPage } from './pages';

// Components
import { Header } from './components/header';

// Other
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
