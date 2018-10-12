import { combineReducers } from 'redux';
import search from './search';
import xkcd from './xkcd';

export default combineReducers({ search, xkcd });
