import {createStore,applyMiddleware, compose  } from 'redux'
import rootReducer from './RootReducer';
//import ReduxThunk from 'redux-thunk'
import rootSage from './RootSaga'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
//const store= createStore(rootReducer, applyMiddleware(ReduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store= createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    
sagaMiddleware.run(rootSage);

export default store;