// Other
import {
  USER_SET,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
} from '../user';

const initialState = {
  user: null,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case USER_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

