// Core
import { combineReducers } from 'redux';

// Other
import { userReducer } from './user';
import { cardReducer } from './cart';

export const roodReducer = combineReducers({
  user: userReducer,
  cart: cardReducer,
});

