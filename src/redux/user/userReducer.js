// Other
import { USER_SET } from '../user';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

