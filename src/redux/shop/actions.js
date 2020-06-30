// Other
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from './index';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/utils';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload,
});

export const fetchCollectionsFailure = (payload) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        dispatch(fetchCollectionsSuccess(convertCollectionSnapshotToMap(snapshot)));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message))
      })
  }
};
