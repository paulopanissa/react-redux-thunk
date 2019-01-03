import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const enchanters = applyMiddleware(thunk);

export default () => {
    return createStore(
        rootReducer,
        enchanters
    );
}
