// Core
import React from 'react';

// Components
import { SignIn, SignUp, Card, Shape } from '../../components';

// Other
import './index.styles.scss';

const AuthPage = () => {
  return (
    <div className='authPage'>
      <Shape type='primary' width={70} height={90} top={5} left={-15} />
      <Shape type='secondary' width={62} height={80} bottom={-35} right={-15} />
      <Card>
        <SignIn />
      </Card>
      <Card>
        <SignUp />
      </Card>
    </div>
  );
};

export default AuthPage;
