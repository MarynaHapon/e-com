// Core
import { takeLatest, put, call, all } from 'redux-saga/effects';

// Other
import {
  USER_GOOGLE_SIGN_IN_START,
  USER_EMAIL_SIGN_IN_START,
  USER_CHECK_SESSION,
  USER_SIGN_OUT_START,
  signInSuccess,
  signInFailure,
} from '../user';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/utils';

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail(email, password) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_CHECK_SESSION, isUserAuthenticated)
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signInSuccess());
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ])
}
