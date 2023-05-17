import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { reducers } from './reducers/index';

export const store = createStore(reducers, {}, applyMiddleware(logger));
