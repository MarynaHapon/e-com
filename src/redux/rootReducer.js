// Core
import { combineReducers } from 'redux';

// Other
import { userReducer } from './user';
import { cartReducer } from './cart';

export const roodReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

