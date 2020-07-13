// Core
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Other
import { USER_SIGN_OUT_SUCCESS } from '../user';
import { clearCart } from '../cart';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(USER_SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([
    call(onSignOutSuccess),
  ]);
}
