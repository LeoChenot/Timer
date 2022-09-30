import { RESET_STATES_DELETE_TIMER_MODAL, SET_STATE_DELETE_TIMER_MODAL } from '../actions/deleteTimerModal';

const initialState = {
  selectedListId: undefined,
  selectedTimer: undefined,
  responseMessage: '',
  loading: false,
};

const deleteTimerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_DELETE_TIMER_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case RESET_STATES_DELETE_TIMER_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default deleteTimerModalReducer;
