import { SET_NEW_BOOLEAN, SET_NEW_STRING, TOGGLE_BOOLEAN } from '../actions/loginModal';

const initialState = {
  loginLoading: false,
  email: '',
  password: '',
  showPassword: false,
};

const loginModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STRING: {
      return {
        ...state,
        [action.state]: action.newString,
      };
    }
    case SET_NEW_BOOLEAN: {
      return {
        ...state,
        [action.state]: action.newBoolean,
      };
    }
    case TOGGLE_BOOLEAN: {
      return {
        ...state,
        [action.state]: !state[action.state],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default loginModalReducer;
