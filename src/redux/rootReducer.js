// Core
import { combineReducers } from 'redux';

// Other
import { userReducer } from './user/userReducer';

export const roodReducer = combineReducers({
  user: userReducer,
});

