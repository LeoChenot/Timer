import { RESET_STATES_EDIT_TIMER_MODAL, SET_STATE_EDIT_TIMER_MODAL } from '../actions/editTimerModal';

const initialState = {
  name: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  nameHelperText: ' ',
  delayHelperText: ' ',
  delay: undefined,
  selectedListId: undefined,
  selectedTimer: undefined,
  responseMessage: '',
  loading: false,
};

const editTimerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_EDIT_TIMER_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case RESET_STATES_EDIT_TIMER_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default editTimerModalReducer;
