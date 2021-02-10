import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension'
import RootSaga from '../RootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,undefined,
    applyMiddleware(sagaMiddleware));

     sagaMiddleware.run(RootSaga)

export default store;

