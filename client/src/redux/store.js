import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './reducers/userReducers';
import { serversListReducer } from './reducers/serversReducer';

//  App reducers
const reducer = combineReducers({
  userLogin: userLoginReducer,
  serversList: serversListReducer,
});

//  Check if user login info is saved in localstorage
const userLoginFromStorage = localStorage.getItem('userLogin') ? JSON.parse(localStorage.getItem('userLogin')) : {};

//  Initial state on app load
const INITIAL_STATE = {
  userLogin: userLoginFromStorage,
};

//  Redux middlewares
const middleware = [thunk];

//  Setup redux dev tools for development mode
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

//  Build redux store
const store = createStore(reducer, INITIAL_STATE, enhancer);

export default store;
