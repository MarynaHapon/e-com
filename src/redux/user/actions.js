// Other
import {
  USER_SET,
  USER_GOOGLE_SIGN_IN_START,
  USER_EMAIL_SIGN_IN_START,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_CHECK_SESSION,
  USER_SIGN_OUT_START,
  USER_SIGN_OUT_SUCCESS,
  USER_SIGN_OUT_FAILURE,
} from '../user';

export const setUser = (user) => ({
  type: USER_SET,
  payload: user,
});

export const googleSignInStart = () => ({
  type: USER_GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: USER_EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: USER_SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: USER_SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: USER_CHECK_SESSION,
});

export const signOutStart = () => ({
  type: USER_SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER_SIGN_OUT_FAILURE,
  payload: error,
});
