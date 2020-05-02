// Core
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

// Other
import { persistRoodReducer } from '../redux/rootReducer';

const middlewares = [
  logger,
];

export const store = createStore(persistRoodReducer, applyMiddleware(
  ...middlewares
));

export const persistor = persistStore(store);
