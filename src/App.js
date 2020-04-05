// Core
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import { HomePage, ShopPage, AuthPage } from './pages';

// Components
import { Header } from './components/header';

// Other
import './App.css';
import { auth, createUserProfileDocument } from './firebase/utils';

function App() {
  const [ user, setUser ] = useState(null);

  useState(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot);
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setUser(userAuth)
      }
    });

    console.log(user);

    return () => {
      unsubscribeFromAuth();
    }
  }, [ user ]);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
