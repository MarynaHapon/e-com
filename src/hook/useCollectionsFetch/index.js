// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Other
import { fetchCollectionsStartAsync, shopSelector } from '../../redux/shop';

export const useCollectionFetch = () => {
  const dispatch = useDispatch();
  const { isFetching, collections } = useSelector(shopSelector);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, []);

  return {
    isFetching,
    isLoaded: !!collections,
    collections,
  }
};
