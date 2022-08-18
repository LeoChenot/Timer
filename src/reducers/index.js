import { combineReducers } from 'redux';
import loginModalReducer from './loginModal';
import modalsReducer from './modals';
import registerModalReducer from './registerModal';
import timersReducer from './timers';
import userReducer from './user';

const rootReducer = combineReducers({
  timersReducer,
  userReducer,
  modalsReducer,
  loginModalReducer,
  registerModalReducer,
});

export default rootReducer;
