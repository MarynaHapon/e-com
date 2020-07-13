// Other
import {
  CART_TOGGLE_VISIBILITY,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEM,
  CART_CLEAR,
} from '../cart';
import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from '../cart';

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
        cartItems: increaseCartItemQuantity(state.cartItems, action.payload),
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItemQuantity(state.cartItems, action.payload),
      };
    case CART_CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem !== action.payload)
      };
    case CART_CLEAR:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

