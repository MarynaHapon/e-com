// Other
import {
  CART_TOGGLE_VISIBILITY,
  CART_ADD_ITEM,
} from '../cart';
import { updateCartItemQuantity } from '../cart';

const initialState = {
  isVisible: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TOGGLE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: updateCartItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

