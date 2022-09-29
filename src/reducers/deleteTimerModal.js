import { SELECT_LIST_ID, SELECT_TIMER } from '../actions/deleteTimerModal';

const initialState = {
  selectedListId: undefined,
  selectedTimer: undefined,
};

const deleteTimerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default deleteTimerModalReducer;
