import { SAVE_LOGOUT, SAVE_NEW_TIMER_LISTS, SAVE_USER_DATA } from '../actions/user';

const initialState = {
  auth: false,
  id: undefined,
  email: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  timerLists: undefined,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        ...state,
        auth: true,
        id: action.user.id,
        email: action.user.email,
        createdAt: action.user.created_at,
        updatedAt: action.user.updated_at,
      };
    }
    case SAVE_LOGOUT: {
      return {
        ...state,
        auth: false,
        id: undefined,
        email: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        timerLists: undefined,
      };
    }
    case SAVE_NEW_TIMER_LISTS: {
      return {
        ...state,
        timerLists: action.newTimerLists.map((lists) => ({
          ...lists,
          timers: lists.timers.map((timer) => ({
            id: timer.id,
            name: timer.name,
            delay: timer.delay,
            currentDelay: timer.delay,
            isActive: false,
            intervalId: undefined,
          })),
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

export default userReducer;
