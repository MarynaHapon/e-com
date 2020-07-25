// Core
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Component
import { Button, Input } from '../../components';

// Other
import './index,styles.scss';
import { signUpStart } from '../../redux/user';

export const SignUp = () => {
  const dispatch = useDispatch();
  const [ data, setData ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [ successMessage, setSuccessMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      setErrorMessage('Password do not match');
      return;
    }

    dispatch(signUpStart({ email, password, displayName }));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const errorMessageJSX = errorMessage && (
    <span className='massage isError'>{errorMessage}</span>
  );

  const successMessageJSX = successMessage && (
    <span className='massage isSuccess'>{successMessage}</span>
  );

  return (
    <div className='signUp'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <p>
        {successMessageJSX}
        {errorMessageJSX}
      </p>
      <form className='form' onSubmit={onSubmitHandler}>
        <Input
          type='text'
          name='displayName'
          label='Display Name'
          value={data.displayName}
          onChange={onChangeHandler}
          isRequired
        />

        <Input
          type='email'
          name='email'
          label='Email'
          value={data.email}
          onChange={onChangeHandler}
          isRequired
        />

        <Input
          type='password'
          name='password'
          label='Password'
          value={data.password}
          onChange={onChangeHandler}
          isRequired
        />

        <Input
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={data.confirmPassword}
          onChange={onChangeHandler}
          isRequired
        />

        <Button type='submit' variant='primary'>Sign Up</Button>
      </form>
    </div>
  )
};
