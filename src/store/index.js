import { createStore, applyMiddleware, compose } from 'redux';
import authMW from '../middlewares/authMW';
import fetchTimerMW from '../middlewares/fetchTimerMW';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    fetchTimerMW,
    authMW,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
