import { combineReducers } from 'redux';
import createTimerModalReducer from './createTimerModal';
import loginModalReducer from './loginModal';
import modalsReducer from './modals';
import registerModalReducer from './registerModal';
import timersReducer from './timers';
import userReducer from './user';
import deleteTimerModalReducer from './deleteTimerModal';
import createListModalReducer from './createListModal';
import editTimerModalReducer from './editTimerModal';
import deleteListModalReducer from './deleteListModal';

const rootReducer = combineReducers({
  timersReducer,
  userReducer,
  modalsReducer,
  loginModalReducer,
  registerModalReducer,
  createListModalReducer,
  createTimerModalReducer,
  deleteTimerModalReducer,
  editTimerModalReducer,
  deleteListModalReducer,
});

export default rootReducer;
