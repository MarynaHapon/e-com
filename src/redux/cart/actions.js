// Other
import {
  CART_TOGGLE_VISIBILITY,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEM,
} from '../cart';

export const toggleCartVisibility = () => ({
  type: CART_TOGGLE_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CART_REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CART_CLEAR_ITEM,
  payload: item,
});
