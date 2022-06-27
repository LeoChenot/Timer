import {
  DECREASE_TIMER_BY_ID,
  DELETE_INTERVAL_ID,
  RESET_TIMER_BY_ID,
  SAVE_INTERVAL_ID,
  START_TIMER_BY_ID,
  STOP_TIMER_BY_ID,
} from '../actions/timers';

const initialState = {
  timersData: [
    {
      id: 1,
      name: 'Coquillettes',
      delay: 300,
      currentDelay: 300,
      isActive: false,
      intervalId: undefined,
    },
    {
      id: 2,
      name: 'Spaghetti',
      delay: 540,
      currentDelay: 540,
      isActive: false,
      intervalId: undefined,
    },
    {
      id: 3,
      name: 'Test',
      delay: 3600,
      currentDelay: 3600,
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
        timersData: state.timersData.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: true } : timer),
        ),
      };
    }
    case STOP_TIMER_BY_ID: {
      return {
        ...state,
        timersData: state.timersData.map(
          (timer) => (timer.id === action.timerId ? { ...timer, isActive: false } : timer),
        ),
      };
    }
    case RESET_TIMER_BY_ID: {
      return {
        ...state,
        timersData: state.timersData.map(
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
        timersData: state.timersData.map(
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
        timersData: state.timersData.map(
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
        timersData: state.timersData.map(
          (timer) => (timer.id === action.timerId ? {
            ...timer,
            intervalId: undefined,
          } : timer),
        ),
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
