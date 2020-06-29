import { UPDATE_COLLECTIONS } from './index';

export const updateCollections = (collectionMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionMap,
});
