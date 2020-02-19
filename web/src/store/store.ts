import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

let store: Store<any, any>;

const ReactReduxDevTools =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// applying dev tools to chrome only
if (window.navigator.userAgent.includes('Chrome') && ReactReduxDevTools) {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ReactReduxDevTools),
    );
} else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
}

export default store;
