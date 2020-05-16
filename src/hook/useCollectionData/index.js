// Hooks
import { useShopData } from '../useShopData';

export const useCollectionData = (collectionUrl) => {
  const { shopData } = useShopData();
  const collection = shopData[collectionUrl];

  return {
    collection,
  }
};
