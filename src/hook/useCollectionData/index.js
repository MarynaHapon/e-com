// Core
import { useSelector } from 'react-redux';

// Other
import { shopSelector } from '../../redux/shop';

export const useCollectionData = (collectionUrl) => {
  const { collections } = useSelector(shopSelector);
  const collection = collections[collectionUrl];

  return {
    collection,
  }
};
