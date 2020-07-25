// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Other
import { checkUserSession } from '../../redux/user';

export const useCheckUserSession = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
};
