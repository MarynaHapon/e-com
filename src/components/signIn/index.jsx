// Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Components
import { Input, Button } from '../../components';

// Other
import './index.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user';

export const SignIn = () => {
  const dispatch = useDispatch();

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

  const onEmailSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    dispatch(emailSignInStart(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(googleSignInStart());
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

      <form onSubmit={onEmailSignIn} className='form'>
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
          <Button type='button' variant='secondary' onClick={onGoogleSignIn}>Sign In with Google</Button>
        </div>
      </form>
    </div>
  );
};
