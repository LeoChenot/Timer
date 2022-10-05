import { SET_STATE_HOME, SET_STATE_TIMER_EXPO } from '../actions/home';

const initialState = {
  timer: {
    id: 1,
    name: 'Name of Timer',
    delay: 60,
    currentDelay: 60,
    isActive: false,
    intervalId: undefined,
  },
  responseMessage: '',
  loading: false,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_STATE_TIMER_EXPO: {
      return {
        ...state,
        timer: {
          ...state.timer,
          [action.state]: action.value,
        },
      };
    }
    case SET_STATE_HOME: {
      return {
        ...state,
        [action.state]: action.value,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default homeReducer;
