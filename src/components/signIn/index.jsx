// Core
import React, { useState } from 'react';

// Components
import { Input, Button } from '../../components';

// Other
import './index.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/utils';

export const SignIn = () => {
  const [ data, setData ] = useState({
    email: '',
    password: '',
  });

  const [ successMessage, setSuccessMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    })
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setData({
        email: '',
        password: '',
      });
      setErrorMessage('');
      setSuccessMessage('Success');
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const errorMessageJSX = errorMessage && (
    <span className='massage isError'>{errorMessage}</span>
  );

  const successMessageJSX = successMessage && (
    <span className='massage isSuccess'>{successMessage}</span>
  );

  return (
    <div className='signIn'>
      <h1 className='title'>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <p>
        {successMessageJSX}
        {errorMessageJSX}
      </p>

      <form onSubmit={onSubmitHandler} className='form'>
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
