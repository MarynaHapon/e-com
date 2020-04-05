// Core
import React from 'react';

// Components
import { SignIn } from '../../components';

// Other
import './index.styles.scss';

export const AuthPage = () => {
  return (
    <div className='authPage'>
      <SignIn />
    </div>
  );
};
