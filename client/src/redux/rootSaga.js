// Core
import { all, call } from 'redux-saga/effects';

// Other
import { userSagas } from './user';
import { shopSagas } from './shop';
import { cartSaga } from './cart';

export function* rootSaga() {
  yield all([
    call(userSagas),
    call(shopSagas),
    call(cartSaga),
  ]);
}
