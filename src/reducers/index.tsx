import { combineReducers } from 'redux';
import simpleReducer from './simple';
import { isFetching, fetchedError, fetched } from './app';

export default combineReducers({
    simpleReducer,
    isFetching,
    fetchedError,
    fetched
});
