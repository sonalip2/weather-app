import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMziddleware = applyMiddleware(ReduxPromise)(createStore);

export default createStoreWithMziddleware;
