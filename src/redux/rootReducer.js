// Core
import { combineReducers } from 'redux';

// Other
import { userReducer } from './user';

export const roodReducer = combineReducers({
  user: userReducer,
});

