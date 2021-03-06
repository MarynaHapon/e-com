// Core
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Other
import { reducer } from './user';
import { cartReducer } from './cart';
import { directoryReducer } from './directory';
import { shopReducer } from './shop';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart',
  ]
};

const roodReducer = combineReducers({
  user: reducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export const persistRoodReducer = persistReducer(
  persistConfig,
  roodReducer,
);
