import {
  DECREASE_TIMER_BY_ID,
  DELETE_INTERVAL_ID,
  RESET_TIMER_BY_ID,
  SAVE_INTERVAL_ID,
  SAVE_TIMER_LIST_RESPONSE,
  START_TIMER_BY_ID,
  STOP_TIMER_BY_ID,
} from '../actions/timers';

const initialState = {
  timerListResponse: [
    {
      id: 1,
      name: 'Spaghettis',
      delay: 360,
      currentDelay: 360,
      isActive: false,
      intervalId: undefined,
    },
    {
      id: 2,
      name: 'Coquillettes',
      delay: 420,
      currentDelay: 420,
      isActive: false,
      intervalId: undefined,
    },
    {
      id: 3,
      name: 'Farfalle',
      delay: 600,
      currentDelay: 600,
      isActive: false,
      intervalId: undefined,
    },
  ],
};

const timersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: true } : timer),
        ),
      };
    }
    case STOP_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: false } : timer),
        ),
      };
    }
    case RESET_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? {
            ...timer,
            currentDelay: timer.delay,
          } : timer),
        ),
      };
    }
    case DECREASE_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? {
            ...timer,
            currentDelay: timer.currentDelay - 1,
          } : timer),
        ),
      };
    }
    case SAVE_INTERVAL_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? {
            ...timer,
            intervalId: action.intervalId,
          } : timer),
        ),
      };
    }
    case DELETE_INTERVAL_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? {
            ...timer,
            intervalId: undefined,
          } : timer),
        ),
      };
    }
    case SAVE_TIMER_LIST_RESPONSE: {
      return {
        ...state,
        timerListResponse: action.timerListResponse,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default timersReducer;
