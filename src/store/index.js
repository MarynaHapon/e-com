// Core
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist';

// Other
import { persistRoodReducer } from '../redux/rootReducer';
import { fetchCollectionAsync } from '../redux/shop/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(persistRoodReducer, applyMiddleware(
  ...middlewares
));

sagaMiddleware.run(fetchCollectionAsync);

export const persistor = persistStore(store);
