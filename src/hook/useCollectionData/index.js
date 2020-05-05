// Hooks
import { useShopData } from '../useShopData';

const collectionIdMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const useCollectionData = (collectionUrl) => {
  const { shopData } = useShopData();
  const collection = shopData.find((collection) => collection.id === collectionIdMap[collectionUrl]);

  return {
    collection,
  }
};
