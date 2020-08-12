// Core
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Hooks
import { useUserData } from './hook/useUserData';

// Hooks
import { useCheckUserSession } from './hook/useCheckUserSession';

// Components
import { Header, Footer, Spinner, ErrorBoundary } from './components';

// Other
import { GlobalStyle } from './global.styles'

const HomePage = lazy(() => import('./pages/home/index'));
const ShopPage = lazy(() => import('./pages/shop/index'));
const AuthPage = lazy(() => import('./pages/auth/index'));
const CheckoutPage = lazy(() => import('./pages/checkout/index'));

function App() {
  useCheckUserSession();

  const { user } = useUserData();
  const authRenderHandler = () => user ? <Redirect to='/' /> : <AuthPage />;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/auth' render={authRenderHandler} />
            <Route exact path='/checkout' component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
