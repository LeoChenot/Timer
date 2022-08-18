import { SAVE_USER_DATA } from '../actions/user';

const initialState = {
  auth: false,
  id: undefined,
  email: undefined,
  created_at: undefined,
  updated_at: undefined,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        ...state,
        auth: true,
        id: action.user.id,
        email: action.user.email,
        created_at: action.user.created_at,
        updated_at: action.user.updated_at,
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
