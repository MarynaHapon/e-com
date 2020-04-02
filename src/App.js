// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { HomePage, ShopPage } from './pages';

// Other
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
