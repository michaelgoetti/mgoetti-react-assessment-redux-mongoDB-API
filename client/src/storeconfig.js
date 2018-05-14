import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

const middleware = applyMiddleware(promiseMiddleware(), logger);
// const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(rootReducer, middleware);

export default store;