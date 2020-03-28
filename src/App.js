// Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import { HomePage } from './pages';

// Other
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
}

export default App;
