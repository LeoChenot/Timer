import { RESET_STATES_CREATE_TIMER_MODAL, SET_STATE_CREATE_TIMER_MODAL } from '../actions/createTimerModal';

const initialState = {
  name: '',
  hours: '0',
  minutes: '0',
  seconds: '0',
  delay: undefined,
  selectedListId: undefined,
  responseMessage: '',
  loading: false,
};

const createTimerModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_CREATE_TIMER_MODAL: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    case RESET_STATES_CREATE_TIMER_MODAL: {
      return initialState;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default createTimerModalReducer;
