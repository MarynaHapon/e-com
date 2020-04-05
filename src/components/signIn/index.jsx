// Core
import React, { useState } from 'react';

// Components
import { Input, Button } from '../../components';

// Other
import './index.styles.scss';
import { signInWithGoogle } from '../../firebase/utils';

export const SignIn = () => {
  const [ data, setData ] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    })
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setData({
      email: '',
      password: '',
    })
  };

  return (
    <div className='signIn'>
      <h1 className='title'>I already have an account</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmitHandler}>
        <Input
          name='email'
          type='email'
          label='Email'
          value={data.email}
          onChange={onChangeHandler}
          isRequired
        />

        <Input
          name='password'
          type='password'
          label='Password'
          value={data.password}
          onChange={onChangeHandler}
          isRequired
        />

        <div className='buttons'>
          <Button type='submit' variant='primary'>Sign In</Button>
          <Button type='button' variant='secondary' onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
      </form>
    </div>
  );
};
