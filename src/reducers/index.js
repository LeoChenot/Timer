import { combineReducers } from 'redux';
import timersReducer from './timers';

const rootReducer = combineReducers({
  timersReducer,
});

export default rootReducer;
