import { createStore, applyMiddleware, compose } from 'redux';
import authMW from '../middlewares/authMW';
import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMW,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
