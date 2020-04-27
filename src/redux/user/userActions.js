// Other
import { USER_SET } from '../user';

export const setUser = (user) => ({
  type: USER_SET,
  payload: user,
});
