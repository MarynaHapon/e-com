// Core
import { useSelector } from 'react-redux';

// Other
import { shopSelector } from '../../redux/shop';

export const useShopData = () => {
  const { collections } = useSelector(shopSelector);

  return {
    shopData: Object
      .keys(collections)
      .map(key => collections[key]),
  };
};

