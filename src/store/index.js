// Core
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

// Other
import { persistRoodReducer } from '../redux/rootReducer';

const middlewares = [ thunk ];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(persistRoodReducer, applyMiddleware(
  ...middlewares
));

export const persistor = persistStore(store);
