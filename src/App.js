// Core
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Pages
import { HomePage, ShopPage, AuthPage } from './pages';

// Components
import { Header } from './components/header';

// Other
import './App.css';
import { auth, createUserProfileDocument } from './firebase/utils';
import { setUser } from './redux/user';

function App() {
  const dispatch = useDispatch();

  useState(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setUser({
            id: snapshot.id,
            ...snapshot.data(),
          }));
        });
      } else {
        dispatch(setUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    }
  }, [ auth ]);

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
