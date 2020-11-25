import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootreducer from './reducer/index';

const store = createStore(
  rootreducer,
  applyMiddleware(logger, promiseMiddleware),
);

export default store;
