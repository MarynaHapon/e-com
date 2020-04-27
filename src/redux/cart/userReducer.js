// Other
import { CART_TOGGLE_VISIBILITY } from '../cart';

const initialState = {
  isVisible: false,
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TOGGLE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};

