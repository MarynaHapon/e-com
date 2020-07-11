// Core
import { all, call } from 'redux-saga/effects';

// Other
import { userSagas } from './user';
import { shopSagas } from './shop';

export function* rootSaga() {
  yield all([
    call(userSagas),
    call(shopSagas),
  ]);
}
