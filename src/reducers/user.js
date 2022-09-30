import {
  SAVE_LISTS,
  SAVE_LOGOUT,
  SAVE_USER,
  SET_STATE_TIMER,
} from '../actions/user';

const initialState = {
  auth: false,
  id: undefined,
  email: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  lists: undefined,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
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
      return initialState;
    }
    case SAVE_LISTS: {
      return {
        ...state,
        lists: action.lists.map((list) => ({
          ...list,
          timers: list.timers.map((timer) => ({
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
    case SET_STATE_TIMER: {
      return {
        ...state,
        lists: state.lists && state.lists.map(
          (list) => (list.id === action.listId ? {
            ...list,
            timers: list.timers.map(
              (timer) => (timer.id === action.timerId ? {
                ...timer,
                [action.state]: action.value,
              } : timer),
            ),
          } : list),
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

export default userReducer;
