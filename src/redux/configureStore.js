/* eslint-disable object-curly-newline */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import country from './Country/countries';
import townReducer from './Town/town';

const rootReducer = combineReducers({
  country_name: country,
  pollution: townReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
