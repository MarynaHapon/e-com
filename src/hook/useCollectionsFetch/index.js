// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Other
import { fetchCollectionsStart, shopSelector } from '../../redux/shop';

export const useCollectionFetch = () => {
  const dispatch = useDispatch();
  const { isFetching, collections } = useSelector(shopSelector);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return {
    isFetching,
    isLoaded: !!collections,
    collections,
  }
};
