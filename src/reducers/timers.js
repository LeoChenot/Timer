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
  timerListResponse: undefined,
};

const timersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: true } : timer),
        ),
      };
    }
    case STOP_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: false } : timer),
        ),
      };
    }
    case RESET_TIMER_BY_ID: {
      return {
        ...state,
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
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
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
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
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
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
        timerListResponse: state.timerListResponse && state.timerListResponse.map(
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
        timerListResponse: action.timerListResponse.map((timer) => ({
          id: timer.id,
          name: timer.name,
          delay: timer.delay,
          currentDelay: timer.delay,
          isActive: false,
          intervalId: undefined,
        })),
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
