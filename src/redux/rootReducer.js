// Core
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Other
import { userReducer } from './user';
import { cartReducer } from './cart';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart',
  ]
};

const roodReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export const persistRoodReducer = persistReducer(
  persistConfig,
  roodReducer,
);
