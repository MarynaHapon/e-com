// Core
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Other
import { roodReducer } from '../redux/rootReducer';

const middlewares = [
  logger,
];

export const store = createStore(roodReducer, applyMiddleware(
  ...middlewares
));
