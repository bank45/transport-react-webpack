import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reduser from './reducers';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    reduser,
    composeEnhancers(
        applyMiddleware(thunk)
    ));

export default store;
