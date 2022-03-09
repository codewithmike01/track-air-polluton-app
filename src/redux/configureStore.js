/* eslint-disable object-curly-newline */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import country from './Country/countries';
import pollutionReducer from './POLLUTION/pollution';

const rootReducer = combineReducers({
  country_name: country,
  pollution: pollutionReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

export default store;
