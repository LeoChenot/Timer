import {
  SELECT_LIST_ID, SELECT_TIMER, SET_NEW_DELAY, SET_NEW_STRING,
} from '../actions/editTimerModal';

const initialState = {
  name: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  delay: undefined,
  selectedListId: undefined,
  selectedTimer: undefined,
};

const editTimerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STRING: {
      return {
        ...state,
        [action.state]: action.newString,
      };
    }
    case SELECT_LIST_ID: {
      return {
        ...state,
        selectedListId: action.listId,
      };
    }
    case SELECT_TIMER: {
      return {
        ...state,
        selectedTimer: action.timer,
      };
    }
    case SET_NEW_DELAY: {
      return {
        ...state,
        delay: action.newDelay,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default editTimerModalReducer;
