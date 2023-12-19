import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { likesReducer } from './reducer/likesReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

export {
  store,
};