// Core
import { takeLatest, put, call, all } from 'redux-saga/effects';

// Other
import {
  USER_GOOGLE_SIGN_IN_START,
  USER_EMAIL_SIGN_IN_START,
  signInSuccess,
  signInFailure,
} from '../user';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
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
    yield yield getSnapshotFromUserAuth(user);
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
    yield yield getSnapshotFromUserAuth(user);
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ])
}
