// Core
import { useSelector } from 'react-redux';

// Other
import { selector } from '../../redux/user';

export const useUserData = () => {
  const { user } = useSelector(selector);

  return {
    user,
  }
};
