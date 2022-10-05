import { combineReducers } from 'redux';
import createTimerModalReducer from './createTimerModal';
import loginModalReducer from './loginModal';
import modalsReducer from './modals';
import registerModalReducer from './registerModal';
import userReducer from './user';
import deleteTimerModalReducer from './deleteTimerModal';
import createListModalReducer from './createListModal';
import editTimerModalReducer from './editTimerModal';
import deleteListModalReducer from './deleteListModal';
import homeReducer from './home';

const rootReducer = combineReducers({
  userReducer,
  modalsReducer,
  loginModalReducer,
  registerModalReducer,
  createListModalReducer,
  createTimerModalReducer,
  deleteTimerModalReducer,
  editTimerModalReducer,
  deleteListModalReducer,
  homeReducer,
});

export default rootReducer;
