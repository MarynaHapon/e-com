// Core
import { takeEvery, call, put, all } from 'redux-saga/effects';

// Other
import { FETCH_COLLECTIONS_START } from './types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (e) {
    yield put(fetchCollectionsFailure());
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ])
}
