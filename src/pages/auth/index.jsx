// Core
import React from 'react';

// Components
import { SignIn, SignUp } from '../../components';

// Other
import './index.styles.scss';

export const AuthPage = () => {
  return (
    <div className='authPage'>
      <SignIn />
      <SignUp />
    </div>
  );
};
