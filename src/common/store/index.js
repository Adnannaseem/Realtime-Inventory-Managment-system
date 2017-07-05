import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AuthReducer from './reducers/AuthReducer';
import AddProductReducer from './reducers/AddProductReducer';
import AddStoreReducer from './reducers/AddStoreReducer';

export const rootReducer = combineReducers({
    AuthReducer,
    AddProductReducer,
    AddStoreReducer
});
const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, middleware);


export default store;
