// Other
import {
  CART_TOGGLE_VISIBILITY,
  CART_ADD_ITEM,
} from '../cart';

export const toggleCartVisibility = () => ({
  type: CART_TOGGLE_VISIBILITY,
});

export const addItemToCart = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
});
